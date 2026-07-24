export default {
  id: 'scroll-stack',
  name: 'Scroll Stack',
  category: 'cards',
  tags: ['scroll', 'stack', 'cards', 'sticky', 'animated', 'js-driven', 'scroll-driven'],
  author: 'reactbits-adapted',
  source: 'reactbits.dev',
  html: `<div class="scroll-stack" data-js-animated="true">
  <div class="scroll-stack__scroller">
    <div class="scroll-stack__inner">
      <div class="scroll-stack__card">
        <div class="scroll-stack__card-num">01</div>
        <h2 class="scroll-stack__card-title">Primera tarjeta</h2>
        <p class="scroll-stack__card-desc">Haz scroll hacia abajo y observa cómo las tarjetas se apilan progresivamente.</p>
      </div>
      <div class="scroll-stack__card">
        <div class="scroll-stack__card-num">02</div>
        <h2 class="scroll-stack__card-title">Segunda tarjeta</h2>
        <p class="scroll-stack__card-desc">Cada tarjeta se escala y se posiciona encima de la anterior al hacer scroll.</p>
      </div>
      <div class="scroll-stack__card">
        <div class="scroll-stack__card-num">03</div>
        <h2 class="scroll-stack__card-title">Tercera tarjeta</h2>
        <p class="scroll-stack__card-desc">El efecto crea una sensación de profundidad y apilamiento natural.</p>
      </div>
      <div class="scroll-stack__card">
        <div class="scroll-stack__card-num">04</div>
        <h2 class="scroll-stack__card-title">Última tarjeta</h2>
        <p class="scroll-stack__card-desc">Cuando llegas al final, todas las tarjetas quedan apiladas en su posición final.</p>
      </div>
      <div class="scroll-stack__end"></div>
    </div>
  </div>
</div>`,
  css: `.scroll-stack {
  width: 100%;
  height: 100%;
  min-height: 480px;
  background: #0a0a0f;
  border-radius: 16px;
  overflow: hidden;
}

.scroll-stack__scroller {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.15) transparent;
}

.scroll-stack__scroller::-webkit-scrollbar { width: 6px; }
.scroll-stack__scroller::-webkit-scrollbar-track { background: transparent; }
.scroll-stack__scroller::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }

.scroll-stack__inner {
  padding: 15% 1.5rem 60vh;
  min-height: 100%;
}

.scroll-stack__card {
  transform-origin: top center;
  will-change: transform, filter;
  backface-visibility: hidden;
  height: 18rem;
  width: 100%;
  max-width: 28rem;
  margin: 0 auto 6rem;
  padding: 2.5rem;
  border-radius: 32px;
  box-sizing: border-box;
  position: relative;
  background: linear-gradient(145deg, #1a1a2e, #16213e);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
}

.scroll-stack__card:nth-child(1) { background: linear-gradient(145deg, #1a1a2e, #0f3460); }
.scroll-stack__card:nth-child(2) { background: linear-gradient(145deg, #2d1b4e, #5227ff); }
.scroll-stack__card:nth-child(3) { background: linear-gradient(145deg, #1a1a2e, #e94560); }
.scroll-stack__card:nth-child(4) { background: linear-gradient(145deg, #0f3460, #16c79a); }

.scroll-stack__card-num {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  font-size: 3rem;
  font-weight: 800;
  color: rgba(255,255,255,0.1);
  letter-spacing: -0.05em;
}

.scroll-stack__card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 8px;
  color: #fff;
}

.scroll-stack__card-desc {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.6;
  margin: 0;
}

.scroll-stack__end {
  width: 100%;
  height: 1px;
}
`,
  js: `(() => {
  function setupScrollStack(root) {
    const scroller = root.querySelector('.scroll-stack__scroller');
    if (!scroller) return;
    const cards = Array.from(scroller.querySelectorAll('.scroll-stack__card'));
    const endEl = scroller.querySelector('.scroll-stack__end');
    if (!cards.length || !endEl) return;

    const itemStackDistance = 40;
    const stackPosition = 0.12;
    const scaleEndPosition = 0.05;
    const baseScale = 0.85;
    const itemScale = 0.03;
    const blurAmount = 1.5;

    const lastTransforms = new Map();
    let ticking = false;
    let initialized = false;

    function getOffsetTop(el) {
      let top = 0;
      let node = el;
      while (node && node !== scroller) {
        top += node.offsetTop;
        node = node.offsetParent;
      }
      return top;
    }

    function calcProgress(scrollTop, start, end) {
      if (scrollTop < start) return 0;
      if (scrollTop > end) return 1;
      return (scrollTop - start) / (end - start);
    }

    function update() {
      ticking = false;
      if (!initialized) return;

      const scrollTop = scroller.scrollTop;
      const containerHeight = scroller.clientHeight;
      const stackPx = stackPosition * containerHeight;
      const scaleEndPx = scaleEndPosition * containerHeight;
      const endTop = getOffsetTop(endEl);

      let topCardIndex = 0;
      const cardOffsets = cards.map(c => getOffsetTop(c));

      cards.forEach((card, i) => {
        const cardTop = cardOffsets[i];
        const triggerStart = cardTop - stackPx - itemStackDistance * i;
        if (scrollTop >= triggerStart) topCardIndex = i;
      });

      cards.forEach((card, i) => {
        const cardTop = cardOffsets[i];
        const triggerStart = cardTop - stackPx - itemStackDistance * i;
        const triggerEnd = cardTop - scaleEndPx;
        const pinStart = cardTop - stackPx - itemStackDistance * i;
        const pinEnd = endTop - containerHeight * 0.5;

        const scaleProgress = calcProgress(scrollTop, triggerStart, triggerEnd);
        const targetScale = baseScale + i * itemScale;
        const scale = 1 - scaleProgress * (1 - targetScale);

        let blur = 0;
        if (blurAmount && i < topCardIndex) {
          const depth = topCardIndex - i;
          blur = Math.max(0, depth * blurAmount);
        }

        let translateY = 0;
        if (scrollTop >= pinStart && scrollTop <= pinEnd) {
          translateY = scrollTop - cardTop + stackPx + itemStackDistance * i;
        } else if (scrollTop > pinEnd) {
          translateY = pinEnd - cardTop + stackPx + itemStackDistance * i;
        }

        const newT = {
          ty: Math.round(translateY * 100) / 100,
          s: Math.round(scale * 1000) / 1000,
          b: Math.round(blur * 100) / 100
        };

        const last = lastTransforms.get(i);
        const changed = !last ||
          Math.abs(last.ty - newT.ty) > 0.1 ||
          Math.abs(last.s - newT.s) > 0.001 ||
          Math.abs(last.b - newT.b) > 0.1;

        if (changed) {
          card.style.transform = 'translate3d(0, ' + newT.ty + 'px, 0) scale(' + newT.s + ')';
          card.style.filter = newT.b > 0 ? 'blur(' + newT.b + 'px)' : '';
          lastTransforms.set(i, newT);
        }
      });
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    scroller.addEventListener('scroll', onScroll, { passive: true });

    const ro = new ResizeObserver(() => {
      initialized = true;
      update();
    });
    ro.observe(scroller);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initialized = true;
        update();
      });
    });

    return function destroy() {
      scroller.removeEventListener('scroll', onScroll);
      ro.disconnect();
    };
  }

  function init() {
    document.querySelectorAll('[data-js-animated="true"].scroll-stack').forEach(setupScrollStack);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();`
}