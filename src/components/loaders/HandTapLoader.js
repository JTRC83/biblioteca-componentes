export default {
  id: 'loader-hand-tap',
  name: 'Hand Tap Loader',
  category: 'loaders',
  tags: ['loader', 'hand', 'tap', 'pulse', 'animated', 'css-only', 'gesture', 'skin'],
  author: 'Pradeepsaranbishnoi',
  html: `<div class="hp-hand">
  <div class="hp-finger"></div>
  <div class="hp-finger"></div>
  <div class="hp-finger"></div>
  <div class="hp-finger"></div>
  <div class="hp-palm"></div>
  <div class="hp-thumb"></div>
</div>`,
  css: `
.hp-hand {
  --hp-skin-color: #E4C560;
  --hp-tap-speed: 0.6s;
  --hp-tap-stagger: 0.1s;
  position: relative;
  width: 80px;
  height: 60px;
  margin-left: 80px;
}

.hp-hand:before {
  content: "";
  display: block;
  width: 180%;
  height: 75%;
  position: absolute;
  top: 70%;
  right: 20%;
  background-color: black;
  border-radius: 40px 10px;
  filter: blur(10px);
  opacity: 0.3;
}

.hp-palm {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--hp-skin-color);
  border-radius: 10px 40px;
}

.hp-thumb {
  position: absolute;
  width: 120%;
  height: 38px;
  background-color: var(--hp-skin-color);
  bottom: -18%;
  right: 1%;
  transform-origin: calc(100% - 20px) 20px;
  transform: rotate(-20deg);
  border-radius: 30px 20px 20px 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  border-left: 2px solid rgba(0, 0, 0, 0.1);
}

.hp-thumb:after {
  width: 20%;
  height: 60%;
  content: "";
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  bottom: -8%;
  left: 5px;
  border-radius: 60% 10% 10% 30%;
  border-right: 2px solid rgba(0, 0, 0, 0.05);
}

.hp-finger {
  position: absolute;
  width: 80%;
  height: 35px;
  background-color: var(--hp-skin-color);
  bottom: 32%;
  right: 64%;
  transform-origin: 100% 20px;
  animation-duration: calc(var(--hp-tap-speed) * 2);
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  transform: rotate(10deg);
}

.hp-finger:before {
  content: "";
  position: absolute;
  width: 140%;
  height: 30px;
  background-color: var(--hp-skin-color);
  bottom: 8%;
  right: 65%;
  transform-origin: calc(100% - 20px) 20px;
  transform: rotate(-60deg);
  border-radius: 20px;
}

.hp-finger:nth-child(1) {
  animation-delay: 0;
  filter: brightness(70%);
  animation-name: hp-tap-upper-1;
}

.hp-finger:nth-child(2) {
  animation-delay: var(--hp-tap-stagger);
  filter: brightness(80%);
  animation-name: hp-tap-upper-2;
}

.hp-finger:nth-child(3) {
  animation-delay: calc(var(--hp-tap-stagger) * 2);
  filter: brightness(90%);
  animation-name: hp-tap-upper-3;
}

.hp-finger:nth-child(4) {
  animation-delay: calc(var(--hp-tap-stagger) * 3);
  filter: brightness(100%);
  animation-name: hp-tap-upper-4;
}

@keyframes hp-tap-upper-1 {
  0%, 50%, 100% {
    transform: rotate(10deg) scale(0.4);
  }

  40% {
    transform: rotate(50deg) scale(0.4);
  }
}

@keyframes hp-tap-upper-2 {
  0%, 50%, 100% {
    transform: rotate(10deg) scale(0.6);
  }

  40% {
    transform: rotate(50deg) scale(0.6);
  }
}

@keyframes hp-tap-upper-3 {
  0%, 50%, 100% {
    transform: rotate(10deg) scale(0.8);
  }

  40% {
    transform: rotate(50deg) scale(0.8);
  }
}

@keyframes hp-tap-upper-4 {
  0%, 50%, 100% {
    transform: rotate(10deg) scale(1);
  }

  40% {
    transform: rotate(50deg) scale(1);
  }
}
`
}