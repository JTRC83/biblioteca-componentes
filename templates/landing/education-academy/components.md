# Componentes — Education & Academy Landing

Mapeo de secciones a componentes de la biblioteca.

---

## Hero Section

**Componentes recomendados:**
- `btn-get-started-gradient` — CTA "Empezar gratis" con gradiente violeta-cyan
- `btn-explore` — Boton "Ver cursos" estilo outline
- `anim-glow` — Glow sutil detras del badge "Nuevo curso"
- `bg-mesh` — Mesh gradient con tonos violeta para fondo del hero

**Adaptacion:**
- Gradiente del boton a linear-gradient(135deg, #7c3aed, #06b6d4)
- Hover: box-shadow glow rgba(124,58,237,0.15)
- bg-mesh con tonos violeta/cyan a opacidad 15%
- Stats bar con numeros grandes en violeta

---

## Courses Section

**Componentes recomendados:**
- `card-project` — Project Card para cada curso con thumbnail + titulo + info
- `card-glass` — Glass card para cursos destacados (desaturar a claro)
- `card-features` — Features card con layers para categorias expandibles
- `card-3d` — 3D Hover Card para cursos premium con tilt

**Adaptacion:**
- Card-project: surface blanca, border 1px #e4e4e7, radius 16px
- Thumbnail en top, info debajo: categoria badge cyan, titulo, instructor, duracion
- Rating con estrellas violeta
- Precio en bold
- Hover: lift -2px + sombra sutil

---

## Instructors Section

**Componentes recomendados:**
- `card-profile` — Card de perfil para instructor con foto + especialidad
- `card-hover-fill` — Efecto fill en hover para reveal de redes
- `btn-social-hover` — Botones de redes sociales del instructor
- `tt-linkedin-card` — Tooltip con perfil LinkedIn del instructor

**Adaptacion:**
- Card-profile con foto circular del instructor
- Nombre en bold, especialidad en violeta
- Stats: numero de estudiantes, rating
- Hover: reveal de redes sociales (btn-social-hover)
- tt-linkedin-card en hover para ver perfil LinkedIn

---

## Features Section

**Componentes recomendados:**
- `card-features` — Features card con layers para cada caracteristica
- `card-glass` — Glass card (desaturar a claro, violeta accent)
- `card-digital-way` — Digital Way card para features profesionales

**Adaptacion:**
- Surface blanca, border 1px #e4e4e7, radius 16px
- Icono en circulo violeta suave (rgba(124,58,237,0.1))
- Hover: border violeta + sombra sutil
- Padding 24px, transicion 200ms

---

## Pricing Section

**Componentes recomendados:**
- `card-pro-plan` — Pro Plan Card para plan destacado (Pro)
- `cb-gradient-check` — Checkbox con gradiente violeta para features
- `cb-animated-check` — Check animado alternativo
- `tgl-pill` — Toggle pill para switch mensual/anual
- `btn-get-started-gradient` — CTA en cada plan

**Adaptacion:**
- Plan Pro destacado: border violeta + glow sutil rgba(124,58,237,0.1)
- cb-gradient-check: gradiente violeta-cyan, size 16px
- tgl-pill para toggle mensual/anual, track violeta cuando checked
- Boton CTA: gradiente violeta en plan destacado, outline en otros

---

## Testimonials Section

**Componentes recomendados:**
- `card-profile` — Card de perfil para estudiante
- `card-glass` — Glass card para contener el testimonio
- `cb-thumb-like` — Thumb like como valoracion positiva
- `anim-ranking-card` — Ranking Card para mostrar progreso del estudiante

**Adaptacion:**
- Card-profile con avatar + nombre + curso completado
- Estrellas en violeta #7c3aed
- Comentario en italic
- anim-ranking-card para mostrar progreso: "De 0 a Full Stack Developer en 6 meses"

---

## Newsletter Section

**Componentes recomendados:**
- `input-floating` — Input con floating label para email
- `btn-send-message` — Boton "Suscribir"
- `bg-aurora` — Aurora con tonos violeta para fondo CTA

**Adaptacion:**
- Input con focus violeta
- Boton "Suscribir" bg violeta #7c3aed, texto blanco
- bg-aurora con tonos violeta/cyan a opacidad 10%
- CTA centrado: "Unete a 10K+ estudiantes"

---

## Footer Section

**Componentes recomendados:**
- `btn-social-hover` — Botones de redes sociales
- `input-underline` — Input para newsletter del footer
- `btn-send-message` — Boton "Suscribir" newsletter
- `pat-dots` — Pattern de puntos sutil como separador

**Adaptacion:**
- btn-social-hover circulares, hover violeta
- Newsletter con input-underline (underline violeta en focus)
- pat-dots opacidad 3% como separador superior
- Footer claro, links en zinc-600, hover violeta