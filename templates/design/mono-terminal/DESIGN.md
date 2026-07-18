# Mono Terminal

## Overview
Sistema de design oscuro estilo terminal/IDE. Verde fosforo (#00ff41) sobre negro absoluto. Tipografia monospaciada (JetBrains Mono) en TODO — no hay sans-serif. Bordes crudos (radius 0-4px). La estetica es hacker, developer, retro-computing. Todo el texto es monospaciado, incluyendo headings. El fondo es casi negro (#0a0a0a), las superficies son negras (#111111) con bordes verdes sutiles. El cursor parpadeante, los scan lines y los efectos CRT son bienvenidos. Para devtools, IDEs, dashboards de infraestructura y productos para developers.

## Colors
- **Primary** (#00ff41): CTAs, links, texto destacado, borders activos — verde fosforo
- **Primary Hover** (#00cc33): Hover sobre primary
- **Secondary** (#ffbe00): Warnings, badges, highlights — ambar terminal
- **Accent** (#00aaff): Links, info highlights — cyan terminal
- **Background** (#0a0a0a): Fondo principal — negro casi absoluto
- **Background Alt** (#0d0d0d): Secciones alternas
- **Surface** (#111111): Cards, paneles
- **Surface Hover** (#1a1a1a): Hover
- **Border** (#1a3a1a): Borders verdes muy oscuros
- **Border Active** (#00ff41): Border verde activo/focus
- **Text Primary** (#c8ffc8): Verde claro suave para texto
- **Text Secondary** (#5a8a5a): Verde muted
- **Text Muted** (#3a5a3a): Verde muy muted
- **Success** (#00ff41): Mismo verde primary
- **Warning** (#ffbe00): Ambar terminal
- **Error** (#ff4444): Rojo terminal

## Typography
- **Font Family**: JetBrains Mono (Fira Code fallback) — monospaciada en TODO
- **Code Font**: JetBrains Mono (misma fuente)

TODO es monospaciado. No hay sans-serif en este sistema. Los headings usan la misma JetBrains Mono en peso 700. El aspecto monospaciado es esencial — es lo que hace que se sienta como terminal.

Type scale: Display clamp(2rem, 6vw, 4rem) weight 700, Heading 1.5rem 700, Subhead 1.125rem 600, Body 14px 400 line-height 1.5, Small 12px, Caption 11px, Overline 10px 700 uppercase tracking 0.15em. Todo en monospaciado.

## Elevation
Sin sombras tradicionales. La profundidad se logra mediante borders y glow.
- **Card**: border 1px #1a3a1a. Hover: border #00ff41 + glow 0 0 12px rgba(0,255,65,0.1)
- **Button primary**: sin sombra. Hover: glow 0 0 12px rgba(0,255,65,0.2)
- **Focus ring**: 0 0 0 2px rgba(0,255,65,0.2)
- **Modal**: border 1px #00ff41 + glow 0 0 24px rgba(0,255,65,0.1)
- **Nav**: border-bottom 1px #1a3a1a

## Components
- **Buttons**: Primary: border 1px #00ff41, bg transparent, texto verde, font 14px mono, padding 8px 16px, weight 500, uppercase, tracking 0.05em. Hover: bg rgba(0,255,65,0.1) + glow. Active: bg #00ff41, texto negro. Sizes: sm 32px, md 36px, lg 40px.
- **Cards**: Surface #111111, border 1px #1a3a1a, radius 4px, padding 20px. Hover: border #00ff41 + glow sutil. Header con titulo mono + prompt `>` o `$`.
- **Inputs**: Surface #0a0a0a, border 1px #1a3a1a, radius 4px, padding 10px 14px, font 14px mono. Focus: border #00ff41 + glow. Placeholder: #3a5a3a. Cursor parpadeante estilo terminal.
- **Chips/Badges**: Border 1px, radius 0, padding 2px 8px, font 11px mono, uppercase, weight 700, tracking 0.1em. Verde para active, ambar para warning, rojo para error.
- **Navigation**: Surface #0a0a0a, border-bottom 1px #1a3a1a, 48px alto. Links 13px mono, uppercase. Hover: texto verde + bg rgba(0,255,65,0.05).
- **Toggles**: Track #111111 con border, thumb verde cuadrado. Checked: track verde, thumb negro.

## Spacing
- Base: 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px
- Section: 64px (mas tight que otros). Container: 1280px. Gap: 16px

## Border Radius
- 0px: Chips, badges, tags, code blocks
- 4px: Buttons, inputs, cards
- 8px: Modales, panels grandes
- 12px: Solo si es estrictamente necesario
- 9999px: Nunca — el terminal no redondea

## Do's and Don'ts
- Do usar JetBrains Mono en TODO — sans-serif esta prohibido
- Do usar verde fosforo #00ff41 como color principal
- Do mantener el fondo casi negro (#0a0a0a)
- Do usar borders en lugar de sombras para profundidad
- Do usar glow verde sutil en hover y focus
- Don't usar tipografia sans-serif o serif — solo monospaciada
- Don't usar border-radius mayor a 8px
- Don't usar gradientes coloridos o pastel
- Don't usar sombras tradicionales con blur grande
- Don't usar colores saturados que no sean verde/ambar/cyan terminal