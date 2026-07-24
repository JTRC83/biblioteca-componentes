export default {
  id: 'anim-moon-rotation',
  name: 'Moon Rotation',
  category: 'animations',
  tags: ['moon', 'space', 'star', 'animated', 'css-only', 'rotate', 'twinkle', 'jpeg-bg'],
  author: 'adapted',
  html: `<div class="moon-banner">
  <div id="moon-star-1">
    <div class="moon-corner-star">
      <div id="moon-corner-bottomright"></div>
      <div id="moon-corner-bottomleft"></div>
    </div>
    <div class="moon-corner-star">
      <div id="moon-corner-topright"></div>
      <div id="moon-corner-topleft"></div>
    </div>
  </div>
  <div id="moon-star-2">
    <div class="moon-corner-star">
      <div id="moon-corner-bottomright"></div>
      <div id="moon-corner-bottomleft"></div>
    </div>
    <div class="moon-corner-star">
      <div id="moon-corner-topright"></div>
      <div id="moon-corner-topleft"></div>
    </div>
  </div>
  <div id="moon-star-3">
    <div class="moon-corner-star">
      <div id="moon-corner-bottomright"></div>
      <div id="moon-corner-bottomleft"></div>
    </div>
    <div class="moon-corner-star">
      <div id="moon-corner-topright"></div>
      <div id="moon-corner-topleft"></div>
    </div>
  </div>
  <div id="moon-star-4">
    <div class="moon-corner-star">
      <div id="moon-corner-bottomright"></div>
      <div id="moon-corner-bottomleft"></div>
    </div>
    <div class="moon-corner-star">
      <div id="moon-corner-topright"></div>
      <div id="moon-corner-topleft"></div>
    </div>
  </div>
  <div id="moon-star-5">
    <div class="moon-corner-star">
      <div id="moon-corner-bottomright"></div>
      <div id="moon-corner-bottomleft"></div>
    </div>
    <div class="moon-corner-star">
      <div id="moon-corner-topright"></div>
      <div id="moon-corner-topleft"></div>
    </div>
  </div>
  <div id="moon-star-6">
    <div class="moon-corner-star">
      <div id="moon-corner-bottomright"></div>
      <div id="moon-corner-bottomleft"></div>
    </div>
    <div class="moon-corner-star">
      <div id="moon-corner-topright"></div>
      <div id="moon-corner-topleft"></div>
    </div>
  </div>
  <div id="moon-star-7">
    <div class="moon-corner-star">
      <div id="moon-corner-bottomright"></div>
      <div id="moon-corner-bottomleft"></div>
    </div>
    <div class="moon-corner-star">
      <div id="moon-corner-topright"></div>
      <div id="moon-corner-topleft"></div>
    </div>
  </div>
</div>`,
  css: `
.moon-banner {
  height: 250px;
  width: 250px;
  position: relative;
  border-radius: 50%;
  background: url("/images/luna.jpg");
  background-size: 200% 100%;
  background-repeat: repeat-x;
  background-position: 0 0;
  animation: moon-rotate 40s linear 0s infinite;
  box-shadow:
    0px 0px 20px rgba(200, 200, 220, 0.15),
    -5px 0px 8px #f0f0f0 inset,
    15px 2px 25px #6a6a6a inset,
    -24px -2px 34px #e8e8e899 inset,
    250px 0px 44px #3a3a3a66 inset,
    150px 0px 38px #2a2a2aaa inset;
}
@keyframes moon-rotate {
  0% { background-position: 0% 0; }
  100% { background-position: -200% 0; }
}
.moon-corner-star { display: flex; position: relative; }
#moon-corner-bottomleft, #moon-corner-bottomright, #moon-corner-topleft, #moon-corner-topright {
  width: 4px; height: 5px; overflow: hidden; position: relative;
}
#moon-corner-bottomleft:before, #moon-corner-bottomright:before, #moon-corner-topleft:before, #moon-corner-topright:before {
  content: ""; display: block; width: 200%; height: 200%; position: absolute; border-radius: 50%;
}
#moon-corner-bottomleft:before { bottom: 0; left: 0; box-shadow: -5px 5px 0 0 white; }
#moon-corner-bottomright:before { bottom: 0; right: 0; box-shadow: 5px 5px 0 0 white; }
#moon-corner-topleft:before { top: 0; left: 0; box-shadow: -5px -5px 0 0 white; }
#moon-corner-topright:before { top: 0; right: 0; box-shadow: 5px -5px 0 0 white; }
@keyframes moon-twinkling { 0%, 100% { opacity: 0.1; } 50% { opacity: 1; } }
#moon-star-1 { position: absolute; left: -20px; animation: moon-twinkling 3s infinite; }
#moon-star-2 { position: absolute; left: -40px; top: 30px; animation: moon-twinkling 2s infinite; }
#moon-star-3 { position: absolute; left: 350px; top: 90px; animation: moon-twinkling 4s infinite; }
#moon-star-4 { position: absolute; left: 200px; top: 290px; animation: moon-twinkling 3s infinite; }
#moon-star-5 { position: absolute; left: 50px; top: 270px; animation: moon-twinkling 1.5s infinite; }
#moon-star-6 { position: absolute; left: 250px; top: -50px; animation: moon-twinkling 4s infinite; }
#moon-star-7 { position: absolute; left: 290px; top: 60px; animation: moon-twinkling 2s infinite; }
`
}