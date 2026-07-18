# Design Tokens — Gym & Fitness Landing

## Sistema de design

Sistema de design oscuro y energetico para gimnasio. Verde neón (#00ff88) como color principal para evocar energia, vitalidad y movimiento. Fondo casi negro con acentos neón y tipografia bold condensada (Bebas Neue). Las superficies son oscuras con borders neón sutiles. La sensacion es intensa, motivadora y deportiva — como una sesion de entrenamiento nocturno.

```css
:root {
  /* === Colors === */
  --color-primary: #00ff88;
  --color-primary-hover: #00cc6a;
  --color-primary-glow: rgba(0, 255, 136, 0.4);
  --color-secondary: #ff2a00;
  --color-secondary-glow: rgba(255, 42, 0, 0.4);
  --color-background: #0a0a0c;
  --color-background-alt: #0f0f12;
  --color-surface: #15151a;
  --color-surface-hover: #1f1f24;
  --color-border: #1a1a20;
  --color-border-neon: rgba(0, 255, 136, 0.3);
  --color-text: #f0f0f0;
  --color-text-secondary: #8a8a8f;
  --color-text-muted: #5a5a5f;
  --color-success: #00ff88;
  --color-warning: #ffaa00;
  --color-error: #ff2a00;

  /* === Typography === */
  --font-display: 'Bebas Neue', 'Inter', sans-serif;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-size-heading: clamp(3rem, 8vw, 7rem);
  --font-size-2xl: 2rem;
  --font-size-xl: 1.5rem;
  --font-size-lg: 1.125rem;
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-weight-bold: 700;
  --font-weight-medium: 500;
  --font-weight-normal: 400;

  /* === Spacing === */
  --space-section: 80px;
  --space-element: 24px;
  --space-gap: 16px;

  /* === Border Radius === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  /* === Shadows === */
  --shadow-glow: 0 0 30px rgba(0, 255, 136, 0.15);
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.6);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);

  /* === Grid === */
  --grid-max-width: 1280px;
  --grid-gap: 16px;
  --grid-padding: 24px;
}
```