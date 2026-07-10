export default {
  id: 'tip-gradient',
  name: 'Gradient Tooltip',
  category: 'tooltips',
  tags: ['gradient', 'css-only'],
  html: `<div class="tip-g-wrap">
  <button class="tip-g-trigger">Hover</button>
  <span class="tip-g-pop">✨ Tooltip</span>
</div>`,
  css: `
.tip-g-wrap { position: relative; display: inline-block; }

.tip-g-trigger {
  padding: 10px 20px;
  background: #18181c;
  color: #f4f4f5;
  border: 1px solid #2c2c34;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
}

.tip-g-pop {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) scale(0.8);
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
  transform-origin: bottom center;
}

.tip-g-wrap:hover .tip-g-pop {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}
`
}
