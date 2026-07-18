export default {
  id: 'divider-zigzag',
  name: 'Zigzag',
  category: 'dividers',
  tags: ['zigzag', 'angular', 'svg', 'separator'],
  author: 'biblioteca',
  html: `<div class="sd-container">
  <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,40 L120,10 L240,40 L360,10 L480,40 L600,10 L720,40 L840,10 L960,40 L1080,10 L1200,40 L1320,10 L1440,40 L1440,60 L0,60 Z" fill="currentColor"/>
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
