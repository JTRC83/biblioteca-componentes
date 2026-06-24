export default {
  id: 'loader-pulse',
  name: 'Pulse Ring',
  category: 'loaders',
  tags: ['pulse', 'ring', 'css-only'],
  html: `<div class="ld-pulse">
  <div></div><div></div><div></div>
</div>`,
  css: `
.ld-pulse {
  position: relative;
  width: 64px;
  height: 64px;
}

.ld-pulse div {
  position: absolute;
  inset: 0;
  border: 3px solid #7c3aed;
  border-radius: 50%;
  animation: ld-pulse 1.6s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.ld-pulse div:nth-child(2) { animation-delay: 0.4s; }
.ld-pulse div:nth-child(3) { animation-delay: 0.8s; }

@keyframes ld-pulse {
  0% { transform: scale(0.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
}
`
}
