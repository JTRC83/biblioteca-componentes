# Few-shot Example — Tienda online de cafetería

Ejemplo completo del flujo de generación: petición del cliente → llamadas a tools MCP → HTML final generado.

---

## Petición del cliente

> "Necesito una tienda online para mi cafetería, con showcase de producto y grid de productos."

---

## Paso 1 — Analizar la petición

- **Industria**: ecommerce (tienda, cafetería)
- **Colores del cliente**: no especifica → la plantilla aporta ámbar `#f59e0b` + rojo `#ef4444`. Pero adaptamos a tonos café (café marrón `#78350f` + ámbar `#f59e0b`) por coherencia con el producto (café).
- **Secciones pedidas**: showcase de producto, grid de productos
- **Estilo**: vibrante, cálido (heredado de la plantilla ecommerce)

---

## Paso 2 — `list_templates`

```
list_templates({ industry: "ecommerce" })
```

**Respuesta:**

```
1 plantilla(s) disponible(s):

## E-commerce Shop Landing
- ID: landing-ecommerce-shop
- Tipo: landing
- Secciones: hero, products, reviews, newsletter, footer
- Estilos: vibrant, product-focused, card-heavy, modern
- Industria: ecommerce, retail, fashion, product
- Descripción: Landing page de e-commerce vibrante con showcase de producto, grid de productos, reviews y newsletter
```

**Decisión:** plantilla seleccionada `landing-ecommerce-shop` — encaja perfecto.

---

## Paso 3 — `get_template`

```
get_template({ id: "landing-ecommerce-shop" })
```

**Respuesta (resumida):**

```
# Plantilla: E-commerce Shop Landing
**Secciones**: hero, products, reviews, newsletter, footer

## Color Scheme
{ "primary": "#f59e0b", "secondary": "#ef4444", "background": "#ffffff",
  "surface": "#f4f4f5", "text": "#171717", "textSecondary": "#525252" }

## Design Tokens (:root)
--color-primary: #f59e0b;
--color-secondary: #ef4444;
--color-background: #ffffff;
--color-surface: #f4f4f5;
--font-sans: 'Poppins', 'Inter', system-ui, sans-serif;
--font-size-heading: clamp(2rem, 5vw, 3.5rem);
...

## Mapeo de Componentes
### Hero
- btn-buy-now — Botón CTA "Comprar ahora"
- card-3d — Tarjeta 3D para el producto estrella con tilt en hover
- anim-float — Float sutil para la imagen del producto

### Products
- card-glass — Tarjeta de producto base
- card-hover-fill — Efecto de fill en hover
- btn-add-item — Botón "Añadir al carrito" que aparece en hover
- card-black-friday — Tarjeta con badge de oferta

### Reviews
- card-profile — Card de perfil para testimonio + avatar

### Newsletter
- input-underline — Input estilo underline para email
```

---

## Paso 4 — `search_components` (para la sección products)

```
search_components({ useCase: "content-card", category: "cards", includeCode: false })
```

**Respuesta (resumida):**

```
Encontrados 34 componente(s).

## 3D Hover Card
- ID: card-3d
- Categoría: cards
- Estilo: 3d, transition, hover
- Colores dominantes: #1f1f24, #2a2a32, #2c2c34, #f4f4f5, #a1a1aa

## Glass Card
- ID: card-glass
- Categoría: cards
- Estilo: glassmorphism, transition, filter
- Colores dominantes: #a78bfa, #f4f4f5, #a1a1aa

## Hover Fill Card
- ID: card-hover-fill
- Categoría: cards
- Colores dominantes: #e8e8e8, #f89b29, #ff0f7b
...
```

---

## Paso 5 — `get_component` (botón CTA del hero)

```
get_component({ id: "btn-buy-now" })
```

**Respuesta (resumida):**

```
## Buy Now
- ID: btn-buy-now
- Colores dominantes: #181717 (negro)
- Notas de adaptación: cambiar background a color primario del cliente.

### HTML
<button class="button">
 <svg viewBox="0 0 16 16" class="bi bi-cart-check" height="24" width="24" ...>
   <path d="..."></path>
 </svg>
  <p class="text">Buy Now</p>
</button>

### CSS
.button {
  display: flex; justify-content: center; align-items: center;
  padding: 10px 15px; gap: 15px;
  background-color: #181717;
  outline: 3px #181717 solid; outline-offset: -3px;
  border-radius: 5px; border: none; cursor: pointer; transition: 400ms;
}
.button .text { color: white; font-weight: 700; }
.button:hover { background-color: transparent; }
.button:hover .text { color: #181717; }
```

---

## Paso 6 — Adaptación de colores (ámbar → café marrón)

El botón original usa `#181717` (negro). Lo adaptamos al café del cliente:

| Original | Adaptado a | Variable |
|----------|------------|----------|
| `background-color: #181717` | `var(--color-primary)` = `#78350f` (café oscuro) | `--color-primary` |
| `outline: 3px #181717 solid` | `outline: 3px var(--color-primary) solid` | `--color-primary` |
| `color: #181717` (hover text) | `var(--color-primary)` | `--color-primary` |

Las tarjetas de producto (`card-3d`, `card-glass`) que traen colores oscuros (`#1f1f24`) los dejamos como surface clara ya que el e-commerce es tema claro — no hay que forzar café en todo, solo en CTAs y acentos.

---

## Paso 7 — Generar HTML+CSS

Output final (abreviado, ~80 líneas):

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Café del Bosque — Tueste artesanal</title>
  <meta name="description" content="Cafetería de especialidad. Compra nuestro café tueste artesanal online.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --color-primary: #78350f;
      --color-primary-hover: #5a2a0a;
      --color-secondary: #f59e0b;
      --color-background: #ffffff;
      --color-surface: #f4f4f5;
      --color-text: #171717;
      --color-text-secondary: #525252;
      --font-sans: 'Poppins', 'Inter', system-ui, sans-serif;
      --font-size-heading: clamp(2rem, 5vw, 3.5rem);
      --line-height-base: 1.6;
      --space-section: 80px;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: var(--font-sans); background: var(--color-background); color: var(--color-text); line-height: var(--line-height-base); }
    section { padding: var(--space-section) 24px; max-width: 1200px; margin: 0 auto; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr)); gap: 24px; }

    /* === Hero Section === */
    .ecom-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; padding-top: 80px; }
    .ecom-hero h1 { font-size: var(--font-size-heading); margin-bottom: 16px; color: var(--color-primary); }
    .ecom-hero p { font-size: 1.125rem; color: var(--color-text-secondary); margin-bottom: 32px; }

    /* componente btn-buy-now adaptado (café) */
    .ecom-hero-cta-button {
      display: flex; justify-content: center; align-items: center;
      padding: 10px 15px; gap: 15px;
      background-color: var(--color-primary);
      outline: 3px var(--color-primary) solid; outline-offset: -3px;
      border-radius: 5px; border: none; cursor: pointer; transition: 400ms;
    }
    .ecom-hero-cta-button .ecom-hero-cta-text { color: white; font-weight: 700; font-size: 1em; margin: 0; }
    .ecom-hero-cta-button:hover { background-color: transparent; }
    .ecom-hero-cta-button:hover .ecom-hero-cta-text { color: var(--color-primary); }
    .ecom-hero-cta-button:hover svg path { fill: var(--color-primary); }

    /* componente card-3d adaptado para producto estrella */
    .ecom-hero-card-3d { /* tilt 3D con tonos cálidos */ ... }

    /* === Products Section === */
    .ecom-products-card-glass { /* card de producto con surface clara */ ... }
    .ecom-products-btn-add-item { /* botón añadir al carrito en hover, café */ ... }

    /* === Reviews Section === */
    .ecom-reviews-card-profile { /* testimonio + avatar */ ... }

    /* === Newsletter Section === */
    .ecom-newsletter-input-underline { /* input email underline */ ... }
  </style>
</head>
<body>
  <section class="ecom-hero">
    <div>
      <h1>Café de especialidad, tueste artesanal</h1>
      <p>De la finca a tu taza. Compra nuestro café recién tostado online.</p>
      <button class="ecom-hero-cta-button">
        <svg viewBox="0 0 16 16" class="ecom-hero-cta-bi" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="#fff">
          <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5z"></path>
        </svg>
        <p class="ecom-hero-cta-text">Comprar ahora</p>
      </button>
    </div>
    <div class="ecom-hero-card-3d"><!-- producto estrella con tilt --></div>
  </section>

  <section class="ecom-products">
    <h2>Nuestros cafés</h2>
    <div class="grid">
      <!-- 4× card-glass con btn-add-item en hover -->
      <div class="ecom-products-card-glass">Espresso 250g · 12€</div>
      <div class="ecom-products-card-glass">Filter Blend 250g · 14€</div>
      <div class="ecom-products-card-glass">Descafeinado 250g · 13€</div>
      <div class="ecom-products-card-glass">Single Origin 250g · 16€</div>
    </div>
  </section>

  <section class="ecom-reviews">
    <h2>Lo que dicen nuestros clientes</h2>
    <div class="grid">
      <!-- card-profile × 3 -->
    </div>
  </section>

  <section class="ecom-newsletter">
    <h2>Suscríbete y recibe un 10%</h2>
    <!-- input-underline + botón -->
  </section>

  <footer class="ecom-footer"><!-- links + redes --></footer>
</body>
</html>
```

---

## Paso 8 — `validate_web`

```
validate_web({ html: "...", css: "..." })
```

**Respuesta:**

```json
{
  "valid": true,
  "summary": "✅ Web válida. 1 advertencia(s).",
  "errors": [],
  "warnings": [
    "Clase '.ecom-newsletter' usada en HTML pero no definida en CSS (¿typo o falta de style?)."
  ]
}
```

**Resultado:** web válida. La advertencia es porque la sección newsletter no tiene estilos propios (hereda los de `section`), lo cual es intencional. Se entrega al cliente.