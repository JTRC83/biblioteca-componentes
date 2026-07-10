export default {
  id: 'tip-pop',
  name: 'Pop Tooltip',
  category: 'tooltips',
  tags: ['animated', 'css-only'],
  html: `<div class="tip-wrap">
  <button class="tip-trigger">Hover me</button>
  <span class="tip-pop">I'm a tooltip!</span>
</div>`,
  css: `
.tip-wrap {
  position: relative;
  display: inline-block;
}

.tip-trigger {
  padding: 10px 20px;
  background: #7c3aed;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
}

.tip-pop {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: #18181c;
  color: #f4f4f5;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
  border: 1px solid #2c2c34;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.tip-pop::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: #18181c;
}

.tip-wrap:hover .tip-pop {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
`
}
