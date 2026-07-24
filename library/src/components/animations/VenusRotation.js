export default {
  id: 'anim-venus-rotation',
  name: 'Venus Rotation',
  category: 'animations',
  tags: ['venus', 'space', 'star', 'animated', 'css-only', 'rotate', 'twinkle', 'jpeg-bg', 'planet', 'cloud'],
  author: 'adapted',
  html: `<div class="venus-banner">
  <div id="venus-star-1">
    <div class="venus-corner-star">
      <div id="venus-corner-bottomright"></div>
      <div id="venus-corner-bottomleft"></div>
    </div>
    <div class="venus-corner-star">
      <div id="venus-corner-topright"></div>
      <div id="venus-corner-topleft"></div>
    </div>
  </div>
  <div id="venus-star-2">
    <div class="venus-corner-star">
      <div id="venus-corner-bottomright"></div>
      <div id="venus-corner-bottomleft"></div>
    </div>
    <div class="venus-corner-star">
      <div id="venus-corner-topright"></div>
      <div id="venus-corner-topleft"></div>
    </div>
  </div>
  <div id="venus-star-3">
    <div class="venus-corner-star">
      <div id="venus-corner-bottomright"></div>
      <div id="venus-corner-bottomleft"></div>
    </div>
    <div class="venus-corner-star">
      <div id="venus-corner-topright"></div>
      <div id="venus-corner-topleft"></div>
    </div>
  </div>
  <div id="venus-star-4">
    <div class="venus-corner-star">
      <div id="venus-corner-bottomright"></div>
      <div id="venus-corner-bottomleft"></div>
    </div>
    <div class="venus-corner-star">
      <div id="venus-corner-topright"></div>
      <div id="venus-corner-topleft"></div>
    </div>
  </div>
  <div id="venus-star-5">
    <div class="venus-corner-star">
      <div id="venus-corner-bottomright"></div>
      <div id="venus-corner-bottomleft"></div>
    </div>
    <div class="venus-corner-star">
      <div id="venus-corner-topright"></div>
      <div id="venus-corner-topleft"></div>
    </div>
  </div>
  <div id="venus-star-6">
    <div class="venus-corner-star">
      <div id="venus-corner-bottomright"></div>
      <div id="venus-corner-bottomleft"></div>
    </div>
    <div class="venus-corner-star">
      <div id="venus-corner-topright"></div>
      <div id="venus-corner-topleft"></div>
    </div>
  </div>
  <div id="venus-star-7">
    <div class="venus-corner-star">
      <div id="venus-corner-bottomright"></div>
      <div id="venus-corner-bottomleft"></div>
    </div>
    <div class="venus-corner-star">
      <div id="venus-corner-topright"></div>
      <div id="venus-corner-topleft"></div>
    </div>
  </div>
</div>`,
  css: `
.venus-banner {
  height: 250px;
  width: 250px;
  position: relative;
  border-radius: 50%;
  background: url("/images/venus.jpg");
  background-size: 200% 100%;
  background-repeat: repeat-x;
  background-position: 0 0;
  animation: venus-rotate 60s linear 0s infinite;
  box-shadow:
    0px 0px 25px rgba(255, 180, 80, 0.2),
    -5px 0px 8px #ffe0a0 inset,
    15px 2px 25px #8a5a1a inset,
    -24px -2px 34px #ffd89099 inset,
    250px 0px 44px #4a2a0066 inset,
    150px 0px 38px #3a1a00aa inset;
}
@keyframes venus-rotate {
  0% { background-position: 0% 0; }
  100% { background-position: -200% 0; }
}
.venus-corner-star { display: flex; position: relative; }
#venus-corner-bottomleft, #venus-corner-bottomright, #venus-corner-topleft, #venus-corner-topright {
  width: 4px; height: 5px; overflow: hidden; position: relative;
}
#venus-corner-bottomleft:before, #venus-corner-bottomright:before, #venus-corner-topleft:before, #venus-corner-topright:before {
  content: ""; display: block; width: 200%; height: 200%; position: absolute; border-radius: 50%;
}
#venus-corner-bottomleft:before { bottom: 0; left: 0; box-shadow: -5px 5px 0 0 white; }
#venus-corner-bottomright:before { bottom: 0; right: 0; box-shadow: 5px 5px 0 0 white; }
#venus-corner-topleft:before { top: 0; left: 0; box-shadow: -5px -5px 0 0 white; }
#venus-corner-topright:before { top: 0; right: 0; box-shadow: 5px -5px 0 0 white; }
@keyframes venus-twinkling { 0%, 100% { opacity: 0.1; } 50% { opacity: 1; } }
#venus-star-1 { position: absolute; left: -20px; animation: venus-twinkling 3s infinite; }
#venus-star-2 { position: absolute; left: -40px; top: 30px; animation: venus-twinkling 2s infinite; }
#venus-star-3 { position: absolute; left: 350px; top: 90px; animation: venus-twinkling 4s infinite; }
#venus-star-4 { position: absolute; left: 200px; top: 290px; animation: venus-twinkling 3s infinite; }
#venus-star-5 { position: absolute; left: 50px; top: 270px; animation: venus-twinkling 1.5s infinite; }
#venus-star-6 { position: absolute; left: 250px; top: -50px; animation: venus-twinkling 4s infinite; }
#venus-star-7 { position: absolute; left: 290px; top: 60px; animation: venus-twinkling 2s infinite; }
`
}