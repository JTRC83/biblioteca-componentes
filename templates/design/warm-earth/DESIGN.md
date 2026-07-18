# Warm Earth

## Overview
Sistema de design calido con tonos tierra. Terracota, ambar, crema y verde oliva. La estetica es organica, artesanal y acogedora. Tipografia serif editorial (Playfair Display) para titulos e Inter para body. Las superficies son cremas y blancos calidos con bordes sutiles color arena. La sensacion es de una marca artesanal de calidad — un restaurante de barrio, una tienda organica, un mueble hecho a mano. Sin azul, sin neón, sin glassmorphism. Solo calidez y autenticidad.

## Colors
- **Primary** (#c8553d): CTAs, links, elementos destacados — terracota
- **Primary Hover** (#b04532): Hover sobre primary
- **Secondary** (#d4a373): Acentos, badges, highlights — arena/ambar
- **Tertiary** (#5a8a4a): Verde oliva para success/organic
- **Background** (#faf6f0): Fondo crema calido
- **Background Alt** (#f0e9dd): Secciones alternas
- **Surface** (#ffffff): Cards, paneles
- **Surface Hover** (#f8f3ed): Hover sutil
- **Border** (#e8dfd2): Bordes color arena
- **Text Primary** (#2d2422): Marron oscuro casi negro
- **Text Secondary** (#6b5d54): Marron gris
- **Text Muted** (#9a8d83): Marron muted
- **Success** (#5a8a4a): Verde oliva
- **Warning** (#e76f51): Naranja terracota
- **Error** (#c8553d): Mismo terracota primary

## Typography
- **Display Font**: Playfair Display (serif editorial)
- **Body Font**: Inter (sans-serif)
- **Code Font**: JetBrains Mono

Playfair Display serif para headings con italic en palabras clave. Inter para body y UI. El contraste serif/sans crea sensacion editorial artesanal.

Type scale: Display clamp(2.5rem, 6vw, 5rem) weight 700, Headline 2.25rem 700, Subhead 1.5rem 600, Body 16px 400 line-height 1.7, Small 14px, Caption 12px, Overline 11px 600 uppercase.

## Elevation
Sombras suaves y calidas con tinte marron.
- **Card**: border 1px #e8dfd2. Hover: 0 4px 16px rgba(45,36,34,0.08) + lift -2px
- **Focus ring**: 0 0 0 3px rgba(200,85,61,0.15)
- **Modal**: 0 24px 64px rgba(45,36,34,0.15)
- **Nav**: border-bottom 1px #e8dfd2

## Components
- **Buttons**: Primary terracota #c8553d texto blanco, radius 10px, padding 12px 24px, weight 600. Secondary: transparent border #d4a373. Ghost: color change. Hover: primary a #b04532. Italic en textos de botones artesanales ("Order now").
- **Cards**: Surface blanca, border 1px #e8dfd2, radius 16px, padding 28px. Hover: sombra calida + lift. Estilo galeria.
- **Inputs**: Border 1px #e8dfd2, radius 10px. Focus: border #c8553d + ring rgba(200,85,61,0.15).
- **Chips**: Rounded-full, surface-hover bg, terracota active.
- **Navigation**: bg crema, border-bottom arena, 60px. Links serif en hover.

## Spacing
- Base: 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px
- Section: 80px desktop. Container: 1200px. Gap: 20px

## Border Radius
- 6px: Tags, chips, checkboxes
- 10px: Buttons, inputs
- 16px: Cards, panels
- 24px: Modales, hero cards
- 9999px: Avatares, status dots

## Do's and Don'ts
- Do usar terracota #c8553d como color principal
- Do usar Playfair Display italic para palabras destacadas
- Do mantener el fondo crema calido #faf6f0
- Do usar superficies blancas con bordes color arena
- Don't usar azules o tonos frios
- Don't usar neón, glow o glassmorphism
- Don't usar gradientes saturados
- Don't usar tipografia monospaciada para headings
- Don't usar border-radius inferior a 6px