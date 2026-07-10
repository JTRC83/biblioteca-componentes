/**
 * MCP Server para biblioteca-componentes
 * PRD-04: MCP Server para conexión IA
 *
 * Tools:
 *   search_components(query, filters?)     — búsqueda + filtros
 *   get_component(id)                      — HTML+CSS + metadatos
 *   get_components_by_use_case(useCase)     — filtra por caso de uso
 *   get_components_by_style(style)          — filtra por estilo visual
 *   suggest_components(description)        — sugiere por descripción natural
 *   get_template(id)                        — plantilla web
 *   list_templates(filters?)                — listar plantillas
 *   get_design_system()                     — tokens de diseño globales
 *   get_adaptation_guide(id)               — instrucciones de adaptación
 *
 * Resources:
 *   catalog://components                    — catálogo completo (markdown)
 *   catalog://components/{category}          — componentes de una categoría
 *   catalog://templates                      — plantillas disponibles
 *   catalog://design-system                  — design system global
 *   catalog://styles                         — estilos disponibles
 */

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import {
  loadCatalog,
  getComponents,
  getComponentById,
  getCategories,
  getStyles,
  getUseCases,
  searchComponents,
  getStats
} from '../lib/catalog.js'

// ─── Helpers ──────────────────────────────────────────────────

function formatComponent(c) {
  return `## ${c.name}
- **ID**: ${c.id}
- **Categoría**: ${c.category}
- **Tags**: ${(c.tags || []).join(', ') || '—'}
- **Estilo**: ${(c.styles?.styleTags || []).join(', ') || '—'}
- **Complejidad**: ${c.complexity}
- **Interacciones**: ${(c.interactions || []).join(', ') || '—'}
- **Casos de uso**: ${(c.useCases || []).join(', ') || '—'}
- **Descripción**: ${c.description || '—'}
${c.adaptationNotes ? `- **Adaptación**: ${c.adaptationNotes}` : ''}
`
}

function formatComponentFull(c) {
  return `${formatComponent(c)}
### HTML
\`\`\`html
${c.html || '—'}
\`\`\`

### CSS
\`\`\`css
${c.css || '—'}
\`\`\`
`
}

function stripCode(c) {
  const { html, css, ...rest } = c
  return rest
}

// ─── Suggest logic ───────────────────────────────────────────

function suggestComponents(description) {
  const desc = description.toLowerCase()
  const words = desc.split(/\s+/).filter((w) => w.length > 2)
  const { components } = loadCatalog()

  const scored = components.map((c) => {
    let score = 0
    const haystack = [
      c.name, c.description, c.category,
      ...(c.tags || []), ...(c.useCases || []),
      ...(c.styles?.styleTags || [])
    ].join(' ').toLowerCase()

    for (const word of words) {
      if (haystack.includes(word)) score += 2
      // Partial matches
      for (const tag of (c.tags || [])) {
        if (tag.includes(word) || word.includes(tag)) score += 1
      }
      for (const uc of (c.useCases || [])) {
        if (uc.includes(word) || word.includes(uc)) score += 1
      }
    }

    // Boost by category relevance
    const catBoosts = {
      button: ['cta', 'action', 'submit', 'click', 'botón', 'boton'],
      card: ['card', 'tarjeta', 'product', 'producto', 'profile', 'perfil'],
      loader: ['loading', 'spinner', 'carga', 'progress', 'progreso'],
      toggle: ['toggle', 'switch', 'interruptor', 'on-off', 'on off'],
      tooltip: ['tooltip', 'hint', 'ayuda', 'info'],
      input: ['input', 'form', 'campo', 'entrada', 'search', 'búsqueda'],
      pattern: ['pattern', 'patrón', 'patron', 'background', 'fondo', 'texture'],
      background: ['background', 'fondo', 'hero', 'section', 'sección'],
      animation: ['animation', 'animación', 'animacion', 'effect', 'efecto'],
      checkbox: ['checkbox', 'check', 'selección', 'seleccion'],
      radio: ['radio', 'option', 'opción', 'opcion', 'select'],
      form: ['form', 'formulario', 'contact', 'login', 'signup', 'registro'],
      analog: ['hardware', 'físico', 'fisico', 'skeuomorphic', 'industrial'],
      navbar: ['nav', 'navigation', 'navegación', 'menu', 'menú', 'header']
    }
    for (const [cat, keywords] of Object.entries(catBoosts)) {
      if (c.category === cat || c.category.includes(cat)) {
        for (const kw of keywords) {
          if (desc.includes(kw)) score += 3
        }
      }
    }

    return { component: c, score }
  })

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map((s) => s.component)
}

// ─── Design System ───────────────────────────────────────────

function getDesignSystemData() {
  const { components } = loadCatalog()

  // Collect all style tags with counts
  const styleCounts = {}
  components.forEach((c) => {
    (c.styles?.styleTags || []).forEach((s) => {
      styleCounts[s] = (styleCounts[s] || 0) + 1
    })
  })

  // Collect dominant colors
  const colorCounts = {}
  components.forEach((c) => {
    (c.styles?.dominantColors || []).forEach((color) => {
      colorCounts[color] = (colorCounts[color] || 0) + 1
    })
  })

  // Top colors
  const topColors = Object.entries(colorCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 20)
    .map(([color, count]) => ({ color, count }))

  // Color schemes
  const schemeCounts = { dark: 0, light: 0, mixed: 0 }
  components.forEach((c) => {
    const scheme = c.styles?.colorScheme || 'mixed'
    schemeCounts[scheme] = (schemeCounts[scheme] || 0) + 1
  })

  // Complexity distribution
  const complexityCounts = { low: 0, medium: 0, high: 0 }
  components.forEach((c) => {
    complexityCounts[c.complexity] = (complexityCounts[c.complexity] || 0) + 1
  })

  return {
    totalComponents: components.length,
    styles: Object.entries(styleCounts)
      .sort(([, a], [, b]) => b - a)
      .map(([style, count]) => ({ style, count })),
    topColors,
    colorSchemes: schemeCounts,
    complexityDistribution: complexityCounts,
    categories: getCategories()
  }
}

// ─── MCP Server ──────────────────────────────────────────────

const server = new McpServer({
  name: 'biblioteca-componentes',
  version: '1.0.0'
})

// ─── Tools ───────────────────────────────────────────────────

server.registerTool(
  'search_components',
  {
    description: 'Busca componentes en la biblioteca por texto y/o filtros. ' +
      'Filtra por categoría, tags, caso de uso, estilo o complejidad. ' +
      'Por defecto devuelve los componentes sin HTML/CSS (más ligero). ' +
      'Usa includeCode=true para obtener el código completo.',
    inputSchema: z.object({
      query: z.string().optional().describe('Texto de búsqueda (busca en nombre, descripción, tags)'),
      category: z.string().optional().describe('Filtrar por categoría (buttons, cards, loaders, etc.)'),
      tags: z.string().optional().describe('Filtrar por tags separados por coma (ej: "gradient,3d")'),
      useCase: z.string().optional().describe('Filtrar por caso de uso (cta, form-input, loading-state, etc.)'),
      style: z.string().optional().describe('Filtrar por estilo (neon, glassmorphism, 3d, gradient, etc.)'),
      complexity: z.string().optional().describe('Filtrar por complejidad (low, medium, high)'),
      limit: z.number().optional().default(20).describe('Máximo de resultados (default: 20, max: 100)'),
      includeCode: z.boolean().optional().default(false).describe('Incluir HTML+CSS en cada resultado')
    })
  },
  async (params) => {
    const limit = Math.min(params.limit || 20, 100)
    let results

    if (params.query) {
      // Text search + filters
      const searched = searchComponents(params.query)
      results = searched.filter((c) => {
        if (params.category && c.category !== params.category) return false
        if (params.tags) {
          const required = params.tags.split(',')
          if (!required.every((t) => c.tags?.includes(t.trim()))) return false
        }
        if (params.useCase && !c.useCases?.includes(params.useCase)) return false
        if (params.style && !c.styles?.styleTags?.includes(params.style)) return false
        if (params.complexity && c.complexity !== params.complexity) return false
        return true
      })
    } else {
      // Filters only
      results = getComponents({
        category: params.category,
        tags: params.tags,
        useCase: params.useCase,
        style: params.style,
        complexity: params.complexity
      })
    }

    const total = results.length
    const data = results.slice(0, limit).map((c) => {
      if (!params.includeCode) return stripCode(c)
      return c
    })

    return {
      content: [{
        type: 'text',
        text: `Encontrados ${total} componente(s).\n\n${data.map(formatComponent).join('\n')}`
      }]
    }
  }
)

server.registerTool(
  'get_component',
  {
    description: 'Obtiene el detalle completo de un componente incluyendo HTML, CSS, ' +
      'metadatos, tags, estilo, interacciones y notas de adaptación.',
    inputSchema: z.object({
      id: z.string().describe('ID del componente (ej: btn-press-3d)')
    })
  },
  async ({ id }) => {
    const component = getComponentById(id)
    if (!component) {
      return {
        content: [{ type: 'text', text: `Error: Componente "${id}" no encontrado.` }]
      }
    }
    return {
      content: [{
        type: 'text',
        text: formatComponentFull(component)
      }]
    }
  }
)

server.registerTool(
  'get_components_by_use_case',
  {
    description: 'Devuelve todos los componentes adecuados para un caso de uso específico. ' +
      'Casos de uso comunes: cta, action-button, form-submit, form-input, ' +
      'loading-state, content-card, settings-toggle, navigation, social-share, etc.',
    inputSchema: z.object({
      useCase: z.string().describe('Caso de uso (ej: cta, loading-state, content-card)'),
      includeCode: z.boolean().optional().default(false).describe('Incluir HTML+CSS')
    })
  },
  async ({ useCase, includeCode }) => {
    const results = getComponents({ useCase })
    const data = results.map((c) => includeCode ? c : stripCode(c))
    return {
      content: [{
        type: 'text',
        text: `${results.length} componente(s) para useCase="${useCase}".\n\n${data.map(formatComponent).join('\n')}`
      }]
    }
  }
)

server.registerTool(
  'get_components_by_style',
  {
    description: 'Devuelve todos los componentes con un estilo visual específico. ' +
      'Estilos disponibles: neon, glassmorphism, 3d, gradient, glow, ' +
      'neobrutalism, neumorphic, animated, retro, minimal, etc.',
    inputSchema: z.object({
      style: z.string().describe('Estilo visual (ej: neon, glassmorphism, 3d, gradient)'),
      includeCode: z.boolean().optional().default(false).describe('Incluir HTML+CSS')
    })
  },
  async ({ style, includeCode }) => {
    const results = getComponents({ style })
    const data = results.map((c) => includeCode ? c : stripCode(c))
    return {
      content: [{
        type: 'text',
        text: `${results.length} componente(s) con style="${style}".\n\n${data.map(formatComponent).join('\n')}`
      }]
    }
  }
)

server.registerTool(
  'suggest_components',
  {
    description: 'Describe qué necesitas y este tool sugiere los componentes más adecuados ' +
      'de la biblioteca. Ej: "I need a call to action button for a SaaS landing", ' +
      '"necesito un loader para una página de carga", "quiero una tarjeta de producto". ' +
      'Busca por semántica en nombres, tags, casos de uso y estilos.',
    inputSchema: z.object({
      description: z.string().describe('Descripción en lenguaje natural de qué necesitas')
    })
  },
  async ({ description }) => {
    const suggestions = suggestComponents(description)
    if (suggestions.length === 0) {
      return {
        content: [{
          type: 'text',
          text: 'No se encontraron componentes relevantes. Prueba con otros términos.'
        }]
      }
    }
    const data = suggestions.map(stripCode)
    return {
      content: [{
        type: 'text',
        text: `Sugerencias basadas en "${description}":\n\n${data.map(formatComponent).join('\n')}`
      }]
    }
  }
)

server.registerTool(
  'get_template',
  {
    description: 'Obtiene una plantilla web completa con su design.md, prompt y mapeo de componentes. ' +
      '(Placeholder — las plantillas se implementarán en PRD-05)',
    inputSchema: z.object({
      id: z.string().describe('ID de la plantilla')
    })
  },
  async ({ id }) => {
    return {
      content: [{
        type: 'text',
        text: `Plantilla "${id}" no encontrada. Las plantillas se implementarán en PRD-05.`
      }]
    }
  }
)

server.registerTool(
  'list_templates',
  {
    description: 'Lista todas las plantillas web disponibles. ' +
      '(Placeholder — las plantillas se implementarán en PRD-05)',
    inputSchema: z.object({})
  },
  async () => {
    return {
      content: [{
        type: 'text',
        text: 'No hay plantillas disponibles aún. Se implementarán en PRD-05.'
      }]
    }
  }
)

server.registerTool(
  'get_design_system',
  {
    description: 'Obtiene el design system global de la biblioteca: estilos disponibles, ' +
      'paleta de colores más usada, distribución de complejidad y categorías. ' +
      'Útil para entender qué tokens de diseño tiene la biblioteca.',
    inputSchema: z.object({})
  },
  async () => {
    const ds = getDesignSystemData()
    const text = `# Design System — Biblioteca de Componentes

**Total de componentes**: ${ds.totalComponents}

## Estilos disponibles
${ds.styles.map((s) => `- \`${s.style}\` (${s.count} componentes)`).join('\n')}

## Paleta de colores más usada
${ds.topColors.map((c) => `- \`${c.color}\` (usado en ${c.count} componentes)`).join('\n')}

## Distribución de color scheme
- Dark: ${ds.colorSchemes.dark}
- Light: ${ds.colorSchemes.light}
- Mixed: ${ds.colorSchemes.mixed}

## Distribución de complejidad
- Low: ${ds.complexityDistribution.low}
- Medium: ${ds.complexityDistribution.medium}
- High: ${ds.complexityDistribution.high}

## Categorías
${ds.categories.map((c) => `- \`${c.slug}\` (${c.count} componentes)`).join('\n')}
`
    return {
      content: [{ type: 'text', text }]
    }
  }
)

server.registerTool(
  'get_adaptation_guide',
  {
    description: 'Obtiene instrucciones específicas de cómo adaptar un componente concreto: ' +
      'cómo cambiar colores, tamaños, hacer responsive, etc.',
    inputSchema: z.object({
      id: z.string().describe('ID del componente')
    })
  },
  async ({ id }) => {
    const component = getComponentById(id)
    if (!component) {
      return {
        content: [{
          type: 'text',
          text: `Error: Componente "${id}" no encontrado.`
        }]
      }
    }

    const guide = `# Guía de adaptación: ${component.name}

**ID**: ${component.id}
**Categoría**: ${component.category}

## Notas de adaptación
${component.adaptationNotes || 'Componente CSS puro, adaptable cambiando colores y tamaños.'}

## Estilos detectados
${(component.styles?.styleTags || []).join(', ') || '—'}

## Colores dominantes
${(component.styles?.dominantColors || []).join(', ') || '—'}

## Color scheme
${component.styles?.colorScheme || 'mixed'}

## Complejidad
${component.complexity}

## Interacciones
${(component.interactions || []).join(', ') || '—'}

## Casos de uso
${(component.useCases || []).join(', ') || '—'}

## Código fuente
### HTML
\`\`\`html
${component.html || '—'}
\`\`\`

### CSS
\`\`\`css
${component.css || '—'}
\`\`\`
`

    return {
      content: [{ type: 'text', text: guide }]
    }
  }
)

// ─── Resources ────────────────────────────────────────────────

// catalog://components — catálogo completo en markdown
server.registerResource(
  'components',
  new ResourceTemplate('catalog://components', { list: undefined }),
  {
    description: 'Catálogo completo de componentes en formato markdown',
    mimeType: 'text/markdown'
  },
  async (uri) => {
    const { components } = loadCatalog()
    const text = `# Catálogo de Componentes (${components.length} total)\n\n${components.map(formatComponent).join('\n')}`
    return {
      contents: [{
        uri: uri.href,
        mimeType: 'text/markdown',
        text
      }]
    }
  }
)

// catalog://components/{category} — componentes de una categoría
server.registerResource(
  'components-by-category',
  new ResourceTemplate('catalog://components/{category}', { list: undefined }),
  {
    description: 'Componentes de una categoría específica',
    mimeType: 'text/markdown'
  },
  async (uri, { category }) => {
    const comps = getComponents({ category: String(category) })
    const text = `# ${category} (${comps.length} componentes)\n\n${comps.map(formatComponent).join('\n')}`
    return {
      contents: [{
        uri: uri.href,
        mimeType: 'text/markdown',
        text
      }]
    }
  }
)

// catalog://styles — estilos disponibles
server.registerResource(
  'styles',
  new ResourceTemplate('catalog://styles', { list: undefined }),
  {
    description: 'Estilos disponibles en la biblioteca',
    mimeType: 'text/markdown'
  },
  async (uri) => {
    const styles = getStyles()
    const text = `# Estilos disponibles\n\n${styles.map((s) => `- \`${s.style}\` (${s.count} componentes)`).join('\n')}`
    return {
      contents: [{
        uri: uri.href,
        mimeType: 'text/markdown',
        text
      }]
    }
  }
)

// catalog://design-system — design system global
server.registerResource(
  'design-system',
  new ResourceTemplate('catalog://design-system', { list: undefined }),
  {
    description: 'Design system global de la biblioteca',
    mimeType: 'application/json'
  },
  async (uri) => {
    const ds = getDesignSystemData()
    return {
      contents: [{
        uri: uri.href,
        mimeType: 'application/json',
        text: JSON.stringify(ds, null, 2)
      }]
    }
  }
)

// catalog://templates — plantillas disponibles (placeholder)
server.registerResource(
  'templates',
  new ResourceTemplate('catalog://templates', { list: undefined }),
  {
    description: 'Plantillas web disponibles (placeholder — PRD-05)',
    mimeType: 'text/markdown'
  },
  async (uri) => {
    return {
      contents: [{
        uri: uri.href,
        mimeType: 'text/markdown',
        text: '# Plantillas\n\nNo hay plantillas disponibles aún. Se implementarán en PRD-05.'
      }]
    }
  }
)

// ─── Main ────────────────────────────────────────────────────

async function main() {
  const transport = new StdioServerTransport()
  await server.connect(transport)
  console.error('[mcp] Biblioteca de Componentes MCP Server running on stdio')
}

main().catch((error) => {
  console.error('[mcp] Fatal error:', error)
  process.exit(1)
})