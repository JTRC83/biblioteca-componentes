export default {
  id: 'analog-press-3d-ok',
  name: '3D Press OK',
  category: 'analog',
  tags: ['3d', 'press', 'realistic', 'device', 'css-only'],
  author: 'arthur_6104',
  html: `<div class="container">
  <button class="button-3d">
    <div class="head-btn">
      <div class="top-btn"><span>OK</span></div>
    </div>
    <div class="body-btn">
      <div class="left-side"></div>
      <div class="right-side"></div>
    </div>

    <div class="base">
      <div class="body-base">
        <div class="hole">
          <div class="btn-rest">
            <div class="left-side"></div>
            <div class="right-side"></div>
          </div>

          <div class="shadow"></div>
        </div>
      </div>
    </div>
  </button>
</div>`,
  css: `
.container {
  height: 120px;
  display: flex;
  align-items: end;
  justify-content: center;
  padding: 0 16px;
}

.button-3d {
  --lightest: #ffba3a;
  --lighter: #ff9d00;
  --light: #ff7b00;
  --neutral: #ff6200;
  --dark: #cf3700;
  --dark-2: orangered;
  --darkest: #c83500;

  cursor: pointer;
  perspective: 500px;
  position: relative;
  width: 77px;
  height: 25px;
  border: none;
  transition: 0.15s ease-out;
  font-family: inherit;
  background: none;
  padding: 0;
}

.button-3d:active {
  height: 0;
}

.head-btn {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.body-btn {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: var(--lighter);
  z-index: 1;
}

.body-btn .left-side {
  height: 100%;
  width: calc(50% - 10px);
  background-image: linear-gradient(
    to right,
    var(--darkest),
    var(--neutral),
    var(--neutral),
    var(--light)
  );
  box-shadow: 5px 10px 5px var(--light);
}

.body-btn .right-side {
  position: absolute;
  top: 0;
  right: 0;
  width: calc(50% - 10px);
  height: 100%;
  background-color: var(--dark);
  box-shadow: -5px 5px 5px var(--dark);
}

.top-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-image: linear-gradient(150deg, var(--lighter), var(--dark-2));
  color: #fff;
  border-radius: 10px;
  transform: rotateX(45deg) rotateZ(45deg);
  border-bottom: 3px solid var(--lightest);
  border-right: 3px solid var(--lighter);
}

.top-btn span {
  font-size: 18px;
  font-weight: bold;
}

.body-base {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  background-image: linear-gradient(
    150deg,
    rgb(165, 165, 165),
    rgb(95, 95, 95)
  );
  color: #fff;
  border-radius: 10px;
  transform: rotateX(45deg) rotateZ(45deg);
  box-shadow: 2px 2px 0 rgb(80, 80, 80);
  border-bottom: 2px solid #b0b0b0;
  border-right: 2px solid rgb(143, 143, 143);
}

.base {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: end;
  width: 120px;
  overflow: hidden;
}

.body-base .hole {
  height: 70px;
  width: 70px;
  background-color: #353535;
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  justify-content: right;
  box-shadow: inset 2px 2px 5px #1f1f1f;
  border-top: 2px solid #b0b0b0;
  border-left: 2px solid rgb(143, 143, 143);
}

.body-base .hole .btn-rest {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(calc(-50% + 20px), calc(-50% + 20px)) rotate(-45deg);
  width: 77px;
  height: calc(50% + 24px);
  overflow: hidden;
  background-color: var(--lighter);
}

.btn-rest .left-side {
  height: 100%;
  width: calc(50% - 10px);
  background-image: linear-gradient(
    to right,
    var(--darkest),
    var(--neutral),
    var(--neutral),
    var(--light)
  );
  box-shadow: 5px 0 5px var(--light);
}

.btn-rest .right-side {
  position: absolute;
  top: 0;
  right: 0;
  width: calc(50% - 10px);
  height: 100%;
  background-color: var(--dark);
  box-shadow: -5px 0 5px var(--dark);
}

.body-base .hole .shadow {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  box-shadow: inset -5px -5px 4px rgba(0, 0, 0, 0.349);
}
`
}
