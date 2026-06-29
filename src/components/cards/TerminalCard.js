export default {
  id: 'card-terminal',
  name: 'Terminal Card',
  category: 'cards',
  tags: ['card', 'terminal', 'macos', 'window', 'code', 'animated', 'css-only', 'console', 'cli'],
  author: '00Kubi',
  html: `<div class="tm-window">
  <div class="tm-toolbar">
    <div class="tm-btns">
      <button class="tm-btn tm-btn-close"></button>
      <button class="tm-btn"></button>
      <button class="tm-btn"></button>
    </div>
    <p class="tm-user">00Kubi@admin: ~</p>
    <div class="tm-add">+</div>
  </div>
  <div class="tm-body">
    <div class="tm-prompt">
      <span class="tm-user-c">00Kubi@admin:</span>
      <span class="tm-loc">~</span>
      <span class="tm-bling">$</span>
      <span class="tm-cursor"></span>
    </div>
    <div class="tm-output">
      <pre class="tm-text">Welcome to Terminal</pre>
    </div>
    <div class="tm-input">
      <input placeholder="Type a command..." class="tm-input-text" type="text" />
    </div>
  </div>
</div>`,
  css: `
.tm-window {
  width: 400px;
  height: 300px;
  background: #1e1e1e;
  font-family: Menlo, Consolas, monospace;
  font-size: 14px;
  color: #e6e6e6;
  border-radius: 5px;
  overflow: hidden;
}

.tm-toolbar {
  display: flex;
  height: 30px;
  align-items: center;
  padding: 0 8px;
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #212121;
  justify-content: space-between;
}

.tm-btns {
  display: flex;
  align-items: center;
}

.tm-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-right: 5px;
  font-size: 8px;
  height: 12px;
  width: 12px;
  box-sizing: border-box;
  border: none;
  border-radius: 100%;
  background: linear-gradient(#7d7871 0%, #595953 100%);
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;
}

.tm-btn-close {
  background: #ee411a;
}

.tm-btn:hover {
  cursor: pointer;
}

.tm-btn:focus {
  outline: none;
}

.tm-btn.tm-btn-close.tm-btn--exit,
.tm-btn.tm-btn--exit {
  background: linear-gradient(#f37458 0%, #de4c12 100%);
}

.tm-add {
  border: 1px solid #fff;
  color: #fff;
  padding: 0 6px;
  border-radius: 4px 4px 0 0;
  border-bottom: none;
  cursor: pointer;
}

.tm-user {
  color: #d5d0ce;
  margin-left: 6px;
  font-size: 14px;
  line-height: 15px;
}

.tm-body {
  background: rgba(0, 0, 0, 0.6);
  height: calc(100% - 30px);
  padding-top: 2px;
  margin-top: -1px;
  font-size: 12px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: column;
}

.tm-prompt {
  display: flex;
  align-items: center;
  padding: 4px;
}

.tm-prompt span {
  margin-left: 4px;
}

.tm-user-c {
  color: #1eff8e;
}

.tm-loc {
  color: #4878c0;
}

.tm-bling {
  color: #dddddd;
}

.tm-cursor {
  display: block;
  height: 14px;
  width: 5px;
  margin-left: 10px;
  animation: tm-blink 1200ms linear infinite;
}

.tm-output {
  padding: 4px;
  flex-grow: 1;
  overflow-y: auto;
}

.tm-text {
  margin: 0;
}

.tm-input {
  padding: 4px;
}

.tm-input-text {
  width: 100%;
  padding: 6px;
  background: transparent;
  border: none;
  color: #e6e6e6;
  caret-color: #1eff8e;
}

@keyframes tm-blink {
  0% {
    background: #ffffff;
  }

  49% {
    background: #ffffff;
  }

  60% {
    background: transparent;
  }

  99% {
    background: transparent;
  }

  100% {
    background: #ffffff;
  }
}
`
}