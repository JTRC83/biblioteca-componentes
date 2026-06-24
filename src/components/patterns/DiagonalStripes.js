export default {
  id: 'pat-stripes',
  name: 'Diagonal Stripes',
  category: 'patterns',
  tags: ['stripes', 'css-only'],
  html: `<div class="pat-stripes"></div>`,
  css: `
.pat-stripes {
  width: 240px;
  height: 160px;
  background-color: #18181c;
  background-image: repeating-linear-gradient(
    -45deg,
    #7c3aed,
    #7c3aed 8px,
    transparent 8px,
    transparent 18px
  );
  border-radius: 12px;
}
`
}
