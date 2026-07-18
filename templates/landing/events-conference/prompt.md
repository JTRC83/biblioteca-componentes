# Prompt — Events & Conference Landing

## Estetica general

Diseno oscuro y vibrante para evento o conferencia. Gradiente violeta-magenta (#7c3aed → #ec4899) como marca distintiva. Fondo oscuro (#0f0f12) con superficies oscuras y acentos gradient. Tipografia geometrica bold (Space Grotesk) para headings. La sensacion es de anticipacion, emocion y exclusividad — como la pagina de un festival de musica o conferencia tech de primer nivel. Countdown timer prominente, speakers como protagonistas, gradientes en CTAs y bordes.

## Layout

Grid de 12 columnas con max-width 1280px. Hero a pantalla completa con countdown. Speakers en grid de 3-4 columnas. Agenda en timeline vertical. Tickets en 3 planes. Sponsors en grid horizontal. Venue con mapa. Footer.

## Paleta de color

- **Fondo principal**: #0f0f12 (casi negro)
- **Superficies**: #1a1a20 (gris oscuro)
- **Primario**: #7c3aed (violeta) para CTAs, acentos
- **Secundario**: #ec4899 (magenta) para gradientes, highlights
- **Gradiente**: linear-gradient(135deg, #7c3aed, #ec4899) en botones, texto destacado, bordes
- **Texto principal**: #fafafa (blanco)
- **Texto secundario**: #a1a1aa (gris)

## Tipografia

Space Grotesk para headings — geometrica, bold, moderna. Inter para body y UI. Display con clamp(2.5rem, 7vw, 6rem). Body 16px, line-height 1.5. Pesos: 700 headings, 400 body. Tracking -0.02em en headings. Gradient text en headings clave.

## Secciones

### Hero
Pantalla completa. Fondo con gradiente sutil + pattern. Eyebrow badge: "[EVENTO NAME] 2026". Titulo enorme con gradient text: "THE FUTURE IS NOW" o nombre del evento. Subtitulo: fecha y lugar. Countdown timer grande: dias, horas, minutos, segundos en cards individuales. CTAs: "Get tickets" (gradient) y "See agenda" (ghost).

### Speakers
Titulo "SPEAKERS". Grid de 3-4 cards: foto del speaker, nombre, cargo/empresa, tema de la charla. Hover: card levita + border gradient + glow. Featured speakers mas grandes. 8-12 speakers.

### Agenda
Timeline vertical por dias (Dia 1, Dia 2). Cada slot: hora, titulo de charla, speaker, sala. Color-coded por tipo (keynote, workshop, panel). Hover: highlight con tinte gradient.

### Tickets
3 planes: Early Bird, Standard (destacado con border gradient + glow), VIP. Cada plan: precio, lista de que incluye, boton CTA. Badge "Agotado" en planes sin disponibilidad. Countdown de precio early bird.

### Sponsors
Grid horizontal de logos de sponsors. Categorias: Diamond, Gold, Silver. Logos en escala de grises, hover a color.

### Venue
Mapa (placeholder) + info: lugar, direccion, como llegar, hoteles cercanos. Botones: "Get directions" y "Book hotel".

### Footer
4 columnas: Logo + lema, Links utiles (Codigo de conducta, FAQ, Press), Contacto, Redes. Newsletter para updates del evento.

## Elementos interactivos y animaciones

- Hero: countdown timer animado (JS), texto aparece con slide-up
- Speakers: hover lift + border gradient + glow shadow
- Agenda: slots expandibles con click, hover highlight
- Tickets: hover lift, plan destacado con glow pulsante
- Botones: hover gradiente se desplaza + glow
- Sponsors: hover grises → color
- Scroll: elementos aparecen con fade-in-up al entrar en viewport

## Responsive

- Desktop (>1024px): grid 4 speakers, timeline 2 columnas (2 dias), 3 tickets
- Tablet (768-1024px): grid 2 speakers, timeline 1 columna, tickets apilados
- Mobile (<768px): 1 columna, tipografia reducida, countdown en grid 4x1, speakers en scroll horizontal

## Lo que hace distintivo este diseno

El gradiente violeta-magenta es memorable y moderno — se asocia con tech conferences de primer nivel. El countdown timer crea urgencia y anticipacion. Los speakers como protagonistas con cards grandes y hover effects dan peso al evento. El fondo oscuro con acentos gradient crea un ambiente nocturno y exclusivo. La tipografia Space Grotesk es geometrica y futurista — perfecta para un evento que mira hacia el futuro.