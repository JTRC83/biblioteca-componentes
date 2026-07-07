export default {
  id: 'anim-flip-counter',
  name: 'Flip Counter',
  category: 'animations',
  tags: ['counter', 'flip', '3d', 'animated', 'css-only', 'numbers', 'clock', 'perspective'],
  author: 'whoisyourdeadie',
  html: `<div class="fc-container">
  <div class="fc-nums fc-ten">
    <div class="fc-num" data-num="0" data-num-next="1"></div>
    <div class="fc-num" data-num="1" data-num-next="2"></div>
    <div class="fc-num" data-num="2" data-num-next="3"></div>
    <div class="fc-num" data-num="3" data-num-next="4"></div>
    <div class="fc-num" data-num="4" data-num-next="5"></div>
    <div class="fc-num" data-num="5" data-num-next="6"></div>
    <div class="fc-num" data-num="6" data-num-next="7"></div>
    <div class="fc-num" data-num="7" data-num-next="8"></div>
    <div class="fc-num" data-num="8" data-num-next="9"></div>
    <div class="fc-num" data-num="9" data-num-next="0"></div>
  </div>

  <div class="fc-nums fc-one">
    <div class="fc-num" data-num="0" data-num-next="1"></div>
    <div class="fc-num" data-num="1" data-num-next="2"></div>
    <div class="fc-num" data-num="2" data-num-next="3"></div>
    <div class="fc-num" data-num="3" data-num-next="4"></div>
    <div class="fc-num" data-num="4" data-num-next="5"></div>
    <div class="fc-num" data-num="5" data-num-next="6"></div>
    <div class="fc-num" data-num="6" data-num-next="7"></div>
    <div class="fc-num" data-num="7" data-num-next="8"></div>
    <div class="fc-num" data-num="8" data-num-next="9"></div>
    <div class="fc-num" data-num="9" data-num-next="0"></div>
  </div>
</div>`,
  css: `
.fc-container {
  height: 200px;
  position: relative;
  text-align: center;
  display: flex;
  gap: 20px;
}

.fc-nums {
  box-shadow:
    8px 8px 15px rgba(42, 42, 42, 0.2),
    -8px -8px 15px rgba(255, 255, 255, 0.5);
  display: inline-block;
  height: 200px;
  perspective: 1000px;
  position: relative;
  width: 140px;
  border-radius: 20px 20px 20px 20px;
}

.fc-nums:before {
  border-bottom: 1px solid #d2d2d2;
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  transform: translate3d(0, -1px, 0);
  top: 50%;
  width: 100%;
  z-index: 1000;
}

.fc-nums:after {
  backface-visibility: hidden;
  background: #e0e0e0;
  border-radius: 0 0 20px 20px;
  bottom: 0;
  color: #333;
  content: "0";
  display: block;
  font-size: 145px;
  height: calc(50% - 1px);
  left: 0;
  line-height: 0;
  overflow: hidden;
  position: absolute;
  text-align: center;
  text-shadow:
    0 1px 1px rgba(0, 0, 0, 0.05),
    0 2px 4px rgba(0, 0, 0, 0.08);
  width: 100%;
  z-index: 0;
}

.fc-num {
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  border-radius: 20px;
  font-size: 145px;
  height: 100%;
  left: 0;
  position: absolute;
  transform: rotateX(0);
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  width: 100%;
}

.fc-num:before,
.fc-num:after {
  backface-visibility: hidden;
  color: #333;
  display: block;
  height: 50%;
  left: 0;
  overflow: hidden;
  position: absolute;
  text-align: center;
  text-shadow:
    0 1px 1px rgba(0, 0, 0, 0.05),
    0 2px 4px rgba(0, 0, 0, 0.08);
  width: 100%;
}

.fc-num:before {
  background: #e0e0e0;
  border-radius: 20px 20px 0 0;
  content: attr(data-num);
  line-height: 1.38;
  top: 0;
  z-index: 1;
}

.fc-num:after {
  background: #e0e0e0;
  border-bottom: 1px solid #d2d2d2;
  border-radius: 0 0 20px 20px;
  content: attr(data-num-next);
  height: calc(50% - 1px);
  line-height: 0;
  top: 0;
  transform: rotateX(180deg);
}
.fc-ten .fc-num:nth-of-type(1) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 0s;
  z-index: 10;
}
.fc-ten .fc-num:nth-of-type(2) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 1s;
  z-index: 9;
}
.fc-ten .fc-num:nth-of-type(3) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 2s;
  z-index: 8;
}
.fc-ten .fc-num:nth-of-type(4) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 3s;
  z-index: 7;
}
.fc-ten .fc-num:nth-of-type(5) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 4s;
  z-index: 6;
}
.fc-ten .fc-num:nth-of-type(6) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 5s;
  z-index: 5;
}
.fc-ten .fc-num:nth-of-type(7) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 6s;
  z-index: 4;
}
.fc-ten .fc-num:nth-of-type(8) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 7s;
  z-index: 3;
}
.fc-ten .fc-num:nth-of-type(9) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 8s;
  z-index: 2;
}
.fc-ten .fc-num:nth-of-type(10) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 9s;
  z-index: 1;
}

.fc-one .fc-num:nth-of-type(1) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 0s;
  z-index: 10;
}
.fc-one .fc-num:nth-of-type(2) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 1s;
  z-index: 9;
}
.fc-one .fc-num:nth-of-type(3) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 2s;
  z-index: 8;
}
.fc-one .fc-num:nth-of-type(4) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 3s;
  z-index: 7;
}
.fc-one .fc-num:nth-of-type(5) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 4s;
  z-index: 6;
}
.fc-one .fc-num:nth-of-type(6) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 5s;
  z-index: 5;
}
.fc-one .fc-num:nth-of-type(7) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 6s;
  z-index: 4;
}
.fc-one .fc-num:nth-of-type(8) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 7s;
  z-index: 3;
}
.fc-one .fc-num:nth-of-type(9) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 8s;
  z-index: 2;
}
.fc-one .fc-num:nth-of-type(10) {
  animation: fc-num-one 10s infinite ease-in;
  animation-delay: 9s;
  z-index: 1;
}

@keyframes fc-num-one {
  0% {
    transform: rotateX(0);
    z-index: 50;
  }
  10% {
    transform: rotateX(-180deg);
    z-index: 50;
  }
  90% {
    transform: rotateX(-180deg);
    z-index: 1;
  }
  90.0001% {
    transform: rotateX(0);
  }
  100% {
    transform: rotateX(0);
  }
}

@keyframes fc-num-ten {
  0% {
    transform: rotateX(0);
    z-index: 50;
  }
  1% {
    transform: rotateX(-180deg);
    z-index: 50;
  }
  90% {
    transform: rotateX(-180deg);
    z-index: 1;
  }
  90.0001% {
    transform: rotateX(0);
  }
  100% {
    transform: rotateX(0);
  }
}
`
}