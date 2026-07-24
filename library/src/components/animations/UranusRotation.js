export default {
  id: 'anim-uranus-rotation',
  name: 'Uranus Rotation',
  category: 'animations',
  tags: ['uranus', 'space', 'star', 'animated', 'css-only', 'rotate', 'twinkle', 'jpeg-bg', 'planet', 'ice-giant'],
  author: 'adapted',
  html: `<div class="uranus-banner">
  <div id="uranus-star-1"><div class="uranus-corner-star"><div id="uranus-corner-bottomright"></div><div id="uranus-corner-bottomleft"></div></div><div class="uranus-corner-star"><div id="uranus-corner-topright"></div><div id="uranus-corner-topleft"></div></div></div>
  <div id="uranus-star-2"><div class="uranus-corner-star"><div id="uranus-corner-bottomright"></div><div id="uranus-corner-bottomleft"></div></div><div class="uranus-corner-star"><div id="uranus-corner-topright"></div><div id="uranus-corner-topleft"></div></div></div>
  <div id="uranus-star-3"><div class="uranus-corner-star"><div id="uranus-corner-bottomright"></div><div id="uranus-corner-bottomleft"></div></div><div class="uranus-corner-star"><div id="uranus-corner-topright"></div><div id="uranus-corner-topleft"></div></div></div>
  <div id="uranus-star-4"><div class="uranus-corner-star"><div id="uranus-corner-bottomright"></div><div id="uranus-corner-bottomleft"></div></div><div class="uranus-corner-star"><div id="uranus-corner-topright"></div><div id="uranus-corner-topleft"></div></div></div>
  <div id="uranus-star-5"><div class="uranus-corner-star"><div id="uranus-corner-bottomright"></div><div id="uranus-corner-bottomleft"></div></div><div class="uranus-corner-star"><div id="uranus-corner-topright"></div><div id="uranus-corner-topleft"></div></div></div>
  <div id="uranus-star-6"><div class="uranus-corner-star"><div id="uranus-corner-bottomright"></div><div id="uranus-corner-bottomleft"></div></div><div class="uranus-corner-star"><div id="uranus-corner-topright"></div><div id="uranus-corner-topleft"></div></div></div>
  <div id="uranus-star-7"><div class="uranus-corner-star"><div id="uranus-corner-bottomright"></div><div id="uranus-corner-bottomleft"></div></div><div class="uranus-corner-star"><div id="uranus-corner-topright"></div><div id="uranus-corner-topleft"></div></div></div>
</div>`,
  css: `
.uranus-banner {
  height: 250px; width: 250px; position: relative; border-radius: 50%;
  background: url("/images/uranus.jpg");
  background-size: 200% 100%; background-repeat: repeat-x; background-position: 0 0;
  animation: uranus-rotate 30s linear 0s infinite;
  box-shadow: 0px 0px 25px rgba(100, 200, 220, 0.2), -5px 0px 8px #b0e8f0 inset, 15px 2px 25px #2a6a7a inset, -24px -2px 34px #a0d8e099 inset, 250px 0px 44px #1a3a4a66 inset, 150px 0px 38px #0a2a3aaa inset;
}
@keyframes uranus-rotate { 0% { background-position: 0% 0; } 100% { background-position: -200% 0; } }
.uranus-corner-star { display: flex; position: relative; }
#uranus-corner-bottomleft, #uranus-corner-bottomright, #uranus-corner-topleft, #uranus-corner-topright { width: 4px; height: 5px; overflow: hidden; position: relative; }
#uranus-corner-bottomleft:before, #uranus-corner-bottomright:before, #uranus-corner-topleft:before, #uranus-corner-topright:before { content: ""; display: block; width: 200%; height: 200%; position: absolute; border-radius: 50%; }
#uranus-corner-bottomleft:before { bottom: 0; left: 0; box-shadow: -5px 5px 0 0 white; }
#uranus-corner-bottomright:before { bottom: 0; right: 0; box-shadow: 5px 5px 0 0 white; }
#uranus-corner-topleft:before { top: 0; left: 0; box-shadow: -5px -5px 0 0 white; }
#uranus-corner-topright:before { top: 0; right: 0; box-shadow: 5px -5px 0 0 white; }
@keyframes uranus-twinkling { 0%, 100% { opacity: 0.1; } 50% { opacity: 1; } }
#uranus-star-1 { position: absolute; left: -20px; animation: uranus-twinkling 3s infinite; }
#uranus-star-2 { position: absolute; left: -40px; top: 30px; animation: uranus-twinkling 2s infinite; }
#uranus-star-3 { position: absolute; left: 350px; top: 90px; animation: uranus-twinkling 4s infinite; }
#uranus-star-4 { position: absolute; left: 200px; top: 290px; animation: uranus-twinkling 3s infinite; }
#uranus-star-5 { position: absolute; left: 50px; top: 270px; animation: uranus-twinkling 1.5s infinite; }
#uranus-star-6 { position: absolute; left: 250px; top: -50px; animation: uranus-twinkling 4s infinite; }
#uranus-star-7 { position: absolute; left: 290px; top: 60px; animation: uranus-twinkling 2s infinite; }
`
}