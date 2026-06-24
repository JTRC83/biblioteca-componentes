export default {
  id: 'chk-bounce',
  name: 'Bounce Check',
  category: 'checkboxes',
  tags: ['animated', 'css-only'],
  html: `<label class="chk-bounce">
  <input type="checkbox" />
  <span class="chk-bounce__box"></span>
  <span class="chk-bounce__label">Accept terms</span>
</label>`,
  css: `
.chk-bounce {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  font-size: 15px;
  color: #e4e4e7;
}

.chk-bounce input { display: none; }

.chk-bounce__box {
  position: relative;
  width: 22px;
  height: 22px;
  border: 2px solid #52525b;
  border-radius: 6px;
  transition: all 0.2s ease;
  background: transparent;
}

.chk-bounce__box::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 11px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) scale(0);
  transition: transform 0.2s ease;
}

.chk-bounce input:checked + .chk-bounce__box {
  background: #7c3aed;
  border-color: #7c3aed;
  animation: bounce 0.4s ease;
}

.chk-bounce input:checked + .chk-bounce__box::after {
  transform: rotate(45deg) scale(1);
}

@keyframes bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}
`
}
