export default {
  id: 'pat-concentric-dots',
  name: 'Concentric Dots',
  category: 'patterns',
  tags: ['radial', 'concentric', 'dots', 'css-only'],
  author: 'csemszepp',
  html: `<div class="pat-concentric-dots">
  <div class="pat-concentric-dots__bg"></div>
</div>`,
  css: `
.pat-concentric-dots {
  background: #f7d2a1;
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

.pat-concentric-dots__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  --s: 150px;
  --c1: #f7d2a1;
  --c2: #05057e;
  --_g: var(--c1) 0% 5%, var(--c2) 6% 15%, var(--c1) 16% 25%, var(--c2) 26% 35%,
    var(--c1) 36% 45%, var(--c2) 46% 55%, var(--c1) 56% 65%, var(--c2) 66% 75%,
    var(--c1) 76% 85%, var(--c2) 86% 95%, #0000 96%;
  background:
    radial-gradient(50% 50% at 100% 0, var(--_g)),
    radial-gradient(50% 50% at 0 100%, var(--_g)),
    radial-gradient(50% 50%, var(--_g)),
    radial-gradient(50% 50%, var(--_g)) calc(var(--s) / 2) calc(var(--s) / 2)
      var(--c1);
  background-size: var(--s) var(--s);
}
`
}