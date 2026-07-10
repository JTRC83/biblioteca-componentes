# AI Integration System — biblioteca-componentes

Sistema de generación de webs con IA que combina el catálogo de **236 componentes** HTML+CSS con **5 plantillas web** para que un agente de IA genere landings completas, responsive y autónomas.

Este módulo (`backend/ai/`) es la capa de integración que une:

```
catálogo de componentes (236)  ─┐
plantillas web (5)             ─┼─→  System Prompt + Examples  ─→  IA  ─→  HTML+CSS  ─→  Validación  ─→  Web
MCP Server (10 tools)          ─┘
```

---

## Cómo funciona el sistema de generación

El flujo end-to-end, del cliente a la web final:

```
1. Petición del cliente (lenguaje natural)
   "Necesito una landing para mi SaaS de gestión de tareas, color verde"
        │
        ▼
2. La IA lee el system prompt (system-prompt.md)
   → aprende el flujo de 8 pasos y las reglas de adaptación
        │
        ▼
3. La IA llama a los tools MCP en orden:
   list_templates → get_template → search_components / suggest_components → get_component → get_adaptation_guide
        │
        ▼
4. La IA genera un documento HTML+CSS único y autónomo:
   - Copia los design tokens de la plantilla (:root con --color-*)
   - Sobreescribe los colores con los del cliente
   - Inserta cada componente con un prefijo de clases único (scoped)
   - Adapta los colores hardcodeados del componente a variables CSS
        │
        ▼
5. La IA valida el output con validate_web
   → corrige errores, itera hasta que valid:true
        │
        ▼
6. Entrega el HTML al cliente (un solo archivo, abre en navegador)
```

La IA **no inventa componentes ni CSS**: usa componentes reales del catálogo (HTML+CSS puro, sin JavaScript) y los adapta. Por eso todas las webs generadas son CSS-only y autónomas.

---

## Estructura del módulo

```
backend/ai/
├── system-prompt.md       # Instrucciones para la IA (flujo + reglas + formato)
├── examples/              # 5 few-shot examples (petición → tools → HTML)
│   ├── saas-task-manager.md
│   ├── ecommerce-coffee.md
│   ├── portfolio-designer.md
│   ├── agency-creative.md
│   └── blog-minimal.md
├── validate.mjs           # Validador de HTML+CSS (validateHTML, validateCSS, validateWeb)
├── playground.mjs         # CLI que simula el flujo de generación
└── README.md              # Este archivo
```

Además, el MCP Server (`backend/mcp/server.mjs`) expone el tool `validate_web` para que la IA valide su output desde el mismo contexto.

---

## System Prompt

Archivo: [`system-prompt.md`](./system-prompt.md)

Define el rol ("generador de webs con biblioteca de componentes"), el flujo de trabajo en 8 pasos, las reglas de adaptación (preservar HTML, colores via variables CSS, renombrar clases con prefijo, mantener responsive), el formato de salida (un único HTML autónomo) y las limitaciones (sin JavaScript, sin Tailwind, CSS-only).

**Cómo usarlo:** cárgalo como system message en el agente de IA antes de la petición del cliente. El prompt referencia los tools MCP por nombre, así que el agente debe tener el MCP server configurado.

---

## Ejemplos few-shot

Cinco ejemplos completos en [`examples/`](./examples/) que muestran el flujo real tool-por-tool y el HTML resultante. Útiles como contexto adicional para la IA (few-shot prompting) o como referencia humana.

| Ejemplo | Petición del cliente | Plantilla | Casos de uso | Qué demuestra |
|---------|----------------------|-----------|--------------|---------------|
| [`saas-task-manager.md`](./examples/saas-task-manager.md) | "Necesito una landing para mi SaaS de gestión de tareas" | landing-saas-modern | `search_components` por useCase, `get_component`, adaptación a verde | Flujo canónico completo con 6 secciones |
| [`ecommerce-coffee.md`](./examples/ecommerce-coffee.md) | "Necesito una tienda online para mi cafetería" | landing-ecommerce-shop | `search_components` content-card, adaptación ámbar→café | Adaptación de color scheme cálida |
| [`portfolio-designer.md`](./examples/portfolio-designer.md) | "Quiero un portfolio para mi trabajo como diseñador" | landing-portfolio-minimal | `suggest_components` con descripción natural | Búsqueda semántica en vez de filtros exactos |
| [`agency-creative.md`](./examples/agency-creative.md) | "Necesito una landing para mi agencia creativa" | landing-agency-dark | `search_components` por estilo neon, glows | Estética oscura + neon |
| [`blog-minimal.md`](./examples/blog-minimal.md) | "Quiero un blog minimalista" | landing-portfolio-minimal (adaptada) | `suggest_components` minimal, recontextualización de secciones | Adaptación cuando no hay plantilla exacta |

Cada ejemplo incluye:
- La petición original del cliente.
- El parseo de intención (industria, colores, secciones, estilo).
- Las llamadas reales a tools con sus respuestas (resumidas).
- El HTML+CSS final generado (abreviado pero realista).
- El resultado de `validate_web`.

---

## Sistema de validación

Archivo: [`validate.mjs`](./validate.mjs)

Validador de HTML+CSS sin dependencias externas (solo regex y heurísticas). Exporta tres funciones:

### `validateHTML(html)` → `{ valid, warnings, errors }`

Comprueba:
- DOCTYPE presente.
- Tags estructurales balanceados (`<html>`, `<head>`, `<body>`, `<title>`).
- Meta tags obligatorios: `charset`, `viewport`, `title`.
- Meta `description` (warning si falta — SEO).
- Tags balanceables comunes (`section`, `div`, `p`, `a`, `button`, etc.).
- Comentarios HTML balanceados.
- Un único `<h1>` (warning).

### `validateCSS(css)` → `{ valid, warnings, errors }`

Comprueba:
- Llaves `{` `}` balanceadas.
- Selectores sueltos sin bloque (warning).
- Propiedades sin valor (`color:;` → error).
- Colores hex hardcodeados en exceso (warning → mover a variables CSS).
- Uso excesivo de `!important` (warning).
- Dimensiones en `px` fijas en width/height (warning → responsive).

### `validateWeb(html, css)` → `{ valid, warnings, errors, summary }`

Combina las dos anteriores y añade:
- Detección de **colisiones de clases**: clases genéricas de alto riesgo (`.button`, `.card`, `.icon`...) usadas sin prefijo de sección.
- Clases en HTML no definidas en CSS (posible typo).
- Uso de unidades responsive (`rem`/`em`/`%`/`clamp()`).
- Colores hex en `style` inline del HTML.
- Un `summary` legible: `✅ Web válida. N advertencia(s).` o `❌ Web con N error(es)...`.

### CLI

```bash
# Uso (imprime ayuda):
node ai/validate.mjs

# Validar un HTML (extrae su <style>):
node ai/validate.mjs path/to/web.html

# Validar HTML + CSS por separado:
node ai/validate.mjs path/to/web.html path/to/style.css
```

Devuelve exit code `0` si es válido, `1` si hay errores.

### MCP tool `validate_web`

El MCP server expone el validador como tool para que la IA lo llame directamente:

```
validate_web({ html: "...", css: "..." })   // css opcional, se extrae del <style> si se omite
```

Devuelve `{ valid, warnings, errors, summary }` en texto + JSON.

---

## Playground

Archivo: [`playground.mjs`](./playground.mjs)

CLI que simula el flujo completo de la IA sin necesidad de un LLM. Útil para debuggear el catálogo, las plantillas y la generación.

### Uso

```bash
# El flow se imprime a stderr, el HTML a stdout:
node ai/playground.mjs "Necesito una landing para mi SaaS de gestión de tareas"

# Guardar el HTML a archivo:
node ai/playground.mjs "Quiero una tienda online para mi cafetería" > tienda.html

# Ver solo el flow (descartar el HTML):
node ai/playground.mjs "portfolio para diseñador" 2>&1 >/dev/null
```

### Qué hace

1. **Parsea la descripción** del cliente — detecta industria (saas, ecommerce, portfolio, agency, app, blog), colores mencionados (verde, azul, café, etc.) y estilo (minimal, neon, oscuro, moderno, vibrante).
2. **Matchea a una plantilla** por industria (keyword matching). Fallbacks: blog → portfolio-minimal, estilo oscuro → agency-dark, estilo minimal → portfolio-minimal.
3. **Para cada sección de la plantilla**, sugiere componentes del catálogo usando filtros por use case (`cta`, `content-card`, `profile-card`, `form-input`, `social-share`...).
4. **Genera un HTML básico** usando los design tokens de la plantilla + el CSS de cada componente, con:
   - Prefijo único por componente para evitar colisiones de clases.
   - Adaptación automática de colores dominantes del componente a `var(--color-primary)` / `var(--color-secondary)`.
   - Sobrescritura de `--color-*` con los colores del cliente.
5. **Valida el output** con `validate.mjs` y muestra el reporte.
6. **Imprime el HTML a stdout** (redirigible a archivo) y el flow paso a paso a stderr.

### Limitaciones del playground

El playground es una **simulación simplificada** del flujo de la IA real. No:
- Razona sobre el contexto semántico de cada sección (la IA sí).
- Escribe copy persuasivo (la IA sí).
- Aplica adaptaciones finas (glows, opacidades, tipografía) — solo sustituye colores dominantes.

Su valor está en validar que el catálogo, las plantillas y la maquinaria de prefijado/adaptación funcionan end-to-end.

---

## Configuración en agentes de IA

### opencode

Añade el MCP server al `opencode.json` (o `~/.config/opencode/opencode.json`):

```json
{
  "mcp": {
    "biblioteca-componentes": {
      "type": "local",
      "command": ["node", "backend/mcp/server.mjs"],
      "enabled": true
    }
  }
}
```

Y carga el system prompt como contexto en el agente. Para que el agente use el catálogo, incluye en sus instrucciones:

```
Cuando un usuario pida generar una web, sigue el flujo de backend/ai/system-prompt.md
y usa los tools MCP de biblioteca-componentes. Valida siempre con validate_web.
```

### Claude (Claude Code / Anthropic Console)

Configura el MCP server en `.mcp.json` (Claude Code) o en el Project:

```json
{
  "mcpServers": {
    "biblioteca-componentes": {
      "command": "node",
      "args": ["/ruta/absoluta/a/biblioteca-componentes/backend/mcp/server.mjs"]
    }
  }
}
```

Pega el contenido de `system-prompt.md` como system prompt en el proyecto o conversation.

### Codex (OpenAI)

En el `AGENTS.md` o prompt del agente, referencia el system prompt:

```markdown
## Web generation
When asked to generate a web/landing, follow `backend/ai/system-prompt.md` exactly.
Call the MCP tools (list_templates, get_template, search_components, suggest_components,
get_component, get_adaptation_guide, validate_web) in that order.
Always validate with validate_web before returning HTML to the user.
```

Configura el MCP server según el entorno de Codex.

### Hermes / otros agentes compatibles con MCP

Cualquier agente que soporte el protocolo MCP puede usar el sistema:

1. Registra el MCP server ejecutando `node backend/mcp/server.mjs` (transporte stdio).
2. Carga `backend/ai/system-prompt.md` como system prompt.
3. Opcionalmente incluye los 5 ejemplos de `backend/ai/examples/` como few-shot context.

---

## Flujo completo de referencia

```
┌─────────────────────────────────────────────────────────────────────┐
│  Cliente: "Necesito una landing para mi SaaS, color verde"          │
└────────────────────────────────┬────────────────────────────────────┘
                                 │
                  ┌──────────────▼──────────────┐
                  │  IA carga system-prompt.md  │
                  │  + 5 examples (few-shot)    │
                  └──────────────┬──────────────┘
                                 │
         ┌───────────────────────▼─────────────────────────┐
         │  Paso 1: Parsear intención                     │
         │  → industria=saas, color=verde, secciones=…   │
         └───────────────────────┬─────────────────────────┘
                                 │
         ┌───────────────────────▼─────────────────────────┐
         │  Paso 2: list_templates({industry:"saas"})      │
         │  → landing-saas-modern                          │
         └───────────────────────┬─────────────────────────┘
                                 │
         ┌───────────────────────▼─────────────────────────┐
         │  Paso 3: get_template({id:"landing-saas-modern"})│
         │  → design.md tokens + components.md mapeo       │
         └───────────────────────┬─────────────────────────┘
                                 │
         ┌───────────────────────▼─────────────────────────┐
         │  Paso 4-5: Por sección:                         │
         │    search_components({useCase:"cta"})           │
         │    suggest_components("feature card glass")      │
         │  → componentes con IDs                          │
         └───────────────────────┬─────────────────────────┘
                                 │
         ┌───────────────────────▼─────────────────────────┐
         │  Paso 6: get_component({id:"btn-get-started-gradient"})│
         │  → HTML + CSS + colores dominantes              │
         └───────────────────────┬─────────────────────────┘
                                 │
         ┌───────────────────────▼─────────────────────────┐
         │  Paso 7: get_adaptation_guide({id})             │
         │  → notas de adaptación                          │
         └───────────────────────┬─────────────────────────┘
                                 │
         ┌───────────────────────▼─────────────────────────┐
         │  Paso 8: Generar HTML+CSS                       │
         │  - :root con --color-primary:#22c55e (verde)    │
         │  - componentes con prefijo .saas-hero-*         │
         │  - colores hardcodeados → var(--color-primary)  │
         └───────────────────────┬─────────────────────────┘
                                 │
         ┌───────────────────────▼─────────────────────────┐
         │  Paso 9: validate_web({html, css})               │
         │  → { valid: true, warnings: [...] }             │
         │  → iterar si hay errors                         │
         └───────────────────────┬─────────────────────────┘
                                 │
                  ┌──────────────▼──────────────┐
                  │  Entregar HTML al cliente    │
                  │  (un archivo autónomo)       │
                  └─────────────────────────────┘
```

---

## Herramientas MCP disponibles

| Tool | Descripción |
|------|-------------|
| `search_components` | Busca componentes por texto y/o filtros (categoría, tags, useCase, estilo, complejidad) |
| `get_component` | Obtiene HTML+CSS completo + metadatos de un componente por ID |
| `get_components_by_use_case` | Lista componentes por caso de uso |
| `get_components_by_style` | Lista componentes por estilo visual |
| `suggest_components` | Sugiere componentes por descripción en lenguaje natural (scoring semántico) |
| `get_template` | Obtiene una plantilla web completa (prompt + design tokens + mapeo de componentes) |
| `list_templates` | Lista plantillas con filtros por tipo, industria o estilo |
| `get_design_system` | Design system global de la biblioteca (estilos, paleta, complejidad) |
| `get_adaptation_guide` | Instrucciones de adaptación específicas para un componente |
| `validate_web` | **Nuevo (PRD-06)** — valida HTML+CSS generado |

---

## Plantillas disponibles

| ID | Industria | Secciones | Tema |
|----|-----------|-----------|------|
| `landing-saas-modern` | saas, tech, startup | hero, features, pricing, testimonials, cta, footer | oscuro + glassmorphism + indigo/violeta |
| `landing-portfolio-minimal` | portfolio, personal, design | hero, projects, about, contact | claro + minimal + monocromo |
| `landing-ecommerce-shop` | ecommerce, retail, fashion | hero, products, reviews, newsletter, footer | claro + cálido + ámbar/rojo |
| `landing-agency-dark` | agency, creative, marketing | hero, services, team, portfolio, cta, footer | oscuro + bold + neon violeta/magenta |
| `landing-mobile-app` | app, mobile, tech | hero, features, screenshots, download, footer | claro + limpio + azul |

---

## Scripts

```bash
# Validar (imprime usage):
node ai/validate.mjs

# Generar una web de prueba:
node ai/playground.mjs "Necesito una landing para mi SaaS de gestión de tareas"

# Generar y guardar a archivo:
node ai/playground.mjs "tienda online para mi cafetería" > tienda.html

# Iniciar el MCP server (stdio):
node mcp/server.mjs
```

---

## Notas técnicas

- Todo en **JavaScript (ESM)**, sin TypeScript, sin dependencias externas para el validador y el playground.
- El catálogo se carga desde `catalog/json/components.json` (236 componentes) vía `backend/lib/catalog.js`.
- Las plantillas se cargan desde `templates/index.json` + los archivos `design.md` y `components.md` de cada plantilla.
- Los componentes son HTML+CSS puro (sin JavaScript) — toda la interactividad es CSS (`:hover`, `:checked`, transiciones).
- El validador usa heurísticas con regex (no parsea CSS propiamente); es intencionalmente conservador para no dar falsos positivos en errores.