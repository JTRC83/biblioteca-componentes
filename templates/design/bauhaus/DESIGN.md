# Bauhaus

## Overview
Sistema de design inspirado en la escuela Bauhaus (1919-1933). La filosofia es radical: la forma sigue a la funcion. Formas geometricas primarias — circulo, cuadrado, triangulo — como elementos estructurales y decorativos. Colores primarios puros — rojo, azul, amarillo — como base cromatica. Tipografia bold y geometrica (Archivo Black) que comunica claridad y fuerza. Sin ornamento innecesario, sin border-radius (precision geometrica absoluta), sombras offset solidas sin blur. Cada elemento es funcional, cada color tiene proposito, cada forma es intencional. Para marcas de arquitectura, arte, diseno, museos, galerias y proyectos que celebran la abstraccion geometrica y la funcionalidad radical. Atemporal y revolucionario.

## Colors
- **Primary** (#e63946): Rojo Bauhaus — headings accent, CTAs, formas decorativas, acentos criticos — rojo primario puro
- **Secondary** (#1d3557): Azul profundo — texto principal, backgrounds alternos, bordes — azul primario profundo
- **Accent** (#fcbf49): Amarillo Bauhaus — highlights, badges, formas decorativas, seleccion — amarillo primario
- **Background** (#f1faee): Crema claro — fondo principal, calido y neutro
- **Background Alt** (#e8eef0): Secciones alternas, hover sutil
- **Surface** (#ffffff): Cards, paneles, inputs — blanco puro
- **Surface Inverse** (#1d3557): Cards invertidas, secciones dark — azul profundo
- **Text Primary** (#1d3557): Headings, body text, labels — azul profundo
- **Text Secondary** (#457b9d): Descripciones, metadata, captions
- **Text Inverse** (#f1faee): Texto sobre fondos oscuros (azul)
- **Text Muted** (#a8a8a8): Placeholders, disabled
- **Border** (#1d3557): Borders principales 2-3px — azul profundo (no negro)
- **Success** (#2a9d8f): Verde sutil — semantico
- **Warning** (#fcbf49): Mismo que accent — amarillo
- **Error** (#e63946): Mismo que primary — rojo

## Typography
- **Font Family**: Archivo Black (Inter fallback, system-ui) — bold geometrica sans-serif
- **Body Font**: Inter para body text (mejor legibilidad en parrafos largos)
- **Code Font**: Inter (misma fuente body)

Archivo Black es geometrica, bold y estructural — cada letra es una forma. Se usa en peso 400 (Black) para todos los headings. Inter se usa en pesos 400 y 600 para body text, captions y labels. La combinacion crea contraste estructural: headings bold geometricos vs body text limpio y legible. El tracking es tight en display (-0.02em) para densidad visual.

Type scale:
- **Display**: clamp(2.5rem, 7vw, 6rem), weight 400 (Archivo Black), tracking -0.02em, line-height 0.95
- **Heading 2**: clamp(1.75rem, 5vw, 3.5rem), weight 400 (Archivo Black), line-height 1.0
- **Heading 3**: 1.5rem, weight 400 (Archivo Black), line-height 1.1
- **Body Large**: 1.25rem, weight 400 (Inter), line-height 1.4
- **Body**: 1rem (16px), weight 400 (Inter), line-height 1.4
- **Small**: 0.875rem, weight 400 (Inter), line-height 1.3
- **Caption**: 0.75rem, weight 600, uppercase, tracking 0.05em
- **Overline**: 0.6875rem, weight 600, uppercase, tracking 0.1em

## Elevation
Bauhaus NO usa sombras suaves ni gradientes. La profundidad se logra mediante:
- **Offset shadows**: box-shadow: 4px 4px 0 [color] (sin blur, offset solido en primary o accent color)
- **Geometric borders**: 2-3px solid #1d3557 delimitando elementos
- **Color blocking**: Planos de color solido (rojo, azul, amarillo) que crean profundidad por contraste
- **Layering**: Formas geometricas (circulos, triangulos, cuadrados) solapadas como decoracion estructural
- **Hover**: border-color cambia a primary (#e63946) O box-shadow offset aumenta a 6px
- **Focus**: outline 3px solid #fcbf49 (amarillo), nunca sombras suaves
- **Active**: box-shadow offset se reduce a 2px (efecto pressed)

El color de la shadow puede ser primary (rojo), secondary (azul) o accent (amarillo) dependiendo del contexto — las shadows son elementos estructurales, no sutiles.

## Components
- **Buttons**: Primary fill rojo #e63946 con texto crema, radius 0, border 2px solid #1d3557, padding 12px 24px, weight 400 (Archivo Black), font 14px, uppercase, tracking 0.05em. Box-shadow 4px 4px 0 #1d3557. Hover: offset aumenta a 6px. Active: offset reduce a 0 (pressed). Secondary: bg blanco, border 2px azul, texto azul. Inverse: bg azul, texto crema, border azul. Accent: bg amarillo, texto azul, border azul.
- **Cards**: Surface blanca, border 2-3px solid #1d3557, radius 0, overflow hidden. Box-shadow 4px 4px 0 [color primario]. Hover: shadow offset aumenta a 6px + border-color mantiene. Variantes de color: rojo (shadow rojo), azul (shadow azul), amarillo (shadow amarillo). Inverse variant: bg azul, border crema, texto crema. Decoracion geometrica opcional: circulo, triangulo o cuadrado en una esquina como elemento estructural.
- **Inputs**: Bg blanco, border 2px solid #1d3557, radius 0, padding 12px 16px, font Inter 14px. Focus: border 3px #fcbf49 + outline 2px #fcbf49. Placeholder: text-muted. Sin sombras en estado base.
- **Chips/Badges**: Border 2px solid #1d3557, radius 0, padding 4px 12px, font 11px, weight 600, uppercase, tracking 0.1em. Active: bg azul, texto crema. Accent: border amarillo, bg amarillo, texto azul. Primary: bg rojo, texto crema, border rojo.
- **Lists**: Filas con border-bottom 2px #1d3557. Cada fila: flex, padding 16px 20px. Hover: bg #e8eef0. Sin divisores sutiles — borders prominentes y geometricos.
- **Checkboxes**: 24px, border 2px solid #1d3557, radius 0. Checked: bg azul, checkmark crema. Hover: border-color rojo. Focus: outline 3px amarillo.
- **Radios**: Circulo 24px (unica excepcion al radius 0 — los radios son circulos por definicion), border 2px solid #1d3557. Selected: bg azul, dot crema en centro. El circulo es una forma Bauhaus primaria — legitimo usarlo aqui.
- **Navigation**: Sticky top, bg blanco, border-bottom 3px #1d3557, 64px alto. Links 14px weight 400 (Archivo Black), uppercase, hover bg azul + texto crema (inverse). Logo en bold geometrico.
- **Toggles**: Track blanco con border 2px azul, thumb cuadrado azul (sin border-radius). Checked: track azul, thumb crema. Transition 150ms — Bauhaus permite movimiento funcional.

## Spacing
- Base unit: 8px
- Scale: 8, 16, 24, 32, 40, 48, 64, 80, 96, 128px
- Component padding: small 12x16, medium 16x24, large 24x32
- Section spacing: 48px mobile, 64px tablet, 80px desktop
- Container max width: 1280px with 32px horizontal padding
- Card grid gap: 24px con offset shadows (las shadows necesitan espacio)
- Layout: grid estructurado y alineado — Bauhaus ama el orden y la estructura geometrica

## Border Radius
- **0px para TODO**: La precision geometrica del Bauhaus no redondea esquinas. Todos los elementos tienen radius 0.
- **Excepciones**: Avatares circulares (9999px) — el circulo es forma Bauhaus primaria. Radios (circulares) — legitimos por definicion. Decoraciones geometricas pueden ser circulos, triangulos o cuadrados puros.

## Do's and Don'ts
- Do usar border-radius 0 en todo — precision geometrica absoluta
- Do usar los tres colores primarios (rojo, azul, amarillo) como estructura cromatica
- Do usar Archivo Black para headings — bold y geometrico
- Do incorporar formas geometricas primarias (circulo, cuadrado, triangulo) como decoracion estructural
- Do usar offset shadows solidas (4px 4px 0) en colores primarios
- Do mantener un grid estructurado y alineado — orden Bauhaus
- Do usar borders de 2-3px en azul profundo (#1d3557) para delimitar
- Do crear contraste fuerte entre headings bold y body text limpio (Inter)
- Don't usar border-radius excepto circulos legitimos (radios, avatares, decoraciones)
- Don't usar gradientes, glassmorphism o sombras con blur
- Don't usar mas de los tres colores primarios + neutros — limitacion Bauhaus
- Don't usar animaciones largas o transitions suaves — max 150ms, solo movimientos funcionales
- Don't usar ornamento decorativo sin funcion — cada forma debe tener proposito
- Don't usar mas de 2 fuentes (Archivo Black + Inter)
- Don't usar hover effects sutiles — los cambios deben ser claros y geometricos