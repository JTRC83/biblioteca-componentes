export default {
  id: 'pat-weave',
  name: 'Weave Pattern',
  category: 'patterns',
  tags: ['weave', 'conic', 'tiles', 'css-only'],
  author: 'csemszepp',
  html: `<div class="pat-weave">
  <div class="pat-weave__bg"></div>
</div>`,
  css: `
.pat-weave {
  background: #b2b2b2;
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

.pat-weave__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  --s: 82px;
  --c1: #b2b2b2;
  --c2: #ffffff;
  --c3: #d9d9d9;
  --_g: var(--c3) 0 120deg, #0000 0;
  background:
    conic-gradient(from -60deg at 50% calc(100% / 3), var(--_g)),
    conic-gradient(from 120deg at 50% calc(200% / 3), var(--_g)),
    conic-gradient(
      from 60deg at calc(200% / 3),
      var(--c3) 60deg,
      var(--c2) 0 120deg,
      #0000 0
    ),
    conic-gradient(from 180deg at calc(100% / 3), var(--c1) 60deg, var(--_g)),
    linear-gradient(
      90deg,
      var(--c1) calc(100% / 6),
      var(--c2) 0 50%,
      var(--c1) 0 calc(500% / 6),
      var(--c2) 0
    );
  background-size: calc(1.732 * var(--s)) var(--s);
}
`
}