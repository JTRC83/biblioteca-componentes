export default {
  id: 'stack-gallery',
  name: 'Stack Gallery',
  category: 'gallery',
  tags: ['gallery', 'stack', 'cards', 'drag', '3d', 'animated', 'js-driven', 'images', 'tilt'],
  author: 'reactbits-adapted',
  source: 'reactbits.dev',
  html: `<div class="stack-gallery" data-js-animated="true">
  <div class="stack-gallery__container">
    <div class="stack-gallery__card" data-id="1">
      <img src="https://picsum.photos/seed/stack1/400/400" alt="" draggable="false">
    </div>
    <div class="stack-gallery__card" data-id="2">
      <img src="https://picsum.photos/seed/stack2/400/400" alt="" draggable="false">
    </div>
    <div class="stack-gallery__card" data-id="3">
      <img src="https://picsum.photos/seed/stack3/400/400" alt="" draggable="false">
    </div>
    <div class="stack-gallery__card" data-id="4">
      <img src="https://picsum.photos/seed/stack4/400/400" alt="" draggable="false">
    </div>
    <div class="stack-gallery__card" data-id="5">
      <img src="https://picsum.photos/seed/stack5/400/400" alt="" draggable="false">
    </div>
  </div>
</div>`,
  css: `.stack-gallery {
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #050408;
  border-radius: 16px;
  overflow: hidden;
}

.stack-gallery__container {
  position: relative;
  width: 200px;
  height: 200px;
  perspective: 600px;
}

.stack-gallery__card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  cursor: grab;
  will-change: transform;
  transform-origin: 90% 90%;
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

.stack-gallery__card:active { cursor: grabbing; }

.stack-gallery__card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
}
`,
  js: `(() => {
  function setupStack(root) {
    const container = root.querySelector('.stack-gallery__container');
    if (!container) return;
    const cards = Array.from(container.querySelectorAll('.stack-gallery__card'));
    if (cards.length < 2) return;

    const sensitivity = 180;
    let order = cards.map((c, i) => i);
    let dragState = null;
    let justDragged = false;

    const randomRotations = cards.map(() => Math.random() * 10 - 5);

    function applyPositions(animate) {
      const total = order.length;
      order.forEach((cardIdx, stackPos) => {
        const card = cards[cardIdx];
        const depth = total - stackPos - 1;
        const rotZ = depth * 4 + (stackPos === total - 1 ? 0 : randomRotations[cardIdx]);
        const scale = 1 + stackPos * 0.06 - total * 0.06;
        const zIndex = stackPos + 1;

        card.style.transition = animate ? 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none';
        card.style.transform = 'rotateZ(' + rotZ + 'deg) scale(' + scale + ')';
        card.style.zIndex = zIndex;
      });
    }

    applyPositions(false);

    function sendToBack(cardIdx) {
      const pos = order.indexOf(cardIdx);
      if (pos < 0) return;
      order = [...order.slice(0, pos), ...order.slice(pos + 1), cardIdx];
      applyPositions(true);
    }

    function sendToFrontToBack() {
      const topIdx = order[order.length - 1];
      order = [topIdx, ...order.slice(0, order.length - 1)];
      applyPositions(true);
    }

    cards.forEach((card, idx) => {
      card.addEventListener('click', (e) => {
        if (justDragged) return;
        const stackPos = order.indexOf(idx);
        if (stackPos !== order.length - 1) return;
        sendToFrontToBack();
      });

      card.addEventListener('pointerdown', (e) => {
        const stackPos = order.indexOf(idx);
        if (stackPos !== order.length - 1) return;
        e.preventDefault();
        dragState = {
          startX: e.clientX,
          startY: e.clientY,
          moved: false,
          cardIdx: idx,
          card: card
        };
        if (card.setPointerCapture) {
          card.setPointerCapture(e.pointerId);
        }
      });

      card.addEventListener('pointermove', (e) => {
        if (!dragState || dragState.cardIdx !== idx) return;
        const dx = e.clientX - dragState.startX;
        const dy = e.clientY - dragState.startY;
        if (dx * dx + dy * dy > 25) dragState.moved = true;

        const rotX = Math.max(-60, Math.min(60, -dy * 0.5));
        const rotY = Math.max(-60, Math.min(60, dx * 0.5));
        const total = order.length;
        const scale = 1 + (total - 1) * 0.06 - total * 0.06;

        card.style.transition = 'none';
        card.style.transform = 'translate(' + dx + 'px, ' + dy + 'px) rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg) rotateZ(' + randomRotations[idx] + 'deg) scale(' + scale + ')';
      });

      card.addEventListener('pointerup', (e) => {
        if (!dragState || dragState.cardIdx !== idx) return;
        const dx = e.clientX - dragState.startX;
        const dy = e.clientY - dragState.startY;
        if (card.releasePointerCapture) {
          card.releasePointerCapture(e.pointerId);
        }

        if (Math.abs(dx) > sensitivity || Math.abs(dy) > sensitivity) {
          sendToFrontToBack();
        } else {
          applyPositions(true);
        }

        if (dragState.moved) {
          justDragged = true;
          setTimeout(() => { justDragged = false; }, 100);
        }
        dragState = null;
      });

      card.addEventListener('pointercancel', () => {
        if (dragState && dragState.cardIdx === idx) {
          applyPositions(true);
          dragState = null;
        }
      });
    });

    let autoplayId = null;
    let isPaused = false;

    function startAutoplay() {
      clearInterval(autoplayId);
      if (isPaused) return;
      autoplayId = setInterval(() => {
        sendToFrontToBack();
      }, 3000);
    }

    root.addEventListener('mouseenter', () => { isPaused = true; clearInterval(autoplayId); });
    root.addEventListener('mouseleave', () => { isPaused = false; startAutoplay(); });

    startAutoplay();

    return function destroy() {
      clearInterval(autoplayId);
    };
  }

  function init() {
    document.querySelectorAll('[data-js-animated="true"].stack-gallery').forEach(setupStack);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();`
}