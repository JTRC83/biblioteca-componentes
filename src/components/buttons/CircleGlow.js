export default {
  id: 'btn-circle-glow',
  name: 'Circle Glow',
  category: 'buttons',
  tags: ['circle', 'animated', 'glow', 'css-only'],
  author: 'vikramsinghnegi',
  html: `<div class="circle-button">
  <svg
    class="icon"
    stroke-linejoin="round"
    stroke-linecap="round"
    stroke-width="2"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
    <path d="M12 6v6l3 3"></path>
  </svg>
</div>`,
  css: `
.circle-button {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(145deg, #1d1d29, #27283b);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    0px 10px 20px rgba(0, 0, 0, 0.5),
    inset 0px 4px 10px rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition:
    transform 0.4s ease,
    box-shadow 0.3s ease,
    background 0.5s ease;
  overflow: hidden;
  font-family: inherit;
}

.circle-button:hover {
  transform: scale(1.3);
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.7);
  background: linear-gradient(145deg, #2e3b4a, #1c2430);
}

.icon {
  width: 40px;
  height: 40px;
  stroke: #00d4ff;
  transition:
    transform 0.5s ease-in-out,
    stroke-dasharray 0.6s ease-in-out;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: strokeAnimate 2s linear infinite;
}

.circle-button:hover .icon {
  transform: rotate(360deg);
  stroke-dashoffset: 0;
  animation: none;
}

.circle-button:after {
  content: "";
  position: absolute;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.4), transparent);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.circle-button:hover:after {
  opacity: 1;
}

@keyframes strokeAnimate {
  0% {
    stroke-dashoffset: 200;
  }
  50% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
`
}
