# Componentes — Mobile App Landing

Mapeo de secciones a componentes de la biblioteca. Los IDs son reales y corresponden a componentes existentes. La app móvil usa tema claro, azul como acento y mockup de teléfono como protagonista.

---

## Hero Section

**Componentes recomendados:**
- `btn-download-slide` — Botón de descarga con efecto slide, ideal para App Store / Google Play
- `btn-get-started-gradient` — Botón CTA alternativo con gradiente azul
- `card-3d` — Tarjeta 3D para el mockup de teléfono con tilt sutil en hover
- `card-features` — Adaptada como card glass para stats pequeñas (rating, downloads)
- `anim-float` — Animación float sutil para el mockup de teléfono del hero
- `loader-spinner` — Spinner mientras carga el screenshot dentro del mockup

**Adaptación:**
- `btn-download-slide` con dos variantes: App Store (fondo negro) y Google Play (fondo color de marca)
- `card-3d` como contenedor del mockup: tilt muy sutil (max 5deg), shadow-phone, sin efecto agresivo
- `anim-float` con amplitud 12px y duración 6s para el mockup flotando suavemente
- `card-features` para stats: "4.9★ rating", "100K+ downloads" en formato compacto

---

## Features Section

**Componentes recomendados:**
- `card-features` — Card de features para cada bloque de característica con icono + título + descripción
- `card-hover-fill` — Efecto de fill en hover para cada bloque de feature
- `anim-glow` — Glow sutil azul en hover del icono (adaptado a tema claro)
- `cb-animated-check` — Check animado opcional para listas dentro de features
- `card-glass-shine` — Variante con shine para interactividad en features destacados

**Adaptación:**
- `card-features` con icono en círculo de 48px fondo #dbeafe (azul claro), icono en #3b82f6
- Layout alternado: feature impar (icono izquierda), feature par (icono derecha)
- `anim-glow` adaptado a tema claro: usar sombra azul suave en lugar de glow neón
- `card-hover-fill` con fill en #f1f5f9 sutil en hover del bloque
- Separadores sutiles (#e2e8f0) entre features alternados

---

## Screenshots Section

**Componentes recomendados:**
- `card-3d` — Tarjeta 3D para cada screenshot dentro de phone frame con tilt en hover
- `card-project` — Card de proyecto adaptada para screenshots con imagen + caption
- `card-stack-flip` — Flip card opcional para screenshots interactivos (anverso: screenshot, reverso: info)
- `anim-float` — Float muy sutil para carrusel de screenshots
- `loader-3d-boxes` — Loader mientras cargan las imágenes de screenshots

**Adaptación:**
- `card-3d` como phone frame: tilto sutil (max 8deg), shadow-lg, border-radius 36px (phone)
- Grid 3 columnas o carrusel horizontal con transición 400ms ease entre slides
- Hover: scale(1.02) + shadow aparece, sin tilt agresivo
- Caption en #64748b 12px uppercase debajo de cada screenshot
- `loader-3d-boxes` pequeño aparece mientras carga cada imagen del screenshot

---

## Download Section

**Componentes recomendados:**
- `btn-download-slide` — Botón de descarga principal con efecto slide (App Store + Google Play)
- `btn-get-started-gradient` — Alternativa de CTA con gradiente azul
- `card-glass` — Card grande centrada para contener la sección de descarga (adaptada a tema claro)
- `card-gradient` — Card con gradiente azul sutil como fondo de la sección
- `loader-pulse` — Loader pulsante mientras procesa la redirección de descarga

**Adaptación:**
- `card-gradient` con gradiente azul suave: linear-gradient(135deg, #eff6ff, #dbeafe)
- `card-glass` adaptada a tema claro: fondo rgba(255,255,255,0.8), blur 12px, shadow-lg
- `btn-download-slide` dos variantes lado a lado: App Store (negro) + Google Play (verde de marca)
- Botones tamaño large (padding 16px 40px), iconos + texto, shadow-md en hover
- `loader-pulse` pequeño aparece en botón tras click antes de redirigir
- Código QR opcional centrado con shadow-sm y padding 20px

---

## Footer Section

**Componentes recomendados:**
- `btn-social-hover` — Botones de redes sociales con hover para el footer
- `btn-cool-share` — Alternativa para iconos de compartir/redes sociales
- `nav-glass-menu` — Navbar glass para el menú del footer (adaptado a tema claro)
- `pat-grid` — Pattern de grid sutil como separador superior del footer

**Adaptación:**
- `btn-social-hover` en gris (#64748b) que pasa a azul (#3b82f6) en hover
- `nav-glass-menu` adaptado a tema claro: fondo rgba(255,255,255,0.7), blur 8px
- Links del footer en #64748b, hover en #0f172a
- `pat-grid` como línea separadora sutil (#e2e8f0) en la parte superior
- Footer compacto: logo + links centrados + redes a la derecha