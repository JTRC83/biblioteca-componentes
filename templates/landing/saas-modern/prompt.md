# Prompt — SaaS Modern Landing

## Estética general

Diseño moderno, oscuro y elegante para una landing page de producto SaaS. La estética combina glassmorphism (tarjetas translucidas con blur) con acentos en gradiente violeta-azul. Sensación premium, tecnológica, minimalista pero con profundidad visual. El fondo casi negro (#0a0a0c) deja que los gradientes y las superficies glass resalten sin saturar.

## Layout

Grid de 12 columnas con max-width 1200px centrado. Espaciado entre secciones generoso (80px vertical). Hero centrado con texto y CTA. Features en grid de 3 columnas (responsive: 1 col en móvil, 2 en tablet, 3 en desktop). Pricing en 3 columnas. Testimonios en carrusel horizontal o grid 3 columnas. Footer a ancho completo con 4 zonas.

Alineación: títulos de sección centrados, contenido de secciones alineado a la izquierda dentro de cada tarjeta.

## Paleta de color

- **Fondo principal**: #0a0a0c (casi negro)
- **Superficies**: #18181c con overlay translucido para glassmorphism
- **Primario**: #6366f1 (indigo) usado en gradientes y CTA
- **Secundario**: #8b5cf6 (violeta) combinado con primario en gradientes
- **Texto principal**: #f4f4f5
- **Texto secundario**: #a1a1aa
- **Acentos**: gradientes de #6366f1 a #8b5cf6 en botones y elementos destacados

Los gradientes se usan en: botones CTA, bordes de tarjetas hover, texto destacado (gradient text), líneas separadoras.

## Tipografía

Fuente: Inter (system-ui fallback). Headings con `clamp(2rem, 5vw, 4rem)` para fluid scaling. Body 16px, line-height 1.6. Pesos: 700 para headings, 400 body, 500 para labels/eyebrows. Tracking tight en headings (-0.02em), normal en body.

## Secciones

### Hero
Centrado verticalmente. Eyebrow text pequeño con badge glass "Nuevo" o "Lanzamiento". Título grande en 2 lineas con la segunda linea en gradient text (de indigo a violeta). Subtítulo en gris (#a1a1aa), max 60 caracteres de ancho. Dos botones CTA: primario con gradiente lleno, secundario glass outline. Debajo, un mockup de dashboard o screenshot flotando con sombra grande y animación float sutil.

### Features
Título "Todo lo que necesitas" centrado. Grid de 6 tarjetas glass (3x2). Cada tarjeta: icono en círculo con fondo gradient sutil, título, descripción 2 lineas. Hover: borde gradient aparece, glow sutil. Iconos en color primario.

### Pricing
Título centrado. Toggle mensual/anual con descuento. 3 planes: Free, Pro (destacado con borde gradient y badge "Más popular"), Enterprise. Cada tarjeta glass: nombre, precio grande, lista de features con checks, botón CTA. Plan destacado ligeramente elevado con sombra gradient.

### Testimonials
Título "Lo que dicen nuestros clientes". Grid de 3 tarjetas glass con quote, avatar circular, nombre y empresa. Estrellas de valoración en color primario. Hover: ligera elevación.

### CTA
Sección final antes del footer. Card grande glass centrada con gradient glow detrás. Título "Empieza hoy" con subtítulo. Botón CTA grande con gradiente. Fondo de sección con sutil pattern de puntos.

### Footer
4 columnas: Producto, Recursos, Empresa, Legal. Logo arriba a la izquierda. Redes sociales abajo a la derecha con iconos circulares hover. Copyright abajo centrado. Links en gris, hover en blanco.

## Elementos interactivos y animaciones

- Hero: texto aparece con fade-in, screenshot con float animation infinita sutil
- Features cards: hover lift + glow + borde gradient
- Pricing: toggle smooth entre mensual/anual con precio animado
- Botones: ripple effect en click, gradiente se desplaza sutilmente en hover
- Scroll: elementos aparecen con fade-in-up al entrar en viewport
- Loader inicial: sphere gradient mientras carga assets

## Responsive

- Desktop (>1024px): grid 3 columnas, hero centrado con screenshot grande
- Tablet (768-1024px): grid 2 columnas, hero ajustado
- Mobile (<768px): grid 1 columna, tipografía reducida, padding lateral 24px, CTA a ancho completo

## Lo que hace distintivo este diseño

La combinación de fondo oscuro profundo con glassmorphism translucido y gradientes indigo-violeta crea una sensación premium sin ser ruidoso. El uso de gradient text en headings clave y bordes gradient en hover da vida al diseño sin saturar. El hero centrado con screenshot flotando establece inmediatamente que es un producto SaaS.