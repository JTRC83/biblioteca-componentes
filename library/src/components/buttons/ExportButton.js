export default {
  id: 'btn-export',
  name: 'Export Button',
  category: 'buttons',
  tags: ['export', 'download', 'gradient', 'animated', 'css-only', 'hover-fill'],
  author: 'user',
  html: `<button class="btn-export">
  <span class="btn-export-decor"></span>
  <span class="btn-export-content">
    <span class="btn-export-icon">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    </span>
    <span class="btn-export-text">Exportar</span>
  </span>
</button>`,
  css: `.btn-export {
  position: relative;
  overflow: hidden;
  border-radius: var(--r-sm, 8px);
  border: 1px solid oklch(0.72 0.15 295 / 0.3);
  background: oklch(0.72 0.15 295 / 0.12);
  cursor: pointer;
  font-family: inherit;
  transition: border-color .25s;
}

.btn-export-decor {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg, var(--brand, #7c5c), var(--brand-2, #6a4c));
  transform: translateX(-100%);
  transition: transform .3s;
  z-index: 0;
}

.btn-export-content {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 650;
  font-size: 12.5px;
  position: relative;
  z-index: 1;
  height: 32px;
  padding: 0 12px;
}

.btn-export-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(160deg, var(--brand, #7c5c), var(--brand-2, #6a4c));
  flex: 0 0 auto;
  margin-left: -2px;
  color: #fff;
}

.btn-export-text {
  display: inline-block;
  transition: color .2s;
  white-space: nowrap;
  color: var(--ink, #fff);
}

.btn-export:hover { border-color: var(--brand, #7c5c); }
.btn-export:hover .btn-export-text { color: #fff; }
.btn-export:hover .btn-export-decor { transform: translateX(0); }
.btn-export:active .btn-export-decor { transform: translateX(0); }`
}