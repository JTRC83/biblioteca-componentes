# Design Tokens — Legal & Consulting Landing

## Sistema de design

Sistema de design conservador, profesional y autoritario para despacho legal o consultoria. Azul marino (#1e3a5f) como color principal que evoca confianza, autoridad, tradicion y solidez juridica. Acento teal (#0891b2) para interacciones y highlights sin restar seriedad. Fondo blanco (#ffffff) con superficies claras (#f8fafc) y bordes sutiles. Tipografia Lora serif para titulos — aporta peso, elegancia y tradicion; Inter para body y elementos funcionales. Radios conservadores (4-16px) que transmiten formalidad sin ser rigidos. Sombras minimas y sutiles. La sensacion es de un bufete establecido: serio, confiable, elegante y corporativo.

```css
:root {
  /* === Colors === */
  --color-primary: #1e3a5f;
  --color-primary-hover: #15293f;
  --color-secondary: #0891b2;
  --color-accent: #0e7490;
  --color-background: #ffffff;
  --color-background-alt: #f8fafc;
  --color-surface: #f8fafc;
  --color-surface-hover: #f1f5f9;
  --color-border: #e2e8f0;
  --color-border-hover: #1e3a5f;
  --color-text: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #94a3b8;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* === Typography === */
  --font-serif: 'Lora', 'Inter', system-ui, serif;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-size-heading: clamp(2.25rem, 5vw, 4rem);
  --font-size-2xl: 1.5rem;
  --font-size-xl: 1.25rem;
  --font-size-lg: 1.125rem;
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-weight-bold: 700;
  --font-weight-semibold: 600;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --line-height-base: 1.7;

  /* === Spacing === */
  --space-section: 96px;
  --space-element: 24px;
  --space-gap: 20px;

  /* === Border Radius === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.06);
  --shadow-md: 0 4px 16px rgba(15, 23, 42, 0.08);
  --shadow-lg: 0 12px 32px rgba(30, 58, 95, 0.1);
  --shadow-glow: 0 0 40px rgba(8, 145, 178, 0.08);

  /* === Grid === */
  --grid-max-width: 1200px;
  --grid-gap: 20px;
  --grid-padding: 24px;
}
```