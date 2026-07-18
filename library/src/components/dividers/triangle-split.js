export default {
  id: 'divider-triangle-split',
  name: 'Triangle Split',
  category: 'dividers',
  tags: ['triangle', 'split', 'pointed', 'svg', 'separator'],
  author: 'biblioteca',
  html: `<div class="sd-container">
  <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,60 L720,0 L1440,60 Z" fill="currentColor"/><path d="M0,60 L720,20 L1440,60 Z" fill="currentColor" opacity="0.5"/>
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
