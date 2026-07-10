export default {
  id: 'input-underline',
  name: 'Underline Glow',
  category: 'inputs',
  tags: ['underline', 'glow', 'css-only'],
  html: `<div class="inp-underline">
  <input type="text" required />
  <label>Username</label>
  <span class="inp-underline__bar"></span>
</div>`,
  css: `
.inp-underline {
  position: relative;
  width: 280px;
  padding: 8px 0;
}

.inp-underline input {
  width: 100%;
  padding: 8px 0;
  font-size: 15px;
  color: #f4f4f5;
  background: transparent;
  border: none;
  border-bottom: 2px solid #3f3f46;
  outline: none;
  transition: border-color 0.3s ease;
}

.inp-underline input:focus { border-bottom-color: transparent; }

.inp-underline label {
  position: absolute;
  left: 0;
  top: 8px;
  font-size: 15px;
  color: #71717a;
  pointer-events: none;
  transition: all 0.3s ease;
}

.inp-underline input:focus + label,
.inp-underline input:not(:placeholder-shown) + label {
  top: -16px;
  font-size: 11px;
  color: #a78bfa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.inp-underline__bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #7c3aed, #ec4899);
  box-shadow: 0 0 8px #7c3aed;
  transition: width 0.3s ease;
}

.inp-underline input:focus ~ .inp-underline__bar { width: 100%; }
`
}
