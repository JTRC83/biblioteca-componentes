/**
 * Playground — generador de webs de prueba usando el catálogo.
 * PRD-06: IA integration system
 *
 * Uso:
 *   node ai/playground.mjs "Necesito una landing para mi SaaS de gestión de tareas"
 *
 * El flow se imprime a stderr (para verlo en consola).
 * El HTML generado se imprime a stdout (redirigible a archivo):
 *   node ai/playground.mjs "..." > salida.html
 *
 * El playground simula el flujo de la IA:
 *   1. Parsea la descripción del cliente
 *   2. Matchea a una plantilla por keywords de industria
 *   3. Para cada sección, sugiere componentes del catálogo
 *   4. Genera un HTML básico con design tokens + CSS de componentes
 *   5. Valida el output con validate.mjs
 *   6. Imprime resultados
 *
 * ESM module — sin dependencias externas. Lee el catálogo y templates/index.json.
 */

import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { loadCatalog, getComponentById, getComponents } from '../lib/catalog.js'
import { validateWeb, extractCSS } from './validate.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', '..')
const TEMPLATES_INDEX = join(ROOT, 'templates', 'index.json')

// ─── Helpers de logging a stderr ──────────────────────────────

function log(...args) {
  process.stderr.write(args.join(' ') + '\n')
}

function logStep(n, title) {
  log(`\n── Paso ${n}: ${title} ${'─'.repeat(Math.max(0, 60 - title.length - String(n).length))}`)
}

function logTool(name, params) {
  log(`\n▶ ${name}(${JSON.stringify(params)})`)
}

function logResult(text, maxLines = 30) {
  const lines = text.split('\n')
  if (lines.length <= maxLines) {
    log(text)
  } else {
    log(lines.slice(0, maxLines).join('\n'))
    log(`... (${lines.length - maxLines} líneas más)`)
  }
}

// ─── 1. Parseo de descripción ─────────────────────────────────

/**
 * Extrae keywords e intención de la descripción del cliente.
 * @param {string} description
 * @returns {{ industries: string[], keywords: string[], colors: string[], sections: string[], style: string|null }}
 */
function parseDescription(description) {
  const desc = (description || '').toLowerCase()
  const words = desc.split(/\s+/).filter(Boolean)

  const industries = []
  const keywordMap = {
    saas: ['saas', 'software', 'gestión', 'gestion', 'tareas', 'crm', 'dashboard', 'productividad', 'startup', 'app web'],
    ecommerce: ['tienda', 'ecommerce', 'e-commerce', 'comercio', 'venta', 'producto', 'productos', 'comprar', 'cafetería', 'cafeteria', 'café', 'cafe', 'restaurant', 'moda', 'fashion', 'retail'],
    portfolio: ['portfolio', 'portafolio', 'diseñador', 'disenador', 'diseño', 'diseno', 'personal', 'cv', 'currículum', 'curriculum', 'trabajo', 'proyectos'],
    agency: ['agencia', 'agency', 'creativa', 'creativo', 'marketing', 'estudio', 'branding', 'publicidad'],
    app: ['app', 'móvil', 'movil', 'mobile', 'aplicación', 'aplicacion', 'ios', 'android', 'descarga', 'download'],
    blog: ['blog', 'artículos', 'articulos', 'noticias', 'editorial', 'contenido', 'escrito']
  }
  for (const [ind, kws] of Object.entries(keywordMap)) {
    if (kws.some((kw) => desc.includes(kw))) industries.push(ind)
  }

  // Colores mencionados
  const colorMap = {
    verde: '#22c55e', 'green': '#22c55e',
    azul: '#3b82f6', 'blue': '#3b82f6',
    rojo: '#ef4444', 'red': '#ef4444',
    naranja: '#f97316', 'orange': '#f97316', 'ámbar': '#f59e0b', 'ambar': '#f59e0b', 'amber': '#f59e0b',
    morado: '#a855f7', 'purple': '#a855f7', 'violeta': '#8b5cf6', 'magenta': '#ec4899',
    amarillo: '#eab308', 'yellow': '#eab308',
    rosa: '#ec4899', 'pink': '#ec4899',
    'café': '#78350f', 'cafe': '#78350f', 'coffee': '#78350f', 'marrón': '#78350f', 'marron': '#78350f', 'brown': '#78350f',
    negro: '#0a0a0c', 'black': '#0a0a0c',
    blanco: '#ffffff', 'white': '#ffffff'
  }
  const colors = []
  for (const [name, hex] of Object.entries(colorMap)) {
    if (desc.includes(name)) colors.push({ name, hex })
  }

  // Estilo
  let style = null
  const styleMap = {
    minimal: ['minimal', 'minimalista', 'limpio', 'clean', 'sencillo'],
    neon: ['neon', 'neón', 'brillante', 'glow', 'fluorescente'],
    oscuro: ['oscuro', 'dark', 'negro', 'noche'],
    moderno: ['moderno', 'modern', 'actual'],
    vibrante: ['vibrante', 'vibrant', 'colorido', 'llamativo']
  }
  for (const [s, kws] of Object.entries(styleMap)) {
    if (kws.some((kw) => desc.includes(kw))) { style = s; break }
  }

  return { industries, keywords: words, colors, sections: [], style }
}

// ─── 2. Selección de plantilla ────────────────────────────────

/**
 * Carga templates/index.json.
 * @returns {Array} lista de plantillas
 */
function loadTemplates() {
  if (!existsSync(TEMPLATES_INDEX)) return []
  return JSON.parse(readFileSync(TEMPLATES_INDEX, 'utf-8')).templates || []
}

/**
 * Selecciona la plantilla más adecuada por industria.
 * Fallbacks: blog → portfolio-minimal, unknown → saas-modern.
 * @param {{industries:string[], style:string|null}} parsed
 * @param {Array} templates
 * @returns {Object} plantilla seleccionada
 */
function selectTemplate(parsed, templates) {
  if (templates.length === 0) return null

  // Prioridad de industrias: la primera detectada
  for (const ind of parsed.industries) {
    // blog no tiene plantilla propia
    if (ind === 'blog') continue
    const match = templates.find((t) => (t.industry || []).includes(ind))
    if (match) return match
  }

  // Fallbacks
  if (parsed.industries.includes('blog')) {
    const portfolio = templates.find((t) => t.id === 'landing-portfolio-minimal')
    if (portfolio) return portfolio
  }
  // Por estilo
  if (parsed.style === 'oscuro') {
    return templates.find((t) => t.id === 'landing-agency-dark') || templates.find((t) => t.id === 'landing-saas-modern') || templates[0]
  }
  if (parsed.style === 'minimal') {
    return templates.find((t) => t.id === 'landing-portfolio-minimal') || templates[0]
  }
  // Default: saas-modern
  return templates.find((t) => t.id === 'landing-saas-modern') || templates[0]
}

// ─── 3. Sugerencia de componentes por sección ──────────────────

/**
 * Mapea tipos de sección a filtros de componente.
 * Heurística simple por nombre de sección.
 * @param {string} section
 * @returns {{useCase:string, category:string, query:string}}
 */
function sectionToFilter(section) {
  const s = section.toLowerCase()
  const map = {
    hero: { useCase: 'cta', category: 'buttons', query: 'cta button gradient' },
    cta: { useCase: 'cta', category: 'buttons', query: 'cta button' },
    features: { useCase: 'feature-card', category: 'cards', query: 'feature card' },
    services: { useCase: 'feature-card', category: 'cards', query: 'service card' },
    pricing: { useCase: 'feature-card', category: 'cards', query: 'pricing card' },
    testimonials: { useCase: 'profile-card', category: 'cards', query: 'profile card testimonial' },
    team: { useCase: 'profile-card', category: 'cards', query: 'team profile card' },
    projects: { useCase: 'content-card', category: 'cards', query: 'project card' },
    products: { useCase: 'product-card', category: 'cards', query: 'product card' },
    reviews: { useCase: 'profile-card', category: 'cards', query: 'review profile card' },
    newsletter: { useCase: 'form-input', category: 'inputs', query: 'input email newsletter' },
    about: { useCase: 'profile-card', category: 'cards', query: 'profile about' },
    contact: { useCase: 'form-input', category: 'inputs', query: 'contact form input' },
    footer: { useCase: 'social-share', category: 'buttons', query: 'social button' },
    screenshots: { useCase: 'content-card', category: 'cards', query: 'card image' },
    download: { useCase: 'cta', category: 'buttons', query: 'download button' }
  }
  return map[s] || { useCase: 'content-card', category: 'cards', query: section }
}

/**
 * Sugiere componentes para una sección usando filtros del catálogo.
 * Devuelve 1-3 componentes (sin HTML para aligerar).
 * @param {string} section
 * @returns {Array} componentes sugeridos
 */
function suggestComponentsForSection(section) {
  const f = sectionToFilter(section)
  let results = getComponents({ useCase: f.useCase })
  if (results.length === 0) results = getComponents({ category: f.category })
  // Tomar 1-3
  return results.slice(0, 3)
}

// ─── 4. Generación de HTML ─────────────────────────────────────

/**
 * Sanitiza un ID de componente para usarlo como prefijo CSS.
 * @param {string} id
 * @returns {string}
 */
function toPrefix(id) {
  return id.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase()
}

/**
 * Renombbra las clases de un bloque CSS añadiendo un prefijo.
 * Renombra selectores `.clase` y `.clase:hover` etc.
 * @param {string} css
 * @param {string} prefix
 * @returns {string}
 */
function prefixCSS(css, prefix) {
  // Renombrar selectores de clase: .clase → .prefijo-clase
  // No tocar #ids ni pseudo-elementos propios de tag
  return css.replace(/\.([a-zA-Z_][\w-]*)/g, (match, cls) => `.${prefix}-${cls}`)
}

/**
 * Renombra las clases en un bloque HTML añadiendo un prefijo.
 * @param {string} html
 * @param {string} prefix
 * @returns {string}
 */
function prefixHTML(html, prefix) {
  return html.replace(/class\s*=\s*["']([^"']+)["']/g, (match, classes) => {
    const renamed = classes
      .split(/\s+/)
      .filter(Boolean)
      .map((c) => `${prefix}-${c}`)
      .join(' ')
    return `class="${renamed}"`
  })
}

/**
 * Reemplaza colores hex hardcodeados en un CSS por variables del cliente.
 * Heurística: si el color coincide con el primary/secondary del componente original,
 * lo sustituye por var(--color-primary) / var(--color-secondary).
 * @param {string} css
 * @param {Array<string>} originalColors colores dominantes del componente
 * @returns {string}
 */
function adaptColors(css, originalColors) {
  let out = css
  const [primary, secondary] = originalColors
  if (primary) {
    const re = new RegExp(escapeRegExp(primary), 'gi')
    out = out.replace(re, 'var(--color-primary)')
  }
  if (secondary) {
    const re = new RegExp(escapeRegExp(secondary), 'gi')
    out = out.replace(re, 'var(--color-secondary)')
  }
  return out
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Construye el bloque :root de design tokens, sobreescribiendo con colores del cliente.
 * @param {Object} template plantilla
 * @param {Array} clientColors [{name, hex}]
 * @returns {string} CSS del :root
 */
function buildDesignTokens(template, clientColors) {
  const cs = template.colorScheme || {}
  const tokens = [
    `--color-primary: ${clientColors[0]?.hex || cs.primary || '#6366f1'};`,
    `--color-secondary: ${clientColors[1]?.hex || cs.secondary || '#8b5cf6'};`,
    `--color-background: ${cs.background || '#0a0a0c'};`,
    `--color-surface: ${cs.surface || '#18181c'};`,
    `--color-text: ${cs.text || '#f4f4f5'};`,
    `--color-text-secondary: ${cs.textSecondary || '#a1a1aa'};`,
    `--font-sans: ${(template.typography || {}).fontFamily || "'Inter', system-ui, sans-serif"};`,
    `--font-size-heading: ${(template.typography || {}).headingScale || 'clamp(2rem, 5vw, 4rem)'};`,
    `--line-height-base: ${(template.typography || {}).lineHeight || '1.6'};`,
    `--radius-md: 12px;`,
    `--radius-lg: 16px;`,
    `--space-section: 80px;`,
    `--space-element: 24px;`,
    `--space-gap: 16px;`
  ]
  return `:root {\n  ${tokens.join('\n  ')}\n}`
}

/**
 * Capitaliza un nombre de sección para titularlo.
 * @param {string} s
 * @returns {string}
 */
function titleCase(s) {
  const map = {
    hero: 'Hero', features: 'Características', pricing: 'Precios',
    testimonials: 'Testimonios', cta: 'Llamada a la acción', footer: 'Footer',
    products: 'Productos', reviews: 'Reseñas', newsletter: 'Newsletter',
    projects: 'Proyectos', about: 'Sobre mí', contact: 'Contacto',
    services: 'Servicios', team: 'Equipo', screenshots: 'Capturas', download: 'Descarga'
  }
  return map[s.toLowerCase()] || s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 * Genera el HTML completo de la web.
 * @param {Object} template
 * @param {Array} sectionComponents [{section, components:[{component, prefix}]}]
 * @param {Array} clientColors
 * @param {string} clientDesc descripción original (para title/description)
 * @returns {string} HTML completo
 */
function generateHTML(template, sectionComponents, clientColors, clientDesc) {
  const tokens = buildDesignTokens(template, clientColors)
  const fontHost = (template.typography || {}).fontFamily || "'Inter', system-ui, sans-serif"
  const fontFamily = fontHost.match(/'([^']+)'/)?.[1] || 'Inter'

  // CSS base
  const baseCSS = `
${tokens}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--font-sans);
  background: var(--color-background);
  color: var(--color-text);
  line-height: var(--line-height-base);
}
section {
  padding: var(--space-section) var(--space-element);
  max-width: 1200px;
  margin: 0 auto;
}
.section-title {
  font-size: var(--font-size-heading);
  line-height: 1.2;
  margin-bottom: var(--space-element);
  font-weight: 700;
}
.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-section);
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: var(--space-element);
}
.hero {
  text-align: center;
  padding-top: 120px;
  padding-bottom: 120px;
}
.hero h1 { font-size: var(--font-size-heading); margin-bottom: 24px; }
.hero p { font-size: 1.25rem; color: var(--color-text-secondary); max-width: 600px; margin: 0 auto 40px; }
`

  // CSS de cada componente
  const sectionsCSS = []
  for (const { section, components } of sectionComponents) {
    const block = [`/* === ${titleCase(section)} Section === */`]
    for (const { component, prefix } of components) {
      const adapted = adaptColors(component.css || '', component.styles?.dominantColors || [])
      block.push(`/* componente ${component.id} adaptado */`)
      block.push(prefixCSS(adapted, prefix))
    }
    sectionsCSS.push(block.join('\n'))
  }

  // HTML de cada sección
  const sectionsHTML = []
  for (const { section, components } of sectionComponents) {
    const isHero = section.toLowerCase() === 'hero'
    const cls = isHero ? 'hero' : ''
    const parts = [`<section class="${cls || section}">`]
    if (isHero) {
      parts.push(`  <h1>${titleCase(template.name)}</h1>`)
      parts.push(`  <p>${template.description}</p>`)
    } else {
      parts.push(`  <h2 class="section-title">${titleCase(section)}</h2>`)
      if (components.length > 1) parts.push('  <div class="grid">')
    }
    for (const { component, prefix } of components) {
      const html = prefixHTML(component.html || '', prefix)
      const indent = isHero || components.length <= 1 ? '  ' : '    '
      parts.push(indent + html.split('\n').join('\n' + indent))
    }
    if (!isHero && components.length > 1) parts.push('  </div>')
    parts.push('</section>')
    sectionsHTML.push(parts.join('\n'))
  }

  const title = clientDesc.slice(0, 60).trim() || template.name
  const description = template.description || 'Web generada con biblioteca-componentes'

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=${fontFamily}:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
${baseCSS}

${sectionsCSS.join('\n\n')}
  </style>
</head>
<body>
${sectionsHTML.join('\n\n')}
</body>
</html>
`
}

// ─── 5. Orquestación del flow ─────────────────────────────────

/**
 * Ejecuta el flow completo de generación y devuelve el HTML.
 * Imprime el paso a paso a stderr.
 * @param {string} description descripción del cliente
 * @returns {{ html: string, template: Object, validation: Object }}
 */
export async function generate(description) {
  logStep(1, 'Analizar la petición del cliente')
  log(`Descripción: "${description}"`)
  const parsed = parseDescription(description)
  log(`Industrias detectadas: ${parsed.industries.join(', ') || '(ninguna)'}`)
  log(`Colores detectados: ${parsed.colors.map((c) => `${c.name}=${c.hex}`).join(', ') || '(ninguno, se usarán los de la plantilla)'}`)
  log(`Estilo: ${parsed.style || '(sin detectar)'}`)

  logStep(2, 'Consultar plantillas disponibles')
  const templates = loadTemplates()
  logTool('list_templates', { industry: parsed.industries[0] || null })
  logResult(`${templates.length} plantilla(s) disponible(s):\n` + templates.map((t) =>
    `- ${t.id} | ${t.name} | industria: ${(t.industry || []).join('/')}`).join('\n'))

  logStep(3, 'Seleccionar la plantilla más adecuada')
  const template = selectTemplate(parsed, templates)
  if (!template) {
    log('✗ No se encontraron plantillas. Abortando.')
    return { html: '', template: null, validation: null }
  }
  log(`✓ Plantilla seleccionada: ${template.id}`)
  log(`  Secciones: ${(template.sections || []).join(', ')}`)
  log(`  Color scheme original: primary=${template.colorScheme?.primary}, secondary=${template.colorScheme?.secondary}`)

  logStep(4, 'Obtener la plantilla completa')
  logTool('get_template', { id: template.id })
  const designPath = join(ROOT, 'templates', template.path, 'design.md')
  const designMd = existsSync(designPath) ? readFileSync(designPath, 'utf-8') : '(no disponible)'
  logResult(designMd.split('\n').slice(0, 20).join('\n'), 20)

  logStep(5, 'Para cada sección, sugerir componentes')
  const { components: allComponents } = loadCatalog()
  const sectionComponents = []
  for (const section of (template.sections || [])) {
    log(`\n  Sección: ${section}`)
    const filter = sectionToFilter(section)
    logTool('search_components', { useCase: filter.useCase, category: filter.category })
    const suggestions = suggestComponentsForSection(section)
    if (suggestions.length === 0) {
      log('  (sin componentes sugeridos)')
      continue
    }
    log(`  → ${suggestions.length} componente(s): ${suggestions.map((c) => c.id).join(', ')}`)
    const sectionData = { section, components: [] }
    for (const c of suggestions) {
      const full = getComponentById(c.id)
      if (full) sectionData.components.push({ component: full, prefix: toPrefix(`${template.id}-${section}-${full.id}`) })
    }
    sectionComponents.push(sectionData)
  }

  logStep(6, 'Obtener el código de cada componente')
  logTool('get_component', { id: '(uno por componente seleccionado)' })
  let totalComponents = 0
  for (const sc of sectionComponents) totalComponents += sc.components.length
  log(`Total componentes a incluir: ${totalComponents}`)

  logStep(7, 'Leer la guía de adaptación')
  logTool('get_adaptation_guide', { id: '(para componentes con colores hardcodeados)' })
  log('  (omitido en modo playground — adaptación automática por colores dominantes)')

  logStep(8, 'Generar HTML+CSS adaptando componentes a los colores del cliente')
  const html = generateHTML(template, sectionComponents, parsed.colors, description)
  log(`✓ HTML generado: ${html.length} caracteres, ${html.split('\n').length} líneas`)

  logStep(9, 'Validar el output')
  const css = extractCSS(html)
  const validation = validateWeb(html, css)
  log(validation.summary)
  if (validation.errors.length > 0) {
    log('\n  Errores:')
    validation.errors.forEach((e) => log('    ✗ ' + e))
  }
  if (validation.warnings.length > 0) {
    log('\n  Advertencias:')
    validation.warnings.forEach((w) => log('    ⚠ ' + w))
  }

  log(`\n── Fin del flow ${'─'.repeat(50)}`)
  log(`Plantilla: ${template.id}`)
  log(`Secciones: ${(template.sections || []).length}`)
  log(`Componentes incluidos: ${totalComponents}`)
  log(`Validación: ${validation.valid ? '✅ válida' : '❌ con errores'}`)

  return { html, template, validation }
}

// ─── CLI ──────────────────────────────────────────────────────

async function main() {
  const description = process.argv.slice(2).join(' ')
  if (!description) {
    log('Uso: node ai/playground.mjs "descripción del cliente"')
    log('')
    log('Ejemplo:')
    log('  node ai/playground.mjs "Necesito una landing para mi SaaS de gestión de tareas, color verde"')
    log('  node ai/playground.mjs "Quiero una tienda online para mi cafetería" > tienda.html')
    process.exit(1)
  }

  const { html } = await generate(description)
  if (html) {
    // HTML a stdout (redirigible a archivo)
    process.stdout.write(html)
  }
  process.exit(0)
}

// Solo ejecuta CLI si es el entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}