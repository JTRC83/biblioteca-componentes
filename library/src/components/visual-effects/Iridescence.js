export default {
  id: 'iridescence',
  name: 'Iridescence',
  category: 'visual-effects',
  tags: ['iridescence', 'iridescent', 'webgl', 'shader', 'animated', 'js-driven', 'color', 'gradient', 'mouse'],
  author: 'reactbits-adapted',
  source: 'reactbits.dev',
  variables: [
    { name: '--irid-color-r', description: 'Color R (0-1)', default: '0.5' },
    { name: '--irid-color-g', description: 'Color G (0-1)', default: '0.6' },
    { name: '--irid-color-b', description: 'Color B (0-1)', default: '0.8' },
    { name: '--irid-speed', description: 'Velocidad de animacion', default: '1' },
    { name: '--irid-amplitude', description: 'Amplitud del efecto mouse', default: '0.1' }
  ],
  html: `<div class="iridescence" data-js-animated="true"
  style="
    --irid-color-r: 0.5;
    --irid-color-g: 0.6;
    --irid-color-b: 0.8;
    --irid-speed: 1;
    --irid-amplitude: 0.1;
  ">
  <canvas class="iridescence__canvas"></canvas>
</div>`,
  css: `.iridescence {
  width: 100%;
  height: 100%;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
}

.iridescence__canvas {
  display: block;
  width: 100%;
  height: 100%;
}
`,
  js: `(() => {
  const VERT = \`#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
\`;

  const FRAG = \`#version 300 es
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

in vec2 vUv;
out vec4 fragColor;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;
  uv += (uMouse - vec2(0.5)) * uAmplitude;
  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  fragColor = vec4(col, 1.0);
}
\`;

  function readNum(el, name, fallback) {
    const v = getComputedStyle(el).getPropertyValue(name);
    const n = parseFloat(v);
    return isNaN(n) ? fallback : n;
  }

  function readConfig(el) {
    return {
      colorR: readNum(el, '--irid-color-r', 0.5),
      colorG: readNum(el, '--irid-color-g', 0.6),
      colorB: readNum(el, '--irid-color-b', 0.8),
      speed: readNum(el, '--irid-speed', 1),
      amplitude: readNum(el, '--irid-amplitude', 0.1)
    };
  }

  function compileShader(gl, type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.error('Iridescence shader error:', gl.getShaderInfoLog(sh));
      gl.deleteShader(sh);
      return null;
    }
    return sh;
  }

  function createProgram(gl, vs, fs) {
    const vsh = compileShader(gl, gl.VERTEX_SHADER, vs);
    const fsh = compileShader(gl, gl.FRAGMENT_SHADER, fs);
    if (!vsh || !fsh) return null;
    const prog = gl.createProgram();
    gl.attachShader(prog, vsh);
    gl.attachShader(prog, fsh);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('Iridescence link error:', gl.getProgramInfoLog(prog));
      gl.deleteProgram(prog);
      return null;
    }
    return prog;
  }

  function setupIrid(container) {
    const canvas = container.querySelector('.iridescence__canvas');
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, stencil: false, depth: false });
    if (!gl) return;

    gl.clearColor(0, 0, 0, 1);

    const prog = createProgram(gl, VERT, FRAG);
    if (!prog) return;
    gl.useProgram(prog);

    const vertices = new Float32Array([
      -1, -1, 0, 0,
       3, -1, 2, 0,
      -1,  3, 0, 2
    ]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prog, 'position');
    const uvLoc = gl.getAttribLocation(prog, 'uv');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(uvLoc);
    gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 16, 8);

    const u = {};
    ['uTime','uColor','uResolution','uMouse','uAmplitude','uSpeed'].forEach(name => {
      u[name] = gl.getUniformLocation(prog, name);
    });

    let cfg = readConfig(container);
    let mouseX = 0.5, mouseY = 0.5;

    function onMove(e) {
      const rect = container.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = 1.0 - (e.clientY - rect.top) / rect.height;
    }
    container.addEventListener('mousemove', onMove);

    function resize() {
      const rect = container.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
    }

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    let lastCfgCheck = 0;
    const startTime = performance.now();
    let rafId = 0;

    function frame() {
      rafId = requestAnimationFrame(frame);

      const now = performance.now();
      if (now - lastCfgCheck > 500) {
        cfg = readConfig(container);
        lastCfgCheck = now;
      }

      const w = canvas.width;
      const h = canvas.height;
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(u.uTime, (now - startTime) * 0.001);
      gl.uniform3f(u.uColor, cfg.colorR, cfg.colorG, cfg.colorB);
      gl.uniform3f(u.uResolution, w, h, w / h);
      gl.uniform2f(u.uMouse, mouseX, mouseY);
      gl.uniform1f(u.uAmplitude, cfg.amplitude);
      gl.uniform1f(u.uSpeed, cfg.speed);

      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    rafId = requestAnimationFrame(frame);

    return function destroy() {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      container.removeEventListener('mousemove', onMove);
    };
  }

  function init() {
    document.querySelectorAll('[data-js-animated="true"].iridescence').forEach(setupIrid);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();`
}