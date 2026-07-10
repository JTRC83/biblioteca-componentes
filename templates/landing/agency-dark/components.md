# Componentes — Agency Dark Landing

Mapeo de secciones a componentes de la biblioteca. Los IDs son reales y corresponden a componentes existentes. La agencia creativa usa neón, gradientes violeta-magenta y glassmorphism con glows agresivos.

---

## Hero Section

**Componentes recomendados:**
- `btn-get-started-gradient` — Botón CTA grande con gradiente violeta→magenta + glow neón
- `btn-circle-glow` — Botón con glow circular para CTA alternativo con halo neón
- `bg-cosmic-plasma` — Fondo cósmico con plasma para el hero a pantalla completa
- `bg-night-sky` — Alternativa de fondo con estrellas para profundidad
- `anim-glow` — Animación de glow pulsante para el título o elementos decorativos
- `anim-float` — Float para formas geométricas decorativas en el fondo del hero
- `pat-star-burst` — Pattern de star burst sutil como textura de fondo

**Adaptación:**
- `btn-get-started-gradient` con gradiente #a855f7→#ec4899, añadir glow-md en hover
- `bg-cosmic-plasma` a opacidad 30-40% para no saturar el texto, tonos violeta/magenta
- `anim-glow` aplicado al título con duración 3s loop, intensidad glow-sm → glow-md
- `anim-float` para formas geométricas con amplitud 20px y duración 8s, rotación sutil

---

## Services Section

**Componentes recomendados:**
- `card-cyber` — Tarjeta estilo cyber perfecto para servicios con estética neón
- `card-glass` — Tarjeta glass para servicios con glassmorphism
- `card-glass-shine` — Variante con efecto shine para hover más dramático
- `card-gradient` — Card con gradiente para servicios destacados
- `anim-glow` — Glow neón en hover del borde de cada tarjeta
- `pat-grid-fade` — Pattern de grid desvanecido como fondo de sección sutil

**Adaptación:**
- `card-cyber` para servicios con número grande (01, 02...) en violeta translucido (opacity 0.3)
- En hover: `anim-glow` activa borde neón violeta + número se ilumina (opacity → 1)
- Layout asimétrico: usar `card-glass` grande (col-span 6) + `card-cyber` medianas (col-span 4)
- `pat-grid-fade` a 3% opacidad como textura de fondo de la sección

---

## Team Section

**Componentes recomendados:**
- `card-profile` — Card de perfil para cada miembro del equipo con foto + nombre + rol
- `btn-social-hover` — Botones de redes sociales que aparecen en hover sobre la foto
- `btn-linkedin` — Botón específico de LinkedIn para link profesional
- `btn-follow-instagram` — Botón de Instagram para link social del miembro
- `anim-glow` — Glow neón alrededor de la foto en hover
- `card-hover-fill` — Efecto de fill en hover para interactividad

**Adaptación:**
- `card-profile` con foto circular 128px, nombre en blanco peso 600, rol en gris
- `anim-glow` crea halo violeta alrededor de la foto en hover (glow-sm → glow-md)
- `btn-social-hover` aparece en overlay sobre la foto en hover: LinkedIn, Instagram, Twitter
- Grid 4 columnas con gap 24px, fotos centradas

---

## Portfolio Section

**Componentes recomendados:**
- `card-3d` — Tarjeta 3D con tilt para cada proyecto del portfolio
- `card-project` — Card de proyecto con imagen + título + categoría
- `card-gradient` — Card con gradiente para proyectos destacados
- `card-stack-flip` — Tarjeta flip para proyectos con info en el reverso
- `card-coral-flip` — Alternativa de flip con estética coral para contraste cálido
- `anim-glow` — Glow sutil en hover del borde de cada proyecto

**Adaptación:**
- `card-3d` con tilt agresivo (max 12deg) y overlay gradient violeta→magenta en hover
- `card-project` con imagen, overlay aparece en hover con título + categoría desplazándose
- Grid masonry 3 columnas: usar `card-3d` grande (col-span 2 row-span 2) + medianas
- `anim-glow` activa borde neón violeta en hover, overlay gradient simultáneo
- `card-stack-flip` opcional para proyectos con info detallada en el reverso

---

## CTA Section

**Componentes recomendados:**
- `btn-get-started-gradient` — Botón CTA grande con gradiente violeta→magenta
- `btn-launch` — Alternativa de botón con efecto launch para CTA de agencia
- `card-glass` — Card grande glass centrada con glow detrás masivo
- `bg-mesh` — Fondo mesh gradient para la sección CTA
- `bg-aurora` — Alternativa de fondo aurora para CTA con profundidad
- `anim-glow` — Glow pulsante masivo detrás de la card CTA
- `pat-star-burst` — Pattern de star burst como textura de fondo del CTA

**Adaptación:**
- `bg-mesh` con tonos violeta/magenta a 25% opacidad para fondo dramático
- `card-glass` grande max-width 720px centrada con padding 64px, glass-blur 16px
- `anim-glow` con glow-mixed (violeta + magenta) detrás de la card, duración 4s pulsante
- `btn-get-started-gradient` tamaño XL (padding 20px 56px, font 20px), glow-lg en hover
- `pat-star-burst` a 5% opacidad sobre el mesh para textura sutil

---

## Footer Section

**Componentes recomendados:**
- `btn-social-hover` — Botones de redes sociales con hover para el footer
- `btn-discord-beam` — Botón de Discord con beam para comunidad
- `btn-follow-me` — Botón de follow para CTA social del footer
- `pat-grid` — Pattern de grid sutil como separador del footer

**Adaptación:**
- `btn-social-hover` en gris (#a1a1aa) que pasa a violeta neón (#a855f7) en hover con glow-sm
- `btn-discord-beam` para link de comunidad de la agencia
- Links del footer en #a1a1aa, hover en #fafafa
- `pat-grid` como línea separadora gradient sutil en la parte superior
- Logo + tagline a la izquierda, links centrados, redes a la derecha