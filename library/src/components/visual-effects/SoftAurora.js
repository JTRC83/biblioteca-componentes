export default {
  id: 'soft-aurora',
  name: 'Soft Aurora',
  category: 'visual-effects',
  tags: ['aurora', 'soft', 'webgl', 'shader', 'animated', 'js-driven', 'gradient', 'noise', 'perlin', 'mouse'],
  author: 'reactbits-adapted',
  source: 'reactbits.dev',
  variables: [
    { name: '--aurora-speed', description: 'Velocidad de animacion', default: '0.7' },
    { name: '--aurora-scale', description: 'Escala del patron', default: '2.1' },
    { name: '--aurora-brightness', description: 'Brillo', default: '1' },
    { name: '--aurora-color1', description: 'Color primario', default: '#f7f7f7' },
    { name: '--aurora-color2', description: 'Color secundario', default: '#e100ff' },
    { name: '--aurora-noise-freq', description: 'Frecuencia del ruido', default: '2.5' },
    { name: '--aurora-noise-amp', description: 'Amplitud del ruido', default: '3' },
    { name: '--aurora-band-height', description: 'Altura de la banda', default: '0.5' },
    { name: '--aurora-band-spread', description: 'Dispersión de la banda', default: '1.3' },
    { name: '--aurora-octave-decay', description: 'Decaimiento por octava', default: '0.36' },
    { name: '--aurora-layer-offset', description: 'Offset entre capas', default: '0' },
    { name: '--aurora-color-speed', description: 'Velocidad del cambio de color', default: '1.7' },
    { name: '--aurora-mouse-influence', description: 'Influencia del ratón', default: '0.25' }
  ],
  html: `<div class="soft-aurora" data-js-animated="true"
  style="
    --aurora-speed: 0.7;
    --aurora-scale: 2.1;
    --aurora-brightness: 1;
    --aurora-color1: #f7f7f7;
    --aurora-color2: #e100ff;
    --aurora-noise-freq: 2.5;
    --aurora-noise-amp: 3;
    --aurora-band-height: 0.5;
    --aurora-band-spread: 1.3;
    --aurora-octave-decay: 0.36;
    --aurora-layer-offset: 0;
    --aurora-color-speed: 1.7;
    --aurora-mouse-influence: 0.25;
  ">
  <canvas class="soft-aurora__canvas"></canvas>
</div>`,
  css: `.soft-aurora {
  width: 100%;
  height: 100%;
  min-height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #050408;
}

.soft-aurora__canvas {
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
uniform vec3 uResolution;
uniform float uSpeed;
uniform float uScale;
uniform float uBrightness;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uNoiseFreq;
uniform float uNoiseAmp;
uniform float uBandHeight;
uniform float uBandSpread;
uniform float uOctaveDecay;
uniform float uLayerOffset;
uniform float uColorSpeed;
uniform vec2 uMouse;
uniform float uMouseInfluence;
uniform int uEnableMouse;

out vec4 fragColor;

#define TAU 6.28318

vec3 gradientHash(vec3 p) {
  p = vec3(
    dot(p, vec3(127.1, 311.7, 234.6)),
    dot(p, vec3(269.5, 183.3, 198.3)),
    dot(p, vec3(169.5, 283.3, 156.9))
  );
  vec3 h = fract(sin(p) * 43758.5453123);
  float phi = acos(2.0 * h.x - 1.0);
  float theta = TAU * h.y;
  return vec3(cos(theta) * sin(phi), sin(theta) * cos(phi), cos(phi));
}

float quinticSmooth(float t) {
  float t2 = t * t;
  float t3 = t * t2;
  return 6.0 * t3 * t2 - 15.0 * t2 * t2 + 10.0 * t3;
}

vec3 cosineGradient(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(TAU * (c * t + d));
}

float perlin3D(float amplitude, float frequency, float px, float py, float pz) {
  float x = px * frequency;
  float y = py * frequency;

  float fx = floor(x); float fy = floor(y); float fz = floor(pz);
  float cx = ceil(x);  float cy = ceil(y);  float cz = ceil(pz);

  vec3 g000 = gradientHash(vec3(fx, fy, fz));
  vec3 g100 = gradientHash(vec3(cx, fy, fz));
  vec3 g010 = gradientHash(vec3(fx, cy, fz));
  vec3 g110 = gradientHash(vec3(cx, cy, fz));
  vec3 g001 = gradientHash(vec3(fx, fy, cz));
  vec3 g101 = gradientHash(vec3(cx, fy, cz));
  vec3 g011 = gradientHash(vec3(fx, cy, cz));
  vec3 g111 = gradientHash(vec3(cx, cy, cz));

  float d000 = dot(g000, vec3(x - fx, y - fy, pz - fz));
  float d100 = dot(g100, vec3(x - cx, y - fy, pz - fz));
  float d010 = dot(g010, vec3(x - fx, y - cy, pz - fz));
  float d110 = dot(g110, vec3(x - cx, y - cy, pz - fz));
  float d001 = dot(g001, vec3(x - fx, y - fy, pz - cz));
  float d101 = dot(g101, vec3(x - cx, y - fy, pz - cz));
  float d011 = dot(g011, vec3(x - fx, y - cy, pz - cz));
  float d111 = dot(g111, vec3(x - cx, y - cy, pz - cz));

  float sx = quinticSmooth(x - fx);
  float sy = quinticSmooth(y - fy);
  float sz = quinticSmooth(pz - fz);

  float lx00 = mix(d000, d100, sx);
  float lx10 = mix(d010, d110, sx);
  float lx01 = mix(d001, d101, sx);
  float lx11 = mix(d011, d111, sx);

  float ly0 = mix(lx00, lx10, sy);
  float ly1 = mix(lx01, lx11, sy);

  return amplitude * mix(ly0, ly1, sz);
}

float auroraGlow(float t, vec2 shift) {
  vec2 uv = gl_FragCoord.xy / uResolution.y;
  uv += shift;

  float noiseVal = 0.0;
  float freq = uNoiseFreq;
  float amp = uNoiseAmp;
  vec2 samplePos = uv * uScale;

  for (float i = 0.0; i < 3.0; i += 1.0) {
    noiseVal += perlin3D(amp, freq, samplePos.x, samplePos.y, t);
    amp *= uOctaveDecay;
    freq *= 2.0;
  }

  float yBand = uv.y * 10.0 - uBandHeight * 10.0;
  return 0.3 * max(exp(uBandSpread * (1.0 - 1.1 * abs(noiseVal + yBand))), 0.0);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float t = uSpeed * 0.4 * uTime;

  vec2 shift = vec2(0.0);
  if (uEnableMouse == 1) {
    shift = (uMouse - 0.5) * uMouseInfluence;
  }

  vec3 col = vec3(0.0);
  col += 0.99 * auroraGlow(t, shift) * cosineGradient(uv.x + uTime * uSpeed * 0.2 * uColorSpeed, vec3(0.5), vec3(0.5), vec3(1.0), vec3(0.3, 0.20, 0.20)) * uColor1;
  col += 0.99 * auroraGlow(t + uLayerOffset, shift) * cosineGradient(uv.x + uTime * uSpeed * 0.1 * uColorSpeed, vec3(0.5), vec3(0.5), vec3(2.0, 1.0, 0.0), vec3(0.5, 0.20, 0.25)) * uColor2;

  col *= uBrightness;
  float alpha = clamp(length(col), 0.0, 1.0);
  fragColor = vec4(col, alpha);
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
      speed: readNum(el, '--aurora-speed', 0.7),
      scale: readNum(el, '--aurora-scale', 2.1),
      brightness: readNum(el, '--aurora-brightness', 1),
      color1: readStr(el, '--aurora-color1', '#f7f7f7'),
      color2: readStr(el, '--aurora-color2', '#e100ff'),
      noiseFreq: readNum(el, '--aurora-noise-freq', 2.5),
      noiseAmp: readNum(el, '--aurora-noise-amp', 3),
      bandHeight: readNum(el, '--aurora-band-height', 0.5),
      bandSpread: readNum(el, '--aurora-band-spread', 1.3),
      octaveDecay: readNum(el, '--aurora-octave-decay', 0.36),
      layerOffset: readNum(el, '--aurora-layer-offset', 0),
      colorSpeed: readNum(el, '--aurora-color-speed', 1.7),
      mouseInfluence: readNum(el, '--aurora-mouse-influence', 0.25)
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
    const canvas = container.querySelector('.soft-aurora__canvas');
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: false, antialias: false, stencil: false, depth: false });
    if (!gl) return;

    gl.clearColor(0.02, 0.015, 0.03, 1);

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
    ['uTime','uResolution','uSpeed','uScale','uBrightness','uColor1','uColor2','uNoiseFreq','uNoiseAmp','uBandHeight','uBandSpread','uOctaveDecay','uLayerOffset','uColorSpeed','uMouse','uMouseInfluence','uEnableMouse'].forEach(name => {
      u[name] = gl.getUniformLocation(prog, name);
    });

    let cfg = readConfig(container);
    let mouseX = 0.5, mouseY = 0.5;
    let targetMouseX = 0.5, targetMouseY = 0.5;

    function onMove(e) {
      const rect = container.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left) / rect.width;
      targetMouseY = 1.0 - (e.clientY - rect.top) / rect.height;
    }
    function onLeave() {
      targetMouseX = 0.5;
      targetMouseY = 0.5;
    }
    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);

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

      mouseX += 0.05 * (targetMouseX - mouseX);
      mouseY += 0.05 * (targetMouseY - mouseY);

      const w = canvas.width;
      const h = canvas.height;
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(u.uTime, (now - startTime) * 0.001);
      gl.uniform3f(u.uResolution, w, h, w / h);
      gl.uniform1f(u.uSpeed, cfg.speed);
      gl.uniform1f(u.uScale, cfg.scale);
      gl.uniform1f(u.uBrightness, cfg.brightness);
      const c1 = hexToRgb(cfg.color1);
      const c2 = hexToRgb(cfg.color2);
      gl.uniform3f(u.uColor1, c1[0], c1[1], c1[2]);
      gl.uniform3f(u.uColor2, c2[0], c2[1], c2[2]);
      gl.uniform1f(u.uNoiseFreq, cfg.noiseFreq);
      gl.uniform1f(u.uNoiseAmp, cfg.noiseAmp);
      gl.uniform1f(u.uBandHeight, cfg.bandHeight);
      gl.uniform1f(u.uBandSpread, cfg.bandSpread);
      gl.uniform1f(u.uOctaveDecay, cfg.octaveDecay);
      gl.uniform1f(u.uLayerOffset, cfg.layerOffset);
      gl.uniform1f(u.uColorSpeed, cfg.colorSpeed);
      gl.uniform2f(u.uMouse, mouseX, mouseY);
      gl.uniform1f(u.uMouseInfluence, cfg.mouseInfluence);
      gl.uniform1i(u.uEnableMouse, 1);

      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    rafId = requestAnimationFrame(frame);

    return function destroy() {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
    };
  }

  function init() {
    document.querySelectorAll('[data-js-animated="true"].soft-aurora').forEach(setupAurora);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();`
}