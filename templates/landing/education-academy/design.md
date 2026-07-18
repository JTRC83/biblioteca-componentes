# Design Tokens — Education & Academy Landing

## Sistema de design

Sistema de design claro y amigable para educacion. Violeta (#7c3aed) como color principal que transmite creatividad y aprendizaje. Cyan (#06b6d4) como secundario para acentos. Fondo claro (#fafafa) con superficies blancas. Tipografia DM Sans redondeada y legible. Radios suaves (12-24px). Sombras sutiles. La sensacion es de una plataforma educativa moderna, accesible y motivadora — como una buena academia online.

```css
:root {
  /* === Colors === */
  --color-primary: #7c3aed;
  --color-primary-hover: #6d28d9;
  --color-secondary: #06b6d4;
  --color-accent: #8b5cf6;
  --color-background: #fafafa;
  --color-background-alt: #f4f4f5;
  --color-surface: #ffffff;
  --color-surface-hover: #f8f8f9;
  --color-border: #e4e4e7;
  --color-border-hover: #7c3aed;
  --color-text: #18181b;
  --color-text-secondary: #52525b;
  --color-text-muted: #a1a1aa;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* === Typography === */
  --font-sans: 'DM Sans', 'Inter', system-ui, sans-serif;
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
  --shadow-sm: 0 1px 3px rgba(24, 24, 27, 0.05);
  --shadow-md: 0 4px 16px rgba(24, 24, 27, 0.08);
  --shadow-lg: 0 12px 32px rgba(24, 24, 27, 0.1);
  --shadow-glow: 0 0 40px rgba(124, 58, 237, 0.1);

  /* === Grid === */
  --grid-max-width: 1200px;
  --grid-gap: 20px;
  --grid-padding: 24px;
}
```