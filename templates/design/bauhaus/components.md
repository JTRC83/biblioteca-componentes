# Componentes — Bauhaus

Mapeo de elementos del design system a componentes de la biblioteca.

---

## Buttons

**Componentes recomendados:**
- `btn-comic-pow` — Boton impactante (simplificar a paleta Bauhaus, shadow offset solida)
- `btn-power-smash` — Boton de accion (eliminar efectos comic, usar primary rojo + shadow azul)
- `btn-copy-link` — Boton funcional (border 2px azul, radius 0, shadow offset amarillo)
- `btn-learn-more` — Boton CTA (fill rojo, texto crema, shadow 4px 4px 0 azul)

**Adaptacion:**
- Primary: fill #e63946 (rojo), texto #f1faee (crema), border 2px #1d3557, radius 0
- Secondary: bg blanco, border 2px azul, texto azul
- Accent: bg #fcbf49 (amarillo), texto azul, border azul
- Box-shadow: 4px 4px 0 [color primario] (sin blur, offset solido)
- Hover: shadow offset aumenta a 6px + translate(-2px, -2px)
- Active: shadow offset a 0, translate(4px, 4px) — efecto pressed
- Uppercase, tracking 0.05em, weight 700, font Inter 14px
- Eliminar efectos comic, POW, smash, glow — Bauhaus es geometrico y funcional

---

## Cards

**Componentes recomendados:**
- `card-manifesto-poster` — Manifesto Poster (perfecto para Bauhaus — manifesto, estructura, bold)
- `card-doodle-poster` — Doodle Poster (simplificar a formas geometricas primarias)
- `card-project` — Card de proyecto (border 2px azul, shadow offset en primary)
- `card-notebook-page` — Card tipo pagina (layout estructurado, border geometrico)
- `card-features` — Card de features (grid ordenado, formas decorativas en esquinas)

**Adaptacion:**
- Surface blanca, border 2-3px solid #1d3557 (azul), radius 0
- Box-shadow: 4px 4px 0 [color primario] (rojo, azul o amarillo segun contexto)
- Variantes de color: card--red, card--blue, card--yellow
- Hover: shadow offset aumenta a 6px + translate(-2px, -2px)
- Inverse variant: bg azul #1d3557, texto crema, border crema
- Decoracion geometrica: circulo, triangulo o cuadrado en esquina como elemento estructural
- Transition 150ms max — movimiento funcional, no decorativo
- Eliminar gradientes, glassmorphism, sombras con blur

---

## Checkboxes & Radios

**Componentes recomendados:**
- `cb-animated-check` — Check animado (simplificar a paleta Bauhaus, border 2px azul, radius 0)
- `cb-drawn-tick` — Tick dibujado (usar azul/crema, mantener trazo geometrico)
- `radio-card` — Radio card (border 2px, radius 0, hover con shadow offset)

**Adaptacion:**
- Checkbox: 24px, border 2px solid #1d3557, radius 0 (cuadrado puro)
- Checked: bg azul #1d3557, checkmark crema #f1faee
- Hover: border-color rojo #e63946
- Focus: outline 3px amarillo #fcbf49
- Radio: circulo 24px (forma Bauhaus primaria — legitimo), border 2px azul
- Selected: fill azul, dot crema en centro
- Radio card: border 2px azul, radius 0, selected: shadow 4px 4px 0 amarillo
- Animaciones: max 150ms, solo movimiento funcional (checkmark aparece sin elastic)

---

## Inputs & Forms

**Componentes recomendados:**
- `form-modern` — Formulario moderno (border 2px azul, radius 0, labels bg azul)
- `input-underline` — Input underline (convertir a border 2px completo, no solo underline)

**Adaptacion:**
- Input: bg blanco, border 2px solid #1d3557, radius 0, padding 12px 16px
- Focus: border 3px #fcbf49 (amarillo) + outline 2px amarillo
- Placeholder: color #a8a8a8 (muted)
- Font: Inter 14px, color texto #1d3557
- Labels: bg azul #1d3557, texto crema, uppercase, weight 700, tracking 0.1em
- Sin sombras en estado base — Bauhaus es flat
- Eliminar underline sutil — border completo 2px es estructural

---

## Loaders

**Componentes recomendados:**
- `loader-pulse` — Loader pulsante (simplificar a formas geometricas rotando)

**Adaptacion:**
- Color: azul #1d3557 o rojo #e63946
- Forma: cuadrado rotando (sin border-radius) O circulo (forma Bauhaus legitima)
- Animacion: rotation 800ms linear — movimiento mecanico y funcional
- Size: 32px inline, 48px full-page
- Eliminar pulse suave, gradientes y glow
- Opcional: tres formas (circulo, cuadrado, triangulo) rotando en secuencia — homenaje Bauhaus

---

## Backgrounds & Patterns

**Componentes recomendados:**
- `pat-star-burst` — Star burst (simplificar a pattern geometrico, primary colors)
- `pat-diamond-weave` — Diamond weave (usar azul/rojo, border 2px, sin desvanecer)
- `pat-grid-fade` — Grid (aumentar contraste, lineas 2px azul, sin fade — Bauhaus ama el orden)
- `pat-hex` — Hexagonos (simplificar a cuadrados o triangulos puros — mas Bauhaus)

**Adaptacion:**
- Grid: lineas 2px #1d3557 cada 40px — grid estructurado, sin desvanecer
- Pattern geometrico: circulos, cuadrados o triangulos repetidos en grid ordenado
- Colores: azul, rojo, amarillo en bloques — no gradientes
- Patrones deben ser visibles y estructurales, no sutiles
- Sin fondos animados, sin auroras, sin glassmorphism
- Hexagonos: preferir cuadrados o triangulos (formas Bauhaus primarias) para mayor autenticidad