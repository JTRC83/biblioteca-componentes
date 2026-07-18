# Brutalist Raw

## Overview
Sistema de design brutalista. Sin ornamentacion, sin sombras suaves, sin gradientes. Bordes crudos (border-radius: 0), tipografia bold monocroma y alto contraste negro-blanco. El layout es asimetrico y denso, con bordes negros gruesos (2-4px) delimitando cada elemento. La estetica es cruda, directa y sin disculpas. Se inspira en el brutalismo arquitectonico: honestidad material, funcion sobre forma, raw concrete. Para marcas creativas, agencias, artistas y proyectos que quieren destacar rompiendo convenciones.

## Colors
- **Primary** (#000000): Headings, CTAs, borders, texto principal — negro puro
- **Secondary** (#ffffff): Fondos, texto inverso, superficies — blanco puro
- **Accent** (#ff3b00): Un unico color de acento para elementos criticos — rojo brutalista
- **Background** (#ffffff): Fondo principal
- **Background Alt** (#f0f0f0): Secciones alternas, hover sutil
- **Surface** (#ffffff): Cards, paneles — mismo que fondo
- **Surface Inverse** (#000000): Cards invertidas para contraste dramatico
- **Text Primary** (#000000): Headings, body text, labels
- **Text Secondary** (#555555): Descripciones, metadata
- **Text Inverse** (#ffffff): Texto sobre fondos negros
- **Text Muted** (#999999: Placeholders, disabled
- **Border** (#000000): Todos los borders son negros, 2-4px de grosor
- **Success** (#00aa44): Unico semantico que rompe el monocromo — verde
- **Warning** (#ffaa00): Amarillo
- **Error** (#ff3b00): Mismo que accent — rojo

## Typography
- **Font Family**: Space Mono (JetBrains Mono fallback) — monospaciada para el aspecto brutalista
- **Code Font**: Space Mono (misma fuente)

Space Mono es monospaciada, geometrica y cruda — perfecta para brutalismo. Se usa en pesos 400 y 700. La naturaleza monospaciada crea un grid visual natural que complementa el layout asimetrico. Para variante editorial, se puede usar Archivo Black o Space Grotesk en pesos 700 para headings mas grandes.

Type scale:
- **Display**: clamp(2.5rem, 8vw, 7rem), weight 700, tracking -0.02em, line-height 0.95
- **Heading 2**: clamp(1.75rem, 5vw, 4rem), weight 700, line-height 1.0
- **Heading 3**: 1.5rem, weight 700, line-height 1.1
- **Body Large**: 1.25rem, weight 400, line-height 1.4
- **Body**: 1rem (16px), weight 400, line-height 1.4
- **Small**: 0.875rem, weight 400, line-height 1.3
- **Caption**: 0.75rem, weight 700, uppercase, tracking 0.05em
- **Overline**: 0.6875rem, weight 700, uppercase, tracking 0.1em

## Elevation
El brutalismo NO usa sombras tradicionales. La profundidad se logra mediante:
- **Borders gruesos**: 2-4px solid #000000 delimitando cada elemento
- **Offset shadows**: box-shadow: 4px 4px 0 #000000 (sin blur, offset crudo)
- **Inverse surfaces**: Cards negras sobre fondo blanco para contraste dramatico
- **Layering**: Elementos solapados con borders que crean profundidad visual
- **Hover**: border-color cambia a accent (#ff3b00) o box-shadow offset aumenta
- **Focus**: outline 3px solid #ff3b00, nunca sombras suaves
- **Active**: box-shadow offset se reduce a 2px (efecto pressed)

## Components
- **Buttons**: Primary fill negro #000000 con texto blanco, radius 0, border 2px solid #000000, padding 12px 24px, weight 700, font 14px, uppercase, tracking 0.05em. Box-shadow 4px 4px 0 #000000. Hover: offset aumenta a 6px. Active: offset reduce a 0 (pressed). Secondary: bg blanco, border 2px negro, texto negro. Inverse: bg negro, texto blanco, border 2px blanco.
- **Cards**: Surface blanca, border 2-4px solid #000000, radius 0, overflow hidden. Box-shadow 4px 4px 0 #000000. Hover: border-color #ff3b00 + shadow offset aumenta. Inverse variant: bg negro, border blanco. Sin transition suave — el brutalismo es instantaneo (transition 0ms o 50ms max).
- **Inputs**: Bg blanco, border 2px solid #000000, radius 0, padding 12px 16px, font 14px. Focus: border 3px #ff3b00 + outline 2px #ff3b00. Placeholder: text-muted. Sin sombras.
- **Chips/Badges**: Border 2px solid #000000, radius 0, padding 4px 12px, font 11px, weight 700, uppercase, tracking 0.1em. Active: bg negro, texto blanco. Accent: border #ff3b00, texto #ff3b00.
- **Lists**: Filas con border-bottom 2px #000000. Cada fila: flex, padding 16px 20px. Hover: bg #f0f0f0. Sin divisores sutiles — los borders son prominentes.
- **Checkboxes**: 24px, border 2px solid #000000, radius 0. Checked: bg negro, checkmark blanco. Sin sombras.
- **Navigation**: Sticky top, bg blanco, border-bottom 4px #000000, 64px alto. Links 14px weight 700, uppercase, hover bg negro + texto blanco (inverse). Logo en bold.
- **Toggles**: Track blanco con border 2px negro, thumb negro cuadrado (sin border-radius). Checked: track negro, thumb blanco. Sin animacion suave — snap instantaneo.

## Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px
- Component padding: small 8x12, medium 12x20, large 16x24
- Section spacing: 32px mobile, 48px tablet, 64px desktop (mas tight que otros sistemas)
- Container max width: 1400px with 32px horizontal padding
- Card grid gap: 0 (cards se tocan, separadas por borders) o 16px con offset shadows
- Layout asimetrico: usar grid asimetrico, no siempre centrado

## Border Radius
- **0px para TODO**: El brutalismo no redondea esquinas. Todos los elementos tienen radius 0.
- Excepcion: avatares pueden ser cuadrados (radius 0) o circulares (9999px) para contraste intencional.

## Do's and Don'ts
- Do usar border-radius 0 en todo — es la regla mas importante del brutalismo
- Do usar borders negros gruesos (2-4px) para delimitar elementos
- Do mantener un monocromo negro-blanco con un solo accent (#ff3b00)
- Do usar tipografia monospaciada o bold geometrica
- Do crear layouts asimetricos y densos — no todo centrado
- Do usar offset shadows (4px 4px 0) en lugar de sombras suaves
- Don't usar border-radius — nunca, jamas
- Don't usar gradientes, glassmorphism o sombras con blur
- Don't usar mas de un color de acento
- Don't usar animaciones suaves o transitions largas — el brutalismo es instantaneo
- Don't usar mas de 2 pesos de fuente
- Don't usar hover effects sutiles — los cambios deben ser dramaticos (inverse colors)