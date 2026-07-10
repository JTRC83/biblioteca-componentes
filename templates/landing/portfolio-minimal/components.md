# Componentes — Portfolio Minimal Landing

Mapeo de secciones a componentes de la biblioteca. Los IDs son reales y corresponden a componentes existentes. El portfolio minimalista usa pocos componentes y los adapta al look monocromo.

---

## Hero Section

**Componentes recomendados:**
- `btn-learn-more` — Botón minimalista para enlace a proyectos o "Ver trabajo"
- `anim-float` — Animación float muy sutil opcional para elemento decorativo (si se añade)
- `input-underline` — Estilo de input underline para referencia visual del contacto

**Adaptación:**
- `btn-learn-more` con fondo negro (#1a1a1a) y texto blanco, hover invierte colores
- El hero no usa botones prominentes; el CTA es sutil, puede ser solo un link con underline
- Sin fondo decorativo: el fondo es el propio #fafafa, la tipografía hace el trabajo

---

## Projects Section

**Componentes recomendados:**
- `card-3d` — Tarjeta 3D para cada proyecto, tilt sutil al hover sobre la imagen
- `card-hover-fill` — Efecto de fill para hover del proyecto
- `card-project` — Card especifica de proyecto con imagen + título + categoría
- `card-gradient` — Alternativa si se quiere un acento sutil (usar solo en modo monocromo: gradient gris)

**Adaptación:**
- `card-3d` con tilt muy sutil (max 5deg) y sin sombras agresivas (reducir shadow a 0 2px 8px)
- `card-project` con imagen, título h3, categoría en uppercase 12px letter-spacing 0.1em
- En hover: imagen scale(1.02) durante 300ms ease, sin otros efectos
- Sin bordes en tarjetas: solo imagen + texto, el espacio separa

---

## About Section

**Componentes recomendados:**
- `card-profile` — Card de perfil para la sección about con retrato + bio
- `card-features` — Adaptado a lista de skills en 2 columnas (Design / Development)
- `input-underline` — Referencia visual para el estilo de separadores (líneas finas)

**Adaptación:**
- `card-profile` sin borde, sin sombra, solo retrato circular + texto centrado
- `card-features` transformado en lista simple de skills: título de categoría en uppercase, items en lista
- Todo centrado max-width 640px, texto justificado izquierda

---

## Contact Section

**Componentes recomendados:**
- `form-modern` — Formulario moderno para el formulario de contacto
- `input-underline` — Input con estilo underline, perfecto para el look minimalista
- `input-floating` — Alternativa de input con label flotante para nombre/email/mensaje
- `btn-learn-more` — Botón de envío minimalista (negro, hover invierte)
- `btn-send-message` — Alternativa de botón de envío específico para mensajes

**Adaptación:**
- `input-underline` para todos los campos: solo línea inferior, sin borde completo
- Línea inferior cambia de #e5e5e5 a #1a1a1a en focus (transition 200ms ease)
- `btn-send-message` con fondo #1a1a1a texto blanco, padding 12px 32px, hover invierte
- Formulario centrado max-width 480px
- Debajo: email directo y links sociales como texto simple con underline hover