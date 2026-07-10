export default {
  id: 'pat-geo-tiles',
  name: 'Geo Tiles',
  category: 'patterns',
  tags: ['geometric', 'tiles', 'conic', 'css-only'],
  author: 'csemszepp',
  html: `<div class="pat-geo-tiles">
  <div class="pat-geo-tiles__bg"></div>
</div>`,
  css: `
.pat-geo-tiles {
  background: #55897c;
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

.pat-geo-tiles__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  --s: 194px;
  --c1: #f6edb3;
  --c2: #acc4a3;
  --_l: #0000 calc(25% / 3), var(--c1) 0 25%, #0000 0;
  --_g: conic-gradient(from 120deg at 50% 87.5%, var(--c1) 120deg, #0000 0);
  background:
    var(--_g), var(--_g) 0 calc(var(--s) / 2),
    conic-gradient(from 180deg at 75%, var(--c2) 60deg, #0000 0),
    conic-gradient(from 60deg at 75% 75%, var(--c1) 0 60deg, #0000 0),
    linear-gradient(150deg, var(--_l)) 0 calc(var(--s) / 2),
    conic-gradient(
      at 25% 25%,
      #0000 50%,
      var(--c2) 0 240deg,
      var(--c1) 0 300deg,
      var(--c2) 0
    ),
    linear-gradient(-150deg, var(--_l)) #55897c;
  background-size: calc(0.866 * var(--s)) var(--s);
}
`
}