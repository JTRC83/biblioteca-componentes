/**
 * Scopifica el CSS de un componente para que no contamine otros previews.
 * - Sustituye `.clase` y `.clase.clase2` por `.scope-xxx .clase`
 * - Sustituye selectores tipo `>` o `&` se quedan dentro del scope
 * - Devuelve un id único para usar como data-attribute del contenedor
 */

let counter = 0

function generateScopeId() {
  counter += 1
  return `sc-${Date.now().toString(36)}-${counter}`
}

/**
 * Reescribe selectores simples (`.foo`, `.foo.bar`, `.foo .bar`, `tag.clase`)
 * para que estén scoped dentro de `.scope-xxx`.
 */
function rewriteSelector(selector, scopeClass) {
  const trimmed = selector.trim()
  if (!trimmed) return ''

  // Pseudo-clases de raíz y selectores de keyframes/at: se quedan iguales
  if (trimmed.startsWith('@') || trimmed.startsWith('from') || trimmed.startsWith('to') || trimmed.startsWith('%')) {
    return trimmed
  }

  // Si ya está scoped, no lo dupliques
  if (trimmed.includes(scopeClass)) return trimmed

  // Si empieza con :root, html, body — los dejamos como root (puede romper, pero es raro en snippets)
  if (/^(:root|html|body)/.test(trimmed)) return trimmed

  // Dividir por comas para soportar múltiples selectores en una regla
  return trimmed
    .split(',')
    .map((part) => {
      const s = part.trim()
      // Añade el scope al inicio del selector
      return `.${scopeClass} ${s}`
    })
    .join(', ')
}

export function scopeCss(css, scopeId) {
  const scopeClass = scopeId

  // Extraer @keyframes y guardarlos aparte (no se pueden scopar con prefijo de clase)
  const keyframes = []
  let stripped = css.replace(/@(-webkit-|-moz-|-o-)?keyframes\s+[\w-]+\s*\{[\s\S]*?\}\s*\}/g, (match) => {
    keyframes.push(match)
    return ''
  })

  // Procesar reglas: recorrer { ... } blocks
  let result = ''
  let i = 0
  let buffer = ''
  let depth = 0

  while (i < stripped.length) {
    const ch = stripped[i]
    buffer += ch
      if (ch === '{') {
        depth += 1
        if (depth === 1) {
          // selector: el contenido de buffer hasta { es la parte de selectores
          const lastOpen = buffer.lastIndexOf('{')
          let head = buffer.slice(0, lastOpen)
          // Normalizar saltos de línea y espacios múltiples del selector
          // (los selectores CSS con saltos de línea no son válidos en una regla)
          head = head.replace(/\s+/g, ' ').trim()
          result += rewriteSelector(head, scopeClass) + '{'
          buffer = ''
        }
      } else if (ch === '}') {
      depth -= 1
      if (depth === 0) {
        result += buffer
        buffer = ''
      } else if (depth < 0) {
        depth = 0
      }
    }
    i += 1
  }
  if (buffer) result += buffer

  return [...keyframes, result].join('\n\n')
}

export function createScope() {
  return generateScopeId()
}

export function resetScopeCounter() {
  counter = 0
}
