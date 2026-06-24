export default {
  id: 'input-floating',
  name: 'Floating Label',
  category: 'inputs',
  tags: ['floating-label', 'css-only'],
  html: `<div class="inp-float">
  <input type="text" required placeholder=" " />
  <label>Your email</label>
</div>`,
  css: `
.inp-float {
  position: relative;
  width: 280px;
}

.inp-float input {
  width: 100%;
  padding: 16px 14px 6px;
  font-size: 15px;
  color: #f4f4f5;
  background: transparent;
  border: 1px solid #3f3f46;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s ease;
}

.inp-float input:focus { border-color: #7c3aed; }

.inp-float label {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;
  color: #71717a;
  pointer-events: none;
  transition: all 0.2s ease;
  background: transparent;
}

.inp-float input:focus + label,
.inp-float input:not(:placeholder-shown) + label {
  top: 8px;
  font-size: 11px;
  color: #a78bfa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
`
}
