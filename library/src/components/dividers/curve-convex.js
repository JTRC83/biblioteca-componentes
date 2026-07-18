export default {
  id: 'divider-curve-convex',
  name: 'Curve Convex',
  category: 'dividers',
  tags: ['curve', 'convex', 'rounded', 'svg', 'separator'],
  author: 'biblioteca',
  html: `<div class="sd-container">
  <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,120 L0,60 Q360,20 720,60 T1440,60 L1440,120 Z" fill="currentColor" opacity="0.15"/>
    <path d="M0,120 L0,70 Q360,30 720,70 T1440,70 L1440,120 Z" fill="currentColor" opacity="0.3"/>
    <path d="M0,120 L0,80 Q360,40 720,80 T1440,80 L1440,120 Z" fill="currentColor" opacity="0.5"/>
    <path d="M0,120 L0,90 Q360,50 720,90 T1440,90 L1440,120 Z" fill="currentColor" opacity="0.7"/>
    <path d="M0,120 L0,100 Q360,60 720,100 T1440,100 L1440,120 Z" fill="currentColor" opacity="0.9"/>
    <path d="M0,120 L0,110 Q360,70 720,110 T1440,110 L1440,120 Z" fill="currentColor"/>
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
