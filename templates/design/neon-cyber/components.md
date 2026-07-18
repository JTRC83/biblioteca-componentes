# Componentes — Neon Cyber

Mapeo de elementos del design system a componentes de la biblioteca.

---

## Buttons

**Componentes recomendados:**
- `btn-ask-ai` — Boton con efecto neon, perfecto para CTAs cyberpunk
- `btn-get-started-gradient` — Boton CTA con gradiente (cambiar a gradiente neón)
- `btn-copy-link` — Boton funcional con animacion
- `btn-cool-share` — Botones de compartir con estilo cyber

**Adaptacion:**
- Primary: fill #00ffd1 con texto negro, uppercase, tracking 0.05em
- Secondary: surface bg con border neón rgba(0,255,209,0.3), texto neón
- Hover: glow shadow 0 0 24px rgba(0,255,209,0.4)
- Eliminar gradientes suaves, usar neón solido o gradiente neón-magenta

---

## Cards

**Componentes recomendados:**
- `card-cyber` — Card 3D interactive con grid trackers, glow, scan lines, particles — el mas cyberpunk
- `card-dynamic` — Dynamic Hover Card con 3d, shine, glow, liquid transform
- `card-crypto` — Crypto Price Card con toggle, dark, finance — perfecto para sector crypto
- `card-terminal` — Terminal Card con macos window, code, console, cli
- `card-mac-code` — Mac Code Preview con dark mode y hover

**Adaptacion:**
- Surface #0d0d0f, border 1px #1a1a20, radius 12px
- Hover: border neón + glow 0 0 24px rgba(0,255,209,0.15)
- Featured: glow constante + border neón permanente
- Anadir text-shadow neón en titulos destacados

---

## Toggles & Switches

**Componentes recomendados:**
- `toggle-3d` — Toggle 3D con efecto de profundidad (cambiar a neón)
- `tg-metal-knob` — Toggle con knob metalico (dar tinte neón)
- `tgl-pill` — Toggle pill para on/off

**Adaptacion:**
- Track: surface bg, border 1px #1a1a20
- Checked: track neón #00ffd1 con glow, thumb negro
- Transition 300ms con cubic-bezier para efecto mecánico

---

## Checkboxes & Radios

**Componentes recomendados:**
- `cb-gradient-check` — Checkbox con gradiente (cambiar a gradiente neón-magenta)
- `card-verification-code` — Input OTP/verification code con estilo terminal
- `radio-card` — Radio button estilo card con border neón

**Adaptacion:**
- Checkbox checked: bg neón #00ffd1, checkmark negro
- Border neón en hover/focus
- Focus ring: 0 0 0 2px rgba(0,255,209,0.2)

---

## Backgrounds & Patterns

**Componentes recomendados:**
- `card-cyber` — (usar solo el grid pattern de fondo como textura)
- `pat-grid-fade` — Pattern de grid que se desvanece — perfecto para cyber
- `pat-dots` — Pattern de puntos a baja opacidad
- `bg-night-sky` — Fondo con estrellas para hero cyberpunk
- `bg-aurora` — Aurora con tonos neón para hero

**Adaptacion:**
- Grid pattern en color rgba(0,255,209,0.03) — muy sutil
- Scan lines: linear-gradient con lineas cada 4px a opacidad 0.02
- bg-night-sky con estrellas en neón cyan
- bg-aurora con tonos cyan/magenta a baja opacidad

---

## Loaders

**Componentes recomendados:**
- `loader-gradient-sphere` — Loader con esfera (cambiar a gradiente neón)
- `loader-orbit` — Loader orbital con efecto neón
- `loader-pulse-ring` — Loader con anillo pulsante neón

**Adaptacion:**
- Usar color neón #00ffd1 con glow shadow
- Animacion pulsante: opacidad 0.5 → 1.0 → 0.5 con glow escalation
- Size 40px inline, 80px full-page

---

## Tooltips

**Componentes recomendados:**
- `tip-glass` — Tooltip (adaptar a estilo cyber: border neón + glow)
- `tip-fade` — Tooltip con fade (anadir glow neón)

**Adaptacion:**
- Surface bg, border 1px neón, texto neón
- Radius 4px, padding 8px 12px, font 12px
- Aparece con fade + glow shadow escalation