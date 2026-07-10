export default {
  id: 'analog-beige-button-selector',
  name: 'Beige Button Selector',
  category: 'analog',
  tags: ['analog', 'buttons', 'radio', 'beige', 'selector', 'animated', 'css-only', '3d', 'physical'],
  author: 'Pradeepsaranbishnoi (adaptado a beige)',
  note: 'Color cambiado a beige. Tercer boton "again" renombrado a "repeat". Sombras preservadas.',
  html: `<div class="rb-input">
  <label class="rb-label">
    <div class="rb-back-side"></div>
    <input type="radio" id="rb-value-1" name="rb-value-radio" value="value-1" />
    <span class="rb-text">play</span>
    <span class="rb-bottom-line"></span>
  </label>

  <label class="rb-label">
    <div class="rb-back-side"></div>
    <input type="radio" id="rb-value-2" name="rb-value-radio" value="value-2" />
    <span class="rb-text">stop</span>
    <span class="rb-bottom-line"></span>
  </label>

  <label class="rb-label">
    <div class="rb-back-side"></div>
    <input type="radio" id="rb-value-3" name="rb-value-radio" value="value-3" />
    <span class="rb-text">repeat</span>
    <span class="rb-bottom-line"></span>
  </label>
</div>`,
  css: `
.rb-input {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: black;
  padding: 6px;
  border-radius: 8px;
  overflow: hidden;
  height: 94px;
}

.rb-input input {
  display: none;
}

.rb-input .rb-label {
  width: 70px;
  height: 80px;
  background-color: #e8dcc4;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px 6px;
  border-top: 1px solid #a89878;
  transition: all 0.1s linear;
  position: relative;
  z-index: 2;
}

.rb-label .rb-back-side {
  position: absolute;
  top: -10px;
  left: 0px;
  background-color: #e8dcc4;
  border-radius: 4px 4px 2px 2px;
  width: 100%;
  height: 14px;
  box-shadow:
    inset 0 5px 3px 1px rgba(0, 0, 0, 0.5),
    inset 0px -5px 2px 0px rgba(56, 163, 224, 0.1);
  transform: perspective(300px) rotateX(50deg);
  z-index: 1;
  opacity: 0;
  transition: all 0.1s linear;
}

.rb-label:has(input[type="radio"]:checked) .rb-back-side {
  opacity: 1;
}

.rb-label:has(input[type="radio"]:checked) {
  transform: perspective(200px) rotateX(-18deg);
  transform-origin: 50% 40%;
  box-shadow: inset 0px -20px 15px 0px rgba(0, 0, 0, 0.5);
  border-top: 1px solid #2589c362;
  margin-top: 6px;
  border-radius: 0 0 4px 4px;
}

.rb-label .rb-text {
  color: black;
  font-size: 15px;
  line-height: 12px;
  padding: 0px;
  font-weight: 800;
  text-transform: uppercase;
  transition: all 0.1s linear;
  text-shadow: -1px -1px 1px rgb(224, 224, 224, 0.1);
}

.rb-label input[type="radio"]:checked + .rb-text {
  color: #258ac3;
  text-shadow:
    0px 0px 8px rgb(37, 138, 195),
    1px 1px 2px rgb(0, 0, 0, 1);
}

.rb-label .rb-bottom-line {
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background-color: #d4c4a0;
  box-shadow: 0 0 3px 0px rgb(19, 19, 19);
  border-top: 1px solid #a89878;
  transition: all 0.1s linear;
}

.rb-label:has(input[type="radio"]:checked) .rb-bottom-line {
  background-color: #c4b490;
  border-top: 1px solid #258ac340;
}
`
}