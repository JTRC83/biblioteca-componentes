export default {
  id: 'bg-aurora',
  name: 'Aurora',
  category: 'backgrounds',
  tags: ['gradient', 'animated', 'css-only'],
  html: `<div class="bg-aurora"></div>`,
  css: `
.bg-aurora {
  width: 280px;
  height: 180px;
  border-radius: 16px;
  background: linear-gradient(125deg, #0a0a0c, #1a0a2e, #16213e);
  position: relative;
  overflow: hidden;
}

.bg-aurora::before,
.bg-aurora::after {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.6;
}

.bg-aurora::before {
  background: #7c3aed;
  top: -40px;
  left: -40px;
  animation: bg-aurora-move 8s ease-in-out infinite;
}

.bg-aurora::after {
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
