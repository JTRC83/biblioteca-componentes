# Biblioteca de Componentes

Catálogo visual de componentes UI estilo uiverse + sistema completo de generación de webs con IA via MCP.

## Qué es

Una biblioteca de **236 componentes UI** (HTML+CSS puro, sin JavaScript) que una IA puede consultar via MCP para generar webs completas adaptadas al cliente. El sistema incluye:

- **Biblioteca visual** (Vue 3) para ver y copiar componentes
- **Catálogo indexado** (JSON + Markdown) con metadatos enriquecidos
- **API REST** (Next.js) para consultar componentes programáticamente
- **MCP Server** que conecta la IA con la biblioteca (10 tools + 5 resources)
- **5 plantillas web** con design tokens y mapeo de componentes
- **Sistema de generación** con system prompt, few-shot examples, validator y playground

## Estructura del monorepo

```
biblioteca-componentes/
├── library/                # Biblioteca visual (Vue 3 + Vite)
│   ├── src/
│   │   ├── components/      # 236 componentes en 14 categorías
│   │   ├── catalog/          # App showcase (Vue: views, layout, stores)
│   │   └── utils/            # scopeCss, copy, string
│   ├── public/
│   └── package.json
├── backend/                 # API REST + MCP Server (Next.js)
│   ├── app/api/              # 11 endpoints REST
│   ├── lib/catalog.js        # Cargador del catálogo (9 funciones)
│   ├── mcp/server.mjs        # MCP Server (10 tools + 5 resources)
│   ├── ai/                   # Sistema de generación IA
│   │   ├── system-prompt.md   # Prompt del generador (343 líneas)
│   │   ├── examples/          # 5 few-shot examples
│   │   ├── validate.mjs       # Validador de HTML+CSS
│   │   ├── playground.mjs     # Generador CLI de webs
│   │   └── README.md          # Docs del sistema IA
│   └── package.json
├── templates/               # Plantillas web
│   ├── landing/
│   │   ├── saas-modern/       # SaaS dark + glassmorphism
│   │   ├── portfolio-minimal/ # Portfolio minimalista
│   │   ├── ecommerce-shop/    # E-commerce vibrante
│   │   ├── agency-dark/       # Agencia dark + neon
│   │   └── mobile-app/        # Mobile app landing
│   └── index.json            # Índice de plantillas
├── catalog/                 # Catálogo indexado
│   ├── json/components.json  # 236 componentes con metadatos
│   └── md/                   # 14 archivos MD por categoría + index
├── scripts/
│   ├── build-catalog.mjs     # Genera catalog/json + catalog/md
│   └── build-templates.mjs   # Genera templates/index.json
├── pnpm-workspace.yaml
└── package.json              # Root workspace
```

## Quick start

```bash
# Instalar dependencias
pnpm install

# Dev server de la biblioteca Vue
pnpm dev:library              # → http://localhost:5174

# Dev server del backend API
pnpm dev:backend              # → http://localhost:3001

# Regenerar catálogo desde componentes
pnpm build:catalog            # → catalog/json/components.json + catalog/md/

# Regenerar índice de plantillas
pnpm build:templates          # → templates/index.json

# Regenerar todo
pnpm build:all

# Playground: generar web desde descripción
cd backend && node ai/playground.mjs "landing para SaaS de gestión de tareas" > web.html
```

## Componentes (236 en 14 categorías)

| Categoría | Count | Estilos destacados |
|-----------|-------|--------------------|
| buttons | 57 | neon, gradient, 3d, glassmorphism, glow |
| cards | 34 | 3d, glassmorphism, gradient, doodle, terminal |
| loaders | 26 | 3d, animated, glassmorphism, terminal |
| patterns | 25 | gradient, conic, animated, mask |
| animations | 23 | organic, neon, 3d, retro |
| analog | 21 | skeuomorphic, industrial, 3d, neumorphic |
| checkboxes | 15 | neon, gradient, organic, 3d |
| toggles | 12 | gradient, neon, glassmorphism, 3d |
| tooltips | 10 | gradient, glassmorphism, neon |
| backgrounds | 7 | gradient, animated, filter |
| radios | 2 | neon, animated |
| inputs | 2 | neon, gradient, glow |
| forms | 1 | gradient |
| navbars | 1 | glassmorphism |

Cada componente tiene metadatos enriquecidos: `description`, `useCases`, `complexity`, `interactions`, `styles.styleTags`, `styles.colorScheme`, `styles.dominantColors`, `adaptationNotes`, `darkMode`.

## API REST (Next.js)

```
GET /                           # API info + endpoints
GET /api/health                 # Health check + stats
GET /api/components             # Lista con filtros + paginación
GET /api/components/:id         # Detalle completo (HTML+CSS)
GET /api/components/search?q=   # Búsqueda full-text
GET /api/categories             # 14 categorías con counts
GET /api/styles                 # 21 style tags con counts
GET /api/use-cases              # 55 use cases con counts
GET /api/stats                  # Estadísticas del catálogo
GET /api/catalog/export         # Export completo del JSON
GET /api/templates              # Plantillas con filtros
GET /api/templates/:id          # Detalle de plantilla
```

Filtros disponibles en `/api/components`: `category`, `tags`, `useCase`, `style`, `complexity`, `page`, `limit`, `include=code`.

## MCP Server (10 tools + 5 resources)

### Herramientas

| Tool | Descripción |
|------|-------------|
| `search_components` | Busca por texto y/o filtros (category, tags, useCase, style, complexity) |
| `get_component` | HTML+CSS+metadatos completos de un componente |
| `get_components_by_use_case` | Componentes para un caso de uso específico |
| `get_components_by_style` | Componentes por estilo visual |
| `suggest_components` | Sugerencias por descripción en lenguaje natural |
| `get_template` | Plantilla completa (design tokens + prompt + component mapping) |
| `list_templates` | Lista plantillas con filtros |
| `get_design_system` | Design system global (estilos, colores, complejidad) |
| `get_adaptation_guide` | Instrucciones de adaptación + código fuente |
| `validate_web` | Valida HTML+CSS generado |

### Recursos

| URI | Formato |
|-----|---------|
| `catalog://components` | Catálogo completo (markdown) |
| `catalog://components/{category}` | Componentes por categoría |
| `catalog://styles` | Estilos disponibles |
| `catalog://design-system` | Design system (JSON) |
| `catalog://templates` | Plantillas disponibles |

### Configuración MCP

#### opencode
```json
{
  "mcp": {
    "biblioteca-componentes": {
      "type": "local",
      "command": ["node", "backend/mcp/server.mjs"],
      "cwd": "."
    }
  }
}
```

#### Claude Desktop
```json
{
  "mcpServers": {
    "biblioteca-componentes": {
      "command": "node",
      "args": ["/ruta/absoluta/biblioteca-componentes/backend/mcp/server.mjs"]
    }
  }
}
```

#### OpenAI Codex
```bash
codex mcp add biblioteca-componentes -- node /ruta/absoluta/biblioteca-componentes/backend/mcp/server.mjs
```

#### Hermes Agent
```bash
hermes mcp add biblioteca-componentes -- node /ruta/absoluta/biblioteca-componentes/backend/mcp/server.mjs
```

#### Cursor / Windsurf
```json
{
  "mcpServers": {
    "biblioteca-componentes": {
      "command": "node",
      "args": ["./backend/mcp/server.mjs"]
    }
  }
}
```

## Plantillas web (5)

| Plantilla | Tema | Estilo | Industria |
|-----------|------|--------|-----------|
| `landing-saas-modern` | Dark glassmorphism | modern, gradient, glassmorphism | saas, tech, startup |
| `landing-portfolio-minimal` | Light minimalista | minimal, clean | portfolio, design |
| `landing-ecommerce-shop` | Vibrante ámbar | vibrant, card-heavy | ecommerce, retail |
| `landing-agency-dark` | Dark bold neon | dark, neon, bold | agency, creative |
| `landing-mobile-app` | Light blue app-store | clean, minimal | mobile, app |

Cada plantilla incluye: `meta.json` (colorScheme, typography, spacing, borderRadius), `prompt.md` (descripción natural), `design.md` (CSS custom properties), `components.md` (mapeo sección → componente).

## Sistema de generación IA

### Flujo end-to-end

```
Cliente: "Necesito una landing para mi SaaS de gestión de tareas"

IA:
  1. list_templates({ industry: "saas" })     → landing-saas-modern
  2. get_template("landing-saas-modern")     → design tokens + sections + components.md
  3. search_components({ useCase: "cta" })    → buttons encontrados
  4. get_component("btn-get-started-gradient") → HTML+CSS
  5. get_adaptation_guide("btn-...")         → cómo cambiar colores
  6. Genera HTML+CSS adaptando componentes
  7. validate_web(html, css)                  → valida output
  8. Output: web completa responsive
```

### Componentes del sistema

| Archivo | Descripción |
|---------|-------------|
| `backend/ai/system-prompt.md` | System prompt (343 líneas) en español |
| `backend/ai/examples/saas-task-manager.md` | Example: SaaS → landing-saas-modern |
| `backend/ai/examples/ecommerce-coffee.md` | Example: cafetería → landing-ecommerce-shop |
| `backend/ai/examples/portfolio-designer.md` | Example: portfolio → landing-portfolio-minimal |
| `backend/ai/examples/agency-creative.md` | Example: agencia → landing-agency-dark |
| `backend/ai/examples/blog-minimal.md` | Example: blog → adapta portfolio-minimal |
| `backend/ai/validate.mjs` | Validador de HTML+CSS (tags, CSS, responsive, colisiones) |
| `backend/ai/playground.mjs` | CLI generador de webs desde descripción natural |
| `backend/ai/README.md` | Documentación completa del sistema IA |

### Playground

```bash
# Generar web desde descripción
cd backend
node ai/playground.mjs "landing para SaaS de gestión de tareas" > saas.html
node ai/playground.mjs "tienda online para cafetería" > cafe.html
node ai/playground.mjs "portfolio para diseñador" > portfolio.html

# Validar web generada
node ai/validate.mjs saas.html
```

## Cómo añadir un componente nuevo

1. Crear `library/src/components/<categoría>/<Nombre>.js`:

```js
export default {
  id: 'mi-boton-unico',
  name: 'Mi Botón',
  category: 'buttons',
  tags: ['glow', 'css-only'],
  author: 'autor',
  html: `<button class="mi-clase">Click</button>`,
  css: `.mi-clase { padding: 12px 24px; background: #7c3aed; }`
}
```

2. Registrarlo en `library/src/components/<categoría>/index.js`
3. Ejecutar `pnpm build:catalog` para actualizar el catálogo

## Cómo añadir una plantilla nueva

1. Crear `templates/<tipo>/<nombre>/` con 4 archivos:
   - `meta.json` — metadatos (colorScheme, typography, sections, industry)
   - `prompt.md` — descripción en lenguaje natural del diseño
   - `design.md` — CSS custom properties (tokens de diseño)
   - `components.md` — mapeo sección → componente de la biblioteca
2. Ejecutar `pnpm build:templates` para actualizar el índice

## Roadmap

| PRD | Descripción | Estado | Issue |
|-----|-------------|--------|-------|
| PRD-01 | Monorepo + estructura de workspaces | ✅ | [#1](https://github.com/JTRC83/biblioteca-componentes/issues/1) |
| PRD-02 | Sistema de catalogación de componentes | ✅ | [#2](https://github.com/JTRC83/biblioteca-componentes/issues/2) |
| PRD-03 | Backend Next.js + API REST | ✅ | [#3](https://github.com/JTRC83/biblioteca-componentes/issues/3) |
| PRD-04 | MCP Server para conexión IA | ✅ | [#4](https://github.com/JTRC83/biblioteca-componentes/issues/4) |
| PRD-05 | Catálogo de plantillas web | ✅ | [#5](https://github.com/JTRC83/biblioteca-componentes/issues/5) |
| PRD-06 | Integración IA + sistema de generación | ✅ | [#6](https://github.com/JTRC83/biblioteca-componentes/issues/6) |

## Stack

- **Vue 3** + Vite 6 (biblioteca visual)
- **Next.js 15** (API REST, App Router, JavaScript)
- **@modelcontextprotocol/sdk** (MCP Server, stdio transport)
- **Pinia** (estado: tema, favoritos, filtros)
- **Heroicons** (iconos UI)
- **pnpm workspaces** (monorepo)
- Sin TypeScript, sin Tailwind, sin frameworks extra

## Licencia

MIT