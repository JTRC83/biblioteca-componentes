export default {
  id: 'anim-float',
  name: 'Float',
  category: 'animations',
  tags: ['float', 'css-only'],
  html: `<div class="anim-float-box">Float</div>`,
  css: `
.anim-float-box {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  animation: anim-float 3s ease-in-out infinite;
}

@keyframes anim-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
`
}
