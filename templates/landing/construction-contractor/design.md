# Design Tokens — Construction & Contractor Landing

## Sistema de design

Sistema de design robusto e industrial para empresa de construccion o contratista. Colores de seguridad y acero: naranja construccion (#ea580c) como primario, gris pizarra (#475569) como secundario. Tipografia Archivo (bold, industrial, geometrica) para titulos e Inter para body. Superficies blancas y gris claro con bordes definidos y sombras firmes que evocan materiales de construccion, hormigon y acero. La sensacion es solida, profesional, confiable e industrial.

```css
:root {
  /* === Colors === */
  --color-primary: #ea580c;
  --color-primary-hover: #c2410c;
  --color-secondary: #475569;
  --color-tertiary: #64748b;
  --color-accent: #f97316;
  --color-background: #ffffff;
  --color-background-alt: #f1f5f9;
  --color-surface: #f8fafc;
  --color-surface-hover: #f1f5f9;
  --color-border: #e2e8f0;
  --color-border-hover: #94a3b8;
  --color-text: #1c1917;
  --color-text-secondary: #57534e;
  --color-text-muted: #94a3b8;
  --color-success: #16a34a;
  --color-warning: #ea580c;
  --color-error: #dc2626;

  /* === Typography === */
  --font-display: 'Archivo', 'Inter', system-ui, sans-serif;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: clamp(1.75rem, 3vw, 2.25rem);
  --font-size-heading: clamp(2.5rem, 6vw, 5rem);
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-black: 800;
  --line-height-tight: 1.1;
  --line-height-base: 1.6;
  --line-height-relaxed: 1.75;

  /* === Spacing === */
  --space-section: 80px;
  --space-element: 24px;
  --space-gap: 20px;
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;

  /* === Border Radius === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-sm: 0 1px 3px rgba(28, 25, 23, 0.1);
  --shadow-md: 0 4px 16px rgba(28, 25, 23, 0.12);
  --shadow-lg: 0 12px 32px rgba(28, 25, 23, 0.15);
  --shadow-xl: 0 24px 48px rgba(28, 25, 23, 0.2);
  --shadow-orange: 0 8px 24px rgba(234, 88, 12, 0.3);

  /* === Transitions === */
  --transition-fast: 150ms ease;
  --transition: 250ms ease;
  --transition-slow: 400ms ease;

  /* === Grid === */
  --grid-max-width: 1200px;
  --grid-columns: 12;
  --grid-gap: 24px;
  --grid-padding: 24px;
}
```