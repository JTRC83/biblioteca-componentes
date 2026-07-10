export default {
  id: 'pat-grid',
  name: 'Neon Grid',
  category: 'patterns',
  tags: ['grid', 'neon', 'css-only'],
  html: `<div class="pat-grid">
  <div class="pat-grid__bg"></div>
</div>`,
  css: `
.pat-grid {
  background: #0a0a0c;
  width: 100%;
  height: 100%;
  min-height: 200px;
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
}

.pat-grid__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-color: #0a0a0c;
  background-image:
    linear-gradient(rgba(0, 255, 213, 0.25) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 213, 0.25) 1px, transparent 1px);
  background-size: 24px 24px;
}

.pat-grid__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 30%, #0a0a0c 90%);
}
`
}