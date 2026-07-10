export default {
  id: 'pat-batman',
  name: 'Batman Pattern',
  category: 'patterns',
  tags: ['batman', 'conic', 'tiles', 'css-only'],
  author: 'mobinkakei',
  html: `<div class="pat-batman">
  <div class="pat-batman__bg"></div>
</div>`,
  css: `
.pat-batman {
  background: #000000;
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

.pat-batman__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  --u: 5px;
  --c1: #ededee;
  --c2: #000000;
  --c3: #1e1e1e;
  --gp: 50% / calc(var(--u) * 16.9) calc(var(--u) * 12.8);
  background:
    conic-gradient(
        from 122deg at 50% 85.15%,
        var(--c2) 0 58deg,
        var(--c3) 0 116deg,
        #fff0 0 100%
      )
      var(--gp),
    conic-gradient(from 122deg at 50% 72.5%, var(--c1) 0 116deg, #fff0 0 100%)
      var(--gp),
    conic-gradient(from 58deg at 82.85% 50%, var(--c3) 0 64deg, #fff0 0 100%)
      var(--gp),
    conic-gradient(
        from 58deg at 66.87% 50%,
        var(--c1) 0 64deg,
        var(--c2) 0 130deg,
        #fff0 0 100%
      )
      var(--gp),
    conic-gradient(from 238deg at 17.15% 50%, var(--c2) 0 64deg, #fff0 0 100%)
      var(--gp),
    conic-gradient(
        from 172deg at 33.13% 50%,
        var(--c3) 0 66deg,
        var(--c1) 0 130deg,
        #fff0 0 100%
      )
      var(--gp),
    linear-gradient(98deg, var(--c3) 0 15%, #fff0 calc(15% + 1px) 100%)
      var(--gp),
    linear-gradient(-98deg, var(--c2) 0 15%, #fff0 calc(15% + 1px) 100%)
      var(--gp),
    conic-gradient(
        from -58deg at 50.25% 14.85%,
        var(--c3) 0 58deg,
        var(--c2) 0 116deg,
        #fff0 0 100%
      )
      var(--gp),
    conic-gradient(from -58deg at 50% 28.125%, var(--c1) 0 116deg, #fff0 0 100%)
      var(--gp),
    linear-gradient(90deg, var(--c2) 0 50%, var(--c3) 0 100%) var(--gp);
}
`
}