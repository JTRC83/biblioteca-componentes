export default {
  id: 'loader-liquid-progress',
  name: 'Liquid Progress Bar',
  category: 'loaders',
  tags: ['loader', 'progress', 'bar', 'animated', 'css-only', 'liquid', 'gradient', 'percent', 'loading'],
  author: 'ShaikhWahid99',
  html: `<div class="lp-liquid-loader">
  <div class="lp-loading-text">
    Loading<span class="lp-dot">.</span><span class="lp-dot">.</span
    ><span class="lp-dot">.</span>
  </div>

  <div class="lp-loader-track">
    <div class="lp-liquid-fill"></div>
  </div>
</div>`,
  css: `
.lp-liquid-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 20px;
  font-family: system-ui, sans-serif;
}

.lp-loader-track {
  position: relative;
  width: 180px;
  height: 32px;
  background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    inset 0 2px 4px rgba(0, 0, 0, 0.6),
    0 1px 3px rgba(255, 255, 255, 0.1);
}

.lp-liquid-fill {
  position: absolute;
  top: 2px;
  left: 2px;
  height: calc(100% - 4px);
  background: linear-gradient(90deg, #4f46e5, #7c3aed, #ec4899, #f59e0b);
  border-radius: 14px;
  animation:
    lp-fill-progress 4s ease-out infinite,
    lp-color-shift 3s linear infinite;
  box-shadow:
    0 0 12px rgba(124, 58, 237, 0.4),
    inset 0 1px 2px rgba(255, 255, 255, 0.2);
}

.lp-loading-text {
  color: white;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  animation: lp-text-glow 1s ease-in-out infinite;
}

.lp-dot {
  margin-left: 3px;
  animation: lp-blink 1.5s infinite;
}
.lp-dot:nth-of-type(1) {
  animation-delay: 0s;
}
.lp-dot:nth-of-type(2) {
  animation-delay: 0.3s;
}
.lp-dot:nth-of-type(3) {
  animation-delay: 0.6s;
}

@keyframes lp-fill-progress {
  0% {
    width: 4px;
  }
  25% {
    width: 25%;
  }
  50% {
    width: 50%;
  }
  75% {
    width: 75%;
  }
  100% {
    width: calc(100% - 4px);
  }
}

@keyframes lp-color-shift {
  0% {
    filter: hue-rotate(0deg) brightness(1);
  }
  33% {
    filter: hue-rotate(120deg) brightness(1.1);
  }
  66% {
    filter: hue-rotate(240deg) brightness(0.9);
  }
  100% {
    filter: hue-rotate(360deg) brightness(1);
  }
}

@keyframes lp-text-glow {
  0%,
  100% {
    opacity: 0.7;
    text-shadow: 0 0 8px rgba(139, 92, 246, 0.3);
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 16px rgba(139, 92, 246, 0.6);
  }
}

@keyframes lp-blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}
`
}