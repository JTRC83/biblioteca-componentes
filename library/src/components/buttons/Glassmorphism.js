export default {
  id: 'btn-glass',
  name: 'Glassmorphism',
  category: 'buttons',
  tags: ['glass', 'glassmorphism', 'css-only'],
  html: `<button class="glass-btn">Click here</button>`,
  css: `
.glass-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.glass-btn:active {
  transform: translateY(0);
}
`
}
