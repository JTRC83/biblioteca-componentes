export default {
  id: 'tgl-ios',
  name: 'iOS Style',
  category: 'toggles',
  tags: ['smooth', 'css-only'],
  html: `<label class="tgl-ios">
  <input type="checkbox" />
  <span class="tgl-ios__track"></span>
</label>`,
  css: `
.tgl-ios { display: inline-block; position: relative; }
.tgl-ios input { display: none; }

.tgl-ios__track {
  display: block;
  width: 56px;
  height: 30px;
  background: #3f3f46;
  border-radius: 999px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;
}

.tgl-ios__track::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  background: #fafafa;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tgl-ios input:checked + .tgl-ios__track {
  background: #34d399;
}

.tgl-ios input:checked + .tgl-ios__track::after {
  left: 29px;
}
`
}
