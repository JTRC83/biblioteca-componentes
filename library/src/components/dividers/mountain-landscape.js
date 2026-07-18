export default {
  id: 'divider-mountain-landscape',
  name: 'Mountain Landscape',
  category: 'dividers',
  tags: ['mountains', 'landscape', 'scenic', 'nature', 'svg'],
  author: 'biblioteca',
  html: `<div class="sd-container">
  <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,120 L0,80 L120,40 L240,70 L360,20 L480,60 L600,30 L720,55 L840,15 L960,50 L1080,25 L1200,60 L1320,35 L1440,65 L1440,120 Z" fill="currentColor"/><path d="M0,120 L0,100 L120,55 L240,85 L360,40 L480,75 L600,50 L720,70 L840,35 L960,65 L1080,45 L1200,75 L1320,55 L1440,80 L1440,120 Z" fill="currentColor" opacity="0.3"/>
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
  height: 120px;
  color: var(--divider-color, #a855f7);
}

.sd-container--top svg {
  transform: rotate(180deg);
}`
}
