export default {
  id: 'divider-clouds',
  name: 'Cloud Bumps',
  category: 'dividers',
  tags: ['cloud', 'bumps', 'rounded', 'svg', 'separator'],
  author: 'biblioteca',
  html: `<div class="sd-container">
  <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,120 L0,20 Q100,0 200,20 Q300,40 400,20 Q500,0 600,20 Q700,40 800,20 Q900,0 1000,20 Q1100,40 1200,20 Q1300,0 1440,20 L1440,120 Z" fill="currentColor" opacity="0.15"/>
    <path d="M0,120 L0,35 Q100,15 200,35 Q300,55 400,35 Q500,15 600,35 Q700,55 800,35 Q900,15 1000,35 Q1100,55 1200,35 Q1300,15 1440,35 L1440,120 Z" fill="currentColor" opacity="0.3"/>
    <path d="M0,120 L0,50 Q100,30 200,50 Q300,70 400,50 Q500,30 600,50 Q700,70 800,50 Q900,30 1000,50 Q1100,70 1200,50 Q1300,30 1440,50 L1440,120 Z" fill="currentColor" opacity="0.5"/>
    <path d="M0,120 L0,65 Q100,45 200,65 Q300,85 400,65 Q500,45 600,65 Q700,85 800,65 Q900,45 1000,65 Q1100,85 1200,65 Q1300,45 1440,65 L1440,120 Z" fill="currentColor" opacity="0.7"/>
    <path d="M0,120 L0,80 Q100,60 200,80 Q300,100 400,80 Q500,60 600,80 Q700,100 800,80 Q900,60 1000,80 Q1100,100 1200,80 Q1300,60 1440,80 L1440,120 Z" fill="currentColor" opacity="0.9"/>
    <path d="M0,120 L0,95 Q100,75 200,95 Q300,115 400,95 Q500,75 600,95 Q700,115 800,95 Q900,75 1000,95 Q1100,115 1200,95 Q1300,75 1440,95 L1440,120 Z" fill="currentColor"/>
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
