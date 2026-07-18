# Componentes — Healthcare Clinic Landing

Mapeo de secciones a componentes de la biblioteca.

---

## Hero Section

**Componentes recomendados:**
- `btn-get-started-gradient` — CTA "Pedir cita" (cambiar gradiente a cyan)
- `btn-learn-more` — Boton "Ver servicios" estilo outline
- `anim-glow` — Glow sutil para badge "Atencion 24/7"

**Adaptacion:**
- Gradiente del boton a linear-gradient(135deg, #0891b2, #06b6d4)
- Texto blanco, radius 12px, sin glow excesivo
- Hover: cambio de tono sutil, sin efectos llamativos
- Badge con anim-glow muy sutil, opacidad 0.1

---

## Services Section

**Componentes recomendados:**
- `card-features` — Features card con layers para cada servicio medico
- `card-glass` — Glass card para servicios (desaturar a claro)
- `card-neumorph` — Neumorphic card para sensacion suave y calmada
- `card-digital-way` — Digital Way card para servicios profesionales

**Adaptacion:**
- Surface blanca, border 1px #e2e8f0, radius 16px
- Hover: border cyan #0891b2 + sombra sutil
- Icono medico en circulo cyan suave (rgba(8,145,178,0.1))
- Padding 24px, transicion 200ms ease

---

## Doctors Section

**Componentes recomendados:**
- `card-profile` — Card de perfil para doctor con foto + especialidad
- `card-hover-fill` — Efecto fill en hover para info adicional
- `btn-social-hover` — Botones de redes del doctor (LinkedIn)
- `tt-linkedin-card` — Tooltip con perfil LinkedIn del doctor

**Adaptacion:**
- Card-profile con foto circular del doctor
- Nombre en bold, especialidad en cyan
- Hover: lift sutil + reveal de info (anos experiencia, idiomas)
- btn-social-hover para LinkedIn/ResearchGate

---

## Appointment Section

**Componentes recomendados:**
- `form-modern` — Formulario completo moderno para la cita
- `input-floating` — Inputs con floating label para nombre, email, telefono
- `btn-send-message` — Boton "Solicitar cita"
- `card-meeting` — Meeting card para mostrar disponibilidad/horarios
- `card-verification-code` — Verification code para confirmar cita

**Adaptacion:**
- Form con inputs cyan en focus state
- Boton "Solicitar cita" bg cyan #0891b2, texto blanco, radius 12px
- card-meeting para mostrar horarios disponibles
- Validacion visual: border rojo en error, verde en success

---

## Testimonials Section

**Componentes recomendados:**
- `card-profile` — Card de perfil para paciente
- `card-glass` — Glass card para contener el testimonio
- `cb-thumb-like` — Thumb like como valoracion positiva

**Adaptacion:**
- Card-profile con avatar + nombre + estrellas cyan
- Comentario en italic
- Grid de 3 testimonios
- Estrellas en color cyan #0891b2

---

## FAQ Section

**Componentes recomendados:**
- `card-features` — Features card con layers expandibles para cada pregunta
- `radio-card` — Radio card para seleccion unica de categoria
- `tip-bounce-info` — Tooltip con info adicional en cada pregunta

**Adaptacion:**
- card-features como acordeon: click expande/collapse
- Surface blanca, border 1px #e2e8f0, radius 12px
- Icono + en estado cerrado, - en abierto, color cyan
- Transicion expand/collapse 300ms ease

---

## Contact Section

**Componentes recomendados:**
- `card-meeting` — Meeting card para info de contacto
- `btn-cool-share` — Boton "Como llegar" / "Compartir ubicacion"
- `input-underline` — Input para formulario de contacto rapido
- `tt-support-menu` — Support menu tooltip para opciones de contacto

**Adaptacion:**
- card-meeting para direccion + horarios + telefono
- Mapa como fondo con overlay de info
- Boton "Llamar ahora" con icono telefono, bg cyan
- Boton "Como llegar" outline cyan

---

## Footer Section

**Componentes recomendados:**
- `btn-social-hover` — Botones de redes sociales
- `input-underline` — Input para newsletter signup
- `pat-dots` — Pattern de puntos muy sutil como separador
- `btn-send-message` — Boton "Suscribir" newsletter

**Adaptacion:**
- btn-social-hover circulares, hover cyan
- Newsletter con input-underline (underline cyan en focus)
- pat-dots opacidad 3% como separador superior
- Footer claro, links en slate-600, hover cyan