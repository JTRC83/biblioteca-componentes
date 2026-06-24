export default {
  id: 'btn-power-toggle',
  name: 'Power Toggle',
  category: 'buttons',
  tags: ['toggle', 'power', 'animated', 'css-only'],
  author: 'dexter-st',
  html: `<div class="onoff-btn">
  <input type="checkbox" class="onoff-btn-checkbox" />
  <svg
    class="onoff-btn-icon"
    stroke-width="3"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
      stroke-linejoin="round"
      stroke-linecap="round"
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
  --hue: 135;

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
`
}
