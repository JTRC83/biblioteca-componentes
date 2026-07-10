export default {
  id: 'btn-gradient',
  name: 'Gradient Slide',
  category: 'buttons',
  tags: ['gradient', 'animated', 'css-only'],
  html: `<button class="gradient-btn">Get started</button>`,
  css: `
.gradient-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  background-size: 200% 200%;
  background-position: 0% 50%;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.5s ease;
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}

.gradient-btn:hover {
  background-position: 100% 50%;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(236, 72, 153, 0.4);
}

.gradient-btn:active {
  transform: translateY(0);
}
`
}
