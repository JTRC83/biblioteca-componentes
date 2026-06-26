export default {
  id: 'cb-aurora-orb',
  name: 'Aurora Orb',
  category: 'checkboxes',
  tags: ['aurora', 'orb', 'animated', 'css-only', 'gradient', 'sci-fi', 'toggle'],
  author: 'vinh_8995',
  html: `<label class="row">
  <input type="checkbox" />
  <div class="orb">
    <div class="orb-ring"></div>
    <div class="orb-aurora"></div>
    <div class="orb-gap"></div>
    <div class="orb-face">
      <svg
        viewBox="0 0 22 22"
        fill="none"
        stroke="white"
        stroke-width="2.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path class="ck" d="M4 11l5 5L18 6"></path>
      </svg>
    </div>
    <div class="orb-halo"></div>
    <div class="orb-orbit"></div>
    <div class="orb-fx"></div>
  </div>
  <div class="lbl">
    <span class="lbl-main">Click me</span>
    <span class="lbl-sub">Toggle this option</span>
  </div>
</label>`,
  css: `
.row {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

.row input {
  display: none;
}

.orb {
  position: relative;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

.orb-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #6366f1 0%,
    #a855f7 14%,
    #ec4899 28%,
    #f97316 42%,
    #eab308 56%,
    #10b981 70%,
    #06b6d4 84%,
    #6366f1 100%
  );
  animation: uv-spin 5s linear infinite;
  transition: animation-duration 0.35s;
}

.orb-aurora {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    from 90deg,
    rgba(99, 102, 241, 0) 0%,
    rgba(236, 72, 153, 0.6) 25%,
    rgba(16, 185, 129, 0) 50%,
    rgba(99, 102, 241, 0.55) 75%,
    rgba(99, 102, 241, 0) 100%
  );
  animation: uv-spin 3s linear infinite reverse;
  opacity: 0.5;
  mix-blend-mode: screen;
}

.orb-gap {
  position: absolute;
  inset: 2.5px;
  border-radius: 50%;
  background: #0d0d1f;
  transition: inset 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.orb-face {
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  background: radial-gradient(circle at 38% 30%, #1d1b38, #080814);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition:
    inset 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    background 0.4s ease;
  z-index: 2;
}

.orb-face::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    from 200deg,
    #6366f1,
    #a855f7,
    #ec4899,
    #f97316,
    #eab308,
    #10b981,
    #06b6d4,
    #6366f1
  );
  animation: uv-spin 2.8s linear infinite reverse;
  opacity: 0;
  transition: opacity 0.45s ease;
}

.orb-face::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 3px,
    rgba(0, 0, 0, 0.16) 3px,
    rgba(0, 0, 0, 0.16) 4px
  );
  pointer-events: none;
  opacity: 0.45;
  z-index: 3;
}

.orb-face svg {
  position: relative;
  z-index: 4;
  width: 22px;
  height: 22px;
  filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.5));
}

.ck {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  transition: stroke-dashoffset 0.38s cubic-bezier(0.65, 0, 0.35, 1) 0.1s;
}

.orb-halo {
  position: absolute;
  inset: -7px;
  border-radius: 50%;
  padding: 3px;
  background: conic-gradient(
    from 0deg,
    #6366f1,
    #a855f7,
    #ec4899,
    #f97316,
    #eab308,
    #10b981,
    #06b6d4,
    #6366f1
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  animation: uv-spin 1.8s linear infinite;
  opacity: 0;
  transform: scale(0.6);
  transition:
    opacity 0.4s ease,
    transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.orb-orbit {
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  border: 1.5px dashed rgba(139, 92, 246, 0.35);
  animation: uv-spin 8s linear infinite reverse;
  opacity: 0;
  transition: opacity 0.4s 0.1s ease;
}

.orb-fx {
  position: absolute;
  inset: -32px;
  pointer-events: none;
}

.lbl {
  display: flex;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;
}

.lbl-main {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.48);
  letter-spacing: 0.01em;
  transition: color 0.3s ease;
}

.lbl-sub {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.22);
  transition: color 0.3s ease;
}

.row:active .orb-ring {
  transform: scale(0.88);
}

.row input:checked ~ .orb .orb-ring {
  animation-duration: 1.6s;
}

.row input:checked ~ .orb .orb-gap {
  inset: 3.5px;
}

.row input:checked ~ .orb .orb-face {
  inset: 6px;
  background: radial-gradient(circle at 38% 30%, #2e1f66, #100a28);
  animation: uv-face-pulse 2s ease-in-out infinite;
}

.row input:checked ~ .orb .orb-face::before {
  opacity: 1;
}

.row input:checked ~ .orb .ck {
  stroke-dashoffset: 0;
}

.row input:checked ~ .orb .orb-halo {
  opacity: 1;
  transform: scale(1);
}

.row input:checked ~ .orb .orb-orbit {
  opacity: 1;
}

.row input:checked ~ .lbl .lbl-main {
  color: rgba(255, 255, 255, 0.95);
}

.row input:checked ~ .lbl .lbl-sub {
  color: rgba(255, 255, 255, 0.45);
}

@keyframes uv-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes uv-face-pulse {
  0%, 100% {
    box-shadow: inset 0 0 0px rgba(139, 92, 246, 0);
  }
  50% {
    box-shadow: inset 0 0 20px rgba(139, 92, 246, 0.5);
  }
}
`
}
