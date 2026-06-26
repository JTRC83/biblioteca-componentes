export default {
  id: 'cb-animated-check',
  name: 'Animated Check',
  category: 'checkboxes',
  tags: ['animated', 'css-only', 'stroke'],
  author: 'PriyanshuGupta28',
  html: `<div class="checkbox-wrapper">
  <input checked="" type="checkbox" class="check" id="cb-animated-check">
  <label for="cb-animated-check" class="label">
    <svg width="45" height="45" viewBox="0 0 95 95">
      <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
      <g transform="translate(0,-952.36222)">
        <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" stroke-width="3" fill="none" class="path1"></path>
      </g>
    </svg>
    <span>Checkbox</span>
  </label>
</div>`,
  css: `
.checkbox-wrapper *,
.checkbox-wrapper ::after,
.checkbox-wrapper ::before {
  box-sizing: border-box;
  user-select: none;
}

.checkbox-wrapper {
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: 6px;
}

.checkbox-wrapper input[type="checkbox"] {
  visibility: hidden;
  display: none;
}

.checkbox-wrapper .label {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  color: #1a1a1a;
}

.checkbox-wrapper .check {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.checkbox-wrapper .label svg {
  vertical-align: middle;
}

.checkbox-wrapper .path1 {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: .5s stroke-dashoffset;
  opacity: 0;
}

.checkbox-wrapper .check:checked + label svg g path {
  stroke-dashoffset: 0;
  opacity: 1;
}
`
}
