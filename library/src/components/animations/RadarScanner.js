export default {
  id: 'anim-radar',
  name: 'Radar Scanner',
  category: 'animations',
  tags: ['radar', 'scanner', 'animated', 'css-only', 'circle', 'glow', 'sweep', 'hud'],
  author: 'escannord',
  html: `<div class="rd-container">
  <div class="rd-data">
    <p>34° 36' 30″ S; 58° 22' 16″ O</p>
  </div>
  <div class="rd-card">
    <div class="rd-circle"></div>
    <div class="rd-dot"></div>
    <div class="rd-dot2"></div>
  </div>
</div>`,
  css: `
.rd-container {
  width: 280px;
  height: 380px;
  background-color: #151716;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  filter: hue-rotate(10deg);
  color: #2fbb39;
  gap: 20px;
}

.rd-data {
  margin-top: 25px;
  border: 2px solid;
  padding: 15px;
  border-radius: 5px;
  background: #000000;
}

.rd-data::after {
  background: #000000;
  content: "WIND - 54,3";
  position: absolute;
  bottom: 5%;
  right: 5%;
  border: 2px solid;
  padding: 3px;
  border-radius: 5px;
  font-size: 0.7em;
}

.rd-data::before {
  content: "DEPT - 600";
  position: absolute;
  bottom: 5%;
  left: 5%;
  border: 2px solid;
  padding: 3px;
  border-radius: 5px;
  font-size: 0.7em;
  background: #000000;
}

.rd-card {
  width: 200px;
  height: 200px;
  background: #000000;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #18d322;
  overflow: hidden;
}

.rd-card::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 200px;
  left: 50%;
  top: 50%;
  background-color: #18d322;
  animation: rd-rotate 3s linear infinite;
  z-index: 6;
  transform-origin: 0 0;
}

.rd-card::before {
  content: "";
  position: absolute;
  width: 0px;
  height: 200px;
  left: 50%;
  top: 50%;
  transform: rotate(-4deg);
  background-color: #18d322;
  animation: rd-rotate 3s linear infinite;
  box-shadow: 0 0 10px 10px #2fbb39, 0 0 70px 10px #2fbb39;
  z-index: 6;
  transform-origin: 0 0;
}

.rd-circle {
  width: 100px;
  height: 100px;
  border: 2px solid #18d322;
  border-radius: 50%;
}

.rd-circle::before {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #18d322;
  border-radius: 50%;
}

.rd-circle::after {
  content: "";
  position: absolute;
  width: 150px;
  height: 150px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #18d322;
  border-radius: 50%;
}

.rd-dot {
  width: 4px;
  height: 4px;
  top: 30%;
  background-color: #18d322;
  border-radius: 50%;
  position: absolute;
  animation: rd-doted 1.5s ease infinite;
}

.rd-dot2 {
  width: 4px;
  height: 4px;
  top: 80%;
  right: 30%;
  background-color: #18d322;
  border-radius: 50%;
  position: absolute;
  animation: rd-doted 1.5s 1.2s ease infinite;
}

@keyframes rd-rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rd-doted {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 10px 5px rgba(24, 211, 33, 0.3),
      0 0 10px 10px rgba(24, 211, 33, 0.3);
  }

  60% {
    transform: scale(0.95);
    box-shadow: 0 0 10px 5px rgba(24, 211, 33, 0.3),
      0 0 10px 10px rgba(24, 211, 33, 0.3);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(24, 211, 33, 0.7), 0 0 0 0 rgba(24, 211, 33, 0.5),
      0 0 0 0 rgba(24, 211, 33, 0.3);
    opacity: 0;
  }
}
`
}