export default {
  id: 'loader-dots',
  name: 'Bouncing Dots',
  category: 'loaders',
  tags: ['dots', 'css-only'],
  html: `<div class="ld-dots">
  <span></span><span></span><span></span>
</div>`,
  css: `
.ld-dots {
  display: inline-flex;
  gap: 8px;
}

.ld-dots span {
  width: 12px;
  height: 12px;
  background: #7c3aed;
  border-radius: 50%;
  animation: ld-bounce 1.2s ease-in-out infinite;
}

.ld-dots span:nth-child(2) { animation-delay: 0.15s; background: #a78bfa; }
.ld-dots span:nth-child(3) { animation-delay: 0.3s; background: #ec4899; }

@keyframes ld-bounce {
  0%, 80%, 100% { transform: scale(0.5); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}
`
}
