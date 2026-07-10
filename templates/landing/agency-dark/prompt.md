# Prompt — Agency Dark Landing

## Estética general

Landing de agencia creativa oscura, atrevida y con acentos neon. Estilo bold con tipografía enorme, gradientes violeta-magenta y efectos glow. Sensación de estudio creativo que rompe moldes: no es corporativo, es expresivo. El fondo casi negro (#09090b) deja que los neones y gradientes exploten visualmente. Mucho contraste, mucho impacto, poco whitespace. El diseño grita "creatividad". Combinación de glassmorphism sutil con efectos neon más agresivos que el SaaS.

## Layout

Grid de 12 columnas, max-width 1280px. Espaciado entre secciones grande (96px). Hero a pantalla completa con statement bold. Services en grid asimétrico 2-3-2 o 3 columnas irregular. Team en grid 4 columnas con fotos circulares. Portfolio en grid masonry o grid 3 columnas con tamaños variables. CTA full-width con glow. Footer compacto.

Alineación: hero izquierda (bold), services centrado, portfolio izquierda, resto centrado.

## Paleta de color

- **Fondo principal**: #09090b (negro casi puro)
- **Superficies**: #18181c con glassmorphism
- **Primario**: #a855f7 (violeta neón) para acentos, gradientes, glows
- **Secundario**: #ec4899 (magenta/rosa) combinado con violeta en gradientes
- **Texto principal**: #fafafa
- **Texto secundario**: #a1a1aa
- **Acentos neon**: #a855f7 con glow (box-shadow neón), #ec4899 para contraste
- **Gradientes**: violeta → magenta en headings, botones, bordes hover

Los gradientes violeta-magenta son la firma visual. Los glows neón dan profundidad sin saturar. El fondo puro negro maximiza el contraste del neon.

## Tipografía

Fuente: Space Grotesk con fallback Inter. Headings enormes con `clamp(2.5rem, 7vw, 6rem)`, peso 700. Space Grotesk tiene personalidad geométrica que diferencia de Inter. Body 16px line-height 1.5 (más compacto que otros). Uso de uppercase en eyebrows y labels. Tracking tight en headings (-0.03em). Texto puede tener gradient clip en palabras clave. Pesos extremos: 700 headings, 400 body, sin pesos intermedios.

## Secciones

### Hero
Pantalla completa. Texto alineado izquierda. Eyebrow "Agencia creativa" en violeta neón uppercase. Título h1 masivo en 2-3 lineas, alguna palabra con gradient text (violeta→magenta). Subtítulo en gris, máximo 2 lineas. CTA: botón grande con gradiente violeta→magenta y glow neón. Elemento decorativo: formas geométricas o partículas flotando con glow en el fondo. Scroll indicator abajo.

### Services
Eyebrow "Lo que hacemos" + título h2 centrado. Grid asimétrico de tarjetas glass con servicios: Branding, Design, Development, Motion, Strategy, Marketing. Cada tarjeta: número grande (01, 02, 03...) en violeta translucido, icono neón, título, descripción. Hover: borde neón violeta aparece con glow, número se ilumina. Tamaño variado: 2 tarjetas grandes + 4 medianas en layout creativo.

### Team
Eyebrow "El equipo" + título h2. Grid 4 columnas de fotos circulares con glow neón alrededor. Nombre debajo en blanco, rol en gris. Hover: foto escala sutil, glow se intensifica, links a redes sociales aparecen. Posible layout irregular (algunas fotos más grandes).

### Portfolio
Eyebrow "Trabajo seleccionado" + título h2. Grid masonry 3 columnas con proyectos de tamaños variados. Cada proyecto: imagen con overlay gradient violeta en hover, título, categoría. Hover: imagen escala, overlay gradient aparece, título se mueve hacia arriba. Algunos proyectos destacados más grandes. "Ver todo" link abajo.

### CTA
Full-width. Card gigante glass centrada con glow violeta/magenta detrás masivo. Título h2 enorme "Construyamos algo increíble". Subtítulo. Botón CTA con gradiente y glow fuerte. Fondo de sección con pattern o formas abstractas con neon.

### Footer
Compacto. Logo + tagline a la izquierda. Links rápidos centrados. Redes sociales a la derecha con iconos neón. Copyright abajo. Sutil separador con gradient line.

## Elementos interactivos y animaciones

- Hero: texto aparece con stagger, formas geométricas flotan con animación, glow pulsa
- Services cards: hover activa borde neon + glow + número se ilumina
- Team: hover intensifica glow alrededor de foto, aparece info social
- Portfolio: overlay gradient aparece en hover, título se desplaza, imagen escala
- Botones: glow neón intensifica en hover, gradiente se desplaza
- Scroll: elementos aparecen con fade-in + slight translate
- Background: partículas o formas flotando con glow sutil constante
- Cursor: efecto de trail o glow opcional siguiendo el mouse

## Responsive

- Desktop (>1024px): hero pantalla completa, services asimétrico, team 4 cols, portfolio masonry 3 cols
- Tablet (768-1024px): hero ajustado, services 2 cols, team 2 cols, portfolio 2 cols
- Mobile (<768px): hero stack, services 1 col, team 2 cols, portfolio 1 col, padding 20px, CTA full-width

## Lo que hace distintivo este diseño

La agresividad visual controlada: neones violeta-magenta sobre negro puro con tipografía enorme. Es la antítesis del minimalismo: máximo impacto, máximo contraste. El grid asimétrico de servicios rompe la monotonía del grid regular. Los glows neón en hover de cada elemento interactivo dan vida constante. El hero a pantalla completa con statement bold establece el tono de agencia creativa inmediatamente. Es bold sin ser caótico: la jerarquía se mantiene clara bajo el ruido visual.