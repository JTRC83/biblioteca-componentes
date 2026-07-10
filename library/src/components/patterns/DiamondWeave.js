export default {
  id: 'pat-diamond-weave',
  name: 'Diamond Weave',
  category: 'patterns',
  tags: ['diamond', 'weave', 'conic', 'tiles', 'css-only'],
  author: 'csemszepp',
  html: `<div class="pat-diamond-weave">
  <div class="pat-diamond-weave__bg"></div>
</div>`,
  css: `
.pat-diamond-weave {
  background: #999999;
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

.pat-diamond-weave__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  --s: 84px;
  --c1: #f2f2f2;
  --c2: #cdcbcc;
  --c3: #999999;
  --_g: 0 120deg, #0000 0;
  background:
    conic-gradient(
      from 0deg at calc(500% / 6) calc(100% / 3),
      var(--c3) var(--_g)
    ),
    conic-gradient(
      from -120deg at calc(100% / 6) calc(100% / 3),
      var(--c2) var(--_g)
    ),
    conic-gradient(
      from 120deg at calc(100% / 3) calc(500% / 6),
      var(--c1) var(--_g)
    ),
    conic-gradient(
      from 120deg at calc(200% / 3) calc(500% / 6),
      var(--c1) var(--_g)
    ),
    conic-gradient(
      from -180deg at calc(100% / 3) 50%,
      var(--c2) 60deg,
      var(--c1) var(--_g)
    ),
    conic-gradient(
      from 60deg at calc(200% / 3) 50%,
      var(--c1) 60deg,
      var(--c3) var(--_g)
    ),
    conic-gradient(
      from -60deg at 50% calc(100% / 3),
      var(--c1) 120deg,
      var(--c2) 0 240deg,
      var(--c3) 0
    );
  background-size: calc(var(--s) * 1.732) var(--s);
}
`
}