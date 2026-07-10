/**
 * Cargador del catálogo de componentes.
 * Lee catalog/json/components.json generado por el script de build.
 * PRD-02: Sistema de catalogación de componentes
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

let cache = null

export function loadCatalog() {
  if (cache) return cache

  try {
    const path = join(__dirname, '..', '..', 'catalog', 'json', 'components.json')
    const raw = readFileSync(path, 'utf-8')
    cache = JSON.parse(raw)
    return cache
  } catch (e) {
    console.warn('[catalog] No se pudo cargar catalog/json/components.json:', e.message)
    return { components: [], categories: [] }
  }
}

export function getComponents(filters = {}) {
  const { components } = loadCatalog()

  return components.filter((c) => {
    if (filters.category && c.category !== filters.category) return false
    if (filters.tags) {
      const required = filters.tags.split(',')
      if (!required.every((t) => c.tags?.includes(t))) return false
    }
    if (filters.useCase && !c.useCases?.includes(filters.useCase)) return false
    if (filters.style && !c.styles?.styleTags?.includes(filters.style)) return false
    return true
  })
}

export function getComponentById(id) {
  const { components } = loadCatalog()
  return components.find((c) => c.id === id) || null
}

export function getCategories() {
  const { categories } = loadCatalog()
  return categories
}