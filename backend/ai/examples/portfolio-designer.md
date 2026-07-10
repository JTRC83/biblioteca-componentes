# Few-shot Example — Portfolio de diseñador

Ejemplo completo del flujo de generación: petición del cliente → llamadas a tools MCP → HTML final generado.

---

## Petición del cliente

> "Quiero un portfolio para mi trabajo como diseñador, minimalista, que muestre mis proyectos."

---

## Paso 1 — Analizar la petición

- **Industria**: portfolio (diseñador, personal)
- **Colores del cliente**: no especifica → la plantilla aporta monocromo (`#1a1a1a` / `#fafafa`)
- **Secciones pedidas**: proyectos
- **Estilo**: minimalista (explícito)

---

## Paso 2 — `list_templates`

```
list_templates({ industry: "portfolio" })
```

**Respuesta:**

```
1 plantilla(s) disponible(s):

## Portfolio Minimal Landing
- ID: landing-portfolio-minimal
- Tipo: landing
- Secciones: hero, projects, about, contact
- Estilos: minimal, clean, light, typography
- Industria: portfolio, personal, design, creative
- Descripción: Portfolio minimalista con tema claro, mucho whitespace, tipografía limpia y grid de proyectos
```

**Decisión:** plantilla seleccionada `landing-portfolio-minimal` — encaja industria y estilo.

---

## Paso 3 — `get_template`

```
get_template({ id: "landing-portfolio-minimal" })
```

**Respuesta (resumida):**

```
# Plantilla: Portfolio Minimal Landing
**Secciones**: hero, projects, about, contact

## Color Scheme
{ "primary": "#1a1a1a", "secondary": "#525252", "background": "#fafafa",
  "surface": "#ffffff", "text": "#1a1a1a", "textSecondary": "#737373" }

## Design Tokens (:root)
--color-primary: #1a1a1a;
--color-secondary: #525252;
--color-background: #fafafa;
--color-surface: #ffffff;
--font-sans: 'Inter', system-ui, sans-serif;
--font-size-heading: clamp(2.5rem, 6vw, 5rem);
--line-height-base: 1.7;
...

## Mapeo de Componentes
### Hero
- btn-learn-more — Botón minimalista para "Ver trabajo"

### Projects
- card-3d — Tarjeta 3D para cada proyecto, tilt sutil al hover
- card-hover-fill — Efecto de fill para hover
- card-project — Card específica de proyecto con imagen + título + categoría

### About
- card-profile — Card de perfil con retrato + bio

### Contact
- input-underline — Input estilo underline para email
```

---

## Paso 4 — `suggest_components` (búsqueda semántica)

En vez de `search_components` por filtro exacto, usamos `suggest_components` con descripción natural:

```
suggest_components({ description: "project card with hover effect for portfolio" })
```

**Respuesta (resumida):**

```
Sugerencias basadas en "project card with hover effect for portfolio":

## Project Card
- ID: card-project
- Categoría: cards
- Tags: card, project, image, title, category, hover, css-only
- Casos de uso: content-card, product-card, profile-card
- Colores dominantes: #4e84ff, #4444bd, #0578c5, #a6c2f0, #b2b2fd

## Hover Fill Card
- ID: card-hover-fill
- Categoría: cards
- Tags: card, hover, fill, animated
- Colores dominantes: #e8e8e8, #f89b29, #ff0f7b

## 3D Hover Card
- ID: card-3d
- Categoría: cards
- Tags: 3d, hover, tilt, perspective
- Colores dominantes: #1f1f24, #2a2a32, #2c2c34, #f4f4f5, #a1a1aa
...
```

**Decisión:** `card-project` es el componente ideal (tags incluyen `project`, `hover`, `title`, `category`). Lo usamos para la sección projects.

---

## Paso 5 — `get_component`

```
get_component({ id: "card-project" })
```

**Respuesta (resumida):**

```
## Project Card
- ID: card-project
- Colores dominantes: #4e84ff, #4444bd, #0578c5, #a6c2f0, #b2b2fd

### HTML
<article class="aw-wrapper">
  <div class="aw-container"></div>
  <div class="aw-info">
    <div class="aw-flex">
      <div class="aw-title">Project</div>
      <div class="aw-hover">
        <svg ...><line y2="12" x2="19" y1="12" x1="5"></line>
        <polyline points="12 5 19 12 12 19"></polyline></svg>
      </div>
    </div>
    <div class="aw-types">
      <span class="aw-tag">• Analytics</span>
      <span class="aw-tag">• Dashboards</span>
    </div>
  </div>
</article>

### CSS (2064 chars)
.aw-wrapper { ... }
.aw-container { /* imagen del proyecto */ }
.aw-title { font-size: 1.2em; font-weight: 600; }
.aw-hover { /* icono flecha que aparece en hover */ }
.aw-tag { /* categoría */ }
```

---

## Paso 6 — Adaptación

El portfolio es monocromo. El `card-project` trae colores azules (`#4e84ff`), pero los desaturamos a grises:
- `#4e84ff` → `var(--color-secondary)` = `#525252` (gris medio)
- El resto de grises del componente ya encajan con el tema claro.

No añadimos sombras agresivas ni gradientes — el portfolio minimal prioriza whitespace.

---

## Paso 7 — Generar HTML+CSS

Output final (abreviado, ~60 líneas):

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sofía Rivas — Diseñadora</title>
  <meta name="description" content="Portfolio de Sofía Rivas, diseñadora de producto e interfaces.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --color-primary: #1a1a1a;
      --color-secondary: #525252;
      --color-background: #fafafa;
      --color-surface: #ffffff;
      --color-text: #1a1a1a;
      --color-text-secondary: #737373;
      --font-sans: 'Inter', system-ui, sans-serif;
      --font-size-heading: clamp(2.5rem, 6vw, 5rem);
      --line-height-base: 1.7;
      --space-section: 80px;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--font-sans); background: var(--color-background); color: var(--color-text); line-height: var(--line-height-base); }
    section { padding: var(--space-section) 24px; max-width: 1200px; margin: 0 auto; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 32px; }

    /* === Hero Section === */
    .portfolio-hero { padding-top: 160px; padding-bottom: 80px; }
    .portfolio-hero h1 { font-size: var(--font-size-heading); font-weight: 700; line-height: 1.1; margin-bottom: 24px; letter-spacing: -0.02em; }
    .portfolio-hero p { font-size: 1.25rem; color: var(--color-text-secondary); max-width: 480px; }

    /* === Projects Section === */
    .portfolio-projects-aw-wrapper { /* card-project adaptado (desaturado a grises) */ ... }
    .portfolio-projects-aw-container { background: var(--color-surface); aspect-ratio: 4/3; }
    .portfolio-projects-aw-title { font-size: 1.2em; font-weight: 600; color: var(--color-primary); }
    .portfolio-projects-aw-tag { background: rgba(82, 82, 82, 0.12); color: var(--color-secondary); }

    /* === About === */
    .portfolio-about-card-profile { /* card-profile monocromo */ ... }

    /* === Contact === */
    .portfolio-contact-input-underline { /* input underline minimal */ ... }
  </style>
</head>
<body>
  <section class="portfolio-hero">
    <h1>Sofía Rivas<br>Diseñadora de producto</h1>
    <p>Diseño interfaces digitales con foco en claridad y detalle.</p>
  </section>

  <section class="portfolio-projects">
    <h2>Proyectos seleccionados</h2>
    <div class="grid">
      <article class="portfolio-projects-aw-wrapper">
        <div class="portfolio-projects-aw-container"></div>
        <div class="portfolio-projects-aw-info">
          <div class="portfolio-projects-aw-flex">
            <div class="portfolio-projects-aw-title">Banking App</div>
            <div class="portfolio-projects-aw-hover">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24">
                <line y2="12" x2="19" y1="12" x1="5"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
          <div class="portfolio-projects-aw-types">
            <span class="portfolio-projects-aw-tag">• UX</span>
            <span class="portfolio-projects-aw-tag">• iOS</span>
          </div>
        </div>
      </article>
      <!-- 2× más card-project -->
    </div>
  </section>

  <section class="portfolio-about">
    <!-- card-profile -->
  </section>

  <section class="portfolio-contact">
    <!-- input-underline -->
  </section>
</body>
</html>
```

---

## Paso 8 — `validate_web`

```
validate_web({ html: "...", css: "..." })
```

**Respuesta:**

```json
{
  "valid": true,
  "summary": "✅ Web válida. 1 advertencia(s).",
  "errors": [],
  "warnings": [
    "Clase '.portfolio-about' usada en HTML pero no definida en CSS (¿typo o falta de style?)."
  ]
}
```

**Resultado:** web válida. La sección about hereda estilos de `section`, no necesita clase propia. Se entrega al cliente.