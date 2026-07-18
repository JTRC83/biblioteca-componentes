# Componentes — Brutalist Raw

Mapeo de elementos del design system a componentes de la biblioteca.

---

## Buttons

**Componentes recomendados:**
- `btn-copy-link` — Boton funcional (desaturar a monocromo, border 2px, radius 0)
- `btn-cool-share` — Botones de compartir (simplificar a monocromo brutalista)
- `btn-gradient-layers` — CTA (eliminar todas las capas, gradientes y blend modes)

**Adaptacion:**
- Primary: fill #000000, texto blanco, border 2px, radius 0
- Box-shadow: 4px 4px 0 #000000 (offset crudo, sin blur)
- Hover: border-color #ff3b00, shadow offset aumenta a 6px
- Active: shadow offset a 0, translate(4px, 4px) — efecto pressed
- Uppercase, tracking 0.05em, weight 700
- Eliminar gradientes, glow, blend modes — brutalismo es flat y crudo

---

## Cards

**Componentes recomendados:**
- `card-manifesto-poster` — Manifesto Poster con brutalism, marquee, barcode — perfecto
- `card-doodle-poster` — Doodle Poster (desaturar a monocromo, mantener estructura)
- `card-terminal` — Terminal Card (ya tiene aspecto crudo, solo ajustar borders)
- `card-mac-code` — Mac Code Preview (simplificar a monocromo)
- `card-receipt` — Receipt Card minimalista (aumentar border a 2px, radius 0)

**Adaptacion:**
- Surface blanca, border 2-4px solid #000000, radius 0
- Box-shadow: 4px 4px 0 #000000 (sin blur)
- Hover: border-color #ff3b00 O inverse colors (bg negro, texto blanco)
- Inverse variant: bg negro, border blanco, texto blanco
- Sin transitions suaves — max 50ms
- Eliminar todos los gradientes, glassmorphism y sombras con blur

---

## Toggles & Switches

**Componentes recomendados:**
- `toggle-3d` — Toggle 3D (simplificar a flat, border 2px, radius 0)
- `tgl-pill` — Toggle pill (eliminar border-radius, hacer cuadrado)
- `tg-metal-knob` — Toggle knob (eliminar metalico, hacer flat monocromo)

**Adaptacion:**
- Track: bg blanco, border 2px #000000, radius 0
- Thumb: cuadrado negro (sin border-radius)
- Checked: track negro, thumb blanco
- Sin animacion suave — snap instantaneo (transition 0ms)
- Eliminar 3D, depth, sombras suaves

---

## Checkboxes & Radios

**Componentes recomendados:**
- `cb-animated-check` — Check animado (simplificar a monocromo, border 2px, radius 0)
- `radio-card` — Radio card (border 2px, radius 0, hover inverse)

**Adaptacion:**
- Checkbox: 24px, border 2px solid #000000, radius 0
- Checked: bg negro, checkmark blanco
- Hover: border-color #ff3b00
- Focus: outline 3px #ff3b00
- Sin animaciones elaboradas — cambio instantaneo

---

## Inputs & Forms

**Componentes recomendados:**
- `card-verification-code` — Input OTP (border 2px, radius 0, font monospace)
- `card-mastercard` — Card de credito (simplificar a monocromo brutalista)

**Adaptacion:**
- Border 2px solid #000000, radius 0
- Focus: border 3px #ff3b00 + outline 2px #ff3b00
- Font: Space Mono 14px
- Labels: bg negro, texto blanco, uppercase, weight 700
- Sin sombras suaves, sin inset

---

## Backgrounds & Patterns

**Componentes recomendados:**
- `pat-grid-fade` — Grid pattern (aumentar contraste, border 2px negro)
- `pat-dots` — Dots (aumentar contraste, hacer cuadrados no circulos)

**Adaptacion:**
- Grid: lineas negras 2px cada 40px, sin desvanecer
- Dots: cuadrados negros 4px cada 20px (no circulos)
- Sin fondos animados, sin auroras, sin glassmorphism
- El patron debe ser visible y crudo, no sutil

---

## Loaders

**Componentes recomendados:**
- `loader-pulse-ring` — Anillo pulsante (simplificar a cuadrado rotando, monocromo)
- `loader-orbit` — Orbit (simplificar a formas cuadradas, monocromo)

**Adaptacion:**
- Color: negro #000000
- Formas cuadradas (sin border-radius)
- Animacion: rotation o blink — sin pulse suave
- Size 32px inline, 64px full-page
- Eliminar gradientes y glow