export default {
  id: 'profile-card-glow',
  name: 'Profile Card Glow',
  category: 'cards',
  tags: ['profile', 'card', 'tilt', '3d', 'holographic', 'shine', 'glow', 'animated', 'js-driven', 'parallax'],
  author: 'reactbits-adapted',
  source: 'reactbits.dev',
  html: `<div class="pc-wrapper" data-js-animated="true">
  <div class="pc-behind"></div>
  <div class="pc-shell">
    <section class="pc-card">
      <div class="pc-inside">
        <div class="pc-shine"></div>
        <div class="pc-glare"></div>
        <div class="pc-content pc-avatar-content">
          <img class="pc-avatar" src="https://i.pravatar.cc/300?img=33" alt="Avatar">
          <div class="pc-user-info">
            <div class="pc-user-details">
              <div class="pc-mini-avatar">
                <img src="https://i.pravatar.cc/100?img=33" alt="Mini avatar">
              </div>
              <div class="pc-user-text">
                <div class="pc-handle">@javicodes</div>
                <div class="pc-status">En linea</div>
              </div>
            </div>
            <button class="pc-contact-btn" type="button">Contactar</button>
          </div>
        </div>
        <div class="pc-content">
          <div class="pc-details">
            <h3>Javi A. Torres</h3>
            <p>Software Engineer</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>`,
  css: `.pc-wrapper {
  --pointer-x: 50%;
  --pointer-y: 50%;
  --pointer-from-center: 0;
  --pointer-from-top: 0.5;
  --pointer-from-left: 0.5;
  --card-opacity: 0;
  --rotate-x: 0deg;
  --rotate-y: 0deg;
  --background-x: 50%;
  --background-y: 50%;
  --card-radius: 30px;
  --sunpillar-1: hsl(2, 65%, 68%);
  --sunpillar-2: hsl(53, 65%, 66%);
  --sunpillar-3: hsl(93, 60%, 66%);
  --sunpillar-4: hsl(176, 65%, 70%);
  --sunpillar-5: hsl(228, 65%, 70%);
  --sunpillar-6: hsl(283, 65%, 68%);

  perspective: 500px;
  position: relative;
  touch-action: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pc-behind {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(125,190,255,0.4) 0%, transparent 50%);
  filter: blur(50px);
  opacity: calc(0.5 * var(--card-opacity));
  transition: opacity 300ms ease;
}

.pc-wrapper:hover, .pc-wrapper.active { --card-opacity: 1; }

.pc-shell { position: relative; z-index: 1; }

.pc-card {
  height: 420px;
  max-height: 80vh;
  width: auto;
  aspect-ratio: 0.718;
  border-radius: var(--card-radius);
  position: relative;
  background: rgba(20, 20, 28, 0.95);
  box-shadow: rgba(0,0,0,0.6) calc((var(--pointer-from-left) * 10px) - 3px) calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px;
  transition: transform 0.8s ease, filter 0.6s ease;
  transform: translateZ(0) rotateX(0deg) rotateY(0deg);
  backface-visibility: hidden;
  overflow: hidden;
  filter: grayscale(1) brightness(0.85);
}

.pc-card:hover, .pc-card.active {
  transition: transform 0.3s ease, filter 0.6s ease;
  transform: translateZ(0) rotateX(var(--rotate-y)) rotateY(var(--rotate-x));
  filter: grayscale(0) brightness(1);
}

.pc-shell.entering .pc-card { transition: transform 180ms ease-out; }

.pc-card * {
  display: grid;
  grid-area: 1/-1;
  border-radius: var(--card-radius);
  pointer-events: none;
}

.pc-inside {
  inset: 0;
  position: absolute;
  background: linear-gradient(145deg, rgba(96,73,110,0.3) 0%, rgba(113,196,255,0.15) 100%);
}

.pc-shine {
  --space: 5%;
  transform: translate3d(0, 0, 1px);
  overflow: hidden;
  z-index: 3;
  background-image:
    repeating-linear-gradient(0deg,
      var(--sunpillar-1) calc(var(--space) * 1),
      var(--sunpillar-2) calc(var(--space) * 2),
      var(--sunpillar-3) calc(var(--space) * 3),
      var(--sunpillar-4) calc(var(--space) * 4),
      var(--sunpillar-5) calc(var(--space) * 5),
      var(--sunpillar-6) calc(var(--space) * 6),
      var(--sunpillar-1) calc(var(--space) * 7));
  background-position: 0 var(--background-y);
  background-size: 500% 500%;
  filter: brightness(0.7) saturate(0.6) opacity(0);
  animation: holo-bg 18s linear infinite;
  mix-blend-mode: soft-light;
  transition: opacity 0.6s ease, filter 0.6s ease;
}

.pc-card:hover .pc-shine, .pc-card.active .pc-shine {
  filter: brightness(0.8) saturate(0.7) opacity(0.45);
  animation-play-state: paused;
}

.pc-glare {
  transform: translate3d(0, 0, 1.1px);
  overflow: hidden;
  background-image: radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsla(220,40%,75%,0.25) 12%, transparent 70%);
  mix-blend-mode: soft-light;
  filter: brightness(0.9);
  z-index: 4;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.pc-card:hover .pc-glare, .pc-card.active .pc-glare { opacity: 1; }

.pc-avatar-content {
  overflow: visible;
  transform: translateZ(2px);
  backface-visibility: hidden;
}

.pc-avatar {
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: -1px;
  transform-origin: 50% 100%;
  transform: translateX(calc(-50% + (var(--pointer-from-left) - 0.5) * 6px)) translateZ(0) scaleY(calc(1 + (var(--pointer-from-top) - 0.5) * 0.02)) scaleX(calc(1 + (var(--pointer-from-left) - 0.5) * 0.01));
  backface-visibility: hidden;
  will-change: transform;
  transition: transform 120ms ease-out;
}

.pc-user-info {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 12px 14px;
  pointer-events: auto;
}

.pc-user-details { display: flex; align-items: center; gap: 12px; }

.pc-mini-avatar {
  width: 36px; height: 36px;
  border-radius: 50%; overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  flex-shrink: 0;
}

.pc-mini-avatar img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }

.pc-user-text { display: flex; flex-direction: column; gap: 4px; }

.pc-handle { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.9); line-height: 1; }
.pc-status { font-size: 12px; color: rgba(255,255,255,0.7); line-height: 1; }

.pc-contact-btn {
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  background: transparent;
  font-family: inherit;
}

.pc-contact-btn:hover { border-color: rgba(255,255,255,0.4); transform: translateY(-1px); }

.pc-content:not(.pc-avatar-content) {
  max-height: 100%;
  overflow: hidden;
  text-align: center;
  position: relative;
  transform: translate3d(calc(var(--pointer-from-left) * -6px + 3px), calc(var(--pointer-from-top) * -6px + 3px), 0.1px);
  z-index: 5;
  mix-blend-mode: normal;
}

.pc-details {
  width: 100%;
  position: absolute;
  top: 3em;
  display: flex;
  flex-direction: column;
}

.pc-details h3 {
  font-weight: 600;
  margin: 0;
  font-size: 2.5em;
  background-image: linear-gradient(to bottom, #fff, #6f6fbe);
  background-size: 1em 1.5em;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.pc-details p {
  font-weight: 600;
  position: relative;
  top: -12px;
  white-space: nowrap;
  font-size: 16px;
  margin: 0 auto;
  width: min-content;
  background-image: linear-gradient(to bottom, #fff, #4a4ac0);
  background-size: 1em 1.5em;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

@keyframes holo-bg {
  0% { background-position: 0% var(--background-y); }
  100% { background-position: 100% var(--background-y); }
}
`,
  js: `(() => {
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
  const round = (v, p) => parseFloat(v.toFixed(p || 3));
  const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

  function setupCard(wrapper) {
    const shell = wrapper.querySelector('.pc-shell');
    const card = wrapper.querySelector('.pc-card');
    if (!shell || !card) return;

    let rafId = null;
    let running = false;
    let lastTs = 0;
    let currentX = 0, currentY = 0, targetX = 0, targetY = 0;
    let initialUntil = 0;

    function setVars(x, y) {
      const w = card.clientWidth || 1;
      const h = card.clientHeight || 1;
      const px = clamp((100 / w) * x, 0, 100);
      const py = clamp((100 / h) * y, 0, 100);
      const cx = px - 50;
      const cy = py - 50;
      wrapper.style.setProperty('--pointer-x', px + '%');
      wrapper.style.setProperty('--pointer-y', py + '%');
      wrapper.style.setProperty('--background-x', adjust(px, 0, 100, 35, 65) + '%');
      wrapper.style.setProperty('--background-y', adjust(py, 0, 100, 35, 65) + '%');
      wrapper.style.setProperty('--pointer-from-center', clamp(Math.hypot(py - 50, px - 50) / 50, 0, 1));
      wrapper.style.setProperty('--pointer-from-top', py / 100);
      wrapper.style.setProperty('--pointer-from-left', px / 100);
      wrapper.style.setProperty('--rotate-x', round(-(cx / 5)) + 'deg');
      wrapper.style.setProperty('--rotate-y', round(cy / 4) + 'deg');
    }

    function step(ts) {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      const tau = ts < initialUntil ? 0.6 : 0.14;
      const k = 1 - Math.exp(-dt / tau);
      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;
      setVars(currentX, currentY);
      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        rafId = null;
      }
    }

    function start() {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    }

    function getOffsets(evt) {
      const rect = card.getBoundingClientRect();
      return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
    }

    function onMove(evt) {
      const { x, y } = getOffsets(evt);
      targetX = x; targetY = y;
      start();
    }

    function onEnter(evt) {
      card.classList.add('active');
      shell.classList.add('entering');
      setTimeout(() => shell.classList.remove('entering'), 180);
      const { x, y } = getOffsets(evt);
      targetX = x; targetY = y;
      start();
    }

    function onLeave() {
      targetX = card.clientWidth / 2;
      targetY = card.clientHeight / 2;
      start();
      function checkSettle() {
        if (Math.hypot(targetX - currentX, targetY - currentY) < 0.6) {
          card.classList.remove('active');
        } else {
          requestAnimationFrame(checkSettle);
        }
      }
      requestAnimationFrame(checkSettle);
    }

    card.addEventListener('pointerenter', onEnter);
    card.addEventListener('pointermove', onMove);
    card.addEventListener('pointerleave', onLeave);

    const ix = (card.clientWidth || 0) - 70;
    const iy = 60;
    currentX = ix; currentY = iy;
    setVars(ix, iy);
    targetX = card.clientWidth / 2;
    targetY = card.clientHeight / 2;
    initialUntil = performance.now() + 1200;
    start();
  }

  function init() {
    document.querySelectorAll('[data-js-animated="true"].pc-wrapper').forEach(setupCard);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();`
}