export default {
  id: 'card-swap',
  name: 'Card Swap',
  category: 'cards',
  tags: ['card', 'swap', 'stack', '3d', 'animated', 'js-driven', 'gsap-inspired', 'perspective', 'carousel'],
  author: 'reactbits-adapted',
  source: 'reactbits.dev',
  html: `<div class="card-swap" data-js-animated="true">
  <div class="card-swap__container">
    <div class="card-swap__card" data-index="0">
      <div class="card-swap__card-inner">
        <h3 class="card-swap__title">Nova Bank</h3>
        <p class="card-swap__desc">Rebranding completo para el banco digital del futuro.</p>
        <span class="card-swap__tag">Branding · 2025</span>
      </div>
    </div>
    <div class="card-swap__card" data-index="1">
      <div class="card-swap__card-inner">
        <h3 class="card-swap__title">Pulse App</h3>
        <p class="card-swap__desc">App movil con UX optimizada para conversión.</p>
        <span class="card-swap__tag">UI/UX · Mobile</span>
      </div>
    </div>
    <div class="card-swap__card" data-index="2">
      <div class="card-swap__card-inner">
        <h3 class="card-swap__title">Orbit Labs</h3>
        <p class="card-swap__desc">Plataforma web con animaciones inmersivas.</p>
        <span class="card-swap__tag">Web · Development</span>
      </div>
    </div>
    <div class="card-swap__card" data-index="3">
      <div class="card-swap__card-inner">
        <h3 class="card-swap__title">Echo Festival</h3>
        <p class="card-swap__desc">Identidad visual para festival de musica.</p>
        <span class="card-swap__tag">Event · Identity</span>
      </div>
    </div>
  </div>
</div>`,
  css: `.card-swap {
  width: 100%;
  height: 100%;
  min-height: 320px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 900px;
  overflow: visible;
  background: #050408;
  border-radius: 16px;
}

.card-swap__container {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.card-swap__card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  max-width: 320px;
  height: 200px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.12);
  background: linear-gradient(145deg, #18181c, #0f0f12);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform-origin: center center;
  overflow: hidden;
}

.card-swap__card:nth-child(1) { background: linear-gradient(145deg, #1a1a2e, #0f3460); }
.card-swap__card:nth-child(2) { background: linear-gradient(145deg, #2d1b4e, #5227ff); }
.card-swap__card:nth-child(3) { background: linear-gradient(145deg, #1a1a2e, #e94560); }
.card-swap__card:nth-child(4) { background: linear-gradient(145deg, #0f3460, #16c79a); }

.card-swap__card-inner {
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.card-swap__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 6px;
}

.card-swap__desc {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.5;
  margin: 0 0 10px;
}

.card-swap__tag {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.4);
}

@media (max-width: 768px) {
  .card-swap__container { transform: scale(0.75); }
}
`,
  js: `(() => {
  function setupCardSwap(root) {
    const container = root.querySelector('.card-swap__container');
    if (!container) return;
    const cards = Array.from(container.querySelectorAll('.card-swap__card'));
    if (cards.length < 2) return;

    const cardDistance = 45;
    const verticalDistance = 75;
    const delay = 4000;
    const skewAmount = 6;
    const total = cards.length;

    let order = Array.from({ length: total }, (_, i) => i);
    let intervalId = null;
    let animating = false;

    function makeSlot(i) {
      return {
        x: i * cardDistance,
        y: -i * verticalDistance,
        z: -i * cardDistance * 1.5,
        zIndex: total - i
      };
    }

    function setCard(el, x, y, z, skew, zi) {
      el.style.transform = 'translate(-50%, -50%) translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px) skewY(' + skew + 'deg)';
      el.style.zIndex = zi;
    }

    const state = cards.map(() => ({ x: 0, y: 0, z: 0 }));

    function initPositions() {
      cards.forEach((card, i) => {
        const slot = makeSlot(i);
        state[i] = { x: slot.x, y: slot.y, z: slot.z };
        setCard(card, slot.x, slot.y, slot.z, skewAmount, slot.zIndex);
      });
    }

    function lerp(a, b, t) { return a + (b - a) * t; }

    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
    function easeInOutCubic(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

    function tween(el, idx, toX, toY, toZ, duration, easing, onDone) {
      const fromX = state[idx].x;
      const fromY = state[idx].y;
      const fromZ = state[idx].z;
      const startTime = performance.now();
      function step(now) {
        const t = Math.min((now - startTime) / duration, 1);
        const e = easing(t);
        const x = lerp(fromX, toX, e);
        const y = lerp(fromY, toY, e);
        const z = lerp(fromZ, toZ, e);
        state[idx] = { x, y, z };
        setCard(el, x, y, z, skewAmount, el.style.zIndex);
        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          state[idx] = { x: toX, y: toY, z: toZ };
          if (onDone) onDone();
        }
      }
      requestAnimationFrame(step);
    }

    initPositions();

    function swap() {
      if (animating || order.length < 2) return;
      animating = true;

      const frontIdx = order[0];
      const restIdx = order.slice(1);
      const elFront = cards[frontIdx];
      const frontState = { ...state[frontIdx] };

      tween(elFront, frontIdx, frontState.x, frontState.y + 500, frontState.z, 900, easeOutCubic, () => {
        const backSlot = makeSlot(total - 1);
        elFront.style.zIndex = backSlot.zIndex;
        tween(elFront, frontIdx, backSlot.x, backSlot.y, backSlot.z, 900, easeInOutCubic, () => {
          order = [...restIdx, frontIdx];
          animating = false;
        });
      });

      restIdx.forEach((cardIdx, i) => {
        const el = cards[cardIdx];
        const newSlot = makeSlot(i);
        el.style.zIndex = newSlot.zIndex;
        setTimeout(() => {
          tween(el, cardIdx, newSlot.x, newSlot.y, newSlot.z, 800, easeInOutCubic);
        }, i * 120);
      });
    }

    intervalId = setInterval(swap, delay);
    setTimeout(swap, 800);

    return function destroy() {
      clearInterval(intervalId);
    };
  }

  function init() {
    document.querySelectorAll('[data-js-animated="true"].card-swap').forEach(setupCardSwap);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();`
}