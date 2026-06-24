export default {
  id: 'radio-fancy',
  name: 'Fancy Radio',
  category: 'radios',
  tags: ['animated', 'css-only'],
  html: `<div class="rd-group">
  <label class="rd-fancy">
    <input type="radio" name="rd" />
    <span class="rd-fancy__dot"></span>
    <span class="rd-fancy__label">Option A</span>
  </label>
  <label class="rd-fancy">
    <input type="radio" name="rd" />
    <span class="rd-fancy__dot"></span>
    <span class="rd-fancy__label">Option B</span>
  </label>
</div>`,
  css: `
.rd-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #e4e4e7;
  font-size: 15px;
}

.rd-fancy {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
}

.rd-fancy input { display: none; }

.rd-fancy__dot {
  position: relative;
  width: 22px;
  height: 22px;
  border: 2px solid #52525b;
  border-radius: 50%;
  background: transparent;
  transition: all 0.2s ease;
}

.rd-fancy__dot::after {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: #7c3aed;
  transform: scale(0);
  transition: transform 0.2s ease;
}

.rd-fancy input:checked ~ .rd-fancy__dot {
  border-color: #7c3aed;
  box-shadow: 0 0 8px rgba(124, 58, 237, 0.4);
}

.rd-fancy input:checked ~ .rd-fancy__dot::after {
  transform: scale(1);
}
`
}
