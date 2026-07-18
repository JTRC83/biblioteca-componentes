# Componentes — Editorial Clean

Mapeo de elementos del design system a componentes de la biblioteca.

---

## Buttons

**Componentes recomendados:**
- `btn-copy-link` — Boton funcional con animacion, perfecto para CTAs minimalistas
- `btn-cool-share` — Botones de compartir/redes sociales con estilo limpio
- `btn-gradient-layers` — Para CTAs que necesitan destacar sin gradientes llamativos (desaturar)

**Adaptacion:**
- Primary: fill #0a0a0a, texto blanco, radius 6px, sin sombras
- Secondary: transparent con border 1px #d4d4d8
- Hover: primary a #1a1a1a, secondary bg #f4f4f5
- Eliminar gradientes y glow effects — este sistema es minimalista

---

## Cards

**Componentes recomendados:**
- `card-project` — Card de proyecto con imagen + titulo + categoria, perfecta para editorial
- `card-receipt` — Card minimalista tipo recibo/factura
- `card-job-offer` — Card de oferta de trabajo, estilo profesional
- `card-meeting` — Card de meeting/calendario, estilo corporate
- `card-notebook-page` — Card tipo pagina de cuaderno, editorial
- `card-features` — Card con layers expandibles para features

**Adaptacion:**
- Surface blanca, border 1px #e8e8ec, radius 12px
- Hover: sombra sutil 0 8px 30px rgba(0,0,0,0.08) + lift -2px
- Padding 24px o 32px para featured
- Eliminar colores de fondo decorativos — mantener blanco/gris

---

## Checkboxes & Radios

**Componentes recomendados:**
- `cb-animated-check` — Check animado minimalista
- `card-habit-tracker` — Checkbox neumorphico (desaturar a grises)
- `radio-card` — Radio button estilo card para seleccion unica

**Adaptacion:**
- Checkbox: 20px, border 1px #d4d4d8, radius 4px
- Checked: bg #0a0a0a, checkmark blanco
- Focus ring: 0 0 0 3px rgba(10,10,10,0.08)

---

## Inputs & Forms

**Componentes recomendados:**
- `card-verification-code` — Input OTP/code, util para verificacion
- `card-mastercard` — Card de credito (desaturar para modo editorial)

**Adaptacion:**
- Border 1px #e8e8ec, surface bg, radius 6px
- Focus: border #0a0a0a + ring 3px rgba(10,10,10,0.08)
- Placeholder: color #9c9c9c

---

## Loaders

**Componentes recomendados:**
- `loader-pulse-ring` — Loader minimalista con anillo pulsante (desaturar)
- `loader-orbit` — Loader orbital (desaturar a grises)

**Adaptacion:**
- Usar color #0a0a0a o #6b6b6b en lugar de gradientes coloridos
- Size 32px para inline, 64px para full-page

---

## Backgrounds & Patterns

**Componentes recomendados:**
- `pat-grid-fade` — Pattern de grid que se desvanece como separador sutil
- `pat-dots` — Pattern de puntos a opacidad muy baja (2-3%)

**Adaptacion:**
- Grid y dots en color #e8e8ec o mas claro
- Opacidad muy baja para mantener el aspecto editorial limpio
- Sin fondos animados coloridos