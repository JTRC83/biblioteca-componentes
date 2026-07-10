export default {
  id: 'bg-pastel-vortex',
  name: 'Pastel Vortex',
  category: 'backgrounds',
  tags: ['pastel', 'vortex', 'animated', 'conic', 'blur', 'css-only'],
  author: 'ariba_9087',
  html: `<div class="bg-pastel-vortex">
  <div class="bg-pastel-vortex__bg"></div>
</div>`,
  css: `
.bg-pastel-vortex {
  background: linear-gradient(135deg, #ffe8f3, #d9f3ff);
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

.bg-pastel-vortex__bg {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2),
    rgba(0, 0, 0, 0.1)
  );
}

.bg-pastel-vortex__bg::before,
.bg-pastel-vortex__bg::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    #ff9aa2,
    #ffb7b2,
    #ffdac1,
    #e2f0cb,
    #a2e4ff,
    #c9afff,
    #ffb7b2,
    #ff9aa2
  );
  transform: translate(-50%, -50%);
  animation: bg-pastel-vortex-rotate 8s linear infinite;
  filter: blur(50px);
  opacity: 0.8;
}

.bg-pastel-vortex__bg::after {
  width: 180%;
  height: 180%;
  animation: bg-pastel-vortex-rotate-reverse 10s linear infinite;
  opacity: 0.6;
}

@keyframes bg-pastel-vortex-rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes bg-pastel-vortex-rotate-reverse {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
`
}