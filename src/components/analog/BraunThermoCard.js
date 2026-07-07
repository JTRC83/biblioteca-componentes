export default {
  id: 'analog-thermo-braun',
  name: 'Braun Thermo Card',
  category: 'analog',
  tags: ['analog', 'thermometer', 'braun', 'retro', 'industrial', 'css-only', 'interactive', 'temperature', 'beige', 'classic'],
  author: 'mamyapro123 (adaptado estilo Braun)',
  note: 'Original inspirado en el diseno de Dieter Rams para Braun. Paleta beige/calido.',
  html: `<div class="tb-thermo-card">
  <input
    type="radio"
    name="tb-temp"
    id="tb-t30"
    class="tb-thermo-state"
    checked=""
  />
  <input type="radio" name="tb-temp" id="tb-t40" class="tb-thermo-state" />
  <input type="radio" name="tb-temp" id="tb-t50" class="tb-thermo-state" />
  <input type="radio" name="tb-temp" id="tb-t60" class="tb-thermo-state" />
  <input type="radio" name="tb-temp" id="tb-t70" class="tb-thermo-state" />
  <input type="radio" name="tb-temp" id="tb-t80" class="tb-thermo-state" />
  <input type="radio" name="tb-temp" id="tb-t90" class="tb-thermo-state" />
  <input
    type="radio"
    name="tb-temp"
    id="tb-t100"
    class="tb-thermo-state"
  />
  <input
    type="radio"
    name="tb-temp"
    id="tb-t110"
    class="tb-thermo-state"
  />

  <div class="tb-thermo-ui">
    <div class="tb-thermo-body">
      <div class="tb-thermo-scale">
        <label for="tb-t110" class="tb-thermo-mark tb-mark-110">110 <span></span></label>
        <label for="tb-t100" class="tb-thermo-mark tb-mark-100">100 <span></span></label>
        <label for="tb-t90" class="tb-thermo-mark tb-mark-90">90 <span></span></label>
        <label for="tb-t80" class="tb-thermo-mark tb-mark-80">80 <span></span></label>
        <label for="tb-t70" class="tb-thermo-mark tb-mark-70">70 <span></span></label>
        <label for="tb-t60" class="tb-thermo-mark tb-mark-60">60 <span></span></label>
        <label for="tb-t50" class="tb-thermo-mark tb-mark-50">50 <span></span></label>
        <label for="tb-t40" class="tb-thermo-mark tb-mark-40">40 <span></span></label>
        <label for="tb-t30" class="tb-thermo-mark tb-mark-30">30 <span></span></label>
      </div>

      <div class="tb-thermo-track">
        <div class="tb-thermo-mercury"></div>
      </div>

      <div class="tb-thermo-click-zone">
        <label for="tb-t110" class="tb-thermo-hit tb-hit-110"></label>
        <label for="tb-t100" class="tb-thermo-hit tb-hit-100"></label>
        <label for="tb-t90" class="tb-thermo-hit tb-hit-90"></label>
        <label for="tb-t80" class="tb-thermo-hit tb-hit-80"></label>
        <label for="tb-t70" class="tb-thermo-hit tb-hit-70"></label>
        <label for="tb-t60" class="tb-thermo-hit tb-hit-60"></label>
        <label for="tb-t50" class="tb-thermo-hit tb-hit-50"></label>
        <label for="tb-t40" class="tb-thermo-hit tb-hit-40"></label>
        <label for="tb-t30" class="tb-thermo-hit tb-hit-30"></label>
      </div>

      <div class="tb-thermo-knob"></div>
    </div>

    <div class="tb-thermo-readout">
      <div class="tb-thermo-value"></div>
      <div class="tb-thermo-label">CURRENT</div>
      <div class="tb-thermo-status"></div>
    </div>
  </div>
</div>`,
  css: `
.tb-thermo-card {
  --tb-temp-color: #d4571f;
  --tb-temp-glow: rgba(212, 87, 31, 0.45);
  --tb-fill-height: 0%;
  --tb-knob-top: 216px;
  --tb-temp-text: "30\u00b0";
  --tb-status-text: "COLD";

  --tb-card-width: 214px;
  --tb-card-height: 405px;

  width: min(100%, var(--tb-card-width));
  height: var(--tb-card-height);
  max-width: 100%;

  position: relative;
  overflow: hidden;
  border-radius: 18px;
  padding: 28px 20px 24px;
  margin: 0 auto;
  box-sizing: border-box;

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  background: radial-gradient(
      circle at 50% 0%,
      rgba(255, 255, 255, 0.12),
      transparent 38%
    ),
    linear-gradient(145deg, #e8e0d0, #d4c8b8);

  box-shadow:
    0 20px 40px rgba(60, 50, 35, 0.25),
    inset 0 1px 1px rgba(255, 255, 255, 0.4),
    inset 0 -12px 20px rgba(120, 100, 70, 0.15);
}

.tb-thermo-card,
.tb-thermo-card .tb-thermo-ui,
.tb-thermo-card .tb-thermo-body,
.tb-thermo-card .tb-thermo-track,
.tb-thermo-card .tb-thermo-mercury,
.tb-thermo-card .tb-thermo-knob,
.tb-thermo-card .tb-thermo-click-zone,
.tb-thermo-card .tb-thermo-hit,
.tb-thermo-card .tb-thermo-scale,
.tb-thermo-card .tb-thermo-mark,
.tb-thermo-card .tb-thermo-mark span,
.tb-thermo-card .tb-thermo-readout,
.tb-thermo-card .tb-thermo-value,
.tb-thermo-card .tb-thermo-label,
.tb-thermo-card .tb-thermo-status,
.tb-thermo-card .tb-thermo-state {
  box-sizing: border-box;
}

.tb-thermo-card .tb-thermo-state {
  display: none;
}

.tb-thermo-card .tb-thermo-ui {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tb-thermo-card .tb-thermo-body {
  position: relative;
  width: 74px;
  height: 238px;
  border-radius: 999px;
  background: rgba(200, 185, 160, 0.5);
  border: 1px solid rgba(120, 100, 70, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow:
    0 8px 20px rgba(60, 50, 35, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
}

.tb-thermo-card .tb-thermo-body::before {
  content: "";
  position: absolute;
  inset: -14px;
  border-radius: inherit;
  background: radial-gradient(
    circle at 50% 60%,
    var(--tb-temp-color),
    transparent 65%
  );
  opacity: 0.22;
  filter: blur(16px);
  z-index: -1;
  transition: 0.35s ease;
}

.tb-thermo-card .tb-thermo-track {
  position: absolute;
  top: 22px;
  bottom: 22px;
  left: 50%;
  width: 22px;
  transform: translateX(-50%);
  border-radius: 999px;
  overflow: hidden;
  background: linear-gradient(180deg, #c4b8a4, #b0a390);
  box-shadow:
    inset 0 4px 8px rgba(80, 65, 45, 0.35),
    inset 0 -2px 4px rgba(255, 255, 255, 0.2);
}

.tb-thermo-card .tb-thermo-mercury {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: var(--tb-fill-height);
  border-radius: 999px;
  background: var(--tb-temp-color);
  box-shadow:
    0 0 12px var(--tb-temp-color),
    0 0 24px var(--tb-temp-glow),
    inset 0 -2px 4px rgba(255, 255, 255, 0.4);
  transition:
    height 0.42s cubic-bezier(0.19, 1, 0.22, 1),
    background 0.35s ease,
    box-shadow 0.35s ease;
}

.tb-thermo-card .tb-thermo-knob {
  position: absolute;
  left: 50%;
  top: var(--tb-knob-top);
  width: 36px;
  height: 36px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 8;
  background: radial-gradient(
      circle at 34% 28%,
      rgba(255, 255, 255, 0.3),
      transparent 32%
    ),
    linear-gradient(145deg, #d4c8b8, #b8a896);
  border: 1px solid rgba(120, 100, 70, 0.25);
  box-shadow:
    0 6px 14px rgba(60, 50, 35, 0.3),
    0 0 10px var(--tb-temp-glow),
    inset 0 2px 4px rgba(255, 255, 255, 0.3),
    inset 0 -3px 6px rgba(120, 100, 70, 0.2);
  transition:
    top 0.42s cubic-bezier(0.19, 1, 0.22, 1),
    box-shadow 0.35s ease;
}

.tb-thermo-card .tb-thermo-click-zone {
  position: absolute;
  top: 22px;
  left: 50%;
  width: 74px;
  height: 194px;
  transform: translateX(-50%);
  z-index: 12;
}

.tb-thermo-card .tb-thermo-hit {
  position: absolute;
  left: 50%;
  width: 74px;
  height: 24.25px;
  transform: translateX(-50%);
  cursor: pointer;
}

.tb-thermo-card .tb-hit-110 { top: -12.125px; }
.tb-thermo-card .tb-hit-100 { top: 12.125px; }
.tb-thermo-card .tb-hit-90 { top: 36.375px; }
.tb-thermo-card .tb-hit-80 { top: 60.625px; }
.tb-thermo-card .tb-hit-70 { top: 84.875px; }
.tb-thermo-card .tb-hit-60 { top: 109.125px; }
.tb-thermo-card .tb-hit-50 { top: 133.375px; }
.tb-thermo-card .tb-hit-40 { top: 157.625px; }
.tb-thermo-card .tb-hit-30 { top: 181.875px; }

.tb-thermo-card .tb-thermo-scale {
  position: absolute;
  top: 22px;
  left: -44px;
  width: 38px;
  height: 194px;
  pointer-events: none;
}

.tb-thermo-card .tb-thermo-mark {
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
  font-size: 8px;
  font-weight: 700;
  color: rgba(80, 65, 45, 0.8);
  pointer-events: auto;
  cursor: pointer;
}

.tb-thermo-card .tb-thermo-mark span {
  width: 10px;
  height: 2px;
  border-radius: 99px;
  background: rgba(80, 65, 45, 0.7);
}

.tb-thermo-card .tb-mark-110 { top: 0px; }
.tb-thermo-card .tb-mark-100 { top: 24.25px; }
.tb-thermo-card .tb-mark-90 { top: 48.5px; }
.tb-thermo-card .tb-mark-80 { top: 72.75px; }
.tb-thermo-card .tb-mark-70 { top: 97px; }
.tb-thermo-card .tb-mark-60 { top: 121.25px; }
.tb-thermo-card .tb-mark-50 { top: 145.5px; }
.tb-thermo-card .tb-mark-40 { top: 169.75px; }
.tb-thermo-card .tb-mark-30 { top: 194px; }

.tb-thermo-card .tb-thermo-readout {
  margin-top: 22px;
  text-align: center;
}

.tb-thermo-card .tb-thermo-value {
  font-size: 2.1rem;
  font-weight: 800;
  line-height: 1;
  color: #5a4a35;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.tb-thermo-card .tb-thermo-value::after {
  content: var(--tb-temp-text);
}

.tb-thermo-card .tb-thermo-label {
  margin-top: 10px;
  font-size: 0.52rem;
  font-weight: 700;
  letter-spacing: 0.38em;
  color: rgba(120, 100, 70, 0.6);
}

.tb-thermo-card .tb-thermo-status {
  margin-top: 8px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: var(--tb-temp-color);
}

.tb-thermo-card .tb-thermo-status::after {
  content: var(--tb-status-text);
}

/* STATES - Braun color palette (warm, muted tones, Dieter Rams style) */
.tb-thermo-card #tb-t30:checked ~ .tb-thermo-ui {
  --tb-temp-color: #2a8aaa;
  --tb-temp-glow: rgba(42, 138, 170, 0.4);
  --tb-fill-height: 0%;
  --tb-knob-top: 216px;
  --tb-temp-text: "30\u00b0";
  --tb-status-text: "COLD";
}

.tb-thermo-card #tb-t40:checked ~ .tb-thermo-ui {
  --tb-temp-color: #2a8aaa;
  --tb-temp-glow: rgba(42, 138, 170, 0.4);
  --tb-fill-height: 12.5%;
  --tb-knob-top: 191.75px;
  --tb-temp-text: "40\u00b0";
  --tb-status-text: "COLD";
}

.tb-thermo-card #tb-t50:checked ~ .tb-thermo-ui {
  --tb-temp-color: #3a9aaa;
  --tb-temp-glow: rgba(58, 154, 170, 0.4);
  --tb-fill-height: 25%;
  --tb-knob-top: 167.5px;
  --tb-temp-text: "50\u00b0";
  --tb-status-text: "COOL";
}

.tb-thermo-card #tb-t60:checked ~ .tb-thermo-ui {
  --tb-temp-color: #8a9a3a;
  --tb-temp-glow: rgba(138, 154, 58, 0.4);
  --tb-fill-height: 37.5%;
  --tb-knob-top: 143.25px;
  --tb-temp-text: "60\u00b0";
  --tb-status-text: "MILD";
}

.tb-thermo-card #tb-t70:checked ~ .tb-thermo-ui {
  --tb-temp-color: #c4a030;
  --tb-temp-glow: rgba(196, 160, 48, 0.4);
  --tb-fill-height: 50%;
  --tb-knob-top: 119px;
  --tb-temp-text: "70\u00b0";
  --tb-status-text: "MEDIUM";
}

.tb-thermo-card #tb-t80:checked ~ .tb-thermo-ui {
  --tb-temp-color: #d4881f;
  --tb-temp-glow: rgba(212, 136, 31, 0.45);
  --tb-fill-height: 62.5%;
  --tb-knob-top: 94.75px;
  --tb-temp-text: "80\u00b0";
  --tb-status-text: "WARM";
}

.tb-thermo-card #tb-t90:checked ~ .tb-thermo-ui {
  --tb-temp-color: #c4571f;
  --tb-temp-glow: rgba(196, 87, 31, 0.5);
  --tb-fill-height: 75%;
  --tb-knob-top: 70.5px;
  --tb-temp-text: "90\u00b0";
  --tb-status-text: "HOT";
}

.tb-thermo-card #tb-t100:checked ~ .tb-thermo-ui {
  --tb-temp-color: #b03020;
  --tb-temp-glow: rgba(176, 48, 32, 0.5);
  --tb-fill-height: 87.5%;
  --tb-knob-top: 46.25px;
  --tb-temp-text: "100\u00b0";
  --tb-status-text: "HOT";
}

.tb-thermo-card #tb-t110:checked ~ .tb-thermo-ui {
  --tb-temp-color: #a02010;
  --tb-temp-glow: rgba(160, 32, 16, 0.55);
  --tb-fill-height: 100%;
  --tb-knob-top: 22px;
  --tb-temp-text: "110\u00b0";
  --tb-status-text: "VERY HOT";
}

@media screen and (max-width: 480px) {
  .tb-thermo-card {
    --tb-card-width: 190px;
    --tb-card-height: 390px;
    padding: 24px 16px 22px;
  }
}

@media screen and (max-width: 340px) {
  .tb-thermo-card {
    --tb-card-width: 170px;
    --tb-card-height: 370px;
    padding: 22px 14px 20px;
  }
}
`
}