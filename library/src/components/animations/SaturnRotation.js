export default {
  id: 'anim-saturn-rotation',
  name: 'Saturn Rotation',
  category: 'animations',
  tags: ['saturn', 'space', 'star', 'animated', 'css-only', 'rotate', 'twinkle', 'jpeg-bg', 'planet', 'rings', 'gas-giant'],
  author: 'adapted',
  html: `<div class="saturn-system">
  <div class="saturn-ring saturn-ring--1 saturn-ring--back"></div>
  <div class="saturn-ring saturn-ring--2 saturn-ring--back"></div>
  <div class="saturn-ring saturn-ring--3 saturn-ring--back"></div>
  <div class="saturn-ring saturn-ring--4 saturn-ring--back"></div>
  <div class="saturn-ring saturn-ring--5 saturn-ring--back"></div>
  <div class="saturn-banner"></div>
  <div class="saturn-ring saturn-ring--1 saturn-ring--front"></div>
  <div class="saturn-ring saturn-ring--2 saturn-ring--front"></div>
  <div class="saturn-ring saturn-ring--3 saturn-ring--front"></div>
  <div class="saturn-ring saturn-ring--4 saturn-ring--front"></div>
  <div class="saturn-ring saturn-ring--5 saturn-ring--front"></div>
  <div id="saturn-star-1"><div class="saturn-corner-star"><div id="saturn-corner-bottomright"></div><div id="saturn-corner-bottomleft"></div></div><div class="saturn-corner-star"><div id="saturn-corner-topright"></div><div id="saturn-corner-topleft"></div></div></div>
  <div id="saturn-star-2"><div class="saturn-corner-star"><div id="saturn-corner-bottomright"></div><div id="saturn-corner-bottomleft"></div></div><div class="saturn-corner-star"><div id="saturn-corner-topright"></div><div id="saturn-corner-topleft"></div></div></div>
  <div id="saturn-star-3"><div class="saturn-corner-star"><div id="saturn-corner-bottomright"></div><div id="saturn-corner-bottomleft"></div></div><div class="saturn-corner-star"><div id="saturn-corner-topright"></div><div id="saturn-corner-topleft"></div></div></div>
  <div id="saturn-star-4"><div class="saturn-corner-star"><div id="saturn-corner-bottomright"></div><div id="saturn-corner-bottomleft"></div></div><div class="saturn-corner-star"><div id="saturn-corner-topright"></div><div id="saturn-corner-topleft"></div></div></div>
  <div id="saturn-star-5"><div class="saturn-corner-star"><div id="saturn-corner-bottomright"></div><div id="saturn-corner-bottomleft"></div></div><div class="saturn-corner-star"><div id="saturn-corner-topright"></div><div id="saturn-corner-topleft"></div></div></div>
  <div id="saturn-star-6"><div class="saturn-corner-star"><div id="saturn-corner-bottomright"></div><div id="saturn-corner-bottomleft"></div></div><div class="saturn-corner-star"><div id="saturn-corner-topright"></div><div id="saturn-corner-topleft"></div></div></div>
  <div id="saturn-star-7"><div class="saturn-corner-star"><div id="saturn-corner-bottomright"></div><div id="saturn-corner-bottomleft"></div></div><div class="saturn-corner-star"><div id="saturn-corner-topright"></div><div id="saturn-corner-topleft"></div></div></div>
</div>`,
  css: `
.saturn-system { position: relative; width: 600px; height: 400px; display: flex; align-items: center; justify-content: center; }
.saturn-ring { position: absolute; top: 50%; left: 50%; border-radius: 50%; pointer-events: none; }
.saturn-ring--1 { width: 580px; height: 150px; margin-left: -290px; margin-top: -75px; border: 3px solid rgba(220, 200, 160, 0.25); }
.saturn-ring--2 { width: 540px; height: 135px; margin-left: -270px; margin-top: -67px; border: 14px solid rgba(230, 210, 170, 0.45); box-shadow: 0 0 20px rgba(230, 210, 170, 0.15); }
.saturn-ring--3 { width: 480px; height: 115px; margin-left: -240px; margin-top: -57px; border: 6px solid rgba(220, 200, 160, 0.35); }
.saturn-ring--4 { width: 440px; height: 100px; margin-left: -220px; margin-top: -50px; border: 4px solid rgba(210, 190, 150, 0.3); }
.saturn-ring--5 { width: 410px; height: 92px; margin-left: -205px; margin-top: -46px; border: 2px solid rgba(200, 180, 140, 0.2); }
.saturn-ring--back { z-index: 1; clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%); }
.saturn-ring--front { z-index: 3; clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%); }
.saturn-banner {
  height: 280px; width: 280px; position: relative; border-radius: 50%;
  background: url("/images/saturn.jpg");
  background-size: 200% 100%; background-repeat: repeat-x; background-position: 0 0;
  animation: saturn-rotate 18s linear 0s infinite;
  box-shadow: 0px 0px 40px rgba(230, 210, 170, 0.25), -5px 0px 8px #fff5e0 inset, 15px 2px 30px #8a7a4a inset, -24px -2px 40px #ffe8b099 inset, 280px 0px 50px #3a2a1a66 inset, 170px 0px 42px #2a1a0aaa inset;
  overflow: hidden; z-index: 2;
}
@keyframes saturn-rotate { 0% { background-position: 0% 0; } 100% { background-position: -200% 0; } }
.saturn-corner-star { display: flex; position: relative; }
#saturn-corner-bottomleft, #saturn-corner-bottomright, #saturn-corner-topleft, #saturn-corner-topright { width: 4px; height: 5px; overflow: hidden; position: relative; }
#saturn-corner-bottomleft:before, #saturn-corner-bottomright:before, #saturn-corner-topleft:before, #saturn-corner-topright:before { content: ""; display: block; width: 200%; height: 200%; position: absolute; border-radius: 50%; }
#saturn-corner-bottomleft:before { bottom: 0; left: 0; box-shadow: -5px 5px 0 0 white; }
#saturn-corner-bottomright:before { bottom: 0; right: 0; box-shadow: 5px 5px 0 0 white; }
#saturn-corner-topleft:before { top: 0; left: 0; box-shadow: -5px -5px 0 0 white; }
#saturn-corner-topright:before { top: 0; right: 0; box-shadow: 5px -5px 0 0 white; }
@keyframes saturn-twinkling { 0%, 100% { opacity: 0.1; } 50% { opacity: 1; } }
#saturn-star-1 { position: absolute; left: -20px; animation: saturn-twinkling 3s infinite; }
#saturn-star-2 { position: absolute; left: -40px; top: 30px; animation: saturn-twinkling 2s infinite; }
#saturn-star-3 { position: absolute; left: 350px; top: 90px; animation: saturn-twinkling 4s infinite; }
#saturn-star-4 { position: absolute; left: 200px; top: 290px; animation: saturn-twinkling 3s infinite; }
#saturn-star-5 { position: absolute; left: 50px; top: 270px; animation: saturn-twinkling 1.5s infinite; }
#saturn-star-6 { position: absolute; left: 250px; top: -50px; animation: saturn-twinkling 4s infinite; }
#saturn-star-7 { position: absolute; left: 290px; top: 60px; animation: saturn-twinkling 2s infinite; }
`
}