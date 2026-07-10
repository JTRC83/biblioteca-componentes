export default {
  id: 'pat-teal-star',
  name: 'Teal Star',
  category: 'patterns',
  tags: ['star', 'teal', 'conic', 'tiles', 'css-only'],
  author: 'FColombati',
  html: `<div class="pat-teal-star">
  <div class="pat-teal-star__bg"></div>
</div>`,
  css: `
.pat-teal-star {
  background: #01685b;
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

.pat-teal-star__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-position: center center;
  background:
    conic-gradient(
        from 0deg at 68.4% 85.35%,
        #fff0 0 60deg,
        #38bba7 0 120deg,
        #159380 0 202.5deg,
        #fff0 0 360deg
      )
      50%/200px 250px,
    conic-gradient(
        from 0deg at 31.6% 85.35%,
        #fff0 0 157.5deg,
        #17a18c 0 240deg,
        #38bba7 0 300deg,
        #fff0 0 360deg
      )
      50%/200px 250px,
    conic-gradient(
        from 0deg at 81.35% 35.5%,
        #fff0 0 22.75deg,
        #128070 0 157.25deg,
        #fff0 0 360deg
      )
      50%/200px 250px,
    conic-gradient(
        from 0deg at 18.65% 35.5%,
        #fff0 0 202.75deg,
        #01685b 0 337.25deg,
        #fff0 0 360deg
      )
      50%/200px 250px,
    conic-gradient(
        from 0deg at 50% 50%,
        #fff0 0 60deg,
        #17a18c 0 157.5deg,
        #01685b 0 180.1deg,
        #128070 0 202.5deg,
        #159380 0 300deg,
        #fff0 0 360deg
      )
      50%/200px 250px,
    conic-gradient(
        from 0deg at 50% 21.15%,
        #fff0 0 22.5deg,
        #159380 0 120deg,
        #38bba7 0 240deg,
        #17a18c 0 337.5deg,
        #fff0 0 360deg
      )
      50%/200px 250px,
    linear-gradient(90deg, #128070 0 50%, #01685b 0 100%) 50%/200px 250px;
}
`
}