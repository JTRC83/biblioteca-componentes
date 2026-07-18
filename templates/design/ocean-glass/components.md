# Componentes — Ocean Glass

Mapeo de elementos del design system a componentes de la biblioteca. Los IDs son reales y corresponden a componentes existentes. La adaptacion consiste en cambiar los tonos indigo/violeta por teal/cian en todos los gradientes y efectos glass.

---

## Buttons

**Componentes recomendados:**
- `btn-get-started-gradient` — Boton CTA principal con gradiente, perfecto para "Reserva ahora" o "Empieza gratis"
- `btn-ask-ai` — Boton secundario con efecto neon para "Ver demo" o "Preguntar a IA"
- `btn-glass` — Boton glassmorphism con superficie translucida y blur

**Adaptacion:**
- Cambiar el color primario a #0d9488 (teal) en las variables CSS del boton
- El gradiente pasa de indigo-violeta a linear-gradient(135deg, #0d9488, #06b6d4)
- Para botones secondary, usar surface glass con border rgba(255,255,255,0.08)
- Hover: anadir box-shadow glow rgba(13,148,136,0.15) en lugar del glow indigo

---

## Cards

**Componentes recomendados:**
- `card-glass` — Tarjeta glassmorphism base, translucida con blur
- `card-glass-shine` — Variante con efecto shine en hover para mas interactividad
- `card-3d` — Tarjeta 3D con tilt para producto estrella o hero

**Adaptacion:**
- Aplicar glass-bg: rgba(15,26,30,0.6) y blur 12px
- Border 1px rgba(255,255,255,0.08), radius 16px
- Hover: border tinte teal rgba(13,148,136,0.4) + sombra sutil + lift -2px
- Los gradientes internos (iconos, bordes destacados) pasan de indigo-violeta a teal-cian

---

## Toggles & Switches

**Componentes recomendados:**
- `tgl-pill` — Toggle pill para switch mensual/anual o on/off

**Adaptacion:**
- Track: surface-hover bg (#15252a), border glass
- Checked: track gradiente teal-cian linear-gradient(135deg, #0d9488, #06b6d4), thumb blanco
- Transition 250ms

---

## Checkboxes & Radios

**Componentes recomendados:**
- `cb-gradient-check` — Checkbox con gradiente para listas de features

**Adaptacion:**
- Checkbox gradiente: usar linear-gradient(135deg, #0d9488, #06b6d4) en lugar de indigo-violeta
- Size 16-20px para listas dentro de cards
- Focus ring: 0 0 0 3px rgba(13,148,136,0.12)

---

## Inputs & Forms

**Componentes recomendados:**
- `form-modern` — Formulario completo con estilo moderno y glassmorphism
- `input-floating` — Input con label flotante para formularios compactos

**Adaptacion:**
- Inputs con glass-bg rgba(15,26,30,0.6) y blur 12px
- Border 1px rgba(255,255,255,0.08), radius 12px
- Focus: border primary teal #0d9488 + ring 3px rgba(13,148,136,0.12)
- Placeholder usa text-muted #5a7a7a

---

## Loaders

**Componentes recomendados:**
- `loader-gradient-sphere` — Loader con esfera gradiente mientras carga
- `loader-pulse-ring` — Loader con anillo pulsante

**Adaptacion:**
- Usar gradiente teal-cian linear-gradient(135deg, #0d9488, #06b6d4) en los loaders
- Size 40px para inline, 80px para full-page loading
- El glow del loader pasa de indigo a rgba(13,148,136,0.15)

---

## Backgrounds & Patterns

**Componentes recomendados:**
- `bg-aurora` — Fondo con aurora para gradiente sutil detras del hero, ideal con tonos teal-cian
- `bg-mesh` — Fondo mesh gradient para seccion CTA
- `bg-night-sky` — Fondo animado con estrellas para el hero, evoca noche en altamar
- `pat-dots` — Pattern de puntos sutil como fondo de seccion
- `pat-grid-fade` — Pattern de grid que se desvanece como separador

**Adaptacion:**
- bg-aurora con tonos teal (#0d9488) y cian (#06b6d4) a baja opacidad
- bg-mesh con tonos teal/cian a baja opacidad (20%)
- Reducir opacidad de pat-dots al 5% para que sea casi imperceptible
- bg-night-sky con menor opacidad para no competir con el texto

---

## Tooltips

**Componentes recomendados:**
- `tip-glass` — Tooltip glassmorphism con blur

**Adaptacion:**
- Glass bg con blur rgba(15,26,30,0.6), texto blanco teal-50 #e0f2f1, radius 8px
- Padding 6px 12px, font 12px
- Aparece con fade 150ms
- El borde hover del tooltip usa tinte teal rgba(13,148,136,0.4)