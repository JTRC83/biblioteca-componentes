export default {
  id: 'anim-pipboy',
  name: 'Pip-Boy CRT',
  category: 'animations',
  tags: ['pipboy', 'crt', 'fallout', 'retro', 'hud', 'animated', 'css-only', 'tabs', 'scanlines', 'glow'],
  author: 'Gidarx',
  html: `<div class="pb-wrapper">
  <input type="radio" id="pb-tab-stat" name="pb-tabs" checked="" />
  <input type="radio" id="pb-tab-inv" name="pb-tabs" />
  <input type="radio" id="pb-tab-data" name="pb-tabs" />

  <div class="pb-chassis">
    <div class="pb-screw pb-tl"></div>
    <div class="pb-screw pb-tr"></div>
    <div class="pb-screw pb-bl"></div>
    <div class="pb-screw pb-br"></div>

    <div class="pb-crt">
      <div class="pb-glass"></div>
      <div class="pb-scanlines"></div>

      <div class="pb-boot">
        <header class="pb-top-bar">
          <div class="pb-title pb-flicker-text"></div>
          <div class="pb-line pb-flexible"></div>
          <div class="pb-stats-info">
            <span>HP <span class="pb-bold">348/450</span></span>
            <span>AP <span class="pb-bold">67/67</span></span>
            <span class="pb-pulse-icon">⚡</span>
          </div>
        </header>

        <main class="pb-middle">
          <div class="pb-tab-content pb-content-stat">
            <aside class="pb-side-menu">
              <div>CND</div>
              <div>RAD</div>
              <div>EFF</div>
              <div class="pb-active-box-static">CLK</div>
            </aside>

            <section class="pb-clock">
              <div class="pb-block">
                <div class="pb-time">08<span class="pb-blink-colon">:</span>40</div>
              </div>
              <div class="pb-date">02.23.2026</div>
            </section>

            <aside class="pb-right-menu">
              <div class="pb-hazard">
                <div class="pb-hazard-core"></div>
              </div>
              <div class="pb-rad-text">RADS</div>
            </aside>
          </div>

          <div class="pb-tab-content pb-content-inv">
            <ul class="pb-inventory">
              <li>
                <span>Stimpak (12)</span>
                <span>WGT 0.5</span>
              </li>
              <li class="pb-active-line">
                <span>10mm Pistol</span>
                <span>WGT 4.0</span>
              </li>
              <li>
                <span>Nuka-Cola Quantum</span>
                <span>WGT 1.0</span>
              </li>
              <li>
                <span>RadAway (5)</span>
                <span>WGT 0.5</span>
              </li>
              <li>
                <span>Power Armor Core</span>
                <span>WGT 3.0</span>
              </li>
            </ul>
          </div>

          <div class="pb-tab-content pb-content-data">
            <div class="pb-radar">
              <span></span>
              <div class="pb-blip"></div>
            </div>
            <div class="pb-radar-text pb-flicker-fast">SEARCHING SATELLITE...</div>
          </div>
        </main>

        <footer class="pb-bottom-bar">
          <label for="pb-tab-stat" class="pb-nav-item">STAT</label>
          <div class="pb-line pb-flexible"></div>
          <label for="pb-tab-inv" class="pb-nav-item">INV</label>
          <div class="pb-line pb-flexible"></div>
          <label for="pb-tab-data" class="pb-nav-item">DATA</label>
          <div class="pb-line pb-flexible"></div>

          <div class="pb-visualizer">
            <div class="pb-bar pb-bar-1"></div>
            <div class="pb-bar pb-bar-2"></div>
            <div class="pb-bar pb-bar-3"></div>
            <div class="pb-bar pb-bar-4"></div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</div>`,
  css: `
.pb-wrapper {
  --pip-green: #1aff40;
  --pip-glow: rgba(26, 255, 64, 0.6);
  --bg-dark: #020a02;
  --chassis-dark: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Courier New", Courier, monospace;
  text-transform: uppercase;
  width: 100%;
  max-width: 460px;
  padding: 0.5rem;
  box-sizing: border-box;
  container-type: inline-size;
  container-name: pb-wrapper;
}

.pb-wrapper ::selection {
  background-color: var(--pip-green);
  color: var(--bg-dark);
  text-shadow: none;
}
.pb-wrapper ::-moz-selection {
  background-color: var(--pip-green);
  color: var(--bg-dark);
  text-shadow: none;
}

.pb-wrapper input[type="radio"] {
  display: none;
}

.pb-chassis {
  position: relative;
  width: 100%;
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.04) 1px,
      transparent 1px
    ),
    linear-gradient(135deg, #2b2b2b, #111, #222);
  background-size:
    3px 3px,
    100% 100%;
  padding: 1.5rem;
  border-radius: 1.5rem;
  box-shadow:
    inset 0 0 20px #000,
    0 20px 40px rgba(0, 0, 0, 0.8),
    0 0 0 2px #333,
    0 5px 15px rgba(26, 255, 64, 0.1);
  border: 2px solid #444;
  box-sizing: border-box;
}

.pb-screw {
  position: absolute;
  width: 14px;
  height: 14px;
  background: linear-gradient(45deg, #555, #111);
  border-radius: 50%;
  border: 1px solid #000;
  box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.2);
}

.pb-screw::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 2px;
  background: #000;
  transform: translate(-50%, -50%) rotate(45deg);
}
.pb-tl {
  top: 15px;
  left: 15px;
}
.pb-tr {
  top: 15px;
  right: 15px;
  transform: rotate(90deg);
}
.pb-bl {
  bottom: 15px;
  left: 15px;
  transform: rotate(180deg);
}
.pb-br {
  bottom: 15px;
  right: 15px;
  transform: rotate(270deg);
}

.pb-crt {
  background-color: var(--bg-dark);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  border: 6px solid #0a0a0a;
  box-shadow:
    inset 0 0 60px rgba(0, 0, 0, 1),
    0 0 10px rgba(0, 0, 0, 0.8);
  aspect-ratio: 5/4;
  cursor: crosshair;
}

.pb-glass {
  position: absolute;
  inset: 0;
  z-index: 10;
  pointer-events: none;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(0, 0, 0, 0.4) 80%
  );
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.9);
}

.pb-glass::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15%;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(26, 255, 64, 0.1),
    transparent
  );
  animation: pb-crt-scanline 7s linear infinite;
  pointer-events: none;
  z-index: 11;
}

.pb-scanlines {
  position: absolute;
  inset: 0;
  z-index: 9;
  pointer-events: none;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
  background-size: 100% 4px;
}

.pb-boot {
  height: 100%;
  padding: 0.8rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: var(--pip-green);
  text-shadow: 0 0 4px var(--pip-glow);
  animation: pb-turn-on 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  opacity: 0;
}

.pb-bold {
  font-weight: 900;
}
.pb-line {
  height: 2px;
  background-color: var(--pip-green);
  box-shadow: 0 0 8px var(--pip-glow);
  opacity: 0.8;
}
.pb-flexible {
  flex-grow: 1;
  margin: 0 5px;
}

.pb-top-bar,
.pb-bottom-bar {
  display: flex;
  align-items: center;
  font-size: 0.6rem;
  font-weight: bold;
}
.pb-top-bar {
  margin-bottom: 0.6rem;
}
.pb-title {
  letter-spacing: 1px;
}
.pb-stats-info {
  display: flex;
  gap: 12px;
}

.pb-bottom-bar {
  margin-top: auto;
}
.pb-nav-item {
  padding: 2px 6px;
  cursor: crosshair;
  border: 1px solid transparent;
  transition: all 0.2s;
}
.pb-nav-item:hover {
  background-color: rgba(26, 255, 64, 0.15);
}

.pb-middle {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pb-tab-content {
  display: none;
  width: 100%;
  height: 100%;
  animation: pb-glitch 0.4s ease-out;
}

#pb-tab-stat:checked ~ .pb-chassis .pb-title::before {
  content: "SYS_STATUS";
}
#pb-tab-inv:checked ~ .pb-chassis .pb-title::before {
  content: "INVENTORY";
}
#pb-tab-data:checked ~ .pb-chassis .pb-title::before {
  content: "DATA_LINK";
}

#pb-tab-stat:checked ~ .pb-chassis .pb-content-stat,
#pb-tab-inv:checked ~ .pb-chassis .pb-content-inv,
#pb-tab-data:checked ~ .pb-chassis .pb-content-data {
  display: flex;
}

#pb-tab-stat:checked ~ .pb-chassis label[for="pb-tab-stat"],
#pb-tab-inv:checked ~ .pb-chassis label[for="pb-tab-inv"],
#pb-tab-data:checked ~ .pb-chassis label[for="pb-tab-data"] {
  background-color: var(--pip-green);
  color: var(--bg-dark);
  text-shadow: none;
  box-shadow: 0 0 10px var(--pip-glow);
}

.pb-content-stat {
  justify-content: space-between;
  align-items: center;
}
.pb-side-menu {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.6rem;
}
.pb-active-box-static {
  border: 1px solid var(--pip-green);
  padding: 1px 4px;
  box-shadow: inset 0 0 6px var(--pip-glow);
}

.pb-clock {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pb-block {
  background-color: var(--pip-green);
  border-radius: 4px;
  padding: 4px 10px;
  margin-bottom: 4px;
  box-shadow: 0 0 15px var(--pip-glow);
  animation: pb-pulse 4s infinite alternate;
}
.pb-block .pb-time {
  color: var(--bg-dark);
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: none;
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
}
.pb-date {
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.pb-right-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.pb-rad-text {
  font-size: 0.6rem;
  font-weight: bold;
  letter-spacing: 1px;
}
.pb-hazard {
  width: 30px;
  height: 30px;
  position: relative;
  background: conic-gradient(
    var(--pip-green) 0deg 60deg,
    transparent 60deg 120deg,
    var(--pip-green) 120deg 180deg,
    transparent 180deg 240deg,
    var(--pip-green) 240deg 300deg,
    transparent 300deg 360deg
  );
  border-radius: 50%;
  animation: pb-spin 8s linear infinite;
  box-shadow: 0 0 15px var(--pip-glow);
}
.pb-hazard-core {
  position: absolute;
  inset: 6px;
  background: var(--bg-dark);
  border-radius: 50%;
}
.pb-hazard-core::after {
  content: "";
  position: absolute;
  inset: 4px;
  background: var(--pip-green);
  border-radius: 50%;
}

.pb-content-inv {
  flex-direction: column;
  font-size: 0.6rem;
  width: 100%;
  justify-content: flex-start;
}
.pb-inventory {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.pb-inventory li {
  display: flex;
  justify-content: space-between;
  padding: 3px 6px;
  border-bottom: 1px dashed rgba(26, 255, 64, 0.3);
  transition: none;
  cursor: crosshair;
}
.pb-inventory li:hover,
.pb-active-line {
  background-color: var(--pip-green);
  color: var(--bg-dark);
  font-weight: bold;
  text-shadow: none;
  box-shadow: 0 0 10px var(--pip-glow);
  padding: 6px 11px;
}

.pb-content-data {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}
.pb-radar {
  position: relative;
  width: 100px;
  height: 100px;
  background: rgba(26, 255, 64, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: inset 0 0 20px var(--pip-glow);
  border: 2px solid var(--pip-green);
}
.pb-radar::before {
  content: "";
  position: absolute;
  inset: 12px;
  background: rgba(26, 255, 64, 0.15);
  border-radius: 50%;
  border: 1px dashed rgba(26, 255, 64, 0.3);
}
.pb-radar::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  background: rgba(26, 255, 64, 0.25);
  border-radius: 50%;
  border: 1px solid var(--pip-green);
}
.pb-radar span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: transparent;
  transform-origin: top left;
  animation: pb-angular 2s linear infinite;
  box-shadow: 6px -100px 40px -30px var(--pip-green);
  border-top: 2px solid var(--pip-green);
  z-index: 2;
}
.pb-blip {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  top: 22px;
  left: 62px;
  box-shadow:
    0 0 8px #fff,
    0 0 16px var(--pip-green);
  animation: pb-blip-fade 2s infinite;
  z-index: 3;
}

.pb-visualizer {
  display: flex;
  gap: 3px;
  align-items: flex-end;
  height: 15px;
  margin-left: 10px;
}
.pb-bar {
  width: 4px;
  background-color: var(--pip-green);
  animation: pb-bounce 1s infinite alternate;
}
.pb-bar-1 {
  animation-delay: 0.1s;
}
.pb-bar-2 {
  animation-delay: 0.3s;
}
.pb-bar-3 {
  animation-delay: 0s;
}
.pb-bar-4 {
  animation-delay: 0.4s;
}

@keyframes pb-glitch {
  0% {
    opacity: 0;
    filter: contrast(200%);
    transform: translateY(-2px);
    text-shadow:
      3px 0 rgba(255, 0, 0, 0.7),
      -3px 0 rgba(0, 0, 255, 0.7);
  }
  20% {
    opacity: 0.8;
    text-shadow:
      -3px 0 rgba(255, 0, 0, 0.7),
      3px 0 rgba(0, 0, 255, 0.7);
  }
  50% {
    opacity: 0.5;
    filter: contrast(150%) hue-rotate(20deg);
    transform: translateY(2px);
    text-shadow:
      2px 0 rgba(255, 0, 0, 0.7),
      -2px 0 rgba(0, 0, 255, 0.7);
  }
  100% {
    opacity: 1;
    filter: contrast(100%);
    transform: translateY(0);
    text-shadow: 0 0 4px var(--pip-glow);
  }
}

@keyframes pb-crt-scanline {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(800%);
  }
}
@keyframes pb-turn-on {
  0% {
    transform: scale(1, 0.005);
    opacity: 0;
    filter: brightness(10);
  }
  30% {
    transform: scale(1, 0.005);
    opacity: 1;
    filter: brightness(5);
  }
  60% {
    transform: scale(1, 1);
    filter: brightness(2);
  }
  100% {
    transform: scale(1, 1);
    opacity: 1;
    filter: brightness(1);
  }
}
@keyframes pb-angular {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes pb-spin {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes pb-blip-fade {
  0%,
  85% {
    opacity: 0;
  }
  90% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
  }
}
@keyframes pb-bounce {
  0% {
    height: 3px;
  }
  100% {
    height: 15px;
  }
}
@keyframes pb-pulse {
  0% {
    box-shadow: 0 0 15px var(--pip-glow);
  }
  100% {
    box-shadow: 0 0 35px var(--pip-glow);
  }
}
@keyframes pb-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
@keyframes pb-flicker {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}
@keyframes pb-pulse-icon-anim {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.pb-blink-colon {
  animation: pb-blink 1s step-end infinite;
}
.pb-flicker-text {
  animation: pb-flicker 0.15s infinite;
}
.pb-flicker-fast {
  animation: pb-flicker 0.08s infinite;
}
.pb-pulse-icon {
  animation: pb-pulse-icon-anim 1.5s infinite ease-in-out;
}

@container pb-wrapper (max-width: 600px) {
  .pb-chassis {
    padding: 1.5rem;
    border-radius: 1.5rem;
  }
  .pb-crt {
    border-width: 5px;
  }
  .pb-boot {
    padding: 1.2rem;
  }
  .pb-block .pb-time {
    font-size: 3rem;
  }
  .pb-top-bar,
  .pb-bottom-bar {
    font-size: 0.8rem;
  }
  .pb-side-menu,
  .pb-inventory {
    font-size: 0.85rem;
  }
  .pb-radar {
    width: 130px;
    height: 130px;
  }
  .pb-radar::before {
    inset: 15px;
  }
  .pb-radar::after {
    width: 40px;
    height: 40px;
  }
  .pb-blip {
    top: 30px;
    left: 85px;
  }
  .pb-hazard {
    width: 40px;
    height: 40px;
  }
  .pb-hazard-core {
    inset: 8px;
  }
  .pb-hazard-core::after {
    inset: 4px;
  }
}

@container pb-wrapper (max-width: 450px) {
  .pb-chassis {
    padding: 1rem;
    border-radius: 1rem;
  }
  .pb-crt {
    border-width: 4px;
  }
  .pb-boot {
    padding: 0.8rem;
  }
  .pb-block {
    padding: 4px 8px;
  }
  .pb-block .pb-time {
    font-size: 1.5rem;
  }
  .pb-date {
    font-size: 0.7rem;
    letter-spacing: 1px;
  }
  .pb-top-bar {
    margin-bottom: 0.8rem;
  }
  .pb-top-bar,
  .pb-bottom-bar {
    font-size: 0.6rem;
  }
  .pb-stats-info {
    gap: 5px;
  }
  .pb-flexible {
    margin: 0 5px;
  }
  .pb-nav-item {
    padding: 2px 4px;
  }
  .pb-side-menu {
    font-size: 0.6rem;
    gap: 5px;
  }
  .pb-inventory {
    font-size: 0.65rem;
  }
  .pb-rad-text {
    font-size: 0.6rem;
  }
  .pb-radar {
    width: 100px;
    height: 100px;
  }
  .pb-radar::before {
    inset: 12px;
  }
  .pb-radar::after {
    width: 30px;
    height: 30px;
  }
  .pb-blip {
    top: 20px;
    left: 65px;
    width: 4px;
    height: 4px;
  }
  .pb-hazard {
    width: 30px;
    height: 30px;
    box-shadow: 0 0 10px var(--pip-glow);
  }
  .pb-hazard-core {
    inset: 6px;
  }
  .pb-hazard-core::after {
    inset: 3px;
  }
}
`
}