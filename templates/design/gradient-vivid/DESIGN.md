# Gradient Vivid

## Overview
Sistema de design oscuro con gradientes vibrantes multi-color. Magenta (#ec4899), cyan (#06b6d4), ambar (#f59e0b) y violeta (#8b5cf6) se combinan en gradientes audaces. La estetica es bold, creativa y energetica — maximo impacto visual. Los gradientes se usan en botones, bordes de cards, texto destacado y fondos. Tipografia geometrica bold (Space Grotesk). Las superficies oscuras con borders gradient en hover. Para marcas creativas, agencias, musica, gaming y entretenimiento que quieren destacar.

## Colors
- **Primary** (#ec4899): Magenta — CTAs principales, extremo de gradientes
- **Primary Hover** (#db2777): Hover sobre primary
- **Secondary** (#06b6d4): Cyan — segundo extremo de gradientes, links
- **Tertiary** (#8b5cf6): Violeta — tercer color de gradientes, acentos
- **Quaternary** (#f59e0b): Ambar — highlights, badges
- **Gradient Main**: linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4)
- **Gradient Text**: linear-gradient(135deg, #ec4899 0%, #f59e0b 50%, #06b6d4 100%)
- **Background** (#0a0a0c): Fondo casi negro
- **Background Alt** (#0f0f12): Secciones alternas
- **Surface** (#15151a): Cards, paneles
- **Surface Hover** (#1f1f24): Hover
- **Border** (#232329): Bordes base
- **Border Gradient**: border-image con gradiente para hover
- **Text Primary** (#f4f4f5): Blanco gris
- **Text Secondary** (#a1a1aa): Gris
- **Text Muted** (#71717a): Gris muted
- **Success** (#22c55e): Verde
- **Warning** (#f59e0b): Ambar
- **Error** (#ef4444): Rojo

## Typography
- **Font Family**: Space Grotesk (Inter fallback)
- **Code Font**: JetBrains Mono

Space Grotesk geometrica y bold para headings. Inter para body. Gradiente text en headings clave.

Type scale: Display clamp(2.5rem, 7vw, 5.5rem) weight 700 tracking -0.03em, Heading 2rem 700, Subhead 1.5rem 600, Body 16px 400 line-height 1.5, Small 14px, Caption 12px, Overline 11px 700 uppercase tracking 0.12em.

## Elevation
Glow shadows con tinte gradient para hover y elementos destacados.
- **Card**: border 1px #232329. Hover: border-image gradient + glow 0 0 30px rgba(236,72,153,0.15)
- **Button primary hover**: glow 0 0 24px rgba(236,72,153,0.3)
- **Focus ring**: 0 0 0 3px rgba(236,72,153,0.15)
- **Modal**: border-image gradient + glow 0 0 48px rgba(236,72,153,0.1)
- **Nav**: border-bottom 1px #232329

## Components
- **Buttons**: Primary usa gradient linear-gradient(135deg, #ec4899, #8b5cf6) con texto blanco, radius 12px, padding 12px 28px, weight 700, uppercase, tracking 0.03em. Hover: gradiente se desplaza + glow. Secondary: surface bg con border 1px #232329, texto blanco. Ghost: color change. Sizes: sm 36px, md 42px, lg 48px.
- **Cards**: Surface #15151a, border 1px #232329, radius 16px, padding 28px. Hover: border-image gradient + glow. Featured: border-image gradient constante. Transition 250ms.
- **Inputs**: Surface #0f0f12, border 1px #232329, radius 12px, padding 12px 16px. Focus: border-image gradient + glow 0 0 12px rgba(236,72,153,0.2).
- **Chips/Badges**: Border-image gradient, transparent bg, radius 9999px, padding 4px 14px, font 12px weight 600. Active: fill gradient con texto blanco.
- **Navigation**: Surface oscuro, border-bottom, 60px. Links con hover gradient text.

## Spacing
- Base: 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px
- Section: 80px. Container: 1280px. Gap: 20px

## Border Radius
- 8px: Tags, chips pequenos
- 12px: Buttons, inputs, selects
- 16px: Cards, panels
- 24px: Modales, hero cards
- 9999px: Avatares, status dots, pill badges

## Do's and Don'ts
- Do usar gradientes multi-color (magenta-violeta-cyan) audaces
- Do usar gradient text en headings clave
- Do usar glow con tinte magenta en hover y focus
- Do mantener el fondo oscuro para que los gradientes resalten
- Do combinar 2-3 colores en gradientes para maximo impacto
- Don't usar gradientes pastel o desaturados — este sistema es vivid
- Don't usar mas de un gradiente grande en la misma vista
- Don't usar bordes planos en hover — siempre border-image gradient
- Don't usar sombras tradicionales sin tinte de color
- Don't usar tipografia serif o monospaciada — Space Grotesk es la indicada