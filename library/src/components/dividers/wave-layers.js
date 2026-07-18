export default {
  id: 'divider-wave-layers',
  name: 'Wave Layers',
  category: 'dividers',
  tags: ['wave', 'layers', 'opacity', 'blend', 'mix', 'svg'],
  author: 'biblioteca',
  html: `<div class="sd-container">
  <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,40 C200,10 400,60 720,30 C1040,0 1240,50 1440,25 L1440,120 L0,120 Z" fill="currentColor" opacity="0.2"/><path d="M0,55 C240,30 480,70 720,45 C960,20 1200,60 1440,40 L1440,120 L0,120 Z" fill="currentColor" opacity="0.35"/><path d="M0,70 C280,50 520,85 720,65 C920,45 1160,75 1440,55 L1440,120 L0,120 Z" fill="currentColor" opacity="0.55"/><path d="M0,85 C320,70 560,95 720,80 C880,65 1120,85 1440,70 L1440,120 L0,120 Z" fill="currentColor" opacity="0.85"/><path d="M0,100 C360,90 600,105 720,95 C840,85 1080,100 1440,88 L1440,120 L0,120 Z" fill="currentColor"/>
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
