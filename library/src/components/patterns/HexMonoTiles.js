export default {
  id: 'pat-hex-mono',
  name: 'Hex Mono Tiles',
  category: 'patterns',
  tags: ['hexagon', 'tiles', 'conic', 'monochrome', 'css-only'],
  author: 'Juanes200122',
  html: `<div class="pat-hex-mono">
  <div class="pat-hex-mono__bg"></div>
</div>`,
  css: `
.pat-hex-mono {
  background: #414141;
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

.pat-hex-mono__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  --s: 200px;
  --c1: #414141;
  --c2: #bebebe;
  --c3: #ffffff;
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