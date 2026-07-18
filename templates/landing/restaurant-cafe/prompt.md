# Prompt — Restaurant & Cafe Landing

## Estetica general

Diseno calido y apetitoso para restaurante o cafe. Colores tierra (terracota #c8553d, ambar #f4a261, crema #faf6f0) que evocan calidez, cocina artesanal y comida honesta. Tipografia editorial: Playfair Display serif para titulos elegantes e Inter para body. Las superficies son suaves y limpias, con mucho whitespace para que la comida y las fotos sean las protagonistas. La sensacion es acogedora, elegante sin ser pretenciosa, como un buen restaurante de barrio.

## Layout

Grid de 12 columnas con max-width 1200px centrado. Espaciado generoso entre secciones (80px). Hero a pantalla completa con foto de comida de fondo y overlay de texto. Menu en grid de 2 columnas (plato + precio). Reserva como form centrado. Galeria en grid de 3 columnas. Reviews en carrusel. Footer a ancho completo.

## Paleta de color

- **Fondo principal**: #faf6f0 (crema calida)
- **Superficies**: #ffffff (blanco limpio)
- **Primario**: #c8553d (terracota) usado en CTAs y acentos
- **Secundario**: #f4a261 (ambar) para badges, highlights, elementos decorativos
- **Texto principal**: #2d2422 (marron oscuro casi negro)
- **Texto secundario**: #6b5d54 (marron gris)
- **Acentos**: gradientes sutiles de terracota a ambar en botones y bordes hover

## Tipografia

Playfair Display para headings (serif elegante, italic para acentos). Inter para body y UI. Display con clamp(2.5rem, 6vw, 5rem). Body 16px, line-height 1.7. Pesos: 700 headings, 400 body, 500 labels. Tracking normal. Italic en Playfair para palabras destacadas ("bistro", "artisan").

## Secciones

### Hero
Pantalla completa con foto de comida de fondo, overlay gradiente oscuro (bottom-up) para legibilidad. Titulo grande serif: "Sabores que cuentan historias" con "historias" en italic. Subtitulo: breve descripcion del restaurante. Dos CTAs: "Reservar mesa" (primary terracota) y "Ver menu" (ghost blanco). Badge "Abierto ahora" con horario.

### Menu
Titulo "Nuestra carta". Filtros por categoria (Entrantes, Principales, Postres, Bebidas) como tabs. Grid de 2 columnas: cada plato con nombre (serif), descripcion corta, precio (bold). Linea punteada entre nombre y precio. Cards opcionales para platos destacados con foto.

### Reservation
Form centrado sobre fondo crema: nombre, email, telefono, fecha, hora, numero de personas. Boton "Reservar" grande terracota. A un lado, info de contacto (direccion, telefono, horarios).

### Gallery
Grid de 3 columnas de fotos del restaurante y platos. Hover: zoom sutil + overlay con nombre del plato. 6-9 fotos.

### Reviews
Carrusel de testimonios de clientes: avatar + nombre + valoracion (estrellas terracota) + comentario. "Mejor pasta de la ciudad", "Ambiente acogedor", etc.

### Location
Mapa (placeholder) con overlay de info: direccion, horarios, telefono, link a Google Maps. Boton "Como llegar".

### Footer
4 columnas: Logo + descripcion, Horarios, Contacto, Redes sociales. Newsletter signup opcional. Copyright.

## Elementos interactivos y animaciones

- Hero: texto aparece con fade-in sutil, foto con ken-burns lento (scale 1.05 a 1.1 en 20s)
- Menu: tabs cambian con fade, platos aparecen con stagger
- Gallery: hover zoom + overlay slide-up
- Reviews: carrusel auto-rotate cada 5s, pausa en hover
- Botones: hover lift sutil + cambio de tono
- Reserva: form con validacion visual, fecha/hora picker estilizado

## Responsive

- Desktop (>1024px): grid 3 columnas galeria, menu 2 columnas, hero a pantalla completa
- Tablet (768-1024px): grid 2 columnas, hero ajustado
- Mobile (<768px): todo 1 columna, tipografia reducida, menu en lista, galeria en grid 2, hero reducido

## Lo que hace distintivo este diseno

La combinacion de tipografia serif elegante (Playfair Display) con colores tierra calidos crea una sensacion de restaurante artesanal de calidad. El uso de italic en palabras clave ("bistro", "artisan", "fresh") da personalidad. El fondo crema (#faf6f0) es mas calido que el blanco puro y hace que la comida se vea mas apetitosa. Los espacios generosos y las fotos grandes dejan respirar al contenido.