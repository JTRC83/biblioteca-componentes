export default {
  id: 'loader-loading-bar',
  name: 'Loading Bar Loader',
  category: 'loaders',
  tags: ['loader', 'progress-bar', 'animated', 'css-only', 'loading', 'percentage', 'gradient'],
  author: 'KSAplay',
  html: `<div class="lb-loader">
  <div class="lb-loading-text">
    Loading<span class="lb-dot">.</span><span class="lb-dot">.</span
    ><span class="lb-dot">.</span>
  </div>
  <div class="lb-bar-background">
    <div class="lb-bar">
      <div class="lb-bars-container">
        <div class="lb-bar-stripe"></div>
        <div class="lb-bar-stripe"></div>
        <div class="lb-bar-stripe"></div>
        <div class="lb-bar-stripe"></div>
        <div class="lb-bar-stripe"></div>
        <div class="lb-bar-stripe"></div>
        <div class="lb-bar-stripe"></div>
        <div class="lb-bar-stripe"></div>
        <div class="lb-bar-stripe"></div>
        <div class="lb-bar-stripe"></div>
      </div>
    </div>
  </div>
</div>`,
  css: `
.lb-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
}

.lb-loading-text {
  color: white;
  font-size: 14pt;
  font-weight: 600;
  margin-left: 10px;
}

.lb-dot {
  margin-left: 3px;
  animation: lb-blink 1.5s infinite;
}
.lb-dot:nth-child(2) {
  animation-delay: 0.3s;
}

.lb-dot:nth-child(3) {
  animation-delay: 0.6s;
}

.lb-bar-background {
  --lb-height: 30px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 5px;
  width: 200px;
  height: var(--lb-height);
  background-color: #212121;
  box-shadow: #0c0c0c -2px 2px 4px 0px inset;
  border-radius: calc(var(--lb-height) / 2);
}

.lb-bar {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  --lb-bar-height: 20px;
  width: 0%;
  height: var(--lb-bar-height);
  overflow: hidden;
  background: rgb(222, 74, 15);
  background: linear-gradient(
    0deg,
    rgba(222, 74, 15, 1) 0%,
    rgba(249, 199, 79, 1) 100%
  );
  border-radius: calc(var(--lb-bar-height) / 2);
  animation: lb-loading 4s ease-out infinite;
}

.lb-bars-container {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 18px;
}

.lb-bar-stripe {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  width: 10px;
  height: 45px;
  opacity: 0.3;
  rotate: 45deg;
}

@keyframes lb-loading {
  0% {
    width: 0;
  }
  80% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
}

@keyframes lb-blink {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
`
}