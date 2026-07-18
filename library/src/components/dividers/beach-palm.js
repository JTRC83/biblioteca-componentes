export default {
  id: 'divider-beach-palm',
  name: 'Beach Palm',
  category: 'dividers',
  tags: ['beach', 'palm', 'tropical', 'landscape', 'nature', 'svg'],
  author: 'biblioteca',
  html: `<div class="sd-container">
  <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,120 L0,100 Q720,85 1440,100 L1440,120 Z" fill="currentColor" opacity="0.15"/>
    <path d="M0,120 L0,95 Q720,78 1440,95 L1440,120 Z" fill="currentColor" opacity="0.3"/>
    <path d="M0,120 L0,92 Q720,72 1440,92 L1440,120 Z" fill="currentColor" opacity="0.5"/>
    <path d="M0,120 L0,90 Q720,66 1440,90 L1440,120 Z" fill="currentColor" opacity="0.7"/>
    <path d="M0,120 L0,90 Q720,60 1440,90 L1440,120 Z" fill="currentColor" opacity="0.9"/>
    <path d="M0,120 L0,90 Q720,55 1440,90 L1440,120 Z" fill="currentColor"/>
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
