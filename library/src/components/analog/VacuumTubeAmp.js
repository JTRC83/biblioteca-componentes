export default {
  id: 'analog-vacuum-amp',
  name: 'Vacuum Tube Amp',
  category: 'analog',
  tags: ['analog', 'amplifier', 'vacuum', 'tube', 'vintage', 'animated', 'css-only', 'radio', 'knob', 'switch', 'meter', 'hardware'],
  author: 'chase2k25',
  html: `<div class="vx-container">
  <input type="checkbox" id="vx-pwr" class="vx-inputs" />

  <div class="vx-amp">
    <div class="vx-wood"></div>

    <div class="vx-bay">
      <div class="vx-tube">
        <div class="vx-glass">
          <div class="vx-plate"></div>
          <div class="vx-heater"></div>
          <div class="vx-glow"></div>
        </div>
      </div>
      <div class="vx-tube">
        <div class="vx-glass">
          <div class="vx-plate"></div>
          <div class="vx-heater"></div>
          <div class="vx-glow"></div>
        </div>
      </div>
      <div class="vx-tube">
        <div class="vx-glass">
          <div class="vx-plate"></div>
          <div class="vx-heater"></div>
          <div class="vx-glow"></div>
        </div>
      </div>
    </div>

    <div class="vx-face">
      <div class="vx-bolt vx-tl"></div>
      <div class="vx-bolt vx-tr"></div>
      <div class="vx-bolt vx-bl"></div>
      <div class="vx-bolt vx-br"></div>

      <div class="vx-meters">
        <div class="vx-meter">
          <div class="vx-backlight"></div>
          <div class="vx-scale"></div>
          <div class="vx-text">L . CH</div>
          <div class="vx-needle"></div>
        </div>
        <div class="vx-meter">
          <div class="vx-backlight"></div>
          <div class="vx-scale"></div>
          <div class="vx-text">R . CH</div>
          <div class="vx-needle"></div>
        </div>
      </div>

      <div class="vx-deck">
        <div class="vx-knob-group">
          <div class="vx-knob"></div>
          <div class="vx-label">Volume</div>
        </div>

        <div class="vx-knob-group">
          <div class="vx-switch-housing">
            <label for="vx-pwr" class="vx-switch-lever"></label>
          </div>
          <div class="vx-label">Power</div>
        </div>

        <div class="vx-knob-group">
          <div class="vx-jewel"></div>
          <div class="vx-label">Active</div>
        </div>

        <div class="vx-knob-group">
          <div class="vx-knob"></div>
          <div class="vx-label">Tone</div>
        </div>
      </div>

      <div class="vx-brand">FIDELITY 900</div>
    </div>
  </div>
</div>`,
  css: `
.vx-container {
  --vx-wood-base: #3e2723;
  --vx-wood-grain: #281510;
  --vx-metal-face: #d8d8d8;
  --vx-metal-shadow: #999;
  --vx-glass-coating: rgba(200, 220, 255, 0.1);
  --vx-filament-off: #4a3b3b;
  --vx-filament-on: #ff8800;
  --vx-glow-color: rgba(255, 160, 50, 0.6);
  --vx-jewel-off: #400;
  --vx-jewel-on: #ff0000;
  margin: 0;
  background-color: #050505;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Jura", sans-serif;
  overflow: hidden;
  background-image: radial-gradient(circle at 50% 30%, #1a1a1a 0%, #000 100%);
}
.vx-amp {
  width: 380px;
  height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 50px 100px rgba(0, 0, 0, 0.9),
    0 10px 20px rgba(0, 0, 0, 0.8);
  transform-style: preserve-3d;
  perspective: 1000px;
}

.vx-inputs {
  display: none;
}

.vx-wood {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--vx-wood-base);
  border-radius: 12px;
  z-index: 0;
  overflow: hidden;
  background-image: repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 2px,
      rgba(0, 0, 0, 0.2) 3px,
      transparent 6px
    ),
    repeating-radial-gradient(
      circle at 50% 50%,
      transparent 0,
      transparent 10px,
      rgba(0, 0, 0, 0.1) 12px
    ),
    linear-gradient(to right, #2a1810, #5d4037 10%, #3e2723 90%, #1a0f0a);
  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.8);
}

.vx-wood::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.3) 0,
    rgba(0, 0, 0, 0.3) 2px,
    transparent 2px,
    transparent 40px
  );
  mix-blend-mode: multiply;
  opacity: 0.5;
}

.vx-bay {
  height: 240px;
  background: #080808;
  position: relative;
  margin: 15px 15px 0 15px;
  border-radius: 4px 4px 0 0;
  box-shadow: inset 0 0 40px #000;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 25px;
  gap: 25px;
  z-index: 2;
  overflow: hidden;
}

.vx-bay::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.05),
    transparent
  );
  z-index: 0;
}

.vx-tube {
  width: 70px;
  height: 140px;
  position: relative;
  z-index: 5;
}

.vx-glass {
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.15),
    var(--vx-glass-coating) 40%,
    rgba(20, 20, 20, 0.4) 95%
  );
  border-radius: 35px 35px 5px 5px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
  box-shadow:
    inset 0 0 15px rgba(0, 0, 0, 0.9),
    0 10px 20px rgba(0, 0, 0, 0.5);
}

.vx-glass::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: radial-gradient(at 40% 20%, #888, #222 70%);
  opacity: 0.8;
  mask-image: linear-gradient(to bottom, black, transparent);
  -webkit-mask-image: linear-gradient(to bottom, black, transparent);
}

.vx-plate {
  position: absolute;
  top: 25px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  background: linear-gradient(90deg, #222, #444, #222);
  border-radius: 4px;
  border: 1px solid #555;
  box-shadow: inset 0 0 5px #000;
}
.vx-plate::after {
  content: "";
  position: absolute;
  top: 10%;
  left: 30%;
  width: 40%;
  height: 60%;
  background: repeating-linear-gradient(
    0deg,
    #111 0,
    #111 2px,
    transparent 2px,
    transparent 6px
  );
}

.vx-heater {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 60px;
  background-color: var(--vx-filament-off);
  box-shadow: 0 0 0 var(--vx-glow-color);
  transition:
    background-color 3s ease-in,
    box-shadow 3s ease-in;
  z-index: 10;
}
.vx-heater::before {
  content: "";
  position: absolute;
  top: 0;
  left: -3px;
  width: 8px;
  height: 8px;
  background: inherit;
  border-radius: 50%;
  box-shadow: inherit;
}
.vx-heater::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: -3px;
  width: 8px;
  height: 8px;
  background: inherit;
  border-radius: 50%;
  box-shadow: inherit;
}

.vx-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 100%;
  background: radial-gradient(circle, var(--vx-glow-color) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 3s ease-in-out;
  mix-blend-mode: color-dodge;
  pointer-events: none;
}

.vx-face {
  flex-grow: 1;
  margin: 0 15px 15px 15px;
  background: linear-gradient(180deg, #e0e0e0 0%, #b0b0b0 100%);
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.8),
    0 -2px 10px rgba(0, 0, 0, 0.5);
}
.vx-face::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(
    90deg,
    transparent 0,
    transparent 1px,
    rgba(0, 0, 0, 0.05) 2px
  );
  pointer-events: none;
}

.vx-bolt {
  position: absolute;
  width: 12px;
  height: 12px;
  background: radial-gradient(circle, #eee, #888);
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  border: 1px solid #777;
}
.vx-bolt::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 15%;
  width: 70%;
  height: 1px;
  background: #444;
}
.vx-tl {
  top: 10px;
  left: 10px;
  transform: rotate(45deg);
}
.vx-tr {
  top: 10px;
  right: 10px;
  transform: rotate(15deg);
}
.vx-bl {
  bottom: 10px;
  left: 10px;
  transform: rotate(90deg);
}
.vx-br {
  bottom: 10px;
  right: 10px;
  transform: rotate(30deg);
}

.vx-meters {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  position: relative;
}

.vx-meter {
  width: 100px;
  height: 80px;
  background: #fdf6e3;
  border: 2px solid #555;
  border-radius: 4px;
  position: relative;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.vx-backlight {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, #fffacd 20%, transparent 80%);
  opacity: 0;
  transition: opacity 1s 1s;
  mix-blend-mode: multiply;
}

.vx-scale {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 0;
  border-top: 1px solid #333;
  border-radius: 50% 50% 0 0;
}
.vx-text {
  position: absolute;
  bottom: 25px;
  width: 100%;
  text-align: center;
  font-size: 0.6rem;
  color: #444;
  font-weight: bold;
  letter-spacing: 1px;
}

.vx-needle {
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 1px;
  height: 60px;
  background: #d00;
  transform-origin: bottom center;
  transform: rotate(-45deg);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 5;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
}

.vx-meter::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4) 0%,
    transparent 50%
  );
  pointer-events: none;
}

.vx-deck {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  position: relative;
  z-index: 5;
}

.vx-knob-group {
  text-align: center;
}
.vx-label {
  font-size: 0.7rem;
  color: #333;
  text-transform: uppercase;
  margin-top: 5px;
}

.vx-knob {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: conic-gradient(
    #999 0deg,
    #ccc 10deg,
    #999 20deg,
    #ccc 30deg,
    #999 40deg,
    #ccc 50deg,
    #999 60deg,
    #ccc 70deg,
    #999 80deg,
    #ccc 90deg,
    #999 100deg,
    #ccc 110deg,
    #999 120deg,
    #ccc 130deg,
    #999 140deg,
    #ccc 150deg,
    #999 160deg,
    #ccc 170deg,
    #999 180deg,
    #ccc 190deg,
    #999 200deg,
    #ccc 210deg,
    #999 220deg,
    #ccc 230deg,
    #999 240deg,
    #ccc 250deg,
    #999 260deg,
    #ccc 270deg,
    #999 280deg,
    #ccc 290deg,
    #999 300deg,
    #ccc 310deg,
    #999 320deg,
    #ccc 330deg,
    #999 340deg,
    #ccc 350deg
  );
  box-shadow:
    0 5px 10px rgba(0, 0, 0, 0.5),
    inset 0 0 5px rgba(0, 0, 0, 0.5);
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
}

.vx-knob::after {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  background: radial-gradient(circle, #ddd, #aaa);
  border-radius: 50%;
  border: 1px solid #888;
}
.vx-knob::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 50%;
  width: 2px;
  height: 20px;
  background: #333;
  transform: translateX(-50%);
  z-index: 2;
}

.vx-knob:hover {
  transform: rotate(20deg);
}

.vx-switch-housing {
  width: 50px;
  height: 80px;
  background: #bbb;
  border: 1px solid #888;
  border-radius: 4px;
  position: relative;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
}

.vx-switch-lever {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 40px;
  background: linear-gradient(90deg, #ccc, #fff, #999);
  border-radius: 3px;
  transform: translate(-50%, -50%) rotateX(-45deg);
  transform-origin: center bottom;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  cursor: pointer;
}

.vx-jewel {
  width: 24px;
  height: 24px;
  background: var(--vx-jewel-off);
  border-radius: 50%;
  border: 2px solid #888;
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  transition: background-color 0.2s;
  overflow: hidden;
}
.vx-jewel::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 60%
    ),
    linear-gradient(
      -45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 60%
    );
}

.vx-brand {
  text-align: center;
  margin-top: auto;
  padding-bottom: 10px;
  font-size: 1.2rem;
  color: #333;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 1px 0 #fff;
}

#vx-pwr:checked ~ .vx-amp .vx-bay .vx-tube .vx-heater {
  background-color: #fff;
  box-shadow:
    0 0 5px #fff,
    0 0 10px var(--vx-filament-on),
    0 0 20px var(--vx-filament-on);
}

#vx-pwr:checked ~ .vx-amp .vx-bay .vx-tube .vx-glow {
  opacity: 0.8;
}

#vx-pwr:checked
  ~ .vx-amp
  .vx-face
  .vx-deck
  .vx-switch-housing
  .vx-switch-lever {
  transform: translate(-50%, -50%) rotateX(45deg);
  box-shadow: 0 -5px 5px rgba(0, 0, 0, 0.4);
}

#vx-pwr:checked ~ .vx-amp .vx-face .vx-deck .vx-knob-group .vx-jewel {
  background-color: var(--vx-jewel-on);
  box-shadow: 0 0 15px var(--vx-jewel-on);
}

#vx-pwr:checked ~ .vx-amp .vx-face .vx-meters .vx-meter .vx-backlight {
  opacity: 1;
}

#vx-pwr:checked
  ~ .vx-amp
  .vx-face
  .vx-meters
  .vx-meter:nth-child(1)
  .vx-needle {
  animation: vx-bounce 0.5s infinite alternate ease-in-out;
  animation-delay: 2s;
}
#vx-pwr:checked
  ~ .vx-amp
  .vx-face
  .vx-meters
  .vx-meter:nth-child(2)
  .vx-needle {
  animation: vx-bounce 0.6s infinite alternate ease-in-out;
  animation-delay: 2.1s;
}

@keyframes vx-bounce {
  0% {
    transform: rotate(-45deg);
  }
  20% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(-30deg);
  }
  60% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(20deg);
  }
}
`
}