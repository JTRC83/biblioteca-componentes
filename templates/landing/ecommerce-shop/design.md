# Design Tokens — E-commerce Shop Landing

## Sistema de design

Sistema de design retail con tema claro y paleta cálida (ambar + rojo). Orientado a producto: tarjetas de producto son el componente central. Espaciado moderado, esquinas redondeadas generosas, sombras suaves en hover. Los colores cálidos crean urgencia y accesibilidad típicas de e-commerce.

```css
:root {
  /* === Colors === */
  --color-primary: #f59e0b;
  --color-primary-hover: #d97706;
  --color-primary-light: #fef3c7;
  --color-secondary: #ef4444;
  --color-secondary-hover: #dc2626;
  --color-secondary-light: #fee2e2;
  --color-background: #ffffff;
  --color-background-alt: #fafafa;
  --color-surface: #f4f4f5;
  --color-surface-hover: #e4e4e7;
  --color-border: #e5e5e5;
  --color-border-strong: #d4d4d4;
  --color-text: #171717;
  --color-text-secondary: #525252;
  --color-text-muted: #a3a3a3;
  --color-success: #16a34a;
  --color-success-light: #dcfce7;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-gradient-warm: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%);
  --color-gradient-soft: linear-gradient(135deg, #fef3c7 0%, #fff7ed 100%);

  /* === Typography === */
  --font-sans: 'Poppins', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.375rem;
  --font-size-2xl: 1.75rem;
  --font-size-3xl: 2.25rem;
  --font-size-heading: clamp(2rem, 5vw, 3.5rem);
  --font-size-price: 1.5rem;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 1.2;
  --line-height-base: 1.6;
  --line-height-relaxed: 1.75;
  --letter-tight: -0.01em;
  --letter-normal: 0;
  --letter-wide: 0.05em;
  --letter-wider: 0.1em;

  /* === Spacing === */
  --space-section: 64px;
  --space-section-lg: 96px;
  --space-element: 24px;
  --space-gap: 20px;
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;

  /* === Border Radius === */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 16px 40px rgba(0, 0, 0, 0.15);
  --shadow-product: 0 8px 24px rgba(245, 158, 11, 0.15);

  /* === Transitions === */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 400ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: 400ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* === Grid === */
  --grid-max-width: 1280px;
  --grid-columns: 12;
  --grid-gap: 24px;
  --grid-padding: 16px;
  --grid-padding-desktop: 40px;
  --grid-products-columns: 4;
  --grid-products-gap: 20px;
}
```