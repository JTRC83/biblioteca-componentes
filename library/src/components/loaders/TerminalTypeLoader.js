export default {
  id: 'loader-terminal-type',
  name: 'Terminal Type Loader',
  category: 'loaders',
  tags: ['loader', 'terminal', 'typing', 'animated', 'css-only', 'console', 'macos', 'cursor'],
  author: 'jeremyssocial',
  html: `<div class="tl-terminal-loader">
  <div class="tl-terminal-header">
    <div class="tl-terminal-title">Status</div>
    <div class="tl-terminal-controls">
      <div class="tl-control tl-close"></div>
      <div class="tl-control tl-minimize"></div>
      <div class="tl-control tl-maximize"></div>
    </div>
  </div>
  <div class="tl-text">Loading...</div>
</div>`,
  css: `
@keyframes tl-blink-cursor {
  50% {
    border-right-color: transparent;
  }
}

@keyframes tl-type-and-delete {
  0%,
  10% {
    width: 0;
  }
  45%,
  55% {
    width: 6.2em;
  }
  90%,
  100% {
    width: 0;
  }
}

.tl-terminal-loader {
  border: 0.1em solid #333;
  background-color: #1a1a1a;
  color: #0f0;
  font-family: "Courier New", Courier, monospace;
  font-size: 1em;
  padding: 1.5em 1em;
  width: 12em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.tl-terminal-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1.5em;
  background-color: #333;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 0.4em;
  box-sizing: border-box;
}

.tl-terminal-controls {
  float: right;
}

.tl-control {
  display: inline-block;
  width: 0.6em;
  height: 0.6em;
  margin-left: 0.4em;
  border-radius: 50%;
  background-color: #777;
}

.tl-control.tl-close {
  background-color: #e33;
}

.tl-control.tl-minimize {
  background-color: #ee0;
}

.tl-control.tl-maximize {
  background-color: #0b0;
}

.tl-terminal-title {
  float: left;
  line-height: 1.5em;
  color: #eee;
}

.tl-text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.2em solid green;
  animation:
    tl-type-and-delete 4s steps(11) infinite,
    tl-blink-cursor 0.5s step-end infinite alternate;
  margin-top: 1.5em;
}
`
}