export default {
  id: 'card-result-summary',
  name: 'Result Summary',
  category: 'cards',
  tags: ['card', 'result', 'summary', 'confetti', 'animated', 'gradient', 'css-only', 'celebration'],
  author: 'sabbircoder07',
  html: `<div class="rs-container">
      <div class="rs-confetti">
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
        <div class="rs-piece"></div>
      </div>
      <div class="rs-result">
        <div class="rs-heading-tertiary">Your Result</div>
        <div class="rs-box">
          <div class="rs-heading-primary">78</div>
          <p class="rs-of">of 100</p>
        </div>
        <div class="rs-text-box">
          <div class="rs-heading-secondary">excellent</div>
          <p class="rs-paragraph">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div class="rs-cta">
          <button class="rs-btn">Continue
        </button>
        </div>
      </div>
    </div>`,
  css: `
.rs-container {
  font-family: "Hanken Grotesk", sans-serif;
  display: flex;
  width: 320px;
  border-radius: 30px;
  box-shadow: 10px 20px 20px rgba(120, 87, 255, 0.3);
  backface-visibility: hidden;
  isolation: isolate;
}

.rs-heading-primary,
.rs-heading-secondary,
.rs-heading-tertiary {
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.rs-heading-primary {
  font-size: 36px;
  font-weight: 600;
  background-image: linear-gradient(to right, #f7bb97, #dd5e89);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: scale(1.6);
}

.rs-heading-secondary {
  font-size: 24px;
  font-weight: 600;
  margin-top: 20px;
  letter-spacing: 2px;
}

.rs-heading-tertiary {
  font-size: 20px;
  font-weight: 500;
  color: hsl(221, 100%, 96%);
}

.rs-paragraph {
  font-size: 17px;
  line-height: 1.4;
  color: hsl(221, 100%, 96%);
}

.rs-text-box {
  width: 100%;
}

.rs-result {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 30px;
  background-image: linear-gradient(to bottom, #734b6d, #42275a);
  animation: rs-gradient 9s infinite alternate linear;
}

.rs-box {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-image: linear-gradient(-45deg, #ef629f, #42275a);
  background-color: #56ab2f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: rs-gradient 9s linear infinite;
}

.rs-of {
  margin-top: -8px;
  font-size: 16px;
  font-weight: 400;
  color: hsl(241, 100%, 89%);
}

.rs-btn {
  width: 240px;
  padding: 10px;
  color: #ffffff;
  background-image: linear-gradient(to right, #aa076b, #61045f);
  border: none;
  border-radius: 100px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
  cursor: pointer;
  margin: 20px 0 2px 0;
  transition: all 0.3s;
}

.rs-btn:hover {
  transform: translateY(5px);
  background-image: linear-gradient(to left, #aa076b, #61045f);
}

@keyframes rs-gradient {
  0% {
    background-position: 0% 50%;
    background-image: linear-gradient(-45deg, #ef629f, #42275a);
  }

  50% {
    background-position: 100% 50%;
    background-image: linear-gradient(to bottom, #aa076b, #61045f);
  }

  100% {
    background-position: 0% 50%;
    background-image: linear-gradient(to top, #ef629f, #42275a);
  }
}

.rs-confetti {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 300px;
  height: 60%;
  overflow: hidden;
  z-index: 1000;
}

.rs-piece {
  position: absolute;
  width: 10px;
  height: 20px;
  background-color: hsl(39, 100%, 56%);
  top: 0;
  opacity: 0;
  animation: rs-rain 3000ms infinite linear;
}

.rs-piece:nth-child(1) { left: 7%; transform: rotate(-10deg); animation-delay: 182ms; animation-duration: 2000ms; }
.rs-piece:nth-child(2) { left: 14%; transform: rotate(20deg); animation-delay: 161ms; animation-duration: 2076ms; }
.rs-piece:nth-child(3) { left: 21%; transform: rotate(-51deg); animation-delay: 481ms; animation-duration: 2103ms; }
.rs-piece:nth-child(4) { left: 28%; transform: rotate(61deg); animation-delay: 334ms; animation-duration: 1008ms; }
.rs-piece:nth-child(5) { left: 35%; transform: rotate(-52deg); animation-delay: 302ms; animation-duration: 1776ms; }
.rs-piece:nth-child(6) { left: 42%; transform: rotate(38deg); animation-delay: 180ms; animation-duration: 1168ms; }
.rs-piece:nth-child(7) { left: 49%; transform: rotate(11deg); animation-delay: 395ms; animation-duration: 1200ms; }
.rs-piece:nth-child(8) { left: 56%; transform: rotate(49deg); animation-delay: 14ms; animation-duration: 1887ms; }
.rs-piece:nth-child(9) { left: 63%; transform: rotate(-72deg); animation-delay: 149ms; animation-duration: 1805ms; }
.rs-piece:nth-child(10) { left: 70%; transform: rotate(10deg); animation-delay: 351ms; animation-duration: 2059ms; }
.rs-piece:nth-child(11) { left: 77%; transform: rotate(4deg); animation-delay: 307ms; animation-duration: 1132ms; }
.rs-piece:nth-child(12) { left: 84%; transform: rotate(42deg); animation-delay: 464ms; animation-duration: 1776ms; }
.rs-piece:nth-child(13) { left: 91%; transform: rotate(-72deg); animation-delay: 429ms; animation-duration: 1818ms; }
.rs-piece:nth-child(14) { left: 94%; transform: rotate(-72deg); animation-delay: 429ms; animation-duration: 818ms; }
.rs-piece:nth-child(15) { left: 96%; transform: rotate(-72deg); animation-delay: 429ms; animation-duration: 2818ms; }
.rs-piece:nth-child(16) { left: 98%; transform: rotate(-72deg); animation-delay: 429ms; animation-duration: 2818ms; }
.rs-piece:nth-child(17) { left: 50%; transform: rotate(-72deg); animation-delay: 429ms; animation-duration: 2818ms; }
.rs-piece:nth-child(18) { left: 60%; transform: rotate(-72deg); animation-delay: 429ms; animation-duration: 1818ms; }

.rs-piece:nth-child(odd) { background-color: hsl(0, 100%, 67%); }
.rs-piece:nth-child(even) { z-index: 1; }
.rs-piece:nth-child(4n) { width: 6px; height: 14px; animation-duration: 4000ms; background-color: #c33764; }
.rs-piece:nth-child(5n) { width: 3px; height: 10px; animation-duration: 4000ms; background-color: #b06ab3; }
.rs-piece:nth-child(3n) { width: 4px; height: 12px; animation-duration: 2500ms; animation-delay: 3000ms; background-color: #dd2476; }
.rs-piece:nth-child(3n-7) { background-color: hsl(166, 100%, 37%); }

@keyframes rs-rain {
  from {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    transform: translateY(250px);
  }
}
`
}