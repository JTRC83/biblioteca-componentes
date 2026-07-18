# Glassmorphism Dark

## Overview
Sistema de design oscuro con glassmorphism. Las superficies son translucidas con backdrop-blur, creando profundidad visual sobre un fondo casi negro. Los gradientes indigo-violeta se usan en CTAs, bordes hover y texto destacado. La sensacion es premium, tecnologica y minimalista pero con capas. El glassmorphism crea una jerarquia visual sin necesidad de sombras pesadas.

## Colors
- **Primary** (#6366f1): CTAs, links, focus rings, elementos interactivos destacados — indigo
- **Primary Hover** (#5558e0): Estados hover sobre elementos primary
- **Secondary** (#8b5cf6): Combinado con primary en gradientes, acentos secundarios — violeta
- **Tertiary** (#a855f7): Extremo del gradiente, badges, highlights puntuales
- **Background** (#0a0a0c): Fondo principal de la pagina — casi negro
- **Background Alt** (#0f0f12): Variacion sutil del fondo para secciones alternas
- **Surface** (#18181c): Superficie base de cards y paneles
- **Surface Hover** (#1f1f24): Hover state de superficies
- **Surface Glass** (rgba(24, 24, 28, 0.6)): Superficie translucida con blur para glassmorphism
- **Border** (rgba(255, 255, 255, 0.08)): Bordes sutiles de cards y divisores
- **Border Hover** (rgba(99, 102, 241, 0.4)): Borde con tinte primary en hover
- **Text Primary** (#f4f4f5): Texto principal, headings
- **Text Secondary** (#a1a1aa): Descripciones, metadata, labels secundarios
- **Text Muted** (#71717a): Placeholders, timestamps, texto deshabilitado
- **Success** (#22c55e): Confirmaciones, estados positivos
- **Warning** (#f59e0b): Advertencias, estados pendientes
- **Error** (#ef4444): Errores, acciones destructivas

## Typography
- **Font Family**: Inter (system-ui fallback)
- **Code Font**: JetBrains Mono, ui-monospace, monospace

Type scale y pesos:
- **Display**: clamp(2rem, 5vw, 4rem), weight 700, tracking -0.02em, line-height 1.1
- **Heading 2**: clamp(1.5rem, 3vw, 2.25rem), weight 700, tracking -0.02em, line-height 1.2
- **Heading 3**: 1.25rem, weight 600, line-height 1.3
- **Body Large**: 1.125rem, weight 400, line-height 1.6
- **Body**: 1rem (16px), weight 400, line-height 1.6
- **Small**: 0.875rem, weight 400, line-height 1.5
- **Caption**: 0.75rem, weight 500, line-height 1.4, uppercase tracking 0.05em
- **Overline**: 0.6875rem, weight 600, uppercase, tracking 0.1em

## Elevation
El glassmorphism usa blur y translucidez en lugar de sombras tradicionales.
- **Card glass**: backdrop-filter blur(12px), bg rgba(24,24,28,0.6), border 1px rgba(255,255,255,0.08)
- **Card hover**: sombra sutil 0 8px 32px rgba(0,0,0,0.4) + borde tinte primary
- **Button primary hover**: glow 0 0 40px rgba(99,102,241,0.15)
- **Dropdown/popover**: shadow-lg 0 12px 40px rgba(0,0,0,0.5) + glass bg
- **Focus ring**: 0 0 0 3px rgba(99,102,241,0.12), nunca usar sombra para focus
- **Modal**: shadow-xl 0 24px 64px rgba(0,0,0,0.6) + glass bg con blur mayor (20px)

## Components
- **Buttons**: Primary usa gradiente linear-gradient(135deg, #6366f1, #8b5cf6) con texto blanco, radius 12px, padding 10px 24px, weight 600. Secondary usa surface glass con border, mismo radius. Ghost solo cambia color texto en hover. Hover: gradiente se desplaza sutilmente + glow shadow. Sizes: sm 32px alto, md 38px, lg 44px.
- **Cards**: Glass surface con blur, border 1px rgba(255,255,255,0.08), radius 16px, padding 24px, overflow hidden. Hover: border tinte primary + sombra sutil + lift -2px. Transition 200ms ease.
- **Inputs**: Surface glass bg, border 1px rgba(255,255,255,0.08), radius 12px, padding 10px 14px, font 14px. Focus: border primary + ring 3px rgba(99,102,241,0.12). Placeholder usa text-muted.
- **Chips/Badges**: Rounded-full (pill), surface-hover bg, text-secondary, padding 4px 12px, font 12px. Active: primary bg con texto blanco. Semantic chips usan success/warning/error.
- **Navigation**: Sticky top, glass bg con blur, 56px alto, border-bottom 1px. Links 14px weight 500, hover muestra bg-hover. Busqueda con ⌘K, rounded-xl.
- **Toggles**: Switch con track surface-hover y thumb surface. Checked: track gradiente primary-secondary, thumb blanco. Transition 250ms.
- **Tooltips**: Glass bg con blur, texto blanco, radius 8px, padding 6px 12px, font 12px. Aparece con fade 150ms.

## Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px
- Component padding: small 8x12, medium 10x16, large 12x24
- Section spacing: 32px mobile, 48px tablet, 80px desktop
- Container max width: 1200px with 24px horizontal padding
- Card grid gap: 24px
- Stack gap (vertical entre elementos): 16px default, 24px entre secciones dentro de card

## Border Radius
- 8px: Tags, chips, badges, inline code, tooltips
- 12px: Buttons, inputs, selects, small cards
- 16px: Cards principales, search bar, panels
- 24px: Modales, featured sections, hero cards
- 9999px: Avatares, status dots, pill badges, toggles

## Do's and Don'ts
- Do usar gradiente primary-secondary solo en CTAs y elementos destacados, no en decoracion
- Do mantener el blur entre 12px y 20px para glassmorphism consistente
- Do usar Inter para todo, JetBrains Mono solo para codigo
- Do asegurar contraste suficiente: texto blanco sobre glass bg oscuro
- Do reservar el glow shadow para hover y focus states
- Don't usar colores puros (#000 o #fff) — usar la paleta definida
- Don't mezclar glassmorphism con sombras tradicionales pesadas
- Don't usar mas de un gradiente en la misma vista/seccion
- Don't aplicar blur a elementos con texto largo — legibilidad primero
- Don't usar border-radius diferentes a los definidos en la escala