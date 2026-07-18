# Componentes — Legal & Consulting Landing

Mapeo de secciones a componentes de la biblioteca.

---

## Hero Section

**Componentes recomendados:**
- `btn-continue-application` — CTA "Consulta gratuita" (cambiar gradiente a navy)
- `btn-learn-more` — Boton "Areas de practica" estilo outline con flecha expandible
- `btn-copy-link` — Boton "Compartir" para difundir la firma

**Adaptacion:**
- Gradiente del boton a linear-gradient(135deg, #1e3a5f, #15293f) navy solido
- Texto blanco, radius 8px, sin glow excesivo
- Hover: cambio de tono sutil a navy mas oscuro, sin efectos llamativos
- btn-learn-more con border 1px #1e3a5f, texto navy, hover fill navy
- Tipografia serif Lora en titulos, Inter en botones

---

## Practice Areas Section

**Componentes recomendados:**
- `card-digital-way` — Digital Way card para areas de practica con expand hover
- `card-project` — Project card con tags para especialidades legales
- `card-job-offer` — Job Offer card minimalista para area de practica con warning flag
- `btn-learn-more` — Boton "Ver detalles" en cada card de area

**Adaptacion:**
- Surface #f8fafc, border 1px #e2e8f0, radius 12px
- Hover: border navy #1e3a5f + sombra sutil
- Icono legal en circulo navy suave (rgba(30,58,95,0.1))
- Padding 24px, transicion 200ms ease
- Tags de especialidad en teal #0891b2, peso 500, radius 4px
- Titulos en Lora serif, descripciones en Inter

---

## Attorneys Section

**Componentes recomendados:**
- `card-profile` — Card de perfil para abogado con foto + credenciales
- `card-job-offer` — Job Offer card para mostrar titulo y especialidad del abogado
- `tt-linkedin-card` — Tooltip con perfil LinkedIn del abogado
- `btn-copy-link` — Boton para copiar enlace del perfil del abogado

**Adaptacion:**
- Card-profile con foto profesional del abogado
- Nombre en Lora serif bold, titulo (Socio/Asociado) en teal
- Credenciales: universidad y colegio de abogados en Inter sm
- Hover: lift sutil + reveal de credenciales
- tt-linkedin-card para enlace a perfil profesional
- Surface blanca, border 1px #e2e8f0, radius 12px

---

## Results Section

**Componentes recomendados:**
- `card-receipt` — Receipt card minimalista para mostrar stats de casos
- `card-meeting` — Meeting card para mostrar hitos y resultados clave
- `loader-pulse` — Pulse ring loader sutil para animacion de contadores numericos
- `pat-grid-fade` — Grid fade pattern como fondo sutil de la seccion de resultados

**Adaptacion:**
- Fondo navy #1e3a5f con texto blanco para maximo impacto
- Stats numericas grandes en Lora serif: anos de experiencia, casos ganados
- loader-pulse como indicador sutil durante animacion de contadores, opacidad 0.3
- pat-grid-fade opacidad 5% como textura de fondo en navy
- Separadores con linea fina rgba(255,255,255,0.15)
- Numeros en weight 700, labels en Inter weight 400

---

## Testimonials Section

**Componentes recomendados:**
- `card-profile` — Card de perfil para cliente con avatar + nombre
- `card-project` — Project card para contener el testimonio con tags de tipo de caso
- `btn-copy-link` — Boton para compartir el testimonio

**Adaptacion:**
- Card-profile con avatar + nombre + tipo de caso
- Comentario en italic Lora serif
- Estrellas en color teal #0891b2
- Grid de 3 testimonios
- Surface #f8fafc, border 1px #e2e8f0, radius 12px
- Padding 24px, sombra sutil

---

## Consultation Section

**Componentes recomendados:**
- `form-modern` — Formulario completo moderno para la consulta legal
- `input-floating` — Inputs con floating label para nombre, email, telefono
- `input-underline` — Input underline para mensaje y campo adicional
- `radio-card` — Radio card para seleccionar area de practica
- `cb-animated-check` — Checkbox animado de consentimiento y privacidad
- `btn-send-message` — Boton "Solicitar consulta"
- `card-meeting` — Meeting card para mostrar horarios y disponibilidad

**Adaptacion:**
- Form con inputs navy #1e3a5f en focus state
- Boton "Solicitar consulta" bg navy #1e3a5f, texto blanco, radius 8px
- radio-card para seleccionar area: Civil, Mercantil, Laboral, Penal, Fiscal
- cb-animated-check para consentimiento de privacidad, check en teal
- card-meeting para mostrar horarios de atencion disponibles
- Validacion visual: border rojo en error, verde en success
- Dos columnas: info izquierda, form derecha

---

## Footer Section

**Componentes recomendados:**
- `tt-linkedin-card` — Tooltip LinkedIn para redes profesionales del despacho
- `input-underline` — Input para newsletter signup
- `pat-dots` — Pattern de puntos muy sutil como separador
- `btn-send-message` — Boton "Suscribir" newsletter
- `btn-copy-link` — Boton para copiar enlace de contacto

**Adaptacion:**
- Fondo navy #1e3a5f, texto blanco y slate-300
- tt-linkedin-card para perfiles profesionales de la firma
- Newsletter con input-underline (underline teal en focus)
- pat-dots opacidad 3% en blanco como separador superior
- Links en slate-300, hover teal #0891b2
- 4 columnas: logo + descripcion, areas, contacto, redes
- Tipografia Lora serif en titulos de columna, Inter en links