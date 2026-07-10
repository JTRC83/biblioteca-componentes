export default {
  id: 'loader-vinyl-record',
  name: 'Vinyl Record Loader',
  category: 'loaders',
  tags: ['loader', 'vinyl', 'record', 'music', 'animated', 'css-only', 'rotate', 'turntable'],
  author: 'TheAbieza',
  html: `<div class="vr-container">
    <div class="vr-plate">
        <div class="vr-black">
            <div class="vr-border">
                <div class="vr-white">
                    <div class="vr-center"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="vr-player">
        <div class="vr-rect"></div>
        <div class="vr-circ"></div>
    </div>
</div>`,
  css: `
.vr-container {
  width: 175px;
  height: 175px;
  background-color: #ABC4AA;
  border-radius: 10px;
  position: relative;
  box-shadow: 5px 5px 0 0 #675D50;
}

.vr-plate {
  width: fit-content;
}

.vr-plate .vr-black,
.vr-plate .vr-white,
.vr-plate .vr-center,
.vr-plate .vr-border {
  border-radius: 100%;
}

.vr-container,
.vr-plate .vr-black,
.vr-plate .vr-white,
.vr-plate .vr-border {
  display: flex;
  align-items: center;
  justify-content: center;
}

.vr-plate .vr-black {
  width: 150px;
  height: 150px;
  background-color: #675D50;
  animation: vr-rotation 2s infinite linear;
}

@keyframes vr-rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

.vr-plate .vr-white {
  width: 70px;
  height: 70px;
  background-color: #F3DEBA;
}

.vr-plate .vr-center {
  width: 20px;
  height: 20px;
  background-color: #675D50;
}

.vr-plate .vr-border {
  width: 111px;
  height: 111px;
  border-top: 3px solid #F3DEBA;
  border-bottom: 3px solid #F3DEBA;
  border-left: 3px solid #675D50;
  border-right: 3px solid #675D50;
}

.vr-player {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 8px;
  margin-right: 8px;
  rotate: -45deg;
}

.vr-player .vr-circ {
  width: 25px;
  height: 25px;
  background-color: #F3DEBA;
  border-radius: 100%;
  z-index: 1;
}

.vr-player .vr-rect {
  width: 10px;
  height: 55px;
  background-color: #F3DEBA;
  position: absolute;
  bottom: 0;
  margin-bottom: 5px;
}
`
}