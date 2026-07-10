export default {
  id: 'anim-wallet',
  name: 'Wallet Reveal',
  category: 'animations',
  tags: ['wallet', 'cards', 'animated', 'css-only', 'hover', 'reveal', 'balance', 'stack', 'perspective'],
  author: 'byllzz',
  html: `<div class="wt-app">
  <div class="wt-wallet">
    <div class="wt-back"></div>

    <div class="wt-card wt-stripe">
      <div class="wt-inner">
        <div class="wt-top">
          <span>Stripe</span>
          <div class="wt-chip"></div>
        </div>
        <div class="wt-bottom">
          <div class="wt-info">
            <span class="wt-label">Holder</span
            ><span class="wt-value">ALEX SMITH</span>
          </div>
          <div class="wt-num-wrapper">
            <span class="wt-stars">**** 4242</span>
            <span class="wt-num">5524 9910 4242</span>
          </div>
        </div>
      </div>
    </div>

    <div class="wt-card wt-wise">
      <div class="wt-inner">
        <div class="wt-top">
          <span>Wise</span>
          <div class="wt-chip"></div>
        </div>
        <div class="wt-bottom">
          <div class="wt-info">
            <span class="wt-label">Business</span
            ><span class="wt-value">STUDIO LLC</span>
          </div>
          <div class="wt-num-wrapper">
            <span class="wt-stars">**** 8810</span>
            <span class="wt-num">9012 4432 8810</span>
          </div>
        </div>
      </div>
    </div>

    <div class="wt-card wt-paypal">
      <div class="wt-inner">
        <div class="wt-top">
          <span>Pay<b style="color:#0079C1">Pal</b></span>
          <div class="wt-chip"></div>
        </div>
        <div class="wt-bottom">
          <div class="wt-info">
            <span class="wt-label">Email</span
            ><span class="wt-value">hello@work.com</span>
          </div>
          <div class="wt-num-wrapper">
            <span class="wt-stars">**** 0094</span>
            <span class="wt-num">3312 0045 0094</span>
          </div>
        </div>
      </div>
    </div>

    <div class="wt-pocket">
      <svg class="wt-pocket-svg" viewBox="0 0 280 160" fill="none">
        <path
          d="M 0 20 C 0 10, 5 10, 10 10 C 20 10, 25 25, 40 25 L 240 25 C 255 25, 260 10, 270 10 C 275 10, 280 10, 280 20 L 280 120 C 280 155, 260 160, 240 160 L 40 160 C 20 160, 0 155, 0 120 Z"
          fill="#1e341e"
        ></path>
        <path
          d="M 8 22 C 8 16, 12 16, 15 16 C 23 16, 27 29, 40 29 L 240 29 C 253 29, 257 16, 265 16 C 268 16, 272 16, 272 22 L 272 120 C 272 150, 255 152, 240 152 L 40 152 C 25 152, 8 152, 8 120 Z"
          stroke="#3d5635"
          stroke-width="1.5"
          stroke-dasharray="6 4"
        ></path>
      </svg>
      <div class="wt-pocket-content">
        <div style="position: relative; height: 24px; width: 100%;">
          <div class="wt-stars">******</div>
          <div class="wt-real">$12,450.00</div>
        </div>
        <div style="color: #698263; font-size: 12px; font-weight: 500;">
          Total Balance
        </div>
        <div class="wt-eye">
          <svg
            class="wt-eye-slash"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
            <line x1="3" y1="3" x2="21" y2="21"></line>
          </svg>
          <svg
            class="wt-eye-open"
            style="opacity: 0;"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>`,
  css: `
.wt-app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.wt-wallet {
  position: relative;
  width: 280px;
  height: 230px;
  cursor: pointer;
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: transform 0.4s ease;
}
.wt-wallet::after {
  content: "Hover to see Balance";
  position: absolute;
  bottom: -30px;
  font-style: italic;
  color: #003087;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
}

@keyframes wt-slide-in {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.wt-back {
  position: absolute;
  bottom: 0;
  width: 280px;
  height: 200px;
  background: #1e341e;
  border-radius: 22px 22px 60px 60px;
  z-index: 5;
  box-shadow:
    inset 0 25px 35px rgba(0, 0, 0, 0.4),
    inset 0 5px 15px rgba(0, 0, 0, 0.5);
}

.wt-card {
  position: absolute;
  width: 260px;
  height: 140px;
  left: 10px;
  border-radius: 16px;
  padding: 18px;
  color: white;
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.3),
    0 -4px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
    z-index 0s;
  animation: wt-slide-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
}

.wt-inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.wt-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.wt-chip {
  width: 32px;
  height: 24px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.wt-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.wt-label {
  font-size: 8px;
  opacity: 0.7;
  text-transform: uppercase;
  margin-bottom: 2px;
  display: block;
}

.wt-value {
  font-size: 10px;
  font-weight: 500;
}

.wt-num-wrapper {
  text-align: right;
}

.wt-stars {
  font-size: 16px;
  letter-spacing: 2px;
}

.wt-num {
  display: none;
  font-size: 14px;
  letter-spacing: 1px;
  font-family: monospace;
}

.wt-stripe {
  background: #635bff;
  bottom: 90px;
  z-index: 10;
  animation-delay: 0.1s;
}

.wt-wise {
  background: #9bd86a;
  bottom: 65px;
  z-index: 20;
  animation-delay: 0.2s;
}

.wt-paypal {
  background: #ffffff;
  color: #003087;
  bottom: 40px;
  z-index: 30;
  animation-delay: 0.3s;
}

.wt-paypal .wt-chip {
  background: rgba(0, 0, 0, 0.05);
}

.wt-paypal .wt-label {
  color: #8c979d;
}

.wt-pocket {
  position: absolute;
  bottom: 0;
  width: 280px;
  height: 160px;
  z-index: 40;
  filter: drop-shadow(0 15px 25px rgba(20, 40, 20, 0.4));
}

.wt-pocket-content {
  position: absolute;
  top: 45px;
  width: 100%;
  text-align: center;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.wt-stars {
  color: #839e7b;
  font-size: 24px;
  letter-spacing: 4px;
  transition: 0.3s;
}

.wt-real {
  color: #a7c59e;
  font-size: 22px;
  font-weight: 600;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 10px);
  transition: 0.3s;
}

.wt-eye {
  margin-top: 8px;
  height: 20px;
  width: 20px;
  position: relative;
  opacity: 0.3;
  transition: 0.3s;
}

.wt-eye-slash,
.wt-eye-open {
  position: absolute;
  top: 0;
  left: 0;
  stroke: #3be60b;
  transition: 0.3s;
}

.wt-wallet:hover {
  transform: translateY(-5px);
}

.wt-wallet:hover .wt-eye {
  opacity: 1;
}

.wt-wallet:hover .wt-stripe {
  transform: translateY(-75px) rotate(-3deg);
}

.wt-wallet:hover .wt-wise {
  transform: translateY(-45px) rotate(2deg);
}

.wt-wallet:hover .wt-paypal {
  transform: translateY(-10px);
}

.wt-card:hover {
  z-index: 100 !important;
  transition-delay: 0s !important;
}

.wt-wallet:hover .wt-stripe:hover {
  transform: translateY(-60px) scale(1.05) rotate(0);
}

.wt-wallet:hover .wt-wise:hover {
  transform: translateY(-70px) scale(1.05) rotate(0);
}

.wt-wallet:hover .wt-paypal:hover {
  transform: translateY(-60px) scale(1.05) rotate(0);
}

.wt-card:hover .wt-stars {
  display: none;
}

.wt-card:hover .wt-num {
  display: block;
}

.wt-wallet:hover .wt-stars {
  opacity: 0;
}

.wt-wallet:hover .wt-real {
  opacity: 1;
  transform: translate(-50%, 0);
}

.wt-wallet:hover .wt-eye-slash {
  opacity: 0;
  transform: scale(0.5);
}

.wt-wallet:hover .wt-eye-open {
  opacity: 1;
  transform: scale(1.1);
}
`
}