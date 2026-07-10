# Design Tokens — Mobile App Landing

## Sistema de design

Sistema de design limpio con tema claro y acentos azules. Estilo app store profesional: confianza, claridad, legibilidad. Sombras suaves con tono azul. El mockup de teléfono es el elemento visual central. Espaciado generoso, esquinas redondeadas, transiciones suaves. El sistema prioriza profesionalismo y accesibilidad.

```css
:root {
  /* === Colors === */
  --color-primary: #3b82f6;
  --color-primary-hover: #2563eb;
  --color-primary-light: #dbeafe;
  --color-primary-dark: #1d4ed8;
  --color-secondary: #60a5fa;
  --color-secondary-light: #eff6ff;
  --color-background: #f8fafc;
  --color-background-alt: #f1f5f9;
  --color-surface: #ffffff;
  --color-surface-hover: #f8fafc;
  --color-border: #e2e8f0;
  --color-border-strong: #cbd5e1;
  --color-text: #0f172a;
  --color-text-secondary: #64748b;
  --color-text-muted: #94a3b8;
  --color-accent: #3b82f6;
  --color-success: #16a34a;
  --color-success-light: #dcfce7;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-gradient-blue: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
  --color-gradient-soft: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  --color-app-store: #000000;
  --color-google-play: #34a853;

  /* === Typography === */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.75rem;
  --font-size-3xl: 2.25rem;
  --font-size-heading: clamp(2rem, 5vw, 3.5rem);
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 1.15;
  --line-height-snug: 1.3;
  --line-height-base: 1.6;
  --line-height-relaxed: 1.75;
  --letter-tight: -0.02em;
  --letter-normal: 0;
  --letter-wide: 0.08em;

  /* === Spacing === */
  --space-section: 80px;
  --space-section-lg: 120px;
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
  --radius-lg: 20px;
  --radius-xl: 32px;
  --radius-full: 9999px;

  /* === Shadows === */
  --shadow-xs: 0 1px 2px rgba(59, 130, 246, 0.04);
  --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.06);
  --shadow-md: 0 4px 16px rgba(59, 130, 246, 0.1);
  --shadow-lg: 0 12px 32px rgba(59, 130, 246, 0.12);
  --shadow-xl: 0 24px 48px rgba(59, 130, 246, 0.15);
  --shadow-phone: 0 24px 64px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(226, 232, 240, 0.5);

  /* === Transitions === */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: 400ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* === Grid === */
  --grid-max-width: 1200px;
  --grid-columns: 12;
  --grid-gap: 24px;
  --grid-padding: 16px;
  --grid-padding-desktop: 40px;

  /* === Phone Mockup === */
  --phone-width: 280px;
  --phone-width-large: 340px;
  --phone-radius: 36px;
  --phone-border: 8px solid #0f172a;
  --phone-notch: 120px;
}
```