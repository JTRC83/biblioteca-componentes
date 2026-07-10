export default {
  id: 'loader-gradient-sphere',
  name: 'Gradient Sphere Loader',
  category: 'loaders',
  tags: ['loader', 'gradient', 'sphere', 'animated', 'css-only', 'rotate', 'hue', 'glow', 'blur'],
  author: 'arshshaikh06',
  html: `<div class="gs-spinner">
    <div class="gs-spinner1"></div>
</div>`,
  css: `
.gs-spinner {
  background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255));
  width: 100px;
  height: 100px;
  animation: gs-spinning82341 1.7s linear infinite, gs-hue 1s ease-in-out infinite;
  text-align: center;
  border-radius: 50px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
}

.gs-spinner1 {
  background-color: rgb(36, 36, 36);
  width: 100px;
  height: 100px;
  border-radius: 50px;
  filter: blur(10px);
}

@keyframes gs-spinning82341 {
  to {
    transform: rotate(360deg);
  }
}

@keyframes gs-hue {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}
`
}