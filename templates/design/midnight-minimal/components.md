# Componentes — Midnight Minimal

Mapeo de elementos del design system a componentes de la biblioteca. Todos los componentes se desaturan a monocromo puro — se elimina todo color, se aplica border-radius 0 y se sustituyen sombras por bordes.

---

## Buttons

**Componentes recomendados:**
- `btn-copy-link` — Copy link (border blanco, outline monocromo)
- `btn-learn-more` — Learn more (border blanco, uppercase, tracking 0.15em)

**Adaptacion:**
- Border 1px #ffffff, bg transparent, texto blanco, uppercase, tracking 0.15em
- Hover: bg #ffffff, texto #080808 (inversion total)
- Secondary: border 1px #222222, hover border #ffffff
- Sin glow, sin gradientes — border-radius 0 absoluto

---

## Cards

**Componentes recomendados:**
- `card-project` — Project Card para galeria y portafolio
- `card-notebook-page` — Notebook Page para estilo editorial
- `card-manifesto-poster` — Manifesto Poster para declaraciones de design

**Adaptacion:**
- Surface #0e0e0e, border 1px #222222, radius 0
- Hover: border 1px #ffffff — sin sombra, el borde es la profundidad
- Padding 32px — espacio generoso
- Titulos en Inter 700, tracking -0.01em
- Desaturar toda imagen a monocromo (grayscale)

---

## Checkboxes & Radios

**Componentes recomendados:**
- `cb-animated-check` — Animated Check (border blanco, check blanco)
- `radio-card` — Radio card (border blanco en seleccion)

**Adaptacion:**
- Checkbox: border 1px #222222, radius 0
- Checked: border #ffffff, checkmark #ffffff
- Focus: outline 2px #ffffff, outline-offset 2px
- Radio card seleccionada: border 1px #ffffff

---

## Inputs & Forms

**Componentes recomendados:**
- `form-modern` — Form moderno (desaturar a monocromo total)
- `input-underline` — Underline (linea blanca, sin border completo)
- `input-floating` — Floating label (label blanco en focus)

**Adaptacion:**
- BG #080808, border 1px #222222, radius 0
- Focus: border #ffffff + outline 2px #ffffff outline-offset 2px
- Placeholder: #555555
- Labels uppercase, tracking 0.2em, font 11px, peso 600
- Sin color de acento en ningun estado

---

## Loaders

**Componentes recomendados:**
- `loader-pulse-ring` — Pulse Ring (blanco monocromo)
- `loader-pulse` — Pulse (blanco, sin color)

**Adaptacion:**
- Color #ffffff exclusivamente
- Sin glow intenso — sutil, monocromo
- Size 32px inline, 64px full-page
- Sustituir cualquier color original por blanco puro

---

## Backgrounds & Patterns

**Componentes recomendados:**
- `pat-dots` — Dots en color #222222 opacidad 5%
- `pat-grid-fade` — Grid fade (blanco opacidad 3%)
- `pat-horiz-lines` — Horizontal lines (#222222 opacidad 4%)

**Adaptacion:**
- pat-dots: color #222222, opacidad 5% — casi imperceptible
- pat-grid-fade: blanco, opacidad 3% — sutil textura arquitectonica
- pat-horiz-lines: #222222, opacidad 4% — lineas estructurales
- Sin fondos animados coloridos — el patron es textura, no decoracion
- Desaturar cualquier patron a monocromo antes de aplicar