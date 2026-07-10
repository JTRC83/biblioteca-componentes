# Few-shot Example — Blog minimalista

Ejemplo completo del flujo de generación: petición del cliente → llamadas a tools MCP → HTML final generado.

Demuestra un caso de **adaptación**: no existe plantilla de blog, así que se adapta `landing-portfolio-minimal`.

---

## Petición del cliente

> "Quiero un blog minimalista para escribir sobre tecnología."

---

## Paso 1 — Analizar la petición

- **Industria**: blog (no tiene plantilla propia)
- **Colores del cliente**: no especifica
- **Secciones pedidas**: (implícitas: lista de artículos, hero)
- **Estilo**: minimalista (explícito)

---

## Paso 2 — `list_templates`

```
list_templates({})
```

**Respuesta:**

```
5 plantilla(s) disponible(s):

## Agency Dark Landing
- ID: landing-agency-dark
- Industria: agency, creative, design, marketing

## E-commerce Shop Landing
- ID: landing-ecommerce-shop
- Industria: ecommerce, retail, fashion, product

## Mobile App Landing
- ID: landing-mobile-app
- Industria: app, mobile, tech, startup

## Portfolio Minimal Landing
- ID: landing-portfolio-minimal
- Industria: portfolio, personal, design, creative

## SaaS Modern Landing
- ID: landing-saas-modern
- Industria: saas, tech, startup
```

**Decisión:** no hay plantilla de `blog`. El cliente pide estilo minimalista → `landing-portfolio-minimal` es la base más cercana (tema claro, minimal, tipografía limpia). Adaptamos su sección "projects" a "artículos".

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
--color-background: #fafafa;
--font-sans: 'Inter', system-ui, sans-serif;
--font-size-heading: clamp(2.5rem, 6vw, 5rem);
--line-height-base: 1.7;
...

## Mapeo de Componentes
### Projects
- card-3d — Tarjeta 3D para cada proyecto
- card-project — Card de proyecto con imagen + título + categoría

### Contact
- input-underline — Input estilo underline
```

**Adaptación de secciones:**
- `hero` → hero del blog (título + tagline)
- `projects` → **artículos** (lista de posts, usando `card-project`)
- `about` → **sobre el autor** (usando `card-profile`)
- `contact` → **newsletter** (usando `input-underline`)

---

## Paso 4 — `suggest_components`

Buscamos componentes para la lista de artículos con descripción natural:

```
suggest_components({ description: "minimal clean article card for blog" })
```

**Respuesta (resumida):**

```
Sugerencias basadas en "minimal clean article card for blog":

## Project Card
- ID: card-project
- Categoría: cards
- Tags: card, project, image, title, category, hover
- Colores dominantes: #4e84ff, #4444bd, #0578c5, #a6c2f0, #b2b2fd

## Receipt Card
- ID: card-receipt
- Categoría: cards
- Tags: receipt, minimal, clean
- Estilo: minimal

## Job Offer Card
- ID: card-job-offer
- Categoría: cards
- Estilo: minimal

## Pill Toggle
- ID: tgl-pill
- Categoría: toggles
- Estilo: minimal
...
```

**Decisión:** `card-project` para los artículos (tiene título + categoría, encaja con post). Desaturamos los azules a grises para el look monocromo minimal.

---

## Paso 5 — `get_component`

```
get_component({ id: "card-project" })
```

**Respuesta (resumida):**

```
## Project Card
- ID: card-project
### HTML
<article class="aw-wrapper">
  <div class="aw-container"></div>
  <div class="aw-info">
    <div class="aw-flex">
      <div class="aw-title">Project</div>
      <div class="aw-hover"><svg ...>...</svg></div>
    </div>
    <div class="aw-types">
      <span class="aw-tag">• Analytics</span>
      <span class="aw-tag">• Dashboards</span>
    </div>
  </div>
</article>
```

---

## Paso 6 — Adaptación

- "Project" → título del artículo
- "aw-tag" → categoría del post (ej: "IA", "Web")
- Colores azules → grises monocromos (`var(--color-secondary)` = `#525252`)
- La sección `about` del portfolio → "Sobre el autor" usando `card-profile`
- La sección `contact` → newsletter con `input-underline`

---

## Paso 7 — Generar HTML+CSS

Output final (abreviado, ~60 líneas):

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Notas de código — Blog sobre tecnología</title>
  <meta name="description" content="Blog minimalista sobre desarrollo, IA y tecnología. Artículos claros, sin ruido.">
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
    section { padding: var(--space-section) 24px; max-width: 720px; margin: 0 auto; }
    .grid { display: grid; gap: 32px; }

    /* === Hero Section === */
    .blog-hero { padding-top: 160px; padding-bottom: 80px; }
    .blog-hero h1 { font-size: var(--font-size-heading); font-weight: 700; line-height: 1.1; margin-bottom: 16px; letter-spacing: -0.02em; }
    .blog-hero p { font-size: 1.25rem; color: var(--color-text-secondary); }

    /* === Artículos (adaptado de Projects con card-project, monocromo) === */
    .blog-articles-aw-wrapper { cursor: pointer; }
    .blog-articles-aw-container { background: var(--color-surface); aspect-ratio: 16/9; border-radius: 8px; }
    .blog-articles-aw-title { font-size: 1.375rem; font-weight: 600; color: var(--color-primary); margin-top: 16px; }
    .blog-articles-aw-tag { background: rgba(82, 82, 82, 0.1); color: var(--color-secondary); padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; }
    .blog-articles-aw-wrapper:hover .blog-articles-aw-title { text-decoration: underline; }

    /* === Sobre el autor (adaptado de About con card-profile) === */
    .blog-author-card-profile { /* card-profile monocromo */ ... }

    /* === Newsletter (adaptado de Contact con input-underline) === */
    .blog-newsletter-input-underline {
      border: none; border-bottom: 1px solid var(--color-primary);
      background: transparent; padding: 12px 0; font-size: 1rem;
      font-family: inherit; color: var(--color-text); width: 100%; max-width: 360px;
    }
    .blog-newsletter-input-underline:focus { outline: none; border-bottom-color: var(--color-secondary); }
  </style>
</head>
<body>
  <section class="blog-hero">
    <h1>Notas de código</h1>
    <p>Escritos sobre desarrollo, IA y la web. Sin ruido.</p>
  </section>

  <section class="blog-articles">
    <h2>Últimos artículos</h2>
    <div class="grid">
      <article class="blog-articles-aw-wrapper">
        <div class="blog-articles-aw-container"></div>
        <div class="blog-articles-aw-info">
          <div class="blog-articles-aw-flex">
            <div class="blog-articles-aw-title">Por qué Rust gana terreno</div>
          </div>
          <div class="blog-articles-aw-types">
            <span class="blog-articles-aw-tag">• Rust</span>
            <span class="blog-articles-aw-tag">• Sistemas</span>
          </div>
        </div>
      </article>
      <article class="blog-articles-aw-wrapper">
        <div class="blog-articles-aw-container"></div>
        <div class="blog-articles-aw-info">
          <div class="blog-articles-aw-flex">
            <div class="blog-articles-aw-title">LLMs en producción: 5 antipatrones</div>
          </div>
          <div class="blog-articles-aw-types">
            <span class="blog-articles-aw-tag">• IA</span>
            <span class="blog-articles-aw-tag">• Backend</span>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="blog-author"><!-- card-profile — sobre el autor --></section>

  <section class="blog-newsletter">
    <h2>Suscríbete</h2>
    <input class="blog-newsletter-input-underline" type="email" placeholder="tu@email.com" />
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
    "Clase '.blog-author' usada en HTML pero no definida en CSS (¿typo o falta de style?)."
  ]
}
```

**Resultado:** web válida. La sección sobre el autor hereda estilos de `section`, no necesita clase propia. Se entrega al cliente.

**Nota:** este ejemplo demuestra que cuando no hay plantilla exacta para la industria pedida (blog), el sistema **adapta** la más cercana por estilo (portfolio-minimal → blog) reusando sus secciones con contenido recontextualizado (projects → artículos, about → autor, contact → newsletter).