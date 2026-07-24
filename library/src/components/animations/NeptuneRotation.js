export default {
  id: 'anim-neptune-rotation',
  name: 'Neptune Rotation',
  category: 'animations',
  tags: ['neptune', 'space', 'star', 'animated', 'css-only', 'rotate', 'twinkle', 'jpeg-bg', 'planet', 'ice-giant', 'blue'],
  author: 'adapted',
  html: `<div class="neptune-banner">
  <div id="neptune-star-1"><div class="neptune-corner-star"><div id="neptune-corner-bottomright"></div><div id="neptune-corner-bottomleft"></div></div><div class="neptune-corner-star"><div id="neptune-corner-topright"></div><div id="neptune-corner-topleft"></div></div></div>
  <div id="neptune-star-2"><div class="neptune-corner-star"><div id="neptune-corner-bottomright"></div><div id="neptune-corner-bottomleft"></div></div><div class="neptune-corner-star"><div id="neptune-corner-topright"></div><div id="neptune-corner-topleft"></div></div></div>
  <div id="neptune-star-3"><div class="neptune-corner-star"><div id="neptune-corner-bottomright"></div><div id="neptune-corner-bottomleft"></div></div><div class="neptune-corner-star"><div id="neptune-corner-topright"></div><div id="neptune-corner-topleft"></div></div></div>
  <div id="neptune-star-4"><div class="neptune-corner-star"><div id="neptune-corner-bottomright"></div><div id="neptune-corner-bottomleft"></div></div><div class="neptune-corner-star"><div id="neptune-corner-topright"></div><div id="neptune-corner-topleft"></div></div></div>
  <div id="neptune-star-5"><div class="neptune-corner-star"><div id="neptune-corner-bottomright"></div><div id="neptune-corner-bottomleft"></div></div><div class="neptune-corner-star"><div id="neptune-corner-topright"></div><div id="neptune-corner-topleft"></div></div></div>
  <div id="neptune-star-6"><div class="neptune-corner-star"><div id="neptune-corner-bottomright"></div><div id="neptune-corner-bottomleft"></div></div><div class="neptune-corner-star"><div id="neptune-corner-topright"></div><div id="neptune-corner-topleft"></div></div></div>
  <div id="neptune-star-7"><div class="neptune-corner-star"><div id="neptune-corner-bottomright"></div><div id="neptune-corner-bottomleft"></div></div><div class="neptune-corner-star"><div id="neptune-corner-topright"></div><div id="neptune-corner-topleft"></div></div></div>
</div>`,
  css: `
.neptune-banner {
  height: 250px; width: 250px; position: relative; border-radius: 50%;
  background: url("/images/neptune.jpg");
  background-size: 200% 100%; background-repeat: repeat-x; background-position: 0 0;
  animation: neptune-rotate 22s linear 0s infinite;
  box-shadow: 0px 0px 25px rgba(40, 80, 200, 0.25), -5px 0px 8px #6090e0 inset, 15px 2px 25px #1a2a6a inset, -24px -2px 34px #5080d099 inset, 250px 0px 44px #0a1a3a66 inset, 150px 0px 38px #0a0a2aaa inset;
}
@keyframes neptune-rotate { 0% { background-position: 0% 0; } 100% { background-position: -200% 0; } }
.neptune-corner-star { display: flex; position: relative; }
#neptune-corner-bottomleft, #neptune-corner-bottomright, #neptune-corner-topleft, #neptune-corner-topright { width: 4px; height: 5px; overflow: hidden; position: relative; }
#neptune-corner-bottomleft:before, #neptune-corner-bottomright:before, #neptune-corner-topleft:before, #neptune-corner-topright:before { content: ""; display: block; width: 200%; height: 200%; position: absolute; border-radius: 50%; }
#neptune-corner-bottomleft:before { bottom: 0; left: 0; box-shadow: -5px 5px 0 0 white; }
#neptune-corner-bottomright:before { bottom: 0; right: 0; box-shadow: 5px 5px 0 0 white; }
#neptune-corner-topleft:before { top: 0; left: 0; box-shadow: -5px -5px 0 0 white; }
#neptune-corner-topright:before { top: 0; right: 0; box-shadow: 5px -5px 0 0 white; }
@keyframes neptune-twinkling { 0%, 100% { opacity: 0.1; } 50% { opacity: 1; } }
#neptune-star-1 { position: absolute; left: -20px; animation: neptune-twinkling 3s infinite; }
#neptune-star-2 { position: absolute; left: -40px; top: 30px; animation: neptune-twinkling 2s infinite; }
#neptune-star-3 { position: absolute; left: 350px; top: 90px; animation: neptune-twinkling 4s infinite; }
#neptune-star-4 { position: absolute; left: 200px; top: 290px; animation: neptune-twinkling 3s infinite; }
#neptune-star-5 { position: absolute; left: 50px; top: 270px; animation: neptune-twinkling 1.5s infinite; }
#neptune-star-6 { position: absolute; left: 250px; top: -50px; animation: neptune-twinkling 4s infinite; }
#neptune-star-7 { position: absolute; left: 290px; top: 60px; animation: neptune-twinkling 2s infinite; }
`
}