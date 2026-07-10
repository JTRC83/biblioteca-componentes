export default {
  id: 'loader-ghost',
  name: 'Ghost Loader',
  category: 'loaders',
  tags: ['loader', 'ghost', 'pacman', 'animated', 'css-only', 'pixel', '8bit', 'flicker'],
  author: 'BlackisPlay',
  html: `<div id="gh-ghost">
  <div id="gh-red">
    <div id="gh-pupil"></div>
    <div id="gh-pupil1"></div>
    <div id="gh-eye"></div>
    <div id="gh-eye1"></div>
    <div id="gh-top0"></div>
    <div id="gh-top1"></div>
    <div id="gh-top2"></div>
    <div id="gh-top3"></div>
    <div id="gh-top4"></div>
    <div id="gh-st0"></div>
    <div id="gh-st1"></div>
    <div id="gh-st2"></div>
    <div id="gh-st3"></div>
    <div id="gh-st4"></div>
    <div id="gh-st5"></div>
    <div id="gh-an1"></div>
    <div id="gh-an2"></div>
    <div id="gh-an3"></div>
    <div id="gh-an4"></div>
    <div id="gh-an5"></div>
    <div id="gh-an6"></div>
    <div id="gh-an7"></div>
    <div id="gh-an8"></div>
    <div id="gh-an9"></div>
    <div id="gh-an10"></div>
    <div id="gh-an11"></div>
    <div id="gh-an12"></div>
    <div id="gh-an13"></div>
    <div id="gh-an14"></div>
    <div id="gh-an15"></div>
    <div id="gh-an16"></div>
    <div id="gh-an17"></div>
    <div id="gh-an18"></div>
  </div>
  <div id="gh-shadow"></div>
</div>`,
  css: `
#gh-ghost {
  position: relative;
  scale: 0.8;
}

#gh-red {
  animation: gh-up-down infinite 0.5s;
  position: relative;
  width: 140px;
  height: 140px;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(14, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

@keyframes gh-up-down {
  0%,
  49% {
    transform: translateY(0px);
  }
  50%,
  100% {
    transform: translateY(-10px);
  }
}

#gh-top0,
#gh-top1,
#gh-top2,
#gh-top3,
#gh-top4,
#gh-st0,
#gh-st1,
#gh-st2,
#gh-st3,
#gh-st4,
#gh-st5 {
  background-color: red;
}

#gh-top0 { grid-row: 1; grid-column: 6 / span 4; }
#gh-top1 { grid-row: 2; grid-column: 4 / span 8; }
#gh-top2 { grid-row: 3; grid-column: 3 / span 12; }
#gh-top3 { grid-row: 4 / span 3; grid-column: 2 / span 12; }
#gh-top4 { grid-row: 7 / span 7; grid-column: 1 / span 14; }
#gh-st0 { grid-row: 13; grid-column: 1 / span 2; }
#gh-st1 { grid-row: 13; grid-column: 4 / span 2; }
#gh-st2 { grid-row: 13; grid-column: 7 / span 2; }
#gh-st3 { grid-row: 13; grid-column: 11 / span 2; }
#gh-st4 { grid-row: 13; grid-column: 13 / span 2; }
#gh-st5 { grid-row: 13; grid-column: 14 / span 1; }

#gh-an1 { grid-row: 14; grid-column: 1; animation: gh-flicker-0 infinite 0.5s; }
#gh-an2 { grid-row: 14; grid-column: 2; animation: gh-flicker-1 infinite 0.5s; }
#gh-an3 { grid-row: 14; grid-column: 3; animation: gh-flicker-1 infinite 0.5s; }
#gh-an4 { grid-row: 13; grid-column: 3; animation: gh-flicker-1 infinite 0.5s; }
#gh-an5 { grid-row: 14; grid-column: 4; animation: gh-flicker-0 infinite 0.5s; }
#gh-an6 { grid-row: 14; grid-column: 5; animation: gh-flicker-0 infinite 0.5s; }
#gh-an7 { grid-row: 13; grid-column: 5; animation: gh-flicker-0 infinite 0.5s; }
#gh-an8 { grid-row: 14; grid-column: 6; animation: gh-flicker-1 infinite 0.5s; }
#gh-an9 { grid-row: 14; grid-column: 7 / span 2; animation: gh-flicker-1 infinite 0.5s; }
#gh-an10 { grid-row: 13; grid-column: 7 / span 2; animation: gh-flicker-1 infinite 0.5s; }
#gh-an11 { grid-row: 14; grid-column: 9; animation: gh-flicker-0 infinite 0.5s; }
#gh-an12 { grid-row: 14; grid-column: 10; animation: gh-flicker-0 infinite 0.5s; }
#gh-an13 { grid-row: 13; grid-column: 10; animation: gh-flicker-0 infinite 0.5s; }
#gh-an14 { grid-row: 14; grid-column: 11; animation: gh-flicker-1 infinite 0.5s; }
#gh-an15 { grid-row: 14; grid-column: 12; animation: gh-flicker-1 infinite 0.5s; }
#gh-an16 { grid-row: 13; grid-column: 12; animation: gh-flicker-1 infinite 0.5s; }
#gh-an17 { grid-row: 14; grid-column: 13; animation: gh-flicker-0 infinite 0.5s; }
#gh-an18 { grid-row: 14; grid-column: 14; animation: gh-flicker-0 infinite 0.5s; }

@keyframes gh-flicker-0 {
  0%,
  49% {
    background-color: red;
  }
  50%,
  100% {
    background-color: transparent;
  }
}

@keyframes gh-flicker-1 {
  0%,
  49% {
    background-color: transparent;
  }
  50%,
  100% {
    background-color: red;
  }
}

#gh-eye {
  width: 40px;
  height: 50px;
  position: absolute;
  top: 30px;
  left: 10px;
}

#gh-eye::before {
  content: "";
  background-color: white;
  width: 20px;
  height: 50px;
  transform: translateX(10px);
  display: block;
  position: absolute;
}

#gh-eye::after {
  content: "";
  background-color: white;
  width: 40px;
  height: 30px;
  transform: translateY(10px);
  display: block;
  position: absolute;
}

#gh-eye1 {
  width: 40px;
  height: 50px;
  position: absolute;
  top: 30px;
  right: 30px;
}

#gh-eye1::before {
  content: "";
  background-color: white;
  width: 20px;
  height: 50px;
  transform: translateX(10px);
  display: block;
  position: absolute;
}

#gh-eye1::after {
  content: "";
  background-color: white;
  width: 40px;
  height: 30px;
  transform: translateY(10px);
  display: block;
  position: absolute;
}

#gh-pupil {
  width: 20px;
  height: 20px;
  background-color: blue;
  position: absolute;
  top: 50px;
  left: 10px;
  z-index: 1;
  animation: gh-eyes-movement infinite 3s;
}

#gh-pupil1 {
  width: 20px;
  height: 20px;
  background-color: blue;
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 1;
  animation: gh-eyes-movement infinite 3s;
}

@keyframes gh-eyes-movement {
  0%,
  49% {
    transform: translateX(0px);
  }
  50%,
  99% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0px);
  }
}

#gh-shadow {
  background-color: black;
  width: 140px;
  height: 140px;
  position: absolute;
  border-radius: 50%;
  transform: rotateX(80deg);
  filter: blur(20px);
  top: 80%;
  animation: gh-shadow-movement infinite 0.5s;
}

@keyframes gh-shadow-movement {
  0%,
  49% {
    opacity: 0.5;
  }
  50%,
  100% {
    opacity: 0.2;
  }
}
`
}