export default {
  id: 'btn-hello-3d',
  name: 'Hello 3D',
  category: 'buttons',
  tags: ['3d', 'letters', 'animated', 'red', 'css-only'],
  author: 'chase2k25',
  html: `<button class="button">
  <span>H</span>
  <span>E</span>
  <span>L</span>
  <span>L</span>
  <span>O</span>
</button>`,
  css: `
.button {
  cursor: pointer;
  padding: 12px 18px;
  border-radius: 30px;
  border: 5px solid #e50000;
  display: inline-block;
  overflow: hidden;
  background: red;
  box-shadow:
    inset 6px 6px 10px rgba(255, 255, 255, 0.6),
    inset -6px -6px 10px rgba(0, 0, 0, 0.3),
    2px 2px 10px rgba(0, 0, 0, 0.3),
    -2px -2px 10px rgba(255, 255, 255, 0.5);
  transition:
    box-shadow 0.3s ease,
    transform 0.1s ease;
}

.button span {
  font-family:;
  font-weight: 900;
  font-size: 24px;
  color: #db0000;
  text-shadow:
    1px 1px 1px rgba(255, 255, 255, 0.4),
    -1px -1px 1px rgba(0, 0, 0, 0.4);
  position: relative;
  display: inline-block;
  transition: transform 0.3s ease-out;
  z-index: 1;
  padding: 0px 4px;
}

.button span:nth-child(1)::before {
  transition-delay: 0ms;
}
.button span:nth-child(2)::before {
  transition-delay: 100ms;
}
.button span:nth-child(3)::before {
  transition-delay: 200ms;
}
.button span:nth-child(4)::before {
  transition-delay: 300ms;
}
.button span:nth-child(5)::before {
  transition-delay: 400ms;
}

.button:hover span {
  color: #d30000;
}

.button:active span {
  color: #f30000;
  text-shadow:
    1px 1px 1px rgba(255, 255, 255, 0.5),
    -1px -1px 2px rgba(0, 0, 0, 0.5);
}

.button span:hover {
  transform: translateY(-7px);
}

.button:active {
  box-shadow:
    inset 2px 2px 1px rgba(0, 0, 0, 0.3),
    inset -2px -2px 1px rgba(255, 255, 255, 0.5);
  transform: scale(0.98);
}
`
}
