export default {
  id: 'pat-dots',
  name: 'Dot Grid',
  category: 'patterns',
  tags: ['dots', 'grid', 'css-only'],
  html: `<div class="pat-dots">
  <div class="pat-dots__bg"></div>
</div>`,
  css: `
.pat-dots {
  background: #0e0e12;
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

.pat-dots__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-color: #0e0e12;
  background-image: radial-gradient(circle, #7c3aed 1.5px, transparent 1.5px);
  background-size: 18px 18px;
}
`
}