export default {
  id: 'loader-tetris',
  name: 'Tetris Loader',
  category: 'loaders',
  tags: ['tetris', 'game', 'animated', 'css-only'],
  author: 'Danishrehman786 (CSS simplified)',
  html: `<div class="ld-tetris">
  <div class="ld-tetris__grid">
    <div class="ld-tetris__piece ld-tetris__piece--i"><i></i><i></i><i></i><i></i></div>
    <div class="ld-tetris__piece ld-tetris__piece--o"><i></i><i></i><i></i><i></i></div>
    <div class="ld-tetris__piece ld-tetris__piece--l"><i></i><i></i><i></i><i></i></div>
    <div class="ld-tetris__piece ld-tetris__piece--t"><i></i><i></i><i></i><i></i></div>
    <div class="ld-tetris__piece ld-tetris__piece--s"><i></i><i></i><i></i><i></i></div>
  </div>
  <p class="ld-tetris__text">Loading...</p>
</div>`,
  css: `
.ld-tetris {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.ld-tetris__grid {
  position: relative;
  width: 80px;
  height: 160px;
  border: 2px solid #333;
  background: #fff;
  overflow: hidden;
}

.ld-tetris__piece {
  position: absolute;
  top: -40px;
  animation: ld-tetris-fall 3s linear infinite;
}

.ld-tetris__piece > i {
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  background: #000;
  border: 1px solid #444;
  box-sizing: border-box;
}

/* I-piece (horizontal 4 cells) */
.ld-tetris__piece--i {
  width: 32px;
  left: 16px;
  animation-delay: 0s;
}
.ld-tetris__piece--i > i:nth-child(1) { left: 0; }
.ld-tetris__piece--i > i:nth-child(2) { left: 8px; }
.ld-tetris__piece--i > i:nth-child(3) { left: 16px; }
.ld-tetris__piece--i > i:nth-child(4) { left: 24px; }

/* O-piece (2x2) */
.ld-tetris__piece--o {
  width: 16px;
  left: 48px;
  animation-delay: 0.6s;
}
.ld-tetris__piece--o > i:nth-child(1) { left: 0; top: 0; }
.ld-tetris__piece--o > i:nth-child(2) { left: 8px; top: 0; }
.ld-tetris__piece--o > i:nth-child(3) { left: 0; top: 8px; }
.ld-tetris__piece--o > i:nth-child(4) { left: 8px; top: 8px; }

/* L-piece */
.ld-tetris__piece--l {
  width: 24px;
  left: 8px;
  animation-delay: 1.2s;
}
.ld-tetris__piece--l > i:nth-child(1) { left: 0; top: 0; }
.ld-tetris__piece--l > i:nth-child(2) { left: 0; top: 8px; }
.ld-tetris__piece--l > i:nth-child(3) { left: 0; top: 16px; }
.ld-tetris__piece--l > i:nth-child(4) { left: 8px; top: 16px; }

/* T-piece */
.ld-tetris__piece--t {
  width: 24px;
  left: 32px;
  animation-delay: 1.8s;
}
.ld-tetris__piece--t > i:nth-child(1) { left: 0; top: 0; }
.ld-tetris__piece--t > i:nth-child(2) { left: 8px; top: 0; }
.ld-tetris__piece--t > i:nth-child(3) { left: 16px; top: 0; }
.ld-tetris__piece--t > i:nth-child(4) { left: 8px; top: 8px; }

/* S-piece */
.ld-tetris__piece--s {
  width: 24px;
  left: 24px;
  animation-delay: 2.4s;
}
.ld-tetris__piece--s > i:nth-child(1) { left: 8px; top: 0; }
.ld-tetris__piece--s > i:nth-child(2) { left: 16px; top: 0; }
.ld-tetris__piece--s > i:nth-child(3) { left: 0; top: 8px; }
.ld-tetris__piece--s > i:nth-child(4) { left: 8px; top: 8px; }

@keyframes ld-tetris-fall {
  0% {
    top: -40px;
    opacity: 1;
  }
  85% {
    top: 120px;
    opacity: 1;
  }
  92% {
    top: 136px;
    opacity: 0.5;
    animation-timing-function: ease-out;
  }
  100% {
    top: 160px;
    opacity: 0;
  }
}

.ld-tetris__text {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: #333;
  font-family: monospace;
}

@media (prefers-color-scheme: dark) {
  .ld-tetris__grid {
    border-color: #ddd;
    background: #000;
  }
  .ld-tetris__piece > i {
    background: #fff;
    border-color: #aaa;
  }
  .ld-tetris__text {
    color: #ddd;
  }
}
`
}