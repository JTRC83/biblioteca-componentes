# Monochrome Minimal

## Overview
Sistema de design puramente monocromatico. Sin color, solo grises y blanco. Maximo minimalismo, tipografia ligera y mucho whitespace. La elegancia de la ausencia de color. La filosofia: menos es todo, el color es ruido, el whitespace es lujo. Para fotografia, arte, arquitectura, portafolios y marcas que entienden que la elegancia esta en la contencion. Inter en pesos ligeros (300, 400) para body y regular/medium (500, 600) para UI. Sin gradientes, sin glow, sin sombras pesadas. Solo grises, blanco y hairline borders.

## Colors
- **Primary** (#18181b): Headings, CTAs, texto principal — zinc-900
- **Primary Hover** (#27272a): Hover states
- **Secondary** (#52525b): Descripciones, metadata — zinc-600
- **Background** (#ffffff): Fondo principal — blanco puro
- **Background Alt** (#fafafa): Secciones alternas — zinc-50
- **Surface** (#fafafa): Cards, paneles
- **Border** (#e4e4e7): Hairline borders — zinc-200
- **Border Strong** (#d4d4d8): Borders mas visibles
- **Text Primary** (#18181b): Headings, body text
- **Text Secondary** (#71717a): Descripciones, labels
- **Text Muted** (#a1a1aa): Placeholders, disabled
- **Success** (#71717a): Mismo que text-secondary (sin color)
- **Warning** (#71717a): Mismo
- **Error** (#52525b): Mismo que secondary (sin color)

## Typography
- **Font Family**: Inter (system-ui fallback)
- **Code Font**: JetBrains Mono

Inter en pesos ligeros. Display en weight 300 con tracking tight. Body 400 con line-height 1.7. Sin bold excesivo.

Type scale: Display clamp(2.5rem, 6vw, 5rem) weight 300, Heading 2.25rem weight 400, Subhead 1.5rem weight 500, Body 16px weight 400 line-height 1.7, Small 14px, Caption 12px, Overline 11px weight 600 uppercase tracking 0.1em.

## Elevation
Sin sombras tradicionales. La profundidad se logra con hairline borders.
- **Card**: border 1px #e4e4e7. Hover: border 1px #d4d4d8
- **Focus ring**: 0 0 0 1px #18181b (hairline, no blur)
- **Modal**: border 1px #e4e4e7
- **Nav**: border-bottom 1px #e4e4e7

## Components
- **Buttons**: Primary fill #18181b con texto blanco, radius 8px, padding 12px 24px, weight 500, font 14px. Secondary: transparent con border 1px #e4e4e7. Ghost: solo texto. Hover: primary a #27272a, secondary bg #fafafa.
- **Cards**: Surface #fafafa, border 1px #e4e4e7, radius 8px, padding 32px. Hover: border #d4d4d8.
- **Inputs**: border 1px #e4e4e7, radius 8px, padding 12px 16px. Focus: border #18181b. Placeholder: #a1a1aa.
- **Chips**: border 1px #e4e4e7, radius 9999px, padding 4px 12px, font 12px. Active: bg #18181b texto blanco.

## Spacing
- Base: 4px. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 96px
- Section: 96px (muy generoso). Container: 1200px. Gap: 24px

## Border Radius
- 4px: Tags, chips pequenos
- 8px: Buttons, inputs
- 12px: Cards
- 16px: Modales
- 9999px: Avatares, pill badges

## Do's and Don'ts
- Do usar SOLO grises y blanco — cero color
- Do usar Inter en pesos ligeros (300, 400)
- Do mantener espacios generosos (96px entre secciones)
- Do usar hairline borders (1px) en lugar de sombras
- Do mantener maximo minimalismo
- Don't usar NINGUN color — ni siquiera para success/error
- Don't usar sombras con blur
- Don't usar gradientes
- Don't usar pesos bold (700+) — maximo 600
- Don't usar border-radius mayores a 16px