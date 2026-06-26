export default {
  id: 'anim-sun-rotation',
  name: 'Sun Rotation',
  category: 'animations',
  tags: ['sun', 'space', 'star', 'animated', 'css-only', 'rotate', 'twinkle', 'glow', 'pulse'],
  author: 'reyrojo2',
  html: `<div class="sn-sun">
  <div id="sn-star-1">
    <div class="sn-corner-star">
      <div id="sn-corner-bottomright"></div>
      <div id="sn-corner-bottomleft"></div>
    </div>
    <div class="sn-corner-star">
      <div id="sn-corner-topright"></div>
      <div id="sn-corner-topleft"></div>
    </div>
  </div>

  <div id="sn-star-2">
    <div class="sn-corner-star">
      <div id="sn-corner-bottomright"></div>
      <div id="sn-corner-bottomleft"></div>
    </div>
    <div class="sn-corner-star">
      <div id="sn-corner-topright"></div>
      <div id="sn-corner-topleft"></div>
    </div>
  </div>

  <div id="sn-star-3">
    <div class="sn-corner-star">
      <div id="sn-corner-bottomright"></div>
      <div id="sn-corner-bottomleft"></div>
    </div>
    <div class="sn-corner-star">
      <div id="sn-corner-topright"></div>
      <div id="sn-corner-topleft"></div>
    </div>
  </div>

  <div id="sn-star-4">
    <div class="sn-corner-star">
      <div id="sn-corner-bottomright"></div>
      <div id="sn-corner-bottomleft"></div>
    </div>
    <div class="sn-corner-star">
      <div id="sn-corner-topright"></div>
      <div id="sn-corner-topleft"></div>
    </div>
  </div>

  <div id="sn-star-5">
    <div class="sn-corner-star">
      <div id="sn-corner-bottomright"></div>
      <div id="sn-corner-bottomleft"></div>
    </div>
    <div class="sn-corner-star">
      <div id="sn-corner-topright"></div>
      <div id="sn-corner-topleft"></div>
    </div>
  </div>

  <div id="sn-star-6">
    <div class="sn-corner-star">
      <div id="sn-corner-bottomright"></div>
      <div id="sn-corner-bottomleft"></div>
    </div>
    <div class="sn-corner-star">
      <div id="sn-corner-topright"></div>
      <div id="sn-corner-topleft"></div>
    </div>
  </div>

  <div id="sn-star-7">
    <div class="sn-corner-star">
      <div id="sn-corner-bottomright"></div>
      <div id="sn-corner-bottomleft"></div>
    </div>
    <div class="sn-corner-star">
      <div id="sn-corner-topright"></div>
      <div id="sn-corner-topleft"></div>
    </div>
  </div>
</div>`,
  css: `
.sn-sun {
  height: 300px;
  width: 300px;
  position: relative;
  transition: left 0.3s linear;
  background: url("/images/sol.jpg");
  background-size: auto 100%;
  background-repeat: repeat-x;
  background-position: 0 0;
  bottom: 0px;
  border-radius: 50%;
  animation:
    sn-rotate 30s linear 0s infinite,
    sn-pulse 5s ease-in-out infinite;
  box-shadow:
    0px 0px 40px 20px RGBA(255, 140, 0, 0.8),
    -5px 0px 10px 1px #ffb453 inset,
    15px 2px 40px 20px #bb6d01c5 inset,
    -24px -2px 50px 25px #ffa265c2 inset,
    150px 0px 80px 35px #c55f00aa inset;
}

@keyframes sn-rotate {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -600px 0;
  }
}

@keyframes sn-pulse {
  0%,
  100% {
    box-shadow:
      0px 0px 40px 20px RGBA(255, 140, 0, 0.8),
      -5px 0px 10px 1px #ffb453 inset,
      15px 2px 40px 20px #bb6d01c5 inset,
      -24px -2px 50px 25px #ffa265c2 inset,
      150px 0px 80px 35px #c55f00aa inset;
  }

  50% {
    box-shadow:
      0px 0px 60px 30px RGBA(255, 140, 0, 0.9),
      -5px 0px 20px 5px #ffb453 inset,
      15px 2px 60px 30px #bb6d01c5 inset,
      -24px -2px 70px 35px #ffa265c2 inset,
      150px 0px 100px 45px #c55f00aa inset;
  }
}

.sn-corner-star {
  display: flex;
  position: relative;
}

#sn-corner-bottomleft,
#sn-corner-bottomright,
#sn-corner-topleft,
#sn-corner-topright {
  width: 4px;
  height: 5px;
  overflow: hidden;
  position: relative;
}

#sn-corner-bottomleft:before,
#sn-corner-bottomright:before,
#sn-corner-topleft:before,
#sn-corner-topright:before {
  content: "";
  display: block;
  width: 200%;
  height: 200%;
  position: absolute;
  border-radius: 50%;
}

#sn-corner-bottomleft:before {
  bottom: 0;
  left: 0;
  box-shadow: -5px 5px 0 0 white;
}

#sn-corner-bottomright:before {
  bottom: 0;
  right: 0;
  box-shadow: 5px 5px 0 0 white;
}

#sn-corner-topleft:before {
  top: 0;
  left: 0;
  box-shadow: -5px -5px 0 0 white;
}

#sn-corner-topright:before {
  top: 0;
  right: 0;
  box-shadow: 5px -5px 0 0 white;
}

@keyframes sn-twinkling {
  0%,
  100% {
    opacity: 0.1;
  }

  50% {
    opacity: 1;
  }
}

#sn-star-1 {
  position: absolute;
  left: -20px;
  animation: sn-twinkling 3s infinite;
}
#sn-star-2 {
  position: absolute;
  left: -40px;
  top: 30px;
  animation: sn-twinkling 2s infinite;
}
#sn-star-3 {
  position: absolute;
  left: 350px;
  top: 90px;
  animation: sn-twinkling 4s infinite;
}
#sn-star-4 {
  position: absolute;
  left: 200px;
  top: 290px;
  animation: sn-twinkling 3s infinite;
}
#sn-star-5 {
  position: absolute;
  left: 50px;
  top: 270px;
  animation: sn-twinkling 1.5s infinite;
}
#sn-star-6 {
  position: absolute;
  left: 250px;
  top: -50px;
  animation: sn-twinkling 4s infinite;
}
#sn-star-7 {
  position: absolute;
  left: 290px;
  top: 60px;
  animation: sn-twinkling 2s infinite;
}
`
}