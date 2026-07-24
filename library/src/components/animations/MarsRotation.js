export default {
  id: 'anim-mars-rotation',
  name: 'Mars Rotation',
  category: 'animations',
  tags: ['mars', 'space', 'star', 'animated', 'css-only', 'rotate', 'twinkle', 'jpeg-bg', 'planet', 'red'],
  author: 'adapted',
  html: `<div class="mars-banner">
  <div id="mars-star-1">
    <div class="mars-corner-star">
      <div id="mars-corner-bottomright"></div>
      <div id="mars-corner-bottomleft"></div>
    </div>
    <div class="mars-corner-star">
      <div id="mars-corner-topright"></div>
      <div id="mars-corner-topleft"></div>
    </div>
  </div>
  <div id="mars-star-2">
    <div class="mars-corner-star">
      <div id="mars-corner-bottomright"></div>
      <div id="mars-corner-bottomleft"></div>
    </div>
    <div class="mars-corner-star">
      <div id="mars-corner-topright"></div>
      <div id="mars-corner-topleft"></div>
    </div>
  </div>
  <div id="mars-star-3">
    <div class="mars-corner-star">
      <div id="mars-corner-bottomright"></div>
      <div id="mars-corner-bottomleft"></div>
    </div>
    <div class="mars-corner-star">
      <div id="mars-corner-topright"></div>
      <div id="mars-corner-topleft"></div>
    </div>
  </div>
  <div id="mars-star-4">
    <div class="mars-corner-star">
      <div id="mars-corner-bottomright"></div>
      <div id="mars-corner-bottomleft"></div>
    </div>
    <div class="mars-corner-star">
      <div id="mars-corner-topright"></div>
      <div id="mars-corner-topleft"></div>
    </div>
  </div>
  <div id="mars-star-5">
    <div class="mars-corner-star">
      <div id="mars-corner-bottomright"></div>
      <div id="mars-corner-bottomleft"></div>
    </div>
    <div class="mars-corner-star">
      <div id="mars-corner-topright"></div>
      <div id="mars-corner-topleft"></div>
    </div>
  </div>
  <div id="mars-star-6">
    <div class="mars-corner-star">
      <div id="mars-corner-bottomright"></div>
      <div id="mars-corner-bottomleft"></div>
    </div>
    <div class="mars-corner-star">
      <div id="mars-corner-topright"></div>
      <div id="mars-corner-topleft"></div>
    </div>
  </div>
  <div id="mars-star-7">
    <div class="mars-corner-star">
      <div id="mars-corner-bottomright"></div>
      <div id="mars-corner-bottomleft"></div>
    </div>
    <div class="mars-corner-star">
      <div id="mars-corner-topright"></div>
      <div id="mars-corner-topleft"></div>
    </div>
  </div>
</div>`,
  css: `
.mars-banner {
  height: 250px;
  width: 250px;
  position: relative;
  border-radius: 50%;
  background: url("/images/marte.jpg");
  background-size: 200% 100%;
  background-repeat: repeat-x;
  background-position: 0 0;
  animation: mars-rotate 25s linear 0s infinite;
  box-shadow:
    0px 0px 25px rgba(193, 68, 14, 0.3),
    -5px 0px 8px #f0a070 inset,
    15px 2px 25px #6a1f08 inset,
    -24px -2px 34px #ff996699 inset,
    250px 0px 44px #3a100466 inset,
    150px 0px 38px #2a0a02aa inset;
}
@keyframes mars-rotate {
  0% { background-position: 0% 0; }
  100% { background-position: -200% 0; }
}
.mars-corner-star { display: flex; position: relative; }
#mars-corner-bottomleft, #mars-corner-bottomright, #mars-corner-topleft, #mars-corner-topright {
  width: 4px; height: 5px; overflow: hidden; position: relative;
}
#mars-corner-bottomleft:before, #mars-corner-bottomright:before, #mars-corner-topleft:before, #mars-corner-topright:before {
  content: ""; display: block; width: 200%; height: 200%; position: absolute; border-radius: 50%;
}
#mars-corner-bottomleft:before { bottom: 0; left: 0; box-shadow: -5px 5px 0 0 white; }
#mars-corner-bottomright:before { bottom: 0; right: 0; box-shadow: 5px 5px 0 0 white; }
#mars-corner-topleft:before { top: 0; left: 0; box-shadow: -5px -5px 0 0 white; }
#mars-corner-topright:before { top: 0; right: 0; box-shadow: 5px -5px 0 0 white; }
@keyframes mars-twinkling { 0%, 100% { opacity: 0.1; } 50% { opacity: 1; } }
#mars-star-1 { position: absolute; left: -20px; animation: mars-twinkling 3s infinite; }
#mars-star-2 { position: absolute; left: -40px; top: 30px; animation: mars-twinkling 2s infinite; }
#mars-star-3 { position: absolute; left: 350px; top: 90px; animation: mars-twinkling 4s infinite; }
#mars-star-4 { position: absolute; left: 200px; top: 290px; animation: mars-twinkling 3s infinite; }
#mars-star-5 { position: absolute; left: 50px; top: 270px; animation: mars-twinkling 1.5s infinite; }
#mars-star-6 { position: absolute; left: 250px; top: -50px; animation: mars-twinkling 4s infinite; }
#mars-star-7 { position: absolute; left: 290px; top: 60px; animation: mars-twinkling 2s infinite; }
`
}