export default {
  id: 'btn-order-delivery',
  name: 'Order Delivery',
  category: 'buttons',
  tags: ['animated', 'order', 'delivery', 'car', 'css-only'],
  author: 'yeisonordonez',
  html: `<div class="order-wrap">
  <div class="container">
    <label class="btn">
      <input type="checkbox" class="order-trigger" />
      <div class="stars"></div>
      <div class="background"></div>
      <span class="order">Place Order</span>
      <span class="done">Done</span>
      <div class="car-container">
        <div class="car-part1"></div>
        <div class="car-part2"></div>
        <div class="wheels"></div>
        <div class="details"></div>
      </div>
      <div class="package-container">
        <div class="package"></div>
        <div class="package-details"></div>
        <span class="package-text">⚠️</span>
      </div>
    </label>
  </div>
</div>`,
  css: `
.order-wrap {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  position: absolute;
  width: 500px;
  height: 500px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.42);
  transform-origin: center center;
}

.btn {
  position: absolute;
  width: 40%;
  height: 12%;
  background: linear-gradient(
    to bottom,
    rgb(0, 4, 218) 10%,
    rgb(24, 115, 252) 50%,
    rgb(0, 162, 255) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  overflow: hidden;
  user-select: none;
  border: 2px solid #0313fc;
  transition: 0.5s;
  font-family: inherit;
  cursor: pointer;
}

.btn:hover {
  transform: scale(1.1);
}

.stars {
  position: absolute;
  width: 2px;
  height: 2px;
  background-color: white;
  z-index: 3;
  border-radius: 50%;
  transform: translate(-20px, -20px);
  box-shadow:
    5px 10px white,
    10px -2px white,
    20px 0px white,
    30px -5px white,
    -10px -5px white,
    -15px 2px white,
    -35px 0px white,
    5px 10px white,
    10px -2px white,
    20px 0px white,
    30px -5px white,
    -10px -5px white,
    -15px 2px white,
    -35px 0px white,
    50px 15px white,
    60px -10px white,
    70px 20px white,
    90px -15px white,
    100px 5px white,
    110px -25px white,
    90px 30px white,
    80px -40px white,
    -50px 20px white,
    -70px -10px white,
    -90px 25px white,
    -100px -15px white,
    -110px 10px white,
    -90px -35px white,
    -80px 40px white,
    40px 40px white,
    30px -40px white,
    -30px 30px white,
    -40px -25px white,
    60px 60px white,
    -60px -60px white,
    70px -70px white,
    -70px 70px white,
    0px 80px white,
    0px -90px white,
    90px 0px white,
    -100px 0px white,
    45px 5px white,
    65px 0px white,
    75px 10px white,
    -60px 10px white,
    -40px 10px white,
    -45px -8px white,
    -55px -2px white,
    -30px 17px white;
}

.background {
  width: 50%;
  height: 160%;
  background-color: white;
  position: absolute;
  border-radius: 50%;
  transform: translate(-100%, 50%);
  box-shadow:
    -30px -40px 0px -7px #ffffffd8,
    40px 14px rgba(255, 255, 255, 0.507);
}

.background::before {
  content: "";
  width: 80%;
  height: 80%;
  background-color: white;
  position: absolute;
  border-radius: 50%;
  transform: translate(110%, 20%);
  box-shadow: 50px -5px #ffffffb2;
}

.background::after {
  content: "";
  width: 120%;
  height: 120%;
  background-color: white;
  position: absolute;
  border-radius: 50%;
  transform: translate(120%, 10%);
  box-shadow: 50px -20px #ffffffd8;
}

.order {
  color: white;
  font-weight: 600;
  font-size: 1.04rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: relative;
  z-index: 1;
}

.done {
  position: absolute;
  color: #0313fc;
  font-weight: 600;
  font-size: 1.04rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  z-index: 1;
}

.car-container {
  position: absolute;
  height: 60%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.car-part1 {
  position: absolute;
  width: 60%;
  height: 20%;
  background-color: #fed54a;
  bottom: 30%;
  left: 10%;
}

.car-part1::before {
  position: absolute;
  content: "";
  width: 75%;
  height: 220%;
  background-color: #b1c5ed;
  left: 20%;
  bottom: 100%;
  clip-path: polygon(0% 100%, 10% 0%, 80% 0%, 100% 100%);
}

.car-part1::after {
  position: absolute;
  content: "";
  width: 50%;
  height: 100%;
  background-color: #fed54a;
  left: 0%;
  bottom: 100%;
  clip-path: polygon(0% 100%, 0% 0%, 50% 0%, 100% 100%);
}

.wheels {
  position: absolute;
  width: 28%;
  height: 35%;
  background-color: black;
  border-radius: 50%;
  left: 5%;
  bottom: 15%;
}

.wheels::before {
  content: "";
  position: absolute;
  width: 80%;
  height: 70%;
  background-color: black;
  border-radius: 50%;
  left: 180%;
  bottom: 0%;
}

.car-part2 {
  position: absolute;
  width: 7%;
  height: 70%;
  background-color: black;
  left: 68%;
  bottom: 25%;
}

.car-part2::before {
  content: "";
  position: absolute;
  width: 155%;
  height: 50%;
  background-color: black;
  left: 0%;
  bottom: 0%;
}

.car-part2::after {
  content: "";
  position: absolute;
  width: 555%;
  height: 6%;
  background-color: black;
  left: 0%;
  bottom: 0%;
}

.details {
  position: absolute;
  width: 30%;
  height: 3%;
  background-color: #fed54a;
  top: 5%;
  left: 25%;
}

.details::before {
  content: "";
  position: absolute;
  width: 50%;
  height: 650%;
  border-radius: 50%;
  background-color: #fed54a;
  top: 1750%;
  left: -45%;
}

.details::after {
  content: "";
  position: absolute;
  width: 30%;
  height: 400%;
  border-radius: 50%;
  background-color: #fed54a;
  top: 2060%;
  left: 125%;
}

.package-container {
  position: absolute;
  width: 25%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.package {
  position: absolute;
  width: 45%;
  height: 40%;
  background-color: #ffb571;
}

.package::after {
  content: "";
  position: absolute;
  width: 50%;
  height: 5%;
  background-color: #d57d2b;
  right: 0%;
  top: -2%;
  transform: rotate(210deg);
  transform-origin: right;
  animation: close 0.5s ease-in-out 0.3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: paused;
}

.package::before {
  content: "";
  position: absolute;
  width: 50%;
  height: 5%;
  background-color: #d57d2b;
  left: 0%;
  top: -2%;
  transform: rotate(-210deg);
  transform-origin: left;
  animation: close2 0.5s ease-in-out 0.3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: paused;
}

@keyframes close {
  0% {
    transform: rotate(210deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes close2 {
  0% {
    transform: rotate(-210deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.package-details {
  position: absolute;
  background-color: #754433;
  width: 10%;
  height: 10%;
  top: 30%;
}

.package-details::before {
  content: "";
  position: absolute;
  background-color: #ededed;
  width: 100%;
  height: 100%;
  bottom: -280%;
  left: -150%;
}

.package-details::after {
  content: "";
  position: absolute;
  background-color: #8f8f8f;
  width: 40%;
  height: 40%;
  bottom: -230%;
  left: -105%;
}

.package-text {
  position: absolute;
  z-index: 2;
  bottom: 32%;
  right: 30%;
  font-size: 0.3rem;
}

.background {
  transform: translate(-100%, 50%) scale(1);
  animation: scale 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: paused;
}
.package-container {
  transform: translate(0%, 100%);
  animation: package 6s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: paused;
}

.done {
  transform: translate(-310%);
  animation: text2 6s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: paused;
}

.order {
  transform: translate(0%, 0%);
  animation: text 6s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: paused;
}

.car-container {
  transform: translate(-310%, 8%);
  animation: car 6s ease;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: paused;
}

@keyframes scale {
  0% {
    transform: translate(-100%, 50%) scale(1);
  }
  100% {
    transform: translate(-100%, 50%) scale(5);
  }
}

@keyframes package {
  0% {
    transform: translate(0%, 100%);
  }
  10%,
  50% {
    transform: translate(0%, 0%);
  }
  100% {
    transform: translate(325%, 0%);
  }
}

@keyframes text {
  0% {
    transform: translate(0%, 0%);
  }
  10%,
  100% {
    transform: translate(0%, -200%);
  }
}

@keyframes text2 {
  0%,
  50% {
    transform: translate(-310%);
  }
  100% {
    transform: translate(0%);
  }
}

@keyframes car {
  0%,
  10% {
    transform: translate(-310%, 8%);
  }
  45%,
  50% {
    transform: translate(-60%, 8%);
  }
  100% {
    transform: translate(350%, 8%);
  }
}

.order-trigger {
  width: 40%;
  height: 12%;
  z-index: 2;
  display: none;
}

.btn:has(.order-trigger:checked) .package-container,
.btn:has(.order-trigger:checked) .order,
.btn:has(.order-trigger:checked) .done,
.btn:has(.order-trigger:checked) .car-container,
.btn:has(.order-trigger:checked) .package::after,
.btn:has(.order-trigger:checked) .package::before,
.btn:has(.order-trigger:checked) .background {
  animation-play-state: running;
}

.btn:has(.order-trigger:not(:checked)) .package-container,
.btn:has(.order-trigger:not(:checked)) .order,
.btn:has(.order-trigger:not(:checked)) .done,
.btn:has(.order-trigger:not(:checked)) .car-container,
.btn:has(.order-trigger:not(:checked)) .package::after,
.btn:has(.order-trigger:not(:checked)) .package::before,
.btn:has(.order-trigger:not(:checked)) .background {
  animation: none;
}

.btn:has(.order-trigger:checked) .stars {
  display: none;
}
`
}
