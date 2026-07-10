export default {
  id: 'pat-horiz-lines',
  name: 'Horizontal Lines',
  category: 'patterns',
  tags: ['lines', 'horizontal', 'stripes', 'css-only'],
  author: 'ArnavK-09',
  html: `<div class="pat-horiz-lines">
  <div class="pat-horiz-lines__bg"></div>
</div>`,
  css: `
.pat-horiz-lines {
  background: #ffffff;
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

.pat-horiz-lines__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-image: repeating-linear-gradient(
    0deg,
    black,
    1px,
    white 1px,
    white
  );
  background-size: 100% 30px;
  background-color: white;
}
`
}