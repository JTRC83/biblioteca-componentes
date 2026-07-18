# Design Tokens — Restaurant & Cafe Landing

## Sistema de design

Sistema de design calido y apetitoso para restaurante o cafe. Colores tierra (terracota, ambar, crema) que evocan calidez y comida. Tipografia editorial serif (Playfair Display) para titulos elegantes e Inter para body. Las superficies son blancas/crema con bordes sutiles y sombras suaves que recuerdan a manteles y porcelana. La sensacion es acogedora, elegante y apetitosa.

```css
:root {
  /* === Colors === */
  --color-primary: #c8553d;
  --color-primary-hover: #b04532;
  --color-secondary: #f4a261;
  --color-tertiary: #e76f51;
  --color-accent: #d4a373;
  --color-background: #faf6f0;
  --color-background-alt: #f0e9dd;
  --color-surface: #ffffff;
  --color-surface-hover: #f8f3ed;
  --color-border: #e8dfd2;
  --color-border-hover: #d4a373;
  --color-text: #2d2422;
  --color-text-secondary: #6b5d54;
  --color-text-muted: #9a8d83;
  --color-success: #5a8a4a;
  --color-warning: #e76f51;
  --color-error: #c8553d;

  /* === Typography === */
  --font-display: 'Playfair Display', Georgia, serif;
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
  --line-height-tight: 1.2;
  --line-height-base: 1.7;
  --line-height-relaxed: 1.8;

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
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-sm: 0 1px 3px rgba(45, 36, 34, 0.08);
  --shadow-md: 0 4px 16px rgba(45, 36, 34, 0.1);
  --shadow-lg: 0 12px 32px rgba(45, 36, 34, 0.15);
  --shadow-xl: 0 24px 48px rgba(45, 36, 34, 0.2);

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