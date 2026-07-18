# Luxury Gold

## Overview
Sistema de design oscuro premium con dorado. Negro mate (#0c0c0c) con acentos oro (#d4af37). Tipografia serif elegante (Cormorant Garamond) para headings e Inter para body. Las superficies son negras con bordes dorados sutiles. Las sombras son minimas — el lujo se expresa con espacio, tipografia y materialidad, no con efectos. La sensacion es exclusiva, refinada y atemporal — como una boutique de alta costura, una joyeria de lujo o un hotel 5 estrellas. Cada detalle es deliberado y minimalista.

## Colors
- **Primary** (#d4af37): CTAs, borders destacados, acentos — oro clasico
- **Primary Hover** (#c9a227): Hover sobre primary
- **Secondary** (#e8c868): Highlights mas claros, gradientes — oro claro
- **Background** (#0c0c0c): Fondo negro mate
- **Background Alt** (#101010): Secciones alternas
- **Surface** (#161616): Cards, paneles
- **Surface Hover** (#1c1c1c): Hover
- **Border** (#2a2a2a): Bordes sutiles
- **Border Gold** (rgba(212, 175, 55, 0.3)): Borde dorado para hover/destacados
- **Text Primary** (#f5f5f0): Blanco crema suave
- **Text Secondary** (#a1a1a1): Gris
- **Text Muted** (#6a6a6a): Gris oscuro
- **Success** (#5a8a4a): Verde oliva discreto
- **Warning** (#d4af37): Oro
- **Error** (#c8553d): Terracota discreto

## Typography
- **Display Font**: Cormorant Garamond — serif elegante de alta costura
- **Body Font**: Inter — sans-serif limpia
- **Code Font**: JetBrains Mono

Cormorant Garamond para headings — serif fina, elegante, con italic para palabras clave. Inter para body. El contraste serif/sans crea sensacion editorial de lujo.

Type scale: Display clamp(2.5rem, 6vw, 5rem) weight 700 line-height 1.1, Heading 2rem 700, Subhead 1.5rem 600, Body 16px 400 line-height 1.7, Small 14px, Caption 12px, Overline 11px 600 uppercase tracking 0.15em. Italic en Cormorant para palabras destacadas.

## Elevation
Sombras minimas y oscuras. El lujo no necesita glow effects.
- **Card**: border 1px #2a2a2a. Hover: border 1px rgba(212,175,55,0.3) + 0 8px 32px rgba(0,0,0,0.6)
- **Button primary**: sin sombra. Hover: cambio de tono dorado
- **Focus ring**: 0 0 0 2px rgba(212,175,55,0.2)
- **Modal**: 0 24px 64px rgba(0,0,0,0.8) + border dorado sutil
- **Nav**: border-bottom 1px #2a2a2a

## Components
- **Buttons**: Primary: border 1px #d4af37, bg transparent, texto dorado, radius 8px, padding 14px 32px, weight 600, uppercase, tracking 0.1em, font 13px. Hover: bg rgba(212,175,55,0.1) + border mas brillante. Active: bg #d4af37, texto negro. Secondary: bg transparent, border 1px #2a2a2a, texto blanco. Sizes: sm 36px, md 42px, lg 48px.
- **Cards**: Surface #161616, border 1px #2a2a2a, radius 12px, padding 32px. Hover: border dorado sutil + sombra. Estilo galeria — mucho espacio interno.
- **Inputs**: Surface #0c0c0c, border 1px #2a2a2a, radius 8px, padding 12px 16px. Focus: border #d4af37 + ring rgba(212,175,55,0.2). Placeholder: #6a6a6a.
- **Chips/Badges**: Border 1px dorado, transparent bg, texto dorado, radius 4px, padding 4px 12px, font 11px, uppercase, weight 600, tracking 0.12em. Active: fill dorado texto negro.
- **Navigation**: Surface #0c0c0c, border-bottom 1px #2a2a2a, 64px alto. Links serif 14px, hover dorado. Logo en serif italic.

## Spacing
- Base: 4px. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96px
- Section: 96px (muy generoso — el lujo respira). Container: 1200px. Gap: 24px

## Border Radius
- 4px: Tags, chips, badges
- 8px: Buttons, inputs
- 12px: Cards, panels
- 20px: Modales, hero cards
- 9999px: Avatares, pill badges

## Do's and Don'ts
- Do usar oro #d4af37 como unico color de acento
- Do usar Cormorant Garamond serif para headings con italic
- Do mantener espacios generosos — el lujo respira
- Do usar superficies negras con bordes sutiles
- Do mantener el minimalismo — menos es mas
- Don't usar mas de un color de acento besides el oro
- Don't usar glow effects o gradientes saturados
- Don't usar tipografia bold condensada — la serif fina es clave
- Don't usar border-radius grandes — maximo 20px
- Don't saturar con elementos decorativos — la elegancia esta en la contencion