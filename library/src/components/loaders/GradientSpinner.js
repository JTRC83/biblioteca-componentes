export default {
  id: 'loader-spinner',
  name: 'Gradient Spinner',
  category: 'loaders',
  tags: ['spinner', 'gradient', 'css-only'],
  html: `<div class="ld-spinner"></div>`,
  css: `
.ld-spinner {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, transparent 0%, #7c3aed 75%, #ec4899 100%);
  -webkit-mask: radial-gradient(circle, transparent 38%, #000 39%);
  mask: radial-gradient(circle, transparent 38%, #000 39%);
  animation: ld-spin 0.8s linear infinite;
}

@keyframes ld-spin {
  to { transform: rotate(360deg); }
}
`
}
