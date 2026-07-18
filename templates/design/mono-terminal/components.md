# Componentes — Mono Terminal

Mapeo de elementos del design system a componentes de la biblioteca.

---

## Buttons

**Componentes recomendados:**
- `btn-settings` — Settings button (mantener estilo flat)
- `btn-refresh` — Refresh button (estilo terminal)
- `btn-generate` — Generate button (verde fosforo)
- `btn-edit` — Edit button (flat, verde)

**Adaptacion:**
- Border 1px #00ff41, bg transparent, texto verde
- Hover: bg rgba(0,255,65,0.1) + glow
- Active: bg #00ff41, texto negro
- Font 13px mono, uppercase, tracking 0.05em
- Sin gradientes ni glassmorphism

---

## Cards

**Componentes recomendados:**
- `card-terminal` — Terminal Card — EL componente perfecto, ya tiene estilo terminal
- `card-mac-code` — Mac Code Preview (simplificar a terminal mono)
- `card-crypto` — Crypto Price Card (dark, finance — adaptar a verde terminal)

**Adaptacion:**
- Surface #111111, border 1px #1a3a1a, radius 4px
- Hover: border #00ff41 + glow 0 0 12px rgba(0,255,65,0.1)
- Header con prompt `>` o `$`
- Padding 20px, font 13px mono

---

## Toggles & Switches

**Componentes recomendados:**
- `tg-led-toggle` — LED Toggle (verde fosforo, perfecto para terminal)
- `tg-on-off` — On Off Toggle (texto mono, verde)
- `btn-power-toggle` — Power Toggle (estilo terminal)

**Adaptacion:**
- Track: #111111 con border verde
- Thumb: verde cuadrado
- Checked: track verde, thumb negro
- Font mono, texto ON/OFF en verde

---

## Checkboxes & Radios

**Componentes recomendados:**
- `cb-neon-check` — Neon Check (cambiar a verde fosforo)
- `radio-card` — Radio card (border verde, estilo terminal)

**Adaptacion:**
- Checkbox: border 1px verde, radius 0
- Checked: bg verde #00ff41, checkmark negro
- Font mono, labels en uppercase

---

## Inputs & Forms

**Componentes recomendados:**
- `card-verification-code` — Verification Code (estilo terminal, mono)
- `loader-terminal-type` — Terminal Type Loader para loading state
- `input-underline` — Underline (cambiar a verde fosforo)

**Adaptacion:**
- BG #0a0a0a, border 1px #1a3a1a, radius 4px
- Focus: border #00ff41 + glow
- Font 13px mono, placeholder verde muted
- Labels con `// ` prefix

---

## Loaders

**Componentes recomendados:**
- `loader-terminal-type` — Terminal Type Loader — perfecto, ya es estilo terminal
- `loader-pcb-circuit` — PCB Circuit Loader — perfecto para devtools/hardware
- `loader-loading-bar` — Loading bar (verde fosforo)
- `loader-3d-cube` — 3D Processing Cube (dark, verde)

**Adaptacion:**
- Color verde #00ff41
- Sin gradientes coloridos
- Size 32px inline, 64px full-page

---

## Backgrounds & Patterns

**Componentes recomendados:**
- `pat-grid` — Neon Grid (cambiar a verde fosforo muy sutil)
- `pat-grid-fade` — Grid fade (verde muy oscuro)
- `pat-horiz-lines` — Horizontal lines (scan lines CRT)

**Adaptacion:**
- Grid en rgba(0,255,65,0.02) — muy sutil
- Scan lines: lineas cada 3px a opacidad 0.02
- Sin fondos animados coloridos