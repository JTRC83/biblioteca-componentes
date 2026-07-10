export default {
  id: 'loader-love-death-robots',
  name: 'Love, Death & Robots Loader',
  category: 'loaders',
  tags: ['loader', 'love-death-robots', 'scroll', 'animated', 'css-only', 'icons', 'cascading'],
  author: 'StealthWorm',
  html: `<div class="ldr-loader">
  <div class="ldr-container">
    <div class="ldr-carousel">
      <div class="ldr-love"></div>
      <div class="ldr-love"></div>
      <div class="ldr-love"></div>
      <div class="ldr-love"></div>
      <div class="ldr-love"></div>
      <div class="ldr-love"></div>
      <div class="ldr-love"></div>
    </div>
  </div>
  <div class="ldr-container">
    <div class="ldr-carousel">
      <div class="ldr-death"></div>
      <div class="ldr-death"></div>
      <div class="ldr-death"></div>
      <div class="ldr-death"></div>
      <div class="ldr-death"></div>
      <div class="ldr-death"></div>
      <div class="ldr-death"></div>
    </div>
  </div>
  <div class="ldr-container">
    <div class="ldr-carousel">
        <div class="ldr-robots"></div>
        <div class="ldr-robots"></div>
        <div class="ldr-robots"></div>
        <div class="ldr-robots"></div>
        <div class="ldr-robots"></div>
        <div class="ldr-robots"></div>
        <div class="ldr-robots"></div>
    </div>
  </div>
</div>`,
  css: `
.ldr-loader {
  display: flex;
  position: relative;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  height: 55px;
  width: 200px;
  overflow: hidden;
}

.ldr-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 200px;
  position: relative;
  align-items: center;
}

.ldr-carousel {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  position: absolute;
  width: 100%;
  transform-origin: center;
  animation-delay: 2s;
}

.ldr-loader .ldr-container:nth-child(3) {
  justify-content: flex-start;
  justify-items: flex-start;
  animation: ldr-scroll-up 4s infinite ease-in-out;
  animation-delay: 3s;
}

.ldr-loader .ldr-container:nth-child(2) {
  justify-content: flex-end;
  justify-items: flex-end;
  animation: ldr-scroll-down 4s infinite ease-in-out;
  animation-delay: 3s;
}

.ldr-loader .ldr-container:nth-child(1) {
  justify-content: flex-end;
  justify-items: flex-end;
  animation: ldr-scroll-down 3s infinite ease-in-out;
  animation-delay: 3s;
}

.ldr-love {
  background: red;
  display: flex;
  width: 30px;
  height: 30px;
  position: relative;
  align-items: center;
  justify-content: center;
  left: 8px;
  margin: 0.8rem 4px;
  transform: rotate(45deg);
  animation-delay: 2s;
}

.ldr-love::before, .ldr-love::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: red;
}

.ldr-love::before {
  left: -16px;
}

.ldr-love::after {
  top: -16px;
}

.ldr-death {
  display: flex;
  width: 100%;
  height: 55px;
  position: relative;
  align-items: center;
  justify-content: center;
  animation: ldr-rotation 3s infinite ease-in-out;
  animation-delay: 1s;
}

.ldr-death:after {
  content: "";
  height: 63px;
  position: absolute;
  border-left: 12px solid red;
  transform: rotate(45deg);
  border-radius: 8px;
  top: -4px;
}

.ldr-death:before {
  content: "";
  height: 60px;
  position: absolute;
  border-left: 12px solid red;
  transform: rotate(-45deg);
}

.ldr-loader:hover {
  animation: none;
}

.ldr-robots {
  display: flex;
  width: 100%;
  height: 55px;
  justify-content: space-between;
  background-color: #ff0000;
  border-radius: 0 8px 8px;
  padding: 8px;
  animation-delay: 5s;
}

.ldr-robots::after {
  content: "";
  width: 12px;
  height: 12px;
  top: 0;
  left: 0;
  background-color: #ffffff;
  border-radius: 50%;
  animation-delay: 2s;
  animation: ldr-blink 0.5s 2 forwards;
}

.ldr-robots::before {
  content: "";
  width: 12px;
  height: 12px;
  top: 0;
  left: 0;
  background-color: #ffffff;
  border-radius: 50%;
  animation-delay: 2s;
  animation: ldr-blink 0.5s 2 forwards;
}

@keyframes ldr-scroll-up {
  0% {
    transform: translateY(0);
    filter: blur(0);
  }

  30% {
    transform: translateY(-150%);
    filter: blur(10px);
  }

  60% {
    transform: translateY(0);
    filter: blur(0px);
  }
}

@keyframes ldr-scroll-down {
  0% {
    transform: translateY(0);
    filter: blur(0);
  }

  30% {
    transform: translateY(150%);
    filter: blur(10px);
  }

  60% {
    transform: translateY(0);
    filter: blur(0px);
  }
}

@keyframes ldr-rotation {
  20%, 100% {
    transform: rotate(180deg);
  }
}

@keyframes ldr-blink {
  0% {
    height: 0;
  }

  20% {
    height: 12px;
  }

  100% {
    height: 12px;
  }
}
`
}