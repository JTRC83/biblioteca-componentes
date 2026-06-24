export default {
  id: 'pat-grid',
  name: 'Neon Grid',
  category: 'patterns',
  tags: ['grid', 'neon', 'css-only'],
  html: `<div class="pat-grid"></div>`,
  css: `
.pat-grid {
  width: 240px;
  height: 160px;
  background-color: #0a0a0c;
  background-image:
    linear-gradient(rgba(0, 255, 213, 0.25) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 213, 0.25) 1px, transparent 1px);
  background-size: 24px 24px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}

.pat-grid::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 30%, #0a0a0c 90%);
}
`
}
