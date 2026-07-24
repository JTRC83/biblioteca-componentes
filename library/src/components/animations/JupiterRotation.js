export default {
  id: 'anim-jupiter-rotation',
  name: 'Jupiter Rotation',
  category: 'animations',
  tags: ['jupiter', 'space', 'star', 'animated', 'css-only', 'rotate', 'twinkle', 'jpeg-bg', 'planet', 'gas-giant', 'rings'],
  author: 'adapted',
  html: `<div class="jupiter-system">
  <div class="jupiter-ring jupiter-ring--1 jupiter-ring--back"></div>
  <div class="jupiter-ring jupiter-ring--2 jupiter-ring--back"></div>
  <div class="jupiter-ring jupiter-ring--3 jupiter-ring--back"></div>
  <div class="jupiter-ring jupiter-ring--4 jupiter-ring--back"></div>
  <div class="jupiter-banner"></div>
  <div class="jupiter-ring jupiter-ring--1 jupiter-ring--front"></div>
  <div class="jupiter-ring jupiter-ring--2 jupiter-ring--front"></div>
  <div class="jupiter-ring jupiter-ring--3 jupiter-ring--front"></div>
  <div class="jupiter-ring jupiter-ring--4 jupiter-ring--front"></div>
  <div id="jupiter-star-1">
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-bottomright"></div>
      <div id="jupiter-corner-bottomleft"></div>
    </div>
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-topright"></div>
      <div id="jupiter-corner-topleft"></div>
    </div>
  </div>
  <div id="jupiter-star-2">
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-bottomright"></div>
      <div id="jupiter-corner-bottomleft"></div>
    </div>
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-topright"></div>
      <div id="jupiter-corner-topleft"></div>
    </div>
  </div>
  <div id="jupiter-star-3">
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-bottomright"></div>
      <div id="jupiter-corner-bottomleft"></div>
    </div>
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-topright"></div>
      <div id="jupiter-corner-topleft"></div>
    </div>
  </div>
  <div id="jupiter-star-4">
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-bottomright"></div>
      <div id="jupiter-corner-bottomleft"></div>
    </div>
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-topright"></div>
      <div id="jupiter-corner-topleft"></div>
    </div>
  </div>
  <div id="jupiter-star-5">
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-bottomright"></div>
      <div id="jupiter-corner-bottomleft"></div>
    </div>
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-topright"></div>
      <div id="jupiter-corner-topleft"></div>
    </div>
  </div>
  <div id="jupiter-star-6">
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-bottomright"></div>
      <div id="jupiter-corner-bottomleft"></div>
    </div>
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-topright"></div>
      <div id="jupiter-corner-topleft"></div>
    </div>
  </div>
  <div id="jupiter-star-7">
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-bottomright"></div>
      <div id="jupiter-corner-bottomleft"></div>
    </div>
    <div class="jupiter-corner-star">
      <div id="jupiter-corner-topright"></div>
      <div id="jupiter-corner-topleft"></div>
    </div>
  </div>
</div>`,
  css: `
.jupiter-system {
  position: relative;
  width: 520px;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  }
.jupiter-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  pointer-events: none;
}
.jupiter-ring--1 {
  width: 500px; height: 120px;
  margin-left: -250px; margin-top: -60px;
  border: 3px solid rgba(200, 170, 120, 0.3);
}
.jupiter-ring--2 {
  width: 460px; height: 105px;
  margin-left: -230px; margin-top: -52px;
  border: 8px solid rgba(210, 180, 130, 0.4);
}
.jupiter-ring--3 {
  width: 420px; height: 92px;
  margin-left: -210px; margin-top: -46px;
  border: 5px solid rgba(200, 170, 120, 0.35);
}
.jupiter-ring--4 {
  width: 380px; height: 80px;
  margin-left: -190px; margin-top: -40px;
  border: 2px solid rgba(190, 160, 110, 0.25);
}
.jupiter-ring--back { z-index: 1; clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%); }
.jupiter-ring--front { z-index: 3; clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%); }
.jupiter-banner {
  height: 280px;
  width: 280px;
  position: relative;
  border-radius: 50%;
  background: url("/images/jupiter.jpg");
  background-size: 200% 100%;
  background-repeat: repeat-x;
  background-position: 0 0;
  animation: jupiter-rotate 20s linear 0s infinite;
  box-shadow:
    0px 0px 30px rgba(196, 166, 122, 0.2),
    -5px 0px 8px #f0d8a8 inset,
    15px 2px 30px #6a4a2a inset,
    -24px -2px 40px #e8d0a099 inset,
    280px 0px 50px #3a2a1a66 inset,
    170px 0px 42px #2a1a0aaa inset;
  overflow: hidden;
  z-index: 2;
}
@keyframes jupiter-rotate {
  0% { background-position: 0% 0; }
  100% { background-position: -200% 0; }
}
.jupiter-corner-star { display: flex; position: relative; }
#jupiter-corner-bottomleft, #jupiter-corner-bottomright, #jupiter-corner-topleft, #jupiter-corner-topright {
  width: 4px; height: 5px; overflow: hidden; position: relative;
}
#jupiter-corner-bottomleft:before, #jupiter-corner-bottomright:before, #jupiter-corner-topleft:before, #jupiter-corner-topright:before {
  content: ""; display: block; width: 200%; height: 200%; position: absolute; border-radius: 50%;
}
#jupiter-corner-bottomleft:before { bottom: 0; left: 0; box-shadow: -5px 5px 0 0 white; }
#jupiter-corner-bottomright:before { bottom: 0; right: 0; box-shadow: 5px 5px 0 0 white; }
#jupiter-corner-topleft:before { top: 0; left: 0; box-shadow: -5px -5px 0 0 white; }
#jupiter-corner-topright:before { top: 0; right: 0; box-shadow: 5px -5px 0 0 white; }
@keyframes jupiter-twinkling { 0%, 100% { opacity: 0.1; } 50% { opacity: 1; } }
#jupiter-star-1 { position: absolute; left: -20px; animation: jupiter-twinkling 3s infinite; }
#jupiter-star-2 { position: absolute; left: -40px; top: 30px; animation: jupiter-twinkling 2s infinite; }
#jupiter-star-3 { position: absolute; left: 350px; top: 90px; animation: jupiter-twinkling 4s infinite; }
#jupiter-star-4 { position: absolute; left: 200px; top: 290px; animation: jupiter-twinkling 3s infinite; }
#jupiter-star-5 { position: absolute; left: 50px; top: 270px; animation: jupiter-twinkling 1.5s infinite; }
#jupiter-star-6 { position: absolute; left: 250px; top: -50px; animation: jupiter-twinkling 4s infinite; }
#jupiter-star-7 { position: absolute; left: 290px; top: 60px; animation: jupiter-twinkling 2s infinite; }
`
}