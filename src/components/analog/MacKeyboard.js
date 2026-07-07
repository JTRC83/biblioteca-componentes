export default {
  id: 'analog-keyboard',
  name: 'Mac Keyboard',
  category: 'analog',
  tags: ['analog', 'keyboard', 'mac', 'input', 'css-only', 'hardware', 'realistic', 'physical'],
  author: 'LightAndy1',
  html: `<div class="kb-keyboard">
  <div class="kb-row">
    <div class="kb-key kb-function-key">esc</div>
    <div class="kb-key kb-function-key">F1</div>
    <div class="kb-key kb-function-key">F2</div>
    <div class="kb-key kb-function-key">F3</div>
    <div class="kb-key kb-function-key">F4</div>
    <div class="kb-key kb-function-key">F5</div>
    <div class="kb-key kb-function-key">F6</div>
    <div class="kb-key kb-function-key">F7</div>
    <div class="kb-key kb-function-key">F8</div>
    <div class="kb-key kb-function-key">F9</div>
    <div class="kb-key kb-function-key">F10</div>
    <div class="kb-key kb-function-key">F11</div>
    <div class="kb-key kb-function-key">F12</div>
    <div class="kb-key kb-eject-key">⏏</div>
  </div>

  <div class="kb-row">
    <div class="kb-key">\`</div>
    <div class="kb-key">1</div>
    <div class="kb-key">2</div>
    <div class="kb-key">3</div>
    <div class="kb-key">4</div>
    <div class="kb-key">5</div>
    <div class="kb-key">6</div>
    <div class="kb-key">7</div>
    <div class="kb-key">8</div>
    <div class="kb-key">9</div>
    <div class="kb-key">0</div>
    <div class="kb-key">-</div>
    <div class="kb-key">=</div>
    <div class="kb-key kb-delete-key">delete</div>
  </div>

  <div class="kb-row">
    <div class="kb-key kb-tab-key">tab</div>
    <div class="kb-key">Q</div>
    <div class="kb-key">W</div>
    <div class="kb-key">E</div>
    <div class="kb-key">R</div>
    <div class="kb-key">T</div>
    <div class="kb-key">Y</div>
    <div class="kb-key">U</div>
    <div class="kb-key">I</div>
    <div class="kb-key">O</div>
    <div class="kb-key">P</div>
    <div class="kb-key">[</div>
    <div class="kb-key">]</div>
    <div class="kb-key kb-backslash-key">\</div>
  </div>

  <div class="kb-row">
    <div class="kb-key kb-caps-lock-key">caps lock</div>
    <div class="kb-key">A</div>
    <div class="kb-key">S</div>
    <div class="kb-key">D</div>
    <div class="kb-key">F</div>
    <div class="kb-key">G</div>
    <div class="kb-key">H</div>
    <div class="kb-key">J</div>
    <div class="kb-key">K</div>
    <div class="kb-key">L</div>
    <div class="kb-key">;</div>
    <div class="kb-key">'</div>
    <div class="kb-key kb-return-key">return</div>
  </div>

  <div class="kb-row">
    <div class="kb-key kb-shift-key">shift</div>
    <div class="kb-key">Z</div>
    <div class="kb-key">X</div>
    <div class="kb-key">C</div>
    <div class="kb-key">V</div>
    <div class="kb-key">B</div>
    <div class="kb-key">N</div>
    <div class="kb-key">M</div>
    <div class="kb-key">,</div>
    <div class="kb-key">.</div>
    <div class="kb-key">/</div>
    <div class="kb-key kb-shift-key">shift</div>
  </div>

  <div class="kb-row">
    <div class="kb-key">fn</div>
    <div class="kb-key kb-ctrl-key">ctrl</div>
    <div class="kb-key kb-alt-key">⌥</div>
    <div class="kb-key kb-command-key">⌘</div>
    <div class="kb-key kb-space-key"></div>
    <div class="kb-key kb-command-key">⌘</div>
    <div class="kb-key kb-alt-key">⌥</div>
    <div class="kb-key kb-arrow-key">◀</div>
    <div class="kb-key kb-arrow-key">▼</div>
    <div class="kb-key kb-arrow-key">▲</div>
    <div class="kb-key kb-arrow-key">▶</div>
  </div>
</div>`,
  css: `
.kb-keyboard {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  border-radius: 16px;
  background-color: #d3d3d3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  width: 600px;
  user-select: none;
}

.kb-row {
  display: flex;
  gap: 3px;
}

.kb-key {
  background-color: #f0f0f0;
  border: 1px solid #bbb;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  min-width: 35px;
  text-align: center;
  padding: 8px 5px;
  font-size: 10px;
  color: #333;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.1s;
}

.kb-key:hover {
  background-color: #e0e0e0;
  transform: translateY(-2px);
}

.kb-key:active {
  transform: translateY(2px);
}

.kb-function-key {
  max-height: 25px;
  padding: 4px;
}

.kb-eject-key {
  margin-left: 15px;
  padding: 4px 20px;
}

.kb-delete-key {
  padding: 8px 20px;
}

.kb-tab-key,
.kb-backslash-key,
.kb-caps-lock-key,
.kb-return-key {
  flex: 2;
}

.kb-shift-key {
  flex: 3;
}

.kb-space-key {
  flex: 5;
  padding: 8px;
  min-width: 175px;
}

.kb-command-key,
.kb-alt-key {
  min-width: 35px;
  padding: 2px;
  font-size: 16px;
}

.kb-arrow-key {
  min-width: 30px;
}
`
}