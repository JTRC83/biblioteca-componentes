export default {
  id: 'analog-rotary-knob',
  name: 'Rotary Knob Selector',
  category: 'analog',
  tags: ['analog', 'rotary', 'knob', 'dial', 'animated', 'css-only', 'selector', '5-positions', 'metal'],
  author: 'Subaashbala',
  html: `<div class="kn-input">
  <div class="kn-path">
    <div class="kn-c1 kn-container">
      <label class="kn-label1" for="kn-value-1">1</label>
      <input
        class="kn-radio1"
        value="value-1"
        name="kn-value-radio"
        id="kn-value-1"
        type="radio"
      />
    </div>
    <div class="kn-c2 kn-container">
      <label class="kn-label2" for="kn-value-2">2</label>
      <input
        class="kn-radio2"
        value="value-2"
        name="kn-value-radio"
        id="kn-value-2"
        type="radio"
      />
    </div>
    <div class="kn-c3 kn-container">
      <label class="kn-label3" for="kn-value-3">3</label>
      <input
        class="kn-radio3"
        value="value-3"
        name="kn-value-radio"
        id="kn-value-3"
        type="radio"
        checked=""
      />
    </div>
    <div class="kn-c4 kn-container">
      <label class="kn-label4" for="kn-value-4">4</label>
      <input
        class="kn-radio4"
        value="value-4"
        name="kn-value-radio"
        id="kn-value-4"
        type="radio"
      />
    </div>
    <div class="kn-c5 kn-container">
      <label class="kn-label5" for="kn-value-5">5</label>
      <input
        class="kn-radio5"
        value="value-5"
        name="kn-value-radio"
        id="kn-value-5"
        type="radio"
      />
    </div>
  </div>
  <div class="kn-knob">
    <div class="kn-center"></div>
  </div>
</div>`,
  css: `
.kn-input {
  position: relative;
}
.kn-path {
  position: relative;
  width: 20em;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
}
.kn-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em;
}
.kn-container label {
  font-size: 0.85em;
  font-weight: 900;
  cursor: pointer;
}
.kn-path input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background: #000;
  transform-origin: bottom center;
  outline: none;
}
.kn-c1 {
  left: 0;
  top: 25%;
  transform: rotateZ(-45deg);
}
.kn-c5 {
  right: 0;
  top: 25%;
  transform: rotateZ(45deg);
}
.kn-c2 {
  left: 15%;
  top: 5%;
  transform: rotateZ(-25deg);
}
.kn-c4 {
  right: 15%;
  top: 5%;
  transform: rotateZ(25deg);
}
.kn-c3 {
  left: 44%;
  top: -5%;
  transform: rotateZ(0deg);
}

.kn-knob {
  width: 13em;
  aspect-ratio: 1;
  border-radius: 50%;
  top: 25%;
  left: 50%;
  position: absolute;
  border: 3px solid black;
  outline: 3px solid gray;
  background: #cfc9bd;
  overflow: hidden;
  transform: translateX(-50%);
  transform-origin: center center;
  transition: transform 350ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.kn-center {
  height: 100%;
  width: 2.25em;
  position: relative;
  left: 50%;
  top: 50%;
  background-color: #cfc9bd;
  border-radius: 7px;
  outline: 1px solid rgba(255, 255, 255, 0.377);
  transform: translate(-50%, -50%);
  box-shadow: 15px 0px 35px rgba(255, 255, 255, 0.474),
    -15px 0px 40px 5px rgba(128, 128, 128, 0.563),
    inset 0px 0px 4px 0px rgba(255, 255, 255, 0.226);
  transition: box-shadow 100ms linear;
}
.kn-center::after {
  content: "";
  position: absolute;
  width: 3px;
  height: 25px;
  background-color: black;
  left: 50%;
  top: 1%;
  transform: translateX(-50%);
}

.kn-path:has(.kn-radio1:checked) ~ .kn-knob {
  transform: translateX(-50%) rotateZ(-60deg);
}
.kn-path:has(.kn-radio2:checked) ~ .kn-knob {
  transform: translateX(-50%) rotateZ(-35deg);
}
.kn-path:has(.kn-radio3:checked) ~ .kn-knob {
  transform: translateX(-50%) rotateZ(0deg);
}
.kn-path:has(.kn-radio4:checked) ~ .kn-knob {
  transform: translateX(-50%) rotateZ(35deg);
}
.kn-path:has(.kn-radio5:checked) ~ .kn-knob {
  transform: translateX(-50%) rotateZ(60deg);
}

.kn-path:has(.kn-radio1:checked) ~ .kn-knob > .kn-center {
  box-shadow: 15px 0px 35px rgba(255, 255, 255, 0.74),
    -15px 0px 40px 5px rgb(128, 128, 128),
    inset 0px 0px 4px 0px rgba(255, 255, 255, 0.226);
}
.kn-path:has(.kn-radio2:checked) ~ .kn-knob > .kn-center {
  box-shadow: 15px 0px 35px rgba(255, 255, 255, 0.74),
    -15px 0px 40px 5px rgb(128, 128, 128, 0.574),
    inset 0px 0px 4px 0px rgba(255, 255, 255, 0.226);
}
.kn-path:has(.kn-radio4:checked) ~ .kn-knob > .kn-center {
  box-shadow: 15px 0px 35px rgba(128, 128, 128, 0.63),
    -15px 0px 40px 5px rgba(255, 255, 255, 0.574),
    inset 0px 0px 4px 0px rgba(255, 255, 255, 0.226);
}
.kn-path:has(.kn-radio5:checked) ~ .kn-knob > .kn-center {
  box-shadow: 15px 0px 35px rgb(128, 128, 128),
    -15px 0px 40px 5px rgba(255, 255, 255, 0.74),
    inset 0px 0px 4px 0px rgba(255, 255, 255, 0.226);
}
`
}