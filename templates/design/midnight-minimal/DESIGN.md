# Midnight Minimal

## Overview
Sistema de design oscuro ultra-minimalista. Blanco puro (#ffffff) sobre casi-negro (#080808). Sin ningun color de acento — estrictamente monocromo. Tipografia Inter sin serif decorativa. La profundidad se logra con bordes, no con sombras. Sin gradientes. Border-radius 0 en todos los elementos — aristas vivas, arquitectonicas. La tipografia es masiva, escalando hasta 7rem con clamp. El espacio es generoso: 96px entre secciones. La sensacion es la de un estudio de arquitectura, una galeria de fotografia, un portafolio de design — donde el contenido es el protagonista absoluto y la interfaz desaparece. Maximo contraste, maxima contencion, cero ornamento.

## Colors
- **Primary** (#ffffff): CTAs, texto principal, bordes destacados — blanco puro
- **Primary Hover** (#f0f0f0): Hover sobre primary
- **Secondary** (#a0a0a0): Texto secundario, iconos — gris medio
- **Background** (#080808): Fondo casi-negro
- **Background Alt** (#0c0c0c): Secciones alternas
- **Surface** (#0e0e0e): Cards, paneles
- **Surface Hover** (#141414): Hover
- **Border** (#222222): Bordes sutiles
- **Border Strong** (#ffffff): Bordes destacados en hover/seleccion
- **Text Primary** (#ffffff): Blanco puro
- **Text Secondary** (#888888): Gris
- **Text Muted** (#555555): Gris oscuro
- **Success** (#ffffff): Blanco — sin semantica de color
- **Warning** (#888888): Gris
- **Error** (#ffffff): Blanco — el error se comunica con texto, no con color

## Typography
- **Display Font**: Inter — sans-serif, peso 700
- **Body Font**: Inter — sans-serif, peso 400
- **Code Font**: Inter — monoespaciado no necesario, mismo family

Una sola familia tipografica. Sin serif, sin decorative fonts. Inter en toda la jerarquia. El contraste se logra con peso (700 vs 400), tamano (masivo vs discreto) y tracking (ajustado en display, normal en body). Sin italic. La tipografia masiva es la firma del sistema.

Type scale: Display clamp(3rem, 8vw, 7rem) weight 700 line-height 1.0 tracking -0.03em, Heading 2.5rem 700 line-height 1.1 tracking -0.02em, Subhead 1.25rem 600, Body 16px 400 line-height 1.5, Small 14px, Caption 12px, Overline 11px 600 uppercase tracking 0.2em.

## Elevation
Sin sombras. La profundidad se expresa exclusivamente con bordes.
- **Card**: border 1px #222222. Hover: border 1px #ffffff
- **Button primary**: sin sombra. Hover: bg #ffffff, texto #080808
- **Focus ring**: outline 2px #ffffff, outline-offset 2px
- **Modal**: border 1px #222222 — sin sombra
- **Nav**: border-bottom 1px #222222

## Components
- **Buttons**: Primary: border 1px #ffffff, bg transparent, texto blanco, radius 0, padding 14px 32px, weight 600, uppercase, tracking 0.15em, font 13px. Hover: bg #ffffff, texto #080808. Secondary: bg transparent, border 1px #222222, texto blanco. Hover: border #ffffff. Ghost: sin border, texto #888888. Hover: texto #ffffff. Sizes: sm 36px, md 42px, lg 48px.
- **Cards**: Surface #0e0e0e, border 1px #222222, radius 0, padding 32px. Hover: border #ffffff. Estilo galeria — mucho espacio interno, sin ornamento.
- **Inputs**: Surface #080808, border 1px #222222, radius 0, padding 12px 16px. Focus: border #ffffff + outline 2px #ffffff outline-offset 2px. Placeholder: #555555. Labels uppercase tracking 0.2em font 11px.
- **Chips/Badges**: Border 1px #222222, transparent bg, texto #888888, radius 0, padding 4px 12px, font 11px, uppercase, weight 600, tracking 0.2em. Active: border #ffffff, texto #ffffff.
- **Navigation**: Surface #080808, border-bottom 1px #222222, 64px alto. Links 14px, hover #ffffff. Logo en peso 700 tracking -0.02em.

## Spacing
- Base: 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128px
- Section: 96px (muy generoso — el contenido respira). Container: 1200px. Gap: 24px

## Border Radius
- 0px: Todos los elementos — tags, chips, badges, buttons, inputs, cards, paneles, modales
- Sin excepciones. El radio 0 es absoluto y define el caracter arquitectonico del sistema

## Do's and Don'ts
- Do usar blanco #ffffff como unico color de acento sobre #080808
- Do usar Inter en toda la jerarquia — una sola familia
- Do mantener border-radius 0 en absolutamente todo
- Do usar bordes 1px para la profundidad, nunca sombras
- Do usar tipografia masiva con clamp hasta 7rem
- Do mantener espacios generosos — 96px entre secciones
- Do usar tracking negativo en headings grandes (-0.03em)
- Do usar uppercase con tracking 0.2em en overlines y labels
- Don't usar ningun color que no sea blanco, negro o gris
- Don't usar sombras box-shadow — los bordes reemplazan las sombras
- Don't usar gradientes de ningun tipo
- Don't usar border-radius mayor a 0 — las aristas son vivas
- Don't usar italic o serif — Inter sans-serif exclusivamente
- Don't usar mas de 3 pesos tipograficos (400, 600, 700)
- Don't aniadir ornamentos decorativos — el minimalismo es absoluto