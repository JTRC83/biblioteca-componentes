export default {
  id: 'tt-minimal-hover',
  name: 'Minimal Hover Tooltip',
  category: 'tooltips',
  tags: ['minimal', 'hover', 'text', 'css-only'],
  author: 'zymantas-katinas (Tailwind converted)',
  html: `<div class="tt-minimal-hover">
  <p class="tt-minimal-hover__trigger">Hover me.</p>
  <div class="tt-minimal-hover__wrapper">
    <div class="tt-minimal-hover__card">
      <p class="tt-minimal-hover__title">Hello there!</p>
      <p class="tt-minimal-hover__text">
        This is a tooltip message!<br />
        It <b>appears</b> and then <b>dissapears</b>.<br />
        ....
      </p>
    </div>
  </div>
</div>`,
  css: `
.tt-minimal-hover {
  position: relative;
  display: inline-block;
}

.tt-minimal-hover__trigger {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-weight: 700;
  color: #1e293b;
  cursor: pointer;
  font-size: 16px;
}

.tt-minimal-hover__wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  bottom: 100%;
  margin-bottom: 8px;
  opacity: 0;
  transition: all 0.1s ease;
  pointer-events: none;
}

.tt-minimal-hover:hover .tt-minimal-hover__wrapper {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.tt-minimal-hover__card {
  background: #1e293b;
  width: max-content;
  max-width: 20rem;
  color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.tt-minimal-hover__title {
  margin: 0 0 4px 0;
  font-weight: 700;
  font-size: 15px;
}

.tt-minimal-hover__text {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.tt-minimal-hover__text b {
  font-weight: 700;
}
`
}