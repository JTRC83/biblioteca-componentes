export default {
  id: 'divider-opacity-fade',
  name: 'Opacity Fade',
  category: 'dividers',
  tags: ['opacity', 'fade', 'gradient', 'transition', 'svg'],
  author: 'biblioteca',
  html: `<div class="sd-container">
  <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="sd-fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="currentColor" stop-opacity="0"/><stop offset="100%" stop-color="currentColor" stop-opacity="1"/></linearGradient></defs><rect width="1440" height="120" fill="url(#sd-fade)"/>
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
