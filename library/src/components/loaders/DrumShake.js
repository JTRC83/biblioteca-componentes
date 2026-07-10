export default {
  id: 'loader-drum-shake',
  name: 'Drum Shake Loader',
  category: 'loaders',
  tags: ['loader', 'drum', 'shake', 'animated', 'css-only', 'border', 'geometric', 'striped'],
  author: 'doniaskima',
  html: `<div class="ds-loader"></div>`,
  css: `
.ds-loader {
  --ds-c1: #673b14;
  --ds-c2: #f8b13b;
  width: 40px;
  height: 80px;
  border-top: 4px solid var(--ds-c1);
  border-bottom: 4px solid var(--ds-c1);
  background: linear-gradient(90deg, var(--ds-c1) 2px, var(--ds-c2) 0 5px, var(--ds-c1) 0) 50%/7px 8px no-repeat;
  display: grid;
  overflow: hidden;
  animation: ds-l5-0 2s infinite linear;
}

.ds-loader::before,
.ds-loader::after {
  content: "";
  grid-area: 1/1;
  width: 75%;
  height: calc(50% - 4px);
  margin: 0 auto;
  border: 2px solid var(--ds-c1);
  border-top: 0;
  box-sizing: content-box;
  border-radius: 0 0 40% 40%;
  -webkit-mask: linear-gradient(#000 0 0) bottom/4px 2px no-repeat,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  background: linear-gradient(var(--ds-d, 0deg), var(--ds-c2) 50%, #0000 0) bottom /100% 205%,
    linear-gradient(var(--ds-c2) 0 0) center/0 100%;
  background-repeat: no-repeat;
  animation: inherit;
  animation-name: ds-l5-1;
}

.ds-loader::after {
  transform-origin: 50% calc(100% + 2px);
  transform: scaleY(-1);
  --ds-s: 3px;
  --ds-d: 180deg;
}

@keyframes ds-l5-0 {
  80% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(0.5turn);
  }
}

@keyframes ds-l5-1 {
  10%, 70% {
    background-size: 100% 205%, var(--ds-s, 0) 100%;
  }

  70%, 100% {
    background-position: top, center;
  }
}
`
}