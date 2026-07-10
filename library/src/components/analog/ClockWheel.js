export default {
  id: 'analog-clock-wheel',
  name: 'Clock Wheel Selector',
  category: 'analog',
  tags: ['analog', 'clock', 'wheel', 'selector', 'dial', 'animated', 'css-only', 'industrial', 'notch'],
  author: 'SelfMadeSystem',
  html: `<div class="cw-input">
  <input type="radio" id="cw-v1" name="cw-radio" checked="" />
  <input type="radio" id="cw-v2" name="cw-radio" />
  <input type="radio" id="cw-v3" name="cw-radio" />
  <input type="radio" id="cw-v4" name="cw-radio" />
  <input type="radio" id="cw-v5" name="cw-radio" />
  <input type="radio" id="cw-v6" name="cw-radio" />
  <label for="cw-v1" id="cw-l1"></label>
  <label for="cw-v2" id="cw-l2"></label>
  <label for="cw-v3" id="cw-l3"></label>
  <label for="cw-v4" id="cw-l4"></label>
  <label for="cw-v5" id="cw-l5"></label>
  <label for="cw-v6" id="cw-l6"></label>
  <div class="cw-dial"></div>
  <div class="cw-notches">
    <div class="cw-notch" style="--cw-n:1"></div>
    <div class="cw-notch" style="--cw-n:2"></div>
    <div class="cw-notch" style="--cw-n:3"></div>
    <div class="cw-notch" style="--cw-n:4"></div>
    <div class="cw-notch" style="--cw-n:5"></div>
    <div class="cw-notch" style="--cw-n:6"></div>
  </div>
</div>`,
  css: `
.cw-input {
  display: flex;
  position: relative;
  width: 60px;
  height: 60px;
  --cw-a: #0004, #fff4;
  --cw-b: var(--cw-a), var(--cw-a), var(--cw-a);
  --cw-c: var(--cw-b), var(--cw-b), var(--cw-b);
  background: conic-gradient(
      from -2deg,
      #efefff88,
      #00000088,
      #efefff88,
      #00000088,
      #efefff88
    ),
    radial-gradient(var(--cw-c), var(--cw-c)),
    radial-gradient(circle at 12% 12%, #efefff, #9999a4);
  background-size: calc(100% + 8px) calc(100% + 8px);
  background-position: -4px -4px;
  border: 4px solid #0005;
  border-radius: 50%;
}

.cw-input input {
  display: none;
  pointer-events: none;
}

.cw-dial {
  position: absolute;
  width: 26px;
  height: 4px;
  border-radius: 99px;
  background-color: #000b;
  top: calc(50% - 2px);
  left: calc(50% - 2px);
  transform-origin: 2px 50%;
  pointer-events: none;
  transition: 0.15s;
  animation: cw-owo 0.15s;
}

@keyframes cw-owo {
  0% {
    transform: rotate(-60deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.cw-input label {
  position: absolute;
  width: 48px;
  height: 48px;
  cursor: pointer;
}

#cw-v1:checked ~ #cw-l2 {
  z-index: 2;
}
#cw-v1:checked ~ .cw-dial {
  transform: rotate(0deg);
}

#cw-v2:checked ~ #cw-l3 {
  z-index: 2;
}
#cw-v2:checked ~ .cw-dial {
  transform: rotate(60deg);
  animation: none;
}

#cw-v3:checked ~ #cw-l4 {
  z-index: 2;
}
#cw-v3:checked ~ .cw-dial {
  transform: rotate(120deg);
  animation: none;
}

#cw-v4:checked ~ #cw-l5 {
  z-index: 2;
}
#cw-v4:checked ~ .cw-dial {
  transform: rotate(180deg);
  animation: none;
}

#cw-v5:checked ~ #cw-l6 {
  z-index: 2;
}
#cw-v5:checked ~ .cw-dial {
  transform: rotate(240deg);
  animation: none;
}

#cw-v6:checked ~ #cw-l1 {
  z-index: 2;
}
#cw-v6:checked ~ .cw-dial {
  transform: rotate(300deg);
  animation: none;
}

.cw-notch {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 1px;
  background-color: #fffc;
  transform: translate(-50%) rotate(calc((var(--cw-n) - 1) * 60deg))
    translateX(38px);
  counter-reset: section;
}

.cw-notch::before {
  content: counter(section);
  position: absolute;
  counter-set: section var(--cw-n);
  color: #fffc;
  transform: translate(12px, -50%) rotate(calc((var(--cw-n) - 1) * -60deg));
  font-size: 12px;
}
`
}