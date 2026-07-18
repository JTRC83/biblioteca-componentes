# Componentes — Events & Conference Landing

Mapeo de secciones a componentes de la biblioteca.

---

## Hero Section

**Componentes recomendados:**
- `btn-get-started-gradient` — CTA "Get tickets" con gradiente violeta-magenta
- `btn-explore` — Boton "See agenda" estilo outline
- `bg-aurora` — Aurora con tonos violeta para fondo del hero
- `bg-mesh` — Mesh gradient para profundidad
- `anim-glow` — Glow pulsante detras del countdown

**Adaptacion:**
- Gradiente del boton a linear-gradient(135deg, #7c3aed, #ec4899)
- Hover: box-shadow glow rgba(124,58,237,0.3) + gradiente se desplaza
- bg-aurora con tonos violeta/magenta a baja opacidad (20%)
- Countdown en cards con surface oscura y border gradient

---

## Speakers Section

**Componentes recomendados:**
- `card-3d` — 3D Hover Card para foto del speaker con tilt en hover
- `card-profile` — Card de perfil para speaker con cargo + empresa
- `card-dynamic` — Dynamic Hover Card con shine, glow para speakers destacados
- `card-glass-shine` — Glass Shine Card para speakers con efecto premium
- `tt-linkedin-card` — Tooltip con perfil LinkedIn del speaker

**Adaptacion:**
- Card-3d con foto del speaker como background
- Hover: tilt 3D + reveal de info (tema de la charla, bio corta)
- Featured speakers: card-dynamic con glow gradient constante
- Nombre en Space Grotesk bold, cargo en cyan/violeta
- tt-linkedin-card en hover para ver perfil LinkedIn

---

## Agenda Section

**Componentes recomendados:**
- `card-meeting` — Meeting Card para cada slot de la agenda
- `card-features` — Features card con layers para slots expandibles
- `card-flip-recipe` — Flip card para reveal de detalles de la charla
- `pat-grid-fade` — Grid pattern como separador entre dias

**Adaptacion:**
- card-meeting para cada slot: hora + titulo + speaker + sala
- Color-coded por tipo: keynote (violeta), workshop (magenta), panel (cyan)
- Click expande para mostrar descripcion de la charla
- pat-grid-fade como separador entre dias, opacidad 10%

---

## Tickets Section

**Componentes recomendados:**
- `card-pro-plan` — Pro Plan Card para ticket destacado (Standard)
- `cb-gradient-check` — Checkbox con gradiente para lista de que incluye
- `btn-get-started-gradient` — CTA en cada plan
- `card-black-friday` — Black Friday Card para oferta early bird con countdown
- `tgl-pill` — Toggle pill para switch entre precios (early/standard)

**Adaptacion:**
- Plan destacado: border gradient + glow pulsante constante
- cb-gradient-check: gradiente violeta-magenta, size 16px
- card-black-friday para countdown de precio early bird
- Boton CTA: gradiente en plan destacado, outline en otros
- Badge "Agotado" en rojo sobre planes sin disponibilidad

---

## Sponsors Section

**Componentes recomendados:**
- `card-glass` — Glass card para contener logos de sponsors
- `btn-social-hover` — Botones hover para logos (grayscale → color)
- `card-features` — Features card para categorias de sponsors

**Adaptacion:**
- Logos en escala de grises por defecto
- Hover: logo a color original + lift sutil
- Categorias: Diamond (mas grande), Gold, Silver
- Grid horizontal, sin bordes — solo hover effect

---

## Venue Section

**Componentes recomendados:**
- `card-meeting` — Meeting Card para info del venue
- `btn-cool-share` — Boton "Get directions" / "Share location"
- `input-underline` — Input para "Find hotels near venue"
- `tip-glow-info` — Tooltip con info adicional del venue

**Adaptacion:**
- card-meeting para direccion + como llegar + hoteles cercanos
- Mapa como fondo con overlay de info
- Boton "Get directions" con icono, bg gradient
- Boton "Book hotel" outline

---

## Footer Section

**Componentes recomendados:**
- `btn-social-hover` — Botones de redes sociales del evento
- `input-underline` — Input para newsletter de updates
- `btn-send-message` — Boton "Subscribe" para newsletter
- `pat-grid-fade` — Grid pattern como separador superior
- `card-manifesto-poster` — Manifesto poster para codigo de conducta

**Adaptacion:**
- btn-social-hover circulares, hover gradient
- Newsletter con input-underline (underline gradient en focus)
- pat-grid-fade como separador, opacidad 5%
- Links: Codigo de conducta, FAQ, Press kit, Contact
- card-manifesto-poster para seccion de codigo de conducta