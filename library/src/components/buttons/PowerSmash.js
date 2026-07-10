export default {
  id: 'btn-power-smash',
  name: 'Power Smash',
  category: 'buttons',
  tags: ['3d', 'pulse', 'red', 'animated', 'css-only'],
  author: 'Yaseen549',
  note: 'Original en Tailwind. Convertido a CSS plano.',
  html: `<button class="button">
  <span class="button__gradient-overlay"></span>
  <span class="button__highlight"></span>
  <span class="button__content">
    <svg
      class="button__icon"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      ></path>
    </svg>
    Power Smash
  </span>
</button>`,
  css: `
.button {
  position: relative;
  padding: 1rem 2rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 1rem;
  background-color: #ef4444;
  border: none;
  border-bottom: 8px solid #b91c1c;
  cursor: pointer;
  box-shadow: 0 15px 25px -10px rgba(239, 68, 68, 0.8);
  transition: all 100ms ease;
  outline: none;
  font-family: inherit;
}

.button:focus {
  box-shadow: 0 0 0 4px rgba(248, 113, 113, 0.5), 0 15px 25px -10px rgba(239, 68, 68, 0.8);
}

.button:active {
  border-bottom-width: 0;
  transform: translateY(8px);
  box-shadow: 0 7px 15px -10px rgba(239, 68, 68, 0.6);
}

.button__gradient-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  pointer-events: none;
}

.button__highlight {
  position: absolute;
  top: 0.5rem;
  left: 0.75rem;
  width: 1.5rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.4);
  filter: blur(2px);
  pointer-events: none;
}

.button__content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
}

.button__icon {
  width: 1.5rem;
  height: 1.5rem;
  animation: btn-power-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes btn-power-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
`
}
