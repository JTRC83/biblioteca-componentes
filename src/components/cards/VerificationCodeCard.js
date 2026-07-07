export default {
  id: 'card-verification-code',
  name: 'Verification Code Card',
  category: 'cards',
  tags: ['card', 'verification', 'code', 'form', 'input', 'otp', 'tailwind-converted', 'animated'],
  author: 'PriyanshuGupta28',
  note: 'Original en Tailwind. Convertido a CSS plano.',
  html: `<div class="vc-outer">
  <div class="vc-card">
    <div class="vc-icon">
      <svg
        class="vc-lock"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        ></path>
      </svg>
    </div>

    <div class="vc-header">
      <p class="vc-title">Verification Required</p>
      <p class="vc-subtitle">Enter the 6-digit code sent to</p>
      <p class="vc-email">john.doe@example.com</p>
    </div>

    <form class="vc-form" onsubmit="return false;">
      <div class="vc-inputs">
        <input
          type="text"
          maxlength="1"
          pattern="[0-9]"
          inputmode="numeric"
          class="vc-code"
          placeholder="•"
        />
        <input
          type="text"
          maxlength="1"
          pattern="[0-9]"
          inputmode="numeric"
          class="vc-code"
          placeholder="•"
        />
        <input
          type="text"
          maxlength="1"
          pattern="[0-9]"
          inputmode="numeric"
          class="vc-code"
          placeholder="•"
        />
        <input
          type="text"
          maxlength="1"
          pattern="[0-9]"
          inputmode="numeric"
          class="vc-code"
          placeholder="•"
        />
        <input
          type="text"
          maxlength="1"
          pattern="[0-9]"
          inputmode="numeric"
          class="vc-code"
          placeholder="•"
        />
        <input
          type="text"
          maxlength="1"
          pattern="[0-9]"
          inputmode="numeric"
          class="vc-code"
          placeholder="•"
        />
      </div>

      <button type="submit" class="vc-submit">
        <span class="vc-submit-content">
          <span>Verify Code</span>
          <svg
            class="vc-arrow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            ></path>
          </svg>
        </span>
      </button>

      <div class="vc-divider">
        <div class="vc-divider-line"></div>
        <div class="vc-divider-text">
          <span>or</span>
        </div>
      </div>

      <div class="vc-bottom">
        <div class="vc-resend-info">
          <svg
            class="vc-clock-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span
            >Resend code in
            <span class="vc-countdown">0:29</span></span
          >
        </div>

        <button type="button" class="vc-resend" disabled="">
          <svg
            class="vc-resend-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
          Resend Code
        </button>
      </div>
    </form>
  </div>
</div>`,
  css: `
.vc-outer {
  width: 100%;
  max-width: 28rem;
}

.vc-card {
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04),
    0 0 0 0 rgba(229, 231, 235, 0.5);
  border: 1px solid #f3f4f6;
  padding: 2rem;
}

.vc-icon {
  width: 4rem;
  height: 4rem;
  background-color: #111827;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  transition: transform 0.3s ease;
}

.vc-icon:hover {
  transform: scale(1.1) rotate(12deg);
}

.vc-lock {
  width: 2rem;
  height: 2rem;
  color: #ffffff;
}

.vc-header {
  text-align: center;
  margin-bottom: 2rem;
}

.vc-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.5rem 0;
}

.vc-subtitle {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}

.vc-email {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin: 0.25rem 0 0 0;
}

.vc-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.vc-inputs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

@media (min-width: 640px) {
  .vc-inputs {
    gap: 0.75rem;
  }
}

.vc-code {
  width: 2.75rem;
  height: 3rem;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  background-color: #f9fafb;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  outline: none;
  caret-color: #111827;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

@media (min-width: 640px) {
  .vc-code {
    width: 3rem;
    height: 3.5rem;
  }
}

.vc-code:hover {
  border-color: #d1d5db;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.vc-code:focus {
  border-color: #111827;
  background-color: #ffffff;
  box-shadow:
    0 0 0 4px rgba(17, 24, 39, 0.1),
    0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
}

.vc-code::placeholder {
  color: #d1d5db;
}

.vc-submit {
  position: relative;
  width: 100%;
  padding: 0.875rem 1rem;
  background: linear-gradient(to right, #111827, #374151);
  color: #ffffff;
  font-weight: 600;
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
}

.vc-submit:hover {
  background: linear-gradient(to right, #1f2937, #4b5563);
  transform: scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.vc-submit:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(17, 24, 39, 0.2);
}

.vc-submit:active {
  transform: scale(0.98);
}

.vc-submit-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.vc-arrow {
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;
}

.vc-submit:hover .vc-arrow {
  transform: translateX(4px);
}

.vc-divider {
  position: relative;
}

.vc-divider-line {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
}

.vc-divider-line::before {
  content: "";
  width: 100%;
  border-top: 1px solid #e5e7eb;
}

.vc-divider-text {
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
}

.vc-divider-text span {
  padding: 0 1rem;
  background-color: #ffffff;
  color: #6b7280;
}

.vc-bottom {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.vc-resend-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.vc-clock-icon {
  width: 1rem;
  height: 1rem;
  animation: vc-pulse 2s infinite;
}

@keyframes vc-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.vc-countdown {
  font-weight: 600;
  color: #374151;
  animation: vc-pulse 2s infinite;
}

.vc-resend {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  background-color: #f3f4f6;
  border: none;
  border-radius: 0.5rem;
  cursor: not-allowed;
  opacity: 0.5;
  transition: all 0.2s ease;
}

.vc-resend:not(:disabled) {
  cursor: pointer;
  opacity: 1;
}

.vc-resend:not(:disabled):hover {
  background-color: #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.vc-resend:not(:disabled):active {
  transform: scale(0.95);
}

.vc-resend-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.3s ease;
}

.vc-resend:hover .vc-resend-icon {
  transform: rotate(180deg);
}
`
}