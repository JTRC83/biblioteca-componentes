export default {
  id: 'tg-conic-toggle',
  name: 'Conic Toggle',
  category: 'toggles',
  tags: ['conic', 'gradient', 'animated', 'css-only', 'toggle', 'glow'],
  author: 'Javierrocadev',
  note: 'Original en Tailwind. Convertido a CSS plano.',
  html: `<label class="conic-label">
  <input type="checkbox" class="conic-input">
  <div class="conic-track"></div>
</label>`,
  css: `
.conic-label {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.conic-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.conic-track {
  position: relative;
  box-shadow: 1px 3px 0px 0px #000;
  background: linear-gradient(to right, #fb7185, #7f1d1d);
  border-radius: 9999px;
  outline: none;
  transition-duration: 1000ms;
  width: 6rem;
  height: 3rem;
  box-shadow: 1px 3px 0px 0px #000, 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.conic-track:after {
  content: '';
  border-radius: 9999px;
  position: absolute;
  background: conic-gradient(from 135deg, #b2a9a9, #b2a8a8, #ffffff, #d7dbd9, #ffffff, #b2a8a8);
  outline: none;
  height: 2.5rem;
  width: 2.5rem;
  top: 0.25rem;
  left: 0.25rem;
  transition: transform 300ms;
}

.conic-input:focus-visible + .conic-track {
  outline: none;
}

.conic-input:checked + .conic-track {
  background: linear-gradient(to right, #10b981, #064e3b);
}

.conic-input:checked + .conic-track:after {
  transform: translateX(3rem) rotate(180deg);
}

.conic-label:hover .conic-track:after {
  transform: scale(0.95);
}

.conic-label:hover .conic-input:checked + .conic-track:after {
  transform: translateX(3rem) rotate(180deg) scale(0.95);
}
`
}
