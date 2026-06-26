export default {
  id: 'card-mac-code',
  name: 'Mac Code Preview',
  category: 'cards',
  tags: ['card', 'mac', 'code', 'editor', 'terminal', 'dark', 'css-only', 'hover', 'window'],
  author: 'mymiamo',
  html: `<div class="mc-card">
  <div class="mc-header">
    <span class="mc-red"></span>
    <span class="mc-yellow"></span>
    <span class="mc-green"></span>
  </div>
  <span class="mc-title">Mac-Style Code Preview</span>
  <p class="mc-desc">
    A glimpse of your code in a clean and Mac-like window. Click to explore!
  </p>
  <span class="mc-tag">TAG JS</span> <span class="mc-tag">TAG JS</span>
  <div class="mc-editor">
    <pre><code>&lt;h1&gt; Hello World &lt;/h1&gt;</code></pre>
  </div>
</div>`,
  css: `
.mc-card {
  width: 400px;
  padding: 20px;
  border: 1px solid #0d1117;
  border-radius: 10px;
  background-color: #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  position: relative;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
}

.mc-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.mc-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
}

.mc-header span {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.mc-header .mc-red {
  background-color: #ff5f57;
}

.mc-header .mc-yellow {
  background-color: #ffbd2e;
}

.mc-header .mc-green {
  background-color: #28c941;
}

.mc-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px;
  color: #e6e6ef;
}

.mc-desc {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.mc-card .mc-tag {
  display: inline-block;
  font-size: 10px;
  border-radius: 5px;
  background-color: #0d1117;
  padding: 4px;
  margin-block-end: 12px;
  color: #dcdcdc;
}

.mc-editor {
  background-color: #0d1117;
  color: #dcdcdc;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    monospace;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 5px;
  padding: 15px;
  overflow: auto;
  height: 150px;
  border: 1px solid #333;
}

.mc-editor::-webkit-scrollbar {
  width: 8px;
}

.mc-editor::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}

.mc-editor pre code {
  white-space: pre-wrap;
  display: block;
}
`
}