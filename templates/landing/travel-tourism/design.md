# Design Tokens — Travel & Tourism Landing

## Sistema de design

Sistema de design vibrante y aventurero para agencia de viajes o turismo. Colores teal (#0891b2, oceano y destinos) y naranja (#f97316, atardecer y aventura) que evocan escapadas, naturaleza y discovery. Tipografia moderna sans-serif (Plus Jakarta Sans) para titulos y body, con sensacion limpia y contemporanea. Las superficies son blancas y suaves (#f8fafc) con sombras suaves que recuerdan a nubes y horizontes. La sensacion es invitadora, aventurera, moderna y llena de energia.

```css
:root {
  /* === Colors === */
  --color-primary: #0891b2;
  --color-primary-hover: #0e7490;
  --color-secondary: #f97316;
  --color-secondary-hover: #ea580c;
  --color-tertiary: #06b6d4;
  --color-accent: #fb923c;
  --color-background: #ffffff;
  --color-background-alt: #f8fafc;
  --color-surface: #f8fafc;
  --color-surface-hover: #f1f5f9;
  --color-border: #e2e8f0;
  --color-border-hover: #0891b2;
  --color-text: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #94a3b8;
  --color-success: #16a34a;
  --color-warning: #f97316;
  --color-error: #dc2626;

  /* === Typography === */
  --font-display: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
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
  --font-weight-extrabold: 800;
  --line-height-tight: 1.2;
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
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.08);
  --shadow-md: 0 4px 16px rgba(15, 23, 42, 0.1);
  --shadow-lg: 0 12px 32px rgba(15, 23, 42, 0.12);
  --shadow-xl: 0 24px 48px rgba(15, 23, 42, 0.18);
  --shadow-teal: 0 12px 32px rgba(8, 145, 178, 0.25);
  --shadow-orange: 0 12px 32px rgba(249, 115, 22, 0.25);

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