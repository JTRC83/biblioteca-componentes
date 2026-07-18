# Componentes — Neumorphic Soft

Mapeo de elementos del design system a componentes de la biblioteca.

---

## Buttons

**Componentes recomendados:**
- `btn-copy-link` — Boton funcional (adaptar con sombras neumorficas)
- `btn-cool-share` — Botones de compartir (adaptar a neumorfismo)
- `btn-get-started-gradient` — CTA (desaturar a lavanda suave, sin gradiente llamativo)

**Adaptacion:**
- Primary: fill #6c5ce7, texto blanco, sombras neumorficas raised
- Secondary: surface bg con sombras neumorficas, texto primary
- Hover: sombra aumenta de raised-sm a raised + glow sutil rgba(108,92,231,0.2)
- Active: sombra inset (pressed effect)
- Eliminar gradientes coloridos — el neumorfismo es sutil

---

## Cards

**Componentes recomendados:**
- `card-neumorph` — Tarjeta neumorfica base — el componente perfecto para este sistema
- `card-features` — Card con layers expandibles (adaptar con sombras neumorficas)
- `card-profile` — Card de perfil (adaptar a neumorfismo suave)
- `card-hover-fill` — Efecto de fill (cambiar a efecto neumorfico raised→inset)

**Adaptacion:**
- Surface bg #e8eaf0 con sombras neumorficas raised-lg
- Radio 20px, padding 28px
- Hover: sombra aumenta sutilmente + lift -2px
- Inset variant para inputs/elements anidados dentro de cards
- Sin bordes tradicionales — solo sombras duales

---

## Toggles & Switches

**Componentes recomendados:**
- `tgl-pill` — Toggle pill (adaptar con sombras neumorficas)
- `toggle-3d` — Toggle 3D (desaturar a lavanda, suavizar sombras)
- `tg-metal-knob` — Toggle knob (cambiar metalico por neumorfico suave)

**Adaptacion:**
- Track: surface bg con sombra inset (hundido)
- Thumb: surface bg con sombra raised (elevado)
- Checked: track fill primary lavanda, thumb blanco
- Transition 300ms con cubic-bezier suave

---

## Checkboxes & Radios

**Componentes recomendados:**
- `card-habit-tracker` — Checkbox neumorfico para habit tracker — perfecto
- `cb-animated-check` — Check animado (adaptar a neumorfismo)
- `radio-card` — Radio button (adaptar con sombras neumorficas)

**Adaptacion:**
- Unchecked: raised neumorphic, sin border
- Checked: fill primary lavanda con checkmark blanco + sombra inset
- Size 24px, radius 8px
- Focus ring: 0 0 0 3px rgba(108,92,231,0.15)

---

## Inputs & Forms

**Componentes recomendados:**
- `card-verification-code` — Input OTP (adaptar con sombras inset)
- `card-mastercard` — Card de credito (desaturar, adaptar a neumorfismo)

**Adaptacion:**
- Surface bg con sombras inset (hundido)
- Sin border tradicional
- Focus: ring 3px rgba(108,92,231,0.15)
- Placeholder: color #9da3a6
- Radio 12px, padding 12px 16px

---

## Loaders

**Componentes recomendados:**
- `loader-pulse-ring` — Loader con anillo pulsante (suavizar a lavanda)
- `loader-gradient-sphere` — Esfera gradiente (desaturar a lavanda suave)
- `loader-orbit` — Loader orbital (suavizar sombras)

**Adaptacion:**
- Color primary lavanda #6c5ce7
- Sombras neumorficas en lugar de glow
- Animacion suave: opacidad 0.6 → 1.0 → 0.6
- Size 40px inline, 72px full-page

---

## Backgrounds & Patterns

**Componentes recomendados:**
- `pat-dots` — Pattern de puntos muy sutil como textura de fondo
- `pat-grid-fade` — Grid que se desvanece (usar con mucha sutileza)

**Adaptacion:**
- Dots en color #d0d4de a opacidad 5%
- El neumorfismo funciona mejor con fondos lisos — usar patterns con extrema sutileza
- Sin fondos animados coloridos