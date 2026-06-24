export default {
  id: 'anim-shake',
  name: 'Shake',
  category: 'animations',
  tags: ['shake', 'css-only'],
  html: `<div class="anim-shake-box">Shake</div>`,
  css: `
.anim-shake-box {
  width: 80px;
  height: 80px;
  background: #ef4444;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  animation: anim-shake 2.5s ease-in-out infinite;
}

@keyframes anim-shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
}
`
}
