export default {
  id: 'magic-rings',
  name: 'Magic Rings',
  category: 'visual-effects',
  tags: ['rings', 'magic', 'webgl', 'shader', 'animated', 'js-driven', 'glow', 'particles', 'circular'],
  author: 'reactbits-adapted',
  source: 'reactbits.dev',
  variables: [
    { name: '--rings-color', description: 'Color principal de los anillos', default: '#A855F7' },
    { name: '--rings-color-two', description: 'Color secundario (gradiente entre anillos)', default: '#6366F1' },
    { name: '--rings-count', description: 'Numero de anillos', default: '6' },
    { name: '--rings-speed', description: 'Velocidad de animacion', default: '1' },
    { name: '--rings-attenuation', description: 'Atenuacion del brillo', default: '10' },
    { name: '--rings-thickness', description: 'Grosor de linea', default: '2' },
    { name: '--rings-base-radius', description: 'Radio base del primer anillo', default: '0.35' },
    { name: '--rings-radius-step', description: 'Incremento de radio entre anillos', default: '0.1' },
    { name: '--rings-scale-rate', description: 'Velocidad de expansion', default: '0.1' },
    { name: '--rings-opacity', description: 'Opacidad general', default: '1' },
    { name: '--rings-noise', description: 'Cantidad de ruido', default: '0.1' },
    { name: '--rings-rotation', description: 'Rotacion en grados', default: '0' },
    { name: '--rings-gap', description: 'Separacion entre anillos', default: '1.5' },
    { name: '--rings-fade-in', description: 'Velocidad de aparicion', default: '0.7' },
    { name: '--rings-fade-out', description: 'Velocidad de desvanecimiento', default: '0.5' }
  ],
  html: `<div class="magic-rings" data-js-animated="true"
  style="
    --rings-color: #A855F7;
    --rings-color-two: #6366F1;
    --rings-count: 6;
    --rings-speed: 1;
    --rings-attenuation: 10;
    --rings-thickness: 2;
    --rings-base-radius: 0.35;
    --rings-radius-step: 0.1;
    --rings-scale-rate: 0.1;
    --rings-opacity: 1;
    --rings-noise: 0.1;
    --rings-rotation: 0;
    --rings-gap: 1.5;
    --rings-fade-in: 0.7;
    --rings-fade-out: 0.5;
  ">
  <canvas class="magic-rings__canvas"></canvas>
</div>`,
  css: `.magic-rings {
  width: 100%;
  height: 100%;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #050408;
}

.magic-rings__canvas {
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

uniform float uTime, uAttenuation, uLineThickness;
uniform float uBaseRadius, uRadiusStep, uScaleRate;
uniform float uOpacity, uNoiseAmount, uRotation, uRingGap;
uniform float uFadeIn, uFadeOut;
uniform vec2 uResolution;
uniform vec3 uColor, uColorTwo;
uniform int uRingCount;

out vec4 fragColor;

const float HP = 1.5707963;
const float CYCLE = 3.45;

float fade(float t) {
  return t < uFadeIn ? smoothstep(0.0, uFadeIn, t) : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);
}

float ring(vec2 p, float ri, float cut, float t0, float px) {
  float t = mod(uTime + t0, CYCLE);
  float r = ri + t / CYCLE * uScaleRate;
  float d = abs(length(p) - r);
  float a = atan(abs(p.y), abs(p.x)) / HP;
  float th = max(1.0 - a, 0.5) * px * uLineThickness;
  float h = (1.0 - smoothstep(th, th * 1.5, d)) + 1.0;
  d += pow(cut * a, 3.0) * r;
  return h * exp(-uAttenuation * d) * fade(t);
}

void main() {
  float px = 1.0 / min(uResolution.x, uResolution.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;
  float cr = cos(uRotation), sr = sin(uRotation);
  p = mat2(cr, -sr, sr, cr) * p;
  vec3 c = vec3(0.0);
  float rcf = max(float(uRingCount) - 1.0, 1.0);
  for (int i = 0; i < 10; i++) {
    if (i >= uRingCount) break;
    float fi = float(i);
    vec2 pr = p;
    vec3 rc = mix(uColor, uColorTwo, fi / rcf);
    c = mix(c, rc, vec3(ring(pr, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 2.95 * fi, px)));
  }
  float n = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
  c += (n - 0.5) * uNoiseAmount;
  fragColor = vec4(c, max(c.r, max(c.g, c.b)) * uOpacity);
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
      color: readStr(el, '--rings-color', '#A855F7'),
      colorTwo: readStr(el, '--rings-color-two', '#6366F1'),
      ringCount: Math.max(1, Math.min(10, Math.round(readNum(el, '--rings-count', 6)))),
      speed: readNum(el, '--rings-speed', 1),
      attenuation: readNum(el, '--rings-attenuation', 10),
      lineThickness: readNum(el, '--rings-thickness', 2),
      baseRadius: readNum(el, '--rings-base-radius', 0.35),
      radiusStep: readNum(el, '--rings-radius-step', 0.1),
      scaleRate: readNum(el, '--rings-scale-rate', 0.1),
      opacity: readNum(el, '--rings-opacity', 1),
      noiseAmount: readNum(el, '--rings-noise', 0.1),
      rotation: readNum(el, '--rings-rotation', 0),
      ringGap: readNum(el, '--rings-gap', 1.5),
      fadeIn: readNum(el, '--rings-fade-in', 0.7),
      fadeOut: readNum(el, '--rings-fade-out', 0.5)
    };
  }

  function compileShader(gl, type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.error('MagicRings shader error:', gl.getShaderInfoLog(sh));
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
      console.error('MagicRings link error:', gl.getProgramInfoLog(prog));
      gl.deleteProgram(prog);
      return null;
    }
    return prog;
  }

  function setupRings(container) {
    const canvas = container.querySelector('.magic-rings__canvas');
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { alpha: true, antialias: false, stencil: false, depth: false });
    if (!gl) return;

    gl.clearColor(0, 0, 0, 0);

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
    ['uTime','uAttenuation','uLineThickness','uBaseRadius','uRadiusStep','uScaleRate','uOpacity','uNoiseAmount','uRotation','uRingGap','uFadeIn','uFadeOut','uResolution','uColor','uColorTwo','uRingCount'].forEach(name => {
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
      gl.uniform1f(u.uAttenuation, cfg.attenuation);
      gl.uniform1f(u.uLineThickness, cfg.lineThickness);
      gl.uniform1f(u.uBaseRadius, cfg.baseRadius);
      gl.uniform1f(u.uRadiusStep, cfg.radiusStep);
      gl.uniform1f(u.uScaleRate, cfg.scaleRate);
      gl.uniform1f(u.uOpacity, cfg.opacity);
      gl.uniform1f(u.uNoiseAmount, cfg.noiseAmount);
      gl.uniform1f(u.uRotation, cfg.rotation * Math.PI / 180);
      gl.uniform1f(u.uRingGap, cfg.ringGap);
      gl.uniform1f(u.uFadeIn, cfg.fadeIn);
      gl.uniform1f(u.uFadeOut, cfg.fadeOut);
      gl.uniform2f(u.uResolution, w, h);
      const rgb1 = hexToRgb(cfg.color);
      const rgb2 = hexToRgb(cfg.colorTwo);
      gl.uniform3f(u.uColor, rgb1[0], rgb1[1], rgb1[2]);
      gl.uniform3f(u.uColorTwo, rgb2[0], rgb2[1], rgb2[2]);
      gl.uniform1i(u.uRingCount, cfg.ringCount);

      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    rafId = requestAnimationFrame(frame);

    return function destroy() {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }

  function init() {
    document.querySelectorAll('[data-js-animated="true"].magic-rings').forEach(setupRings);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();`
}