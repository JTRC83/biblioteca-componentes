export default {
  id: 'card-manifesto-poster',
  name: 'Manifesto Poster',
  category: 'cards',
  tags: ['card', 'poster', 'manifesto', 'brutalism', 'toggle', 'animated', 'css-only', 'marquee', 'barcode', 'editorial'],
  author: 'mamyapro123',
  html: `<div class="ms-showcase">
  <input type="checkbox" id="ms-rebel" class="ms-rebel-toggle" />

  <div class="ms-stage">
    <label for="ms-rebel" class="ms-switch">
      <span class="ms-switch-track"></span>
      <span class="ms-switch-text ms-mode-clean">BRUTALIZE AESTHETIC-CLICK ME </span>
      <span class="ms-switch-text ms-mode-chaos">RESTORE MINIMALISM</span>
    </label>

    <div class="ms-card">
      <div class="ms-grain"></div>
      <div class="ms-grid"></div>

      <div class="ms-orb"></div>

      <div class="ms-type">
        <div class="ms-huge ms-word-1">FRONT</div>
        <div class="ms-huge ms-word-2">END.</div>
      </div>

      <div class="ms-tape">
        <div class="ms-tape-scroll">
          <span>NO JS // PURE CSS // BOLD AESTHETICS // REJECT MEDIOCRITY // </span>
          <span>NO JS // PURE CSS // BOLD AESTHETICS // REJECT MEDIOCRITY // </span>
        </div>
      </div>

      <div class="ms-footer">
        <div class="ms-barcode"></div>
        <div class="ms-manifesto">
          <p class="ms-vol">VOL. 01 / REBELLION</p>
          <p class="ms-desc">
            Crafted exclusively with structural markup and cascading
            stylesheets. Zero scripts. Zero compromises.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
  css: `
.ms-showcase {
  --ms-bg-outer: transparent;
  --ms-bg-inner: #fdfdfa;
  --ms-text-main: #0a0a0a;
  --ms-accent: #ff2a00;
  --ms-shadow-color: #0a0a0a;

  --ms-geo-radius: 0%;
  --ms-geo-bg: repeating-linear-gradient(
    45deg,
    var(--ms-text-main) 0 2px,
    transparent 2px 10px
  );
  --ms-geo-pos-x: -10%;
  --ms-geo-pos-y: -10%;

  --ms-font-display: "Impact", "Arial Black", sans-serif;
  --ms-font-body: "Georgia", "Times New Roman", serif;
  --ms-font-mono: "Courier New", Courier, monospace;

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.ms-showcase * {
  box-sizing: border-box;
}

.ms-showcase:has(.ms-rebel-toggle:checked) {
  --ms-bg-inner: #111111;
  --ms-text-main: #ccff00;
  --ms-accent: #ff007f;
  --ms-shadow-color: #ff007f;

  --ms-geo-radius: 50%;
  --ms-geo-bg: radial-gradient(circle, var(--ms-accent) 0%, transparent 70%);
  --ms-geo-pos-x: 20%;
  --ms-geo-pos-y: 20%;

  --ms-font-display: "Arial Black", sans-serif;
  --ms-font-body: "Courier New", Courier, monospace;
}

.ms-rebel-toggle {
  display: none;
}

.ms-stage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--ms-bg-outer);
  padding: 10px;
  font-family: var(--ms-font-body);
  perspective: 1000px;
}

.ms-switch {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin-bottom: 1.5rem;
  background: var(--ms-text-main);
  color: var(--ms-bg-inner);
  font-family: var(--ms-font-mono);
  font-weight: bold;
  font-size: 0.75rem;
  letter-spacing: 1px;
  cursor: pointer;
  border: 2px solid var(--ms-text-main);
  box-shadow: 3px 3px 0px var(--ms-accent);
  transition: all 0.3s ease;
  z-index: 50;
  text-transform: uppercase;
}

.ms-switch:hover {
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0px var(--ms-accent);
}

.ms-switch:active {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px var(--ms-accent);
}

.ms-mode-chaos {
  display: none;
}
.ms-rebel-toggle:checked ~ .ms-stage .ms-mode-clean {
  display: none;
}
.ms-rebel-toggle:checked ~ .ms-stage .ms-mode-chaos {
  display: inline;
}

.ms-card {
  position: relative;
  width: 250px;
  height: 360px;
  background-color: var(--ms-bg-inner);
  border: 2px solid var(--ms-text-main);
  box-shadow: 8px 8px 0px var(--ms-shadow-color);
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.83, 0, 0.17, 1);
  transform-style: preserve-3d;
}

.ms-card:hover {
  transform: rotateY(5deg) rotateX(2deg) scale(1.02);
  box-shadow: 12px 12px 0px var(--ms-shadow-color);
}

.ms-grain {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--ms-text-main) 1px, transparent 1px);
  background-size: 4px 4px;
  opacity: 0.15;
  pointer-events: none;
  z-index: 10;
}

.ms-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      to right,
      var(--ms-text-main) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, var(--ms-text-main) 1px, transparent 1px);
  background-size: 20% 20%;
  opacity: 0.1;
  pointer-events: none;
}

.ms-orb {
  position: absolute;
  top: var(--ms-geo-pos-y);
  right: var(--ms-geo-pos-x);
  width: 60%;
  height: 45%;
  background: var(--ms-geo-bg);
  border-radius: var(--ms-geo-radius);
  transition: all 0.8s cubic-bezier(0.83, 0, 0.17, 1);
  mix-blend-mode: multiply;
  opacity: 0.8;
}

.ms-type {
  position: absolute;
  top: 10%;
  left: 5%;
  display: flex;
  flex-direction: column;
  z-index: 5;
}

.ms-huge {
  font-family: var(--ms-font-display);
  font-size: 3.5rem;
  line-height: 0.8;
  letter-spacing: -0.04em;
  color: var(--ms-text-main);
  text-transform: uppercase;
  mix-blend-mode: exclusion;
  position: relative;
  transition: color 0.6s ease;
}

.ms-word-2 {
  margin-left: 10%;
  color: transparent;
  -webkit-text-stroke: 2px var(--ms-text-main);
}

.ms-tape {
  position: absolute;
  top: 50%;
  left: -30%;
  width: 160%;
  background: var(--ms-accent);
  color: var(--ms-bg-inner);
  transform: rotate(-12deg) scale(1.05);
  padding: 0.6rem 0;
  font-family: var(--ms-font-mono);
  font-size: 0.8rem;
  font-weight: 900;
  white-space: nowrap;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 20;
  display: flex;
  overflow: hidden;
  transition: all 0.6s ease;
}

.ms-tape-scroll {
  display: flex;
  width: max-content;
  animation: ms-scroll 10s linear infinite;
}

.ms-tape-scroll span {
  padding-right: 1rem;
}

@keyframes ms-scroll {
  to {
    transform: translateX(-50%);
  }
}

.ms-footer {
  position: absolute;
  bottom: 5%;
  left: 5%;
  right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 5;
  border-top: 2px solid var(--ms-text-main);
  padding-top: 0.6rem;
  transition: border-color 0.6s ease;
}

.ms-barcode {
  width: 50px;
  height: 25px;
  background: repeating-linear-gradient(
    to right,
    var(--ms-text-main) 0,
    var(--ms-text-main) 2px,
    transparent 2px,
    transparent 4px,
    var(--ms-text-main) 4px,
    var(--ms-text-main) 6px,
    transparent 6px,
    transparent 10px,
    var(--ms-text-main) 10px,
    var(--ms-text-main) 11px,
    transparent 11px,
    transparent 15px,
    var(--ms-text-main) 15px,
    var(--ms-text-main) 19px,
    transparent 19px,
    transparent 22px
  );
  transition: background 0.6s ease;
}

.ms-manifesto {
  max-width: 65%;
  text-align: right;
  color: var(--ms-text-main);
  transition: color 0.6s ease;
}

.ms-manifesto p {
  margin: 0;
}

.ms-vol {
  font-family: var(--ms-font-mono);
  font-weight: bold;
  font-size: 0.55rem;
  margin-bottom: 0.2rem !important;
  text-transform: uppercase;
}

.ms-desc {
  font-size: 0.5rem;
  line-height: 1.3;
  opacity: 0.8;
}

.ms-rebel-toggle:checked ~ .ms-stage .ms-orb {
  animation: ms-pulse-acid 3s ease-in-out infinite alternate;
  mix-blend-mode: screen;
}

.ms-rebel-toggle:checked ~ .ms-stage .ms-huge {
  text-shadow:
    4px 4px 0px var(--ms-accent),
    -2px -2px 0px #00ffff;
  mix-blend-mode: normal;
}

@keyframes ms-pulse-acid {
  0% {
    transform: scale(1) translate(0, 0);
    opacity: 0.6;
    filter: blur(10px);
  }
  100% {
    transform: scale(1.2) translate(-10%, 10%);
    opacity: 1;
    filter: blur(20px);
  }
}
`
}