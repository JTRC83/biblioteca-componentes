export default {
  id: 'pat-mixed-grid',
  name: 'Mixed Grid',
  category: 'patterns',
  tags: ['grid', 'conic', 'checkerboard', 'css-only'],
  author: 'atishaytuli07',
  html: `<div class="pat-mixed-grid">
  <div class="pat-mixed-grid__bg"></div>
</div>`,
  css: `
.pat-mixed-grid {
  background: #006400;
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

.pat-mixed-grid__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  --s: 7px;
  --square-pattern: repeating-linear-gradient(
      90deg,
      #ff0000 0,
      #ff0000 50%,
      #fff 50%,
      #fff 100%
    ),
    repeating-linear-gradient(0deg, #ff0000 0, #ff0000 50%, #fff 50%, #fff 100%);
  --tree-pattern: repeating-conic-gradient(
    from 45deg,
    #006400 0 25%,
    #32cd32 0 50%
  );
  background: var(--square-pattern), var(--tree-pattern);
  background-size:
    calc(2 * var(--s)) calc(2 * var(--s)),
    calc(4 * var(--s)) calc(4 * var(--s));
  background-position:
    0 0,
    center;
}
`
}