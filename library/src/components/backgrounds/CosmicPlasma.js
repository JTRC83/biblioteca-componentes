export default {
  id: 'bg-cosmic-plasma',
  name: 'Cosmic Plasma',
  category: 'backgrounds',
  tags: ['cosmic', 'plasma', 'conic', 'svg', 'filter', 'css-only'],
  author: 'chase2k25',
  html: `<div class="bg-cosmic-plasma">
  <div class="bg-cosmic-plasma__bg">
    <svg class="bg-cosmic-plasma__filter" style="position:absolute;width:0;height:0">
      <filter id="bg-cosmic-plasma-texture">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.02"
          numOctaves="4"
          result="noise"
        ></feTurbulence>
        <feColorMatrix type="hueRotate" values="0" result="hue"></feColorMatrix>
        <feGaussianBlur in="hue" stdDeviation="2" result="blur"></feGaussianBlur>
        <feBlend in="SourceGraphic" in2="blur" mode="multiply"></feBlend>
      </filter>
    </svg>
    <div class="bg-cosmic-plasma__plasma"></div>
    <span class="bg-cosmic-plasma__overlay"></span>
  </div>
</div>`,
  css: `
.bg-cosmic-plasma {
  background: #1a0a2e;
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

.bg-cosmic-plasma__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.bg-cosmic-plasma__plasma {
  width: 100%;
  height: 100%;
  background: conic-gradient(
    from 45deg,
    rgba(255, 0, 0, 0.4),
    rgba(0, 0, 255, 0.4),
    rgba(255, 0, 255, 0.4),
    rgba(0, 255, 0, 0.4),
    rgba(255, 0, 0, 0.4)
  );
  filter: url(#bg-cosmic-plasma-texture);
  position: relative;
}

.bg-cosmic-plasma__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2) 0%,
    transparent 70%
  );
  pointer-events: none;
}
`
}