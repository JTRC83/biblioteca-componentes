export default {
  id: 'divider-tilt',
  name: 'Tilt Diagonal',
  category: 'dividers',
  tags: ['tilt', 'diagonal', 'angled', 'svg', 'separator'],
  author: 'biblioteca',
  html: `<div class="sd-container">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,0 L1440,80 L1440,0 Z" fill="currentColor"/>
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
  height: 80px;
  color: var(--divider-color, #a855f7);
}

.sd-container--top svg {
  transform: rotate(180deg);
}`
}
