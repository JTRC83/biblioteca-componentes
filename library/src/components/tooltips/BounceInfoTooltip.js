export default {
  id: 'tt-bounce-info',
  name: 'Bounce Info Tooltip',
  category: 'tooltips',
  tags: ['info', 'bounce', 'hover', 'animated', 'css-only'],
  author: 'Cksunandh',
  html: `<div class="tt-bounce-info">
  <div class="tt-bounce-info__icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.518 0-10-4.482-10-10s4.482-10 10-10 10 4.482 10 10-4.482 10-10 10zm-1-16h2v6h-2zm0 8h2v2h-2z"></path>
    </svg>
  </div>
  <div class="tt-bounce-info__tooltip">
    <p>Alerts users to save their progress before leaving a page</p>
  </div>
</div>`,
  css: `
.tt-bounce-info {
  position: relative;
  display: inline-block;
  margin: 20px;
}

.tt-bounce-info__icon {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
}

.tt-bounce-info__icon svg {
  transition: transform 0.5s ease-in-out;
}

.tt-bounce-info__icon:hover svg {
  transform: rotate(360deg) scale(1.2);
}

.tt-bounce-info__tooltip {
  visibility: hidden;
  width: 200px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  bottom: 125%;
  left: 50%;
  margin-left: -100px;
  opacity: 0;
  transition:
    opacity 0.5s,
    transform 0.5s;
  transform: translateY(10px);
  pointer-events: none;
}

.tt-bounce-info__tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #333 transparent transparent transparent;
}

.tt-bounce-info:hover .tt-bounce-info__tooltip {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
  animation: tt-bounce-info-bounce 0.6s ease;
}

@keyframes tt-bounce-info-bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}
`
}