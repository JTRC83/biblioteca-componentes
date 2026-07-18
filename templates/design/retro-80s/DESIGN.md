# Retro 80s

## Overview
Sistema de design retro de los 80s con estetica synthwave y vaporwave. La paleta combina neon pink #ff2a6d y neon cyan #05d9e8 sobre un fondo deep purple-black #0d0221. Los sunset gradients (pink → purple → cyan) evocan atardeceres retrofuturistas. Los grid floors con perspectiva crean la ilusion de suelo infinito tipica del synthwave. La tipografia Orbitron es geometrica y futuristica, perfecta para el aspecto retro-80s. Los glow shadows en pink y cyan dan vida al neón. Las scan lines anaden textura CRT. Para synthwave music, retro gaming, vaporwave aesthetics y productos que quieren evocar nostalgia de los 80s con energia visual.

## Colors
- **Primary** (#ff2a6d): CTAs, links, elementos interactivos destacados, borders neón — neon pink
- **Primary Glow** (rgba(255, 42, 109, 0.4)): Glow shadow para hover y focus states
- **Secondary** (#05d9e8): Acentos de contraste, elementos secundarios, scan lines — neon cyan
- **Secondary Glow** (rgba(5, 217, 232, 0.4)): Glow para elementos secondary
- **Tertiary** (#b400ff): Acentos puntuales, gradientes sunset, profundidad — magenta
- **Sunset Gradient**: linear-gradient(180deg, #ff2a6d 0%, #b400ff 50%, #05d9e8 100%) — pink → purple → cyan
- **Background** (#0d0221): Fondo principal — deep purple-black
- **Background Alt** (#10052a): Variacion sutil para secciones alternas
- **Surface** (#1a0b2e): Superficie base de cards y paneles
- **Surface Hover** (#26134a): Hover state de superficies
- **Border** (#2a1a44): Bordes base de cards y divisores
- **Border Neon** (rgba(255, 42, 109, 0.3)): Borde neón para hover y elementos destacados
- **Text Primary** (#d1f7ff): Texto principal, headings — cyan-tinto claro
- **Text Secondary** (#8b6f9c): Descripciones, metadata, labels
- **Text Muted** (#5a4a6f): Placeholders, timestamps, disabled
- **Success** (#00ff88): Confirmaciones, estados positivos — verde neón
- **Warning** (#ffaa00): Advertencias — amarillo neón
- **Error** (#ff2a6d): Errores, acciones destructivas — neon pink

## Typography
- **Font Family**: Orbitron (Inter fallback)
- **Code Font**: JetBrains Mono, ui-monospace, monospace

Orbitron es geometrica y futuristica, con formas que evocan la tipografia de los 80s y la ciencia ficcion. Se usa en todos los pesos, especialmente en 700 y 900 para titulos con impacto. Para cuerpo de texto y descripciones se usa Inter como complemento legible. Para codigo y elementos tecnicos (IDs, timestamps, coordenadas) se usa JetBrains Mono.

Type scale:
- **Display**: clamp(2.5rem, 7vw, 6rem), weight 900, tracking 0.02em, line-height 1.0 — titulos hero con glow neón
- **Heading 2**: clamp(1.75rem, 4vw, 3rem), weight 700, tracking 0.01em, line-height 1.1
- **Heading 3**: 1.5rem, weight 700, line-height 1.2
- **Body Large**: 1.125rem, weight 400, line-height 1.5
- **Body**: 1rem (16px), weight 400, line-height 1.5
- **Small**: 0.875rem, weight 400, line-height 1.4
- **Caption**: 0.75rem, weight 500, line-height 1.3
- **Overline**: 0.6875rem, weight 700, uppercase, tracking 0.2em — para labels y eyebrows retro

## Elevation
El sistema usa glow shadows neón en pink y cyan en lugar de sombras tradicionales. El grid floor anade profundidad espacial.
- **Card base**: Sin sombra, border 1px #2a1a44. Hover: glow 0 0 20px rgba(255,42,109,0.15) + border neón pink
- **Card featured**: Glow constante 0 0 30px rgba(255,42,109,0.1), border neón pink. Opcion: glow cyan alternativo
- **Button primary hover**: Glow 0 0 24px rgba(255,42,109,0.4) — pink neón
- **Button secondary hover**: Glow 0 0 20px rgba(5,217,232,0.3) — cyan neón
- **Focus ring**: 0 0 0 2px rgba(255,42,109,0.2), siempre con tinte neón
- **Modal**: Glow border 0 0 40px rgba(255,42,109,0.1) + surface bg + sunset gradient sutil
- **Dropdown**: 0 4px 24px rgba(0,0,0,0.8) + border neón sutil
- **Grid floor**: Perspectiva con lineas cyan a baja opacidad, profundidad infinita

## Components
- **Buttons**: Primary usa fill neón pink #ff2a6d con texto blanco, radius 8px, padding 12px 28px, weight 700, uppercase, tracking 0.05em. Secondary usa surface bg con border 1px neón cyan y texto cyan. Gradient: sunset gradient pink→purple→cyan con texto blanco. Ghost: solo texto pink, hover bg surface-hover. Hover: glow shadow neón. Sizes: sm 36px, md 42px, lg 48px.
- **Cards**: Surface #1a0b2e, border 1px #2a1a44, radius 12px, overflow hidden. Hover: border neón pink rgba(255,42,109,0.3) + glow 0 0 24px rgba(255,42,109,0.15). Featured: glow constante + border neón + scan lines overlay. Titulos con text-shadow neón. Transition 200ms.
- **Inputs**: Surface bg, border 1px #2a1a44, radius 8px, padding 12px 16px, font 14px. Focus: border neón pink #ff2a6d + glow 0 0 12px rgba(255,42,109,0.2). Placeholder: text-muted. Code-style inputs usan JetBrains Mono.
- **Chips/Badges**: Border 1px neón (pink o cyan), transparent bg, texto neón, radius 4px, padding 4px 12px, font 11px, uppercase, weight 700, tracking 0.1em. Active: fill neón con texto oscuro. Status chips: border + texto del color semantico.
- **Navigation**: Sticky top, surface bg con border-bottom neón sutil, 60px alto. Links 14px weight 600, uppercase, hover texto neón pink + glow texto. Logo con efecto glow y Orbitron.
- **Toggles**: Switch con track surface y border. Checked: track neón pink con glow, thumb oscuro. Transition 300ms.
- **Tooltips**: Surface bg, border 1px neón, texto neón, radius 4px, padding 8px 12px, font 12px. Aparece con fade + glow.
- **Loaders**: Spinners y barras con efecto neón pulsante. Color primary pink con glow animation. Opcion gradient sunset.
- **Grid Floor**: Elemento decorativo en hero sections. Lineas en perspectiva con transform rotateX, color cyan a baja opacidad, animacion de movimiento infinito opcional.
- **Scan Lines**: Overlay sutil con lineas horizontales cada 4px a opacidad 0.02. Textura CRT en cards featured y hero.

## Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px
- Component padding: small 8x12, medium 12x16, large 16x24
- Section spacing: 32px mobile, 48px tablet, 80px desktop
- Container max width: 1280px with 24px horizontal padding
- Card grid gap: 16-20px

## Border Radius
- 4px: Tags, chips, badges, inline code, tooltips, inputs pequenos
- 8px: Buttons, inputs, selects
- 12px: Cards, panels, search bar
- 16px: Modales, hero sections, featured cards
- 9999px: Status dots, pill badges, toggles

## Do's and Don'ts
- Do usar neon pink #ff2a6d como color principal de acento
- Do usar neon cyan #05d9e8 como color secundario y para grid floors
- Do aplicar glow shadows en hover y estados activos para dar vida al neón
- Do usar Orbitron para titulos y headings, Inter para cuerpo de texto
- Do usar sunset gradients (pink → purple → cyan) en hero sections y elementos destacados
- Do usar grid floor con perspectiva en heroes para evocar el synthwave
- Do anadir scan lines como textura sutil de fondo
- Don't usar mas de 2 colores neón simultaneamente en la misma vista (pink + cyan es el maximo)
- Don't aplicar glow a elementos estaticos sin interaccion — reserva glow para hover/focus
- Don't usar border-radius mayores a 16px — el sistema es angular y retro
- Don't usar fondos claros — el deep purple-black es esencial para que el neón resalte
- Don't usar texto neón sobre fondo neón — siempre texto claro sobre oscuro
- Don't olvidar el grid floor en heroes — es la firma visual del synthwave