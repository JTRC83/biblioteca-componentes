export default {
  id: 'tt-glow-info',
  name: 'Glow Info Tooltip',
  category: 'tooltips',
  tags: ['glow', 'info', 'hover', 'gradient', 'css-only'],
  author: 'uiverse (Tailwind converted)',
  html: `<div class="tt-glow-info">
  <button class="tt-glow-info__btn" type="button">
    <div class="tt-glow-info__btn-glow"></div>
    <span class="tt-glow-info__btn-content">
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" class="tt-glow-info__btn-icon">
        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
      </svg>
      Hover for Info
    </span>
  </button>
  <div class="tt-glow-info__tooltip">
    <div class="tt-glow-info__card">
      <div class="tt-glow-info__header">
        <div class="tt-glow-info__icon-circle">
          <svg viewBox="0 0 20 20" fill="currentColor" class="tt-glow-info__info-icon">
            <path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fill-rule="evenodd"></path>
          </svg>
        </div>
        <h3 class="tt-glow-info__title">Important Information</h3>
      </div>
      <div class="tt-glow-info__body">
        <p class="tt-glow-info__text">This is a tooltip with detailed information and custom styling.</p>
        <div class="tt-glow-info__badge">
          <svg viewBox="0 0 20 20" fill="currentColor" class="tt-glow-info__check-icon">
            <path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
          </svg>
          <span>Premium Feature</span>
        </div>
      </div>
      <div class="tt-glow-info__card-glow"></div>
      <div class="tt-glow-info__arrow"></div>
    </div>
  </div>
</div>`,
  css: `
.tt-glow-info {
  position: relative;
  display: inline-block;
}

.tt-glow-info__btn {
  position: relative;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: rgba(79, 70, 229, 0.9);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
}

.tt-glow-info__btn:hover {
  background: rgba(67, 56, 202, 0.9);
}

.tt-glow-info__btn:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px #6366f1, 0 0 0 4px #111827;
}

.tt-glow-info__btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2));
  filter: blur(24px);
  opacity: 0;
  transition: opacity 0.3s;
}

.tt-glow-info:hover .tt-glow-info__btn-glow {
  opacity: 0.75;
}

.tt-glow-info__btn-content {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}

.tt-glow-info__btn-icon {
  width: 16px;
  height: 16px;
}

.tt-glow-info__tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  margin-bottom: 12px;
  width: 288px;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-out;
}

.tt-glow-info:hover .tt-glow-info__tooltip {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.tt-glow-info__card {
  position: relative;
  padding: 16px;
  background: linear-gradient(to bottom right, rgba(17, 24, 39, 0.95), rgba(31, 41, 55, 0.95));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(79, 70, 229, 0.15);
}

.tt-glow-info__header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.tt-glow-info__icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.2);
  flex-shrink: 0;
}

.tt-glow-info__info-icon {
  width: 16px;
  height: 16px;
  color: #818cf8;
}

.tt-glow-info__title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}

.tt-glow-info__body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.tt-glow-info__text {
  margin: 0;
  font-size: 14px;
  color: #d1d5db;
  line-height: 1.5;
}

.tt-glow-info__badge {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #9ca3af;
}

.tt-glow-info__check-icon {
  width: 16px;
  height: 16px;
  color: #9ca3af;
}

.tt-glow-info__card-glow {
  position: absolute;
  inset: 0;
  border-radius: 16px;
  background: linear-gradient(to right, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
  filter: blur(24px);
  opacity: 0.5;
  pointer-events: none;
}

.tt-glow-info__arrow {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: linear-gradient(to bottom right, rgba(17, 24, 39, 0.95), rgba(31, 41, 55, 0.95));
  transform: translateX(-50%) rotate(45deg);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
`
}