export default {
  id: 'loader-hourglass',
  name: 'Hourglass Loader',
  category: 'loaders',
  tags: ['loader', 'hourglass', 'sand', 'animated', 'css-only', 'time', 'waiting', 'spinner'],
  author: 'SouravBandyopadhyay',
  html: `<div class="hg-hourglassBackground">
  <div class="hg-hourglassContainer">
    <div class="hg-hourglassCurves"></div>
    <div class="hg-hourglassCapTop"></div>
    <div class="hg-hourglassGlassTop"></div>
    <div class="hg-hourglassSand"></div>
    <div class="hg-hourglassSandStream"></div>
    <div class="hg-hourglassCapBottom"></div>
    <div class="hg-hourglassGlass"></div>
  </div>
</div>`,
  css: `
.hg-hourglassBackground {
  position: relative;
  background-color: rgb(71, 60, 60);
  height: 130px;
  width: 130px;
  border-radius: 50%;
  margin: 30px auto;
}

.hg-hourglassContainer {
  position: absolute;
  top: 30px;
  left: 40px;
  width: 50px;
  height: 70px;
  -webkit-animation: hg-hourglass-rotate 2s ease-in 0s infinite;
  animation: hg-hourglass-rotate 2s ease-in 0s infinite;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.hg-hourglassContainer div,
.hg-hourglassContainer div:before,
.hg-hourglassContainer div:after {
  transform-style: preserve-3d;
}

@-webkit-keyframes hg-hourglass-rotate {
  0% {
    transform: rotateX(0deg);
  }

  50% {
    transform: rotateX(180deg);
  }

  100% {
    transform: rotateX(180deg);
  }
}

@keyframes hg-hourglass-rotate {
  0% {
    transform: rotateX(0deg);
  }

  50% {
    transform: rotateX(180deg);
  }

  100% {
    transform: rotateX(180deg);
  }
}

.hg-hourglassCapTop {
  top: 0;
}

.hg-hourglassCapTop:before {
  top: -25px;
}

.hg-hourglassCapTop:after {
  top: -20px;
}

.hg-hourglassCapBottom {
  bottom: 0;
}

.hg-hourglassCapBottom:before {
  bottom: -25px;
}

.hg-hourglassCapBottom:after {
  bottom: -20px;
}

.hg-hourglassGlassTop {
  transform: rotateX(90deg);
  position: absolute;
  top: -16px;
  left: 3px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: #999999;
}

.hg-hourglassGlass {
  perspective: 100px;
  position: absolute;
  top: 32px;
  left: 20px;
  width: 10px;
  height: 6px;
  background-color: #999999;
  opacity: 0.5;
}

.hg-hourglassGlass:before,
.hg-hourglassGlass:after {
  content: "";
  display: block;
  position: absolute;
  background-color: #999999;
  left: -17px;
  width: 44px;
  height: 28px;
}

.hg-hourglassGlass:before {
  top: -27px;
  border-radius: 0 0 25px 25px;
}

.hg-hourglassGlass:after {
  bottom: -27px;
  border-radius: 25px 25px 0 0;
}

.hg-hourglassCurves:before,
.hg-hourglassCurves:after {
  content: "";
  display: block;
  position: absolute;
  top: 32px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #333;
  animation: hg-hide-curves 2s ease-in 0s infinite;
}

.hg-hourglassCurves:before {
  left: 15px;
}

.hg-hourglassCurves:after {
  left: 29px;
}

@-webkit-keyframes hg-hide-curves {
  0% {
    opacity: 1;
  }

  25% {
    opacity: 0;
  }

  30% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

@keyframes hg-hide-curves {
  0% {
    opacity: 1;
  }

  25% {
    opacity: 0;
  }

  30% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

.hg-hourglassSandStream:before {
  content: "";
  display: block;
  position: absolute;
  left: 24px;
  width: 3px;
  background-color: white;
  -webkit-animation: hg-sand-stream-1 2s ease-in 0s infinite;
  animation: hg-sand-stream-1 2s ease-in 0s infinite;
}

.hg-hourglassSandStream:after {
  content: "";
  display: block;
  position: absolute;
  top: 36px;
  left: 19px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #fff;
  animation: hg-sand-stream-2 2s ease-in 0s infinite;
}

@-webkit-keyframes hg-sand-stream-1 {
  0% {
    height: 0;
    top: 35px;
  }

  50% {
    height: 0;
    top: 45px;
  }

  60% {
    height: 35px;
    top: 8px;
  }

  85% {
    height: 35px;
    top: 8px;
  }

  100% {
    height: 0;
    top: 8px;
  }
}

@keyframes hg-sand-stream-1 {
  0% {
    height: 0;
    top: 35px;
  }

  50% {
    height: 0;
    top: 45px;
  }

  60% {
    height: 35px;
    top: 8px;
  }

  85% {
    height: 35px;
    top: 8px;
  }

  100% {
    height: 0;
    top: 8px;
  }
}

@-webkit-keyframes hg-sand-stream-2 {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  51% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  91% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

@keyframes hg-sand-stream-2 {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  51% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  91% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
}

.hg-hourglassSand:before,
.hg-hourglassSand:after {
  content: "";
  display: block;
  position: absolute;
  left: 6px;
  background-color: white;
  perspective: 500px;
}

.hg-hourglassSand:before {
  top: 8px;
  width: 39px;
  border-radius: 3px 3px 30px 30px;
  animation: hg-sand-fillup 2s ease-in 0s infinite;
}

.hg-hourglassSand:after {
  border-radius: 30px 30px 3px 3px;
  animation: hg-sand-deplete 2s ease-in 0s infinite;
}

@-webkit-keyframes hg-sand-fillup {
  0% {
    opacity: 0;
    height: 0;
  }

  60% {
    opacity: 1;
    height: 0;
  }

  100% {
    opacity: 1;
    height: 17px;
  }
}

@keyframes hg-sand-fillup {
  0% {
    opacity: 0;
    height: 0;
  }

  60% {
    opacity: 1;
    height: 0;
  }

  100% {
    opacity: 1;
    height: 17px;
  }
}

@-webkit-keyframes hg-sand-deplete {
  0% {
    opacity: 0;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  1% {
    opacity: 1;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  24% {
    opacity: 1;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  25% {
    opacity: 1;
    top: 41px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  50% {
    opacity: 1;
    top: 41px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  90% {
    opacity: 1;
    top: 41px;
    height: 0;
    width: 10px;
    left: 20px;
  }
}

@keyframes hg-sand-deplete {
  0% {
    opacity: 0;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  1% {
    opacity: 1;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  24% {
    opacity: 1;
    top: 45px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  25% {
    opacity: 1;
    top: 41px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  50% {
    opacity: 1;
    top: 41px;
    height: 17px;
    width: 38px;
    left: 6px;
  }

  90% {
    opacity: 1;
    top: 41px;
    height: 0;
    width: 10px;
    left: 20px;
  }
}
`
}