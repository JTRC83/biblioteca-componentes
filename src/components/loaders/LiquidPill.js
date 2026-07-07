export default {
  id: 'loader-liquid-pill',
  name: 'Liquid Glass Pill Loader',
  category: 'loaders',
  tags: ['loader', 'liquid', 'glass', 'orb', 'animated', 'css-only', 'bubbles', 'premium', '3d'],
  author: 'xyzswas',
  html: `<div
  class="lgl-loader"
  role="status"
  aria-live="polite"
  aria-label="Loading content"
  tabindex="0"
>
  <div class="lgl-shell">
    <div class="lgl-orb" aria-hidden="true">
      <span class="lgl-bubble lgl-bubble--1"></span>
      <span class="lgl-bubble lgl-bubble--2"></span>
      <span class="lgl-bubble lgl-bubble--3"></span>
      <span class="lgl-bubble lgl-bubble--4"></span>
      <span class="lgl-bubble lgl-bubble--5"></span>
      <span class="lgl-bubble lgl-bubble--6"></span>
    </div>

    <span class="lgl-label">Loading</span>
  </div>
</div>`,
  css: `
.lgl-loader {
  --lgl-bg-1: #ffffff;
  --lgl-bg-2: #f7f2ff;
  --lgl-bg-3: #eee6ff;

  --lgl-edge: rgba(111, 83, 214, 0.18);
  --lgl-edge-bright: rgba(255, 255, 255, 0.86);

  --lgl-shadow: rgba(54, 36, 116, 0.18);
  --lgl-shadow-strong: rgba(54, 36, 116, 0.3);
  --lgl-contact: rgba(49, 28, 104, 0.2);

  --lgl-text: #2d2059;

  --lgl-orb-1: #d8cbff;
  --lgl-orb-2: #a98cff;
  --lgl-orb-3: #7650f2;
  --lgl-orb-4: #3f18ad;
  --lgl-orb-deep: #251064;

  --lgl-glow: rgba(144, 112, 255, 0.42);
  --lgl-bubble: rgba(255, 255, 255, 0.94);
  --lgl-bubble-soft: rgba(255, 255, 255, 0.42);
  --lgl-focus: rgba(133, 107, 255, 0.34);

  display: inline-block;
  perspective: 72em;
  transform-style: preserve-3d;
}

.lgl-shell {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.95em;

  min-width: 12.2em;
  min-height: 4.7em;
  padding: 0.9em 1.2em;

  border-radius: 999em;
  border: 0.08em solid var(--lgl-edge);

  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.95) 0%,
      rgba(255, 255, 255, 0.5) 18%,
      transparent 42%
    ),
    radial-gradient(
      ellipse at 22% 8%,
      rgba(255, 255, 255, 0.92) 0%,
      rgba(255, 255, 255, 0.38) 24%,
      transparent 48%
    ),
    linear-gradient(
      165deg,
      var(--lgl-bg-1) 0%,
      var(--lgl-bg-2) 54%,
      var(--lgl-bg-3) 100%
    );

  box-shadow:
    0 1.45em 2.8em var(--lgl-shadow),
    0 0.65em 0.85em -0.65em var(--lgl-contact),
    inset 0 0.16em 0.22em var(--lgl-edge-bright),
    inset 0 -0.58em 1.05em rgba(91, 60, 188, 0.16),
    inset 0 -0.12em 0.16em rgba(54, 28, 132, 0.12),
    inset 0 0 0 0.055em rgba(255, 255, 255, 0.5);

  transform-style: preserve-3d;
  transform: rotateX(0deg) rotateY(0deg) translateZ(0);
  translate: 0 0;

  overflow: hidden;
  cursor: default;
  outline: none;
  user-select: none;

  transition:
    transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 260ms ease;

  animation: lgl-shell-float 4s ease-in-out infinite;
}

.lgl-shell::before {
  content: "";
  position: absolute;
  inset: 0.18em;
  border-radius: inherit;

  background: linear-gradient(
    115deg,
    transparent 0%,
    transparent 18%,
    rgba(255, 255, 255, 0.78) 28%,
    rgba(255, 255, 255, 0.22) 39%,
    transparent 58%
  );

  transform: translateX(-135%) skewX(-8deg);
  pointer-events: none;
  z-index: 3;

  animation: lgl-shell-sheen 4.2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}

.lgl-shell::after {
  content: "";
  position: absolute;
  width: 5em;
  height: 5em;
  right: -1.75em;
  bottom: -1.95em;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(144, 112, 255, 0.42) 0%,
    rgba(144, 112, 255, 0.18) 34%,
    transparent 72%
  );

  filter: blur(0.28em);
  pointer-events: none;
  z-index: 0;
}

.lgl-loader:focus-visible .lgl-shell,
.lgl-shell:focus-visible {
  box-shadow:
    0 1.45em 2.8em var(--lgl-shadow),
    0 0 0 0.24em var(--lgl-focus),
    inset 0 0.16em 0.22em var(--lgl-edge-bright),
    inset 0 -0.58em 1.05em rgba(91, 60, 188, 0.16),
    inset 0 0 0 0.055em rgba(255, 255, 255, 0.5);
}

.lgl-loader:hover .lgl-shell {
  transform: rotateX(6deg) rotateY(-4deg) translateZ(0.3em);
  border-color: rgba(111, 83, 214, 0.24);

  box-shadow:
    0 1.75em 3.2em var(--lgl-shadow-strong),
    0 0.8em 1em -0.65em var(--lgl-contact),
    inset 0 0.18em 0.26em rgba(255, 255, 255, 0.92),
    inset 0 -0.68em 1.2em rgba(91, 60, 188, 0.19),
    inset 0 -0.12em 0.16em rgba(54, 28, 132, 0.14),
    inset 0 0 0 0.055em rgba(255, 255, 255, 0.58);
}

.lgl-loader:active .lgl-shell {
  transform: rotateX(2deg) rotateY(-1deg) translateZ(0) scale(0.985);
}

.lgl-orb {
  position: relative;
  width: 2.55em;
  height: 2.55em;
  flex: 0 0 auto;

  border-radius: 50%;
  overflow: hidden;
  isolation: isolate;

  background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.52) 0%,
      rgba(255, 255, 255, 0.16) 24%,
      transparent 42%
    ),
    radial-gradient(
      ellipse at 42% 28%,
      var(--lgl-orb-1) 0%,
      var(--lgl-orb-2) 30%,
      var(--lgl-orb-3) 64%,
      var(--lgl-orb-4) 86%,
      var(--lgl-orb-deep) 100%
    );

  box-shadow:
    0 0.72em 1.2em rgba(72, 38, 184, 0.34),
    0 0 1.25em rgba(137, 104, 255, 0.28),
    inset 0 0.16em 0.22em rgba(255, 255, 255, 0.58),
    inset -0.22em -0.36em 0.56em rgba(31, 10, 100, 0.44),
    inset 0.16em 0.18em 0.28em rgba(255, 255, 255, 0.2),
    inset 0 0 0 0.075em rgba(255, 255, 255, 0.18);

  transform-style: preserve-3d;
  transform: translateZ(0.6em);

  animation:
    lgl-orb-float 2.8s cubic-bezier(0.37, 0, 0.22, 1) infinite,
    lgl-orb-wobble 4.8s ease-in-out infinite;
}

.lgl-orb::before {
  content: "";
  position: absolute;
  inset: 0.12em;
  border-radius: inherit;

  background: linear-gradient(
    155deg,
    rgba(255, 255, 255, 0.28) 0%,
    transparent 34%,
    rgba(46, 14, 137, 0.16) 74%,
    rgba(13, 4, 55, 0.28) 100%
  );

  mix-blend-mode: screen;
  pointer-events: none;
  z-index: 3;
}

.lgl-orb::after {
  content: "";
  position: absolute;
  left: -18%;
  top: 13%;
  width: 136%;
  height: 64%;

  border-radius: 48% 52% 54% 46% / 42% 44% 56% 58%;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.24) 0%,
    rgba(255, 255, 255, 0.08) 42%,
    transparent 72%
  );

  transform: rotate(-8deg);
  filter: blur(0.025em);
  pointer-events: none;
  z-index: 2;

  animation: lgl-liquid-surface 3.4s ease-in-out infinite;
}

.lgl-label {
  position: relative;
  z-index: 4;

  color: var(--lgl-text);
  font:
    700 0.96em/1.2 system-ui,
    sans-serif;
  letter-spacing: 0.03em;

  text-shadow:
    0 0.06em 0 rgba(255, 255, 255, 0.78),
    0 0.22em 0.55em rgba(67, 42, 138, 0.12);
}

.lgl-label::after {
  content: "";
  display: inline-block;
  width: 1.25em;
  text-align: left;
  animation: lgl-ellipsis 1.35s steps(4, end) infinite;
}

.lgl-bubble {
  position: absolute;
  bottom: -0.42em;

  border-radius: 50%;

  background: radial-gradient(
    circle at 34% 28%,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(255, 255, 255, 0.82) 28%,
    var(--lgl-bubble-soft) 48%,
    rgba(255, 255, 255, 0.08) 100%
  );

  box-shadow:
    inset 0 0.05em 0.12em rgba(255, 255, 255, 0.72),
    inset -0.04em -0.06em 0.1em rgba(112, 72, 220, 0.18),
    0 0.08em 0.18em rgba(39, 18, 112, 0.18);

  opacity: 0;
  transform: translate3d(0, 0, 0) scale(0.7);
  filter: blur(0.002em);

  will-change: transform, opacity, filter;
  z-index: 4;
}

.lgl-bubble--1 {
  left: 0.34em;
  width: 0.34em;
  height: 0.34em;
  animation: lgl-bubble-rise-1 2s cubic-bezier(0.2, 0.86, 0.22, 1) infinite;
}

.lgl-bubble--2 {
  left: 0.78em;
  width: 0.25em;
  height: 0.25em;
  animation: lgl-bubble-rise-2 2.28s cubic-bezier(0.2, 0.86, 0.22, 1) 0.22s
    infinite;
}

.lgl-bubble--3 {
  left: 1.1em;
  width: 0.4em;
  height: 0.4em;
  animation: lgl-bubble-rise-3 2.42s cubic-bezier(0.2, 0.86, 0.22, 1) 0.48s
    infinite;
}

.lgl-bubble--4 {
  left: 1.48em;
  width: 0.22em;
  height: 0.22em;
  animation: lgl-bubble-rise-4 1.88s cubic-bezier(0.2, 0.86, 0.22, 1) 0.34s
    infinite;
}

.lgl-bubble--5 {
  left: 1.72em;
  width: 0.3em;
  height: 0.3em;
  animation: lgl-bubble-rise-5 2.56s cubic-bezier(0.2, 0.86, 0.22, 1) 0.72s
    infinite;
}

.lgl-bubble--6 {
  left: 0.56em;
  width: 0.18em;
  height: 0.18em;
  animation: lgl-bubble-rise-6 1.72s cubic-bezier(0.2, 0.86, 0.22, 1) 0.92s
    infinite;
}

@keyframes lgl-shell-float {
  0%,
  100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -0.07em;
  }
}

@keyframes lgl-shell-sheen {
  0%,
  18% {
    transform: translateX(-135%) skewX(-8deg);
  }

  54%,
  100% {
    transform: translateX(132%) skewX(-8deg);
  }
}

@keyframes lgl-orb-float {
  0%,
  100% {
    translate: 0 0;
    scale: 1;
  }

  50% {
    translate: 0 -0.07em;
    scale: 1.035;
  }
}

@keyframes lgl-orb-wobble {
  0%,
  100% {
    border-radius: 50% 50% 48% 52% / 49% 51% 49% 51%;
  }

  25% {
    border-radius: 53% 47% 50% 50% / 47% 53% 48% 52%;
  }

  50% {
    border-radius: 49% 51% 54% 46% / 50% 48% 52% 50%;
  }

  75% {
    border-radius: 51% 49% 47% 53% / 52% 50% 50% 48%;
  }
}

@keyframes lgl-liquid-surface {
  0%,
  100% {
    transform: translateY(0) rotate(-8deg) scaleX(1);
    opacity: 0.72;
  }

  50% {
    transform: translateY(0.08em) rotate(-3deg) scaleX(1.06);
    opacity: 0.92;
  }
}

@keyframes lgl-bubble-rise-1 {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) scale(0.55);
    filter: blur(0.018em);
  }

  14% {
    opacity: 0.92;
  }

  62% {
    opacity: 0.96;
    filter: blur(0);
  }

  100% {
    opacity: 0;
    transform: translate3d(0.13em, -2.2em, 0) scale(1.08);
    filter: blur(0.035em);
  }
}

@keyframes lgl-bubble-rise-2 {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) scale(0.5);
    filter: blur(0.018em);
  }

  18% {
    opacity: 0.84;
  }

  68% {
    opacity: 0.92;
    filter: blur(0);
  }

  100% {
    opacity: 0;
    transform: translate3d(-0.13em, -2.04em, 0) scale(0.96);
    filter: blur(0.032em);
  }
}

@keyframes lgl-bubble-rise-3 {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) scale(0.62);
    filter: blur(0.018em);
  }

  15% {
    opacity: 0.95;
  }

  66% {
    opacity: 0.98;
    filter: blur(0);
  }

  100% {
    opacity: 0;
    transform: translate3d(0.1em, -2.25em, 0) scale(1.12);
    filter: blur(0.04em);
  }
}

@keyframes lgl-bubble-rise-4 {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) scale(0.45);
    filter: blur(0.018em);
  }

  16% {
    opacity: 0.82;
  }

  70% {
    opacity: 0.88;
    filter: blur(0);
  }

  100% {
    opacity: 0;
    transform: translate3d(-0.08em, -1.92em, 0) scale(0.92);
    filter: blur(0.03em);
  }
}

@keyframes lgl-bubble-rise-5 {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) scale(0.58);
    filter: blur(0.018em);
  }

  14% {
    opacity: 0.88;
  }

  64% {
    opacity: 0.95;
    filter: blur(0);
  }

  100% {
    opacity: 0;
    transform: translate3d(-0.16em, -2.3em, 0) scale(1.04);
    filter: blur(0.038em);
  }
}

@keyframes lgl-bubble-rise-6 {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0) scale(0.4);
    filter: blur(0.018em);
  }

  20% {
    opacity: 0.8;
  }

  68% {
    opacity: 0.85;
    filter: blur(0);
  }

  100% {
    opacity: 0;
    transform: translate3d(0.14em, -1.9em, 0) scale(0.84);
    filter: blur(0.03em);
  }
}

@keyframes lgl-ellipsis {
  0% {
    content: "";
  }

  25% {
    content: ".";
  }

  50% {
    content: "..";
  }

  75%,
  100% {
    content: "...";
  }
}

@media (prefers-reduced-motion: reduce) {
  .lgl-shell,
  .lgl-shell::before,
  .lgl-orb,
  .lgl-orb::after,
  .lgl-bubble,
  .lgl-label::after {
    animation-duration: 0.01ms;
    animation-iteration-count: 1;
  }
}
`
}