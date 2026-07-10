export default {
  id: 'pat-gold-spiral',
  name: 'Gold Spiral',
  category: 'patterns',
  tags: ['gold', 'radial', 'spiral', 'css-only'],
  author: 's3npa1w_5117',
  html: `<div class="pat-gold-spiral">
  <div class="pat-gold-spiral__bg"></div>
</div>`,
  css: `
.pat-gold-spiral {
  background: #d4af37;
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

.pat-gold-spiral__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  --s: 200px;
  --c1: #d4af37;
  --c2: #121212;
  --_g: var(--c2) 4% 14%, var(--c1) 14% 24%, var(--c2) 22% 34%,
    var(--c1) 34% 44%, var(--c2) 44% 56%, var(--c1) 56% 66%, var(--c2) 66% 76%,
    var(--c1) 76% 86%, var(--c2) 86% 96%;
  background:
    radial-gradient(
      100% 100% at 100% 0,
      var(--c1) 4%,
      var(--_g),
      #0008 96%,
      #0000
    ),
    radial-gradient(
        100% 100% at 0 100%,
        #0000,
        #0008 4%,
        var(--_g),
        var(--c1) 96%
      )
      var(--c1);
  background-size: var(--s) var(--s);
}
`
}