export default {
  id: 'loader-pcb-circuit',
  name: 'PCB Circuit Loader',
  category: 'loaders',
  tags: ['loader', 'pcb', 'circuit', 'animated', 'css-only', 'electronics', 'data-flow', 'svg', 'tech'],
  author: 'Vosoone',
  html: `<div class="pc-main-container">
  <div class="pc-loader">
    <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pc-chipGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2d2d2d"></stop>
          <stop offset="100%" stop-color="#0f0f0f"></stop>
        </linearGradient>

        <linearGradient id="pc-textGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#eeeeee"></stop>
          <stop offset="100%" stop-color="#888888"></stop>
        </linearGradient>

        <linearGradient id="pc-pinGradient" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stop-color="#bbbbbb"></stop>
          <stop offset="50%" stop-color="#888888"></stop>
          <stop offset="100%" stop-color="#555555"></stop>
        </linearGradient>
      </defs>

      <g id="pc-traces">
        <path d="M100 100 H200 V210 H326" class="pc-trace-bg"></path>
        <path d="M100 100 H200 V210 H326" class="pc-trace-flow pc-purple"></path>

        <path d="M80 180 H180 V230 H326" class="pc-trace-bg"></path>
        <path d="M80 180 H180 V230 H326" class="pc-trace-flow pc-blue"></path>

        <path d="M60 260 H150 V250 H326" class="pc-trace-bg"></path>
        <path d="M60 260 H150 V250 H326" class="pc-trace-flow pc-yellow"></path>

        <path d="M100 350 H200 V270 H326" class="pc-trace-bg"></path>
        <path d="M100 350 H200 V270 H326" class="pc-trace-flow pc-green"></path>

        <path d="M700 90 H560 V210 H474" class="pc-trace-bg"></path>
        <path d="M700 90 H560 V210 H474" class="pc-trace-flow pc-blue"></path>

        <path d="M740 160 H580 V230 H474" class="pc-trace-bg"></path>
        <path d="M740 160 H580 V230 H474" class="pc-trace-flow pc-green"></path>

        <path d="M720 250 H590 V250 H474" class="pc-trace-bg"></path>
        <path d="M720 250 H590 V250 H474" class="pc-trace-flow pc-red"></path>

        <path d="M680 340 H570 V270 H474" class="pc-trace-bg"></path>
        <path d="M680 340 H570 V270 H474" class="pc-trace-flow pc-yellow"></path>
      </g>

      <rect
        x="330"
        y="190"
        width="140"
        height="100"
        rx="20"
        ry="20"
        fill="url(#pc-chipGradient)"
        stroke="#222"
        stroke-width="3"
        filter="drop-shadow(0 0 6px rgba(0,0,0,0.8))"
      ></rect>

      <g>
        <rect x="322" y="205" width="8" height="10" fill="url(#pc-pinGradient)" rx="2"></rect>
        <rect x="322" y="225" width="8" height="10" fill="url(#pc-pinGradient)" rx="2"></rect>
        <rect x="322" y="245" width="8" height="10" fill="url(#pc-pinGradient)" rx="2"></rect>
        <rect x="322" y="265" width="8" height="10" fill="url(#pc-pinGradient)" rx="2"></rect>
      </g>

      <g>
        <rect x="470" y="205" width="8" height="10" fill="url(#pc-pinGradient)" rx="2"></rect>
        <rect x="470" y="225" width="8" height="10" fill="url(#pc-pinGradient)" rx="2"></rect>
        <rect x="470" y="245" width="8" height="10" fill="url(#pc-pinGradient)" rx="2"></rect>
        <rect x="470" y="265" width="8" height="10" fill="url(#pc-pinGradient)" rx="2"></rect>
      </g>

      <text
        x="400"
        y="240"
        font-family="Arial, sans-serif"
        font-size="22"
        fill="url(#pc-textGradient)"
        text-anchor="middle"
        alignment-baseline="middle"
      >
        Loading
      </text>

      <circle cx="100" cy="100" r="5" fill="black"></circle>
      <circle cx="80" cy="180" r="5" fill="black"></circle>
      <circle cx="60" cy="260" r="5" fill="black"></circle>
      <circle cx="100" cy="350" r="5" fill="black"></circle>

      <circle cx="700" cy="90" r="5" fill="black"></circle>
      <circle cx="740" cy="160" r="5" fill="black"></circle>
      <circle cx="720" cy="250" r="5" fill="black"></circle>
      <circle cx="680" cy="340" r="5" fill="black"></circle>
    </svg>
  </div>
</div>`,
  css: `
.pc-main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.pc-loader {
  width: 100%;
}

.pc-trace-bg {
  stroke: #333;
  stroke-width: 1.8;
  fill: none;
}

.pc-trace-flow {
  stroke-width: 1.8;
  fill: none;
  stroke-dasharray: 40 400;
  stroke-dashoffset: 438;
  filter: drop-shadow(0 0 6px currentColor);
  animation: pc-flow 3s cubic-bezier(0.5, 0, 0.9, 1) infinite;
}

.pc-yellow {
  stroke: #ffea00;
  color: #ffea00;
}
.pc-blue {
  stroke: #00ccff;
  color: #00ccff;
}
.pc-green {
  stroke: #00ff15;
  color: #00ff15;
}
.pc-purple {
  stroke: #9900ff;
  color: #9900ff;
}
.pc-red {
  stroke: #ff3300;
  color: #ff3300;
}

@keyframes pc-flow {
  to {
    stroke-dashoffset: 0;
  }
}

.pc-chip-body {
  rx: 20;
  ry: 20;
}

.pc-chip-text {
  font-weight: bold;
  letter-spacing: 1px;
}

.pc-chip-pin {
  stroke: #444;
  stroke-width: 0.5;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.6));
}
`
}