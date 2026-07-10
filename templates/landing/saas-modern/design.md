# Design Tokens — SaaS Modern Landing

## Sistema de design

Sistema de design oscuro con glassmorphism y gradientes indigo-violeta. Tokens organizados en capas: color, tipografía, espaciado, radios, sombras, transiciones y grid. El sistema prioriza profundidad visual mediante superficies translucidas con blur y acentos gradient.

```css
:root {
  /* === Colors === */
  --color-primary: #6366f1;
  --color-primary-hover: #5558e0;
  --color-secondary: #8b5cf6;
  --color-tertiary: #a855f7;
  --color-gradient-start: #6366f1;
  --color-gradient-end: #8b5cf6;
  --color-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  --color-gradient-text: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
  --color-background: #0a0a0c;
  --color-background-alt: #0f0f12;
  --color-surface: #18181c;
  --color-surface-hover: #1f1f24;
  --color-surface-glass: rgba(24, 24, 28, 0.6);
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-hover: rgba(99, 102, 241, 0.4);
  --color-text: #f4f4f5;
  --color-text-secondary: #a1a1aa;
  --color-text-muted: #71717a;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* === Typography === */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: clamp(1.75rem, 3vw, 2.25rem);
  --font-size-heading: clamp(2rem, 5vw, 4rem);
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 1.2;
  --line-height-base: 1.6;
  --line-height-relaxed: 1.75;
  --letter-tight: -0.02em;
  --letter-normal: 0;

  /* === Spacing === */
  --space-section: 80px;
  --space-section-lg: 120px;
  --space-element: 24px;
  --space-gap: 16px;
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
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 24px 64px rgba(0, 0, 0, 0.6);
  --shadow-glow: 0 0 40px rgba(99, 102, 241, 0.15);
  --shadow-glow-strong: 0 0 60px rgba(99, 102, 241, 0.3);

  /* === Transitions === */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 400ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: 400ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* === Grid === */
  --grid-max-width: 1200px;
  --grid-columns: 12;
  --grid-gap: 24px;
  --grid-padding: 24px;
  --grid-padding-desktop: 48px;

  /* === Glassmorphism === */
  --glass-blur: 12px;
  --glass-bg: rgba(24, 24, 28, 0.6);
  --glass-border: 1px solid rgba(255, 255, 255, 0.08);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
```