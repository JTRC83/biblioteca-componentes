# Componentes — Gradient Vivid

Mapeo de elementos del design system a componentes de la biblioteca.

---

## Buttons

**Componentes recomendados:**
- `btn-get-started-gradient` — CTA con gradiente (cambiar a gradiente multi-color vivid)
- `btn-gradient-layers` — Gradient Layers (cambiar a colores vivid)
- `btn-rainbow-spin` — Rainbow Spin (perfecto para este sistema)
- `btn-circle-glow` — Circle Glow (cambiar glow a magenta)
- `btn-ask-ai` — Ask AI con efecto neon (magenta-cyan)

**Adaptacion:**
- Primary: linear-gradient(135deg, #ec4899, #8b5cf6) texto blanco
- Hover: gradiente se desplaza + glow rgba(236,72,153,0.3)
- Uppercase, tracking 0.03em, weight 700
- Secondary: surface oscuro con border, hover border magenta

---

## Cards

**Componentes recomendados:**
- `card-gradient` — Gradient Card — EL componente perfecto, ya tiene gradiente
- `card-dynamic` — Dynamic Hover Card con shine, glow, liquid
- `card-glass-shine` — Glass Shine Card con shimmer
- `card-3d` — 3D Hover Card (anadir gradiente en tilt)
- `card-uiverse-3d` — Uiverse 3D Card con glass y gradiente

**Adaptacion:**
- Surface #15151a, border 1px #232329, radius 16px
- Hover: border-image gradient + glow 0 0 30px rgba(236,72,153,0.15)
- Featured: border-image gradient constante
- Gradientes vivid en iconos y elementos destacados

---

## Toggles & Switches

**Componentes recomendados:**
- `tg-conic-toggle` — Conic Toggle (perfecto, gradiente conico vivid)
- `tg-holo-toggle` — Holo Toggle (holographic, vivid)
- `tgl-squircle` — Squircle (cambiar a gradiente)

**Adaptacion:**
- Track: surface oscuro, border
- Checked: track con gradiente magenta-violeta-cyan
- Thumb blanco con glow sutil

---

## Checkboxes & Radios

**Componentes recomendados:**
- `cb-gradient-check` — Gradient Check (cambiar a gradiente vivid)
- `cb-neon-check` — Neon Check (magenta/cyan neón)
- `radio-card` — Radio card (border gradient en hover)

**Adaptacion:**
- Checkbox: gradiente multi-color cuando checked
- Border gradient en hover/focus
- Focus ring: 0 0 0 3px rgba(236,72,153,0.15)

---

## Backgrounds & Patterns

**Componentes recomendados:**
- `bg-cosmic-plasma` — Cosmic Plasma — perfecto, colores cosmic vivid
- `bg-aurora` — Aurora con tonos magenta-cyan-violeta
- `bg-mesh` — Mesh gradient multi-color
- `pat-kaleido` — Kaleido pattern (vivid colors)
- `pat-star-burst` — Star Burst (colorido)

**Adaptacion:**
- bg-cosmic-plasma: mantener o ajustar a tonos magenta-cyan
- bg-aurora con tonos magenta/violeta/cyan a opacidad 20%
- bg-mesh multi-color para seccion CTA
- pat-kaleido en colores vivid a opacidad 10%

---

## Loaders

**Componentes recomendados:**
- `loader-gradient-sphere` — Gradient Sphere (cambiar a gradiente vivid)
- `loader-liquid-pill` — Liquid Glass Pill (gradiente multi-color)
- `loader-ripple-grid` — Ripple Grid Loader (vivid colors)

**Adaptacion:**
- Gradiente magenta → violeta → cyan en sphere y pill
- Glow con tinte magenta
- Size 40px inline, 80px full-page

---

## Tooltips

**Componentes recomendados:**
- `tip-gradient` — Gradient Tooltip (cambiar a gradiente vivid)
- `tt-glow-info` — Glow Info Tooltip (magenta glow)

**Adaptacion:**
- Gradiente magenta-violeta en fondo del tooltip
- Texto blanco, radius 8px
- Glow sutil magenta en aparicion