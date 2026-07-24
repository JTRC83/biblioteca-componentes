export default {
  id: 'aurora',
  name: 'Aurora',
  category: 'visual-effects',
  tags: ['aurora', 'webgl', 'shader', 'animated', 'js-driven', 'gradient', 'noise', 'snoise', 'color-stops'],
  author: 'reactbits-adapted',
  source: 'reactbits.dev',
  variables: [
    { name: '--aurora-color1', description: 'Primer color del gradiente', default: '#7cff67' },
    { name: '--aurora-color2', description: 'Segundo color del gradiente', default: '#B497CF' },
    { name: '--aurora-color3', description: 'Tercer color del gradiente', default: '#5227FF' },
    { name: '--aurora-blend', description: 'Suavidad del blend (0-1)', default: '0.65' },
    { name: '--aurora-amplitude', description: 'Amplitud de la onda', default: '1' },
    { name: '--aurora-speed', description: 'Velocidad de animacion', default: '1.2' }
  ],
  html: `<div class="aurora" data-js-animated="true"
  style="
    --aurora-color1: #7cff67;
    --aurora-color2: #B497CF;
    --aurora-color3: #5227FF;
    --aurora-blend: 0.65;
    --aurora-amplitude: 1;
    --aurora-speed: 1.2;
  ">
  <canvas class="aurora__canvas"></canvas>
</div>`,
  css: `.aurora {
  width: 100%;
  height: 100%;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #050408;
}

.aurora__canvas {
  display: block;
  width: 100%;
  height: 100%;
}
`,
  js: `(() => {
  const VERT = \`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
\`;

  const FRAG = \`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops0;
uniform vec3 uColorStops1;
uniform vec3 uColorStops2;
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ),
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  float factor = uv.x;
  vec3 rampColor;
  if (factor < 0.5) {
    rampColor = mix(uColorStops0, uColorStops1, factor / 0.5);
  } else {
    rampColor = mix(uColorStops1, uColorStops2, (factor - 0.5) / 0.5);
  }

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;

  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

  vec3 auroraColor = intensity * rampColor;

  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
\`;

  function hexToRgb(hex) {
    const m = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
    return m ? [
      parseInt(m[1], 16) / 255,
      parseInt(m[2], 16) / 255,
      parseInt(m[3], 16) / 255
    ] : [1, 1, 1];
  }

  function readNum(el, name, fallback) {
    const v = getComputedStyle(el).getPropertyValue(name);
    const n = parseFloat(v);
    return isNaN(n) ? fallback : n;
  }

  function readStr(el, name, fallback) {
    const v = getComputedStyle(el).getPropertyValue(name).trim();
    return v || fallback;
  }

  function readConfig(el) {
    return {
      color1: readStr(el, '--aurora-color1', '#7cff67'),
      color2: readStr(el, '--aurora-color2', '#B497CF'),
      color3: readStr(el, '--aurora-color3', '#5227FF'),
      blend: readNum(el, '--aurora-blend', 0.65),
      amplitude: readNum(el, '--aurora-amplitude', 1),
      speed: readNum(el, '--aurora-speed', 1.2)
    };
  }

  function compileShader(gl, type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.error('Aurora shader error:', gl.getShaderInfoLog(sh));
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
      console.error('Aurora link error:', gl.getProgramInfoLog(prog));
      gl.deleteProgram(prog);
      return null;
    }
    return prog;
  }

  function setupAurora(container) {
    const canvas = container.querySelector('.aurora__canvas');
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: true });
    if (!gl) return;

    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    const prog = createProgram(gl, VERT, FRAG);
    if (!prog) return;
    gl.useProgram(prog);

    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(prog, 'position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const u = {};
    ['uTime','uAmplitude','uColorStops0','uColorStops1','uColorStops2','uResolution','uBlend'].forEach(name => {
      u[name] = gl.getUniformLocation(prog, name);
    });

    let cfg = readConfig(container);

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

      gl.uniform1f(u.uTime, (now - startTime) * 0.001 * cfg.speed);
      gl.uniform1f(u.uAmplitude, cfg.amplitude);
      const c1 = hexToRgb(cfg.color1);
      const c2 = hexToRgb(cfg.color2);
      const c3 = hexToRgb(cfg.color3);
      gl.uniform3f(u.uColorStops0, c1[0], c1[1], c1[2]);
      gl.uniform3f(u.uColorStops1, c2[0], c2[1], c2[2]);
      gl.uniform3f(u.uColorStops2, c3[0], c3[1], c3[2]);
      gl.uniform2f(u.uResolution, w, h);
      gl.uniform1f(u.uBlend, cfg.blend);

      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    rafId = requestAnimationFrame(frame);

    return function destroy() {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }

  function init() {
    document.querySelectorAll('[data-js-animated="true"].aurora').forEach(setupAurora);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();`
}