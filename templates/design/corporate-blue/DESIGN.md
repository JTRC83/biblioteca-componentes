# Corporate Blue

## Overview
Sistema de design claro y profesional para enterprise. Azul corporativo profundo (#1e40af) que transmite confianza, estabilidad y seriedad. Fondo blanco con superficies claras (#f8fafc). Tipografia Plus Jakarta Sans moderna y geometrica. Sombras sutiles, bordes finos, radios suaves. La sensacion es de una empresa seria y confiable — un banco, un despacho, un B2B SaaS. Sin ornamentacion excesiva, sin gradientes llamativos. Funcion y claridad sobre todo.

## Colors
- **Primary** (#1e40af): CTAs, links, focus rings, elementos interactivos — azul corporativo
- **Primary Hover** (#1e3a8a): Hover states sobre elementos primary
- **Secondary** (#0891b2): Acentos, badges, highlights secundarios — cyan
- **Background** (#ffffff): Fondo principal
- **Background Alt** (#f8fafc): Secciones alternas
- **Surface** (#ffffff): Cards, paneles
- **Surface Alt** (#f1f5f9): Hover sutil, backgrounds de seccion
- **Border** (#e2e8f0): Bordes de cards, divisores, inputs
- **Border Strong** (#cbd5e1): Bordes mas visibles, focus states
- **Text Primary** (#0f172a): Headings, body text, labels principales
- **Text Secondary** (#475569): Descripciones, metadata, labels
- **Text Muted** (#94a3b8): Placeholders, timestamps, disabled
- **Success** (#10b981): Confirmaciones, estados positivos
- **Warning** (#f59e0b): Advertencias
- **Error** (#ef4444): Errores, validacion, destructivo

## Typography
- **Font Family**: Plus Jakarta Sans (Inter fallback)
- **Code Font**: JetBrains Mono

Plus Jakarta Sans es geometrica, moderna y profesional — perfecta para enterprise. Pesos 400, 600, 700.

Type scale:
- **Display**: clamp(2.25rem, 5vw, 4rem), weight 700, tracking -0.02em, line-height 1.15
- **Heading 2**: 1.875rem, weight 700, line-height 1.2
- **Heading 3**: 1.375rem, weight 600, line-height 1.3
- **Body Large**: 1.125rem, weight 400, line-height 1.6
- **Body**: 1rem (16px), weight 400, line-height 1.6
- **Small**: 0.875rem, weight 400, line-height 1.5
- **Caption**: 0.75rem, weight 500, line-height 1.4
- **Overline**: 0.6875rem, weight 700, uppercase, tracking 0.1em

## Elevation
Sombras sutiles y profesionales. Nada de glow effects.
- **Card**: Sin sombra, border 1px #e2e8f0. Hover: 0 4px 16px rgba(15,23,42,0.08) + lift -1px
- **Button primary**: Sin sombra. Hover: cambio de tono
- **Focus ring**: 0 0 0 3px rgba(30,64,175,0.12)
- **Dropdown/popover**: 0 4px 16px rgba(15,23,42,0.08)
- **Modal**: 0 24px 64px rgba(15,23,42,0.12)
- **Nav**: Sin sombra, border-bottom 1px #e2e8f0

## Components
- **Buttons**: Primary fill #1e40af con texto blanco, radius 12px, padding 10px 20px, weight 600, font 14px. Secondary: transparent con border 1px #cbd5e1. Ghost: solo color. Hover: primary a #1e3a8a, secondary bg #f1f5f9. Sizes: sm 36px, md 40px, lg 44px.
- **Cards**: Surface blanca, border 1px #e2e8f0, radius 16px, padding 24px. Hover: sombra sutil + lift. Transition 200ms.
- **Inputs**: Surface blanca, border 1px #e2e8f0, radius 12px, padding 10px 14px, font 14px. Focus: border #1e40af + ring 3px rgba(30,64,175,0.12).
- **Chips/Badges**: Radius 9999px, surface-alt bg, text-secondary, padding 4px 12px, font 12px. Active: primary bg con texto blanco.
- **Navigation**: Sticky top, bg blanca, 56px alto, border-bottom 1px. Links 14px weight 500, hover bg surface-alt.
- **Toggles**: Track surface-alt, thumb blanco. Checked: track #1e40af, thumb blanco. Transition 200ms.

## Spacing
- Base: 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px
- Section spacing: 32px mobile, 48px tablet, 80px desktop
- Container max width: 1280px with 24px horizontal padding
- Card grid gap: 20px

## Border Radius
- 8px: Tags, chips, checkboxes
- 12px: Buttons, inputs, selects
- 16px: Cards, panels, search bar
- 24px: Modales, hero cards
- 9999px: Avatares, status dots, pill badges

## Do's and Don'ts
- Do usar azul #1e40af para elementos interactivos y CTAs
- Do mantener superficies blancas y limpias
- Do usar Plus Jakarta Sans para consistencia
- Do mantener bordes sutiles (1px #e2e8f0)
- Do asegurar contraste suficiente en texto
- Don't usar gradientes decorativos — el sistema es plano y profesional
- Don't usar glow effects o sombras pesadas
- Don't usar colores saturados o llamativos
- Don't mezclar mas de un color primario
- Don't usar border-radius inferiores a 8px