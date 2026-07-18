# Componentes — Restaurant & Cafe Landing

Mapeo de secciones a componentes de la biblioteca. Los IDs son reales.

---

## Hero Section

**Componentes recomendados:**
- `btn-get-started-gradient` — Boton CTA "Reservar mesa" con gradiente terracota
- `btn-explore` — Boton secundario "Ver menu" estilo outline
- `bg-sunset-glow` — Fondo con sunset glow para el hero, da calidez
- `anim-float` — Float sutil para elementos decorativos del hero

**Adaptacion:**
- Cambiar gradiente del boton a linear-gradient(135deg, #c8553d, #f4a261)
- bg-sunset-glow con tonos terracota/ambar
- Texto blanco sobre overlay oscuro del hero

---

## Menu Section

**Componentes recomendados:**
- `card-receipt` — Card tipo recibo/factura — perfecto para lista de platos con precios
- `card-notebook-page` — Card tipo pagina de cuaderno — estilo carta de restaurante artesanal
- `card-flip-recipe` — Flip Recipe Card para platos destacados con foto + ingredientes
- `card-features` — Features card con layers para categorias de menu expandibles

**Adaptacion:**
- Usar card-receipt con linea punteada entre nombre de plato y precio
- Card-notebook-page para menu diario o especialidades
- Colores: texto #2d2422, precio en bold terracota #c8553d
- Card-flip-recipe para platos con foto — flip revela ingredientes

---

## Reservation Section

**Componentes recomendados:**
- `form-modern` — Formulario completo moderno para la reserva
- `input-floating` — Inputs con floating label para nombre, email, telefono
- `btn-send-message` — Boton "Reservar" estilo send
- `card-meeting` — Meeting Card para mostrar mesas disponibles/horarios

**Adaptacion:**
- Form con inputs terracota en focus state
- Boton "Reservar" grande con bg terracota #c8553d
- Card-meeting para mostrar disponibilidad de mesas

---

## Gallery Section

**Componentes recomendados:**
- `card-3d` — 3D Hover Card para fotos de platos con tilt en hover
- `card-hover-fill` — Efecto fill en hover para overlay con nombre del plato
- `card-glass-shine` — Glass Shine Card para fotos con efecto shine

**Adaptacion:**
- Card-3d con foto de plato como background
- Hover: tilt 3D + overlay con nombre del plato slide-up
- Grid 3 columnas, 6-9 fotos
- Desaturar los efectos glow — mantener calido y elegante

---

## Reviews Section

**Componentes recomendados:**
- `card-profile` — Card de perfil para avatar + nombre + valoracion del cliente
- `card-glass` — Glass card para contener el testimonio
- `cb-thumb-like` — Thumb like como valoracion positiva

**Adaptacion:**
- Card-profile con avatar circular + nombre + estrellas terracota
- Comentario en italic serif
- Carrusel de 3 cards
- Estrellas en color terracota #c8553d

---

## Location Section

**Componentes recomendados:**
- `card-meeting` — Meeting Card para info de contacto (direccion, horarios)
- `btn-cool-share` — Boton "Como llegar" / "Compartir ubicacion"
- `tip-glow-info` — Tooltip con info adicional del horario

**Adaptacion:**
- Card-meeting adaptada para mostrar direccion + horarios
- Boton "Como llegar" con estilo terracota
- Mapa como fondo con overlay de info

---

## Footer Section

**Componentes recomendados:**
- `btn-social-hover` — Botones de redes sociales (Instagram, Facebook, TripAdvisor)
- `btn-cool-share` — Botones de compartir
- `pat-leaf-tiles` — Pattern de hojas como separador sutil
- `input-underline` — Input para newsletter signup

**Adaptacion:**
- btn-social-hover circulares con iconos sociales, hover terracota
- Newsletter con input-underline + boton "Suscribir"
- pat-leaf-tiles como linea separadora en la parte superior, opacidad 10%