# Design Tokens — Events & Conference Landing

## Sistema de design

Sistema de design oscuro y vibrante para eventos y conferencias. Gradiente violeta-magenta (#7c3aed → #ec4899) como marca. Fondo oscuro (#0f0f12) con superficies oscuras y acentos gradient. Tipografia geometrica bold (Space Grotesk). La sensacion es de anticipacion y emocion — como la pagina de un festival o conferencia tech de primer nivel. Countdown timer, speakers destacados, gradientes en CTAs y bordes.

```css
:root {
  /* === Colors === */
  --color-primary: #7c3aed;
  --color-primary-hover: #6d28d9;
  --color-secondary: #ec4899;
  --color-gradient: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
  --color-gradient-text: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f43f5e 100%);
  --color-background: #0f0f12;
  --color-background-alt: #15151a;
  --color-surface: #1a1a20;
  --color-surface-hover: #232329;
  --color-border: #2c2c34;
  --color-border-hover: rgba(124, 58, 237, 0.4);
  --color-text: #fafafa;
  --color-text-secondary: #a1a1aa;
  --color-text-muted: #71717a;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* === Typography === */
  --font-display: 'Space Grotesk', 'Inter', sans-serif;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-size-heading: clamp(2.5rem, 7vw, 6rem);
  --font-size-2xl: 2rem;
  --font-size-xl: 1.5rem;
  --font-size-lg: 1.125rem;
  --font-size-base: 1rem;
  --font-weight-bold: 700;
  --font-weight-medium: 500;

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
  --shadow-glow: 0 0 40px rgba(124, 58, 237, 0.2);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.5);

  /* === Grid === */
  --grid-max-width: 1280px;
  --grid-gap: 20px;
  --grid-padding: 24px;
}
```