export default {
  id: 'bg-gradient-grid',
  name: 'Gradient Grid',
  category: 'backgrounds',
  tags: ['gradient', 'grid', 'css-only'],
  author: 'elijahgummer',
  html: `<div class="bg-gradient-grid">
  <div class="bg-gradient-grid__bg"></div>
</div>`,
  css: `
.bg-gradient-grid {
  background: #3498db;
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

.bg-gradient-grid__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(45deg, #3498db, #2ecc71);
}

.bg-gradient-grid__bg::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
}
`
}