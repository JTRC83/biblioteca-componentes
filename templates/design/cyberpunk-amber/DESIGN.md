# Cyberpunk Amber

## Overview
Sistema de design cyberpunk industrial con ambar dorado y rojo oxidado sobre negro carbon. La estetica es calida pero tecnologica, Bladerunner-esque: la luz dorada del ambar #ffb800 recorta formas angulares sobre un negro profundo, como los letreros luminosos de una ciudad futurista cubierta de polvo. A diferencia del neón cyber clasico (cyan frio), aqui el ambar aporta calidez industrial, como maquinaria antigua que sigue funcionando. Los grid patterns y scan lines anaden textura tecnologica, los bordes son angulares (radius 2-8px) y los glow shadows tintan el ambiente en oro. La tipografia Rajdhani — condensed, tecnica, futuristica — refuerza el caracter industrial. Para gaming, cybersecurity, industrial tech, energia, automocion y steampunk.

## Colors
- **Primary** (#ffb800): CTAs, links, elementos interactivos destacados, borders ambar — oro dorado
- **Primary Glow** (rgba(255, 184, 0, 0.4)): Glow shadow para hover y focus states
- **Secondary** (#ff6b35): Alertas, badges, acentos de contraste — naranja quemado / rojo oxidado
- **Secondary Glow** (rgba(255, 107, 53, 0.4)): Glow para elementos secondary
- **Tertiary** (#8b5a2b): Acentos puntuales, gradientes, detalles metalicos — bronce
- **Background** (#0a0a0a): Fondo principal — negro carbon
- **Background Alt** (#0f0d0a): Variacion sutil y calida para secciones alternas
- **Surface** (#161210): Superficie base de cards y paneles — negro amarronado
- **Surface Hover** (#1f1a14): Hover state de superficies
- **Border** (#2a2218): Bordes base de cards y divisores
- **Border Amber** (rgba(255, 184, 0, 0.3)): Borde ambar para hover y elementos destacados
- **Text Primary** (#f0e0c0): Texto principal, headings — blanco calido
- **Text Secondary** (#a09080): Descripciones, metadata, labels — gris amarronado
- **Text Muted** (#6a5d4a): Placeholders, timestamps, disabled — bronce apagado
- **Success** (#5fff8a): Confirmaciones, estados positivos — verde lima (poco frecuente)
- **Warning** (#ffb800): Advertencias — ambar (mismo que primary)
- **Error** (#ff3b35): Errores, acciones destructivas — rojo oxidado intenso

## Typography
- **Font Family**: Rajdhani (Inter fallback)
- **Code Font**: JetBrains Mono, ui-monospace, monospace

Rajdhani es condensed y tecnica, con un caracter industrial-futurista que encaja con la estetica cyberpunk ambar. Sus letras estrechas evocan letreros luminosos y paneles de maquinaria. Se usa en todos los pesos. Para codigo y elementos tecnicos (IDs, versiones, timestamps, lecturas de sensores) se usa JetBrains Mono.

Type scale:
- **Display**: clamp(2.5rem, 7vw, 5.5rem), weight 700, tracking -0.02em, line-height 1.05
- **Heading 2**: clamp(1.75rem, 4vw, 2.75rem), weight 700, tracking -0.015em, line-height 1.15
- **Heading 3**: 1.4rem, weight 600, line-height 1.2
- **Body Large**: 1.125rem, weight 400, line-height 1.5
- **Body**: 1rem (16px), weight 400, line-height 1.5
- **Small**: 0.875rem, weight 400, line-height 1.4
- **Caption**: 0.75rem, weight 500, line-height 1.3
- **Overline**: 0.6875rem, weight 700, uppercase, tracking 0.18em — para labels y eyebrows

## Elevation
El sistema usa glow shadows ambar en lugar de sombras tradicionales, mas un toque industrial con sombras oscuras para profundidad.
- **Card base**: Sin sombra, border 1px #2a2218. Hover: glow 0 0 20px rgba(255,184,0,0.15) + border ambar
- **Card featured**: Glow constante 0 0 30px rgba(255,184,0,0.1), border ambar
- **Button primary hover**: Glow 0 0 20px rgba(255,184,0,0.4)
- **Button secondary hover**: Glow 0 0 20px rgba(255,107,53,0.3)
- **Focus ring**: 0 0 0 2px rgba(255,184,0,0.25), siempre con tinte ambar
- **Modal**: Glow border 0 0 40px rgba(255,184,0,0.1) + surface bg, sombra 0 16px 48px rgba(0,0,0,0.8)
- **Dropdown**: 0 4px 24px rgba(0,0,0,0.85) + border ambar sutil

## Components
- **Buttons**: Primary usa fill ambar #ffb800 con texto negro carbon, radius 4px, padding 12px 28px, weight 700, uppercase, tracking 0.06em. Secondary usa surface bg con border 1px ambar y texto ambar. Ghost: solo texto ambar, hover bg surface-hover. Hover: glow shadow ambar. Sizes: sm 36px, md 42px, lg 48px.
- **Cards**: Surface #161210, border 1px #2a2218, radius 8px, overflow hidden. Hover: border ambar rgba(255,184,0,0.3) + glow 0 0 20px rgba(255,184,0,0.15). Featured: glow constante + border ambar. Scan line overlay sutil dentro de cards destacadas. Transition 200ms.
- **Inputs**: Surface bg, border 1px #2a2218, radius 4px, padding 12px 16px, font 14px. Focus: border ambar #ffb800 + glow 0 0 12px rgba(255,184,0,0.2). Placeholder: text-muted. Code-style inputs usan JetBrains Mono.
- **Chips/Badges**: Border 1px ambar, transparent bg, texto ambar, radius 2px, padding 4px 12px, font 11px, uppercase, weight 700, tracking 0.12em. Active: fill ambar con texto negro. Status chips: border + texto del color semantico.
- **Navigation**: Sticky top, surface bg con border-bottom ambar sutil, 60px alto. Links 14px weight 600, uppercase, hover texto ambar + glow texto. Logo con efecto glow.
- **Toggles**: Switch con track surface y border. Checked: track ambar con glow, thumb negro carbon. Transition 300ms.
- **Tooltips**: Surface bg, border 1px ambar, texto ambar, radius 2px, padding 8px 12px, font 12px. Aparece con fade + glow.
- **Loaders**: Spinners y barras con efecto ambar pulsante. Color primary con glow animation.

## Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px
- Component padding: small 8x12, medium 12x16, large 16x24
- Section spacing: 32px mobile, 48px tablet, 80px desktop
- Container max width: 1280px with 24px horizontal padding
- Card grid gap: 16-20px (densidad industrial)

## Border Radius
- 2px: Tags, chips, badges, inline code, tooltips, inputs pequenos
- 4px: Buttons, inputs, selects
- 8px: Cards, panels, search bar
- 12px: Modales, hero sections, featured cards
- 9999px: Status dots, pill badges, toggles

## Do's and Don'ts
- Do usar ambar #ffb800 como color principal de acento
- Do aplicar glow shadows ambar en hover y estados activos para dar calidez al diseno
- Do usar Rajdhani para todo, JetBrains Mono para codigo/tech
- Do mantener el fondo negro carbon (#0a0a0a) para que el ambar resalte con fuerza
- Do usar grid patterns y scan lines como textura de fondo sutil
- Do combinar ambar con naranja quemado (#ff6b35) para gradientes calidos industriales
- Don't usar mas de 2 colores calidos simultaneamente en la misma vista (ambar + naranja, no mas)
- Don't aplicar glow a elementos estaticos sin interaccion — reserva glow para hover/focus
- Don't usar border-radius mayores a 12px — el sistema es angular, industrial y tecnico
- Don't usar colores frios (cyan, azul) — la paleta es deliberadamente calida
- Don't usar texto ambar sobre fondo ambar — siempre texto claro calido sobre oscuro