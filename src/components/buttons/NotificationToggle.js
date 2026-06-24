export default {
  id: 'btn-notification-toggle',
  name: 'Notification Toggle',
  category: 'buttons',
  tags: ['toggle', 'notification', 'animated', 'css-only'],
  author: 'dexter-st',
  html: `<div class="onoff-btn warning">
  <input class="onoff-btn-checkbox" type="checkbox" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke-width="3"
    class="onoff-btn-icon"
  >
    <path
      class="icon-ring"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
    ></path>
    <path
      class="icon-silent"
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"
    ></path>
  </svg>
</div>`,
  css: `
.onoff-btn {
  --hue: 0;
  --saturation: 70%;
  --height: 60px;
  --icon-size: 36px;
  --transition-speed: 100ms;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: var(--height);
  min-width: var(--height);

  padding: 0rem 0rem;
  margin: 36px 16px;

  font-family: inherit;
  font-weight: 800;
  font-size: 1.2em;

  outline: none;
  border: none;
  border-radius: 100ch;
  background-color: hsl(var(--hue), var(--saturation), 40%);
  color: hsl(var(--hue), var(--saturation), 88%);

  box-shadow:
    2px 2px 2px 0 hsl(var(--hue), var(--saturation), 20%),
    0 0 1px -1px hsl(var(--hue), var(--saturation), 0%),
    1px 1px 2px 15px hsl(var(--hue), var(--saturation), 40%),
    0 0 0 16px hsl(var(--hue), var(--saturation), 60%),
    -3px -3px 2px 15px hsl(var(--hue), var(--saturation), 75%),
    3px 3px 4px 16px hsl(var(--hue), var(--saturation), 15%),
    0 0 0 20px hsl(var(--hue), var(--saturation), 25%),
    6px 6px 18px 8px hsl(var(--hue), var(--saturation), 20%),
    2px 2px 6px 0 hsl(var(--hue), var(--saturation), 60%) inset,
    -2px -2px 6px 0px hsl(var(--hue), var(--saturation), 20%) inset;

  cursor: pointer;

  transition: box-shadow var(--transition-speed) ease-in-out;
}

.onoff-btn-icon {
  stroke: hsl(var(--hue), var(--saturation), 88%);
  fill: none;
  width: var(--icon-size);
}

.onoff-btn-text,
.onoff-btn-icon {
  transform-origin: center;
  transition: transform var(--transition-speed) ease-in-out;
}

.onoff-btn:hover,
.onoff-btn:focus-visible {
  box-shadow:
    2px 2px 2px 0 hsl(var(--hue), var(--saturation), 20%),
    0 0 6px -1px hsl(var(--hue), var(--saturation), 10%),
    1px 1px 2px 15px hsl(var(--hue), var(--saturation), 40%),
    0 0 0 16px hsl(var(--hue), var(--saturation), 60%),
    -3px -3px 2px 15px hsl(var(--hue), var(--saturation), 75%),
    3px 3px 4px 16px hsl(var(--hue), var(--saturation), 15%),
    0 0 0 20px hsl(var(--hue), var(--saturation), 25%),
    6px 6px 18px 8px hsl(var(--hue), var(--saturation), 20%),
    2px 2px 6px 0 hsl(var(--hue), var(--saturation), 80%) inset,
    -2px -2px 6px 0px hsl(var(--hue), var(--saturation), 35%) inset;

  .onoff-btn-text,
  .onoff-btn-icon {
    transform: scale(1.1);
  }
}

.onoff-btn:active {
  box-shadow:
    2px 2px 2px 0 hsl(var(--hue), var(--saturation), 60%),
    0 0 6px -1px hsl(var(--hue), var(--saturation), 10%),
    1px 1px 2px 15px hsl(var(--hue), var(--saturation), 40%),
    0 0 0 16px hsl(var(--hue), var(--saturation), 60%),
    -3px -3px 2px 15px hsl(var(--hue), var(--saturation), 75%),
    3px 3px 4px 16px hsl(var(--hue), var(--saturation), 15%),
    0 0 0 20px hsl(var(--hue), var(--saturation), 25%),
    6px 6px 18px 8px hsl(var(--hue), var(--saturation), 20%),
    6px 6px 8px 0 hsl(var(--hue), var(--saturation), 20%) inset,
    -6px -6px 8px 0px hsl(var(--hue), var(--saturation), 25%) inset;

  .onoff-btn-text,
  .onoff-btn-icon {
    transform: scale(0.85);
  }
}

.onoff-btn-checkbox {
  position: absolute;
  z-index: 1;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.onoff-btn:has(.onoff-btn-checkbox:checked) {
  box-shadow:
    2px 2px 2px 0 hsl(var(--hue), var(--saturation), 60%),
    0 0 6px -1px hsl(var(--hue), var(--saturation), 10%),
    1px 1px 2px 15px hsl(var(--hue), var(--saturation), 40%),
    0 0 0 16px hsl(var(--hue), var(--saturation), 60%),
    -3px -3px 2px 15px hsl(var(--hue), var(--saturation), 75%),
    3px 3px 4px 16px hsl(var(--hue), var(--saturation), 15%),
    0 0 0 20px hsl(var(--hue), var(--saturation), 25%),
    6px 6px 18px 8px hsl(var(--hue), var(--saturation), 20%),
    2px 2px 6px 0 hsl(var(--hue), var(--saturation), 20%) inset,
    -2px -2px 6px 0px hsl(var(--hue), var(--saturation), 25%) inset;

  .onoff-btn-text,
  .onoff-btn-icon {
    transform: scale(0.95);
  }
}

.onoff-btn:has(.onoff-btn-checkbox:focus-visible) {
  --saturation: 95%;
}

.onoff-btn.onoff-btn:has(.onoff-btn-checkbox:disabled) {
  --saturation: 0%;

  cursor: not-allowed;
  box-shadow:
    2px 2px 2px 0 hsl(var(--hue), var(--saturation), 20%),
    0 0 1px -1px hsl(var(--hue), var(--saturation), 0%),
    1px 1px 2px 15px hsl(var(--hue), var(--saturation), 40%),
    0 0 0 16px hsl(var(--hue), var(--saturation), 60%),
    -3px -3px 2px 15px hsl(var(--hue), var(--saturation), 75%),
    3px 3px 4px 16px hsl(var(--hue), var(--saturation), 15%),
    0 0 0 20px hsl(var(--hue), var(--saturation), 25%),
    6px 6px 18px 8px hsl(var(--hue), var(--saturation), 20%),
    2px 2px 6px 0 hsl(var(--hue), var(--saturation), 60%) inset,
    -2px -2px 6px 0px hsl(var(--hue), var(--saturation), 20%) inset;

  .onoff-btn-text,
  .onoff-btn-icon {
    transform: scale(1);
  }
}

.warning {
  --hue: 38;
  --saturation: 75%;
}

.icon-ring,
.icon-silent {
  stroke-width: 2px;
  transform-origin: center;
}

.icon-ring {
  opacity: 0;
}

.onoff-btn.onoff-btn:has(.onoff-btn-checkbox:not(:checked)) {
  --saturation: 90%;

  .icon-ring {
    opacity: 1;
    animation: icon-shuffle 0.4s ease-in-out;
  }
  .icon-silent {
    opacity: 0;
  }
}

@keyframes icon-shuffle {
  0% {
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(15deg);
  }
  60% {
    transform: rotate(-15deg);
  }
  80% {
    transform: rotate(0deg);
  }
}
`
}
