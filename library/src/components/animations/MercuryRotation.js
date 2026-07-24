export default {
  id: 'anim-mercury-rotation',
  name: 'Mercury Rotation',
  category: 'animations',
  tags: ['mercury', 'space', 'star', 'animated', 'css-only', 'rotate', 'twinkle', 'jpeg-bg', 'planet'],
  author: 'adapted',
  html: `<div class="mercury-banner">
  <div id="mercury-star-1"><div class="mercury-corner-star"><div id="mercury-corner-bottomright"></div><div id="mercury-corner-bottomleft"></div></div><div class="mercury-corner-star"><div id="mercury-corner-topright"></div><div id="mercury-corner-topleft"></div></div></div>
  <div id="mercury-star-2"><div class="mercury-corner-star"><div id="mercury-corner-bottomright"></div><div id="mercury-corner-bottomleft"></div></div><div class="mercury-corner-star"><div id="mercury-corner-topright"></div><div id="mercury-corner-topleft"></div></div></div>
  <div id="mercury-star-3"><div class="mercury-corner-star"><div id="mercury-corner-bottomright"></div><div id="mercury-corner-bottomleft"></div></div><div class="mercury-corner-star"><div id="mercury-corner-topright"></div><div id="mercury-corner-topleft"></div></div></div>
  <div id="mercury-star-4"><div class="mercury-corner-star"><div id="mercury-corner-bottomright"></div><div id="mercury-corner-bottomleft"></div></div><div class="mercury-corner-star"><div id="mercury-corner-topright"></div><div id="mercury-corner-topleft"></div></div></div>
  <div id="mercury-star-5"><div class="mercury-corner-star"><div id="mercury-corner-bottomright"></div><div id="mercury-corner-bottomleft"></div></div><div class="mercury-corner-star"><div id="mercury-corner-topright"></div><div id="mercury-corner-topleft"></div></div></div>
  <div id="mercury-star-6"><div class="mercury-corner-star"><div id="mercury-corner-bottomright"></div><div id="mercury-corner-bottomleft"></div></div><div class="mercury-corner-star"><div id="mercury-corner-topright"></div><div id="mercury-corner-topleft"></div></div></div>
  <div id="mercury-star-7"><div class="mercury-corner-star"><div id="mercury-corner-bottomright"></div><div id="mercury-corner-bottomleft"></div></div><div class="mercury-corner-star"><div id="mercury-corner-topright"></div><div id="mercury-corner-topleft"></div></div></div>
</div>`,
  css: `
.mercury-banner {
  height: 250px; width: 250px; position: relative; border-radius: 50%;
  background: url("/images/mercury.jpg");
  background-size: 200% 100%; background-repeat: repeat-x; background-position: 0 0;
  animation: mercury-rotate 15s linear 0s infinite;
  box-shadow: 0px 0px 25px rgba(80, 120, 180, 0.2), -5px 0px 8px #a0c0e0 inset, 15px 2px 25px #3a3a4a inset, -24px -2px 34px #b0c8e099 inset, 250px 0px 44px #1a1a2a66 inset, 150px 0px 38px #0a0a1aaa inset;
}
@keyframes mercury-rotate { 0% { background-position: 0% 0; } 100% { background-position: -200% 0; } }
.mercury-corner-star { display: flex; position: relative; }
#mercury-corner-bottomleft, #mercury-corner-bottomright, #mercury-corner-topleft, #mercury-corner-topright { width: 4px; height: 5px; overflow: hidden; position: relative; }
#mercury-corner-bottomleft:before, #mercury-corner-bottomright:before, #mercury-corner-topleft:before, #mercury-corner-topright:before { content: ""; display: block; width: 200%; height: 200%; position: absolute; border-radius: 50%; }
#mercury-corner-bottomleft:before { bottom: 0; left: 0; box-shadow: -5px 5px 0 0 white; }
#mercury-corner-bottomright:before { bottom: 0; right: 0; box-shadow: 5px 5px 0 0 white; }
#mercury-corner-topleft:before { top: 0; left: 0; box-shadow: -5px -5px 0 0 white; }
#mercury-corner-topright:before { top: 0; right: 0; box-shadow: 5px -5px 0 0 white; }
@keyframes mercury-twinkling { 0%, 100% { opacity: 0.1; } 50% { opacity: 1; } }
#mercury-star-1 { position: absolute; left: -20px; animation: mercury-twinkling 3s infinite; }
#mercury-star-2 { position: absolute; left: -40px; top: 30px; animation: mercury-twinkling 2s infinite; }
#mercury-star-3 { position: absolute; left: 350px; top: 90px; animation: mercury-twinkling 4s infinite; }
#mercury-star-4 { position: absolute; left: 200px; top: 290px; animation: mercury-twinkling 3s infinite; }
#mercury-star-5 { position: absolute; left: 50px; top: 270px; animation: mercury-twinkling 1.5s infinite; }
#mercury-star-6 { position: absolute; left: 250px; top: -50px; animation: mercury-twinkling 4s infinite; }
#mercury-star-7 { position: absolute; left: 290px; top: 60px; animation: mercury-twinkling 2s infinite; }
`
}