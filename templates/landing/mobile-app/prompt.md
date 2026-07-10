# Prompt — Mobile App Landing

## Estética general

Landing page de app móvil limpia, moderna y estilo app store. Tema claro con mucho espacio blanco, acentos azules (#3b82f6) y mockup de teléfono como protagonista. Sensación de producto pulido, profesional, confiable. Estilo similar a las landing pages de apps en Product Hunt o App Store destacadas. Limpio sin ser aburrido: usa ilustraciones sutiles, sombras suaves y el azul como acento confiable. El mockup de teléfono es el elemento central del hero y screenshots.

## Layout

Grid de 12 columnas, max-width 1200px. Espaciado entre secciones generoso (80px). Hero split: texto y CTA a la izquierda, mockup de teléfono a la derecha. Features en lista vertical (no grid) con icono + título + descripción a la izquierda e ilustración a la derecha, alternando lado. Screenshots en carrusel horizontal o grid 3 columnas. Download centrado con dos botones (App Store + Google Play). Footer simple.

Alineación: hero split, features alternados izquierda/derecha, screenshots centrado, download centrado.

## Paleta de color

- **Fondo principal**: #f8fafc (azul-gris muy claro, más cálido que gris puro)
- **Superficies/cards**: #ffffff (blanco puro para tarjetas y mockup)
- **Primario**: #3b82f6 (azul) para CTA, iconos, elementos destacados
- **Secundario**: #60a5fa (azul claro) para gradientes y acentos sutiles
- **Texto principal**: #0f172a (azul-negro, más cálido que negro puro)
- **Texto secundario**: #64748b (slate gris)
- **Bordes**: #e2e8f0 muy sutiles
- **Sombras**: suaves con tono azul sutil, no grises puros

El azul como color de marca da confianza y profesionalismo, típico de apps de productividad. El fondo ligeramente azulado crea coherencia cromática.

## Tipografía

Fuente: Inter (system-ui fallback). Headings con `clamp(2rem, 5vw, 3.5rem)`, peso 700. Body 16px line-height 1.6. Features titles en peso 600 tamaño 1.25rem. Labels en uppercase 12px con letter-spacing. Inter es neutra y legible, apropiada para el estilo app store profesional. Tracking tight en headings (-0.02em).

## Secciones

### Hero
Split layout. Lado izquierdo (col 1-6): eyebrow "Nueva app" con badge pequeño azul, título h1 grande con nombre de la app y tagline, descripción 2 lineas, dos botones de descarga (App Store + Google Play) lado a lado, stats pequeñas debajo (ej: "4.9 rating", "100K+ downloads"). Lado derecho (col 7-12): mockup de teléfono grande con screenshot de la app, sombra suave azul, ligera inclinación o float sutil. Posiblemente un segundo mockup más pequeño detrás.

### Features
Eyebrow "Características" + título h2. Lista vertical de 4-6 features alternando lado. Cada feature: bloque con icono en círculo azul claro a un lado y texto (título + descripción) al otro. Iconos de línea (stroke) en azul. Alternar izquierda/derecha para ritmo visual. Posible ilustración o mini-mockup al lado de cada feature. Separadores sutiles entre features.

### Screenshots
Eyebrow "Galería" + título h2 "Mira la app en acción". Grid 3 columnas o carrusel horizontal de screenshots de la app dentro de mockups de teléfono. Cada screenshot en un phone frame. Hover: escala sutil o elevación. Flechas de navegación si es carrusel. Posible caption breve debajo de cada screenshot.

### Download
Sección final antes del footer. Card grande centrada max-width 640px. Fondo azul claro sutil o gradiente azul. Título "Descarga la app" grande. Subtítulo "Disponible en iOS y Android". Dos botones de descarga grandes lado a lado: App Store (negro) y Google Play (color de marca). Código QR opcional. Stats de confianza: rating, downloads, featured in.

### Footer
Simple y compacto. Logo + nombre app a la izquierda. Links centrados: Producto, Soporte, Privacidad, Términos. Redes sociales a la derecha. Copyright abajo. Sutil separador superior.

## Elementos interactivos y animaciones

- Hero: mockup de teléfono con float animation sutil, scroll suave al hacer scroll
- Features: iconos con scale sutil en hover, ilustraciones con parallax sutil en scroll
- Screenshots: hover escala 1.02, carrusel con transición suave entre slides
- Botones de descarga: hover con elevación (shadow) y scale(1.02), fondo app store/google play
- Download: code QR con hover glow sutil
- Scroll: features aparecen con fade-in al entrar en viewport (stagger)
- Navbar: aparece con blur al hacer scroll (si existe navbar)

## Responsive

- Desktop (>1024px): hero split con mockup grande, features alternados, screenshots 3 cols
- Tablet (768-1024px): hero stack (texto arriba, mockup abajo), features centrados, screenshots 2 cols
- Mobile (<768px): hero stack, features stack con icono arriba y texto abajo, screenshots 1 col carrusel, download botones a ancho completo

## Lo que hace distintivo este diseño

La claridad y confianza del azul sobre fondo claro-azulado, con el mockup de teléfono como protagonista absoluto. El estilo app store profesional: nada de ruido visual, todo sirve para comunicar "esta app es buena y debes descargarla". Los features alternados crean ritmo sin saturar. Los botones de App Store y Google Play como elementos reconocibles. El balance entre whitespace e información: hay suficiente detalle para convencer pero no abruma. Es el look de las apps que inspiran confianza inmediata.