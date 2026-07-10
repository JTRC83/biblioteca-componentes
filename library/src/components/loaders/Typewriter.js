export default {
  id: 'loader-typewriter',
  name: 'Typewriter Loader',
  category: 'loaders',
  tags: ['loader', 'typewriter', 'paper', 'keyboard', 'animated', 'css-only', 'office', 'vintage'],
  author: 'Nawsome',
  html: `<div class="tw-typewriter">
    <div class="tw-slide"><i></i></div>
    <div class="tw-paper"></div>
    <div class="tw-keyboard"></div>
</div>`,
  css: `
.tw-typewriter {
  --tw-blue: #5C86FF;
  --tw-blue-dark: #275EFE;
  --tw-key: #fff;
  --tw-paper: #EEF0FD;
  --tw-text: #D3D4EC;
  --tw-tool: #FBC56C;
  --tw-duration: 3s;
  position: relative;
  -webkit-animation: tw-bounce05 var(--tw-duration) linear infinite;
  animation: tw-bounce05 var(--tw-duration) linear infinite;
}

.tw-slide {
  width: 92px;
  height: 20px;
  border-radius: 3px;
  margin-left: 14px;
  transform: translateX(14px);
  background: linear-gradient(var(--tw-blue), var(--tw-blue-dark));
  -webkit-animation: tw-slide05 var(--tw-duration) ease infinite;
  animation: tw-slide05 var(--tw-duration) ease infinite;
}

.tw-slide:before, .tw-slide:after,
.tw-slide i:before {
  content: "";
  position: absolute;
  background: var(--tw-tool);
}

.tw-slide:before {
  width: 2px;
  height: 8px;
  top: 6px;
  left: 100%;
}

.tw-slide:after {
  left: 94px;
  top: 3px;
  height: 14px;
  width: 6px;
  border-radius: 3px;
}

.tw-slide i {
  display: block;
  position: absolute;
  right: 100%;
  width: 6px;
  height: 4px;
  top: 4px;
  background: var(--tw-tool);
}

.tw-slide i:before {
  right: 100%;
  top: -2px;
  width: 4px;
  border-radius: 2px;
  height: 14px;
}

.tw-paper {
  position: absolute;
  left: 24px;
  top: -26px;
  width: 40px;
  height: 46px;
  border-radius: 5px;
  background: var(--tw-paper);
  transform: translateY(46px);
  -webkit-animation: tw-paper05 var(--tw-duration) linear infinite;
  animation: tw-paper05 var(--tw-duration) linear infinite;
}

.tw-paper:before {
  content: "";
  position: absolute;
  left: 6px;
  right: 6px;
  top: 7px;
  border-radius: 2px;
  height: 4px;
  transform: scaleY(0.8);
  background: var(--tw-text);
  box-shadow: 0 12px 0 var(--tw-text), 0 24px 0 var(--tw-text), 0 36px 0 var(--tw-text);
}

.tw-keyboard {
  width: 120px;
  height: 56px;
  margin-top: -10px;
  z-index: 1;
  position: relative;
}

.tw-keyboard:before, .tw-keyboard:after {
  content: "";
  position: absolute;
}

.tw-keyboard:before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 7px;
  background: linear-gradient(135deg, var(--tw-blue), var(--tw-blue-dark));
  transform: perspective(10px) rotateX(2deg);
  transform-origin: 50% 100%;
}

.tw-keyboard:after {
  left: 2px;
  top: 25px;
  width: 11px;
  height: 4px;
  border-radius: 2px;
  box-shadow: 15px 0 0 var(--tw-key), 30px 0 0 var(--tw-key), 45px 0 0 var(--tw-key), 60px 0 0 var(--tw-key), 75px 0 0 var(--tw-key), 90px 0 0 var(--tw-key), 22px 10px 0 var(--tw-key), 37px 10px 0 var(--tw-key), 52px 10px 0 var(--tw-key), 60px 10px 0 var(--tw-key), 68px 10px 0 var(--tw-key), 83px 10px 0 var(--tw-key);
  -webkit-animation: tw-keyboard05 var(--tw-duration) linear infinite;
  animation: tw-keyboard05 var(--tw-duration) linear infinite;
}

@keyframes tw-bounce05 {
  85%, 92%, 100% {
    transform: translateY(0);
  }

  89% {
    transform: translateY(-4px);
  }

  95% {
    transform: translateY(2px);
  }
}

@keyframes tw-slide05 {
  5% {
    transform: translateX(14px);
  }

  15%, 30% {
    transform: translateX(6px);
  }

  40%, 55% {
    transform: translateX(0);
  }

  65%, 70% {
    transform: translateX(-4px);
  }

  80%, 89% {
    transform: translateX(-12px);
  }

  100% {
    transform: translateX(14px);
  }
}

@keyframes tw-paper05 {
  5% {
    transform: translateY(46px);
  }

  20%, 30% {
    transform: translateY(34px);
  }

  40%, 55% {
    transform: translateY(22px);
  }

  65%, 70% {
    transform: translateY(10px);
  }

  80%, 85% {
    transform: translateY(0);
  }

  92%, 100% {
    transform: translateY(46px);
  }
}

@keyframes tw-keyboard05 {
  5%, 12%, 21%, 30%, 39%, 48%, 57%, 66%, 75%, 84% {
    box-shadow: 15px 0 0 var(--tw-key), 30px 0 0 var(--tw-key), 45px 0 0 var(--tw-key), 60px 0 0 var(--tw-key), 75px 0 0 var(--tw-key), 90px 0 0 var(--tw-key), 22px 10px 0 var(--tw-key), 37px 10px 0 var(--tw-key), 52px 10px 0 var(--tw-key), 60px 10px 0 var(--tw-key), 68px 10px 0 var(--tw-key), 83px 10px 0 var(--tw-key);
  }

  9% {
    box-shadow: 15px 2px 0 var(--tw-key), 30px 0 0 var(--tw-key), 45px 0 0 var(--tw-key), 60px 0 0 var(--tw-key), 75px 0 0 var(--tw-key), 90px 0 0 var(--tw-key), 22px 10px 0 var(--tw-key), 37px 10px 0 var(--tw-key), 52px 10px 0 var(--tw-key), 60px 10px 0 var(--tw-key), 68px 10px 0 var(--tw-key), 83px 10px 0 var(--tw-key);
  }

  18% {
    box-shadow: 15px 0 0 var(--tw-key), 30px 0 0 var(--tw-key), 45px 0 0 var(--tw-key), 60px 2px 0 var(--tw-key), 75px 0 0 var(--tw-key), 90px 0 0 var(--tw-key), 22px 10px 0 var(--tw-key), 37px 10px 0 var(--tw-key), 52px 10px 0 var(--tw-key), 60px 10px 0 var(--tw-key), 68px 10px 0 var(--tw-key), 83px 10px 0 var(--tw-key);
  }

  27% {
    box-shadow: 15px 0 0 var(--tw-key), 30px 0 0 var(--tw-key), 45px 0 0 var(--tw-key), 60px 0 0 var(--tw-key), 75px 0 0 var(--tw-key), 90px 0 0 var(--tw-key), 22px 12px 0 var(--tw-key), 37px 10px 0 var(--tw-key), 52px 10px 0 var(--tw-key), 60px 10px 0 var(--tw-key), 68px 10px 0 var(--tw-key), 83px 10px 0 var(--tw-key);
  }

  36% {
    box-shadow: 15px 0 0 var(--tw-key), 30px 0 0 var(--tw-key), 45px 0 0 var(--tw-key), 60px 0 0 var(--tw-key), 75px 0 0 var(--tw-key), 90px 0 0 var(--tw-key), 22px 10px 0 var(--tw-key), 37px 10px 0 var(--tw-key), 52px 12px 0 var(--tw-key), 60px 12px 0 var(--tw-key), 68px 12px 0 var(--tw-key), 83px 10px 0 var(--tw-key);
  }

  45% {
    box-shadow: 15px 0 0 var(--tw-key), 30px 0 0 var(--tw-key), 45px 0 0 var(--tw-key), 60px 0 0 var(--tw-key), 75px 0 0 var(--tw-key), 90px 2px 0 var(--tw-key), 22px 10px 0 var(--tw-key), 37px 10px 0 var(--tw-key), 52px 10px 0 var(--tw-key), 60px 10px 0 var(--tw-key), 68px 10px 0 var(--tw-key), 83px 10px 0 var(--tw-key);
  }

  54% {
    box-shadow: 15px 0 0 var(--tw-key), 30px 2px 0 var(--tw-key), 45px 0 0 var(--tw-key), 60px 0 0 var(--tw-key), 75px 0 0 var(--tw-key), 90px 0 0 var(--tw-key), 22px 10px 0 var(--tw-key), 37px 10px 0 var(--tw-key), 52px 10px 0 var(--tw-key), 60px 10px 0 var(--tw-key), 68px 10px 0 var(--tw-key), 83px 10px 0 var(--tw-key);
  }

  63% {
    box-shadow: 15px 0 0 var(--tw-key), 30px 0 0 var(--tw-key), 45px 0 0 var(--tw-key), 60px 0 0 var(--tw-key), 75px 0 0 var(--tw-key), 90px 0 0 var(--tw-key), 22px 10px 0 var(--tw-key), 37px 10px 0 var(--tw-key), 52px 10px 0 var(--tw-key), 60px 10px 0 var(--tw-key), 68px 10px 0 var(--tw-key), 83px 12px 0 var(--tw-key);
  }

  72% {
    box-shadow: 15px 0 0 var(--tw-key), 30px 0 0 var(--tw-key), 45px 2px 0 var(--tw-key), 60px 0 0 var(--tw-key), 75px 0 0 var(--tw-key), 90px 0 0 var(--tw-key), 22px 10px 0 var(--tw-key), 37px 10px 0 var(--tw-key), 52px 10px 0 var(--tw-key), 60px 10px 0 var(--tw-key), 68px 10px 0 var(--tw-key), 83px 10px 0 var(--tw-key);
  }

  81% {
    box-shadow: 15px 0 0 var(--tw-key), 30px 0 0 var(--tw-key), 45px 0 0 var(--tw-key), 60px 0 0 var(--tw-key), 75px 0 0 var(--tw-key), 90px 0 0 var(--tw-key), 22px 10px 0 var(--tw-key), 37px 12px 0 var(--tw-key), 52px 10px 0 var(--tw-key), 60px 10px 0 var(--tw-key), 68px 10px 0 var(--tw-key), 83px 10px 0 var(--tw-key);
  }
}
`
}