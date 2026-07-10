export default {
  id: 'card-gradient',
  name: 'Gradient Card',
  category: 'cards',
  tags: ['card', 'gradient', 'animated', 'css-only', 'spinner', 'glassmorphism', 'tailwind-converted'],
  author: 'monkey_8812',
  note: 'Original en Tailwind. Convertido a CSS plano.',
  html: `<div class="gc-card">
  <div class="gc-bg">
    <div class="gc-bg-inner"></div>
  </div>

  <div class="gc-blur">
    <div class="gc-spin"></div>
  </div>

  <div class="gc-content">
    <div class="gc-info">
      <span class="gc-info-title">Card</span>
      <span class="gc-info-sub">text</span>
      <div class="gc-info-year">
        <span class="gc-info-sub">2025</span>
      </div>
    </div>
    <div class="gc-side">
      <span class="gc-side-1">UIverse</span>
      <span class="gc-side-2">card</span>
      <div class="gc-btn">
        <span class="gc-btn-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 12 12"
            class="gc-btn-svg"
          >
            <g fill="none">
              <path
                d="M4.646 2.146a.5.5 0 0 0 0 .708L7.793 6L4.646 9.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
  </div>
</div>`,
  css: `
.gc-card {
  width: 200px;
  height: 300px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 1rem;
  overflow: hidden;
}

.gc-bg {
  width: 100%;
  height: 100%;
  padding: 0.25rem;
  position: absolute;
  background-color: #c084fc;
}

.gc-bg-inner {
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 40px;
  background-color: #222;
}

.gc-blur {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 1rem;
}

.gc-spin {
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
  background-image: linear-gradient(to top right, #a855f7, #fdba74);
  animation: gc-spin 12s linear infinite;
}

.gc-content {
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.gc-info {
  width: 60%;
  padding: 0.75rem 0.5rem 0.375rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background-color: rgba(249, 250, 251, 0.1);
  color: #e5e7eb;
  font-weight: 500;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.gc-info-title {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.75rem;
}

.gc-info-sub {
  font-size: 0.75rem;
  color: #9ca3af;
}

.gc-info-year {
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gc-side {
  height: 100%;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: rgba(255, 255, 255, 0.5);
}

.gc-side-1 {
  font-size: 10px;
  line-height: 12px;
}

.gc-side-2 {
  font-size: 10px;
  line-height: 13px;
}

.gc-btn {
  width: 2rem;
  height: 2rem;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background-color: rgba(249, 250, 251, 0.2);
  cursor: pointer;
  transition: all 0.3s;
}

.gc-btn:hover {
  background-color: rgba(249, 250, 251, 0.3);
}

.gc-btn-icon {
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  color: rgba(255, 255, 255, 0.8);
}

.gc-btn-svg {
  width: 1rem;
  height: 1rem;
}

@keyframes gc-spin {
  to {
    transform: rotate(360deg);
  }
}
`
}
