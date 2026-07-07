export default {
  id: 'analog-keyboard-dark',
  name: 'Dark Keyboard',
  category: 'analog',
  tags: ['analog', 'keyboard', 'dark', 'shadow', 'input', 'css-only', 'hardware', 'realistic', 'physical'],
  author: 'dexter-st',
  html: `<div class="kb2-keyboard">
  <div class="kb2-row">
    <div class="kb2-key kb2-function-key">esc</div>
    <div class="kb2-key kb2-function-key">F1</div>
    <div class="kb2-key kb2-function-key">F2</div>
    <div class="kb2-key kb2-function-key">F3</div>
    <div class="kb2-key kb2-function-key">F4</div>
    <div class="kb2-key kb2-function-key">F5</div>
    <div class="kb2-key kb2-function-key">F6</div>
    <div class="kb2-key kb2-function-key">F7</div>
    <div class="kb2-key kb2-function-key">F8</div>
    <div class="kb2-key kb2-function-key">F9</div>
    <div class="kb2-key kb2-function-key">F10</div>
    <div class="kb2-key kb2-function-key">F11</div>
    <div class="kb2-key kb2-function-key">F12</div>
    <div class="kb2-key kb2-eject-key">⏏</div>
  </div>

  <div class="kb2-row">
    <div class="kb2-key">\`</div>
    <div class="kb2-key">1</div>
    <div class="kb2-key">2</div>
    <div class="kb2-key">3</div>
    <div class="kb2-key">4</div>
    <div class="kb2-key">5</div>
    <div class="kb2-key">6</div>
    <div class="kb2-key">7</div>
    <div class="kb2-key">8</div>
    <div class="kb2-key">9</div>
    <div class="kb2-key">0</div>
    <div class="kb2-key">-</div>
    <div class="kb2-key">=</div>
    <div class="kb2-key kb2-delete-key">delete</div>
  </div>

  <div class="kb2-row">
    <div class="kb2-key kb2-tab-key">tab</div>
    <div class="kb2-key">Q</div>
    <div class="kb2-key">W</div>
    <div class="kb2-key">E</div>
    <div class="kb2-key">R</div>
    <div class="kb2-key">T</div>
    <div class="kb2-key">Y</div>
    <div class="kb2-key">U</div>
    <div class="kb2-key">I</div>
    <div class="kb2-key">O</div>
    <div class="kb2-key">P</div>
    <div class="kb2-key">[</div>
    <div class="kb2-key">]</div>
    <div class="kb2-key kb2-backslash-key">\</div>
  </div>

  <div class="kb2-row">
    <div class="kb2-key kb2-caps-lock-key">caps lock</div>
    <div class="kb2-key">A</div>
    <div class="kb2-key">S</div>
    <div class="kb2-key">D</div>
    <div class="kb2-key">F</div>
    <div class="kb2-key">G</div>
    <div class="kb2-key">H</div>
    <div class="kb2-key">J</div>
    <div class="kb2-key">K</div>
    <div class="kb2-key">L</div>
    <div class="kb2-key">;</div>
    <div class="kb2-key">'</div>
    <div class="kb2-key kb2-return-key">return</div>
  </div>

  <div class="kb2-row">
    <div class="kb2-key kb2-shift-key">shift</div>
    <div class="kb2-key">Z</div>
    <div class="kb2-key">X</div>
    <div class="kb2-key">C</div>
    <div class="kb2-key">V</div>
    <div class="kb2-key">B</div>
    <div class="kb2-key">N</div>
    <div class="kb2-key">M</div>
    <div class="kb2-key">,</div>
    <div class="kb2-key">.</div>
    <div class="kb2-key">/</div>
    <div class="kb2-key kb2-shift-key">shift</div>
  </div>

  <div class="kb2-row">
    <div class="kb2-key">fn</div>
    <div class="kb2-key kb2-ctrl-key">ctrl</div>
    <div class="kb2-key kb2-alt-key">⌥</div>
    <div class="kb2-key kb2-command-key">⌘</div>
    <div class="kb2-key kb2-space-key"></div>
    <div class="kb2-key kb2-command-key">⌘</div>
    <div class="kb2-key kb2-alt-key">⌥</div>
    <div class="kb2-key kb2-arrow-key">◀</div>
    <div class="kb2-key kb2-arrow-key">▼</div>
    <div class="kb2-key kb2-arrow-key">▲</div>
    <div class="kb2-key kb2-arrow-key">▶</div>
  </div>
</div>`,
  css: `
.kb2-keyboard {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 16px;
  padding-bottom: 19px;
  border-radius: 16px;
  background-color: #d3d3d3;
  background-image: linear-gradient(to bottom, #d3d3d3, #c5c5c5);
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  width: 600px;
  user-select: none;
}

.kb2-row {
  display: flex;
  gap: 3px;
}

.kb2-key {
  background-color: #f0f0f0;
  border: 1px solid #0003;
  border-radius: 6px;
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
  min-width: 35px;
  text-align: center;
  padding: 8px 5px;
  font-size: 10px;
  color: #333;
  cursor: pointer;
  transition:
    box-shadow 0.2s,
    background-color 0.2s,
    transform 0.1s;
}

.kb2-key:hover {
  background-color: #e0e0e0;
  transform: translateY(-2px);
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 5px,
    rgba(0, 0, 0, 0.3) 0px 7px 16px -3px,
    rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
}

.kb2-key:active {
  transform: translateY(1px);
  box-shadow:
    rgba(0, 0, 0, 0.4) 0px 2px 3px,
    rgba(0, 0, 0, 0.3) 0px 5px 10px -3px,
    rgba(0, 0, 0, 0.2) 0px -1px 0px inset;
}

.kb2-function-key {
  max-height: 25px;
  padding: 4px;
}

.kb2-eject-key {
  margin-left: 16px;
  padding: 4px 24px;
}

.kb2-delete-key {
  padding: 8px 24px;
}

.kb2-tab-key,
.kb2-backslash-key,
.kb2-caps-lock-key,
.kb2-return-key {
  flex: 2;
}

.kb2-shift-key {
  flex: 3;
}

.kb2-space-key {
  flex: 5;
  padding: 8px;
  min-width: 175px;
}

.kb2-command-key,
.kb2-alt-key {
  min-width: 35px;
  padding: 2px;
  font-size: 16px;
}

.kb2-arrow-key {
  min-width: 30px;
}
`
}