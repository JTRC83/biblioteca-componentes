export default {
  id: 'card-cyber',
  name: 'Cyber Card',
  category: 'cards',
  tags: ['card', '3d', 'interactive', 'css-only', 'cyber', 'grid', 'perspective', 'glow', 'particles', 'scan-line'],
  author: '00Kubi',
  html: `<div class="cyber-card cyber-noselect">
  <div class="cyber-canvas">
    <div class="cyber-tracker cyber-tr-1"></div>
    <div class="cyber-tracker cyber-tr-2"></div>
    <div class="cyber-tracker cyber-tr-3"></div>
    <div class="cyber-tracker cyber-tr-4"></div>
    <div class="cyber-tracker cyber-tr-5"></div>
    <div class="cyber-tracker cyber-tr-6"></div>
    <div class="cyber-tracker cyber-tr-7"></div>
    <div class="cyber-tracker cyber-tr-8"></div>
    <div class="cyber-tracker cyber-tr-9"></div>
    <div id="cyber-card-id">
      <div class="cyber-content">
        <div class="cyber-glare"></div>
        <div class="cyber-circuits">
          <span></span><span></span><span></span><span></span>
        </div>
        <p id="cyber-prompt-id">HOVER ME</p>
        <div class="cyber-title">CYBER<br />CARD</div>
        <div class="cyber-glow-wrap">
          <div class="cyber-glow-1"></div>
          <div class="cyber-glow-2"></div>
          <div class="cyber-glow-3"></div>
        </div>
        <div class="cyber-subtitle">
          <span>INTERACTIVE</span>
          <span class="cyber-highlight">3D EFFECT</span>
        </div>
        <div class="cyber-particles">
          <span></span><span></span><span></span> <span></span><span></span
          ><span></span>
        </div>
        <div class="cyber-corners">
          <span></span><span></span><span></span><span></span>
        </div>
        <div class="cyber-scan"></div>
      </div>
    </div>
  </div>
</div>`,
  css: `
.cyber-card {
  position: relative;
  width: 190px;
  height: 254px;
  transition: 200ms;
  isolation: isolate;
}

.cyber-card:active {
  width: 180px;
  height: 245px;
}

#cyber-card-id {
  position: absolute;
  inset: 0;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  transition: 700ms;
  background: linear-gradient(45deg, #1a1a1a, #262626);
  border: 2px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  box-shadow:
    0 0 20px rgba(0, 0, 0, 0.3),
    inset 0 0 20px rgba(0, 0, 0, 0.2);
}

.cyber-content {
  position: relative;
  width: 100%;
  height: 100%;
}

#cyber-prompt-id {
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  transition: 300ms ease-in-out;
  position: absolute;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.cyber-title {
  opacity: 0;
  transition: 300ms ease-in-out;
  position: absolute;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 4px;
  text-align: center;
  width: 100%;
  padding-top: 20px;
  background: linear-gradient(45deg, #00ffaa, #00a2ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 15px rgba(0, 255, 170, 0.3));
  text-shadow:
    0 0 10px rgba(92, 103, 255, 0.5),
    0 0 20px rgba(92, 103, 255, 0.3);
}

.cyber-subtitle {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  letter-spacing: 2px;
  transform: translateY(30px);
  color: rgba(255, 255, 255, 0.6);
}

.cyber-highlight {
  color: #00ffaa;
  margin-left: 5px;
  background: linear-gradient(90deg, #5c67ff, #ad51ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.cyber-glow-wrap {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cyber-glow-1,
.cyber-glow-2,
.cyber-glow-3 {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(0, 255, 170, 0.3) 0%,
    rgba(0, 255, 170, 0) 70%
  );
  filter: blur(15px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cyber-glow-1 {
  top: -20px;
  left: -20px;
}
.cyber-glow-2 {
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
}
.cyber-glow-3 {
  bottom: -20px;
  left: 30%;
}

.cyber-particles span {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #00ffaa;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Hover effects */
.cyber-tracker:hover ~ #cyber-card-id .cyber-title {
  opacity: 1;
  transform: translateY(-10px);
}

.cyber-tracker:hover ~ #cyber-card-id .cyber-glow-wrap div {
  opacity: 1;
}

.cyber-tracker:hover ~ #cyber-card-id .cyber-particles span {
  animation: cyber-particle-float 2s infinite;
}

@keyframes cyber-particle-float {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(calc(var(--x, 0) * 30px), calc(var(--y, 0) * 30px));
    opacity: 0;
  }
}

/* Particle positions */
.cyber-particles span:nth-child(1) {
  --x: 1;
  --y: -1;
  top: 40%;
  left: 20%;
}
.cyber-particles span:nth-child(2) {
  --x: -1;
  --y: -1;
  top: 60%;
  right: 20%;
}
.cyber-particles span:nth-child(3) {
  --x: 0.5;
  --y: 1;
  top: 20%;
  left: 40%;
}
.cyber-particles span:nth-child(4) {
  --x: -0.5;
  --y: 1;
  top: 80%;
  right: 40%;
}
.cyber-particles span:nth-child(5) {
  --x: 1;
  --y: 0.5;
  top: 30%;
  left: 60%;
}
.cyber-particles span:nth-child(6) {
  --x: -1;
  --y: 0.5;
  top: 70%;
  right: 60%;
}

#cyber-card-id::before {
  content: "";
  background: radial-gradient(
    circle at center,
    rgba(0, 255, 170, 0.1) 0%,
    rgba(0, 162, 255, 0.05) 50%,
    transparent 100%
  );
  filter: blur(20px);
  opacity: 0;
  width: 150%;
  height: 150%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
}

.cyber-tracker:hover ~ #cyber-card-id::before {
  opacity: 1;
}

.cyber-tracker {
  position: absolute;
  z-index: 200;
  width: 100%;
  height: 100%;
}

.cyber-tracker:hover {
  cursor: pointer;
}

.cyber-tracker:hover ~ #cyber-card-id #cyber-prompt-id {
  opacity: 0;
}

.cyber-tracker:hover ~ #cyber-card-id {
  transition: 300ms;
  filter: brightness(1.1);
}

.cyber-card:hover #cyber-card-id::before {
  transition: 200ms;
  content: "";
  opacity: 80%;
}

.cyber-canvas {
  perspective: 800px;
  inset: 0;
  z-index: 200;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "cyber-tr-1 cyber-tr-2 cyber-tr-3 cyber-tr-4 cyber-tr-5"
    "cyber-tr-6 cyber-tr-7 cyber-tr-8 cyber-tr-9 cyber-tr-10"
    "cyber-tr-11 cyber-tr-12 cyber-tr-13 cyber-tr-14 cyber-tr-15"
    "cyber-tr-16 cyber-tr-17 cyber-tr-18 cyber-tr-19 cyber-tr-20"
    "cyber-tr-21 cyber-tr-22 cyber-tr-23 cyber-tr-24 cyber-tr-25";
}

.cyber-tr-1  { grid-area: cyber-tr-1;  }
.cyber-tr-2  { grid-area: cyber-tr-2;  }
.cyber-tr-3  { grid-area: cyber-tr-3;  }
.cyber-tr-4  { grid-area: cyber-tr-4;  }
.cyber-tr-5  { grid-area: cyber-tr-5;  }
.cyber-tr-6  { grid-area: cyber-tr-6;  }
.cyber-tr-7  { grid-area: cyber-tr-7;  }
.cyber-tr-8  { grid-area: cyber-tr-8;  }
.cyber-tr-9  { grid-area: cyber-tr-9;  }
.cyber-tr-10 { grid-area: cyber-tr-10; }
.cyber-tr-11 { grid-area: cyber-tr-11; }
.cyber-tr-12 { grid-area: cyber-tr-12; }
.cyber-tr-13 { grid-area: cyber-tr-13; }
.cyber-tr-14 { grid-area: cyber-tr-14; }
.cyber-tr-15 { grid-area: cyber-tr-15; }
.cyber-tr-16 { grid-area: cyber-tr-16; }
.cyber-tr-17 { grid-area: cyber-tr-17; }
.cyber-tr-18 { grid-area: cyber-tr-18; }
.cyber-tr-19 { grid-area: cyber-tr-19; }
.cyber-tr-20 { grid-area: cyber-tr-20; }
.cyber-tr-21 { grid-area: cyber-tr-21; }
.cyber-tr-22 { grid-area: cyber-tr-22; }
.cyber-tr-23 { grid-area: cyber-tr-23; }
.cyber-tr-24 { grid-area: cyber-tr-24; }
.cyber-tr-25 { grid-area: cyber-tr-25; }

.cyber-tr-1:hover  ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg); }
.cyber-tr-2:hover  ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(-5deg)  rotateZ(0deg); }
.cyber-tr-3:hover  ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(0deg)   rotateZ(0deg); }
.cyber-tr-4:hover  ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(5deg)   rotateZ(0deg); }
.cyber-tr-5:hover  ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(20deg) rotateY(10deg)  rotateZ(0deg); }
.cyber-tr-6:hover  ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg); }
.cyber-tr-7:hover  ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(-5deg)  rotateZ(0deg); }
.cyber-tr-8:hover  ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(0deg)   rotateZ(0deg); }
.cyber-tr-9:hover  ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(5deg)   rotateZ(0deg); }
.cyber-tr-10:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(10deg) rotateY(10deg)  rotateZ(0deg); }
.cyber-tr-11:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(0deg)  rotateY(-10deg) rotateZ(0deg); }
.cyber-tr-12:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(0deg)  rotateY(-5deg)  rotateZ(0deg); }
.cyber-tr-13:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(0deg)  rotateY(0deg)   rotateZ(0deg); }
.cyber-tr-14:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(0deg)  rotateY(5deg)   rotateZ(0deg); }
.cyber-tr-15:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(0deg)  rotateY(10deg)  rotateZ(0deg); }
.cyber-tr-16:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg); }
.cyber-tr-17:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(-5deg)  rotateZ(0deg); }
.cyber-tr-18:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(0deg)   rotateZ(0deg); }
.cyber-tr-19:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(5deg)   rotateZ(0deg); }
.cyber-tr-20:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(-10deg) rotateY(10deg)  rotateZ(0deg); }
.cyber-tr-21:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg); }
.cyber-tr-22:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(-5deg)  rotateZ(0deg); }
.cyber-tr-23:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(0deg)   rotateZ(0deg); }
.cyber-tr-24:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(5deg)   rotateZ(0deg); }
.cyber-tr-25:hover ~ #cyber-card-id { transition: 125ms ease-in-out; transform: rotateX(-20deg) rotateY(10deg)  rotateZ(0deg); }

.cyber-noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.cyber-glare {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    125deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.05) 45%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0;
  transition: opacity 300ms;
}

.cyber-circuits span {
  position: absolute;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(92, 103, 255, 0.2),
    transparent
  );
}

.cyber-circuits span:nth-child(1) {
  top: 20%;
  left: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transform-origin: left;
  animation: cyber-line-grow 3s linear infinite;
}

.cyber-circuits span:nth-child(2) {
  top: 40%;
  right: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transform-origin: right;
  animation: cyber-line-grow 3s linear infinite 1s;
}

.cyber-circuits span:nth-child(3) {
  top: 60%;
  left: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transform-origin: left;
  animation: cyber-line-grow 3s linear infinite 2s;
}

.cyber-circuits span:nth-child(4) {
  top: 80%;
  right: 0;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  transform-origin: right;
  animation: cyber-line-grow 3s linear infinite 1.5s;
}

.cyber-corners span {
  position: absolute;
  width: 15px;
  height: 15px;
  border: 2px solid rgba(92, 103, 255, 0.3);
}

.cyber-corners span:nth-child(1) {
  top: 10px;
  left: 10px;
  border-right: 0;
  border-bottom: 0;
}

.cyber-corners span:nth-child(2) {
  top: 10px;
  right: 10px;
  border-left: 0;
  border-bottom: 0;
}

.cyber-corners span:nth-child(3) {
  bottom: 10px;
  left: 10px;
  border-right: 0;
  border-top: 0;
}

.cyber-corners span:nth-child(4) {
  bottom: 10px;
  right: 10px;
  border-left: 0;
  border-top: 0;
}

.cyber-scan {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(92, 103, 255, 0.1),
    transparent
  );
  transform: translateY(-100%);
  animation: cyber-scan-move 2s linear infinite;
}

@keyframes cyber-line-grow {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
  100% {
    transform: scaleX(0);
    opacity: 0;
  }
}

@keyframes cyber-scan-move {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

#cyber-card-id:hover .cyber-glare {
  opacity: 1;
}

.cyber-corners span {
  transition: all 0.3s ease;
}

#cyber-card-id:hover .cyber-corners span {
  border-color: rgba(92, 103, 255, 0.8);
  box-shadow: 0 0 10px rgba(92, 103, 255, 0.5);
}
`
}
