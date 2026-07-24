export default {
  id: 'dome-gallery',
  name: 'Dome Gallery',
  category: 'gallery',
  tags: ['gallery', 'dome', 'sphere', '3d', 'panorama', 'images', 'css-only', 'drag', 'scroll', 'animated'],
  author: 'reactbits-adapted',
  source: 'reactbits.dev',
  html: `<div class="dome-gallery" data-js-animated="true"
  style="--dome-segments: 24; --dome-fit: 0.5; --dome-min-radius: 400; --dome-grayscale: 0;">
  <div class="dome-gallery__main">
    <div class="dome-gallery__stage">
      <div class="dome-gallery__sphere"></div>
    </div>
    <div class="dome-gallery__overlay"></div>
    <div class="dome-gallery__overlay dome-gallery__overlay--blur"></div>
    <div class="dome-gallery__edge dome-gallery__edge--top"></div>
    <div class="dome-gallery__edge dome-gallery__edge--bottom"></div>
    <div class="dome-gallery__viewer">
      <div class="dome-gallery__scrim"></div>
      <div class="dome-gallery__frame"></div>
    </div>
  </div>
</div>`,
  css: `.dome-gallery {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  --radius: 300px;
  --segments-x: 24;
  --segments-y: 24;
  --circ: calc(var(--radius) * 3.14);
  --rot-unit: calc(360deg / var(--segments-x) / 2);
  --item-w: calc(var(--circ) / var(--segments-x));
  --item-h: calc(var(--circ) / var(--segments-y));
  --overlay-color: #120F17;
  --tile-radius: 12px;
  --grayscale: grayscale(0);
  border-radius: 16px;
  overflow: hidden;
  background: #050408;
}

.dome-gallery * { box-sizing: border-box; }

.dome-gallery__main {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
}

.dome-gallery__stage {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  perspective: calc(var(--radius) * 2.5);
  perspective-origin: 50% 50%;
  contain: layout paint size;
}

.dome-gallery__sphere {
  transform: translateZ(calc(var(--radius) * -1));
  will-change: transform;
  transform-style: preserve-3d;
}

.dome-gallery__item {
  width: calc(var(--item-w) * var(--sz-x, 2));
  height: calc(var(--item-h) * var(--sz-y, 2));
  position: absolute;
  top: -999px;
  bottom: -999px;
  left: -999px;
  right: -999px;
  margin: auto;
  transform-origin: 50% 50%;
  backface-visibility: hidden;
  transition: transform 300ms ease;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--rot-unit) * (var(--ox) + (var(--sz-x, 2) - 1) / 2)))
    rotateX(calc(var(--rot-unit) * (var(--oy) - (var(--sz-y, 2) - 1) / 2)))
    translateZ(var(--radius));
}

.dome-gallery__tile {
  position: absolute;
  display: block;
  inset: 6px;
  border-radius: var(--tile-radius);
  background: #18181c;
  overflow: hidden;
  backface-visibility: hidden;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  pointer-events: auto;
  transform: translateZ(0);
}

.dome-gallery__tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  backface-visibility: hidden;
  filter: var(--grayscale);
}

.dome-gallery__overlay,
.dome-gallery__overlay--blur {
  position: absolute;
  inset: 0;
  margin: auto;
  z-index: 3;
  pointer-events: none;
}

.dome-gallery__overlay {
  background-image: radial-gradient(rgba(235,235,235,0) 60%, var(--overlay-color) 100%);
}

.dome-gallery__overlay--blur {
  -webkit-mask-image: radial-gradient(rgba(235,235,235,0) 65%, var(--overlay-color) 88%);
  mask-image: radial-gradient(rgba(235,235,235,0) 65%, var(--overlay-color) 88%);
  backdrop-filter: blur(4px);
}

.dome-gallery__edge {
  position: absolute;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 5;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent, var(--overlay-color));
}

.dome-gallery__edge--top { top: 0; transform: rotate(180deg); }
.dome-gallery__edge--bottom { bottom: 0; }

.dome-gallery__viewer {
  position: absolute;
  inset: 0;
  z-index: 20;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.dome-gallery__frame {
  height: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
}

.dome-gallery__scrim {
  position: absolute;
  inset: 0;
  z-index: 10;
  background: rgba(0,0,0,0.5);
  pointer-events: none;
  opacity: 0;
  transition: opacity 400ms ease;
  backdrop-filter: blur(4px);
}

.dome-gallery[data-enlarging="true"] .dome-gallery__scrim {
  opacity: 1;
  pointer-events: all;
}

.dome-gallery__enlarge {
  position: absolute;
  z-index: 30;
  border-radius: 20px;
  overflow: hidden;
  transform-origin: top left;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

.dome-gallery__enlarge img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: var(--grayscale);
}
`,
  js: `(() => {
  const IMAGES = [
    'https://picsum.photos/seed/dome1/400/400',
    'https://picsum.photos/seed/dome2/400/400',
    'https://picsum.photos/seed/dome3/400/400',
    'https://picsum.photos/seed/dome4/400/400',
    'https://picsum.photos/seed/dome5/400/400',
    'https://picsum.photos/seed/dome6/400/400',
    'https://picsum.photos/seed/dome7/400/400',
    'https://picsum.photos/seed/dome8/400/400',
    'https://picsum.photos/seed/dome9/400/400',
    'https://picsum.photos/seed/dome10/400/400',
    'https://picsum.photos/seed/dome11/400/400',
    'https://picsum.photos/seed/dome12/400/400'
  ];

  const clamp = (v, mn, mx) => Math.min(Math.max(v, mn), mx);
  const wrapAngle = (d) => { const a = (((d + 180) % 360) + 360) % 360; return a - 180; };

  function buildItems(pool, seg) {
    const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
    const evenYs = [-4, -2, 0, 2, 4];
    const oddYs = [-3, -1, 1, 3, 5];
    const coords = xCols.flatMap((x, c) => {
      const ys = c % 2 === 0 ? evenYs : oddYs;
      return ys.map(y => ({ x, y, sx: 2, sy: 2 }));
    });
    return coords.map((c, i) => ({
      ...c,
      src: pool[i % pool.length]
    }));
  }

  function setupDome(root) {
    const main = root.querySelector('.dome-gallery__main');
    const sphere = root.querySelector('.dome-gallery__sphere');
    const scrim = root.querySelector('.dome-gallery__scrim');
    const frame = root.querySelector('.dome-gallery__frame');
    const viewer = root.querySelector('.dome-gallery__viewer');
    if (!sphere || !main) return;

    const segments = 24;
    const dragSensitivity = 20;
    const maxVerticalRotation = 0;
    const fit = 0.5;
    const minRadius = 300;

    let rotation = { x: 0, y: 0 };
    let startRot = { x: 0, y: 0 };
    let startPos = null;
    let dragging = false;
    let moved = false;
    let inertiaRaf = null;
    let lastDragEnd = 0;
    let opening = false;
    let focusedTile = null;
    let lockedRadius = minRadius;

    const items = buildItems(IMAGES, segments);

    function applyTransform(xDeg, yDeg) {
      sphere.style.transform = 'translateZ(calc(var(--radius) * -1)) rotateX(' + xDeg + 'deg) rotateY(' + yDeg + 'deg)';
    }

    function computeRadius() {
      const rect = root.getBoundingClientRect();
      const w = Math.max(1, rect.width);
      const h = Math.max(1, rect.height);
      const minDim = Math.min(w, h);
      const aspect = w / h;
      let basis = aspect >= 1.3 ? w : minDim;
      let r = basis * fit;
      r = Math.min(r, h * 1.35);
      r = clamp(r, minRadius, Infinity);
      lockedRadius = Math.round(r);
      root.style.setProperty('--radius', lockedRadius + 'px');
    }

    items.forEach((it, i) => {
      const item = document.createElement('div');
      item.className = 'dome-gallery__item';
      item.style.setProperty('--ox', it.x);
      item.style.setProperty('--oy', it.y);
      item.style.setProperty('--sz-x', it.sx);
      item.style.setProperty('--sz-y', it.sy);
      item.dataset.src = it.src;
      item.dataset.ox = it.x;
      item.dataset.oy = it.y;
      item.dataset.sx = it.sx;
      item.dataset.sy = it.sy;

      const tile = document.createElement('div');
      tile.className = 'dome-gallery__tile';
      tile.innerHTML = '<img src="' + it.src + '" draggable="false" alt="">';
      tile.addEventListener('click', (e) => {
        if (dragging || moved || opening) return;
        if (performance.now() - lastDragEnd < 80) return;
        openItem(tile, item);
      });

      item.appendChild(tile);
      sphere.appendChild(item);
    });

    computeRadius();
    applyTransform(0, 0);

    const ro = new ResizeObserver(() => {
      computeRadius();
      applyTransform(rotation.x, rotation.y);
    });
    ro.observe(root);

    function stopInertia() {
      if (inertiaRaf) { cancelAnimationFrame(inertiaRaf); inertiaRaf = null; }
    }

    function startInertia(vx, vy) {
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 80;
      let vY = clamp(vy, -MAX_V, MAX_V) * 80;
      const friction = 0.96;
      const step = () => {
        vX *= friction; vY *= friction;
        if (Math.abs(vX) < 0.02 && Math.abs(vY) < 0.02) { inertiaRaf = null; return; }
        const nx = clamp(rotation.x - vY / 200, -maxVerticalRotation, maxVerticalRotation);
        const ny = wrapAngle(rotation.y + vX / 200);
        rotation = { x: nx, y: ny };
        applyTransform(nx, ny);
        inertiaRaf = requestAnimationFrame(step);
      };
      stopInertia();
      inertiaRaf = requestAnimationFrame(step);
    }

    function onDown(e) {
      if (focusedTile) return;
      stopInertia();
      dragging = true;
      moved = false;
      startRot = { ...rotation };
      const pt = e.touches ? e.touches[0] : e;
      startPos = { x: pt.clientX, y: pt.clientY };
    }

    function onMove(e) {
      if (focusedTile || !dragging || !startPos) return;
      const pt = e.touches ? e.touches[0] : e;
      const dx = pt.clientX - startPos.x;
      const dy = pt.clientY - startPos.y;
      if (!moved && dx * dx + dy * dy > 16) moved = true;
      const nx = clamp(startRot.x - dy / dragSensitivity, -maxVerticalRotation, maxVerticalRotation);
      const ny = wrapAngle(startRot.y + dx / dragSensitivity);
      if (rotation.x !== nx || rotation.y !== ny) {
        rotation = { x: nx, y: ny };
        applyTransform(nx, ny);
      }
    }

    function onUp(e) {
      if (!dragging) return;
      dragging = false;
      if (moved) lastDragEnd = performance.now();
      moved = false;
    }

    function onWheel(e) {
      if (focusedTile) return;
      stopInertia();
      const delta = e.deltaY || e.wheelDelta || e.detail;
      const nx = clamp(rotation.x, -maxVerticalRotation, maxVerticalRotation);
      const ny = wrapAngle(rotation.y + (delta > 0 ? 2 : -2));
      rotation = { x: nx, y: ny };
      applyTransform(nx, ny);
    }

    main.addEventListener('mousedown', onDown);
    main.addEventListener('mousemove', onMove);
    main.addEventListener('mouseup', onUp);
    main.addEventListener('mouseleave', onUp);
    main.addEventListener('wheel', onWheel, { passive: true });
    main.addEventListener('touchstart', onDown, { passive: true });
    main.addEventListener('touchmove', onMove, { passive: true });
    main.addEventListener('touchend', onUp);

    function openItem(tile, parent) {
      if (opening) return;
      opening = true;

      const src = parent.dataset.src;
      const mainRect = main.getBoundingClientRect();
      const tileRect = tile.getBoundingClientRect();
      const frameRect = frame.getBoundingClientRect();

      focusedTile = tile;
      tile.style.visibility = 'hidden';

      const overlay = document.createElement('div');
      overlay.className = 'dome-gallery__enlarge';
      overlay.style.position = 'absolute';
      overlay.style.left = (tileRect.left - mainRect.left) + 'px';
      overlay.style.top = (tileRect.top - mainRect.top) + 'px';
      overlay.style.width = tileRect.width + 'px';
      overlay.style.height = tileRect.height + 'px';
      overlay.style.opacity = '0';
      overlay.style.transition = 'all 300ms ease';

      const img = document.createElement('img');
      img.src = src;
      overlay.appendChild(img);
      viewer.appendChild(overlay);

      requestAnimationFrame(() => {
        overlay.style.left = (frameRect.left - mainRect.left) + 'px';
        overlay.style.top = (frameRect.top - mainRect.top) + 'px';
        overlay.style.width = frameRect.width + 'px';
        overlay.style.height = frameRect.height + 'px';
        overlay.style.opacity = '1';
        root.setAttribute('data-enlarging', 'true');
      });

      function close() {
        if (performance.now() - openStartedAt < 250) return;
        const curRect = overlay.getBoundingClientRect();
        overlay.style.left = (tileRect.left - mainRect.left) + 'px';
        overlay.style.top = (tileRect.top - mainRect.top) + 'px';
        overlay.style.width = tileRect.width + 'px';
        overlay.style.height = tileRect.height + 'px';
        overlay.style.opacity = '0';
        root.removeAttribute('data-enlarging');
        function cleanup() {
          overlay.remove();
          tile.style.visibility = '';
          focusedTile = null;
          opening = false;
        }
        overlay.addEventListener('transitionend', cleanup, { once: true });
        setTimeout(cleanup, 400);
      }

      const openStartedAt = performance.now();
      scrim.addEventListener('click', close, { once: true });
      const onKey = (e) => { if (e.key === 'Escape') { close(); window.removeEventListener('keydown', onKey); } };
      window.addEventListener('keydown', onKey);
    }

    return function destroy() {
      stopInertia();
      ro.disconnect();
      main.removeEventListener('mousedown', onDown);
      main.removeEventListener('mousemove', onMove);
      main.removeEventListener('mouseup', onUp);
      main.removeEventListener('mouseleave', onUp);
      main.removeEventListener('wheel', onWheel);
      main.removeEventListener('touchstart', onDown);
      main.removeEventListener('touchmove', onMove);
      main.removeEventListener('touchend', onUp);
    };
  }

  function init() {
    document.querySelectorAll('[data-js-animated="true"].dome-gallery').forEach(setupDome);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();`
}