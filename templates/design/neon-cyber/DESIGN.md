# Neon Cyber

## Overview
Sistema de design oscuro cyberpunk con neón, glow effects y grid patterns. La estetica es futurista, audaz y tecnologica. Los colores neón (cyan #00ffd1 y rojo #ff2a00) brillan sobre un fondo casi negro con efecto glow. Los grid patterns y scan lines anaden textura tecnologica. Las cards tienen bordes neón y glow en hover. La tipografia es bold y geometrica (Space Grotesk). Para productos que quieren destacar con energia visual maxima.

## Colors
- **Primary** (#00ffd1): CTAs, links, elementos interactivos destacados, borders neón — cyan
- **Primary Glow** (rgba(0, 255, 209, 0.4)): Glow shadow para hover y focus states
- **Secondary** (#ff2a00): Alertas, badges criticos, acentos de contraste — rojo neón
- **Secondary Glow** (rgba(255, 42, 0, 0.4)): Glow para elementos secondary
- **Tertiary** (#b400ff): Acentos puntuales, gradientes neón — magenta
- **Background** (#050505): Fondo principal — casi negro
- **Background Alt** (#0a0a0c): Variacion sutil para secciones alternas
- **Surface** (#0d0d0f): Superficie base de cards y paneles
- **Surface Hover** (#15151a): Hover state de superficies
- **Border** (#1a1a20): Bordes base de cards y divisores
- **Border Neon** (rgba(0, 255, 209, 0.3)): Borde neón para hover y elementos destacados
- **Text Primary** (#e0e0e0): Texto principal, headings
- **Text Secondary** (#8a8a8f): Descripciones, metadata, labels
- **Text Muted** (#5a5a5f): Placeholders, timestamps, disabled
- **Success** (#00ff88): Confirmaciones, estados positivos — verde neón
- **Warning** (#ffaa00): Advertencias — amarillo neón
- **Error** (#ff2a00): Errores, acciones destructivas — rojo neón

## Typography
- **Font Family**: Space Grotesk (Inter fallback)
- **Code Font**: JetBrains Mono, ui-monospace, monospace

Space Grotesk es geometrica y bold, perfecta para el aspecto cyberpunk. Se usa en todos los pesos. Para codigo y elementos tecnicos (IDs, versiones, timestamps) se usa JetBrains Mono.

Type scale:
- **Display**: clamp(2.5rem, 7vw, 6rem), weight 700, tracking -0.03em, line-height 1.0
- **Heading 2**: clamp(1.75rem, 4vw, 3rem), weight 700, tracking -0.02em, line-height 1.1
- **Heading 3**: 1.5rem, weight 600, line-height 1.2
- **Body Large**: 1.125rem, weight 400, line-height 1.5
- **Body**: 1rem (16px), weight 400, line-height 1.5
- **Small**: 0.875rem, weight 400, line-height 1.4
- **Caption**: 0.75rem, weight 500, line-height 1.3
- **Overline**: 0.6875rem, weight 700, uppercase, tracking 0.15em — para labels y eyebrows

## Elevation
El sistema usa glow shadows neón en lugar de sombras tradicionales.
- **Card base**: Sin sombra, border 1px #1a1a20. Hover: glow 0 0 20px rgba(0,255,209,0.15) + border neón
- **Card featured**: Glow constante 0 0 30px rgba(0,255,209,0.1), border neón
- **Button primary hover**: Glow 0 0 20px rgba(0,255,209,0.4)
- **Button secondary hover**: Glow 0 0 20px rgba(255,42,0,0.3)
- **Focus ring**: 0 0 0 2px rgba(0,255,209,0.2), siempre con tinte neón
- **Modal**: Glow border 0 0 40px rgba(0,255,209,0.1) + surface bg
- **Dropdown**: 0 4px 24px rgba(0,0,0,0.8) + border neón sutil

## Components
- **Buttons**: Primary usa fill neón #00ffd1 con texto negro, radius 8px, padding 12px 28px, weight 700, uppercase, tracking 0.05em. Secondary usa surface bg con border 1px neón y texto neón. Ghost: solo texto neón, hover bg surface-hover. Hover: glow shadow neón. Sizes: sm 36px, md 42px, lg 48px.
- **Cards**: Surface #0d0d0f, border 1px #1a1a20, radius 12px, overflow hidden. Hover: border neón rgba(0,255,209,0.3) + glow 0 0 20px rgba(0,255,209,0.15). Featured: glow constante + border neón. Transition 200ms.
- **Inputs**: Surface bg, border 1px #1a1a20, radius 8px, padding 12px 16px, font 14px. Focus: border neón #00ffd1 + glow 0 0 12px rgba(0,255,209,0.2). Placeholder: text-muted. Code-style inputs usan JetBrains Mono.
- **Chips/Badges**: Border 1px neón, transparent bg, texto neón, radius 4px, padding 4px 12px, font 11px, uppercase, weight 700, tracking 0.1em. Active: fill neón con texto negro. Status chips: border + texto del color semantico.
- **Navigation**: Sticky top, surface bg con border-bottom neón sutil, 60px alto. Links 14px weight 600, uppercase, hover texto neón + glow texto. Logo con efecto glow.
- **Toggles**: Switch con track surface y border. Checked: track neón con glow, thumb negro. Transition 300ms.
- **Tooltips**: Surface bg, border 1px neón, texto neón, radius 4px, padding 8px 12px, font 12px. Aparece con fade + glow.
- **Loaders**: Spinners y barras con efecto neón pulsante. Color primary con glow animation.

## Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px
- Component padding: small 8x12, medium 12x16, large 16x24
- Section spacing: 32px mobile, 48px tablet, 80px desktop
- Container max width: 1280px with 24px horizontal padding
- Card grid gap: 16-20px (mas tight que otros sistemas para densidad cyber)

## Border Radius
- 4px: Tags, chips, badges, inline code, tooltips, inputs pequenos
- 8px: Buttons, inputs, selects
- 12px: Cards, panels, search bar
- 16px: Modales, hero sections, featured cards
- 9999px: Status dots, pill badges, toggles

## Do's and Don'ts
- Do usar neón #00ffd1 como color principal de acento
- Do aplicar glow shadows en hover y estados activos para dar vida al diseno
- Do usar Space Grotesk para todo, JetBrains Mono para codigo/tech
- Do mantener el fondo casi negro (#050505) para que el neón resalte
- Do usar grid patterns y scan lines como textura de fondo sutil
- Don't usar mas de 2 colores neón simultaneamente en la misma vista
- Don't aplicar glow a elementos estaticos sin interaccion — reserva glow para hover/focus
- Don't usar border-radius mayores a 16px — el sistema es angular y tecnico
- Don't mezclar estilos: o es neón cyan o neón rojo, no ambos en igual peso
- Don't usar texto neón sobre fondo neón — siempre texto claro sobre oscuro