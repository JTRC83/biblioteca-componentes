export default {
  id: 'divider-scallops',
  name: 'Scallops',
  category: 'dividers',
  tags: ['scallops', 'arches', 'rounded', 'svg', 'separator'],
  author: 'biblioteca',
  html: `<div class="sd-container">
  <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,60 L0,30 A30,30 0 0,1 60,30 A30,30 0 0,1 120,30 A30,30 0 0,1 180,30 A30,30 0 0,1 240,30 A30,30 0 0,1 300,30 A30,30 0 0,1 360,30 A30,30 0 0,1 420,30 A30,30 0 0,1 480,30 A30,30 0 0,1 540,30 A30,30 0 0,1 600,30 A30,30 0 0,1 660,30 A30,30 0 0,1 720,30 A30,30 0 0,1 780,30 A30,30 0 0,1 840,30 A30,30 0 0,1 900,30 A30,30 0 0,1 960,30 A30,30 0 0,1 1020,30 A30,30 0 0,1 1080,30 A30,30 0 0,1 1140,30 A30,30 0 0,1 1200,30 A30,30 0 0,1 1260,30 A30,30 0 0,1 1320,30 A30,30 0 0,1 1380,30 A30,30 0 0,1 1440,30 L1440,60 Z" fill="currentColor"/>
  </svg>
</div>`,
  css: `.sd-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.sd-container svg {
  display: block;
  width: 100%;
  height: 60px;
  color: var(--divider-color, #a855f7);
}

.sd-container--top svg {
  transform: rotate(180deg);
}`
}
