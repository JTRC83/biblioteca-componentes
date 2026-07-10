export default {
  id: 'analog-fan-speed-knob-beige',
  name: 'Fan Speed Knob (Beige)',
  category: 'analog',
  tags: ['analog', 'fan', 'knob', 'rotary', 'beige', 'animated', 'css-only', 'selector', 'multi-state'],
  author: 'chase2k25 (adaptado a beige)',
  note: 'Color cambiado a beige. Numeros en negro. Dial central: rojo en OFF, verde en 1-5.',
  html: `<div class="fsk-fan-speed-knob">
  <div class="fsk-wrapper">
    <div class="fsk-knob-outer">
      <div class="fsk-knob-base">
        <hr class="fsk-divider" />
        <hr class="fsk-divider" />
        <hr class="fsk-divider" />
        <div class="fsk-control">
          <label for="fsk-fan_off"><span class="fsk-off">OFF</span></label>
          <label for="fsk-fan_1"><span>1</span></label>
          <label for="fsk-fan_2"><span>2</span></label>
          <label for="fsk-fan_3"><span>3</span></label>
          <label for="fsk-fan_4"><span>4</span></label>
          <label for="fsk-fan_5"><span>5</span></label>
          <input id="fsk-fan_off" name="fsk-fan" checked="" type="radio" />
          <input id="fsk-fan_1" name="fsk-fan" type="radio" />
          <input id="fsk-fan_2" name="fsk-fan" type="radio" />
          <input id="fsk-fan_3" name="fsk-fan" type="radio" />
          <input id="fsk-fan_4" name="fsk-fan" type="radio" />
          <input id="fsk-fan_5" name="fsk-fan" type="radio" />
          <div class="fsk-pointer"><span></span></div>
          <div class="fsk-pointer-marker"><span></span></div>
          <div class="fsk-knob-middle">
            <div class="fsk-knob-inner">
              <div class="fsk-knob-marker"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  css: `
.fsk-fan-speed-knob {
  font-family: monospace;
}

.fsk-wrapper {
  position: relative;
}

.fsk-knob-outer {
  user-select: none;
  position: relative;
  width: 230px;
  height: 230px;
  border-radius: 100%;
  box-shadow:
    10px 10px 10px rgba(202, 202, 202, 0.2) inset,
    -10px -10px 10px rgba(151, 151, 151, 0.2) inset;
  background-color: transparent;
}

.fsk-knob-base {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 220px;
  height: 220px;
  margin: -110px 0 0 -110px;
  border-radius: 100%;
  box-shadow:
    inset 0 3px 10px rgba(0, 0, 0, 0.6),
    0 2px 20px rgba(255, 255, 255, 0.1) inset;
  background: radial-gradient(ellipse at center, #d4c4a0 0%, #a89878 100%);
}

.fsk-knob-middle {
  z-index: 4;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 140px;
  height: 140px;
  margin: -70px 0 0 -70px;
  border-radius: 100%;
  box-shadow:
    inset 0 2px 2px rgba(255, 255, 255, 0.2),
    0 3px 13px rgba(0, 0, 0, 0.85);
  background: #c4b490;
}

.fsk-knob-inner {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 120px;
  height: 120px;
  margin: -60px 0 0 -60px;
  border-radius: 100%;
  background: #d4c4a0;
}

.fsk-knob-marker {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background-color: #000;
  border: 1px solid #000;
  border-radius: 50%;
  box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.4);
}

.fan-speed-knob {
  --fsk-light-color: #ff3a3a;
}

.fan-speed-knob:has(#fsk-fan_1:checked),
.fan-speed-knob:has(#fsk-fan_2:checked),
.fan-speed-knob:has(#fsk-fan_3:checked),
.fan-speed-knob:has(#fsk-fan_4:checked),
.fan-speed-knob:has(#fsk-fan_5:checked) {
  --fsk-light-color: #00d959;
}

.fsk-control {
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.fsk-knob-base .fsk-control label {
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 70px;
  margin-top: -35px;
  transform-origin: 0% 50%;
  cursor: pointer;
}

.fsk-knob-base .fsk-control label span {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 100%;
  font-weight: bold;
  font-size: 15px;
  line-height: 70px;
  text-align: center;
  color: #000;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.4);
}

.fsk-knob-base .fsk-control label:nth-child(1) {
  transform: rotate(-90deg);
}
.fsk-knob-base .fsk-control label:nth-child(1) span {
  transform: rotate(90deg);
}
.fsk-knob-base .fsk-control label:nth-child(2) {
  transform: rotate(-30deg);
}
.fsk-knob-base .fsk-control label:nth-child(2) span {
  transform: rotate(30deg);
}
.fsk-knob-base .fsk-control label:nth-child(3) {
  transform: rotate(30deg);
}
.fsk-knob-base .fsk-control label:nth-child(3) span {
  transform: rotate(-30deg);
}
.fsk-knob-base .fsk-control label:nth-child(4) {
  transform: rotate(90deg);
}
.fsk-knob-base .fsk-control label:nth-child(4) span {
  transform: rotate(-90deg);
}
.fsk-knob-base .fsk-control label:nth-child(5) {
  transform: rotate(150deg);
}
.fsk-knob-base .fsk-control label:nth-child(5) span {
  transform: rotate(-150deg);
}
.fsk-knob-base .fsk-control label:nth-child(6) {
  transform: rotate(210deg);
}
.fsk-knob-base .fsk-control label:nth-child(6) span {
  transform: rotate(-210deg);
}

.fsk-knob-base .fsk-control input {
  position: absolute;
  opacity: 0;
  visibility: hidden;
}

.fsk-pointer {
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50%;
  height: 100px;
  margin-top: -50px;
  transform-origin: 0% 50%;
  transition: transform 0.5s;
}

.fsk-pointer span {
  position: absolute;
  top: 0;
  left: 15px;
  width: 100px;
  height: 100px;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 97, 77, 0.8) 0%,
    rgba(255, 94, 0, 0.2) 42%,
    rgba(255, 72, 0, 0) 72%
  );
  transition: background 0.4s ease;
}

#fsk-fan_1:checked ~ .fsk-pointer span,
#fsk-fan_2:checked ~ .fsk-pointer span,
#fsk-fan_3:checked ~ .fsk-pointer span,
#fsk-fan_4:checked ~ .fsk-pointer span,
#fsk-fan_5:checked ~ .fsk-pointer span {
  background: radial-gradient(
    ellipse at center,
    rgba(0, 217, 89, 0.8) 0%,
    rgba(0, 217, 89, 0.2) 42%,
    rgba(0, 217, 89, 0) 72%
  );
}

.fsk-pointer-marker {
  z-index: 6;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50%;
  height: 12px;
  margin-top: -6px;
  transform-origin: 0% 50%;
  transition: transform 0.5s;
}

.fsk-pointer-marker span {
  position: absolute;
  top: 0;
  left: 30px;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: #ff3a3a;
  border: 1px solid #000;
  box-shadow: 0 0 10px #ff3a3a;
  transition: background 0.4s ease, box-shadow 0.4s ease;
}


#fsk-fan_off:checked ~ .fsk-pointer {
  transform: rotate(-90deg);
}
#fsk-fan_off:checked ~ .fsk-off {
  color: rgb(255, 72, 0);
  text-shadow: 0 0 5px rgb(255, 81, 0);
}
#fsk-fan_off:checked ~ .fsk-pointer span {
  background: radial-gradient(
    ellipse at center,
    rgba(255, 97, 77, 0.8) 0%,
    rgba(255, 94, 0, 0.2) 42%,
    rgba(255, 72, 0, 0) 72%
  );
}
#fsk-fan_1:checked ~ .fsk-pointer {
  transform: rotate(-30deg);
}
#fsk-fan_2:checked ~ .fsk-pointer {
  transform: rotate(30deg);
}
#fsk-fan_3:checked ~ .fsk-pointer {
  transform: rotate(90deg);
}
#fsk-fan_4:checked ~ .fsk-pointer {
  transform: rotate(150deg);
}
#fsk-fan_5:checked ~ .fsk-pointer {
  transform: rotate(210deg);
}

#fsk-fan_off:checked ~ .fsk-pointer-marker {
  transform: rotate(-90deg);
}
#fsk-fan_off:checked ~ .fsk-pointer-marker span {
  background: rgb(255, 60, 0);
  box-shadow: 0 0 10px rgb(255, 60, 0);
}
#fsk-fan_1:checked ~ .fsk-pointer-marker {
  transform: rotate(-30deg);
}
#fsk-fan_2:checked ~ .fsk-pointer-marker {
  transform: rotate(30deg);
}
#fsk-fan_3:checked ~ .fsk-pointer-marker {
  transform: rotate(90deg);
}
#fsk-fan_4:checked ~ .fsk-pointer-marker {
  transform: rotate(150deg);
}
#fsk-fan_5:checked ~ .fsk-pointer-marker {
  transform: rotate(210deg);
}
#fsk-fan_1:checked ~ .fsk-pointer-marker span,
#fsk-fan_2:checked ~ .fsk-pointer-marker span,
#fsk-fan_3:checked ~ .fsk-pointer-marker span,
#fsk-fan_4:checked ~ .fsk-pointer-marker span,
#fsk-fan_5:checked ~ .fsk-pointer-marker span {
  background: #00d959;
  box-shadow: 0 0 10px #00d959;
}

.fsk-knob-base hr.fsk-divider {
  z-index: 1;
  position: absolute;
  top: 50%;
  width: 100%;
  height: 0;
  margin-top: -1px;
  border-width: 1px 0;
  border-style: solid;
  border-top-color: #8a7d65;
  border-bottom-color: #f0e6d2;
}

.fsk-knob-base hr.fsk-divider:nth-child(1) {
  transform: rotate(-60deg);
}
.fsk-knob-base hr.fsk-divider:nth-child(2) {
  transform: rotate(60deg);
}
`
}