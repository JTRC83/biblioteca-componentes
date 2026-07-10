export default {
  id: 'tg-3d-toggle',
  name: '3D Toggle',
  category: 'toggles',
  tags: ['3d', 'realistic', 'animated', 'css-only', 'toggle', 'industrial', 'led'],
  author: 'ashif_6672',
  html: `<label class="custom-ui-switch">
  <input type="checkbox" />
  <div class="lights">
    <span class="light-off"></span>
    <span class="light-on"></span>
  </div>
  <div class="switch-body">
    <span class="track">
      <span class="track-top">
        <span></span><span></span><span></span><span></span><span></span
        ><span></span><span></span><span></span><span></span><span></span>
      </span>
      <span class="track-bot">
        <span></span><span></span><span></span><span></span><span></span
        ><span></span><span></span><span></span><span></span><span></span>
      </span>
    </span>
    <span class="thumb"></span>
  </div>
</label>`,
  css: `
.custom-ui-switch,
.custom-ui-switch *,
.custom-ui-switch *:before,
.custom-ui-switch *:after {
  box-sizing: border-box;
  transition: all 0.5s ease 0s;
}

.custom-ui-switch {
  position: relative;
  width: 160px;
  height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  margin-top: 28px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.custom-ui-switch input[type="checkbox"] {
  display: none;
}

.custom-ui-switch .switch-body {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #616774;
  border-radius: 26px;
  box-shadow:
    0 0 0.5px 0.5px #0006,
    0 -4px 2.6px 0.05px #000d,
    0 0px 2.6px 0.5px #fff8,
    0 -4px 5.2px 0.5px #000c;
}

.custom-ui-switch .track {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 26px;
  overflow: hidden;
  background: #191e1e;
  box-shadow: 0 9px 13px 0 #000 inset;
}

.custom-ui-switch .thumb {
  position: absolute;
  width: 47px;
  height: 47px;
  top: 2.7px;
  left: 2.85px;
  background: linear-gradient(180deg, #3f4447, #262727);
  border-radius: 26px;
  box-shadow:
    -1px 1px 0.9px 0 #fff2 inset,
    0 0 2.6px 0.5px #000c;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
}

.custom-ui-switch input[type="checkbox"]:checked ~ .switch-body .thumb {
  left: calc(100% - 49.85px);
}

.custom-ui-switch .thumb:before {
  content: "";
  position: absolute;
  background: #2c3133;
  width: 2.2px;
  height: 19px;
  border-radius: 26px;
  box-shadow:
    5.2px 0 0 0 #2c3133,
    -5.2px 0 0 0 #2c3133;
  filter: drop-shadow(0px 1px 2px #000) drop-shadow(0px -1px 0px #fff4)
    blur(0.65px);
}

.custom-ui-switch .thumb:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 26px;
  animation: shine-thumb-off 0.5s ease 0s 1 forwards;
}

@keyframes shine-thumb-on {
  0% {
    background: radial-gradient(circle at 50% 55%, #fff0 23px, #f50000 29px);
  }
  50% {
    background: radial-gradient(circle at 50% 55%, #fff0 23px, #666666 29px);
  }
  100% {
    background: radial-gradient(circle at 50% 55%, #fff0 23px, #4caf50 29px);
  }
}

@keyframes shine-thumb-off {
  0% {
    background: radial-gradient(circle at 50% 55%, #fff0 23px, #4caf50 29px);
  }
  50% {
    background: radial-gradient(circle at 50% 55%, #fff0 23px, #666666 29px);
  }
  100% {
    background: radial-gradient(circle at 50% 55%, #fff0 23px, #f50000 29px);
  }
}

.custom-ui-switch .track-top,
.custom-ui-switch .track-bot {
  position: absolute;
  width: 120%;
  height: 11.6px;
  left: -10%;
  top: -10.4px;
  transform-origin: 22% 100%;
  transform: rotate(5deg);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  opacity: 0.85;
  animation: t-top-l 0.5s ease 0s 1 reverse forwards;
}

.custom-ui-switch .track span span {
  background: linear-gradient(0deg, #fff8, #fff0),
    linear-gradient(180deg, #222, #666);
  width: 16.3px;
  height: 13px;
  display: inline-flex;
  border-radius: 0 0 3.25px 3.25px;
  box-shadow: 0 0 1px 0 #fff;
}

.custom-ui-switch .track-bot span {
  background: linear-gradient(180deg, #fff8, #fff0),
    linear-gradient(0deg, #222, #666) !important;
  border-radius: 3.25px 3.25px 0 0 !important;
}

.custom-ui-switch .track-bot {
  top: inherit;
  bottom: -11.6px;
  transform: rotate(-5deg);
  animation: t-bot-l 0.5s ease 0s 1 reverse forwards;
}

.custom-ui-switch
  input[type="checkbox"]:checked
  ~ .switch-body
  .track
  .track-top {
  animation: t-top-r 0.5s ease 0s 1 forwards;
}

@keyframes t-top-r {
  0% {
    transform: rotate(5deg);
    transform-origin: 22% 100%;
  }
  50% {
    transform: rotate(0deg);
    transform-origin: 22% 100%;
  }
  50.01% {
    transform: rotate(0deg);
    transform-origin: 78% 100%;
  }
  100% {
    transform: rotate(-5deg);
    transform-origin: 78% 100%;
  }
}
@keyframes t-top-l {
  0% {
    transform: rotate(5deg);
    transform-origin: 22% 100%;
  }
  50% {
    transform: rotate(0deg);
    transform-origin: 22% 100%;
  }
  50.01% {
    transform: rotate(0deg);
    transform-origin: 78% 100%;
  }
  100% {
    transform: rotate(-5deg);
    transform-origin: 78% 100%;
  }
}

.custom-ui-switch
  input[type="checkbox"]:checked
  ~ .switch-body
  .track
  .track-bot {
  animation: t-bot-r 0.5s ease 0s 1 forwards;
}

@keyframes t-bot-r {
  0% {
    transform: rotate(-5deg);
    transform-origin: 22% 100%;
  }
  50% {
    transform: rotate(0deg);
    transform-origin: 22% 100%;
  }
  50.01% {
    transform: rotate(0deg);
    transform-origin: 78% 100%;
  }
  100% {
    transform: rotate(5deg);
    transform-origin: 78% 100%;
  }
}
@keyframes t-bot-l {
  0% {
    transform: rotate(-5deg);
    transform-origin: 22% 100%;
  }
  50% {
    transform: rotate(0deg);
    transform-origin: 22% 100%;
  }
  50.01% {
    transform: rotate(0deg);
    transform-origin: 78% 100%;
  }
  100% {
    transform: rotate(5deg);
    transform-origin: 22% 100%;
  }
}

.custom-ui-switch .lights {
  position: absolute;
  width: 100%;
  height: 14.9px;
  top: -31px;
  display: flex;
  justify-content: space-between;
  padding: 0 17.4px;
  z-index: 1;
  pointer-events: none;
}

.custom-ui-switch .lights span {
  background: #121212;
  position: relative;
  width: 14.9px;
  height: 14.9px;
  border-radius: 26px;
  box-shadow:
    0 0px 0.5px 0.5px #0008,
    0 -4px 2.6px 0.05px #000,
    0 2px 2.6px 0.05px #fff8,
    0 0px 1.3px 2.1px #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-ui-switch .lights span:before {
  content: "off";
  font-size: 10.9px;
  text-align: center;
  width: 200%;
  position: absolute;
  top: -18px;
  left: -50%;
  color: #ffffff3d;
  text-shadow:
    0px -2px 2px #0008,
    0px 1px 2px #fff4;
  background: -webkit-linear-gradient(90deg, #0000003b 25%, #f50000 75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: #71717170;
}

.custom-ui-switch .lights span + span:before {
  content: "on";
}

.custom-ui-switch .lights span:after {
  content: "";
  color: #fff;
  width: calc(100% - 1.7px);
  height: calc(100% - 1.7px);
  position: absolute;
  border-radius: 26px;
  box-shadow:
    0 0px 0.5px 0.5px #0008 inset,
    0 -4px 2.6px 0.05px #000 inset,
    0 2px 2.6px 0.05px #fff8 inset,
    0 0px 1.3px 1px #000 inset;
}

.custom-ui-switch .light-off:after {
  box-shadow:
    0 0 10.4px 0 #f50000,
    0 0 8.7px 1.3px #f50000 inset,
    0 -1.3px 2.6px 2.6px #000 inset;
  background: radial-gradient(
    circle at 50% 32%,
    #fff 0 1.3px,
    #fff8 8.7px 8.7px
  );
}

.custom-ui-switch input[type="checkbox"]:checked ~ .lights .light-off:after {
  box-shadow:
    0 0 8.7px 0 #f5000020,
    0 0 8.7px 1.3px #f5000020 inset;
  background: radial-gradient(
    circle at 50% 32%,
    #fff5 0 1.3px,
    #000 8.7px 8.7px
  );
}

.custom-ui-switch .light-on:after {
  box-shadow:
    0 0 8.7px 0 #00f56d20,
    0 0 8.7px 1.3px #00f56d20 inset;
  background: radial-gradient(
    circle at 50% 32%,
    #fff5 0 1.3px,
    #000 8.7px 8.7px
  );
}

.custom-ui-switch input[type="checkbox"]:checked ~ .lights .light-on:after {
  box-shadow:
    0 0 10.4px 0 #4caf50,
    0 0 8.7px 1.3px #4caf50 inset,
    0 -1.3px 2.6px 2.6px #000 inset;
  background: radial-gradient(
    circle at 50% 32%,
    #fff 0 1.3px,
    #fff2 8.7px 8.7px
  );
}
`
}
