export default {
  id: 'radio-card',
  name: 'Card Radio',
  category: 'radios',
  tags: ['card', 'css-only'],
  html: `<div class="rd-card-group">
  <label class="rd-card">
    <input type="radio" name="plan" />
    <span class="rd-card__inner">
      <span class="rd-card__title">Basic</span>
      <span class="rd-card__price">$9/mo</span>
    </span>
  </label>
  <label class="rd-card">
    <input type="radio" name="plan" />
    <span class="rd-card__inner">
      <span class="rd-card__title">Pro</span>
      <span class="rd-card__price">$29/mo</span>
    </span>
  </label>
</div>`,
  css: `
.rd-card-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.rd-card { cursor: pointer; }

.rd-card input { display: none; }

.rd-card__inner {
  display: block;
  width: 130px;
  padding: 16px;
  background: #18181c;
  border: 2px solid #2c2c34;
  border-radius: 12px;
  text-align: center;
  transition: all 0.2s ease;
  color: #e4e4e7;
}

.rd-card input:checked ~ .rd-card__inner {
  border-color: #7c3aed;
  background: rgba(124, 58, 237, 0.08);
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
}

.rd-card__title {
  display: block;
  font-size: 14px;
  color: #a1a1aa;
  margin-bottom: 4px;
}

.rd-card__price {
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: #f4f4f5;
}
`
}
