export default {
  id: 'loader-3d-cube',
  name: '3D Processing Cube',
  category: 'loaders',
  tags: ['loader', '3d', 'cube', 'rotating', 'animated', 'css-only', 'perspective', 'geometric', 'processing'],
  author: 'dexter-st',
  html: `<div class="cb-scene">
  <div class="cb-cube-shadow">
    <div class="cb-face cb-face-bottom"></div>
  </div>
  <div class="cb-cube-shadow">
    <div class="cb-face cb-face-bottom"></div>
  </div>
  <div class="cb-blur">
    <div class="cb-cube-inner">
      <div class="cb-face cb-face-front cb-bg-color-in"></div>
      <div class="cb-face cb-face-back cb-bg-color-in"></div>
      <div class="cb-face cb-face-right cb-bg-color-in"></div>
      <div class="cb-face cb-face-left cb-bg-color-in"></div>
      <div class="cb-face cb-face-top cb-bg-color-in"></div>
      <div class="cb-face cb-face-bottom cb-bg-color-in"></div>
    </div>
  </div>
  <div class="cb-cube-outer">
    <div class="cb-face cb-face-front cb-bg-color-out">Processing</div>
    <div class="cb-face cb-face-back cb-bg-color-out">Please wait</div>
    <div class="cb-face cb-face-right cb-bg-color-out">...</div>
    <div class="cb-face cb-face-left cb-bg-color-out">...</div>
    <div class="cb-face cb-face-top cb-bg-color-out"></div>
    <div class="cb-face cb-face-bottom cb-bg-color-out"></div>
  </div>
  <div class="cb-light"></div>
  <div class="cb-shadow"></div>
</div>`,
  css: `
.cb-scene {
  --cb-cube-size: 120px;
  --cb-inner-multiplier: 0.5;
  --cb-color-inner: hsla(85, 100%, 50%, 0.85);
  --cb-color-outer: hsla(170, 70%, 50%, 0.2);
  --cb-blur: 2px;
  --cb-angle: -10deg;
  --cb-duration: 7s;

  position: relative;
  width: var(--cb-cube-size);
  height: var(--cb-cube-size);
  perspective: 750px;
}

.cb-cube-outer,
.cb-cube-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.cb-cube-inner {
  --cb-inner-scale: clamp(0.1, var(--cb-inner-multiplier), 0.6);
  scale: var(--cb-inner-scale);
  top: calc((1 - var(--cb-inner-scale)) * var(--cb-cube-size) / 2);
}

.cb-face {
  user-select: none;
  display: grid;
  place-items: center;
  position: absolute;
  width: var(--cb-cube-size);
  height: var(--cb-cube-size);
  box-shadow:
    inset 0 0 2px 0 #fff5,
    inset 0 0 12px -8px #fff1,
    inset 0 0 32px -10px #fff1,
    inset 0 0 64px -8px #fff1,
    inset 0 0 32px 16px #00000015;
  overflow: clip;

  font:
    500 1em "Inter",
    sans-serif;
  letter-spacing: -0.01em;
  color: #111;
  text-shadow:
    0 3px 4px #0008,
    0 -6px 6px #0005;
  animation: cb-blur-anim var(--cb-duration, 10s) linear infinite reverse;
}

.cb-face-front {
  transform: rotateY(0deg) translateZ(calc(var(--cb-cube-size) / 2));
  animation-delay: 0s;
}

.cb-face-right {
  transform: rotateY(90deg) translateZ(calc(var(--cb-cube-size) / 2));
  animation-delay: calc(var(--cb-duration, 10s) * -0.75);
}

.cb-face-back {
  transform: rotateY(180deg) translateZ(calc(var(--cb-cube-size) / 2));
  animation-delay: calc(var(--cb-duration, 10s) * -0.5);
}

.cb-face-left {
  transform: rotateY(-90deg) translateZ(calc(var(--cb-cube-size) / 2));
  animation-delay: calc(var(--cb-duration, 10s) * -0.25);
}

.cb-face-top {
  transform: rotateX(90deg) translateZ(calc(var(--cb-cube-size) / 2));
  animation: none;
}

.cb-face-bottom {
  transform: rotateX(-90deg) translateZ(calc(var(--cb-cube-size) / 2));
  filter: blur(20px);
  animation: none;
}

.cb-cube-inner .cb-face {
  animation: none;
  box-shadow:
    inset 0 0 1px 0px #000e,
    inset 0 0 12px -2px #0005,
    inset 0 0 32px 0px #0001,
    inset 0 0 64px 8px #0001;
}

@keyframes cb-blur-anim {
  0%,
  9% {
    filter: blur(0px);
  }

  10%,
  64% {
    filter: blur(10px);
  }

  65%,
  100% {
    filter: blur(0px);
  }
}

.cb-bg-color-in {
  background: var(--cb-color-inner);
}

.cb-bg-color-out {
  background-color: var(--cb-color-outer);
  background: linear-gradient(to bottom, #fff5, #0000),
    radial-gradient(
      circle at 50% -50%,
      var(--cb-color-inner) -20%,
      #fff0 30%,
      var(--cb-color-outer)
    );
}

.cb-cube-outer,
.cb-cube-inner {
  transform: rotateX(-20deg) rotateY(45deg);
}

.cb-cube-inner {
  position: absolute;
  transform-origin: center;
  scale: clamp(0.1, var(--cb-inner-multiplier), 0.6);
  animation: cb-rotate var(--cb-duration, 10s) linear infinite;
}

.cb-cube-outer {
  animation: cb-rotate var(--cb-duration, 10s) linear infinite reverse;
}

@keyframes cb-rotate {
  from {
    transform: rotateX(clamp(-40deg, var(--cb-angle), 40deg)) rotateY(45deg);
  }

  to {
    transform: rotateX(clamp(-40deg, var(--cb-angle), 40deg)) rotateY(405deg);
  }
}

.cb-blur {
  filter: blur(clamp(1px, var(--cb-blur, 7px), 20px));
}

.cb-cube-shadow {
  inset: 25%;
  transform-style: preserve-3d;
  position: absolute;
  background-color: #00000015;
  filter: blur(5px);
  animation: cb-rotate-shadow var(--cb-duration, 10s) linear infinite;
  z-index: 1;
  mix-blend-mode: multiply;
}

.cb-cube-shadow:nth-child(2) {
  inset: 0%;
  transform-style: preserve-3d;
  position: absolute;
  background-color: #00000015;
  filter: blur(5px);
  animation: cb-rotate-shadow var(--cb-duration, 10s) linear infinite reverse;
  z-index: 0;
}

@keyframes cb-rotate-shadow {
  from {
    transform: rotateX(calc(-100deg + clamp(-40deg, var(--cb-angle), 40deg)))
      rotateZ(45deg) translateZ(calc(var(--cb-cube-size) / 1.5));
  }

  to {
    transform: rotateX(calc(-100deg + clamp(-40deg, var(--cb-angle), 40deg)))
      rotateZ(405deg) translateZ(calc(var(--cb-cube-size) / 1.5));
  }
}

.cb-scene .cb-shadow {
  position: absolute;
  top: 45%;
  left: 35%;
  width: 50%;
  aspect-ratio: 1 / 1.5;
  background-color: #999;
  border-radius: 50%;
  transform: rotate(45deg);
  filter: blur(24px);
  mix-blend-mode: color-burn;
}

.cb-scene .cb-light {
  position: absolute;
  background-color: #555b;
  filter: blur(30px);
  mix-blend-mode: color-dodge;
  inset: 22%;
}

.cb-scene::before {
  content: "";
  position: absolute;
  inset: -100%;
  top: 50%;
  background-color: #0002;
  filter: blur(70px);
}
`
}