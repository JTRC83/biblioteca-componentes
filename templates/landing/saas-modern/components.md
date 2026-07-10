# Componentes — SaaS Modern Landing

Mapeo de secciones a componentes de la biblioteca. Los IDs son reales y corresponden a componentes existentes.

---

## Hero Section

**Componentes recomendados:**
- `btn-get-started-gradient` — Botón CTA principal con gradiente, perfecto para "Empieza gratis"
- `btn-ask-ai` — Botón secundario con efecto neon para "Ver demo" o "Preguntar a IA"
- `bg-night-sky` — Fondo animado con estrellas para el hero, da profundidad al oscuro
- `bg-aurora` — Alternativa de fondo con aurora para gradiente sutil detrás del hero
- `anim-float` — Animación float sutil para el screenshot/mockup flotando en el hero
- `loader-gradient-sphere` — Loader mientras carga el screenshot del dashboard

**Adaptación:**
- Cambiar el color primario a #6366f1 en las variables CSS del botón
- Ajustar `bg-night-sky` con menor opacidad para no competir con el texto
- Usar `anim-float` con duración 6s y amplitud 10px para sutilidad

---

## Features Section

**Componentes recomendados:**
- `card-glass` — Tarjeta glassmorphism para cada feature, translucida con blur
- `card-glass-shine` — Variante con efecto shine en hover para más interactividad
- `anim-glow` — Glow sutil en iconos al hacer hover sobre la tarjeta
- `pat-dots` — Pattern de puntos sutil como fondo de sección

**Adaptación:**
- Aplicar `card-glass` con glass-bg: rgba(24,24,28,0.6) y blur 12px
- Reducir opacidad de `pat-dots` al 5% para que sea casi imperceptible
- Usar `anim-glow` solo en el icono, no en toda la tarjeta

---

## Pricing Section

**Componentes recomendados:**
- `card-glass` — Tarjeta base para cada plan de pricing
- `btn-get-started-gradient` — Botón CTA en plan Pro (destacado)
- `cb-gradient-check` — Checkbox con gradiente para lista de features incluidas
- `tgl-pill` — Toggle pill para switch mensual/anual
- `cb-animated-check` — Alternativa de check animado para lista de features

**Adaptación:**
- Plan Pro: añadir borde gradient y `shadow-glow-strong` para destacarlo
- Usar `tgl-pill` con colores primario/secondary para el toggle mensual/anual
- `cb-gradient-check` en tamaño pequeño (16px) al lado de cada feature en la lista

---

## Testimonials Section

**Componentes recomendados:**
- `card-glass` — Tarjeta glass para cada testimonio
- `card-profile` — Card de perfil para avatar + nombre + empresa del testimonio
- `anim-float` — Float muy sutil opcional para tarjetas (amplitud 5px)
- `card-hover-fill` — Efecto de fill en hover para dar interactividad

**Adaptación:**
- Combinar `card-glass` como contenedor con `card-profile` como componente interno
- Estrellas de valoración en color primario (#6366f1)
- `card-hover-fill` con fill en color surface-hover

---

## CTA Section

**Componentes recomendados:**
- `btn-get-started-gradient` — Botón CTA grande con gradiente
- `card-glass` — Card grande centrada con glow detrás
- `bg-mesh` — Fondo mesh gradient para la sección CTA, da profundidad
- `pat-dots` — Pattern de puntos sutil sobre el fondo mesh
- `anim-glow` — Glow pulsante detrás de la card CTA

**Adaptación:**
- `bg-mesh` con tonos indigo/violeta a baja opacidad (20%)
- `anim-glow` con color primario y alta difusión para halo detrás de la card
- `btn-get-started-gradient` en tamaño large (padding 16px 40px, font 18px)

---

## Footer Section

**Componentes recomendados:**
- `btn-social-hover` — Botones de redes sociales con efecto hover
- `btn-cool-share` — Alternativa para iconos de compartir/redes
- `pat-grid-fade` — Pattern de grid que se desvanece como separador superior del footer
- `card-glass` — Opcional para contenedor de newsletter si se añade al footer

**Adaptación:**
- `btn-social-hover` en tamaño pequeño (32px) circular con iconos de redes
- `pat-grid-fade` como línea separadora sutil en la parte superior del footer
- Links del footer en color text-secondary, hover en text (blanco)