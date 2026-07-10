export default {
  id: 'pat-hex-dark',
  name: 'Hex Dark Tiles',
  category: 'patterns',
  tags: ['hexagon', 'tiles', 'conic', 'dark', 'css-only'],
  author: 'om_6153',
  html: `<div class="pat-hex-dark">
  <div class="pat-hex-dark__bg"></div>
</div>`,
  css: `
.pat-hex-dark {
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

.pat-hex-dark__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  --s: 200px;
  --c1: #1d1d1d;
  --c2: #4e4f51;
  --c3: #3c3c3c;
  background:
    repeating-conic-gradient(
        from 30deg,
        #0000 90deg 120deg,
        var(--c3) 0deg 180deg
      )
      calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
    repeating-conic-gradient(
      from 30deg,
      var(--c1) 0deg 60deg,
      var(--c2) 0deg 120deg,
      var(--c3) 0deg 180deg
    );
  background-size: var(--s) calc(var(--s) * 0.577);
}
`
}