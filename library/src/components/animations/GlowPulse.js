export default {
  id: 'anim-glow',
  name: 'Glow Pulse',
  category: 'animations',
  tags: ['glow', 'pulse', 'css-only'],
  html: `<div class="anim-glow-box">Glow</div>`,
  css: `
.anim-glow-box {
  width: 80px;
  height: 80px;
  background: #7c3aed;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  animation: anim-glow 1.8s ease-in-out infinite;
}

@keyframes anim-glow {
  0%, 100% { box-shadow: 0 0 12px #7c3aed, 0 0 24px rgba(124, 58, 237, 0.4); }
  50% { box-shadow: 0 0 24px #7c3aed, 0 0 48px rgba(124, 58, 237, 0.8); }
}
`
}
