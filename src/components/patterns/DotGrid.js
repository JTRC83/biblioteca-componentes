export default {
  id: 'pat-dots',
  name: 'Dot Grid',
  category: 'patterns',
  tags: ['dots', 'grid', 'css-only'],
  html: `<div class="pat-dots"></div>`,
  css: `
.pat-dots {
  width: 240px;
  height: 160px;
  background-color: #0e0e12;
  background-image: radial-gradient(circle, #7c3aed 1.5px, transparent 1.5px);
  background-size: 18px 18px;
  border-radius: 12px;
}
`
}
