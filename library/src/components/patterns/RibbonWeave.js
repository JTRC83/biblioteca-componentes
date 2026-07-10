export default {
  id: 'pat-ribbon-weave',
  name: 'Ribbon Weave',
  category: 'patterns',
  tags: ['ribbon', 'weave', 'conic', 'tiles', 'css-only'],
  author: 'csemszepp',
  html: `<div class="pat-ribbon-weave">
  <div class="pat-ribbon-weave__bg"></div>
</div>`,
  css: `
.pat-ribbon-weave {
  background: #7f727b;
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

.pat-ribbon-weave__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  --s: 222px;
  --c1: #7f727b;
  --c2: #d6b4c2;
  --c3: #baa0ab;
  --_g: var(--c1) 10%, var(--c2) 10.5% 19%, #0000 19.5% 80.5%,
    var(--c2) 81% 89.5%, var(--c3) 90%;
  --_c: from -90deg at 37.5% 50%, #0000 75%;
  --_l1: linear-gradient(145deg, var(--_g));
  --_l2: linear-gradient(35deg, var(--_g));
  background:
    var(--_l1), var(--_l1) calc(var(--s) / 2) var(--s), var(--_l2),
    var(--_l2) calc(var(--s) / 2) var(--s),
    conic-gradient(var(--_c), var(--c1) 0) calc(var(--s) / 8) 0,
    conic-gradient(var(--_c), var(--c3) 0) calc(var(--s) / 2) 0,
    linear-gradient(
      90deg,
      var(--c3) 38%,
      var(--c1) 0 50%,
      var(--c3) 0 62%,
      var(--c1) 0
    );
  background-size: var(--s) calc(2 * var(--s) / 3);
}
`
}