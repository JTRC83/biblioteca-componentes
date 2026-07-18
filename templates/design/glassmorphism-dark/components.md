# Componentes — Glassmorphism Dark

Mapeo de elementos del design system a componentes de la biblioteca. Los IDs son reales y corresponden a componentes existentes.

---

## Buttons

**Componentes recomendados:**
- `btn-get-started-gradient` — Boton CTA principal con gradiente, perfecto para "Empieza gratis"
- `btn-ask-ai` — Boton secundario con efecto neon para "Ver demo" o "Preguntar a IA"
- `btn-copy-link` — Boton funcional con animacion copy/coped
- `btn-cool-share` — Botones de compartir/redes sociales

**Adaptacion:**
- Cambiar el color primario a #6366f1 en las variables CSS del boton
- Para botones secondary, usar surface glass con border rgba(255,255,255,0.08)
- Hover: anadir box-shadow glow rgba(99,102,241,0.15)

---

## Cards

**Componentes recomendados:**
- `card-glass` — Tarjeta glassmorphism base, translucida con blur
- `card-glass-shine` — Variante con efecto shine en hover para mas interactividad
- `card-3d` — Tarjeta 3D con tilt para producto estrella o hero
- `card-hover-fill` — Efecto de fill en hover para dar interactividad
- `card-profile` — Card de perfil para avatar + nombre + empresa
- `card-pro-plan` — Card de pricing plan

**Adaptacion:**
- Aplicar glass-bg: rgba(24,24,28,0.6) y blur 12px
- Border 1px rgba(255,255,255,0.08), radius 16px
- Hover: border tinte primary + sombra sutil + lift -2px
- Para pricing: usar card-pro-plan con borde gradiente en plan destacado

---

## Toggles & Switches

**Componentes recomendados:**
- `tgl-pill` — Toggle pill para switch mensual/anual o on/off
- `tg-metal-knob` — Toggle con knob metalico, estilo premium
- `toggle-3d` — Toggle 3D con efecto de profundidad

**Adaptacion:**
- Track: surface-hover bg, border glass
- Checked: track gradiente primary-secondary, thumb blanco
- Transition 250ms

---

## Checkboxes & Radios

**Componentes recomendados:**
- `cb-gradient-check` — Checkbox con gradiente para listas de features
- `cb-animated-check` — Alternativa de check animado
- `radio-card` — Radio button estilo card para seleccion unica
- `card-verification-code` — Input OTP/verification code

**Adaptacion:**
- Checkbox gradiente: usar linear-gradient(135deg, #6366f1, #8b5cf6)
- Size 16-20px para listas dentro de cards
- Focus ring: 0 0 0 3px rgba(99,102,241,0.12)

---

## Backgrounds & Patterns

**Componentes recomendados:**
- `bg-night-sky` — Fondo animado con estrellas para el hero
- `bg-aurora` — Fondo con aurora para gradiente sutil detras del hero
- `bg-mesh` — Fondo mesh gradient para seccion CTA
- `pat-dots` — Pattern de puntos sutil como fondo de seccion
- `pat-grid-fade` — Pattern de grid que se desvanece como separador

**Adaptacion:**
- Reducir opacidad de pat-dots al 5% para que sea casi imperceptible
- bg-night-sky con menor opacidad para no competir con el texto
- bg-mesh con tonos indigo/violeta a baja opacidad (20%)

---

## Loaders

**Componentes recomendados:**
- `loader-gradient-sphere` — Loader con esfera gradiente mientras carga
- `loader-orbit` — Loader orbital para loading states
- `loader-pulse-ring` — Loader con anillo pulsante

**Adaptacion:**
- Usar gradiente primary-secondary en los loaders
- Size 40px para inline, 80px para full-page loading

---

## Tooltips

**Componentes recomendados:**
- `tip-glass` — Tooltip glassmorphism con blur
- `tip-fade` — Tooltip con animacion fade

**Adaptacion:**
- Glass bg con blur, texto blanco, radius 8px
- Padding 6px 12px, font 12px
- Aparece con fade 150ms