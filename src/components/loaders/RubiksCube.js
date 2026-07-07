export default {
  id: 'loader-rubiks-cube',
  name: "Rubik's Cube Loader",
  category: 'loaders',
  tags: ['loader', 'rubik', 'cube', '3d', 'animated', 'css-only', 'puzzle', 'colorful'],
  author: 'lukepadiachy',
  html: `<div class="rk-my-loader">
  <div class="rk-rubiks-cube">
    <div class="rk-face rk-front">
      <div style="background: #ff3d00;" class="rk-mini"></div>
      <div style="background: #ffeb3b;" class="rk-mini"></div>
      <div style="background: #4caf50;" class="rk-mini"></div>
      <div style="background: #2196f3;" class="rk-mini"></div>
      <div style="background: #ffffff;" class="rk-mini"></div>
      <div style="background: #ffeb3b;" class="rk-mini"></div>
      <div style="background: #4caf50;" class="rk-mini"></div>
      <div style="background: #2196f3;" class="rk-mini"></div>
      <div style="background: #ff3d00;" class="rk-mini"></div>
    </div>

    <div class="rk-face rk-back">
      <div style="background: #4caf50;" class="rk-mini"></div>
      <div style="background: #ff3d00;" class="rk-mini"></div>
      <div style="background: #ffeb3b;" class="rk-mini"></div>
      <div style="background: #2196f3;" class="rk-mini"></div>
      <div style="background: #ffffff;" class="rk-mini"></div>
      <div style="background: #ff3d00;" class="rk-mini"></div>
      <div style="background: #ffeb3b;" class="rk-mini"></div>
      <div style="background: #4caf50;" class="rk-mini"></div>
      <div style="background: #2196f3;" class="rk-mini"></div>
    </div>
    <div class="rk-face rk-left">
      <div style="background: #ffeb3b;" class="rk-mini"></div>
      <div style="background: #4caf50;" class="rk-mini"></div>
      <div style="background: #2196f3;" class="rk-mini"></div>
      <div style="background: #ff3d00;" class="rk-mini"></div>
      <div style="background: #ffffff;" class="rk-mini"></div>
      <div style="background: #4caf50;" class="rk-mini"></div>
      <div style="background: #2196f3;" class="rk-mini"></div>
      <div style="background: #ffeb3b;" class="rk-mini"></div>
      <div style="background: #ff3d00;" class="rk-mini"></div>
    </div>
    <div class="rk-face rk-right">
      <div style="background: #4caf50;" class="rk-mini"></div>
      <div style="background: #ff3d00;" class="rk-mini"></div>
      <div style="background: #ffeb3b;" class="rk-mini"></div>
      <div style="background: #2196f3;" class="rk-mini"></div>
      <div style="background: #ffffff;" class="rk-mini"></div>
      <div style="background: #ff3d00;" class="rk-mini"></div>
      <div style="background: #ffeb3b;" class="rk-mini"></div>
      <div style="background: #4caf50;" class="rk-mini"></div>
      <div style="background: #2196f3;" class="rk-mini"></div>
    </div>
    <div class="rk-face rk-top">
      <div style="background: #2196f3;" class="rk-mini"></div>
      <div style="background: #ffeb3b;" class="rk-mini"></div>
      <div style="background: #ff3d00;" class="rk-mini"></div>
      <div style="background: #4caf50;" class="rk-mini"></div>
      <div style="background: #ffffff;" class="rk-mini"></div>
      <div style="background: #ffeb3b;" class="rk-mini"></div>
      <div style="background: #ff3d00;" class="rk-mini"></div>
      <div style="background: #4caf50;" class="rk-mini"></div>
      <div style="background: #2196f3;" class="rk-mini"></div>
    </div>
    <div class="rk-face rk-bottom">
      <div style="background: #ffffff;" class="rk-mini"></div>
      <div style="background: #4caf50;" class="rk-mini"></div>
      <div style="background: #2196f3;" class="rk-mini"></div>
      <div style="background: #ff3d00;" class="rk-mini"></div>
      <div style="background: #ffeb3b;" class="rk-mini"></div>
      <div style="background: #4caf50;" class="rk-mini"></div>
      <div style="background: #2196f3;" class="rk-mini"></div>
      <div style="background: #ffffff;" class="rk-mini"></div>
      <div style="background: #ff3d00;" class="rk-mini"></div>
    </div>
  </div>
</div>`,
  css: `
.rk-my-loader {
  width: 200px;
  height: 200px;
  perspective: 1000px;
  margin: 100px auto;
}

.rk-rubiks-cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rk-rotate-cube 5s infinite linear;
}

.rk-my-loader .rk-face {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

.rk-my-loader .rk-face.rk-front {
  transform: translateZ(100px);
}
.rk-my-loader .rk-face.rk-back {
  transform: rotateY(180deg) translateZ(100px);
}
.rk-my-loader .rk-face.rk-left {
  transform: rotateY(-90deg) translateZ(100px);
}
.rk-my-loader .rk-face.rk-right {
  transform: rotateY(90deg) translateZ(100px);
}
.rk-my-loader .rk-face.rk-top {
  transform: rotateX(90deg) translateZ(100px);
}
.rk-my-loader .rk-face.rk-bottom {
  transform: rotateX(-90deg) translateZ(100px);
}

.rk-my-loader .rk-mini {
  width: calc(100% / 3);
  height: calc(100% / 3);
  box-sizing: border-box;
  border: 1px solid #000;
}

@keyframes rk-rotate-cube {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
`
}