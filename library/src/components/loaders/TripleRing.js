export default {
  id: 'loader-triple-ring',
  name: 'Triple Ring Loader',
  category: 'loaders',
  tags: ['loader', 'ring', 'spinner', 'animated', 'css-only', 'rotating', 'circular', 'three'],
  author: 'mobinkakei',
  html: `<div class="rl-loader">
    <span>Loading...</span>
</div>`,
  css: `
.rl-loader {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 5px solid #e74c3c;
  position: relative;
  animation: rl-load 2s linear infinite;
}

.rl-loader::before,.rl-loader::after {
  content: "";
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  border-radius: 50%;
}

.rl-loader::before {
  border-top: 5px solid #e67e22;
  transform: rotate(120deg);
}

.rl-loader::after {
  border-top: 5px solid #3498db;
  transform: rotate(240deg);
}

.rl-loader span {
  position: absolute;
  font-size: small;
  width: 100px;
  height: 100px;
  color: #fff;
  text-align: center;
  line-height: 100px;
  animation: rl-a2 2s linear infinite;
}

@keyframes rl-load {
  to {
    transform: rotate(360deg);
  }
}

@keyframes rl-a2 {
  to {
    transform: rotate(-360deg);
  }
}
`
}