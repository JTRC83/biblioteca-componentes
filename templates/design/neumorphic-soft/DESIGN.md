# Neumorphic Soft

## Overview
Sistema de design con neumorfismo suave. Las superficies usan sombras difusas (dual shadow: light top-left, dark bottom-right) para crear relieve y profundidad sin bordes duros. El fondo y las superficies comparten el mismo color (#e8eaf0), por lo que la profundidad se logra unicamente mediante sombras. La sensacion es tactil, suave y organica — como si los elementos estuvieran esculpidos en el material. Los acentos de color (lavanda #6c5ce7) se usan con sutileza. Para productos que transmiten calma, bienestar y calidad organica.

## Colors
- **Primary** (#6c5ce7): CTAs, elementos interactivos destacados, focus — lavanda
- **Primary Hover** (#5b4cdb): Hover states sobre elementos primary
- **Secondary** (#a29bfe): Acentos suaves, gradientes con primary — lavanda clara
- **Background** (#e8eaf0): Fondo de pagina y superficie base — gris-azulado claro
- **Surface** (#e8eaf0): Mismo color que el fondo — el neumorfismo requiere esto
- **Surface Raised**: Mismo color con sombras neumorficas para crear relieve
- **Surface Inset**: Mismo color con sombras inset para crear hundido
- **Text Primary** (#2d3436): Headings, body text, labels principales
- **Text Secondary** (#636e72): Descripciones, metadata, labels secundarios
- **Text Muted** (#9da3a6): Placeholders, timestamps, disabled
- **Success** (#00b894): Confirmaciones, estados positivos — verde suave
- **Warning** (#fdcb6e): Advertencias — amarillo suave
- **Error** (#e17055): Errores, validacion — coral suave
- **Shadow Light** (#ffffff): Sombra clara (top-left)
- **Shadow Dark** (#c8ccd6): Sombra oscura (bottom-right)

## Typography
- **Font Family**: Nunito (Inter fallback) — fuentes redondeadas para complementar el neumorfismo
- **Code Font**: JetBrains Mono, ui-monospace, monospace

Nunito es una fuente redondeada y suave que complementa perfectamente el aspecto tactil del neumorfismo. Se usa en pesos 400, 600 y 700. Las fuentes redondeadas son obligatorias en este sistema — las fuentes angulares (como Space Grotesk) rompen la armonia organica.

Type scale:
- **Display**: clamp(2rem, 5vw, 3.5rem), weight 700, line-height 1.15
- **Heading 2**: 1.75rem, weight 700, line-height 1.2
- **Heading 3**: 1.375rem, weight 600, line-height 1.3
- **Body Large**: 1.125rem, weight 400, line-height 1.6
- **Body**: 1rem (16px), weight 400, line-height 1.6
- **Small**: 0.875rem, weight 400, line-height 1.5
- **Caption**: 0.75rem, weight 600, line-height 1.4
- **Overline**: 0.6875rem, weight 700, uppercase, tracking 0.08em

## Elevation
El neumorfismo usa sombras duales (light + dark) en lugar de sombras tradicionales. Todas las sombras usan el mismo color de superficie como base.
- **Raised (default)**: box-shadow: 6px 6px 12px #c8ccd6, -6px -6px 12px #ffffff
- **Raised small**: 4px 4px 8px #c8ccd6, -4px -4px 8px #ffffff
- **Raised large**: 12px 12px 24px #c8ccd6, -12px -12px 24px #ffffff
- **Inset (pressed/active)**: inset 4px 4px 8px #c8ccd6, inset -4px -4px 8px #ffffff
- **Hover**: Transicion de raised small a raised large (aumenta sombra)
- **Focus ring**: 0 0 0 3px rgba(108, 92, 231, 0.15), nunca usar sombras para focus
- **Primary button**: Raised con tinte lavanda, hover aumenta sombra + glow sutil lavanda

## Components
- **Buttons**: Primary usa fill lavanda #6c5ce7 con texto blanco, radius 12px, padding 12px 24px, weight 600. Sombras neumorficas raised. Hover: sombra aumenta + glow sutil rgba(108,92,231,0.2). Active: sombra inset (pressed). Secondary: surface bg con sombras neumorficas, texto primary. Ghost: sin sombras, solo color. Sizes: sm 36px, md 40px, lg 48px.
- **Cards**: Surface bg con sombras neumorficas raised large, radius 20px, padding 28px. Hover: sombra aumenta sutilmente. Inset variant para inputs anidados dentro de cards. Transition 250ms ease.
- **Inputs**: Surface bg con sombras inset (hundido), radius 12px, padding 12px 16px, font 14px. Focus: border none + ring 3px rgba(108,92,231,0.15). Placeholder: text-muted. Sin border tradicional.
- **Chips/Badges**: Raised neumorphic, radius 9999px, padding 6px 16px, font 12px, weight 600. Active: fill primary con texto blanco. Semantic: tinte del color + sombra neumorfica.
- **Toggles**: Switch con track raised y thumb raised. Checked: track fill primary + thumb se desliza. Transition 300ms con cubic-bezier suave.
- **Checkboxes**: Raised neumorphic unchecked. Checked: fill primary con checkmark blanco + sombra inset. Size 24px, radius 8px.
- **Navigation**: Surface bg con border-bottom neumorfico (sombra inferior sutil), 64px alto. Links con hover raised. Busqueda con input inset.
- **Tooltips**: Raised neumorphic, radius 8px, padding 8px 14px, font 12px. Aparece con fade + escala 0.95 → 1.

## Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80px
- Component padding: small 12x16, medium 12x24, large 16x28
- Section spacing: 32px mobile, 48px tablet, 80px desktop
- Container max width: 1200px with 24px horizontal padding
- Card grid gap: 20-24px
- Las sombras neumorficas necesitan espacio: dejar 12px de margen alrededor de elementos raised

## Border Radius
- 8px: Tags, chips, checkboxes, tooltips, elementos pequenos
- 12px: Buttons, inputs, selects, small cards
- 20px: Cards principales, panels, featured sections
- 28px: Modales, hero cards, contenedores grandes
- 9999px: Avatares, status dots, pill badges, toggles

## Do's and Don'ts
- Do usar el mismo color para fondo y superficie — el neumorfismo requiere esto
- Do usar sombras duales (light + dark) para crear relieve
- Do usar fuentes redondeadas (Nunito) — complementan el aspecto organico
- Do mantener los radios grandes (12-28px) para suavidad visual
- Do dejar espacio alrededor de elementos raised para que las sombras respiren
- Don't usar bordes tradicionales (1px solid) — el neumorfismo usa sombras, no bordes
- Don't usar sombras tradicionales (box-shadow unidireccional) — siempre duales
- Don't usar colores puros saturados — la paleta es suave y organica
- Don't mezclar neumorfismo con glassmorphism o flat design en la misma vista
- Don't usar texto pequeño sobre superficies neumorficas — minimo 14px para legibilidad