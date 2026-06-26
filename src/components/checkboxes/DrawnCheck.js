export default {
  id: 'cb-drawn-tick',
  name: 'Drawn Check',
  category: 'checkboxes',
  tags: ['animated', 'css-only', 'check', 'draw', 'green'],
  author: 'Shoh2008',
  html: `<div class="checkbox-wrapper-19">
  <input id="cb-drawn-tick" type="checkbox" checked="checked">
  <label class="check-box" for="cb-drawn-tick">
</label></div>`,
  css: `
.checkbox-wrapper-19 {
  box-sizing: border-box;
  --background-color: #fff;
  --checkbox-height: 25px;
}

@keyframes dothabottomcheck-19 {
  0% { height: 0; }
  100% { height: calc(var(--checkbox-height) / 2); }
}

@keyframes dothatopcheck-19 {
  0% { height: 0; }
  50% { height: 0; }
  100% { height: calc(var(--checkbox-height) * 1.2); }
}

.checkbox-wrapper-19 input[type=checkbox] {
  display: none;
}

.checkbox-wrapper-19 .check-box {
  height: var(--checkbox-height);
  width: var(--checkbox-height);
  background-color: var(--background-color);
  border: calc(var(--checkbox-height) * .1) solid #000;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  transition: border-color ease 0.2s;
  cursor: pointer;
}

.checkbox-wrapper-19 .check-box::before,
.checkbox-wrapper-19 .check-box::after {
  box-sizing: border-box;
  position: absolute;
  height: 0;
  width: calc(var(--checkbox-height) * .2);
  background-color: #34b93d;
  display: inline-block;
  transform-origin: left top;
  border-radius: 5px;
  content: " ";
  transition: opacity ease 0.5;
}

.checkbox-wrapper-19 .check-box::before {
  top: calc(var(--checkbox-height) * .72);
  left: calc(var(--checkbox-height) * .41);
  box-shadow: 0 0 0 calc(var(--checkbox-height) * .05) var(--background-color);
  transform: rotate(-135deg);
}

.checkbox-wrapper-19 .check-box::after {
  top: calc(var(--checkbox-height) * .37);
  left: calc(var(--checkbox-height) * .05);
  transform: rotate(-45deg);
}

.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box {
  border-color: #34b93d;
}

.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::after {
  height: calc(var(--checkbox-height) / 2);
  animation: dothabottomcheck-19 0.2s ease 0s forwards;
}

.checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::before {
  height: calc(var(--checkbox-height) * 1.2);
  animation: dothatopcheck-19 0.4s ease 0s forwards;
}
`
}
