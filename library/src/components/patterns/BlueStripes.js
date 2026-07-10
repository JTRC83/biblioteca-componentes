export default {
  id: 'pat-blue-stripes',
  name: 'Blue Stripes',
  category: 'patterns',
  tags: ['stripes', 'diagonal', 'css-only'],
  author: 'uiverse-astronaut',
  html: `<div class="pat-blue-stripes">
  <div class="pat-blue-stripes__bg"></div>
</div>`,
  css: `
.pat-blue-stripes {
  background: #444cf7;
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

.pat-blue-stripes__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: repeating-linear-gradient(
    45deg,
    #e5e5f7,
    #e5e5f7 10px,
    #444cf7 10px,
    #444cf7 20px
  );
}
`
}