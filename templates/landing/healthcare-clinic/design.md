# Design Tokens — Healthcare Clinic Landing

## Sistema de design

Sistema de design limpio y tranquilizador para clinica. Azul-cyan (#0891b2) como color principal que evoca confianza, calma y profesionalidad medica. Fondo claro (#f8fafc) con superficies blancas y bordes sutiles. Tipografia Inter humanista y legible. Radios suaves (12-24px) para sensacion amigable. Sombras minimas. La sensacion es profesional, limpia, confiable y calmada — como un consultorio moderno.

```css
:root {
  /* === Colors === */
  --color-primary: #0891b2;
  --color-primary-hover: #0e7490;
  --color-secondary: #06b6d4;
  --color-accent: #22d3ee;
  --color-background: #f8fafc;
  --color-background-alt: #f1f5f9;
  --color-surface: #ffffff;
  --color-surface-hover: #f8fafc;
  --color-border: #e2e8f0;
  --color-border-hover: #0891b2;
  --color-text: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #94a3b8;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* === Typography === */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-size-heading: clamp(2rem, 5vw, 3.5rem);
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
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.05);
  --shadow-md: 0 4px 16px rgba(15, 23, 42, 0.08);
  --shadow-lg: 0 12px 32px rgba(15, 23, 42, 0.1);
  --shadow-glow: 0 0 40px rgba(8, 145, 178, 0.1);

  /* === Grid === */
  --grid-max-width: 1200px;
  --grid-gap: 20px;
  --grid-padding: 24px;
}
```