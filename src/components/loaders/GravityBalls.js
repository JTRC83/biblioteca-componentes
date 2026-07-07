export default {
  id: 'loader-gravity-balls',
  name: 'Gravity Balls Loader',
  category: 'loaders',
  tags: ['loader', 'balls', 'gravity', 'animated', 'css-only', 'cascading', 'pendulum', 'balls'],
  author: 'Praashoo7',
  html: `<div class="gb-main">
  <div class="gb-up">
    <div class="gb-loaders">
      <div class="gb-loader"></div>
      <div class="gb-loader"></div>
      <div class="gb-loader"></div>
      <div class="gb-loader"></div>
      <div class="gb-loader"></div>
      <div class="gb-loader"></div>
      <div class="gb-loader"></div>
      <div class="gb-loader"></div>
      <div class="gb-loader"></div>
      <div class="gb-loader"></div>
    </div>
    <div class="gb-loadersB">
      <div class="gb-loaderA">
        <div class="gb-ball0"></div>
      </div>
      <div class="gb-loaderA">
        <div class="gb-ball1"></div>
      </div>
      <div class="gb-loaderA">
        <div class="gb-ball2"></div>
      </div>
      <div class="gb-loaderA">
        <div class="gb-ball3"></div>
      </div>
      <div class="gb-loaderA">
        <div class="gb-ball4"></div>
      </div>
      <div class="gb-loaderA">
        <div class="gb-ball5"></div>
      </div>
      <div class="gb-loaderA">
        <div class="gb-ball6"></div>
      </div>
      <div class="gb-loaderA">
        <div class="gb-ball7"></div>
      </div>
      <div class="gb-loaderA">
        <div class="gb-ball8"></div>
      </div>
    </div>
  </div>
</div>`,
  css: `
.gb-main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gb-loaders,
.gb-loadersB {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gb-loader {
  position: absolute;
  width: 1.15em;
  height: 13em;
  border-radius: 50px;
  background: #e0e0e0;
}
.gb-loader:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 1.15em;
  height: 5em;
  background: #e0e0e0;
  border-radius: 50px;
  border: 1px solid #e2e2e2;
  box-shadow:
    inset 5px 5px 15px #d3d2d2ab,
    inset -5px -5px 15px #e9e9e9ab;
  mask-image: linear-gradient(
    to bottom,
    black calc(100% - 48px),
    transparent 100%
  );
}
.gb-loader::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 1.15em;
  height: 4.5em;
  background: #e0e0e0;
  border-radius: 50px;
  border: 1px solid #e2e2e2;
  box-shadow:
    inset 5px 5px 15px #d3d2d2ab,
    inset -5px -5px 15px #e9e9e9ab;
  mask-image: linear-gradient(
    to top,
    black calc(100% - 48px),
    transparent 100%
  );
}
.gb-loaderA {
  position: absolute;
  width: 1.15em;
  height: 13em;
  border-radius: 50px;
  background: transparent;
}
.gb-ball0,
.gb-ball1,
.gb-ball2,
.gb-ball3,
.gb-ball4,
.gb-ball5,
.gb-ball6,
.gb-ball7,
.gb-ball8,
.gb-ball9 {
  width: 1.15em;
  height: 1.15em;
  box-shadow:
    rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -15px 15px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -40px 20px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px,
    0px -1px 15px -8px rgba(0, 0, 0, 0.09);
  border-radius: 50%;
  transition: transform 800ms cubic-bezier(1, -0.4, 0, 1.4);
  background-color: rgb(232, 232, 232, 1);
  animation: 3.63s gb-move ease-in-out infinite;
}
.gb-loader:nth-child(2) {
  transform: rotate(20deg);
}
.gb-loader:nth-child(3) {
  transform: rotate(40deg);
}
.gb-loader:nth-child(4) {
  transform: rotate(60deg);
}
.gb-loader:nth-child(5) {
  transform: rotate(80deg);
}
.gb-loader:nth-child(6) {
  transform: rotate(100deg);
}
.gb-loader:nth-child(7) {
  transform: rotate(120deg);
}
.gb-loader:nth-child(8) {
  transform: rotate(140deg);
}
.gb-loader:nth-child(9) {
  transform: rotate(160deg);
}

.gb-loaderA:nth-child(2) {
  transform: rotate(20deg);
}
.gb-loaderA:nth-child(3) {
  transform: rotate(40deg);
}
.gb-loaderA:nth-child(4) {
  transform: rotate(60deg);
}
.gb-loaderA:nth-child(5) {
  transform: rotate(80deg);
}
.gb-loaderA:nth-child(6) {
  transform: rotate(100deg);
}
.gb-loaderA:nth-child(7) {
  transform: rotate(120deg);
}
.gb-loaderA:nth-child(8) {
  transform: rotate(140deg);
}
.gb-loaderA:nth-child(9) {
  transform: rotate(160deg);
}

.gb-ball1 {
  animation-delay: 0.2s;
}
.gb-ball2 {
  animation-delay: 0.4s;
}
.gb-ball3 {
  animation-delay: 0.6s;
}
.gb-ball4 {
  animation-delay: 0.8s;
}
.gb-ball5 {
  animation-delay: 1s;
}
.gb-ball6 {
  animation-delay: 1.2s;
}
.gb-ball7 {
  animation-delay: 1.4s;
}
.gb-ball8 {
  animation-delay: 1.6s;
}
.gb-ball9 {
  animation-delay: 1.8s;
}

@keyframes gb-move {
  0% {
    transform: translateY(0em);
  }
  50% {
    transform: translateY(12em);
  }
  100% {
    transform: translateY(0em);
  }
}
`
}