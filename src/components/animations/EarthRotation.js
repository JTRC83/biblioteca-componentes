export default {
  id: 'anim-earth-rotation',
  name: 'Earth Rotation',
  category: 'animations',
  tags: ['earth', 'space', 'star', 'animated', 'css-only', 'rotate', 'twinkle', 'jpeg-bg'],
  author: 'Lakshay-art',
  html: `<div class="earth-banner">
  <div id="earth-star-1">
    <div class="earth-corner-star">
      <div id="earth-corner-bottomright"></div>
      <div id="earth-corner-bottomleft"></div>
    </div>
    <div class="earth-corner-star">
      <div id="earth-corner-topright"></div>
      <div id="earth-corner-topleft"></div>
    </div>
  </div>

  <div id="earth-star-2">
    <div class="earth-corner-star">
      <div id="earth-corner-bottomright"></div>
      <div id="earth-corner-bottomleft"></div>
    </div>
    <div class="earth-corner-star">
      <div id="earth-corner-topright"></div>
      <div id="earth-corner-topleft"></div>
    </div>
  </div>

  <div id="earth-star-3">
    <div class="earth-corner-star">
      <div id="earth-corner-bottomright"></div>
      <div id="earth-corner-bottomleft"></div>
    </div>
    <div class="earth-corner-star">
      <div id="earth-corner-topright"></div>
      <div id="earth-corner-topleft"></div>
    </div>
  </div>

  <div id="earth-star-4">
    <div class="earth-corner-star">
      <div id="earth-corner-bottomright"></div>
      <div id="earth-corner-bottomleft"></div>
    </div>
    <div class="earth-corner-star">
      <div id="earth-corner-topright"></div>
      <div id="earth-corner-topleft"></div>
    </div>
  </div>

  <div id="earth-star-5">
    <div class="earth-corner-star">
      <div id="earth-corner-bottomright"></div>
      <div id="earth-corner-bottomleft"></div>
    </div>
    <div class="earth-corner-star">
      <div id="earth-corner-topright"></div>
      <div id="earth-corner-topleft"></div>
    </div>
  </div>

  <div id="earth-star-6">
    <div class="earth-corner-star">
      <div id="earth-corner-bottomright"></div>
      <div id="earth-corner-bottomleft"></div>
    </div>
    <div class="earth-corner-star">
      <div id="earth-corner-topright"></div>
      <div id="earth-corner-topleft"></div>
    </div>
  </div>

  <div id="earth-star-7">
    <div class="earth-corner-star">
      <div id="earth-corner-bottomright"></div>
      <div id="earth-corner-bottomleft"></div>
    </div>
    <div class="earth-corner-star">
      <div id="earth-corner-topright"></div>
      <div id="earth-corner-topleft"></div>
    </div>
  </div>
</div>`,
  css: `
.earth-banner {
  height: 250px;
  width: 250px;
  position: relative;
  transition: left 0.3s linear;
  background: url("/images/tierra.jpg");
  background-size: auto 100%;
  background-repeat: repeat-x;
  background-position: 0 0;
  bottom: 0px;
  border-radius: 50%;
  animation: earth-rotate 30s linear 0s infinite;
  box-shadow: 0px 0 20px RGBA(255, 255, 255, 0.2), -5px 0px 8px #c3f4ff inset,
    15px 2px 25px #000 inset, -24px -2px 34px #c3f4ff99 inset,
    250px 0px 44px #00000066 inset, 150px 0px 38px #000000aa inset;
}
@keyframes earth-rotate {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -500px 0;
  }
}
  100% {
    background-position: 400px 0;
  }
}

.earth-corner-star {
  display: flex;
  position: relative;
}

#earth-corner-bottomleft,
#earth-corner-bottomright,
#earth-corner-topleft,
#earth-corner-topright {
  width: 4px;
  height: 5px;
  overflow: hidden;
  position: relative;
}

#earth-corner-bottomleft:before,
#earth-corner-bottomright:before,
#earth-corner-topleft:before,
#earth-corner-topright:before {
  content: "";
  display: block;
  width: 200%;
  height: 200%;
  position: absolute;
  border-radius: 50%;
}

#earth-corner-bottomleft:before {
  bottom: 0;
  left: 0;
  box-shadow: -5px 5px 0 0 white;
}

#earth-corner-bottomright:before {
  bottom: 0;
  right: 0;
  box-shadow: 5px 5px 0 0 white;
}

#earth-corner-topleft:before {
  top: 0;
  left: 0;
  box-shadow: -5px -5px 0 0 white;
}

#earth-corner-topright:before {
  top: 0;
  right: 0;
  box-shadow: 5px -5px 0 0 white;
}

@keyframes earth-twinkling {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
}

#earth-star-1 {
  position: absolute;
  left: -20px;
  animation: earth-twinkling 3s infinite;
}

#earth-star-2 {
  position: absolute;
  left: -40px;
  top: 30px;
  animation: earth-twinkling 2s infinite;
}
#earth-star-3 {
  position: absolute;
  left: 350px;
  top: 90px;
  animation: earth-twinkling 4s infinite;
}
#earth-star-4 {
  position: absolute;
  left: 200px;
  top: 290px;
  animation: earth-twinkling 3s infinite;
}
#earth-star-5 {
  position: absolute;
  left: 50px;
  top: 270px;
  animation: earth-twinkling 1.5s infinite;
}

#earth-star-6 {
  position: absolute;
  left: 250px;
  top: -50px;
  animation: earth-twinkling 4s infinite;
}
#earth-star-7 {
  position: absolute;
  left: 290px;
  top: 60px;
  animation: earth-twinkling 2s infinite;
}
`
}
