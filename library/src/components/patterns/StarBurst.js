export default {
  id: 'pat-star-burst',
  name: 'Star Burst',
  category: 'patterns',
  tags: ['star', 'conic', 'tiles', 'css-only'],
  author: 'csemszepp',
  html: `<div class="pat-star-burst">
  <div class="pat-star-burst__bg"></div>
</div>`,
  css: `
.pat-star-burst {
  background: #b9b9b9;
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

.pat-star-burst__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  --s: 105px;
  --c1: #b9b9b9;
  --c2: #dcdcdc;
  --c3: #fafafa;
  background:
    conic-gradient(
        from 75deg,
        var(--c1) 15deg,
        var(--c2) 0 30deg,
        #0000 0 180deg,
        var(--c2) 0 195deg,
        var(--c1) 0 210deg,
        #0000 0
      )
      calc(0.5 * var(--s)) calc(0.5 * var(--s) / 0.577),
    conic-gradient(
      var(--c1) 30deg,
      var(--c3) 0 75deg,
      var(--c1) 0 90deg,
      var(--c2) 0 105deg,
      var(--c3) 0 150deg,
      var(--c2) 0 180deg,
      var(--c3) 0 210deg,
      var(--c1) 0 256deg,
      var(--c2) 0 270deg,
      var(--c1) 0 286deg,
      var(--c2) 0 331deg,
      var(--c3) 0
    );
  background-size: var(--s) calc(var(--s) / 0.577);
}
`
}