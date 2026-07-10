export default {
  id: 'chk-glow',
  name: 'Glow Check',
  category: 'checkboxes',
  tags: ['glow', 'css-only'],
  html: `<label class="chk-glow">
  <input type="checkbox" />
  <span class="chk-glow__box"></span>
  <span class="chk-glow__label">Subscribe</span>
</label>`,
  css: `
.chk-glow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  font-size: 15px;
  color: #e4e4e7;
}

.chk-glow input { display: none; }

.chk-glow__box {
  position: relative;
  width: 24px;
  height: 24px;
  border: 2px solid #52525b;
  border-radius: 8px;
  background: transparent;
  transition: all 0.3s ease;
}

.chk-glow__box::after {
  content: '✓';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  color: #0a0a0c;
  opacity: 0;
  transform: scale(0.4);
  transition: all 0.2s ease;
}

.chk-glow input:checked + .chk-glow__box {
  background: #00ffd5;
  border-color: #00ffd5;
  box-shadow: 0 0 12px #00ffd5, 0 0 24px rgba(0, 255, 213, 0.4);
}

.chk-glow input:checked + .chk-glow__box::after {
  opacity: 1;
  transform: scale(1);
}
`
}
