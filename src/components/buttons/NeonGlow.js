export default {
  id: 'btn-neon',
  name: 'Neon Glow',
  category: 'buttons',
  tags: ['glow', 'neon', 'css-only'],
  html: `<button class="neon-btn">Hover me</button>`,
  css: `
.neon-btn {
  position: relative;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #fff;
  background: transparent;
  border: 2px solid #00ffd5;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 0 5px #00ffd5, 0 0 10px #00ffd5, inset 0 0 5px rgba(0, 255, 213, 0.2);
}

.neon-btn:hover {
  background: #00ffd5;
  color: #0a0a0c;
  box-shadow: 0 0 10px #00ffd5, 0 0 30px #00ffd5, 0 0 60px #00ffd5;
  transform: translateY(-1px);
}

.neon-btn:active {
  transform: translateY(0);
}
`
}
