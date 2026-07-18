# Design Tokens — Real Estate Property Landing

## Sistema de design

Sistema de design limpio y profesional para inmobiliaria. Azul profundo (#1e40af) como color principal que transmite confianza, estabilidad y profesionalidad. Fondo blanco con superficies claras (#f8fafc). Tipografia Plus Jakarta Sans moderna y geometrica. Radios suaves (12-24px). Sombras sutiles. La sensacion es de una inmobiliaria moderna y premium — confiable, profesional, con propiedades de calidad.

```css
:root {
  /* === Colors === */
  --color-primary: #1e40af;
  --color-primary-hover: #1e3a8a;
  --color-secondary: #0891b2;
  --color-accent: #0ea5e9;
  --color-background: #ffffff;
  --color-background-alt: #f8fafc;
  --color-surface: #ffffff;
  --color-surface-alt: #f1f5f9;
  --color-border: #e2e8f0;
  --color-border-hover: #1e40af;
  --color-text: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #94a3b8;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* === Typography === */
  --font-sans: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
  --font-size-heading: clamp(2.25rem, 5vw, 4rem);
  --font-size-2xl: 1.5rem;
  --font-size-xl: 1.25rem;
  --font-size-lg: 1.125rem;
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-weight-bold: 700;
  --font-weight-semibold: 600;
  --font-weight-medium: 500;

  /* === Spacing === */
  --space-section: 80px;
  --space-element: 24px;
  --space-gap: 20px;

  /* === Border Radius === */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.05);
  --shadow-md: 0 4px 16px rgba(15, 23, 42, 0.08);
  --shadow-lg: 0 12px 32px rgba(15, 23, 42, 0.12);
  --shadow-glow: 0 0 40px rgba(30, 64, 175, 0.1);

  /* === Grid === */
  --grid-max-width: 1280px;
  --grid-gap: 20px;
  --grid-padding: 24px;
}
```