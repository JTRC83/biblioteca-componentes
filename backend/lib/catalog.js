/**
 * Cargador del catálogo de componentes.
 * Lee catalog/json/components.json generado por el script de build.
 * PRD-02: Sistema de catalogación de componentes
 * PRD-03: Backend Next.js + API REST del catálogo
 *
 * ESM module — usa import.meta.url para resolver rutas.
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Ruta al catálogo desde el monorepo root: backend/lib -> ../../catalog/json/components.json
const CATALOG_PATH = join(__dirname, '..', '..', 'catalog', 'json', 'components.json')

let cache = null

/**
 * Carga el catálogo completo desde disco (con caché en memoria).
 * @returns {{ generatedAt: string, total: number, categories: Array, components: Array }}
 */
export function loadCatalog() {
  if (cache) return cache

  try {
    const raw = readFileSync(CATALOG_PATH, 'utf-8')
    cache = JSON.parse(raw)
    return cache
  } catch (e) {
    console.warn('[catalog] No se pudo cargar catalog/json/components.json:', e.message)
    return { generatedAt: null, total: 0, categories: [], components: [] }
  }
}

/**
 * Obtiene los componentes aplicando filtros.
 * @param {Object} filters
 * @param {string} [filters.category]   - slug de categoría (match exacto)
 * @param {string} [filters.tags]       - tags separados por coma (TODOS deben coincidir)
 * @param {string} [filters.useCase]    - caso de uso (debe estar en c.useCases)
 * @param {string} [filters.style]      - style tag (debe estar en c.styles.styleTags)
 * @param {string} [filters.complexity] - nivel de complejidad (low | medium | high)
 * @returns {Array} componentes que cumplen los filtros
 */
export function getComponents(filters = {}) {
  const { components } = loadCatalog()

  return components.filter((c) => {
    if (filters.category && c.category !== filters.category) return false

    if (filters.tags) {
      const required = filters.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
      const compTags = c.tags || []
      if (!required.every((t) => compTags.includes(t))) return false
    }

    if (filters.useCase && !(c.useCases || []).includes(filters.useCase)) return false

    if (filters.style && !((c.styles || {}).styleTags || []).includes(filters.style)) return false

    if (filters.complexity && c.complexity !== filters.complexity) return false

    return true
  })
}

/**
 * Obtiene un componente por su id, incluyendo html y css.
 * @param {string} id
 * @returns {Object|null}
 */
export function getComponentById(id) {
  const { components } = loadCatalog()
  return components.find((c) => c.id === id) || null
}

/**
 * Lista todas las categorías con conteo de componentes.
 * @returns {Array<{slug: string, name: string, count: number}>}
 */
export function getCategories() {
  const { categories, components } = loadCatalog()

  // Recalcular counts desde los componentes reales para mayor precisión
  const counts = {}
  for (const c of components) {
    counts[c.category] = (counts[c.category] || 0) + 1
  }

  return (categories || []).map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    count: counts[cat.slug] || cat.count || 0,
  }))
}

/**
 * Lista todos los style tags únicos across componentes.
 * @returns {Array<string>}
 */
export function getStyles() {
  const { components } = loadCatalog()
  const set = new Set()
  for (const c of components) {
    const tags = (c.styles || {}).styleTags || []
    for (const t of tags) set.add(t)
  }
  return [...set].sort()
}

/**
 * Lista todos los use cases únicos across componentes.
 * @returns {Array<string>}
 */
export function getUseCases() {
  const { components } = loadCatalog()
  const set = new Set()
  for (const c of components) {
    for (const u of c.useCases || []) set.add(u)
  }
  return [...set].sort()
}

/**
 * Búsqueda full-text sobre name, description, tags, id, author.
 * Case-insensitive.
 * @param {string} query
 * @returns {Array} componentes que coinciden con la búsqueda
 */
export function searchComponents(query) {
  const { components } = loadCatalog()
  if (!query || !query.trim()) return []

  const q = query.trim().toLowerCase()
  const terms = q.split(/\s+/).filter(Boolean)

  return components.filter((c) => {
    const haystack = [
      c.name || '',
      c.description || '',
      (c.tags || []).join(' '),
      c.id || '',
      c.author || '',
    ]
      .join(' ')
      .toLowerCase()

    // TODOS los términos deben aparecer en el haystack
    return terms.every((term) => haystack.includes(term))
  })
}

/**
 * Devuelve componentes paginados aplicando filtros.
 * @param {Object} filters  - mismos filtros que getComponents
 * @param {number} [page=1]
 * @param {number} [limit=20]
 * @returns {{ data: Array, total: number, page: number, limit: number, totalPages: number, hasMore: boolean }}
 */
export function getComponentsPaginated(filters = {}, page = 1, limit = 20) {
  const all = getComponents(filters)
  return paginate(all, page, limit)
}

/**
 * Estadísticas del catálogo.
 * @returns {{ total: number, byCategory: Object, byStyle: Object, byComplexity: Object }}
 */
export function getStats() {
  const { components, total } = loadCatalog()

  const byCategory = {}
  const byStyle = {}
  const byComplexity = {}

  for (const c of components) {
    byCategory[c.category] = (byCategory[c.category] || 0) + 1

    for (const s of (c.styles || {}).styleTags || []) {
      byStyle[s] = (byStyle[s] || 0) + 1
    }

    if (c.complexity) {
      byComplexity[c.complexity] = (byComplexity[c.complexity] || 0) + 1
    }
  }

  return {
    total: total || components.length,
    byCategory,
    byStyle,
    byComplexity,
  }
}

// --- Helpers internos ---

/**
 * Pagina un array de resultados.
 * @param {Array} items
 * @param {number} page
 * @param {number} limit
 * @returns {{ data: Array, total: number, page: number, limit: number, totalPages: number, hasMore: boolean }}
 */
function paginate(items, page, limit) {
  const safePage = Math.max(1, parseInt(page, 10) || 1)
  const safeLimit = Math.max(1, parseInt(limit, 10) || 20)
  const total = items.length
  const totalPages = Math.max(1, Math.ceil(total / safeLimit))
  const start = (safePage - 1) * safeLimit
  const data = items.slice(start, start + safeLimit)
  const hasMore = safePage < totalPages

  return { data, total, page: safePage, limit: safeLimit, totalPages, hasMore }
}