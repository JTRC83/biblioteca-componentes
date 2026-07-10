# Design Tokens — Agency Dark Landing

## Sistema de design

Sistema de design oscuro, bold y neón. Fondo negro puro con acentos violeta-magenta y glows neón. Tipografía geométrica (Space Grotesk) a gran escala. Glassmorphism sutil combinado con efectos glow agresivos. Grid asimétrico para servicios. El sistema prioriza impacto visual y contraste sobre sutileza.

```css
:root {
  /* === Colors === */
  --color-primary: #a855f7;
  --color-primary-hover: #9333ea;
  --color-primary-light: #d8b4fe;
  --color-secondary: #ec4899;
  --color-secondary-hover: #db2777;
  --color-tertiary: #6366f1;
  --color-gradient-start: #a855f7;
  --color-gradient-end: #ec4899;
  --color-gradient: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  --color-gradient-text: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #6366f1 100%);
  --color-background: #09090b;
  --color-background-alt: #0c0c0e;
  --color-surface: #18181c;
  --color-surface-hover: #1f1f24;
  --color-surface-glass: rgba(24, 24, 28, 0.5);
  --color-border: rgba(255, 255, 255, 0.06);
  --color-border-hover: rgba(168, 85, 247, 0.5);
  --color-text: #fafafa;
  --color-text-secondary: #a1a1aa;
  --color-text-muted: #71717a;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* === Neon Glow === */
  --glow-sm: 0 0 12px rgba(168, 85, 247, 0.4);
  --glow-md: 0 0 24px rgba(168, 85, 247, 0.5);
  --glow-lg: 0 0 48px rgba(168, 85, 247, 0.4);
  --glow-xl: 0 0 80px rgba(168, 85, 247, 0.3);
  --glow-pink-sm: 0 0 12px rgba(236, 72, 153, 0.4);
  --glow-pink-md: 0 0 24px rgba(236, 72, 153, 0.5);
  --glow-mixed: 0 0 40px rgba(168, 85, 247, 0.3), 0 0 60px rgba(236, 72, 153, 0.2);

  /* === Typography === */
  --font-sans: 'Space Grotesk', 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  --font-size-3xl: 3rem;
  --font-size-heading: clamp(2.5rem, 7vw, 6rem);
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 1.0;
  --line-height-snug: 1.2;
  --line-height-base: 1.5;
  --line-height-relaxed: 1.7;
  --letter-tight: -0.03em;
  --letter-normal: 0;
  --letter-wide: 0.08em;
  --letter-wider: 0.12em;

  /* === Spacing === */
  --space-section: 96px;
  --space-section-lg: 140px;
  --space-element: 24px;
  --space-gap: 16px;
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
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 32px 80px rgba(0, 0, 0, 0.6);

  /* === Transitions === */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
  --transition-glow: 400ms ease;

  /* === Grid === */
  --grid-max-width: 1280px;
  --grid-columns: 12;
  --grid-gap: 24px;
  --grid-padding: 20px;
  --grid-padding-desktop: 48px;

  /* === Glassmorphism === */
  --glass-blur: 16px;
  --glass-bg: rgba(24, 24, 28, 0.5);
  --glass-border: 1px solid rgba(255, 255, 255, 0.06);
  --glass-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}
```