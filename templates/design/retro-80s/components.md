# Componentes — Retro 80s

Mapeo de elementos del design system a componentes de la biblioteca.

---

## Buttons

**Componentes recomendados:**
- `btn-neon` — Boton con efecto neon, base perfecta para CTAs synthwave
- `btn-gradient` — Boton CTA con gradiente (cambiar a sunset gradient pink→purple→cyan)
- `btn-rainbow-spin` — Boton con animacion rainbow (adaptar a rotacion pink/cyan/purple)
- `btn-glass` — Boton glassmorphism (usar sobre fondos sunset con tinte neón)

**Adaptacion:**
- Primary: fill #ff2a6d con texto blanco, uppercase, tracking 0.05em, Orbitron font
- Secondary: surface bg con border neón cyan rgba(5,217,232,0.3), texto cyan
- Gradient: sunset gradient #ff2a6d → #b400ff → #05d9e8 con texto blanco
- Hover: glow shadow 0 0 24px rgba(255,42,109,0.4) para pink, rgba(5,217,232,0.3) para cyan
- Anadir scan lines overlay sutil en hover

---

## Cards

**Componentes recomendados:**
- `card-cyber` — Card 3D interactive con grid trackers, glow, scan lines — adaptar a paleta synthwave
- `card-gradient` — Card con gradiente (cambiar a sunset gradient pink→purple→cyan)
- `card-glass-shine` — Card con glass shine (usar sobre grid floor con tinte neón)
- `card-dynamic` — Dynamic Hover Card con 3d, shine, glow, liquid transform

**Adaptacion:**
- Surface #1a0b2e, border 1px #2a1a44, radius 12px
- Hover: border neón pink rgba(255,42,109,0.3) + glow 0 0 24px rgba(255,42,109,0.15)
- Featured: glow constante + border neón + scan lines overlay
- Titulos con text-shadow neón pink o cyan segun jerarquia
- Opcion: anadir grid floor mini en el borde inferior de cards featured

---

## Toggles & Switches

**Componentes recomendados:**
- `tgl-conic-toggle` — Toggle con conic gradient (cambiar a gradiente sunset pink→cyan)
- `tg-led-toggle` — Toggle estilo LED (perfecto para estetica retro arcade, tinte neón)

**Adaptacion:**
- Track: surface #1a0b2e bg, border 1px #2a1a44
- Checked: track neón pink #ff2a6d con glow, thumb oscuro #0d0221
- LED variant: glow cyan cuando activo, simula indicador arcade
- Transition 300ms con cubic-bezier para efecto mecanico retro

---

## Checkboxes

**Componentes recomendados:**
- `cb-neon-check` — Checkbox con efecto neon, base ideal para synthwave
- `cb-gradient-check` — Checkbox con gradiente (cambiar a gradiente sunset pink→purple→cyan)

**Adaptacion:**
- Checkbox checked: bg neón pink #ff2a6d, checkmark blanco
- Border neón pink en hover/focus con glow sutil
- Focus ring: 0 0 0 2px rgba(255,42,109,0.2)
- Gradient variant: sunset gradient #ff2a6d → #b400ff → #05d9e8 de fondo

---

## Inputs & Forms

**Componentes recomendados:**
- `input-underline` — Input con underline (cambiar a underline neón pink/cyan)
- `form-modern` — Form completo moderno (adaptar a tema retro con borders neón)

**Adaptacion:**
- Inputs: surface #1a0b2e bg, border 1px #2a1a44, radius 8px
- Focus: border neón pink #ff2a6d + glow 0 0 12px rgba(255,42,109,0.2)
- Underline variant: linea inferior neón cyan con glow al focus
- Labels: Orbitron, uppercase, tracking 0.2em, color text-secondary
- Placeholders: color #5a4a6f
- Form completo: scan lines overlay sutil en el contenedor

---

## Loaders

**Componentes recomendados:**
- `loader-gradient-sphere` — Loader con esfera (cambiar a gradiente sunset pink→purple→cyan)
- `loader-pulse-ring` — Loader con anillo pulsante (tinte neón pink con glow)

**Adaptacion:**
- Sphere: gradiente sunset #ff2a6d → #b400ff → #05d9e8 con glow rotativo
- Pulse ring: color neón pink #ff2a6d con glow animation
- Animacion pulsante: opacidad 0.5 → 1.0 → 0.5 con glow escalation
- Size 40px inline, 80px full-page

---

## Backgrounds & Patterns

**Componentes recomendados:**
- `bg-aurora` — Aurora con tonos (cambiar a tonos pink/purple/cyan para sunset synthwave)
- `bg-cosmic-plasma` — Cosmic plasma (adaptar a paleta deep purple con neón)
- `bg-night-sky` — Fondo con estrellas (estrellas en neón cyan/pink sobre deep purple-black)
- `pat-grid` — Pattern de grid (usar como grid floor con perspectiva synthwave)
- `pat-star-burst` — Star burst pattern (adaptar a colores neón retro)
- `pat-kaleido` — Kaleido pattern (tonos pink/cyan/purple para fondo vaporwave)

**Adaptacion:**
- Grid floor: usar pat-grid con transform perspective + rotateX, lineas cyan rgba(5,217,232,0.2)
- Scan lines: linear-gradient con lineas cada 4px a opacidad 0.02 sobre cualquier fondo
- bg-aurora: tonos pink #ff2a6d, purple #b400ff, cyan #05d9e8 a baja opacidad
- bg-night-sky: estrellas en neón cyan/pink sobre #0d0221
- pat-kaleido: rotacion lenta con tonos sunset, opacidad 0.1-0.15
- Combinar grid floor + night-sky en heroes para maximo efecto synthwave