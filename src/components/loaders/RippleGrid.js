export default {
  id: 'loader-ripple-grid',
  name: 'Ripple Grid Loader',
  category: 'loaders',
  tags: ['loader', 'ripple', 'grid', 'animated', 'css-only', 'cells', 'pulse', 'wave'],
  author: 'alexruix',
  html: `<div class="rg-loader">
  <div class="rg-cell rg-d-0"></div>
  <div class="rg-cell rg-d-1"></div>
  <div class="rg-cell rg-d-2"></div>

  <div class="rg-cell rg-d-1"></div>
  <div class="rg-cell rg-d-2"></div>


  <div class="rg-cell rg-d-2"></div>
  <div class="rg-cell rg-d-3"></div>


  <div class="rg-cell rg-d-3"></div>
  <div class="rg-cell rg-d-4"></div>


</div>`,
  css: `
.rg-loader {
  --rg-cell-size: 52px;
  --rg-cell-spacing: 1px;
  --rg-cells: 3;
  --rg-total-size: calc(var(--rg-cells) * (var(--rg-cell-size) + 2 * var(--rg-cell-spacing)));
  display: flex;
  flex-wrap: wrap;
  width: var(--rg-total-size);
  height: var(--rg-total-size);
}

.rg-cell {
  flex: 0 0 var(--rg-cell-size);
  margin: var(--rg-cell-spacing);
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 4px;
  animation: 1.5s rg-ripple ease infinite;
}

.rg-cell.rg-d-1 {
  animation-delay: 100ms;
}

.rg-cell.rg-d-2 {
  animation-delay: 200ms;
}

.rg-cell.rg-d-3 {
  animation-delay: 300ms;
}

.rg-cell.rg-d-4 {
  animation-delay: 400ms;
}

.rg-cell:nth-child(1) {
  --rg-cell-color: #00FF87;
}

.rg-cell:nth-child(2) {
  --rg-cell-color: #0CFD95;
}

.rg-cell:nth-child(3) {
  --rg-cell-color: #17FBA2;
}

.rg-cell:nth-child(4) {
  --rg-cell-color: #23F9B2;
}

.rg-cell:nth-child(5) {
  --rg-cell-color: #30F7C3;
}

.rg-cell:nth-child(6) {
  --rg-cell-color: #3DF5D4;
}

.rg-cell:nth-child(7) {
  --rg-cell-color: #45F4DE;
}

.rg-cell:nth-child(8) {
  --rg-cell-color: #53F1F0;
}

.rg-cell:nth-child(9) {
  --rg-cell-color: #60EFFF;
}

@keyframes rg-ripple {
  0% {
    background-color: transparent;
  }

  30% {
    background-color: var(--rg-cell-color);
  }

  60% {
    background-color: transparent;
  }

  100% {
    background-color: transparent;
  }
}
`
}