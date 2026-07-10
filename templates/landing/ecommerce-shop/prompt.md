# Prompt — E-commerce Shop Landing

## Estética general

Landing page de e-commerce vibrante y enfocada en producto. Estilo retail moderno con mucho uso de tarjetas de producto, colores cálidos (ambar #f59e0b como primario, rojo #ef4444 como secundario para urgencia/descuentos). Sensación de tienda online premium pero accesible. Mucho uso de imágenes de producto, badges de descuento, ratings visibles. El diseño es card-heavy: casi todo vive en tarjetas. Tema claro, limpio, con acentos coloridos en CTAs y badges.

## Layout

Grid de 12 columnas, max-width 1280px. Espaciado entre secciones moderado (64px). Hero split: producto a la izquierda, texto y CTA a la derecha (o viceversa). Product grid en 4 columnas (desktop), 2 (tablet), 1 (mobile). Reviews en grid 3 columnas. Newsletter full-width centrado. Footer 4 columnas.

Alineación: hero split, grids centrados, newsletter centrado, footer izquierda.

## Paleta de color

- **Fondo principal**: #ffffff (blanco puro, las tiendas necesitan limpieza visual)
- **Superficies/cards**: #f4f4f5 (gris muy claro para fondo de tarjetas)
- **Primario**: #f59e0b (ambar/dorado) para CTAs, precios destacados, badges
- **Secundario**: #ef4444 (rojo) para descuentos, urgencia, "oferta"
- **Texto principal**: #171717 (casi negro)
- **Texto secundario**: #525252 (gris oscuro)
- **Bordes**: #e5e5e5 sutiles
- **Éxito**: #16a34a para "en stock", "envío gratis"

Los colores cálidos (ambar + rojo) crean urgencia y calor, típicos de retail. El blanco da sensación de tienda limpia y moderna.

## Tipografía

Fuente: Poppins con fallback Inter. Headings con `clamp(2rem, 5vw, 3.5rem)`, peso 700. Body 16px line-height 1.6. Precios en peso 700 y tamaño grande (1.5rem). Labels en uppercase 12px. Nombres de producto en peso 600. Poppins da un toque más redondeado y amigable que Inter puro, adecuado para retail.

## Secciones

### Hero
Split layout. Lado izquierdo: imagen de producto grande (puede ser producto estrella o colección) sobre fondo ambar sutil o gradiente cálido. Lado derecho: eyebrow "Nueva colección" en ambar, título h1 grande, descripción corta, precio con descuento (precio antiguo tachado + precio nuevo en rojo), botón CTA "Comprar ahora" en ambar. Badge "20% OFF" flotando sobre la imagen. Posibles mini-thumbnails debajo del producto para cambiar imagen.

### Products
Eyebrow "Productos destacados" + título h2. Grid de 4 columnas. Cada tarjeta de producto: imagen (aspect 1:1), nombre (peso 600), precio (peso 700 ambar), rating con estrellas, badge "Oferta" opcional en rojo esquina superior. Hover: sombra aparece, botón "Añadir al carrito" aparece deslizándose desde abajo. Algunos productos con badge de descuento en rojo.

### Reviews
Eyebrow "Reseñas de clientes" + título h2. Grid 3 columnas de tarjetas: avatar circular, nombre, estrellas (5 ambar), texto de review, fecha. Tarjetas con fondo #f4f4f5. Posiblemente un rating general (4.8/5) destacado encima del grid.

### Newsletter
Sección full-width centrada. Fondo ambar sutil o gradiente cálido. Título "Suscríbete y obtén 10% de descuento". Input de email + botón "Suscribirme" en ambar. Texto pequeño de privacidad debajo. Diseño en card grande centrada max-width 560px.

### Footer
4 columnas: Tienda, Ayuda, Empresa, Contacto. Logo arriba a la izquierda. Métodos de pago (iconos de tarjetas) abajo. Redes sociales. Copyright. Newsletter mini opcional.

## Elementos interactivos y animaciones

- Hero: imagen de producto con zoom sutil en hover
- Product cards: sombra aparece en hover, botón "Añadir al carrito" se desliza desde abajo
- Badges de descuento: pulse animation sutil para llamar atención
- Botones: hover scale(1.02) + shadow, ripple en click
- Newsletter: input expand en focus, botón con micro-interacción
- Scroll: products aparecen con stagger fade-in al entrar en viewport
- Carrito: contador en navbar con bounce al añadir producto

## Responsive

- Desktop (>1024px): hero split, products 4 columnas, reviews 3 columnas
- Tablet (768-1024px): hero stack vertical (producto arriba, texto abajo), products 2 columnas, reviews 2 columnas
- Mobile (<768px): hero stack vertical producto arriba, products 1-2 columnas, todo padding 16px, CTA a ancho completo

## Lo que hace distintivo este diseño

El uso de colores cálidos (ambar + rojo) en un tema claro crea una sensación de tienda moderna y vibrante sin saturar. El hero split con producto prominente y precio con descuento establece inmediatamente que es una tienda. El grid de productos 4 columnas con hover que revela el botón de añadir al carrito es un patrón retail moderno efectivo. La newsletter con incentivo (10% descuento) es típica de e-commerce. Todo es card-heavy y product-focused: las tarjetas son los protagonistas.