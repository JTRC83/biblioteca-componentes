export default {
  id: 'form-modern',
  name: 'Modern Form',
  category: 'forms',
  tags: ['form', 'css-only'],
  html: `<form class="frm-modern" onsubmit="event.preventDefault()">
  <h3>Sign in</h3>
  <div class="frm-modern__group">
    <label>Email</label>
    <input type="email" placeholder="you@email.com" />
  </div>
  <div class="frm-modern__group">
    <label>Password</label>
    <input type="password" placeholder="••••••••" />
  </div>
  <button class="frm-modern__btn" type="submit">Sign in</button>
</form>`,
  css: `
.frm-modern {
  width: 300px;
  padding: 28px;
  background: #18181c;
  border: 1px solid #2c2c34;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.frm-modern h3 {
  margin: 0 0 8px 0;
  color: #f4f4f5;
  font-size: 20px;
}

.frm-modern__group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.frm-modern__group label {
  font-size: 12px;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.frm-modern__group input {
  padding: 10px 14px;
  background: #0e0e12;
  border: 1px solid #2c2c34;
  border-radius: 8px;
  color: #f4f4f5;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease;
}

.frm-modern__group input:focus {
  border-color: #7c3aed;
}

.frm-modern__btn {
  margin-top: 6px;
  padding: 12px;
  background: linear-gradient(135deg, #7c3aed, #ec4899);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.frm-modern__btn:hover { opacity: 0.9; }
`
}
