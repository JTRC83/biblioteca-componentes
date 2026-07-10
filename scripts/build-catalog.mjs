/**
 * Script de build del catálogo.
 * Lee los componentes via los barrel files (index.js) de cada categoría.
 * Genera:
 *   - catalog/json/components.json  (metadatos indexados + enriquecidos)
 *   - catalog/md/*.md               (documentación por categoría)
 *
 * PRD-02: Sistema de catalogación de componentes
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join, basename, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const componentsDir = join(root, 'library', 'src', 'components')

// ─── Heurísticas de enriquecimiento ───────────────────────────

const CATEGORY_USE_CASES = {
  buttons: ['cta', 'action-button', 'form-submit', 'navigation'],
  checkboxes: ['form-input', 'settings-toggle', 'selection'],
  toggles: ['settings-toggle', 'switch', 'on-off'],
  cards: ['content-card', 'product-card', 'profile-card', 'feature-card'],
  loaders: ['loading-state', 'skeleton', 'progress-indicator'],
  inputs: ['form-input', 'search', 'text-entry'],
  radios: ['form-input', 'selection', 'option-picker'],
  forms: ['form', 'contact', 'login', 'signup'],
  tooltips: ['info-hint', 'help-text', 'label-hint'],
  patterns: ['background-pattern', 'decorative', 'texture'],
  backgrounds: ['section-background', 'hero-background', 'decorative'],
  animations: ['decoration', 'attention', 'transition-effect'],
  analog: ['hardware-control', 'physical-ui', 'skeuomorphic'],
  navbars: ['navigation', 'menu', 'header']
}

const TAG_TO_USE_CASE = {
  'cta': 'cta', 'submit': 'form-submit', 'social': 'social-share',
  'share': 'social-share', 'like': 'engagement', 'delete': 'destructive-action',
  'edit': 'form-action', 'copy': 'utility-action', 'download': 'file-action',
  'play': 'media-control', 'loading': 'loading-state', 'glass': 'glassmorphism',
  'neon': 'neon', '3d': '3d', 'gradient': 'gradient', 'glow': 'glow-effect',
  'hover': 'hover-interaction', 'animated': 'animation', 'flip': 'flip-animation',
  'radio': 'option-picker', 'toggle': 'on-off', 'tooltip': 'info-hint',
  'card': 'content-card', 'menu': 'navigation', 'glassmorphism': 'glassmorphism',
  'neobrutalism': 'neobrutalism', 'skeuomorphic': 'skeuomorphic',
  'minimal': 'minimal', 'dark': 'dark-mode'
}

const TAG_TO_STYLE = {
  'glass': 'glassmorphism', 'glassmorphism': 'glassmorphism',
  'neon': 'neon', '3d': '3d', 'gradient': 'gradient', 'glow': 'glow',
  'neobrutalism': 'neobrutalism', 'skeuomorphic': 'skeuomorphic',
  'minimal': 'minimal', 'retro': 'retro', 'animated': 'animated',
  'css-only': 'css-only', 'physical': 'skeuomorphic', 'industrial': 'industrial',
  'organic': 'organic', 'doodle': 'doodle', 'terminal': 'terminal',
  'dark': 'dark', 'neumorphic': 'neumorphic', 'squircle': 'squircle'
}

function detectStyleTagsFromCSS(css) {
  const tags = new Set()
  if (/backdrop-filter/i.test(css)) tags.add('glassmorphism')
  if (/text-shadow.*(?:#|rgb|hsl)/i.test(css) || /box-shadow.*0\s+0\s+\d+/i.test(css)) tags.add('neon')
  if (/perspective|rotateX|rotateY|translateZ|transform-style.*preserve-3d/i.test(css)) tags.add('3d')
  if (/(linear|radial|conic)-gradient/i.test(css)) tags.add('gradient')
  if (/drop-shadow/i.test(css) || /box-shadow.*0\s+0\s+\d{2,}/i.test(css)) tags.add('glow')
  if (/box-shadow.*\d+px\s+\d+px\s+0\s+0/i.test(css)) tags.add('neobrutalism')
  if (/box-shadow.*inset.*inset/i.test(css)) tags.add('neumorphic')
  if (/@keyframes|animation\s*:/i.test(css)) tags.add('animated')
  if (/transition\s*:/i.test(css)) tags.add('transition')
  if (/mask-image|mask\s*:/i.test(css)) tags.add('mask')
  if (/filter\s*:/i.test(css) && !/filter:\s*none/i.test(css)) tags.add('filter')
  return Array.from(tags)
}

function detectColorScheme(css) {
  const bgMatch = css.match(/background(?:-color)?\s*:\s*(#[0-9a-f]{3,8}|rgb|rgba|hsl|hsla)/i)
  if (bgMatch) {
    const color = bgMatch[1].toLowerCase()
    if (/^#(0|1|2|3)/.test(color) || /rgba?\(\s*[0-4]\d/i.test(color)) return 'dark'
    if (/^#(f|e|d|c|b)/.test(color) || /rgba?\(\s*[12]\d\d/i.test(color)) return 'light'
  }
  return 'mixed'
}

function detectDominantColors(css) {
  const colors = new Set()
  const hexMatches = css.match(/#[0-9a-f]{3,8}\b/gi) || []
  hexMatches.forEach((c) => {
    const lower = c.toLowerCase()
    if (!/^#(000|fff|0000|ffff)/i.test(lower)) colors.add(lower)
  })
  return Array.from(colors).slice(0, 5)
}

function detectComplexity(css, html) {
  let score = 0
  if (css.length > 3000) score += 2
  else if (css.length > 1000) score += 1
  const keyframeCount = (css.match(/@keyframes/gi) || []).length
  score += Math.min(keyframeCount, 3)
  if (/perspective|preserve-3d/i.test(css)) score += 2
  if (/<svg/i.test(html)) score += 1
  const pseudoCount = (css.match(/::(?:before|after)/gi) || []).length
  score += Math.min(pseudoCount, 2)
  const selectorCount = (css.match(/\.[\w-]+\s*[{,]/g) || []).length
  if (selectorCount > 20) score += 1
  if (score >= 7) return 'high'
  if (score >= 3) return 'medium'
  return 'low'
}

function detectInteractions(css, html) {
  const interactions = new Set()
  if (/:hover/i.test(css)) interactions.add('hover')
  if (/:active/i.test(css)) interactions.add('click')
  if (/:checked/i.test(css) || /input.*type.*checkbox|input.*type.*radio/i.test(html)) interactions.add('toggle')
  if (/:focus/i.test(css)) interactions.add('focus')
  if (/@keyframes|animation\s*:/i.test(css)) interactions.add('animation')
  if (/transition\s*:/i.test(css)) interactions.add('transition')
  if (/transform.*rotate|transform.*scale|transform.*translate/i.test(css)) interactions.add('transform')
  return Array.from(interactions)
}

function detectDarkMode(css) {
  if (/prefers-color-scheme.*dark/i.test(css)) return true
  return false
}

function generateDescription(name, category, tags, css, html) {
  const parts = []
  const catDescriptions = {
    buttons: 'Botón', checkboxes: 'Checkbox', toggles: 'Toggle switch',
    cards: 'Tarjeta', loaders: 'Loader', inputs: 'Campo de entrada',
    radios: 'Radio button', forms: 'Formulario', tooltips: 'Tooltip',
    patterns: 'Patrón de fondo', backgrounds: 'Fondo animado',
    animations: 'Animación', analog: 'Componente analógico', navbars: 'Barra de navegación'
  }
  const base = catDescriptions[category] || 'Componente'
  parts.push(base)

  const styleDescriptors = {
    '3d': 'con efecto 3D', 'gradient': 'con gradiente', 'glass': 'con efecto glassmorphism',
    'neon': 'con efecto neón', 'glow': 'con efecto glow', 'animated': 'animado',
    'hover': 'con interacción hover', 'flip': 'con efecto flip', 'minimal': 'minimalista',
    'retro': 'retro', 'dark': 'en modo oscuro', 'neobrutalism': 'neo-brutalista',
    'skeuomorphic': 'esquemórfico', 'physical': 'físico realista'
  }
  const descriptors = []
  for (const tag of tags) {
    if (styleDescriptors[tag]) descriptors.push(styleDescriptors[tag])
  }
  if (descriptors.length > 0) parts.push(descriptors.slice(0, 2).join(' y '))

  if (name && !parts.join(' ').includes(name.toLowerCase())) {
    const nameWords = name.toLowerCase().split(/\s+/)
    const baseWords = base.toLowerCase().split(/\s+/)
    const extra = nameWords.filter((w) => !baseWords.includes(w) && w.length > 2)
    if (extra.length > 0) parts.push(`"${name}"`)
  }
  return parts.join(' ').replace(/\s+/g, ' ').trim()
}

function generateAdaptationNotes(css, tags, category) {
  const notes = []
  if (/--[a-z]/i.test(css)) notes.push('Usa variables CSS (--var) para personalizar colores y tamaños fácilmente.')
  if (/\b\d+px\b/i.test(css) && !/vmin|vmax|em|rem|%|var\(/i.test(css)) {
    notes.push('Usa tamaños fijos en px. Convertir a rem/em o variables para responsive.')
  } else if (/vmin|vmax/i.test(css)) {
    notes.push('Usa unidades vmin/vmax. Convertir a px o rem para tamaños consistentes.')
  } else if (/em|rem/i.test(css)) {
    notes.push('Usa unidades relativas (em/rem). Ajustar font-size del contenedor para escalar.')
  }
  if (/#[0-9a-f]{3,8}/i.test(css) && !/--[a-z]/i.test(css)) {
    notes.push('Colores hardcodeados. Extraer a variables CSS para tematización.')
  }
  if (/@keyframes/i.test(css)) {
    notes.push('Animaciones CSS incluidas. Renombrar keyframes con prefijo único para evitar conflictos.')
  }
  if (/svg/i.test(css) || /<svg/i.test(css)) {
    notes.push('Contiene SVG inline. Modificar fill/stroke para adaptar colores.')
  }
  return notes.join(' ') || 'Componente CSS puro, adaptable cambiando colores y tamaños.'
}

function enrichComponent(comp) {
  const css = comp.css || ''
  const html = comp.html || ''
  const tags = comp.tags || []

  const cssStyleTags = detectStyleTagsFromCSS(css)
  const tagStyleTags = tags.map((t) => TAG_TO_STYLE[t]).filter(Boolean)
  const styleTags = Array.from(new Set([...cssStyleTags, ...tagStyleTags]))

  const useCases = new Set(CATEGORY_USE_CASES[comp.category] || [])
  tags.forEach((t) => { if (TAG_TO_USE_CASE[t]) useCases.add(TAG_TO_USE_CASE[t]) })

  const complexity = detectComplexity(css, html)
  const interactions = detectInteractions(css, html)
  const colorScheme = detectColorScheme(css)
  const dominantColors = detectDominantColors(css)
  const description = comp.description || generateDescription(comp.name, comp.category, tags, css, html)
  const adaptationNotes = comp.adaptationNotes || generateAdaptationNotes(css, tags, comp.category)
  const darkMode = comp.darkMode || detectDarkMode(css)

  return {
    ...comp,
    description,
    useCases: comp.useCases?.length ? comp.useCases : Array.from(useCases),
    complexity: comp.complexity !== 'low' ? comp.complexity : complexity,
    interactions: comp.interactions?.length ? comp.interactions : interactions,
    styles: { styleTags, colorScheme, dominantColors },
    darkMode,
    adaptationNotes,
    adaptable: comp.adaptable !== false
  }
}

// ─── Loader: leer desde barrel files ──────────────────────────

function loadComponentFromFile(filePath) {
  const raw = readFileSync(filePath, 'utf-8')
  const module = { exports: {} }
  // eslint-disable-next-line no-eval
  const fn = eval(raw.replace('export default', 'module.exports ='))
  return {
    id: fn.id,
    name: fn.name,
    category: fn.category,
    tags: fn.tags || [],
    author: fn.author || 'unknown',
    source: fn.source || 'uiverse.io',
    html: fn.html || '',
    css: fn.css || '',
    description: fn.description || '',
    useCases: fn.useCases || [],
    complexity: fn.complexity || 'low',
    responsive: fn.responsive !== false,
    darkMode: fn.darkMode || false,
    interactions: fn.interactions || [],
    styles: fn.styles || { styleTags: [] },
    adaptable: fn.adaptable !== false,
    adaptationNotes: fn.adaptationNotes || ''
  }
}

function loadCategoryFromBarrel(categoryDir) {
  const catName = basename(categoryDir)
  const indexPath = join(categoryDir, 'index.js')

  if (!existsSync(indexPath)) return []

  const raw = readFileSync(indexPath, 'utf-8')
  // Parsear imports: import X from './X.js'  OR  import X from '../other/X.js'
  const importRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g
  const imports = []
  let match
  while ((match = importRegex.exec(raw)) !== null) {
    imports.push({ name: match[1], path: match[2] })
  }

  const components = []
  for (const imp of imports) {
    // Resolver ruta relativa al index.js
    const resolvedPath = resolve(dirname(indexPath), imp.path)
    if (existsSync(resolvedPath)) {
      const comp = loadComponentFromFile(resolvedPath)
      components.push(comp)
    }
  }
  return components
}

// ─── Build ────────────────────────────────────────────────────

function build() {
  const categories = []
  const allComponents = []
  const seenIds = new Set()

  const dirs = readdirSync(componentsDir).filter((d) =>
    statSync(join(componentsDir, d)).isDirectory()
  )

  for (const dir of dirs) {
    const comps = loadCategoryFromBarrel(join(componentsDir, dir))
    const enriched = comps.map(enrichComponent)

    // Deduplicar por id (un componente puede aparecer en múltiples barrels)
    const unique = []
    for (const c of enriched) {
      if (!seenIds.has(c.id)) {
        seenIds.add(c.id)
        unique.push(c)
      }
    }

    allComponents.push(...unique)
    categories.push({
      slug: dir,
      name: dir.charAt(0).toUpperCase() + dir.slice(1),
      count: unique.length
    })
  }

  const catalog = {
    generatedAt: new Date().toISOString(),
    total: allComponents.length,
    categories,
    components: allComponents
  }

  // JSON
  const jsonPath = join(root, 'catalog', 'json', 'components.json')
  writeFileSync(jsonPath, JSON.stringify(catalog, null, 2))
  console.log(`[catalog] JSON: ${allComponents.length} componentes → ${jsonPath}`)

  // MD por categoría
  for (const cat of categories) {
    const comps = allComponents.filter((c) => c.category === cat.slug)
    const lines = [
      `# ${cat.name}`,
      '',
      `${cat.count} componentes`,
      '',
      '| ID | Nombre | Tags | Estilo | Complejidad | Interacciones | Descripción |',
      '|----|--------|------|--------|------------|-------------|-------------|'
    ]
    for (const c of comps) {
      const tags = (c.tags || []).join(', ') || '—'
      const style = (c.styles?.styleTags || []).join(', ') || '—'
      const complexity = c.complexity || '—'
      const interactions = (c.interactions || []).join(', ') || '—'
      const desc = c.description || '—'
      lines.push(`| \`${c.id}\` | ${c.name} | ${tags} | ${style} | ${complexity} | ${interactions} | ${desc} |`)
    }
    lines.push('')
    const mdPath = join(root, 'catalog', 'md', `${cat.slug}.md`)
    writeFileSync(mdPath, lines.join('\n'))
    console.log(`[catalog] MD: ${cat.slug}.md (${cat.count} componentes)`)
  }

  // Index MD
  const indexLines = [
    '# Catálogo de Componentes',
    '',
    `Generado: ${catalog.generatedAt}`,
    '',
    `**Total: ${catalog.total} componentes en ${categories.length} categorías**`,
    '',
    '## Resumen por categoría',
    '',
    '| Categoría | Componentes | Estilos detectados | Archivo |',
    '|-----------|------------|-------------------|---------|'
  ]
  for (const cat of categories) {
    const catComps = allComponents.filter((c) => c.category === cat.slug)
    const allStyles = new Set()
    catComps.forEach((c) => (c.styles?.styleTags || []).forEach((s) => allStyles.add(s)))
    const styles = Array.from(allStyles).join(', ') || '—'
    indexLines.push(`| ${cat.name} | ${cat.count} | ${styles} | [${cat.slug}.md](./${cat.slug}.md) |`)
  }
  indexLines.push('')
  indexLines.push('## Estilos disponibles')
  indexLines.push('')
  const allStyleTags = new Set()
  allComponents.forEach((c) => (c.styles?.styleTags || []).forEach((s) => allStyleTags.add(s)))
  indexLines.push(Array.from(allStyleTags).map((s) => `- \`${s}\``).join('\n'))
  indexLines.push('')
  indexLines.push('## Casos de uso')
  indexLines.push('')
  const allUseCases = new Set()
  allComponents.forEach((c) => (c.useCases || []).forEach((u) => allUseCases.add(u)))
  indexLines.push(Array.from(allUseCases).sort().map((u) => `- \`${u}\``).join('\n'))
  indexLines.push('')
  const indexPath = join(root, 'catalog', 'md', 'index.md')
  writeFileSync(indexPath, indexLines.join('\n'))
  console.log(`[catalog] MD index → ${indexPath}`)
}

build()