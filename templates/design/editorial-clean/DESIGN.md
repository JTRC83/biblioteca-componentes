# Editorial Clean

## Overview
Sistema de design claro, minimalista y editorial. La estetica se basa en tipografia fuerte, generoso whitespace y superficies planas con bordes sutiles. Sin glassmorphism, sin gradientes decorativos, sin sombras pesadas. La jerarquia visual se logra mediante tamano tipografico, peso y contraste de color. La sensacion es profesional, confiable y editorial — como una revista de quality. Las cards son como marcos de galeria: blancas, bordes finos, mucho espacio interno.

## Colors
- **Primary** (#0a0a0a): Headings, CTAs principales, texto principal — near-black
- **Primary Hover** (#1a1a1a): Hover states sobre elementos primary
- **Secondary** (#6b6b6b): Descripciones, metadata, labels secundarios
- **Neutral** (#9c9c9c): Texto muted, placeholders, timestamps, disabled
- **Background** (#fafafa): Fondo de pagina — warm gray muy claro
- **Surface** (#ffffff): Cards, paneles, modales, nav backdrop
- **Surface Alt** (#f4f4f5): Secciones alternas, hover sutil
- **Border** (#e8e8ec): Bordes de cards, divisores, input borders
- **Border Strong** (#d4d4d8): Bordes mas visibles, focus states
- **Text Primary** (#0a0a0a): Headings, body text, labels principales
- **Text Secondary** (#6b6b6b): Descripciones, metadata
- **Text Muted** (#9c9c9c): Placeholders, timestamps, disabled
- **Success** (#10b981): Confirmaciones, estados positivos
- **Warning** (#f59e0b): Advertencias, estados pendientes
- **Error** (#ef4444): Errores, validacion, acciones destructivas

## Typography
- **Display Font**: General Sans — cargado desde Fontshare
- **Body Font**: DM Sans — cargado desde Google Fonts
- **Code Font**: JetBrains Mono — cargado desde Google Fonts

Display y headings usan General Sans en bold con tracking tight (-0.03em a -0.04em). Body y UI usan DM Sans en regular y medium. El contraste entre la fuente geometrica del display y la humanista del body crea una sensacion editorial refinada.

Type scale:
- **Display**: 72px, weight 700, tracking -0.04em, line-height 1.05
- **Headline**: 60px, weight 700, tracking -0.03em, line-height 1.1
- **Section heading**: 32px, weight 700, tracking -0.02em, line-height 1.2
- **Subhead**: 24px, weight 700, line-height 1.3
- **Body**: 15px, weight 400, line-height 1.7
- **Small**: 13px, weight 400, line-height 1.5
- **Caption**: 12px, weight 400, line-height 1.4
- **Overline**: 11px, weight 600, uppercase, tracking 0.1em

## Elevation
Este design system usa sombras minimas. Las cards descansan planas con un border 1px y ganan una sombra sutil en hover.
- **Card**: Sin sombra, border 1px #e8e8ec. Hover: 0 8px 30px rgba(0,0,0,0.08) + lift -2px
- **Button primary**: Sin sombra. Hover: sin sombra adicional, solo cambio de color
- **Focus ring**: 0 0 0 3px rgba(10,10,10,0.08), nunca usar sombra para focus
- **Dropdown/popover**: 0 4px 16px rgba(0,0,0,0.08)
- **Modal**: 0 24px 64px rgba(0,0,0,0.12)
- **Nav**: Sin sombra, usa border-bottom 1px #e8e8ec para separacion

## Components
- **Buttons**: Primary usa fill near-black (#0a0a0a) con texto blanco, radius 6px, padding 10px 20px, weight 600, font 14px. Secondary usa transparent bg con border 1px #d4d4d8, mismo radius. Ghost sin border ni bg, solo cambio de color en hover. Destructive usa texto error con border error. Hover: primary se aclara a #1a1a1a, secondary bg surface-alt. Sizes: small 32px, medium 38px, large 44px.
- **Cards**: Surface blanca, border 1px #e8e8ec, radius 12px, overflow hidden. Padding 24px o 32px para featured. Hover: sombra sutil + lift -2px. Transition 200ms ease.
- **Inputs**: Border 1px #e8e8ec, surface bg, radius 6px, padding 10px 14px, font 14px. Focus: border #0a0a0a + ring 3px rgba(10,10,10,0.08). Error: border #ef4444. Placeholder usa text-muted.
- **Chips/Badges**: Rounded-full, surface-alt bg, text-secondary, padding 4px 12px, font 12px. Active: near-black bg con texto blanco. Status chips usan semantic colors suaves.
- **Lists**: Filas apiladas con divisores 1px #e8e8ec. Cada fila: flex space-between, padding 12px 16px. Hover: bg surface-alt.
- **Checkboxes**: 20px, border 1px #d4d4d8, radius 4px. Checked: bg near-black, checkmark blanco.
- **Navigation**: Sticky top, surface blanca, 56px alto, border-bottom 1px #e8e8ec. Logo left, links center (desktop) o hamburger (mobile), avatar right. Links 14px weight 500, hover bg surface-alt.
- **Search**: Barra rounded-xl con icono lupa y badge ⌘K. Border 1px #e8e8ec, surface bg.

## Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px
- Component padding: small 8x12, medium 10x16, large 12x24
- Section spacing: 32px mobile, 48px tablet, 96px desktop
- Container max width: 1280px with 24px horizontal padding
- Card grid gap: 20-24px

## Border Radius
- 4px: Tags, chips, badges, inline code, checkboxes
- 6px: Buttons, inputs, selects
- 8px: Metadata cards, dropdowns, panels
- 12px: Kit preview cards, search bar, featured sections
- 16px: Modales, hero cards
- 9999px: Avatares, status dots, pill badges

## Do's and Don'ts
- Do usar near-black (#0a0a0a) solo para texto y CTAs principales
- Do mantener la unidad de spacing 4px en todo
- Do usar General Sans para headings y DM Sans para body — nunca intercambiarlos
- Do mantener cards con border 12px y buttons/inputs con 6px — no mezclar estos valores
- Do asegurar contraste suficiente en modo claro
- Don't usar negro puro (#000000) o blanco puro (#ffffff) para texto — usar la paleta definida
- Don't anadir gradientes decorativos o ilustraciones — el diseno es minimalista
- Don't usar sombras en elementos estaticos — reservar sombras para hover y focus
- Don't usar mas de dos pesos de fuente en una misma vista
- Don't colocar mas de un boton primary (filled near-black) en la misma seccion