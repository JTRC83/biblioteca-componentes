# Componentes — Real Estate Property Landing

Mapeo de secciones a componentes de la biblioteca.

---

## Hero Section

**Componentes recomendados:**
- `btn-get-started-gradient` — CTA "Buscar" con gradiente azul
- `btn-explore` — Boton "Ver propiedades" estilo outline
- `bg-mesh` — Mesh gradient con tonos azules para fondo del hero
- `anim-float` — Float sutil para elementos decorativos

**Adaptacion:**
- Gradiente del boton a linear-gradient(135deg, #1e40af, #0891b2)
- Barra de busqueda: surface blanca, border 1px #e2e8f0, radius 12px, shadow-md
- Focus state azul en inputs de busqueda
- bg-mesh con tonos azules a baja opacidad (15%)

---

## Featured Properties Section

**Componentes recomendados:**
- `card-3d` — 3D Hover Card para foto de propiedad con tilt en hover
- `card-long-chair` — Long Chair Card para propiedades con estilo producto
- `card-project` — Project Card para propiedad con foto + titulo + specs
- `card-hover-fill` — Efecto fill en hover para overlay con "Ver detalles"
- `card-glass-shine` — Glass Shine Card para propiedades premium

**Adaptacion:**
- Card-3d con foto de propiedad como background
- Specs (hab, banyos, m2) en badges con bg surface-alt
- Precio en bold azul #1e40af
- Hover: tilt 3D + foto zoom + "Ver detalles" slide-up
- Badge "Nuevo" / "Oferta" en esquina superior

---

## Services Section

**Componentes recomendados:**
- `card-features` — Features card con layers para cada servicio
- `card-digital-way` — Digital Way card para servicios profesionales
- `card-glass` — Glass card para servicios (desaturar a claro)

**Adaptacion:**
- Surface blanca, border 1px #e2e8f0, radius 16px
- Icono de servicio en circulo azul suave (rgba(30,64,175,0.1))
- Hover: border azul #1e40af + sombra sutil
- Padding 24px, transicion 200ms ease

---

## Agents Section

**Componentes recomendados:**
- `card-profile` — Card de perfil para agente con foto + especialidad
- `card-hover-fill` — Efecto fill en hover para reveal de info de contacto
- `btn-social-hover` — Botones de redes del agente
- `tt-linkedin-card` — Tooltip con perfil LinkedIn del agente

**Adaptacion:**
- Card-profile con foto circular del agente
- Nombre en bold, especialidad en azul
- Hover: reveal de telefono + email + redes
- btn-social-hover para LinkedIn/Instagram del agente

---

## Search/Filters Section

**Componentes recomendados:**
- `input-floating` — Inputs con floating label para filtros
- `radio-card` — Radio card para tipo de propiedad (venta/alquiler)
- `tgl-pill` — Toggle pill para switch grid/lista
- `cb-gradient-check` — Checkbox para filtros de caracteristicas
- `card-verification-code` — Input OTP para codigo postal

**Adaptacion:**
- input-floating con focus azul
- radio-card para seleccion venta/alquiler
- tgl-pill para toggle grid/lista view
- Chips de filtros activos: bg azul claro, texto azul, boton remove
- Filtros en drawer en mobile

---

## Testimonials Section

**Componentes recomendados:**
- `card-profile` — Card de perfil para cliente
- `card-glass` — Glass card para contener el testimonio
- `cb-thumb-like` — Thumb like como valoracion positiva

**Adaptacion:**
- Card-profile con avatar + nombre + estrellas azul
- Comentario en italic
- Grid de 3 testimonios
- Estrellas en color azul #1e40af

---

## Contact Section

**Componentes recomendados:**
- `form-modern` — Formulario completo moderno para consulta
- `input-floating` — Inputs con floating label
- `btn-send-message` — Boton "Enviar consulta"
- `card-meeting` — Meeting card para info de oficina
- `tt-support-menu` — Support menu tooltip para opciones de contacto

**Adaptacion:**
- Form con inputs azul en focus state
- Boton "Enviar consulta" bg azul #1e40af, texto blanco, radius 12px
- card-meeting para direccion + horarios + telefono
- Mapa como fondo con overlay de info

---

## Footer Section

**Componentes recomendados:**
- `btn-social-hover` — Botones de redes sociales
- `input-underline` — Input para newsletter signup
- `btn-send-message` — Boton "Suscribir" newsletter
- `pat-dots` — Pattern de puntos sutil como separador

**Adaptacion:**
- btn-social-hover circulares, hover azul
- Newsletter con input-underline (underline azul en focus)
- pat-dots opacidad 3% como separador superior
- Footer claro, links en slate-600, hover azul