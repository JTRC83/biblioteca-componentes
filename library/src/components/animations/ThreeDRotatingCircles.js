export default {
  id: 'anim-3d-rotating-circles',
  name: '3D Rotating Circles',
  category: 'animations',
  tags: ['3d', 'circles', 'rotating', 'animated', 'css-only', 'orbit', 'concentric', 'geometric'],
  author: 'elijahgummer',
  html: `<div class="tdr-main-wrap">
  <div class="tdr-wrapper">
    <div class="tdr-c1">
      <div class="tdr-c2">
        <div class="tdr-c3">
          <div class="tdr-rect1">
            <div class="tdr-miniC"></div>
            <div class="tdr-c4">
              <div class="tdr-rect2"><div class="tdr-rect3"></div></div>
            </div>
            <div class="tdr-c5"></div>
            <div class="tdr-c6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  css: `
.tdr-main-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 1000px;
}

.tdr-main-wrap div {
  transform-origin: center center;
}

.tdr-wrapper {
  position: relative;
}

.tdr-c1 {
  border-radius: 100%;
  height: 200px;
  width: 200px;
  border: 1px solid #e7b439;
  animation:
    tdr-rot-first 30s linear infinite,
    tdr-fade-in 2s forwards;
  transform: rotateX(10deg) rotateY(10deg);
  transform-style: preserve-3d;
}

.tdr-c1 .tdr-c2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
  border-radius: 100%;
  height: 190px;
  width: 190px;
  border: 1px solid #ffb61e;
  border-style: dashed;
}

.tdr-c1 .tdr-c2 .tdr-c3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
  border: 1px solid #ffb61e;
  height: 180px;
  width: 180px;
  border-radius: 100%;
  animation: tdr-change-color 30s linear infinite;
}

.tdr-c1 .tdr-c2 .tdr-c3 .tdr-rect1 {
  border: 1px solid #ffb61e;
  border-style: dotted;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
  height: 120px;
  width: 120px;
}

.tdr-c1 .tdr-c2 .tdr-c3 .tdr-rect1 .tdr-miniC {
  text-align: center;
  height: 120px;
  width: 120px;
  position: relative;
}

.tdr-c1 .tdr-c2 .tdr-c3 .tdr-rect1 .tdr-miniC .tdr-box {
  height: 10px;
  width: 10px;
  border: 1px solid #ffb61e;
  border-radius: 100%;
  margin: 4px;
}

.tdr-c1 .tdr-c2 .tdr-c3 .tdr-rect1 .tdr-miniC .tdr-miniC1 {
  position: absolute;
  top: -12%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
  height: 20px;
  width: 20px;
  border: 3px solid #ffb61e;
  border-radius: 100%;
  animation: tdr-change-color 30s linear infinite;
}

.tdr-c1 .tdr-c2 .tdr-c3 .tdr-rect1 .tdr-miniC .tdr-miniC2 {
  position: absolute;
  top: 50%;
  left: -12%;
  transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
  height: 20px;
  width: 20px;
  border: 3px solid #ffb61e;
  border-radius: 100%;
  animation: tdr-change-color 30s linear infinite;
}

.tdr-c1 .tdr-c2 .tdr-c3 .tdr-rect1 .tdr-miniC .tdr-miniC3 {
  position: absolute;
  top: 50%;
  left: 112%;
  transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
  height: 20px;
  width: 20px;
  border: 3px solid #ffb61e;
  border-radius: 100%;
  animation: tdr-change-color 30s linear infinite;
}

.tdr-c1 .tdr-c2 .tdr-c3 .tdr-rect1 .tdr-miniC .tdr-miniC4 {
  position: absolute;
  top: 112%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
  height: 20px;
  width: 20px;
  border: 3px solid #ffb61e;
  border-radius: 100%;
  animation: tdr-change-color 30s linear infinite;
}

.tdr-c1 .tdr-c2 .tdr-c3 .tdr-rect1 .tdr-c4 {
  border: 1px solid #ffb61e;
  height: 120px;
  width: 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
  border-radius: 100%;
  border-style: dotted;
  animation: tdr-change-color 30s linear infinite;
}

.tdr-c1 .tdr-c2 .tdr-c3 .tdr-rect1 .tdr-c4 .tdr-rect2 {
  border: 1px solid #ffb61e;
  height: 80px;
  width: 80px;
  margin: 20px auto 0px auto;
  animation: tdr-rot-mini-c 10s linear infinite;
}

.tdr-c1 .tdr-c2 .tdr-c3 .tdr-rect1 .tdr-c4 .tdr-rect3 {
  border: 1px solid #ffb61e;
  height: 80px;
  width: 80px;
  transform: rotate(135deg);
  transform-origin: center center;
}

.tdr-c1 .tdr-c2 .tdr-c3 .tdr-rect1 .tdr-c5 {
  border: 1px solid #ffb61e;
  height: 70px;
  width: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
  border-radius: 100%;
  animation: tdr-change-color 30s linear infinite;
}

.tdr-c1 .tdr-c2 .tdr-c3 .tdr-rect1 .tdr-c6 {
  border: 3px solid #ffb61e;
  height: 50px;
  width: 50px;
  animation: tdr-change-color 30s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
  border-radius: 100%;
}

.tdr-c1:hover,
.tdr-c1 .tdr-c2:hover,
.tdr-c1 .tdr-c2 .tdr-c3:hover {
  box-shadow: 0 0 20px #efb61e;
  cursor: pointer;
  transition:
    transform 0.5s ease-in-out,
    box-shadow 0.5s ease-in-out;
}

@keyframes tdr-rot-first {
  0% {
    transform: rotate(-360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes tdr-rot-mini-c {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes tdr-change-color {
  0% {
    box-shadow: 0px 0px 70px #fa9542;
    border: 3px solid #fa9642;
  }
}

@keyframes tdr-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`
}