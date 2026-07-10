export default {
  id: 'tgl-pill',
  name: 'Pill Toggle',
  category: 'toggles',
  tags: ['minimal', 'css-only'],
  html: `<label class="tgl-pill">
  <input type="checkbox" />
  <span class="tgl-pill__track">
    <span class="tgl-pill__thumb"></span>
  </span>
</label>`,
  css: `
.tgl-pill { display: inline-block; position: relative; }
.tgl-pill input { display: none; }

.tgl-pill__track {
  position: relative;
  display: block;
  width: 52px;
  height: 28px;
  background: #27272a;
  border: 1px solid #3f3f46;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tgl-pill__thumb {
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: #fafafa;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: left 0.3s ease, background 0.3s ease;
}

.tgl-pill input:checked + .tgl-pill__track {
  background: #7c3aed;
  border-color: #7c3aed;
}

.tgl-pill input:checked + .tgl-pill__track .tgl-pill__thumb {
  left: 28px;
  background: #fff;
}
`
}
