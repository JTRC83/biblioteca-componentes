export default {
  id: 'pat-grid-fade',
  name: 'Grid Fade',
  category: 'patterns',
  tags: ['grid', 'gradient', 'fade', 'mask', 'css-only'],
  author: 'kencode7',
  html: `<div class="pat-grid-fade">
  <div class="pat-grid-fade__bg"></div>
</div>`,
  css: `
.pat-grid-fade {
  background: #5f29c7;
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

.pat-grid-fade__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background:
    linear-gradient(
      to bottom,
      #fff 0%,
      #fff 40%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(to right, #0ed2da, #5f29c7);
}

.pat-grid-fade__bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(90deg, #ccc 1px, transparent 1px);
  background-size: 50px 100%;
  pointer-events: none;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 70%
  );
}
`
}