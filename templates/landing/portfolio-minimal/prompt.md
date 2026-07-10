# Prompt — Portfolio Minimal Landing

## Estética general

Portfolio minimalista y elegante con tema claro. Mucho whitespace, tipografía como protagonista, líneas finas y máxima legibilidad. El diseño respira: cada sección tiene espacio generoso. Sin elementos decorativos innecesarios. El color es casi monocromo: negros sobre blanco roto (#fafafa). La jerarquía se establece mediante tamaño tipográfico y peso, no mediante color. Sensación editorial, sofisticada, atemporal.

## Layout

Grid de 12 columnas con max-width 1200px pero contenido más estrecho (max 960px para texto). Espaciado entre secciones muy generoso (100px). Hero con nombre grande a la izquierda y título/rol a la derecha, asimétrico. Projects en grid 2 columnas (gaps generosos). About centrado con max-width 640px. Contact centrado con formulario simple.

Alineación: hero asimétrico (nombre izquierda, rol derecha), resto centrado o alineado a la izquierda dentro de su contenedor.

## Paleta de color

- **Fondo principal**: #fafafa (blanco roto, más cálido que blanco puro)
- **Superficies/cards**: #ffffff puro para tarjetas de proyectos
- **Texto principal**: #1a1a1a (casi negro, no negro puro para ser más suave)
- **Texto secundario**: #737373 (gris medio)
- **Acento**: #1a1a1a para botones y elementos interactivos (sin color de marca, solo negro)
- **Bordes**: #e5e5e5 muy sutiles

Sin gradientes. Sin colores de marca. El "color" viene del contraste entre texto negro y fondo claro. Los proyectos pueden tener color pero viene de las imágenes, no del layout.

## Tipografía

Fuente: Inter (system-ui fallback). Headings muy grandes con `clamp(2.5rem, 6vw, 5rem)` y peso 700. Body 16px line-height 1.7 (más aireado). Eyebrows en uppercase 12px con letter-spacing amplio (0.1em). Tracking: headings normal (sin tight, el minimalismo no comprime), body normal. Mono opcional para detalles técnicos o fechas.

Usar peso y tamaño para jerarquía: h1 masivo, h2 grande pero menor, body pequeño. Los labels van en uppercase pequeño con spacing.

## Secciones

### Hero
Layout asimétrico: nombre en h1 enorme a la izquierda (col 1-7), rol y bio corta a la derecha (col 8-12) alineado abajo. Posición: parte superior de la página, sin hero a pantalla completa. Padding superior generoso (120px). Una línea fina horizontal separa el hero del resto. Pequeño eyebrow "Portfolio" en uppercase arriba del nombre.

### Projects
Eyebrow "Trabajo seleccionado" + título h2. Grid de 2 columnas con gap generoso (32px). Cada proyecto: imagen grande (aspect ratio 4:3), título del proyecto en h3, categoría en uppercase pequeño, año. Hover: imagen escala sutil (1.02) durante 400ms, sin sombras. Sin tarjetas con borde, solo la imagen y texto debajo. Click lleva al proyecto.

### About
Eyebrow "Sobre mí" + título h2. Texto centrado max-width 640px. Dos párrafos: uno biográfico (quién soy, qué hago) y uno de enfoque (cómo trabajo, filosofía). Debajo, lista de skills en dos columnas (Design, Development) con items simples. Posiblemente un retrato pequeño circular opcional a la izquierda.

### Contact
Eyebrow "Contacto" + título h2 grande "Hablemos". Formulario simple centrado max-width 480px: nombre, email, mensaje. Inputs minimalistas con solo línea inferior (underline), sin borde completo, sin fondo. Botón de envío negro, minimalista. Debajo del formulario: email directo y links a redes sociales en texto subrayado al hover.

## Elementos interactivos y animaciones

- Projects: imagen escala 1.02 en hover (400ms ease), sin otros efectos
- Links: underline que aparece de izquierda a derecha en hover (transition width)
- Inputs: línea inferior cambia de gris a negro en focus
- Scroll: sin animaciones de aparición (el minimalismo prefiere que todo esté visible)
- Botón: fondo negro, texto blanco, hover invierte (fondo transparente, borde negro, texto negro)

## Responsive

- Desktop (>1024px): hero asimétrico, projects 2 columnas, about centrado
- Tablet (768-1024px): hero pasa a stack vertical, projects 2 columnas, todo centrado
- Mobile (<768px): hero stack vertical con nombre grande, projects 1 columna, about padding lateral 24px, contacto a ancho completo

## Lo que hace distintivo este diseño

La confianza en el whitespace y la tipografía como elementos principales. Sin color de marca, sin gradientes, sin decoración. El contraste entre el h1 enorme y el resto crea jerarquía puramente tipográfica. La asimetría del hero (nombre vs rol) rompe la simetría típica de portfolios sin ser ruidoso. Los proyectos sin tarjetas ni bordes dejan que las imágenes hablen. Es minimalismo editorial, no minimalismo tecnológico.