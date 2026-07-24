export default {
  id: 'anim-pluto-rotation',
  name: 'Pluto Rotation',
  category: 'animations',
  tags: ['pluto', 'space', 'star', 'animated', 'css-only', 'rotate', 'twinkle', 'jpeg-bg', 'dwarf-planet'],
  author: 'adapted',
  html: `<div class="pluto-banner">
  <div id="pluto-star-1"><div class="pluto-corner-star"><div id="pluto-corner-bottomright"></div><div id="pluto-corner-bottomleft"></div></div><div class="pluto-corner-star"><div id="pluto-corner-topright"></div><div id="pluto-corner-topleft"></div></div></div>
  <div id="pluto-star-2"><div class="pluto-corner-star"><div id="pluto-corner-bottomright"></div><div id="pluto-corner-bottomleft"></div></div><div class="pluto-corner-star"><div id="pluto-corner-topright"></div><div id="pluto-corner-topleft"></div></div></div>
  <div id="pluto-star-3"><div class="pluto-corner-star"><div id="pluto-corner-bottomright"></div><div id="pluto-corner-bottomleft"></div></div><div class="pluto-corner-star"><div id="pluto-corner-topright"></div><div id="pluto-corner-topleft"></div></div></div>
  <div id="pluto-star-4"><div class="pluto-corner-star"><div id="pluto-corner-bottomright"></div><div id="pluto-corner-bottomleft"></div></div><div class="pluto-corner-star"><div id="pluto-corner-topright"></div><div id="pluto-corner-topleft"></div></div></div>
  <div id="pluto-star-5"><div class="pluto-corner-star"><div id="pluto-corner-bottomright"></div><div id="pluto-corner-bottomleft"></div></div><div class="pluto-corner-star"><div id="pluto-corner-topright"></div><div id="pluto-corner-topleft"></div></div></div>
  <div id="pluto-star-6"><div class="pluto-corner-star"><div id="pluto-corner-bottomright"></div><div id="pluto-corner-bottomleft"></div></div><div class="pluto-corner-star"><div id="pluto-corner-topright"></div><div id="pluto-corner-topleft"></div></div></div>
  <div id="pluto-star-7"><div class="pluto-corner-star"><div id="pluto-corner-bottomright"></div><div id="pluto-corner-bottomleft"></div></div><div class="pluto-corner-star"><div id="pluto-corner-topright"></div><div id="pluto-corner-topleft"></div></div></div>
</div>`,
  css: `
.pluto-banner {
  height: 220px; width: 220px; position: relative; border-radius: 50%;
  background: url("/images/pluto.jpg");
  background-size: 200% 100%; background-repeat: repeat-x; background-position: 0 0;
  animation: pluto-rotate 50s linear 0s infinite;
  box-shadow: 0px 0px 18px rgba(150, 130, 110, 0.15), -5px 0px 8px #d0c0a0 inset, 15px 2px 22px #5a4a3a inset, -24px -2px 30px #c0b09099 inset, 220px 0px 40px #2a1a0a66 inset, 130px 0px 34px #1a0a00aa inset;
}
@keyframes pluto-rotate { 0% { background-position: 0% 0; } 100% { background-position: -200% 0; } }
.pluto-corner-star { display: flex; position: relative; }
#pluto-corner-bottomleft, #pluto-corner-bottomright, #pluto-corner-topleft, #pluto-corner-topright { width: 4px; height: 5px; overflow: hidden; position: relative; }
#pluto-corner-bottomleft:before, #pluto-corner-bottomright:before, #pluto-corner-topleft:before, #pluto-corner-topright:before { content: ""; display: block; width: 200%; height: 200%; position: absolute; border-radius: 50%; }
#pluto-corner-bottomleft:before { bottom: 0; left: 0; box-shadow: -5px 5px 0 0 white; }
#pluto-corner-bottomright:before { bottom: 0; right: 0; box-shadow: 5px 5px 0 0 white; }
#pluto-corner-topleft:before { top: 0; left: 0; box-shadow: -5px -5px 0 0 white; }
#pluto-corner-topright:before { top: 0; right: 0; box-shadow: 5px -5px 0 0 white; }
@keyframes pluto-twinkling { 0%, 100% { opacity: 0.1; } 50% { opacity: 1; } }
#pluto-star-1 { position: absolute; left: -20px; animation: pluto-twinkling 3s infinite; }
#pluto-star-2 { position: absolute; left: -40px; top: 30px; animation: pluto-twinkling 2s infinite; }
#pluto-star-3 { position: absolute; left: 320px; top: 80px; animation: pluto-twinkling 4s infinite; }
#pluto-star-4 { position: absolute; left: 180px; top: 260px; animation: pluto-twinkling 3s infinite; }
#pluto-star-5 { position: absolute; left: 40px; top: 240px; animation: pluto-twinkling 1.5s infinite; }
#pluto-star-6 { position: absolute; left: 220px; top: -40px; animation: pluto-twinkling 4s infinite; }
#pluto-star-7 { position: absolute; left: 260px; top: 50px; animation: pluto-twinkling 2s infinite; }
`
}