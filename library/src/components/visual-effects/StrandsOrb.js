export default {
  id: 'orb-strands',
  name: 'Strands Orb',
  category: 'visual-effects',
  tags: ['orb', 'sphere', 'glass', 'refraction', 'dispersion', 'strands', 'animated', 'gradient', 'shader', 'js-driven', 'webgl'],
  author: 'reactbits-adapted',
  source: 'reactbits.dev',
  variables: [
    { name: '--orb-count', description: 'Número de strands animados', default: '6' },
    { name: '--orb-speed', description: 'Velocidad de la animación', default: '0.4' },
    { name: '--orb-amplitude', description: 'Altura vertical de las ondas', default: '2.7' },
    { name: '--orb-waviness', description: 'Densidad de curvas por strand', default: '1.3' },
    { name: '--orb-thickness', description: 'Grosor de cada strand', default: '1.5' },
    { name: '--orb-glow', description: 'Intensidad del brillo', default: '0.95' },
    { name: '--orb-taper', description: 'Desvanecimiento hacia los bordes', default: '3' },
    { name: '--orb-spread', description: 'Separación entre strands', default: '3' },
    { name: '--orb-hue-shift', description: 'Desplazamiento del ciclo de color', default: '0.11' },
    { name: '--orb-intensity', description: 'Energía general del brillo', default: '0.75' },
    { name: '--orb-saturation', description: 'Saturación de los colores', default: '2' },
    { name: '--orb-opacity', description: 'Opacidad de cada strand', default: '0.55' },
    { name: '--orb-scale', description: 'Zoom del patrón de strands', default: '1.7' },
    { name: '--orb-refraction', description: 'Refracción del cristal', default: '0' },
    { name: '--orb-dispersion', description: 'Dispersión cromática en el borde', default: '2.05' },
    { name: '--orb-glass-size', description: 'Tamaño de la esfera de cristal', default: '1' },
    { name: '--orb-color-1', description: 'Primer color de la paleta', default: '#F97316' },
    { name: '--orb-color-2', description: 'Segundo color de la paleta', default: '#7C3AED' },
    { name: '--orb-color-3', description: 'Tercer color de la paleta', default: '#06B6D4' },
    { name: '--orb-color-4', description: 'Cuarto color de la paleta', default: '#EAB308' }
  ],
  html: `<div class="strands-orb" data-js-animated="true"
  style="
    --orb-count: 6;
    --orb-speed: 0.4;
    --orb-amplitude: 2.7;
    --orb-waviness: 1.3;
    --orb-thickness: 1.5;
    --orb-glow: 0.95;
    --orb-taper: 3;
    --orb-spread: 3;
    --orb-hue-shift: 0.11;
    --orb-intensity: 0.75;
    --orb-saturation: 2;
    --orb-opacity: 0.55;
    --orb-scale: 1.7;
    --orb-refraction: 1.05;
    --orb-dispersion: 2.05;
    --orb-glass-size: 1;
    --orb-color-1: #F97316;
    --orb-color-2: #7C3AED;
    --orb-color-3: #06B6D4;
    --orb-color-4: #EAB308;
  ">
  <canvas class="strands-orb__canvas"></canvas>
</div>`,
  css: `.strands-orb {
  width: 100%;
  height: 100%;
  min-height: 200px;
  position: relative;
  background: #050408;
  overflow: hidden;
  border-radius: 16px;
}

.strands-orb__canvas {
  display: block;
  width: 100%;
  height: 100%;
}
`,
  js: `(() => {
  const MAX_STRANDS = 12;
  const MAX_COLORS = 8;

  const VERT = \`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
\`;

  const FRAG = \`#version 300 es
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColors[\${MAX_COLORS}];
uniform int uColorCount;
uniform int uStrandCount;
uniform float uSpeed;
uniform float uAmplitude;
uniform float uWaviness;
uniform float uThickness;
uniform float uGlow;
uniform float uTaper;
uniform float uSpread;
uniform float uHueShift;
uniform float uIntensity;
uniform float uOpacity;
uniform float uScale;
uniform float uSaturation;

out vec4 fragColor;

const float PI = 3.14159265;

vec3 spectrum(float t) {
  return 0.5 + 0.5 * cos(2.0 * PI * (t + vec3(0.00, 0.33, 0.67)));
}

vec3 samplePalette(float t) {
  t = fract(t);
  float scaled = t * float(uColorCount);
  int idx = int(floor(scaled));
  float blend = fract(scaled);
  int nextIdx = idx + 1;
  if (nextIdx >= uColorCount) nextIdx = 0;
  return mix(uColors[idx], uColors[nextIdx], blend);
}

vec3 strandColor(float t) {
  if (uColorCount > 0) return samplePalette(t);
  return spectrum(t);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  uv /= max(uScale, 0.0001);

  float e = 0.06 + uIntensity * 0.94;
  float env = pow(max(cos(uv.x * PI * 1.3), 0.0), uTaper);

  vec3 col = vec3(0.0);

  for (int i = 0; i < \${MAX_STRANDS}; i++) {
    if (i >= uStrandCount) break;

    float fi = float(i);
    float ph = fi * 1.7 * uSpread;
    float freq = (2.0 + fi * 0.35) * uWaviness;
    float spd = 1.4 + fi * 1.2;

    float tt = uTime * uSpeed;
    float w = sin(uv.x * freq + tt * spd + ph) * 0.60
            + sin(uv.x * freq * 1.1 - tt * spd * 0.7 + ph * 1.7) * 0.40;

    float amp = (0.1 + 0.02 * e) * env * uAmplitude;
    float y = w * amp;

    float d = abs(uv.y - y);
    float thick = (0.001 + 0.05 * e) * (0.35 + env) * uThickness;
    float g = thick / (d + thick * 0.45);
    g = g * g;

    float h = fi / float(uStrandCount) + uv.x * 0.30 + uTime * 0.04 + uHueShift;
    col += strandColor(h) * g * env;
  }

  col *= 0.45 + 0.7 * e;
  col = 1.0 - exp(-col * uGlow);

  float gray = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = max(mix(vec3(gray), col, uSaturation), 0.0);

  float lum = max(max(col.r, col.g), col.b);
  float alpha = clamp(lum, 0.0, 1.0) * uOpacity;

  fragColor = vec4(col * uOpacity, alpha);
}
\`;

  const GLASS_FRAG = \`#version 300 es
precision highp float;

uniform sampler2D uScene;
uniform vec2 uResolution;
uniform float uRadius;
uniform float uRefraction;
uniform float uDispersion;

out vec4 fragColor;

vec2 toUv(vec2 p) {
  return p * (uResolution.y / uResolution) + 0.5;
}

void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  float d = length(p);
  float r = uRadius;

  float edge = fwidth(d) * 1.5;
  float mask = 1.0 - smoothstep(r - edge, r + edge, d);
  if (mask <= 0.0) {
    fragColor = vec4(0.0);
    return;
  }

  float z = sqrt(max(r * r - d * d, 0.0)) / r;
  float nd = d / r;

  vec2 dir = d > 0.0 ? p / d : vec2(0.0);
  float lens = smoothstep(0.85, 1.0, nd) * pow(nd, 6.0);
  vec2 offset = -dir * lens * uRefraction * 0.15;
  vec2 disp = -dir * lens * uDispersion * 0.012;

  vec3 light;
  light.r = texture(uScene, toUv(p + offset - disp)).r;
  light.g = texture(uScene, toUv(p + offset)).g;
  light.b = texture(uScene, toUv(p + offset + disp)).b;

  float fres = pow(1.0 - z, 3.0);
  vec3 rim = vec3(1.0) * fres * 0.18;

  vec2 lightDir = normalize(vec2(-0.55, 0.6));
  float spec = pow(max(dot(p / max(r, 1e-4), lightDir), 0.0), 6.0);
  spec *= smoothstep(r, r * 0.55, d);

  vec3 emissive = light + rim + vec3(spec) * 0.4;
  float emissiveA = clamp(max(max(emissive.r, emissive.g), emissive.b), 0.0, 1.0);

  float bodyA = 0.05 + fres * 0.05;

  float outA = emissiveA + bodyA * (1.0 - emissiveA);
  vec3 outRGB = emissive;

  outRGB *= mask;
  outA *= mask;

  fragColor = vec4(outRGB, outA);
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

  function buildPalette(colors) {
    const filled = colors && colors.length ? colors : ['#ffffff'];
    const padded = [];
    for (let i = 0; i < MAX_COLORS; i++) {
      const hex = filled[i] != null ? filled[i] : filled[filled.length - 1];
      padded.push(hexToRgb(hex));
    }
    return padded;
  }

  function readNum(el, name, fallback) {
    const v = getComputedStyle(el).getPropertyValue(name);
    const n = parseFloat(v);
    return isNaN(n) ? fallback : n;
  }

  function readColor(el, name) {
    return getComputedStyle(el).getPropertyValue(name).trim() || '#ffffff';
  }

  function readConfig(el) {
    return {
      count: Math.max(1, Math.min(MAX_STRANDS, Math.round(readNum(el, '--orb-count', 6)))),
      speed: readNum(el, '--orb-speed', 0.4),
      amplitude: readNum(el, '--orb-amplitude', 2.7),
      waviness: readNum(el, '--orb-waviness', 1.3),
      thickness: readNum(el, '--orb-thickness', 1.5),
      glow: readNum(el, '--orb-glow', 0.95),
      taper: readNum(el, '--orb-taper', 3),
      spread: readNum(el, '--orb-spread', 3),
      hueShift: readNum(el, '--orb-hue-shift', 0.11),
      intensity: readNum(el, '--orb-intensity', 0.75),
      saturation: readNum(el, '--orb-saturation', 2),
      opacity: readNum(el, '--orb-opacity', 0.55),
      scale: readNum(el, '--orb-scale', 1.7),
      refraction: readNum(el, '--orb-refraction', 0),
      dispersion: readNum(el, '--orb-dispersion', 2.05),
      glassSize: readNum(el, '--orb-glass-size', 1),
      colors: [
        readColor(el, '--orb-color-1'),
        readColor(el, '--orb-color-2'),
        readColor(el, '--orb-color-3'),
        readColor(el, '--orb-color-4')
      ].filter(c => c && c !== 'undefined')
    };
  }

  function compileShader(gl, type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    return sh;
  }

  function createProgram(gl, vs, fs) {
    const prog = gl.createProgram();
    gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    return prog;
  }

  function setupOrb(container) {
    const canvas = container.querySelector('.strands-orb__canvas');
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: true });
    if (!gl) return;

    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    const prog = createProgram(gl, VERT, FRAG);
    const glassProg = createProgram(gl, VERT, GLASS_FRAG);

    const triangle = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, triangle, gl.STATIC_DRAW);

    function bindAttrib(program) {
      const loc = gl.getAttribLocation(program, 'position');
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    }

    function getU(program, name) {
      return gl.getUniformLocation(program, name);
    }

    const u = {
      time: getU(prog, 'uTime'),
      res: getU(prog, 'uResolution'),
      colors: getU(prog, 'uColors'),
      colorCount: getU(prog, 'uColorCount'),
      strandCount: getU(prog, 'uStrandCount'),
      speed: getU(prog, 'uSpeed'),
      amplitude: getU(prog, 'uAmplitude'),
      waviness: getU(prog, 'uWaviness'),
      thickness: getU(prog, 'uThickness'),
      glow: getU(prog, 'uGlow'),
      taper: getU(prog, 'uTaper'),
      spread: getU(prog, 'uSpread'),
      hueShift: getU(prog, 'uHueShift'),
      intensity: getU(prog, 'uIntensity'),
      opacity: getU(prog, 'uOpacity'),
      scale: getU(prog, 'uScale'),
      saturation: getU(prog, 'uSaturation')
    };

    const ug = {
      scene: getU(glassProg, 'uScene'),
      res: getU(glassProg, 'uResolution'),
      radius: getU(glassProg, 'uRadius'),
      refraction: getU(glassProg, 'uRefraction'),
      dispersion: getU(glassProg, 'uDispersion')
    };

    let renderTarget = null;
    let rtWidth = 0, rtHeight = 0;

    function ensureRenderTarget(w, h) {
      if (renderTarget && rtWidth === w && rtHeight === h) return;
      if (renderTarget) {
        gl.deleteTexture(renderTarget.texture);
        gl.deleteFramebuffer(renderTarget.fb);
      }
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      const fb = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      renderTarget = { texture: tex, fb };
      rtWidth = w;
      rtHeight = h;
    }

    function resize() {
      const w = Math.max(1, container.clientWidth);
      const h = Math.max(1, container.clientHeight);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = Math.round(w * dpr);
      const ch = Math.round(h * dpr);
      canvas.width = cw;
      canvas.height = ch;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ensureRenderTarget(cw, ch);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    let cfg = readConfig(container);
    let lastCfgCheck = 0;

    function frame(now) {
      requestAnimationFrame(frame);
      if (now - lastCfgCheck > 500) {
        cfg = readConfig(container);
        lastCfgCheck = now;
      }

      const w = canvas.width;
      const h = canvas.height;

      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(prog);
      bindAttrib(prog);
      gl.uniform1f(u.time, now * 0.001);
      gl.uniform2f(u.res, w, h);
      const palette = buildPalette(cfg.colors);
      const flat = [];
      for (const c of palette) flat.push(c[0], c[1], c[2]);
      gl.uniform3fv(u.colors, flat);
      gl.uniform1i(u.colorCount, Math.min(cfg.colors.length, MAX_COLORS));
      gl.uniform1i(u.strandCount, cfg.count);
      gl.uniform1f(u.speed, cfg.speed);
      gl.uniform1f(u.amplitude, cfg.amplitude);
      gl.uniform1f(u.waviness, cfg.waviness);
      gl.uniform1f(u.thickness, cfg.thickness);
      gl.uniform1f(u.glow, cfg.glow);
      gl.uniform1f(u.taper, cfg.taper);
      gl.uniform1f(u.spread, cfg.spread);
      gl.uniform1f(u.hueShift, cfg.hueShift);
      gl.uniform1f(u.intensity, cfg.intensity);
      gl.uniform1f(u.opacity, cfg.opacity);
      gl.uniform1f(u.scale, cfg.scale);
      gl.uniform1f(u.saturation, cfg.saturation);

      gl.bindFramebuffer(gl.FRAMEBUFFER, renderTarget.fb);
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(glassProg);
      bindAttrib(glassProg);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, renderTarget.texture);
      gl.uniform1i(ug.scene, 0);
      gl.uniform2f(ug.res, w, h);
      gl.uniform1f(ug.radius, 0.46 * cfg.glassSize);
      gl.uniform1f(ug.refraction, cfg.refraction);
      gl.uniform1f(ug.dispersion, cfg.dispersion);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    requestAnimationFrame(frame);
  }

  function init() {
    const containers = document.querySelectorAll('[data-js-animated="true"].strands-orb');
    containers.forEach(setupOrb);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();`
}