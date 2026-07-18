export default {
  id: 'divider-paper-tear',
  name: 'Paper Tear',
  category: 'dividers',
  tags: ['paper', 'tear', 'rough', 'svg', 'separator'],
  author: 'biblioteca',
  html: `<div class="sd-container">
  <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,40 L80,25 L160,45 L240,20 L320,38 L400,22 L480,42 L560,18 L640,40 L720,25 L800,44 L880,20 L960,36 L1040,22 L1120,42 L1200,18 L1280,38 L1360,24 L1440,40 L1440,60 L0,60 Z" fill="currentColor"/>
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
