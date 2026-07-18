# Componentes — Pastel Dream

Mapeo de elementos del design system a componentes de la biblioteca.

---

## Buttons

**Componentes recomendados:**
- `btn-bloom-circle` — Twitter Bloom (cambiar a lavanda)
- `btn-hello-3d` — Hello 3D (suavizar a pastel)
- `btn-copy-link` — Copy link (adaptar a pastel)
- `btn-follow-me` — Follow me (color lavanda)

**Adaptacion:**
- Primary: fill #a78bfa, texto blanco, radius 16px
- Hover: #8b5cf6 + box-shadow rgba(167,139,250,0.3)
- Secondary: bg blanco con border #f3e8ff
- Eliminar glow neón, mantener suave

---

## Cards

**Componentes recomendados:**
- `card-glass` — Glass card (suavizar a pastel, bg blanco translucido)
- `card-features` — Features card con layers para contenido amigable
- `card-result-summary` — Result Summary para resumen de progreso/habitos
- `card-creator-points` — Creator Points para gamificacion (suavizar)

**Adaptacion:**
- Surface blanca, border 1px #f3e8ff, radius 20px
- Hover: sombra suave rgba(167,139,250,0.08) + lift -2px
- Padding 28px
- Colores de iconos en circulos pastel (lavanda, rosa, menta)

---

## Checkboxes & Radios

**Componentes recomendados:**
- `card-habit-tracker` — Habit Tracker neumorfico (suavizar a pastel)
- `cb-blob-check` — Blob Check (cambiar a lavanda pastel)
- `cb-thumb-like` — Thumb Like para feedback positivo
- `radio-card` — Radio card (border pastel)

**Adaptacion:**
- Checkbox: border 1px #f3e8ff, radius 12px
- Checked: bg #a78bfa, checkmark blanco
- Focus ring: 0 0 0 3px rgba(167,139,250,0.15)

---

## Toggles & Switches

**Componentes recomendados:**
- `tgl-ios` — iOS toggle (cambiar a lavanda)
- `tgl-pill` — Pill toggle (pastel)
- `tg-day-night` — Day Night toggle (suavizar)

**Adaptacion:**
- Track: bg #f3e8ff, thumb blanco
- Checked: track #a78bfa, thumb blanco
- Transition 250ms suave

---

## Loaders

**Componentes recomendados:**
- `loader-liquid-pill` — Liquid Glass Pill (suavizar a pastel)
- `loader-gradient-sphere` — Gradient sphere (pastel lavanda-rosa)
- `loader-dots` — Bouncing dots (lavanda)

**Adaptacion:**
- Color lavanda #a78bfa o rosa #f9a8d4
- Gradiente suave lavanda → rosa en sphere
- Sin glow intenso, mantener suave

---

## Backgrounds & Patterns

**Componentes recomendados:**
- `bg-pastel-vortex` — Pastel Vortex — perfecto, ya es pastel
- `bg-aurora` — Aurora con tonos pastel lavanda/rosa
- `pat-purple-petals` — Purple Petals pattern
- `pat-bubble-grid` — Bubble grid en color pastel

**Adaptacion:**
- bg-pastel-vortex: mantener tal cual o ajustar tonos
- bg-aurora con tonos lavanda/rosa/menta a opacidad 15%
- pat-purple-petals en lavanda opacidad 5%