export default {
  id: 'divider-ripple',
  name: 'Ripple',
  category: 'dividers',
  tags: ['ripple', 'sine', 'wave', 'svg', 'separator'],
  author: 'biblioteca',
  html: `<div class="sd-container">
  <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,30 C180,10 360,50 540,30 C720,10 900,50 1080,30 C1260,10 1440,50 1440,30 L1440,60 L0,60 Z" fill="currentColor"/><path d="M0,35 C180,55 360,15 540,35 C720,55 900,15 1080,35 C1260,55 1440,15 1440,35 L1440,60 L0,60 Z" fill="currentColor" opacity="0.4"/>
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
