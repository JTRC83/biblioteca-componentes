export default {
  id: 'bg-night-sky',
  name: 'Night Sky',
  category: 'backgrounds',
  tags: ['night', 'stars', 'aurora', 'svg', 'filter', 'animated', 'css-only'],
  author: 'Danishrehman786',
  html: `<div class="bg-night-sky">
  <div class="bg-night-sky__bg">
    <svg class="bg-night-sky__filter-svg" style="position:absolute;width:0;height:0">
      <filter id="bg-night-sky-filter">
        <feTurbulence
          result="noise"
          numOctaves="3"
          baseFrequency="0.015"
          type="fractalNoise"
        ></feTurbulence>
        <feColorMatrix
          result="blueFog"
          values="0 0 0 0 0
                  0 0 0 0 0
                  0 0 0.8 0 0.2
                  0 0 0 1 0"
          type="matrix"
          in="noise"
        ></feColorMatrix>
        <feBlend mode="lighten" in2="blueFog" in="SourceGraphic"></feBlend>
      </filter>
    </svg>
    <div class="bg-night-sky__sky"></div>
    <span class="bg-night-sky__stars"></span>
    <span class="bg-night-sky__aurora"></span>
  </div>
</div>`,
  css: `
.bg-night-sky {
  background: #020111;
  width: 100%;
  height: 100%;
  min-height: 200px;
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
}

.bg-night-sky__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.bg-night-sky__sky {
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #020111 0%, #0b0c28 100%);
  filter: url(#bg-night-sky-filter);
  position: relative;
  overflow: hidden;
  pointer-events: none;
}

.bg-night-sky__stars {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(white 1px, transparent 1px),
    radial-gradient(#00ffaa 1px, transparent 1px),
    radial-gradient(#ffffff 1px, transparent 1px);
  background-size:
    3px 3px,
    4px 4px,
    5px 5px;
  background-position:
    0 0,
    100px 100px,
    200px 50px;
  animation: bg-night-sky-twinkle 5s infinite alternate ease-in-out;
  opacity: 0.06;
  z-index: 1;
}

.bg-night-sky__aurora {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse at 50% 80%,
      rgba(0, 255, 255, 0.05),
      transparent 70%
    ),
    radial-gradient(
      ellipse at 30% 90%,
      rgba(0, 150, 255, 0.07),
      transparent 80%
    );
  animation: bg-night-sky-aurora 20s ease-in-out infinite;
  background-size: 200% 200%;
  z-index: 2;
}

@keyframes bg-night-sky-twinkle {
  0% { opacity: 0.03; }
  100% { opacity: 0.12; }
}

@keyframes bg-night-sky-aurora {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
}
`
}