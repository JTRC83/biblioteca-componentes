# Design Tokens — Podcast & Media Landing

## Sistema de design

Sistema de design oscuro y audio-centric para podcast, show o plataforma de streaming. Gradiente violeta-rosa (#8b5cf6 → #ec4899) como marca de audio moderno. Fondo casi negro (#0a0a0c) con superficies oscuras (#15151a) y acentos gradient. Tipografia geometrica bold (Space Grotesk) para headings. La sensacion es de estudio nocturno, onda sonora y fluidez — como la pagina de un podcast premium o plataforma de streaming de audio. Glow shadows violeta, bordes con tinte gradient, reproductor como protagonista. Espaciado generoso, tipografia grande, ambiente inmersivo.

```css
:root {
  /* === Colors === */
  --color-primary: #8b5cf6;
  --color-primary-hover: #7c3aed;
  --color-secondary: #ec4899;
  --color-gradient: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  --color-gradient-text: linear-gradient(135deg, #a78bfa 0%, #ec4899 50%, #f43f5e 100%);
  --color-background: #0a0a0c;
  --color-background-alt: #101015;
  --color-surface: #15151a;
  --color-surface-hover: #1d1d24;
  --color-border: #27272f;
  --color-border-hover: rgba(139, 92, 246, 0.4);
  --color-text: #f4f4f5;
  --color-text-secondary: #a1a1aa;
  --color-text-muted: #71717a;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* === Typography === */
  --font-display: 'Space Grotesk', 'Inter', sans-serif;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-size-heading: clamp(2.5rem, 7vw, 5.5rem);
  --font-size-2xl: 2rem;
  --font-size-xl: 1.5rem;
  --font-size-lg: 1.125rem;
  --font-size-base: 1rem;
  --font-weight-bold: 700;
  --font-weight-medium: 500;

  /* === Spacing === */
  --space-section: 80px;
  --space-element: 24px;
  --space-gap: 16px;

  /* === Border Radius === */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-glow: 0 0 40px rgba(139, 92, 246, 0.25);
  --shadow-glow-pink: 0 0 40px rgba(236, 72, 153, 0.2);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.6);

  /* === Grid === */
  --grid-max-width: 1280px;
  --grid-gap: 16px;
  --grid-padding: 24px;
}
```