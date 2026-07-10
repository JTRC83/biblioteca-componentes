export default {
  id: 'loader-3d-boxes-loader',
  name: '3D Boxes Loader',
  category: 'loaders',
  tags: ['loader', '3d', 'boxes', 'isometric', 'animated', 'css-only', 'rotate3d', 'perspective', 'cubes'],
  author: 'InfinityLoopGames',
  html: `<div class="bx-loader">
  <div class="bx-box bx-box0">
    <div></div>
  </div>
  <div class="bx-box bx-box1">
    <div></div>
  </div>
  <div class="bx-box bx-box2">
    <div></div>
  </div>
  <div class="bx-box bx-box3">
    <div></div>
  </div>
  <div class="bx-box bx-box4">
    <div></div>
  </div>
  <div class="bx-box bx-box5">
    <div></div>
  </div>
  <div class="bx-box bx-box6">
    <div></div>
  </div>
  <div class="bx-box bx-box7">
    <div></div>
  </div>
  <div class="bx-ground">
    <div></div>
  </div>
</div>`,
  css: `
.bx-loader {
  --bx-duration: 3s;
  --bx-primary: rgb(56, 56, 56);
  --bx-primary-light: #5c5c5c;
  --bx-primary-rgba: rgba(39, 94, 254, 0);
  width: 200px;
  height: 320px;
  position: relative;
  transform-style: preserve-3d;
}

@media (max-width: 480px) {
  .bx-loader {
    zoom: 0.44;
  }
}

.bx-loader:before, .bx-loader:after {
  --bx-r: 20.5deg;
  content: "";
  width: 320px;
  height: 140px;
  position: absolute;
  right: 32%;
  bottom: -11px;
  background: transparent;
  transform: translateZ(200px) rotate(var(--bx-r));
  -webkit-animation: bx-mask var(--bx-duration) linear forwards infinite;
  animation: bx-mask var(--bx-duration) linear forwards infinite;
}

.bx-loader:after {
  --bx-r: -20.5deg;
  right: auto;
  left: 32%;
}

.bx-loader .bx-ground {
  position: absolute;
  left: -50px;
  bottom: -120px;
  transform-style: preserve-3d;
  transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
}

.bx-loader .bx-ground div {
  transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
  width: 200px;
  height: 200px;
  background: var(--bx-primary);
  background: linear-gradient(45deg, var(--bx-primary) 0%, var(--bx-primary) 50%, var(--bx-primary-light) 50%, var(--bx-primary-light) 100%);
  transform-style: preserve-3d;
  -webkit-animation: bx-ground var(--bx-duration) linear forwards infinite;
  animation: bx-ground var(--bx-duration) linear forwards infinite;
}

.bx-loader .bx-ground div:before, .bx-loader .bx-ground div:after {
  --bx-rx: 90deg;
  --bx-ry: 0deg;
  --bx-x: 44px;
  --bx-y: 162px;
  --bx-z: -50px;
  content: "";
  width: 156px;
  height: 300px;
  opacity: 0;
  background: linear-gradient(var(--bx-primary), var(--bx-primary-rgba));
  position: absolute;
  transform: rotateX(var(--bx-rx)) rotateY(var(--bx-ry)) translate(var(--bx-x), var(--bx-y)) translateZ(var(--bx-z));
  -webkit-animation: bx-ground-shine var(--bx-duration) linear forwards infinite;
  animation: bx-ground-shine var(--bx-duration) linear forwards infinite;
}

.bx-loader .bx-ground div:after {
  --bx-rx: 90deg;
  --bx-ry: 90deg;
  --bx-x: 0;
  --bx-y: 177px;
  --bx-z: 150px;
}

.bx-loader .bx-box {
  --bx-x: 0;
  --bx-y: 0;
  position: absolute;
  -webkit-animation: var(--bx-duration) linear forwards infinite;
  animation: var(--bx-duration) linear forwards infinite;
  transform: translate(var(--bx-x), var(--bx-y));
}

.bx-loader .bx-box div {
  background-color: var(--bx-primary);
  width: 48px;
  height: 48px;
  position: relative;
  transform-style: preserve-3d;
  -webkit-animation: var(--bx-duration) ease forwards infinite;
  animation: var(--bx-duration) ease forwards infinite;
  transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
}

.bx-loader .bx-box div:before, .bx-loader .bx-box div:after {
  --bx-rx: 90deg;
  --bx-ry: 0deg;
  --bx-z: 24px;
  --bx-y: -24px;
  --bx-x: 0;
  content: "";
  position: absolute;
  background-color: inherit;
  width: inherit;
  height: inherit;
  transform: rotateX(var(--bx-rx)) rotateY(var(--bx-ry)) translate(var(--bx-x), var(--bx-y)) translateZ(var(--bx-z));
  filter: brightness(var(--bx-b, 1.2));
}

.bx-loader .bx-box div:after {
  --bx-rx: 0deg;
  --bx-ry: 90deg;
  --bx-x: 24px;
  --bx-y: 0;
  --bx-b: 1.4;
}

.bx-loader .bx-box.bx-box0 {
  --bx-x: -220px;
  --bx-y: -120px;
  left: 58px;
  top: 108px;
}

.bx-loader .bx-box.bx-box1 {
  --bx-x: -260px;
  --bx-y: 120px;
  left: 25px;
  top: 120px;
}

.bx-loader .bx-box.bx-box2 {
  --bx-x: 120px;
  --bx-y: -190px;
  left: 58px;
  top: 64px;
}

.bx-loader .bx-box.bx-box3 {
  --bx-x: 280px;
  --bx-y: -40px;
  left: 91px;
  top: 120px;
}

.bx-loader .bx-box.bx-box4 {
  --bx-x: 60px;
  --bx-y: 200px;
  left: 58px;
  top: 132px;
}

.bx-loader .bx-box.bx-box5 {
  --bx-x: -220px;
  --bx-y: -120px;
  left: 25px;
  top: 76px;
}

.bx-loader .bx-box.bx-box6 {
  --bx-x: -260px;
  --bx-y: 120px;
  left: 91px;
  top: 76px;
}

.bx-loader .bx-box.bx-box7 {
  --bx-x: -240px;
  --bx-y: 200px;
  left: 58px;
  top: 87px;
}

.bx-loader .bx-box0 {
  -webkit-animation-name: bx-box-move0;
  animation-name: bx-box-move0;
}

.bx-loader .bx-box0 div {
  -webkit-animation-name: bx-box-scale0;
  animation-name: bx-box-scale0;
}

.bx-loader .bx-box1 {
  -webkit-animation-name: bx-box-move1;
  animation-name: bx-box-move1;
}

.bx-loader .bx-box1 div {
  -webkit-animation-name: bx-box-scale1;
  animation-name: bx-box-scale1;
}

.bx-loader .bx-box2 {
  -webkit-animation-name: bx-box-move2;
  animation-name: bx-box-move2;
}

.bx-loader .bx-box2 div {
  -webkit-animation-name: bx-box-scale2;
  animation-name: bx-box-scale2;
}

.bx-loader .bx-box3 {
  -webkit-animation-name: bx-box-move3;
  animation-name: bx-box-move3;
}

.bx-loader .bx-box3 div {
  -webkit-animation-name: bx-box-scale3;
  animation-name: bx-box-scale3;
}

.bx-loader .bx-box4 {
  -webkit-animation-name: bx-box-move4;
  animation-name: bx-box-move4;
}

.bx-loader .bx-box4 div {
  -webkit-animation-name: bx-box-scale4;
  animation-name: bx-box-scale4;
}

.bx-loader .bx-box5 {
  -webkit-animation-name: bx-box-move5;
  animation-name: bx-box-move5;
}

.bx-loader .bx-box5 div {
  -webkit-animation-name: bx-box-scale5;
  animation-name: bx-box-scale5;
}

.bx-loader .bx-box6 {
  -webkit-animation-name: bx-box-move6;
  animation-name: bx-box-move6;
}

.bx-loader .bx-box6 div {
  -webkit-animation-name: bx-box-scale6;
  animation-name: bx-box-scale6;
}

.bx-loader .bx-box7 {
  -webkit-animation-name: bx-box-move7;
  animation-name: bx-box-move7;
}

.bx-loader .bx-box7 div {
  -webkit-animation-name: bx-box-scale7;
  animation-name: bx-box-scale7;
}

@-webkit-keyframes bx-box-move0 {
  12% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  25%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes bx-box-move0 {
  12% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  25%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes bx-box-scale0 {
  6% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  14%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes bx-box-scale0 {
  6% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  14%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes bx-box-move1 {
  16% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  29%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes bx-box-move1 {
  16% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  29%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes bx-box-scale1 {
  10% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  18%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes bx-box-scale1 {
  10% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  18%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes bx-box-move2 {
  20% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  33%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes bx-box-move2 {
  20% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  33%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes bx-box-scale2 {
  14% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  22%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes bx-box-scale2 {
  14% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  22%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes bx-box-move3 {
  24% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  37%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes bx-box-move3 {
  24% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  37%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes bx-box-scale3 {
  18% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  26%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes bx-box-scale3 {
  18% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  26%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes bx-box-move4 {
  28% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  41%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes bx-box-move4 {
  28% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  41%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes bx-box-scale4 {
  22% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  30%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes bx-box-scale4 {
  22% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  30%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes bx-box-move5 {
  32% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  45%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes bx-box-move5 {
  32% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  45%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes bx-box-scale5 {
  26% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  34%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes bx-box-scale5 {
  26% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  34%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes bx-box-move6 {
  36% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  49%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes bx-box-move6 {
  36% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  49%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes bx-box-scale6 {
  30% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  38%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes bx-box-scale6 {
  30% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  38%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes bx-box-move7 {
  40% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  53%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes bx-box-move7 {
  40% {
    transform: translate(var(--bx-x), var(--bx-y));
  }

  53%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes bx-box-scale7 {
  34% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  42%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes bx-box-scale7 {
  34% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  42%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes bx-ground {
  0%, 65% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
  }

  75%, 90% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(1);
  }

  100% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
  }
}

@keyframes bx-ground {
  0%, 65% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
  }

  75%, 90% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(1);
  }

  100% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
  }
}

@-webkit-keyframes bx-ground-shine {
  0%, 70% {
    opacity: 0;
  }

  75%, 87% {
    opacity: 0.2;
  }

  100% {
    opacity: 0;
  }
}

@keyframes bx-ground-shine {
  0%, 70% {
    opacity: 0;
  }

  75%, 87% {
    opacity: 0.2;
  }

  100% {
    opacity: 0;
  }
}

@-webkit-keyframes bx-mask {
  0%, 65% {
    opacity: 0;
  }

  66%, 100% {
    opacity: 1;
  }
}

@keyframes bx-mask {
  0%, 65% {
    opacity: 0;
  }

  66%, 100% {
    opacity: 1;
  }
}
`
}