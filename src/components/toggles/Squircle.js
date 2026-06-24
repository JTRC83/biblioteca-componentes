export default {
  id: 'tgl-squircle',
  name: 'Squircle',
  category: 'toggles',
  tags: ['squircle', 'css-only'],
  html: `<label class="tgl-sq">
  <input type="checkbox" />
  <span class="tgl-sq__track">
    <span class="tgl-sq__thumb"></span>
    <span class="tgl-sq__on">ON</span>
    <span class="tgl-sq__off">OFF</span>
  </span>
</label>`,
  css: `
.tgl-sq { display: inline-block; position: relative; }
.tgl-sq input { display: none; }

.tgl-sq__track {
  position: relative;
  display: block;
  width: 70px;
  height: 32px;
  background: #ef4444;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  overflow: hidden;
}

.tgl-sq__thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 28px;
  height: 28px;
  background: #fafafa;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.tgl-sq__on,
.tgl-sq__off {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 1;
}

.tgl-sq__on { right: 10px; opacity: 0; transition: opacity 0.2s; }
.tgl-sq__off { left: 10px; transition: opacity 0.2s; }

.tgl-sq input:checked + .tgl-sq__track {
  background: #22c55e;
}

.tgl-sq input:checked + .tgl-sq__track .tgl-sq__thumb {
  left: 40px;
}

.tgl-sq input:checked + .tgl-sq__track .tgl-sq__on { opacity: 1; }
.tgl-sq input:checked + .tgl-sq__track .tgl-sq__off { opacity: 0; }
`
}
