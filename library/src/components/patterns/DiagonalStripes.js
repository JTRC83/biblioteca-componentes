export default {
  id: 'pat-stripes',
  name: 'Diagonal Stripes',
  category: 'patterns',
  tags: ['stripes', 'css-only'],
  html: `<div class="pat-stripes">
  <div class="pat-stripes__bg"></div>
</div>`,
  css: `
.pat-stripes {
  background: #18181c;
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

.pat-stripes__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-color: #18181c;
  background-image: repeating-linear-gradient(
    -45deg,
    #7c3aed,
    #7c3aed 8px,
    transparent 8px,
    transparent 18px
  );
}
`
}