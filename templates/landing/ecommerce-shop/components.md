# Componentes — E-commerce Shop Landing

Mapeo de secciones a componentes de la biblioteca. Los IDs son reales y corresponden a componentes existentes. El e-commerce es card-heavy: la mayoría de secciones usan tarjetas de producto.

---

## Hero Section

**Componentes recomendados:**
- `btn-buy-now` — Botón CTA "Comprar ahora" específico para e-commerce
- `btn-pay-now` — Alternativa para el botón de pago directo
- `card-3d` — Tarjeta 3D para el producto estrella con tilt en hover
- `card-product` — Card de producto con imagen + info
- `anim-float` — Float sutil para la imagen del producto en el hero
- `card-flip-recipe` — Opcional: tarjeta flip para mostrar producto desde múltiples ángulos

**Adaptación:**
- `btn-buy-now` con color primario #f59e0b, hover scale(1.02), shadow-product
- `card-3d` para el producto estrella con tilt sutil (max 8deg) y zoom en hover
- Badge de descuento en rojo (#ef4444) esquina superior con pulse animation
- `anim-float` con amplitud 8px y duración 5s para el producto flotando

---

## Products Section

**Componentes recomendados:**
- `card-product` — Tarjeta de producto base: imagen, nombre, precio, rating
- `card-hover-fill` — Efecto de fill en hover para tarjetas de producto
- `card-3d` — Variante con tilt 3D para productos premium
- `btn-add-item` — Botón "Añadir al carrito" que aparece en hover
- `btn-buy-now` — Alternativa de CTA directo en cada tarjeta
- `card-black-friday` — Tarjeta con badge de oferta para productos en descuento

**Adaptación:**
- `card-product` con fondo #f4f4f5, radius 16px, imagen aspect 1:1
- En hover: sombra aparece (shadow-md), `btn-add-item` se desliza desde abajo (translateY 100% → 0)
- `card-black-friday` para productos con descuento: badge rojo "Oferta" en esquina
- Precio en #f59e0b peso 700, precio antiguo tachado en #a3a3a3
- Rating con estrellas en #f59e0b (ambar)

---

## Reviews Section

**Componentes recomendados:**
- `card-profile` — Card de perfil para avatar + nombre + fecha del review
- `card-glass` — Tarjeta glass adaptada a tema claro para contener el review
- `card-features` — Adaptada para mostrar rating destacado (4.8/5) encima del grid
- `btn-like-counter` — Contador de "útil" para cada review con animación

**Adaptación:**
- `card-profile` integrada dentro de cada tarjeta de review: avatar circular 48px + nombre + fecha
- `card-glass` adaptada: en tema claro usar fondo rgba(244,244,245,0.8) en lugar de oscuro
- Estrellas: 5 iconos en ambar (#f59e0b) con posible fracción (4.5 = 4 llenas + 1 media)
- `btn-like-counter` pequeño (32px) para "¿Te sirvió?" con contador animado

---

## Newsletter Section

**Componentes recomendados:**
- `input-floating` — Input con label flotante para el email
- `btn-send-message` — Botón de envío (adaptado a "Suscribirme")
- `card-gradient` — Card grande con gradiente cálido de fondo para la sección newsletter
- `btn-get-started-gradient` — Alternativa de botón con gradiente cálido
- `loader-pulse` — Loader pulsante mientras se procesa la suscripción

**Adaptación:**
- `card-gradient` con gradiente cálido: linear-gradient(135deg, #fef3c7, #fff7ed)
- `input-floating` para email con label "Tu correo electrónico", borde ambar en focus
- `btn-send-message` con fondo #f59e0b texto blanco, hover #d97706
- `loader-pulse` pequeño aparece en el botón tras submit, reemplazando el texto
- Card centrada max-width 560px con padding generoso (48px)

---

## Footer Section

**Componentes recomendados:**
- `btn-social-hover` — Botones de redes sociales con hover para el footer
- `card-mastercard` — Icono de Mastercard para métodos de pago
- `btn-cool-share` — Alternativa para iconos de compartir/redes
- `input-underline` — Mini input para newsletter opcional en el footer

**Adaptación:**
- `btn-social-hover` en gris (#525252) que pasa a ambar (#f59e0b) en hover
- `card-mastercard` y iconos de Visa/PayPal como métodos de pago aceptados
- Links del footer en #525252, hover en #171717
- 4 columnas: Tienda, Ayuda, Empresa, Contacto