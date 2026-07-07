export default {
  id: 'card-dynamic',
  name: 'Dynamic Hover Card',
  category: 'cards',
  tags: ['card', '3d', 'hover', 'css-only', 'shine', 'glow', 'liquid', 'transform', 'premium'],
  author: 'srinivasaiml',
  html: `<div class="de-container">
  <div class="de-effect">
    <div class="de-inner">
      <div class="de-liquid"></div>
      <div class="de-shine"></div>
      <div class="de-glow"></div>
      <div class="de-content">
        <div class="de-badge">TRENDING</div>
        <div class="de-image" style="--bg-color: #ff6b6b"></div>
        <div class="de-text">
          <p class="de-title">Dynamic Design</p>
          <p class="de-description">Experience interactive hover effects</p>
        </div>
        <div class="de-footer">
          <div class="de-price">$143.99</div>
          <div class="de-button">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path
                fill="currentColor"
                d="M5 12H19M12 5V19"
                stroke="currentColor"
                stroke-width="2"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  css: `
.de-container {
  perspective: 1000px;
}

.de-effect {
  perspective: 1000px;
}

.de-inner {
  --card-bg: #ffffff;
  --card-accent: #ff8a65;
  --card-text: #263238;
  --card-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  width: 220px;
  height: 290px;
  background: var(--card-bg);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  transition:
    transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: var(--card-shadow);
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
  transform-style: preserve-3d;
}

.de-inner:hover {
  transform: rotateY(10deg) rotateX(10deg) translateZ(10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
}

.de-liquid {
  position: absolute;
  top: -80px;
  left: 0;
  width: 300px;
  height: 200px;
  background: #4a90e2;
  border-radius: 50%;
  transform: translateZ(-80px);
  filter: blur(80px);
  transition:
    transform 0.7s cubic-bezier(0.36, 0, 0.66, -0.56),
    opacity 0.3s ease-in-out;
  opacity: 0;
}

.de-inner:hover .de-liquid {
  transform: translateZ(-50px) translateY(30px) translateX(-20px) rotate(-20deg)
    scale(1.2);
  opacity: 0.7;
}

.de-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 30%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0.1) 70%
  );
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}

.de-inner:hover .de-shine {
  opacity: 1;
  animation: de-shine-effect 2s infinite linear;
}

.de-glow {
  position: absolute;
  inset: -15px;
  background: radial-gradient(
    circle at 50% 0%,
    rgba(255, 138, 101, 0.4) 0%,
    rgba(255, 138, 101, 0) 60%
  );
  opacity: 0;
  transition: opacity 0.6s ease-in-out;
}

.de-inner:hover .de-glow {
  opacity: 1;
}

.de-content {
  padding: 1.5em;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  position: relative;
  z-index: 2;
}

.de-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #f9a825;
  color: white;
  padding: 0.3em 0.6em;
  border-radius: 999px;
  font-size: 0.8em;
  font-weight: 600;
  transform: scale(0.7);
  opacity: 0;
  transition: all 0.5s ease 0.2s;
}

.de-inner:hover .de-badge {
  transform: scale(1);
  opacity: 1;
  z-index: 1;
}

.de-image {
  width: 100%;
  height: 120px;
  background: var(--bg-color);
  border-radius: 15px;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.de-inner:hover .de-image {
  transform: translateY(-8px) scale(1.05);
}

.de-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
      circle at 20% 80%,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 40%
    ),
    repeating-linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.05) 0px,
      rgba(255, 255, 255, 0.05) 3px,
      transparent 3px,
      transparent 6px
    );
  opacity: 0.6;
}

.de-text {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.de-title {
  color: var(--card-text);
  font-size: 1.2em;
  margin: 0;
  font-weight: 700;
  transition:
    color 0.4s ease-in-out,
    transform 0.4s ease-in-out;
}

.de-inner:hover .de-title {
  color: var(--card-accent);
  transform: translateX(3px);
}

.de-description {
  color: var(--card-text);
  font-size: 0.85em;
  margin: 0;
  opacity: 0.8;
  transition:
    opacity 0.4s ease-in-out,
    transform 0.4s ease-in-out;
}

.de-inner:hover .de-description {
  opacity: 1;
  transform: translateX(3px);
}

.de-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.de-price {
  color: var(--card-text);
  font-weight: 700;
  font-size: 1.1em;
  transition:
    color 0.4s ease-in-out,
    transform 0.4s ease-in-out;
}

.de-inner:hover .de-price {
  color: var(--card-accent);
  transform: translateX(3px);
}

.de-button {
  width: 32px;
  height: 32px;
  background: var(--card-accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition:
    transform 0.4s ease-in-out,
    box-shadow 0.4s ease-in-out;
  transform: scale(0.85);
}

.de-inner:hover .de-button {
  transform: scale(1);
  box-shadow: 0 0 0 5px rgba(255, 138, 101, 0.3);
}

.de-inner:hover .de-button svg {
  animation: de-pulse-button 1.5s infinite;
}

@keyframes de-shine-effect {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}

@keyframes de-pulse-button {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
`
}