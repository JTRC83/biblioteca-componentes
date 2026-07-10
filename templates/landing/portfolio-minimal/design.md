# Design Tokens — Portfolio Minimal Landing

## Sistema de design

Sistema minimalista con tema claro, basado en contraste tipográfico y whitespace. Paleta casi monocroma (negro sobre blanco roto). Sin gradientes, sin colores de marca. La jerarquía visual viene del tamaño y peso tipográfico, no del color. Bordes y separadores ultra sutiles. El sistema prioriza legibilidad, aire y atemporalidad.

```css
:root {
  /* === Colors === */
  --color-primary: #1a1a1a;
  --color-primary-hover: #000000;
  --color-secondary: #525252;
  --color-background: #fafafa;
  --color-background-alt: #f4f4f5;
  --color-surface: #ffffff;
  --color-surface-hover: #f8f8f8;
  --color-border: #e5e5e5;
  --color-border-strong: #d4d4d4;
  --color-text: #1a1a1a;
  --color-text-secondary: #737373;
  --color-text-muted: #a3a3a3;
  --color-accent: #1a1a1a;
  --color-success: #16a34a;
  --color-warning: #ca8a04;
  --color-error: #dc2626;

  /* === Typography === */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --font-serif: 'Georgia', 'Times New Roman', serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.375rem;
  --font-size-2xl: 1.75rem;
  --font-size-3xl: 2.5rem;
  --font-size-heading: clamp(2.5rem, 6vw, 5rem);
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 1.1;
  --line-height-snug: 1.3;
  --line-height-base: 1.7;
  --line-height-relaxed: 1.85;
  --letter-tight: 0;
  --letter-normal: 0;
  --letter-wide: 0.1em;
  --letter-wider: 0.15em;

  /* === Spacing === */
  --space-section: 100px;
  --space-section-lg: 140px;
  --space-element: 32px;
  --space-gap: 24px;
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;

  /* === Border Radius === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 20px;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-none: none;
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.1);

  /* === Transitions === */
  --transition-fast: 150ms ease;
  --transition: 300ms ease;
  --transition-slow: 500ms ease;

  /* === Grid === */
  --grid-max-width: 1200px;
  --grid-max-width-text: 960px;
  --grid-max-width-narrow: 640px;
  --grid-max-width-form: 480px;
  --grid-columns: 12;
  --grid-gap: 24px;
  --grid-padding: 24px;
  --grid-padding-desktop: 48px;
  --grid-gap-projects: 32px;
}
```