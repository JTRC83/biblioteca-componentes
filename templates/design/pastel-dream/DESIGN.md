# Pastel Dream

## Overview
Sistema de design claro y suave con tonos pastel. Rosa lavanda, menta y azul cielo. La estetica es playful, amigable y onirica — como un sueno de algodon de azucar. Tipografia redondeada (Quicksand) para complementar la suavidad. Las superficies son blancas y casi blancas con bordes pastel. Radios grandes (16-28px) para amigabilidad. Sombras muy suaves con tinte pastel. Para productos que transmiten calma, alegria y simpatia — apps de bienestar, educacion, social, kids.

## Colors
- **Primary** (#a78bfa): CTAs, links, elementos destacados — lavanda
- **Primary Hover** (#8b5cf6): Hover sobre primary
- **Secondary** (#f9a8d4): Acentos, badges — rosa pastel
- **Tertiary** (#6ee7b7): Success highlights — menta pastel
- **Accent** (#93c5fd): Highlights adicionales — azul cielo
- **Background** (#fef9f9): Fondo casi blanco con tinte rosado
- **Background Alt** (#fdf4f4): Secciones alternas
- **Surface** (#ffffff): Cards, paneles
- **Surface Alt** (#faf5ff): Hover sutil con tinte lavanda
- **Border** (#f3e8ff): Bordes pastel lavanda muy suaves
- **Text Primary** (#3f3f46): Gris oscuro suave
- **Text Secondary** (#71717a): Gris medio
- **Text Muted** (#a1a1aa): Gris claro
- **Success** (#6ee7b7): Menta pastel
- **Warning** (#fcd34d): Amarillo pastel
- **Error** (#fca5a5): Rosa pastel suave

## Typography
- **Font Family**: Quicksand (Nunito fallback) — redondeada y amigable
- **Code Font**: JetBrains Mono

Quicksand es redondeada, geometrica y amigable — perfecta para el tono pastel y playful. Pesos 400, 500, 600, 700.

Type scale: Display clamp(2rem, 5vw, 3.5rem) 700, Heading 1.75rem 700, Subhead 1.375rem 600, Body 16px 400 line-height 1.6, Small 14px, Caption 12px, Overline 11px 600 uppercase tracking 0.08em.

## Elevation
Sombras muy suaves con tinte pastel.
- **Card**: border 1px #f3e8ff. Hover: 0 8px 24px rgba(167,139,250,0.08) + lift -2px
- **Focus ring**: 0 0 0 3px rgba(167,139,250,0.15) — lavanda
- **Modal**: 0 24px 64px rgba(167,139,250,0.12)
- **Nav**: border-bottom 1px #f3e8ff

## Components
- **Buttons**: Primary lavanda #a78bfa texto blanco, radius 16px, padding 12px 24px, weight 600. Secondary: bg white con border pastel. Ghost: color change. Hover: primary a #8b5cf6, sombra suave lavanda. Sizes: sm 36px, md 40px, lg 48px.
- **Cards**: Surface blanca, border 1px #f3e8ff, radius 20px, padding 28px. Hover: sombra pastel + lift.
- **Inputs**: Border 1px #f3e8ff, radius 16px, padding 12px 16px. Focus: border #a78bfa + ring 3px rgba(167,139,250,0.15).
- **Chips**: Rounded-full, surface-alt bg, padding 6px 14px. Active: primary bg con texto blanco.
- **Toggles**: Track pastel, thumb blanco. Checked: track lavanda. Transition 250ms suave.

## Spacing
- Base: 4px. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80px
- Section: 80px. Container: 1200px. Gap: 20px

## Border Radius
- 12px: Tags, chips, checkboxes, elementos pequenos
- 16px: Buttons, inputs, selects
- 20px: Cards, panels
- 28px: Modales, hero cards, contenedores grandes
- 9999px: Avatares, status dots, pill badges, toggles

## Do's and Don'ts
- Do usar lavanda #a78bfa como color principal
- Do usar Quicksand para mantener la amigabilidad
- Do mantener radios grandes (16-28px) para suavidad
- Do usar sombras con tinte pastel (rgba lavanda/rosa)
- Do combinar 2-3 colores pastel sin saturar
- Don't usar colores saturados o neón
- Don't usar tipografia angular o monospaciada para headings
- Don't usar border-radius inferiores a 12px
- Don't usar sombras oscuras o pesadas
- Don't usar alto contraste negro-blanco — la paleta es suave