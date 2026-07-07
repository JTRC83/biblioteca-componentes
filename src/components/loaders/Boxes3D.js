export default {
  id: 'loader-3d-boxes',
  name: '3D Boxes Loader',
  category: 'loaders',
  tags: ['loader', 'boxes', '3d', 'animated', 'css-only', 'cube', 'isometric', 'infinite'],
  author: 'Nawsome',
  html: `<div class="bx-boxes">
    <div class="bx-box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="bx-box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="bx-box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="bx-box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>`,
  css: `
.bx-boxes {
  --bx-size: 32px;
  --bx-duration: 800ms;
  height: calc(var(--bx-size) * 2);
  width: calc(var(--bx-size) * 3);
  position: relative;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  margin-top: calc(var(--bx-size) * 1.5 * -1);
  transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
}

.bx-boxes .bx-box {
  width: var(--bx-size);
  height: var(--bx-size);
  top: 0;
  left: 0;
  position: absolute;
  transform-style: preserve-3d;
}

.bx-boxes .bx-box:nth-child(1) {
  transform: translate(100%, 0);
  -webkit-animation: bx-box1 var(--bx-duration) linear infinite;
  animation: bx-box1 var(--bx-duration) linear infinite;
}

.bx-boxes .bx-box:nth-child(2) {
  transform: translate(0, 100%);
  -webkit-animation: bx-box2 var(--bx-duration) linear infinite;
  animation: bx-box2 var(--bx-duration) linear infinite;
}

.bx-boxes .bx-box:nth-child(3) {
  transform: translate(100%, 100%);
  -webkit-animation: bx-box3 var(--bx-duration) linear infinite;
  animation: bx-box3 var(--bx-duration) linear infinite;
}

.bx-boxes .bx-box:nth-child(4) {
  transform: translate(200%, 0);
  -webkit-animation: bx-box4 var(--bx-duration) linear infinite;
  animation: bx-box4 var(--bx-duration) linear infinite;
}

.bx-boxes .bx-box > div {
  --bx-background: #5C8DF6;
  --bx-top: auto;
  --bx-right: auto;
  --bx-bottom: auto;
  --bx-left: auto;
  --bx-translateZ: calc(var(--bx-size) / 2);
  --bx-rotateY: 0deg;
  --bx-rotateX: 0deg;
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--bx-background);
  top: var(--bx-top);
  right: var(--bx-right);
  bottom: var(--bx-bottom);
  left: var(--bx-left);
  transform: rotateY(var(--bx-rotateY)) rotateX(var(--bx-rotateX)) translateZ(var(--bx-translateZ));
}

.bx-boxes .bx-box > div:nth-child(1) {
  --bx-top: 0;
  --bx-left: 0;
}

.bx-boxes .bx-box > div:nth-child(2) {
  --bx-background: #145af2;
  --bx-right: 0;
  --bx-rotateY: 90deg;
}

.bx-boxes .bx-box > div:nth-child(3) {
  --bx-background: #447cf5;
  --bx-rotateX: -90deg;
}

.bx-boxes .bx-box > div:nth-child(4) {
  --bx-background: #DBE3F4;
  --bx-top: 0;
  --bx-left: 0;
  --bx-translateZ: calc(var(--bx-size) * 3 * -1);
}

@-webkit-keyframes bx-box1 {
  0%, 50% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(200%, 0);
  }
}

@keyframes bx-box1 {
  0%, 50% {
    transform: translate(100%, 0);
  }

  100% {
    transform: translate(200%, 0);
  }
}

@-webkit-keyframes bx-box2 {
  0% {
    transform: translate(0, 100%);
  }

  50% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(100%, 0);
  }
}

@keyframes bx-box2 {
  0% {
    transform: translate(0, 100%);
  }

  50% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(100%, 0);
  }
}

@-webkit-keyframes bx-box3 {
  0%, 50% {
    transform: translate(100%, 100%);
  }

  100% {
    transform: translate(0, 100%);
  }
}

@keyframes bx-box3 {
  0%, 50% {
    transform: translate(100%, 100%);
  }

  100% {
    transform: translate(0, 100%);
  }
}

@-webkit-keyframes bx-box4 {
  0% {
    transform: translate(200%, 0);
  }

  50% {
    transform: translate(200%, 100%);
  }

  100% {
    transform: translate(100%, 100%);
  }
}

@keyframes bx-box4 {
  0% {
    transform: translate(200%, 0);
  }

  50% {
    transform: translate(200%, 100%);
  }

  100% {
    transform: translate(100%, 100%);
  }
}
`
}