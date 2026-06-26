export default {
  id: 'cb-do-dumb-things',
  name: 'Do Dumb Things',
  category: 'checkboxes',
  tags: ['animated', 'css-only', 'check', 'draw', 'green'],
  author: 'Uncannypotato69',
  note: 'Original en Tailwind. Convertido a CSS plano.',
  html: `<label class="dt-container" for="dt-checkbox">
  <input class="dt-input" id="dt-checkbox" type="checkbox" />
  <span class="dt-box"></span>
  <svg
    class="dt-svg"
    viewBox="0 0 72 97"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.72 95.673c-6.37.644-11.034-4.445-15.746-8.048-4.947-3.783-8.859-10.482-10.847-16.446-6.689-20.067 18.238-28.312 26.244-9.098.483 1.16 1.961 2.376 1.4 3.5-2.28 4.556-3.675-9.63-4.2-14.697-1.002-9.69-3.335-44.87 6.299-49.688.884-.442 2.82 0 3.849 0 16.149 0 15.046 29.01 15.046 39.89 0 2.38-.318 8.001-1.75 10.148-.723 1.085-2.671 4.421-1.75 3.499 8.01-8.008 18.138-1.516 22.395 6.998 1.282 2.564.948 6.384 1.4 9.098 1.596 9.573-4.291 19.245-14.346 19.245-1.384 0-8.154.838-8.748-.35-.747-1.493 3.261-.722 4.898-1.05"
      stroke-width="4px"
      pathLength="100"
      stroke="#80FF00"
    ></path>
  </svg>

  <p class="dt-label">Do dumb things</p>
</label>`,
  css: `
.dt-container {
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 1em;
  color: #80FF00;
  font-family: inherit;
}

.dt-input {
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.dt-box {
  position: absolute;
  left: 0;
  top: 50%;
  height: 2em;
  width: 2em;
  transform: translateX(-100%) translateY(-50%);
  border-radius: 0.25em;
  border: 2px solid #80FF00;
}

.dt-svg {
  position: absolute;
  left: 0;
  top: 50%;
  height: 2em;
  width: 2em;
  transform: translateX(-100%) translateY(-50%);
  fill: none;
  transition: stroke-dashoffset 500ms ease-out;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
}

.dt-input:checked ~ .dt-svg {
  stroke-dashoffset: 0;
}

.dt-label {
  font-size: 1em;
  font-weight: 600;
  user-select: none;
  margin: 0;
  padding-left: 2.5em;
}
`
}
