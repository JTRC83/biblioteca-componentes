# Few-shot Example — SaaS de gestión de tareas

Ejemplo completo del flujo de generación: petición del cliente → llamadas a tools MCP → HTML final generado.

---

## Petición del cliente

> "Necesito una landing para mi SaaS de gestión de tareas, con color verde, que tenga pricing y testimonios."

---

## Paso 1 — Analizar la petición

- **Industria**: saas (gestión de tareas, SaaS)
- **Colores del cliente**: verde (no especifica tono → `#22c55e` primary, `#16a34a` secondary)
- **Secciones pedidas**: pricing, testimonios (+ las que aporta la plantilla)
- **Estilo**: moderno (heredado de la plantilla saas-modern)

---

## Paso 2 — `list_templates`

```
list_templates({ industry: "saas" })
```

**Respuesta:**

```
1 plantilla(s) disponible(s):

## SaaS Modern Landing
- ID: landing-saas-modern
- Tipo: landing
- Secciones: hero, features, pricing, testimonials, cta, footer
- Estilos: modern, minimal, gradient, glassmorphism
- Industria: saas, tech, startup
- Descripción: Landing page moderna para SaaS con hero centrado, features grid, pricing y CTA
```

**Decisión:** plantilla seleccionada `landing-saas-modern` — encaja industria y ya incluye pricing + testimonials.

---

## Paso 3 — `get_template`

```
get_template({ id: "landing-saas-modern" })
```

**Respuesta (resumida):**

```
# Plantilla: SaaS Modern Landing
**Secciones**: hero, features, pricing, testimonials, cta, footer

## Color Scheme
{ "primary": "#6366f1", "secondary": "#8b5cf6", "background": "#0a0a0c",
  "surface": "#18181c", "text": "#f4f4f5", "textSecondary": "#a1a1aa" }

## Design Tokens (:root)
--color-primary: #6366f1;
--color-secondary: #8b5cf6;
--color-background: #0a0a0c;
--color-surface: #18181c;
--font-size-heading: clamp(2rem, 5vw, 4rem);
...

## Mapeo de Componentes
### Hero
- btn-get-started-gradient — Botón CTA principal con gradiente
- bg-night-sky — Fondo animado con estrellas

### Features
- card-glass — Tarjeta glassmorphism para cada feature
...

### Pricing
- card-glass — Tarjeta base para cada plan
- btn-get-started-gradient — Botón CTA en plan Pro
- cb-gradient-check — Checkbox con gradiente para features
```

---

## Paso 4 — `search_components` (para la sección CTA del hero)

```
search_components({ useCase: "cta", includeCode: false })
```

**Respuesta (resumida):**

```
Encontrados 38 componente(s).

## Get Started Gradient
- ID: btn-get-started-gradient
- Categoría: buttons
- Tags: gradient, animated, arrow, css-only
- Estilo: neon, gradient, transition, animated, css-only
- Casos de uso: cta, action-button, form-submit, navigation, gradient, animation

## Neon Button
- ID: btn-neon
- Categoría: buttons
...
```

---

## Paso 5 — `get_component`

```
get_component({ id: "btn-get-started-gradient" })
```

**Respuesta (resumida):**

```
## Get Started Gradient
- ID: btn-get-started-gradient
- Complejidad: low
- Colores dominantes: #21d4fd, #b721ff
- Notas de adaptación: Usa unidades relativas (em/rem). Colores hardcodeados.
  Extraer a variables CSS para tematización.

### HTML
<button class="cssbuttons-io-button"> Get started
  <div class="icon">
    <svg height="24" width="24" viewBox="0 0 24 24" ...>
      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
    </svg>
  </div>
</button>

### CSS
.cssbuttons-io-button {
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  color: white;
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 17px;
  border-radius: 10em;
  border: none;
  height: 2.8em;
  padding-right: 3.3em;
  cursor: pointer;
  box-shadow: 0 0 1.6em rgba(183, 33, 255,0.3),0 0 1.6em hsla(191, 98%, 56%, 0.3);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}
.cssbuttons-io-button .icon { background: white; ... }
.cssbuttons-io-button:hover .icon { width: calc(100% - 0.6em); }
...
```

---

## Paso 6 — `get_adaptation_guide`

```
get_adaptation_guide({ id: "btn-get-started-gradient" })
```

**Respuesta (resumida):**

```
# Guía de adaptación: Get Started Gradient

## Notas de adaptación
Usa unidades relativas (em/rem). Ajustar font-size del contenedor para escalar.
Colores hardcodeados. Extraer a variables CSS para tematización.
Modificar fill/stroke del SVG para adaptar colores.

## Colores dominantes: #21d4fd, #b721ff
## Color scheme: mixed
```

**Acción de adaptación:**
- `#21D4FD` → `var(--color-primary)` = `#22c55e` (verde del cliente)
- `#B721FF` → `var(--color-secondary)` = `#16a34a`
- `rgba(183,33,255,...)` → `rgba(34,197,94,...)` (verde)

---

## Paso 7 — Generar HTML+CSS

Output final (abreviado, ~100 líneas; el real tiene las 6 secciones completas):

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>TaskFlow — Gestiona tus tareas sin caos</title>
  <meta name="description" content="SaaS de gestión de tareas para equipos. Organiza, prioriza y entrega a tiempo.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --color-primary: #22c55e;
      --color-primary-hover: #16a34a;
      --color-secondary: #16a34a;
      --color-background: #0a0a0c;
      --color-surface: #18181c;
      --color-text: #f4f4f5;
      --color-text-secondary: #a1a1aa;
      --font-sans: 'Inter', system-ui, sans-serif;
      --font-size-heading: clamp(2rem, 5vw, 4rem);
      --line-height-base: 1.6;
      --space-section: 80px;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--font-sans); background: var(--color-background); color: var(--color-text); line-height: var(--line-height-base); }
    section { padding: var(--space-section) 24px; max-width: 1200px; margin: 0 auto; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 24px; }

    /* === Hero Section === */
    .saas-hero { text-align: center; padding-top: 120px; padding-bottom: 120px; }
    .saas-hero h1 { font-size: var(--font-size-heading); margin-bottom: 24px; }
    .saas-hero p { font-size: 1.25rem; color: var(--color-text-secondary); max-width: 600px; margin: 0 auto 40px; }

    /* componente btn-get-started-gradient adaptado (verde) */
    .saas-hero-cta-cssbuttons-io-button {
      background-image: linear-gradient(19deg, var(--color-primary) 0%, var(--color-secondary) 100%);
      color: white; font-family: inherit; padding: 0.35em; padding-left: 1.2em;
      font-size: 17px; border-radius: 10em; border: none; height: 2.8em;
      padding-right: 3.3em; cursor: pointer;
      box-shadow: 0 0 1.6em rgba(34, 197, 94, 0.3);
      transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
      display: inline-flex; align-items: center; overflow: hidden; position: relative;
    }
    .saas-hero-cta-cssbuttons-io-button .saas-hero-cta-icon {
      background: white; margin-left: 1em; position: absolute; display: flex;
      align-items: center; justify-content: center; height: 2.2em; width: 2.2em;
      border-radius: 10em; right: 0.3em; transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    }
    .saas-hero-cta-cssbuttons-io-button:hover .saas-hero-cta-icon { width: calc(100% - 0.6em); }
    .saas-hero-cta-cssbuttons-io-button .saas-hero-cta-icon svg { width: 1.1em; color: var(--color-secondary); }

    /* === Features Section === */
    .saas-features-card-glass { /* card-glass adaptado — glassmorphism con verde */ ... }

    /* === Pricing Section === */
    .saas-pricing-card-glass { /* ... */ }
    .saas-pricing-cb-gradient-check { /* checkbox gradiente verde */ ... }

    /* === Footer === */
    .saas-footer-btn-social-hover { /* ... */ }
  </style>
</head>
<body>
  <section class="saas-hero">
    <h1>Gestiona tus tareas sin caos</h1>
    <p>TaskFlow organiza, prioriza y ayuda a tu equipo a entregar a tiempo.</p>
    <button class="saas-hero-cta-cssbuttons-io-button"> Empieza gratis
      <div class="saas-hero-cta-icon">
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
        </svg>
      </div>
    </button>
  </section>

  <section class="saas-features">
    <h2>Características</h2>
    <div class="grid">
      <!-- 3× card-glass adaptado a verde -->
      <div class="saas-features-card-glass">Tabs y listas</div>
      <div class="saas-features-card-glass">Automatizaciones</div>
      <div class="saas-features-card-glass">Reportes en tiempo real</div>
    </div>
  </section>

  <section class="saas-pricing">
    <h2>Precios</h2>
    <div class="grid">
      <!-- plan Free / Pro (con btn-get-started-gradient) / Team -->
    </div>
  </section>

  <section class="saas-testimonials">
    <h2>Testimonios</h2>
    <div class="grid">
      <!-- card-glass + card-profile adaptados -->
    </div>
  </section>

  <section class="saas-cta">
    <!-- CTA grande con btn-get-started-gradient + bg-mesh verde -->
  </section>

  <footer class="saas-footer">
    <!-- btn-social-hover + links -->
  </footer>
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
  "summary": "✅ Web válida. 2 advertencia(s).",
  "errors": [],
  "warnings": [
    "3 colores hex hardcodeados. Considera moverlos a variables CSS (--color-*).",
    "Clase '.saas-hero' usada en HTML pero no definida en CSS (¿typo o falta de style?)."
  ]
}
```

**Resultado:** la web es válida. Las 2 advertencias son menores (algún color residual del SVG, y el nombre de sección no necesita clase propia). Se entrega al cliente.