export default {
  id: 'anim-cassette-retro',
  name: 'Retro Cassette',
  category: 'animations',
  tags: ['card', 'cassette', 'retro', 'vintage', 'animated', 'css-only', 'tape', 'music', 'aesthetic'],
  author: 'Rodrypaladin',
  html: `<div class="cs2-card">
  <div class="cs2-top">
    <div class="cs2-metal"></div>
    <div class="cs2-plastic"></div>
  </div>
  <div class="cs2-bottom">
    <div class="cs2-line1"></div>
    <div class="cs2-yellow"></div>
  </div>
  <div class="cs2-minicuadro1"></div>
  <div class="cs2-minicuadro2"></div>
  <div class="cs2-line1"></div>
  <div class="cs2-line2"></div>
  <div class="cs2-line3"></div>
  <div class="cs2-line4"></div>
  <div class="cs2-line5"></div>
  <p class="cs2-index">Index</p>
</div>`,
  css: `
.cs2-card {
  width: 300px;
  height: 300px;
  background-image: linear-gradient(to right bottom, #252324, #292728, #2d2c2d, #313031, #353535);
  position: relative;
  border-radius: 5px;
  box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.307);
}

.cs2-top {
  position: absolute;
  width: 65%;
  height: 37%;
  top: 0;
  left: 37px;
  background-image: linear-gradient(to right bottom, #202020, #222222, #232323, #252525, #272727);
  z-index: 500;
  border-top: 4px solid #e8e8e8;
  border-right: 3px solid #121212;
  border-bottom: 3px solid #121212;
  border-left: 3px solid #121212;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.cs2-plastic {
  position: absolute;
  top: 0;
  right: 60px;
  width: 60px;
  background-color: black;
  height: 100%;
  z-index: 1000;
  border-top: 25px solid white;
}

.cs2-bottom {
  z-index: 1000;
  position: absolute;
  bottom: 1px;
  right: 50%;
  transform: translate(50%,0);
  width: 75%;
  height: 52%;
  background-color: #ecebe0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top: 3px solid #121212;
  border-left: 3px solid #121212;
  border-right: 3px solid #121212;
  border-radius: 10px;
}

.cs2-metal {
  z-index: 2000;
  position: absolute;
  top: -3px;
  right: 0;
  width: 77%;
  height: 103%;
  background-image: linear-gradient(to right bottom, #bdbdbd, #cacaca, #d7d7d7, #e5e5e5, #f2f2f2);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: transform 0.2s ease-in;
  clip-path: polygon(0% 0%, 0% 100%, 60% 100%, 60% 18%, 85% 18%, 85% 93%, 25% 93%, 25% 100%, 100% 100%, 100% 0%);
}

.cs2-cuadro-metal {
  position: absolute;
  top: 15px;
  right: 45px;
  width: 40px;
  transform: translate(50%,0);
  height: 80px;
  background-color: #252324;
  z-index: 2000;
  transition: transform 0.2s ease-in;
  border-radius: 3px;
}

.cs2-card:hover .cs2-metal {
  transform: translateX(-44px);
}

.cs2-card:hover .cs2-cuadro-metal {
  transform: translateX(-30px);
}

.cs2-minicuadro1 {
  bottom: 25px;
  right: 12px;
  position: absolute;
  width: 17px;
  height: 17px;
  background-color: #d7d7d7;
  border: 2px solid #191919;
}

.cs2-minicuadro2 {
  bottom: 25px;
  left: 12px;
  position: absolute;
  width: 17px;
  height: 17px;
  background-image: linear-gradient(to right bottom, #191919, #202020, #272727, #2e2e2e, #353535);
  border: 2px solid #191919;
}

.cs2-yellow {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 23px;
  background-color: rgb(255, 157, 0);
}

.cs2-line1 {
  position: absolute;
  bottom: 42px;
  right: 61.5%;
  transform: translate(50%,0);
  width: 125px;
  height: 2px;
  background-color: rgb(192, 33, 33);
}

.cs2-line2 {
  position: absolute;
  bottom: 64px;
  right: 50%;
  transform: translate(50%,0);
  width: 175px;
  height: 2px;
  background-color: rgb(192, 33, 33);
  z-index: 2000;
}

.cs2-line3 {
  position: absolute;
  bottom: 86px;
  right: 50%;
  transform: translate(50%,0);
  width: 175px;
  height: 2px;
  background-color: rgb(192, 33, 33);
  z-index: 2000;
}

.cs2-line4 {
  position: absolute;
  bottom: 108px;
  right: 50%;
  transform: translate(50%,0);
  width: 175px;
  height: 2px;
  background-color: rgb(192, 33, 33);
  z-index: 2000;
}

.cs2-line5 {
  position: absolute;
  bottom: 130px;
  right: 50%;
  transform: translate(50%,0);
  width: 175px;
  height: 2px;
  background-color: rgb(192, 33, 33);
  z-index: 2000;
}

.cs2-index {
  position: absolute;
  bottom: 35px;
  right: 62px;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(192, 33, 33);
  z-index: 2000;
}
`
}