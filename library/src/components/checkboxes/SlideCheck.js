export default {
  id: 'chk-slide',
  name: 'Slide Check',
  category: 'toggles',
  tags: ['slide', 'css-only'],
  html: `<label class="chk-slide">
  <input type="checkbox" />
  <span class="chk-slide__track">
    <span class="chk-slide__thumb"></span>
  </span>
  <span class="chk-slide__label">Enable notifications</span>
</label>`,
  css: `
.chk-slide {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  font-size: 15px;
  color: #e4e4e7;
}

.chk-slide input { display: none; }

.chk-slide__track {
  position: relative;
  width: 46px;
  height: 24px;
  background: #3f3f46;
  border-radius: 999px;
  transition: background 0.3s ease;
  flex-shrink: 0;
}

.chk-slide__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: #fafafa;
  border-radius: 50%;
  transition: left 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.chk-slide input:checked + .chk-slide__track {
  background: #22c55e;
}

.chk-slide input:checked + .chk-slide__track .chk-slide__thumb {
  left: 24px;
}
`
}
