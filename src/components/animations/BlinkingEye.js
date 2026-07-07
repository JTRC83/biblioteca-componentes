export default {
  id: 'anim-blinking-eye',
  name: 'Blinking Eye',
  category: 'animations',
  tags: ['eye', 'blink', 'animated', 'css-only', 'face', 'organic', 'interactive'],
  author: 'FWDJc',
  html: `<div class="el-lid">
  <div class="el-eye">
    <div class="el-cornea">
      <div class="el-white-pupil"></div>
    </div>
  </div>
</div>`,
  css: `
.el-lid {
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 9px 0 2px rgba(0, 0, 0, 0.2);
  width: 150px;
  height: 150px;
}

.el-eye {
  background-color: #fffcf4;
  border-radius: 50%;
  transform: translate3d(0, 0, 0) rotate(90deg);
  width: 120px;
  height: 120px;
  animation: el-eye-anim 5s infinite;
}

@keyframes el-eye-anim {
  12%,
  25% {
    width: 100px;
    height: 110px;
  }

  37%,
  50% {
    width: 60px;
    height: 130px;
  }

  63%,
  75% {
    width: 100px;
    height: 103px;
  }

  87% {
    width: 100px;
    height: 100px;
  }
}

.el-cornea {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: el-eye-color 5s infinite;
}

@keyframes el-eye-color {
  63%, 75% {
    background-color: rgb(137, 1, 1);
  }
}

.el-white-pupil {
  position: absolute;
  top: 70%;
  left: 10%;
  border-radius: 50%;
  background-color: #fffcf4;
  width: 20px;
  height: 20px;
}
`
}