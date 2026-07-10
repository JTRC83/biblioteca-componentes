# Few-shot Example — Agencia creativa

Ejemplo completo del flujo de generación: petición del cliente → llamadas a tools MCP → HTML final generado.

---

## Petición del cliente

> "Necesito una landing para mi agencia creativa, con estética neón y servicios."

---

## Paso 1 — Analizar la petición

- **Industria**: agency (agencia, creativa)
- **Colores del cliente**: no especifica → la plantilla aporta violeta `#a855f7` + magenta `#ec4899`
- **Secciones pedidas**: servicios
- **Estilo**: neón (explícito)

---

## Paso 2 — `list_templates`

```
list_templates({ industry: "agency" })
```

**Respuesta:**

```
1 plantilla(s) disponible(s):

## Agency Dark Landing
- ID: landing-agency-dark
- Tipo: landing
- Secciones: hero, services, team, portfolio, cta, footer
- Estilos: dark, bold, neon, gradient
- Industria: agency, creative, design, marketing
- Descripción: Landing de agencia creativa con tema oscuro, acentos neon, gradientes violeta y tipografía bold
```

**Decisión:** plantilla seleccionada `landing-agency-dark` — encaja industria y estilo neón.

---

## Paso 3 — `get_template`

```
get_template({ id: "landing-agency-dark" })
```

**Respuesta (resumida):**

```
# Plantilla: Agency Dark Landing
**Secciones**: hero, services, team, portfolio, cta, footer

## Color Scheme
{ "primary": "#a855f7", "secondary": "#ec4899", "background": "#09090b",
  "surface": "#18181c", "text": "#fafafa", "textSecondary": "#a1a1aa" }

## Design Tokens (:root)
--color-primary: #a855f7;
--color-secondary: #ec4899;
--color-background: #09090b;
--color-surface: #18181c;
--font-sans: 'Space Grotesk', 'Inter', system-ui, sans-serif;
--font-size-heading: clamp(2.5rem, 7vw, 6rem);
--glow-sm: 0 0 12px rgba(168, 85, 247, 0.4);
--glow-md: 0 0 24px rgba(168, 85, 247, 0.5);
--glow-lg: 0 0 48px rgba(168, 85, 247, 0.4);
...

## Mapeo de Componentes
### Hero
- btn-get-started-gradient — Botón CTA con gradiente violeta→magenta + glow neón
- btn-circle-glow — Botón con glow circular para CTA alternativo
- bg-cosmic-plasma — Fondo cósmico con plasma
- anim-glow — Glow pulsante para el título

### Services
- card-cyber — Tarjeta estilo cyber perfecto para servicios con estética neón
- card-glass — Tarjeta glass para servicios con glassmorphism
- anim-glow — Glow neón en hover del borde

### Team
- card-profile — Card de perfil para cada miembro

### Portfolio
- card-3d — Tarjeta 3D para cada proyecto
- card-hover-fill — Efecto de fill en hover
```

---

## Paso 4 — `search_components` (estilo neón para el hero)

```
search_components({ style: "neon", includeCode: false })
```

**Respuesta (resumida):**

```
Encontrados 59 componente(s) con style="neon".

## Cyber Card
- ID: card-cyber
- Categoría: cards
- Tags: cyber, neon, grid, particles, glow
- Colores dominantes: #1a1a1a, #262626, #00ffaa, #00a2ff, #5c67ff

## Circle Glow Button
- ID: btn-circle-glow
- Categoría: buttons
- Colores dominantes: #1d1d29, #27283b, #2e3b4a, #1c2430, #00d4ff
...
```

**Decisión:** `btn-circle-glow` para el CTA del hero (glow neón), `card-cyber` para servicios.

---

## Paso 5 — `get_component`

```
get_component({ id: "card-cyber" })
```

**Respuesta (resumida):**

```
## Cyber Card
- ID: card-cyber
- Colores dominantes: #1a1a1a, #262626, #00ffaa, #00a2ff, #5c67ff
- Notas de adaptación: 5x5 grid de trackers, glow en borde al hover.

### HTML
<div class="cyber-card" id="cyber-card">
  <div class="cyber-card-inner">
    <div class="cyber-card-content">
      <h3 class="cyber-title">Branding</h3>
      <p class="cyber-text">Identidad visual completa...</p>
    </div>
  </div>
</div>

### CSS
.cyber-card { background: #1a1a1a; border: 1px solid #262626; ... }
.cyber-card:hover { border-color: #00ffaa; box-shadow: 0 0 24px rgba(0,255,170,0.4); }
...
```

---

## Paso 6 — Adaptación

El cliente no pidió colores, así que usamos los de la plantilla (violeta/magenta). El `card-cyber` trae verde neón `#00ffaa` y azul `#00a2ff` — los sustituimos por el violeta `#a855f7` y magenta `#ec4899` de la agencia para coherencia:
- `#00ffaa` → `var(--color-primary)` = `#a855f7`
- `#00a2ff` → `var(--color-secondary)` = `#ec4899`
- El glow `rgba(0,255,170,0.4)` → `rgba(168, 85, 247, 0.4)`

---

## Paso 7 — Generar HTML+CSS

Output final (abreviado, ~80 líneas):

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Neon Studio — Agencia creativa</title>
  <meta name="description" content="Agencia creativa especializada en branding, web y motion. Diseño con actitud.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --color-primary: #a855f7;
      --color-primary-hover: #9333ea;
      --color-secondary: #ec4899;
      --color-background: #09090b;
      --color-surface: #18181c;
      --color-text: #fafafa;
      --color-text-secondary: #a1a1aa;
      --font-sans: 'Space Grotesk', 'Inter', system-ui, sans-serif;
      --font-size-heading: clamp(2.5rem, 7vw, 6rem);
      --line-height-base: 1.5;
      --space-section: 80px;
      --glow-md: 0 0 24px rgba(168, 85, 247, 0.5);
      --glow-lg: 0 0 48px rgba(168, 85, 247, 0.4);
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--font-sans); background: var(--color-background); color: var(--color-text); line-height: var(--line-height-base); }
    section { padding: var(--space-section) 24px; max-width: 1200px; margin: 0 auto; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 24px; }

    /* === Hero Section === */
    .agency-hero { text-align: center; padding-top: 120px; }
    .agency-hero h1 {
      font-size: var(--font-size-heading); font-weight: 700; line-height: 1;
      text-transform: uppercase; letter-spacing: -0.02em;
      background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
      -webkit-background-clip: text; background-clip: text; color: transparent;
    }
    .agency-hero p { font-size: 1.25rem; color: var(--color-text-secondary); margin: 24px auto 40px; max-width: 560px; }

    /* componente btn-circle-glow adaptado (violeta neón) */
    .agency-hero-cta-btn-circle-glow {
      background: var(--color-surface); border: 2px solid var(--color-primary);
      color: var(--color-text); padding: 16px 32px; border-radius: 999px;
      cursor: pointer; transition: 400ms; position: relative;
      box-shadow: var(--glow-md);
    }
    .agency-hero-cta-btn-circle-glow:hover { box-shadow: var(--glow-lg); transform: scale(1.05); }

    /* === Services Section === */
    /* componente card-cyber adaptado (violeta/magenta) */
    .agency-services-card-cyber {
      background: var(--color-surface); border: 1px solid rgba(255,255,255,0.06);
      padding: 32px; border-radius: 12px; transition: 400ms; position: relative;
    }
    .agency-services-card-cyber:hover {
      border-color: var(--color-primary);
      box-shadow: 0 0 24px rgba(168, 85, 247, 0.4);
    }
    .agency-services-card-cyber .agency-services-cyber-title {
      font-size: 1.5rem; font-weight: 600; margin-bottom: 12px;
      color: var(--color-primary);
    }
    .agency-services-card-cyber .agency-services-cyber-text { color: var(--color-text-secondary); }

    /* === Team / Portfolio / CTA / Footer === */
    .agency-team-card-profile { /* card-profile con glow violeta */ ... }
    .agency-portfolio-card-3d { /* card-3d tilt */ ... }
    .agency-cta-btn-get-started-gradient { /* CTA grande gradiente */ ... }
  </style>
</head>
<body>
  <section class="agency-hero">
    <h1>Diseño con actitud</h1>
    <p>Branding, web y motion para marcas que quieren destacar.</p>
    <button class="agency-hero-cta-btn-circle-glow">Ver nuestro trabajo</button>
  </section>

  <section class="agency-services">
    <h2>Servicios</h2>
    <div class="grid">
      <div class="agency-services-card-cyber">
        <h3 class="agency-services-cyber-title">Branding</h3>
        <p class="agency-services-cyber-text">Identidad visual completa, de logo a guidelines.</p>
      </div>
      <div class="agency-services-card-cyber">
        <h3 class="agency-services-cyber-title">Web</h3>
        <p class="agency-services-cyber-text">Sitios y landings con estética que convierte.</p>
      </div>
      <div class="agency-services-card-cyber">
        <h3 class="agency-services-cyber-title">Motion</h3>
        <p class="agency-services-cyber-text">Animación y vídeo para campañas y producto.</p>
      </div>
    </div>
  </section>

  <section class="agency-team"><!-- card-profile × 3 --></section>
  <section class="agency-portfolio"><!-- card-3d × 4 --></section>
  <section class="agency-cta"><!-- CTA grande gradiente --></section>
  <footer class="agency-footer"><!-- redes + links --></footer>
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
    "4 colores hex hardcodeados. Considera moverlos a variables CSS (--color-*).",
    "Clase '.agency-team' usada en HTML pero no definida en CSS (¿typo o falta de style?)."
  ]
}
```

**Resultado:** web válida. Los colores hex residuales son del `rgba()` del glow (no se pueden extraer a variable sin perder alpha). Se entrega al cliente.