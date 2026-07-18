# Componentes — Cyberpunk Amber

Mapeo de elementos del design system a componentes de la biblioteca.

---

## Buttons

**Componentes recomendados:**
- `btn-neon` — Boton con efecto neón, cambiar el neón por ambar #ffb800 con glow dorado
- `btn-gradient` — Boton CTA con gradiente, usar gradiente ambar→naranja quemado (#ffb800 → #ff6b35)
- `btn-ask-ai` — Boton con efecto glow, perfecto para CTAs cyberpunk ambar
- `btn-generate` — Boton de accion, adaptar a fill ambar con texto negro carbon

**Adaptacion:**
- Primary: fill #ffb800 con texto negro, uppercase, tracking 0.06em, radius 4px
- Secondary: surface bg con border ambar rgba(255,184,0,0.3), texto ambar
- Hover: glow shadow 0 0 24px rgba(255,184,0,0.4)
- Eliminar gradientes suaves, usar ambar solido o gradiente ambar→naranja quemado
- Anadir scan line sutil sobre el boton en hover

---

## Cards

**Componentes recomendados:**
- `card-cyber` — Card 3D interactive con grid trackers, glow, scan lines, particles — adaptar glow a ambar
- `card-terminal` — Terminal Card con macos window, code, console, cli — perfecto para estetica industrial
- `card-mac-code` — Mac Code Preview con dark mode y hover — cambiar acentos por ambar
- `card-crypto` — Crypto Price Card con toggle, dark, finance — adaptar a paleta ambar/naranja

**Adaptacion:**
- Surface #161210, border 1px #2a2218, radius 8px
- Hover: border ambar + glow 0 0 24px rgba(255,184,0,0.15)
- Featured: glow constante + border ambar permanente
- Anadir text-shadow ambar en titulos destacados
- Scan lines internas a baja opacidad para textura industrial

---

## Toggles & Switches

**Componentes recomendados:**
- `tg-led-toggle` — Toggle con efecto LED, adaptar el LED a ambar #ffb800 con glow dorado
- `tg-metal-knob` — Toggle con knob metalico, mantener el metal con tinte ambar en checked

**Adaptacion:**
- Track: surface bg, border 1px #2a2218
- Checked: track ambar #ffb800 con glow, thumb negro carbon
- Transition 300ms con cubic-bezier para efecto mecanico industrial
- LED encendido en ambar con glow 0 0 8px rgba(255,184,0,0.6)

---

## Checkboxes

**Componentes recomendados:**
- `cb-neon-check` — Checkbox con efecto neón, cambiar neón por ambar con glow dorado
- `cb-gradient-check` — Checkbox con gradiente, usar gradiente ambar→naranja quemado

**Adaptacion:**
- Checkbox checked: bg ambar #ffb800, checkmark negro carbon
- Border ambar en hover/focus
- Focus ring: 0 0 0 2px rgba(255,184,0,0.25)
- Glow sutil en checked: 0 0 8px rgba(255,184,0,0.3)

---

## Inputs & Forms

**Componentes recomendados:**
- `input-underline` — Input con underline, cambiar el underline a ambar #ffb800 con glow en focus
- `form-modern` — Formulario moderno, adaptar surface y borders a paleta ambar, focus glow dorado
- `card-verification-code` — Input OTP/verification code con estilo terminal, perfecto para estetica industrial

**Adaptacion:**
- Inputs: surface bg, border 1px #2a2218, radius 4px, focus border ambar + glow 0 0 12px rgba(255,184,0,0.2)
- Placeholder: text-muted bronce apagado
- Code-style inputs usan JetBrains Mono
- Verification code: slots con border ambar al activarse, glow dorado en focus

---

## Loaders

**Componentes recomendados:**
- `loader-pcb-circuit` — Loader con circuito PCB, adaptar trazas a ambar — encaja perfecto en estetica industrial
- `loader-terminal-type` — Loader con typing terminal, mantener estilo terminal con texto ambar
- `loader-loading-bar` — Barra de carga, adaptar a ambar con glow pulsante

**Adaptacion:**
- Usar color ambar #ffb800 con glow shadow
- Animacion pulsante: opacidad 0.5 → 1.0 → 0.5 con glow escalation
- Size 40px inline, 80px full-page
- PCB circuit: trazas en ambar rgba(255,184,0,0.6) sobre negro carbon

---

## Backgrounds & Patterns

**Componentes recomendados:**
- `bg-gradient-grid` — Fondo con gradiente y grid, cambiar gradientes a tonos ambar/naranja a baja opacidad
- `pat-grid` — Pattern de grid base en color rgba(255,184,0,0.03) — muy sutil
- `pat-grid-fade` — Pattern de grid que se desvanece — perfecto para hero cyberpunk ambar
- `pat-horiz-lines` — Pattern de lineas horizontales, usar como scan lines industriales

**Adaptacion:**
- Grid pattern en color rgba(255,184,0,0.03) — muy sutil
- Scan lines: linear-gradient con lineas cada 4px a opacidad 0.025
- bg-gradient-grid con tonos ambar→naranja a baja opacidad sobre negro carbon
- pat-horiz-lines como scan line overlay para textura industrial Bladerunner-esque