export default {
  id: 'card-doodle-poster',
  name: 'Doodle Poster Card',
  category: 'cards',
  tags: ['card', 'doodle', 'poster', 'handmade', 'mood-toggle', 'animated', 'css-only', 'retro', 'zine'],
  author: 'mamyapro123',
  html: `<div class="dl-wrapper">
  <input class="dl-checkbox" type="checkbox" id="dl-mood" />

  <div class="dl-stage">
    <label class="dl-toggle" for="dl-mood">
      <span class="dl-toggle-text">SWITCH MOOD</span>
      <span class="dl-toggle-icon"></span>
    </label>

    <div class="dl-poster">
      <div class="dl-grain"></div>
      <div class="dl-grid"></div>

      <span class="dl-tape dl-tape--left"></span>
      <span class="dl-tape dl-tape--right"></span>

      <span class="dl-dot dl-dot--one"></span>
      <span class="dl-dot dl-dot--two"></span>
      <span class="dl-dot dl-dot--three"></span>

      <span class="dl-star dl-star--one"></span>
      <span class="dl-star dl-star--two"></span>

      <span class="dl-scribble dl-scribble--one"></span>
      <span class="dl-scribble dl-scribble--two"></span>

      <span class="dl-arrow"></span>

      <div class="dl-label">DOODLE MANIFESTO</div>

      <div class="dl-title">
        <span>CREATE</span>
        <span>DIFFERENT</span>
      </div>

      <div class="dl-underline"></div>

      <div class="dl-ribbon">
        <div class="dl-ribbon-track">
          <span>PROFESSIONAL CHAOS 404 HANDMADE PIXELS 404</span>
          <span>PROFESSIONAL CHAOS 404 HANDMADE PIXELS 404</span>
          <span>PROFESSIONAL CHAOS 404 HANDMADE PIXELS 404</span>
        </div>
      </div>

      <div class="dl-footer">
        <div class="dl-barcode"></div>

        <div class="dl-caption">
          <strong>VOL. 404</strong>
          <p>Handmade pixels. Professional chaos.</p>
        </div>
      </div>
    </div>
  </div>
</div>`,
  css: `
.dl-wrapper {
  --dl-paper: #fff8e8;
  --dl-ink: #111111;
  --dl-accent: #ff4b1f;
  --dl-blue: #18b7ff;
  --dl-pink: #ff4f9a;
  --dl-muted: #8b867c;
  --dl-shadow: rgba(17, 17, 17, 0.9);

  width: 100%;
  max-width: 600px;
  font-family: Georgia, "Times New Roman", serif;
}

.dl-wrapper *,
.dl-wrapper *::before,
.dl-wrapper *::after {
  box-sizing: border-box;
}

.dl-checkbox {
  display: none;
}

.dl-stage {
  position: relative;
  width: 600px;
  height: 420px;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px;
  background: radial-gradient(
      circle at 15% 20%,
      rgba(24, 183, 255, 0.16),
      transparent 24%
    ),
    radial-gradient(circle at 85% 76%, rgba(255, 75, 31, 0.16), transparent 24%),
    linear-gradient(135deg, rgba(255, 248, 232, 0.1), rgba(255, 248, 232, 0.04));
  border-radius: 26px;
}

.dl-toggle {
  position: absolute;
  top: 20px;
  right: 24px;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 9px 14px;
  border: 2px solid var(--dl-ink);
  border-radius: 999px;
  background: var(--dl-paper);
  color: var(--dl-ink);
  font-family: "Courier New", monospace;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.8px;
  cursor: pointer;
  box-shadow: 4px 4px 0 var(--dl-ink);
  transform: rotate(1deg);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.35s ease,
    color 0.35s ease;
}

.dl-toggle:hover {
  transform: translate(-2px, -2px) rotate(-1deg);
  box-shadow: 7px 7px 0 var(--dl-ink);
}

.dl-toggle:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--dl-ink);
}

.dl-toggle-icon {
  position: relative;
  width: 22px;
  height: 12px;
  border: 2px solid currentColor;
  border-radius: 999px;
}

.dl-toggle-icon::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
  transition: transform 0.3s ease;
}

.dl-poster {
  position: relative;
  width: 310px;
  height: 360px;
  overflow: hidden;
  background: radial-gradient(
      circle at 88% 16%,
      rgba(24, 183, 255, 0.18) 0 34px,
      transparent 35px
    ),
    radial-gradient(
      circle at 13% 72%,
      rgba(255, 75, 31, 0.18) 0 42px,
      transparent 43px
    ),
    linear-gradient(135deg, var(--dl-paper), #fffdf4);
  border: 3px solid var(--dl-ink);
  border-radius: 12px 16px 11px 18px;
  box-shadow:
    12px 12px 0 var(--dl-shadow),
    inset 0 0 0 1px rgba(17, 17, 17, 0.08);
  transform: rotate(-1.2deg);
  transition:
    transform 0.5s cubic-bezier(0.2, 0.85, 0.2, 1),
    box-shadow 0.5s ease,
    background 0.6s ease,
    border-color 0.6s ease;
}

.dl-poster:hover {
  transform: rotate(1deg) translate(-4px, -4px);
  box-shadow: 17px 17px 0 var(--dl-shadow);
}

.dl-poster::before {
  content: "";
  position: absolute;
  inset: 12px;
  border: 2px dashed rgba(17, 17, 17, 0.28);
  border-radius: 9px 14px 8px 12px;
  pointer-events: none;
  z-index: 4;
}

.dl-poster::after {
  content: "";
  position: absolute;
  left: 22px;
  right: 22px;
  top: 82px;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    var(--dl-ink) 0 10px,
    transparent 10px 17px
  );
  opacity: 0.35;
  transform: rotate(-1deg);
}

.dl-grain {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  opacity: 0.18;
  background-image: radial-gradient(var(--dl-ink) 0.7px, transparent 0.8px),
    radial-gradient(var(--dl-muted) 0.7px, transparent 0.9px);
  background-size:
    7px 7px,
    11px 11px;
  background-position:
    0 0,
    4px 6px;
  animation: dl-grain 8s steps(5) infinite;
}

.dl-grid {
  position: absolute;
  inset: 0;
  opacity: 0.08;
  background-image: linear-gradient(to right, var(--dl-ink) 1px, transparent 1px),
    linear-gradient(to bottom, var(--dl-ink) 1px, transparent 1px);
  background-size: 31px 31px;
  pointer-events: none;
}

.dl-tape {
  position: absolute;
  z-index: 10;
  width: 58px;
  height: 25px;
  background: repeating-linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.3) 0 5px,
      transparent 5px 10px
    ),
    rgba(24, 183, 255, 0.7);
  border: 2px solid rgba(17, 17, 17, 0.65);
  box-shadow: 2px 2px 0 rgba(17, 17, 17, 0.22);
}

.dl-tape--left {
  top: 14px;
  left: -13px;
  transform: rotate(-18deg);
}

.dl-tape--right {
  top: 15px;
  right: -14px;
  transform: rotate(18deg);
  background: repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.3) 0 5px,
      transparent 5px 10px
    ),
    rgba(255, 75, 31, 0.65);
}

.dl-label {
  position: absolute;
  top: 38px;
  left: 28px;
  z-index: 8;
  display: inline-flex;
  padding: 7px 10px;
  border: 2px solid var(--dl-ink);
  border-radius: 999px 999px 999px 6px;
  background: var(--dl-ink);
  color: var(--dl-paper);
  font-family: "Courier New", monospace;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 1.4px;
  transform: rotate(-2deg);
  box-shadow: 3px 3px 0 var(--dl-accent);
  transition:
    background 0.5s ease,
    color 0.5s ease,
    box-shadow 0.5s ease;
}

.dl-title {
  position: absolute;
  top: 93px;
  left: 25px;
  right: 18px;
  z-index: 8;
  color: var(--dl-ink);
  font-family: Impact, "Arial Black", sans-serif;
  font-size: 58px;
  line-height: 0.82;
  letter-spacing: -2px;
  text-transform: uppercase;
  transition:
    color 0.5s ease,
    text-shadow 0.5s ease,
    transform 0.5s ease;
}

.dl-title span {
  display: block;
  position: relative;
}

.dl-title span:nth-child(2) {
  color: transparent;
  -webkit-text-stroke: 2px var(--dl-ink);
  text-shadow: none;
}

.dl-title span:nth-child(2)::after {
  content: "";
  position: absolute;
  left: 4px;
  bottom: 7px;
  width: 198px;
  height: 13px;
  z-index: -1;
  background: var(--dl-accent);
  border-radius: 999px 18px 999px 14px;
  transform: rotate(-2deg);
  opacity: 0.8;
  transition: background 0.5s ease;
}

.dl-underline {
  position: absolute;
  left: 33px;
  top: 209px;
  z-index: 8;
  width: 122px;
  height: 13px;
  border-bottom: 4px solid var(--dl-blue);
  border-radius: 50%;
  transform: rotate(-3deg);
}

.dl-underline::before,
.dl-underline::after {
  content: "";
  position: absolute;
  bottom: -10px;
  width: 52px;
  height: 13px;
  border-bottom: 3px solid var(--dl-blue);
  border-radius: 50%;
}

.dl-underline::before {
  left: 18px;
  transform: rotate(5deg);
}

.dl-underline::after {
  left: 68px;
  transform: rotate(-6deg);
}

.dl-ribbon {
  position: absolute;
  left: -48px;
  top: 218px;
  z-index: 12;
  width: 410px;
  overflow: hidden;
  padding: 9px 0;
  background: var(--dl-accent);
  color: var(--dl-paper);
  border-top: 3px solid var(--dl-ink);
  border-bottom: 3px solid var(--dl-ink);
  font-family: "Courier New", monospace;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1px;
  white-space: nowrap;
  transform: rotate(-10deg);
  box-shadow: 0 7px 0 rgba(17, 17, 17, 0.28);
  transition:
    background 0.5s ease,
    color 0.5s ease,
    border-color 0.5s ease;
}

.dl-ribbon-track {
  display: flex;
  width: max-content;
  animation: dl-marquee 9s linear infinite;
}

.dl-ribbon-track span {
  padding-right: 18px;
}

.dl-footer {
  position: absolute;
  left: 26px;
  right: 26px;
  bottom: 24px;
  z-index: 8;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 3px solid var(--dl-ink);
  transition: border-color 0.5s ease;
}

.dl-barcode {
  width: 72px;
  height: 38px;
  background: repeating-linear-gradient(
    to right,
    var(--dl-ink) 0 3px,
    transparent 3px 6px,
    var(--dl-ink) 6px 8px,
    transparent 8px 12px,
    var(--dl-ink) 12px 17px,
    transparent 17px 20px
  );
  border-bottom: 5px solid var(--dl-ink);
  transition:
    background 0.5s ease,
    border-color 0.5s ease;
}

.dl-caption {
  max-width: 145px;
  text-align: right;
  color: var(--dl-ink);
  transition: color 0.5s ease;
}

.dl-caption strong {
  display: block;
  margin-bottom: 4px;
  font-family: "Courier New", monospace;
  font-size: 10px;
  letter-spacing: 1px;
}

.dl-caption p {
  margin: 0;
  font-size: 11px;
  line-height: 1.25;
  color: currentColor;
  opacity: 0.82;
}

.dl-dot {
  position: absolute;
  z-index: 7;
  width: 11px;
  height: 11px;
  border: 2px solid var(--dl-ink);
  border-radius: 50%;
  background: var(--dl-pink);
  box-shadow: 2px 2px 0 var(--dl-ink);
  animation: dl-blink 2.2s ease-in-out infinite;
}

.dl-dot--one {
  top: 90px;
  right: 42px;
}

.dl-dot--two {
  top: 285px;
  left: 32px;
  width: 8px;
  height: 8px;
  background: var(--dl-blue);
  animation-delay: 0.45s;
}

.dl-dot--three {
  right: 28px;
  bottom: 88px;
  width: 9px;
  height: 9px;
  background: var(--dl-accent);
  animation-delay: 0.8s;
}

.dl-star {
  position: absolute;
  z-index: 7;
  width: 30px;
  height: 30px;
  animation: dl-float 4s ease-in-out infinite;
}

.dl-star::before,
.dl-star::after {
  content: "";
  position: absolute;
  left: 13px;
  top: 0;
  width: 4px;
  height: 30px;
  background: var(--dl-ink);
  border-radius: 50%;
}

.dl-star::after {
  transform: rotate(90deg);
}

.dl-star--one {
  top: 64px;
  right: 74px;
  transform: rotate(12deg);
}

.dl-star--two {
  left: 38px;
  bottom: 113px;
  width: 22px;
  height: 22px;
  transform: rotate(-18deg);
  animation-delay: 0.7s;
}

.dl-star--two::before {
  left: 9px;
  height: 22px;
}

.dl-star--two::after {
  left: 9px;
  height: 22px;
}

.dl-scribble {
  position: absolute;
  z-index: 6;
  border: 3px solid var(--dl-ink);
  border-radius: 49% 51% 45% 55%;
  opacity: 0.9;
  animation: dl-wiggle 5s ease-in-out infinite;
}

.dl-scribble--one {
  width: 52px;
  height: 34px;
  right: 22px;
  top: 128px;
  border-color: var(--dl-blue);
  transform: rotate(-18deg);
}

.dl-scribble--one::before {
  content: "";
  position: absolute;
  inset: 5px;
  border: 2px solid var(--dl-blue);
  border-radius: 55% 45% 50% 50%;
}

.dl-scribble--two {
  width: 46px;
  height: 28px;
  left: 20px;
  top: 232px;
  border-color: var(--dl-accent);
  transform: rotate(16deg);
  animation-delay: 1s;
}

.dl-arrow {
  position: absolute;
  right: 42px;
  bottom: 132px;
  z-index: 8;
  width: 42px;
  height: 18px;
  border-bottom: 3px solid var(--dl-ink);
  transform: rotate(-14deg);
}

.dl-arrow::before,
.dl-arrow::after {
  content: "";
  position: absolute;
  right: -1px;
  bottom: -3px;
  width: 13px;
  height: 3px;
  background: var(--dl-ink);
  border-radius: 999px;
  transform-origin: right center;
}

.dl-arrow::before {
  transform: rotate(35deg);
}

.dl-arrow::after {
  transform: rotate(-35deg);
}

.dl-checkbox:checked ~ .dl-stage {
  --dl-paper: #101010;
  --dl-ink: #f8ffe8;
  --dl-accent: #ff4f9a;
  --dl-blue: #ccff00;
  --dl-pink: #18b7ff;
  --dl-muted: #777777;
  --dl-shadow: rgba(255, 79, 154, 0.95);

  background: radial-gradient(
      circle at 15% 20%,
      rgba(204, 255, 0, 0.14),
      transparent 24%
    ),
    radial-gradient(
      circle at 86% 74%,
      rgba(255, 79, 154, 0.18),
      transparent 26%
    ),
    linear-gradient(135deg, rgba(16, 16, 16, 0.14), rgba(16, 16, 16, 0.05));
}

.dl-checkbox:checked ~ .dl-stage .dl-toggle {
  background: #111111;
  color: #ccff00;
  border-color: #ccff00;
  box-shadow: 4px 4px 0 #ff4f9a;
}

.dl-checkbox:checked ~ .dl-stage .dl-toggle-icon::before {
  transform: translateX(10px);
}

.dl-checkbox:checked ~ .dl-stage .dl-poster {
  background: radial-gradient(
      circle at 84% 18%,
      rgba(204, 255, 0, 0.16) 0 35px,
      transparent 36px
    ),
    radial-gradient(
      circle at 16% 72%,
      rgba(255, 79, 154, 0.22) 0 45px,
      transparent 46px
    ),
    linear-gradient(135deg, #101010, #191919);
}

.dl-checkbox:checked ~ .dl-stage .dl-label {
  background: #ccff00;
  color: #101010;
  box-shadow: 3px 3px 0 #ff4f9a;
}

.dl-checkbox:checked ~ .dl-stage .dl-title {
  text-shadow:
    4px 4px 0 #ff4f9a,
    -3px -2px 0 rgba(24, 183, 255, 0.9);
  transform: rotate(-1deg);
  animation: dl-glitch 2.8s steps(2) infinite;
}

.dl-checkbox:checked ~ .dl-stage .dl-title span:nth-child(2) {
  -webkit-text-stroke-color: #ccff00;
}

.dl-checkbox:checked ~ .dl-stage .dl-dot,
.dl-checkbox:checked ~ .dl-stage .dl-star,
.dl-checkbox:checked ~ .dl-stage .dl-scribble,
.dl-checkbox:checked ~ .dl-stage .dl-arrow {
  animation-duration: 2.5s;
}

@keyframes dl-marquee {
  to {
    transform: translateX(-33.33%);
  }
}

@keyframes dl-grain {
  0% {
    background-position:
      0 0,
      4px 6px;
  }

  100% {
    background-position:
      14px 7px,
      1px 18px;
  }
}

@keyframes dl-blink {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.85;
  }

  50% {
    transform: scale(0.72);
    opacity: 0.45;
  }
}

@keyframes dl-float {
  0%,
  100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -8px;
  }
}

@keyframes dl-wiggle {
  0%,
  100% {
    border-radius: 49% 51% 45% 55%;
  }

  50% {
    border-radius: 55% 45% 52% 48%;
  }
}

@keyframes dl-glitch {
  0%,
  88%,
  100% {
    translate: 0 0;
  }

  89% {
    translate: 2px -1px;
  }

  90% {
    translate: -2px 1px;
  }

  91% {
    translate: 0 0;
  }
}

@media (max-width: 640px) {
  .dl-stage {
    width: 100%;
    height: 420px;
    padding: 18px;
  }

  .dl-poster {
    width: 286px;
    height: 340px;
  }

  .dl-title {
    font-size: 51px;
  }

  .dl-ribbon {
    top: 210px;
  }

  .dl-toggle {
    top: 14px;
    right: 14px;
    transform: scale(0.9) rotate(1deg);
  }
}
`
}