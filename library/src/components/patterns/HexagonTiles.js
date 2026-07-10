export default {
  id: 'pat-hex',
  name: 'Hexagon Tiles',
  category: 'patterns',
  tags: ['hexagon', 'tiles', 'conic', 'css-only'],
  author: 'csemszepp',
  html: `<div class="pat-hex">
  <div class="pat-hex__bg"></div>
</div>`,
  css: `
.pat-hex {
  background: #1d1d1d;
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

.pat-hex__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  --s: 60px;
  --c1: #1d1d1d;
  --c2: #4e4f51;
  --c3: #3c3c3c;
  background:
    repeating-conic-gradient(
      from 30deg,
      #0000 0 120deg,
      var(--c3) 0 180deg
    )
    calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
    repeating-conic-gradient(
      from 30deg,
      var(--c1) 0 60deg,
      var(--c2) 0 120deg,
      var(--c3) 0 180deg
    );
  background-size: var(--s) calc(var(--s) * 0.577);
}
`
}