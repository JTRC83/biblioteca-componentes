# Componentes — Travel & Tourism Landing

Mapeo de secciones a componentes de la biblioteca. Los IDs son reales.

---

## Hero Section

**Componentes recomendados:**
- `btn-get-started-gradient` — Boton CTA "Explorar destinos" con gradiente teal-naranja
- `btn-explore` — Boton secundario "Ver paquetes" estilo outline
- `bg-sunset-glow` — Fondo con sunset glow para el hero, da calidez de atardecer
- `bg-aurora` — Fondo aurora como capa alternativa con tonos teal
- `form-modern` — Buscador de destinos integrado en el hero
- `input-floating` — Input del buscador con floating label "A donde quieres ir?"
- `btn-send-message` — Boton de envio del buscador
- `loader-gradient-sphere` — Loader esfera gradiente teal-naranja para estados de carga

**Adaptacion:**
- Cambiar gradiente del boton a linear-gradient(135deg, #0891b2, #f97316)
- bg-sunset-glow con tonos teal y naranja atardecer
- bg-aurora con destellos teal/cyan como capa de fondo
- Texto blanco sobre overlay teal oscuro (bottom-up) del hero
- Buscador con input-floating teal en focus, boton naranja
- loader-gradient-sphere con gradiente teal-naranja en busquedas

---

## Destinations Section

**Componentes recomendados:**
- `card-3d` — 3D Hover Card para destinos con tilt en hover y foto de fondo
- `card-hover-fill` — Efecto fill en hover para overlay con nombre del destino
- `card-glass-shine` — Glass Shine Card para destinos premium con efecto shine
- `card-project` — Project card para destino destacado con info detallada
- `btn-explore` — Boton "Ver mas" en cada card de destino
- `bg-mesh` — Fondo mesh sutil teal para la seccion

**Adaptacion:**
- card-3d con foto de destino como background, tilt 3D en hover
- Hover: overlay slide-up con nombre, pais, precio "desde" y rating
- card-hover-fill con fill naranja desde abajo al hover
- card-glass-shine para destinos destacados/premium
- card-project para destino hero (1 grande + lista)
- Grid 3 columnas, 6-9 destinos
- btn-explore con estilo outline teal
- bg-mesh con tonos teal muy sutiles, opacidad baja

---

## Packages Section

**Componentes recomendados:**
- `card-glass` — Glass card para paquetes con efecto cristal
- `card-project` — Project card para paquete detallado con imagen + info + precio
- `card-hover-fill` — Efecto fill para destacar paquete "Mas popular"
- `card-3d` — 3D card para paquetes con tilt
- `tgl-pill` — Toggle pill para alternar precio por persona / por grupo
- `btn-get-started-gradient` — Boton "Reservar" con gradiente teal-naranja
- `cb-animated-check` — Checkbox animado para lista de incluidos (vuelo, hotel, tours)
- `loader-gradient-sphere` — Loader al cargar disponibilidad de paquetes

**Adaptacion:**
- card-glass con fondo blanco translucido, borde sutil
- card-project con imagen del paquete, duracion, lista de incluidos, precio destacado
- Paquete central con card-hover-fill naranja + badge "Mas popular" + glow naranja
- tgl-pill para alternar precio (persona / grupo) con animacion
- btn-get-started-gradient "Reservar" con linear-gradient(135deg, #0891b2, #f97316)
- cb-animated-check teal para lista de incluidos
- loader-gradient-sphere teal-naranja al consultar disponibilidad
- Colores: precio en bold naranja #f97316, texto #0f172a

---

## Experiences Section

**Componentes recomendados:**
- `card-hover-fill` — Efecto fill naranja desde abajo al hover
- `card-3d` — 3D card para experiencias con tilt
- `card-glass-shine` — Glass shine card para experiencias premium
- `card-glass` — Glass card para actividades
- `btn-explore` — Boton "Reservar experiencia" outline
- `pat-dots` — Patron de puntos decorativo de fondo

**Adaptacion:**
- card-hover-fill con fill naranja #f97316 desde abajo al hover
- card-3d con icono/foto de actividad, tilt sutil
- Experiencias: snorkel, trekking, tour gastronomico, safari, etc
- Tag de duracion en esquina superior con badge teal
- btn-explore "Reservar experiencia" estilo outline teal
- pat-dots como fondo decorativo, opacidad 5-8%, tono teal
- Grid 2-3 columnas segun disponible

---

## Testimonials Section

**Componentes recomendados:**
- `card-profile` — Card de perfil para avatar + nombre + destino visitado del viajero
- `card-glass` — Glass card para contener el testimonio
- `card-glass-shine` — Glass shine card para testimonio destacado
- `cb-animated-check` — Check animado como valoracion positiva (viaje verificado)
- `bg-aurora` — Fondo aurora sutil teal para la seccion

**Adaptacion:**
- card-profile con avatar circular + nombre + destino visitado
- Comentario en card-glass con efecto cristal
- Estrellas de valoracion en color teal #0891b2
- cb-animated-check verde como sello "Viaje verificado"
- card-glass-shine para testimonio destacado del carrusel
- Carrusel de 3 cards, auto-rotate cada 5s, pausa en hover
- bg-aurora con tonos teal muy sutiles de fondo

---

## Newsletter Section

**Componentes recomendados:**
- `form-modern` — Formulario moderno para suscripcion
- `input-floating` — Input de email con floating label "Tu correo electronico"
- `input-underline` — Input underline alternativo minimalista
- `btn-get-started-gradient` — Boton "Suscribirme" con gradiente teal-naranja
- `btn-send-message` — Boton de envio estilo send
- `cb-animated-check` — Checkbox animado de aceptacion de privacidad
- `tgl-pill` — Toggle pill para elegir frecuencia (semanal/mensual)
- `bg-mesh` — Fondo mesh teal para la banda
- `loader-gradient-sphere` — Loader al enviar suscripcion

**Adaptacion:**
- Banda centrada sobre fondo teal con bg-mesh sutil
- form-modern con input-floating teal en focus
- Boton "Suscribirme" naranja con gradiente teal-naranja
- cb-animated-check teal para aceptacion de privacidad
- tgl-pill para frecuencia: semanal / mensual
- loader-gradient-sphere teal-naranja al enviar
- Mensaje de confirmacion con check verde tras enviar

---

## Footer Section

**Componentes recomendados:**
- `btn-cool-share` — Botones de compartir y redes sociales
- `btn-copy-link` — Boton "Copiar enlace" del sitio
- `input-underline` — Input underline para mini newsletter del footer
- `btn-send-message` — Boton enviar del mini form
- `pat-dots` — Patron de puntos decorativo en la parte superior
- `bg-mesh` — Fondo mesh sutil para el footer
- `tt-glow-info` — Tooltip con info adicional de contacto/horarios

**Adaptacion:**
- 4 columnas: Logo + descripcion, Destinos populares, Empresa, Contacto
- btn-cool-share circulares con iconos sociales (Instagram, Facebook, Twitter, YouTube)
- Hover de redes con tono teal #0891b2
- btn-copy-link para copiar enlace del sitio
- Mini newsletter con input-underline + btn-send-message
- pat-dots como linea separadora en la parte superior, opacidad 8%, tono teal
- bg-mesh muy sutil como fondo del footer
- tt-glow-info con tooltips teal en iconos de contacto (telefono, email, horarios)
- Copyright y links legales en la parte inferior