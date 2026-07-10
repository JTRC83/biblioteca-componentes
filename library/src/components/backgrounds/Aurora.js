export default {
  id: 'bg-aurora',
  name: 'Aurora',
  category: 'backgrounds',
  tags: ['gradient', 'animated', 'css-only'],
  author: 'unknown',
  html: `<div class="bg-aurora">
  <div class="bg-aurora__bg"></div>
</div>`,
  css: `
.bg-aurora {
  background: #0a0a0c;
  width: 100%;
  height: 100%;
  min-height: 200px;
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
}

.bg-aurora__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(125deg, #0a0a0c, #1a0a2e, #16213e);
}

.bg-aurora__bg::before,
.bg-aurora__bg::after {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.6;
}

.bg-aurora__bg::before {
  background: #7c3aed;
  top: -40px;
  left: -40px;
  animation: bg-aurora-move 8s ease-in-out infinite;
}

.bg-aurora__bg::after {
  background: #ec4899;
  bottom: -40px;
  right: -40px;
  animation: bg-aurora-move 10s ease-in-out infinite reverse;
}

@keyframes bg-aurora-move {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(60px, 30px); }
}
`
}