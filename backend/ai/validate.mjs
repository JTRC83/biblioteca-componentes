/**
 * Validador de HTML+CSS generado por la IA.
 * PRD-06: IA integration system
 *
 * Exporta:
 *   validateHTML(html)  → { valid, warnings, errors }
 *   validateCSS(css)    → { valid, warnings, errors }
 *   validateWeb(html, css) → { valid, warnings, errors, summary }
 *
 * Uso CLI:
 *   node ai/validate.mjs                         → imprime usage
 *   node ai/validate.mjs path/to/file.html       → valida el archivo
 *   node ai/validate.mjs path/to/file.html path/to/style.css
 *
 * ESM module — sin dependencias externas. Usa solo node:fs y regex.
 */

import { readFileSync, existsSync } from 'node:fs'

// ─── HTML ─────────────────────────────────────────────────────

/**
 * Extrae el contenido de un <style>...</style> de un documento HTML.
 * @param {string} html
 * @returns {string} CSS concatenado (vacío si no hay <style>)
 */
export function extractCSS(html) {
  const blocks = []
  const re = /<style[^>]*>([\s\S]*?)<\/style>/gi
  let m
  while ((m = re.exec(html)) !== null) blocks.push(m[1])
  return blocks.join('\n\n')
}

/**
 * Cuenta las ocurrencias de un tag (apertura) en HTML.
 * Ignora self-closing y comentarios.
 */
function countOpenTags(html, tag) {
  const re = new RegExp(`<${tag}(\\s[^>]*?)?\\s*(?<!/)>`, 'gi')
  const selfRe = new RegExp(`<${tag}(\\s[^>]*?)?\\s*/\\s*>`, 'gi')
  const all = html.match(re) || []
  const self = html.match(selfRe) || []
  return all.length - self.length
}

function countCloseTags(html, tag) {
  const re = new RegExp(`</${tag}\\s*>`, 'gi')
  return (html.match(re) || []).length
}

/**
 * Valida un documento HTML.
 * @param {string} html
 * @returns {{ valid: boolean, warnings: string[], errors: string[] }}
 */
export function validateHTML(html) {
  const errors = []
  const warnings = []

  if (!html || !html.trim()) {
    return { valid: false, warnings, errors: ['HTML vacío.'] }
  }

  // DOCTYPE
  if (!/<!DOCTYPE html>/i.test(html)) {
    warnings.push('Falta <!DOCTYPE html>. Recomendado para modo standards.')
  }

  // Tags obligatorios
  const voidTags = new Set(['meta', 'link', 'br', 'hr', 'img', 'input', 'source', 'area', 'base', 'col', 'embed', 'param', 'track', 'wbr'])
  const structuralTags = ['html', 'head', 'body', 'title']
  for (const tag of structuralTags) {
    const open = countOpenTags(html, tag)
    const close = countCloseTags(html, tag)
    if (open === 0) errors.push(`Falta tag <${tag}>.`)
    else if (open !== close) errors.push(`Tag <${tag}> desbalanceado: ${open} apertura(s) vs ${close} cierre(s).`)
  }

  // Meta tags obligatorios
  if (!/<meta\s+charset\s*=/i.test(html)) {
    errors.push('Falta <meta charset="UTF-8">.')
  }
  if (!/<meta\s+name\s*=\s*["']viewport["']/i.test(html)) {
    errors.push('Falta <meta name="viewport" ...> — la web no será responsive.')
  }
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  if (!titleMatch) {
    errors.push('Falta <title>.')
  } else if (!titleMatch[1].trim()) {
    warnings.push('<title> está vacío.')
  }
  if (!/<meta\s+name\s*=\s*["']description["']/i.test(html)) {
    warnings.push('Falta <meta name="description">. Recomendado para SEO.')
  }

  // Tags balanceables más comunes
  const balanceable = ['section', 'article', 'div', 'header', 'footer', 'main', 'nav', 'aside', 'ul', 'ol', 'li', 'p', 'span', 'a', 'button', 'form', 'label', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'tr', 'td', 'th', 'thead', 'tbody', 'figure', 'figcaption']
  for (const tag of balanceable) {
    const open = countOpenTags(html, tag)
    const close = countCloseTags(html, tag)
    if (open !== close) {
      const level = ['html', 'body', 'head', 'title'].includes(tag) ? 'error' : (Math.abs(open - close) > 2 ? 'error' : 'warning')
      const msg = `Tag <${tag}> desbalanceado: ${open} apertura(s) vs ${close} cierre(s).`
      if (level === 'error') errors.push(msg)
      else warnings.push(msg)
    }
  }

  // Comentarios HTML sin cerrar
  const openComments = (html.match(/<!--/g) || []).length
  const closeComments = (html.match(/-->/g) || []).length
  if (openComments !== closeComments) {
    errors.push(`Comentarios HTML desbalanceados: ${openComments} <!-- vs ${closeComments} -->.`)
  }

  // Múltiples <h1>
  const h1Count = countOpenTags(html, 'h1')
  if (h1Count > 1) {
    warnings.push(`Hay ${h1Count} <h1>. Se recomienda uno solo por página por SEO.`)
  }

  return { valid: errors.length === 0, warnings, errors }
}

// ─── CSS ──────────────────────────────────────────────────────

/**
 * Valida una hoja CSS.
 * @param {string} css
 * @returns {{ valid: boolean, warnings: string[], errors: string[] }}
 */
export function validateCSS(css) {
  const errors = []
  const warnings = []

  if (!css || !css.trim()) {
    return { valid: false, warnings, errors: ['CSS vacío.'] }
  }

  // Llaves balanceadas
  const opens = (css.match(/{/g) || []).length
  const closes = (css.match(/}/g) || []).length
  if (opens !== closes) {
    errors.push(`Llaves desbalanceadas: ${opens} { vs ${closes} }.`)
  }

  // Reglas sin propiedad ni llave (selector suelto).
  // Solo flag lines ending in ',' que no contienen ':' (propiedad) ni '{' (inicio de bloque)
  // — esas son casi seguro selectores multilínea rotos o selectores sin bloque.
  const straySelectors = (css.match(/^[^{}:/*]+,\s*$/gm) || []).filter((l) => l.trim())
  if (straySelectors.length > 0) {
    warnings.push(`Posibles selectores sueltos sin bloque (¿falta '{'?): ${straySelectors.length}.`)
  }

  // Propiedad sin valor: `color:;`
  const emptyProps = css.match(/[\w-]+\s*:\s*;/g)
  if (emptyProps && emptyProps.length > 0) {
    errors.push(`Propiedades CSS sin valor (ej: 'color:;'): ${emptyProps.length}.`)
  }

  // Propiedad sin punto y coma al final de la línea (heuristic)
  // Acepta } como fin de regla. Solo marca warning.
  const noSemicolon = css.match(/[^;{}]\s*\n\s*\}/g)
  if (noSemicolon && noSemicolon.length > 0) {
    warnings.push(`Posibles propiedades sin ';' antes de '}' (puede ser intencional): ${noSemicolon.length}.`)
  }

  // Colores hardcodeados (hex) que podrían ser variables
  const hexColors = css.match(/#[0-9a-fA-F]{3,8}\b/g) || []
  const uniqueHex = [...new Set(hexColors.map((c) => c.toLowerCase()))]
  // Solo avisamos si hay bastantes colores hardcodeados en el CSS de sección (no dentro de componentes ya scoped)
  if (uniqueHex.length > 8) {
    warnings.push(`${uniqueHex.length} colores hex hardcodeados. Considera moverlos a variables CSS (--color-*).`)
  }

  // Uso de !important excesivo
  const importantCount = (css.match(/!important/gi) || []).length
  if (importantCount > 5) {
    warnings.push(`Uso excesivo de !important (${importantCount}). Puede dificultar la mantenibilidad.`)
  }

  // px fijos en media queries típicas (no es error, solo aviso)
  const fixedPxInLayout = css.match(/(?:width|height|max-width|min-width)\s*:\s*\d+px/g)
  if (fixedPxInLayout && fixedPxInLayout.length > 10) {
    warnings.push(`${fixedPxInLayout.length} dimensiones en px fijas en width/height. Considera rem/em/% o clamp() para responsive.`)
  }

  return { valid: errors.length === 0, warnings, errors }
}

// ─── Web (HTML + CSS combinado) ────────────────────────────────

/**
 * Extrae todos los nombres de clase usados en un HTML.
 * @param {string} html
 * @returns {Set<string>}
 */
function extractClassesFromHTML(html) {
  const set = new Set()
  const re = /class\s*=\s*["']([^"']+)["']/gi
  let m
  while ((m = re.exec(html)) !== null) {
    for (const c of m[1].split(/\s+/)) if (c) set.add(c)
  }
  return set
}

/**
 * Extrae los selectores de clase de un CSS (.mi-clase).
 * Devuelve un Set de nombres de clase sin el punto.
 * @param {string} css
 * @returns {Set<string>}
 */
function extractClassSelectors(css) {
  const set = new Set()
  const re = /\.([a-zA-Z_][\w-]*)/g
  let m
  while ((m = re.exec(css)) !== null) set.add(m[1])
  return set
}

/**
 * Detecta colisiones de clases: clases que aparecen en bloques CSS de
 * "componentes distintos" (distinto prefijo de sección) y que por tanto
 * podrían sobreescribirse mutuamente. La heurística: si una clase NO
 * tiene un prefijo de sección (no empieza por un prefijo conocido) y se
 * usa en más de un selector de distintos bloques, es riesgo de colisión.
 *
 * @param {string} html
 * @param {string} css
 * @returns {{ warnings: string[], errors: string[] }}
 */
function checkClassCollisions(html, css) {
  const errors = []
  const warnings = []

  const htmlClasses = extractClassesFromHTML(html)
  const cssClasses = extractClassSelectors(css)

  // Clases genéricas de alto riesgo (muy propensas a colisionar entre componentes)
  const genericRisky = new Set([
    'button', 'card', 'icon', 'container', 'wrapper', 'content',
    'title', 'subtitle', 'text', 'label', 'input', 'box', 'item',
    'main', 'section', 'header', 'footer', 'nav', 'overlay', 'badge'
  ])

  for (const cls of cssClasses) {
    if (genericRisky.has(cls)) {
      warnings.push(`Clase genérica de riesgo ".${cls}" usada sin prefijo de sección. ` +
        `Puede colisionar entre componentes. Renómbrala con un prefijo único (ej: "saas-hero-${cls}").`)
    }
  }

  // Clases en HTML que no están definidas en CSS (posible typo)
  for (const cls of htmlClasses) {
    if (!cssClasses.has(cls) && !genericRisky.has(cls)) {
      // Solo aviso de clases que parezcan propias (no utility) y que no estén en CSS
      // Evitamos ruido excesivo: solo si la clase tiene más de 4 caracteres y no parece utilidad
      if (cls.length > 4 && !/^(flex|grid|block|inline|hidden|active|open|show)/i.test(cls)) {
        warnings.push(`Clase ".${cls}" usada en HTML pero no definida en CSS (¿typo o falta de style?).`)
      }
    }
  }

  return { warnings, errors }
}

/**
 * Valida una web completa (HTML + CSS).
 * @param {string} html
 * @param {string} css CSS extraído del <style> del HTML (o pasado aparte)
 * @returns {{ valid: boolean, warnings: string[], errors: string[], summary: string }}
 */
export function validateWeb(html, css) {
  const htmlResult = validateHTML(html)
  const cssResult = validateCSS(css || extractCSS(html))
  const collision = checkClassCollisions(html, css || extractCSS(html))

  const errors = [...htmlResult.errors, ...cssResult.errors, ...collision.errors]
  const warnings = [...htmlResult.warnings, ...cssResult.warnings, ...collision.warnings]

  // Checks responsive adicionales
  if (!/<meta\s+name\s*=\s*["']viewport["']/i.test(html)) {
    // ya añadido como error en validateHTML, no duplicamos
  }
  const cssToCheck = css || extractCSS(html)
  const usesResponsiveUnits = /(rem|em|vw|vh|%|clamp\(|min\(|max\()/.test(cssToCheck)
  if (!usesResponsiveUnits) {
    warnings.push('El CSS no usa unidades responsive (rem/em/vw/%/clamp). La web puede no adaptarse bien a móvil.')
  }

  // Colores hardcodeados en HTML inline style
  const inlineHex = (html.match(/style\s*=\s*["'][^"']*#[0-9a-fA-F]{3,8}/g) || []).length
  if (inlineHex > 0) {
    warnings.push(`${inlineHex} color(es) hex en style inline del HTML. Considera moverlos a variables CSS.`)
  }

  const valid = errors.length === 0
  const summary = valid
    ? `✅ Web válida. ${warnings.length} advertencia(s).`
    : `❌ Web con ${errors.length} error(es) y ${warnings.length} advertencia(s).`

  return { valid, warnings, errors, summary }
}

// ─── CLI ──────────────────────────────────────────────────────

function printReport(report) {
  console.log(report.summary || (report.valid ? '✅ Válido' : '❌ Inválido'))
  if (report.errors.length > 0) {
    console.log('\n--- ERRORES ---')
    report.errors.forEach((e) => console.log('  ✗ ' + e))
  }
  if (report.warnings.length > 0) {
    console.log('\n--- ADVERTENCIAS ---')
    report.warnings.forEach((w) => console.log('  ⚠ ' + w))
  }
}

function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.log('Uso:')
    console.log('  node ai/validate.mjs <file.html>              Valida el HTML (extrae su <style>)')
    console.log('  node ai/validate.mjs <file.html> <style.css>  Valida HTML + CSS por separado')
    console.log('')
    console.log('Exporta (como módulo):')
    console.log('  validateHTML(html) → { valid, warnings, errors }')
    console.log('  validateCSS(css)   → { valid, warnings, errors }')
    console.log('  validateWeb(html, css) → { valid, warnings, errors, summary }')
    process.exit(0)
  }

  const htmlPath = args[0]
  if (!existsSync(htmlPath)) {
    console.error(`Error: no existe el archivo "${htmlPath}"`)
    process.exit(1)
  }
  const html = readFileSync(htmlPath, 'utf-8')

  let css
  if (args[1]) {
    if (!existsSync(args[1])) {
      console.error(`Error: no existe el archivo CSS "${args[1]}"`)
      process.exit(1)
    }
    css = readFileSync(args[1], 'utf-8')
  } else {
    css = extractCSS(html)
    if (!css.trim()) {
      console.log('No se encontró <style> en el HTML. Validando solo HTML.')
    }
  }

  const report = validateWeb(html, css)
  printReport(report)
  process.exit(report.valid ? 0 : 1)
}

// Solo ejecuta CLI si es el entry point
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}