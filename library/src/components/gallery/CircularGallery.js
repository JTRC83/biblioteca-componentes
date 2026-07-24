export default {
  id: 'circular-gallery',
  name: 'Circular Gallery',
  category: 'gallery',
  tags: ['gallery', 'circular', 'webgl', 'shader', '3d', 'scroll', 'carousel', 'js-driven', 'perspective', 'images'],
  author: 'reactbits-adapted',
  source: 'reactbits.dev',
  html: `<div class="circular-gallery" data-js-animated="true"
  style="--gallery-bend: 8; --gallery-text-color: #ffffff; --gallery-scroll-speed: 2.4;">
  <canvas class="circular-gallery__canvas"></canvas>
</div>`,
  css: `.circular-gallery {
  width: 100%;
  height: 100%;
  min-height: 400px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #050408;
  cursor: grab;
}

.circular-gallery:active { cursor: grabbing; }

.circular-gallery__canvas {
  display: block;
  width: 100%;
  height: 100%;
}
`,
  js: `(() => {
  function lerp(a, b, t) { return a + (b - a) * t; }

  const ITEMS = [
    { image: 'https://picsum.photos/seed/cg1/800/600?grayscale', text: 'Bridge' },
    { image: 'https://picsum.photos/seed/cg2/800/600?grayscale', text: 'Desk Setup' },
    { image: 'https://picsum.photos/seed/cg3/800/600?grayscale', text: 'Waterfall' },
    { image: 'https://picsum.photos/seed/cg4/800/600?grayscale', text: 'Strawberries' },
    { image: 'https://picsum.photos/seed/cg5/800/600?grayscale', text: 'Deep Diving' },
    { image: 'https://picsum.photos/seed/cg6/800/600?grayscale', text: 'Train Track' },
    { image: 'https://picsum.photos/seed/cg7/800/600?grayscale', text: 'Santorini' },
    { image: 'https://picsum.photos/seed/cg8/800/600?grayscale', text: 'Blurry Lights' },
    { image: 'https://picsum.photos/seed/cg9/800/600?grayscale', text: 'New York' },
    { image: 'https://picsum.photos/seed/cg10/800/600?grayscale', text: 'Good Boy' }
  ];

  const VERT = \`#version 300 es
in vec3 position;
in vec2 uv;
uniform mat4 uProjection;
uniform mat4 uView;
uniform mat4 uModel;
uniform float uTime;
uniform float uSpeed;
out vec2 vUv;
void main() {
  vUv = uv;
  vec3 p = position;
  p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
  gl_Position = uProjection * uView * uModel * vec4(p, 1.0);
}
\`;

  const FRAG = \`#version 300 es
precision highp float;
uniform vec2 uImageSizes;
uniform vec2 uPlaneSizes;
uniform sampler2D tMap;
uniform float uBorderRadius;
in vec2 vUv;
out vec4 fragColor;

float roundedBoxSDF(vec2 p, vec2 b, float r) {
  vec2 d = abs(p) - b;
  return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
}

void main() {
  vec2 ratio = vec2(
    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
  );
  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
  vec4 color = texture(tMap, uv);
  float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
  float alpha = 1.0 - smoothstep(-0.002, 0.002, d);
  fragColor = vec4(color.rgb, alpha);
}
\`;

  const TEXT_VERT = \`#version 300 es
in vec3 position;
in vec2 uv;
uniform mat4 uProjection;
uniform mat4 uView;
uniform mat4 uModel;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = uProjection * uView * uModel * vec4(position, 1.0);
}
\`;

  const TEXT_FRAG = \`#version 300 es
precision highp float;
uniform sampler2D tMap;
in vec2 vUv;
out vec4 fragColor;
void main() {
  vec4 color = texture(tMap, vUv);
  if (color.a < 0.1) discard;
  fragColor = color;
}
\`;

  function mat4Identity() {
    return new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]);
  }

  function mat4Perspective(fov, aspect, near, far) {
    const f = 1.0 / Math.tan(fov / 2);
    const nf = 1.0 / (near - far);
    return new Float32Array([
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (far + near) * nf, -1,
      0, 0, 2 * far * near * nf, 0
    ]);
  }

  function mat4Translation(x, y, z) {
    return new Float32Array([1,0,0,0, 0,1,0,0, 0,0,1,0, x,y,z,1]);
  }

  function mat4Scale(x, y, z) {
    return new Float32Array([x,0,0,0, 0,y,0,0, 0,0,z,0, 0,0,0,1]);
  }

  function mat4RotationZ(angle) {
    const c = Math.cos(angle), s = Math.sin(angle);
    return new Float32Array([c,s,0,0, -s,c,0,0, 0,0,1,0, 0,0,0,1]);
  }

  function mat4Multiply(a, b) {
    const r = new Float32Array(16);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        let sum = 0;
        for (let k = 0; k < 4; k++) sum += a[k * 4 + j] * b[i * 4 + k];
        r[i * 4 + j] = sum;
      }
    }
    return r;
  }

  function createTextTexture(gl, text, font, color) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.font = font;
    const metrics = ctx.measureText(text);
    const tw = Math.ceil(metrics.width);
    const th = Math.ceil(36);
    canvas.width = tw + 20;
    canvas.height = th + 20;
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    return { canvas, width: canvas.width, height: canvas.height };
  }

  function compileShader(gl, type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.error('Gallery shader error:', gl.getShaderInfoLog(sh));
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
      console.error('Gallery link error:', gl.getProgramInfoLog(prog));
      gl.deleteProgram(prog);
      return null;
    }
    return prog;
  }

  function createPlaneGeometry(gl, wSegs, hSegs) {
    const positions = [];
    const uvs = [];
    const indices = [];
    for (let y = 0; y <= hSegs; y++) {
      const v = y / hSegs;
      for (let x = 0; x <= wSegs; x++) {
        const u = x / wSegs;
        positions.push(u * 2 - 1, v * 2 - 1, 0);
        uvs.push(u, v);
      }
    }
    for (let y = 0; y < hSegs; y++) {
      for (let x = 0; x < wSegs; x++) {
        const a = y * (wSegs + 1) + x;
        const b = a + 1;
        const c = a + (wSegs + 1);
        const d = c + 1;
        indices.push(a, c, b, b, c, d);
      }
    }
    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    const uvBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);
    const idxBuf = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxBuf);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    return { posBuf, uvBuf, idxBuf, count: indices.length };
  }

  function setupGallery(container) {
    const canvas = container.querySelector('.circular-gallery__canvas');
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', { alpha: true, antialias: true, premultipliedAlpha: false });
    if (!gl) return;

    gl.clearColor(0.02, 0.015, 0.03, 1);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const prog = createProgram(gl, VERT, FRAG);
    if (!prog) return;
    const textProg = createProgram(gl, TEXT_VERT, TEXT_FRAG);
    if (!textProg) return;

    const geom = createPlaneGeometry(gl, 100, 50);
    const textGeom = createPlaneGeometry(gl, 1, 1);

    const u = {};
    ['uProjection','uView','uModel','uTime','uSpeed','uImageSizes','uPlaneSizes','tMap','uBorderRadius'].forEach(n => {
      u[n] = gl.getUniformLocation(prog, n);
    });
    const ut = {};
    ['uProjection','uView','uModel','tMap'].forEach(n => {
      ut[n] = gl.getUniformLocation(textProg, n);
    });

    const posLoc = gl.getAttribLocation(prog, 'position');
    const uvLoc = gl.getAttribLocation(prog, 'uv');
    const tPosLoc = gl.getAttribLocation(textProg, 'position');
    const tUvLoc = gl.getAttribLocation(textProg, 'uv');

    const items = ITEMS.concat(ITEMS);
    const bend = 8;
    const borderRadius = 0.1;
    const scrollSpeed = 2.4;
    const scrollEase = 0.05;

    const media = items.map((data, index) => {
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([40, 40, 40, 255]));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = data.image;
      let imgW = 800, imgH = 600;
      img.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        imgW = img.naturalWidth;
        imgH = img.naturalHeight;
      };

      const textCanvas = createTextTexture(gl, data.text, 'bold 20px Inter, sans-serif', '#ffffff');
      const textTex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, textTex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas.canvas);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

      return { tex, textTex, textW: textCanvas.width, textH: textCanvas.height, index, imgW, imgH, extra: 0, x: 0, isBefore: false, isAfter: false };
    });

    const scroll = { current: 0, target: 0, last: 0, ease: scrollEase };
    let isDown = false;
    let startX = 0;
    let scrollPosition = 0;

    function onDown(e) {
      isDown = true;
      scrollPosition = scroll.current;
      startX = e.touches ? e.touches[0].clientX : e.clientX;
    }
    function onMove(e) {
      if (!isDown) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const dist = (startX - x) * (scrollSpeed * 0.025);
      scroll.target = scrollPosition + dist;
    }
    function onUp() { isDown = false; }
    function onWheel(e) {
      const delta = e.deltaY || e.wheelDelta || e.detail;
      scroll.target += (delta > 0 ? scrollSpeed : -scrollSpeed) * 0.2;
    }

    container.addEventListener('mousedown', onDown);
    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseup', onUp);
    container.addEventListener('mouseleave', onUp);
    container.addEventListener('wheel', onWheel, { passive: true });
    container.addEventListener('touchstart', onDown, { passive: true });
    container.addEventListener('touchmove', onMove, { passive: true });
    container.addEventListener('touchend', onUp);

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

    let rafId = 0;
    const startTime = performance.now();

    function frame() {
      rafId = requestAnimationFrame(frame);

      const w = canvas.width;
      const h = canvas.height;
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);

      scroll.current = lerp(scroll.current, scroll.target, scroll.ease);
      const direction = scroll.current > scroll.last ? 'right' : 'left';
      scroll.last = scroll.current;

      const fov = 45 * Math.PI / 180;
      const aspect = w / h;
      const proj = mat4Perspective(fov, aspect, 0.1, 100);
      const view = mat4Translation(0, 0, -20);

      const screenW = w;
      const screenH = h;
      const scale = screenH / 1500;
      const planeH = (2 * Math.tan(fov / 2) * 20 * (900 * scale)) / screenH;
      const planeW = (planeH * aspect * (700 * scale) * screenW) / (screenW * (900 * scale));
      const planeScaleX = planeW * 0.5;
      const planeScaleY = planeH * 0.5;
      const padding = 2;
      const planeWidth = planeScaleX * 2 + padding;
      const totalWidth = planeWidth * media.length;
      const H = 10;

      gl.useProgram(prog);
      gl.bindBuffer(gl.ARRAY_BUFFER, geom.posBuf);
      gl.enableVertexAttribArray(posLoc);
      gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ARRAY_BUFFER, geom.uvBuf);
      gl.enableVertexAttribArray(uvLoc);
      gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geom.idxBuf);

      gl.uniformMatrix4fv(u.uProjection, false, proj);
      gl.uniformMatrix4fv(u.uView, false, view);
      gl.uniform1f(u.uBorderRadius, borderRadius);

      media.forEach((m, i) => {
        m.x = planeWidth * m.index - scroll.current - m.extra;

        let py = 0, rz = 0;
        if (bend !== 0) {
          const B_abs = Math.abs(bend);
          const R = (H * H + B_abs * B_abs) / (2 * B_abs);
          const ex = Math.min(Math.abs(m.x), H);
          const arc = R - Math.sqrt(R * R - ex * ex);
          if (bend > 0) { py = -arc; rz = -Math.sign(m.x) * Math.asin(ex / R); }
          else { py = arc; rz = Math.sign(m.x) * Math.asin(ex / R); }
        }

        const speed = scroll.current - scroll.last;
        gl.uniform1f(u.uTime, (performance.now() - startTime) * 0.001 + m.index * 0.5);
        gl.uniform1f(u.uSpeed, Math.abs(speed) * 0.01);
        gl.uniform2f(u.uImageSizes, m.imgW, m.imgH);
        gl.uniform2f(u.uPlaneSizes, planeScaleX, planeScaleY);

        let model = mat4Translation(m.x, py, 0);
        model = mat4Multiply(model, mat4RotationZ(rz));
        model = mat4Multiply(model, mat4Scale(planeScaleX, planeScaleY, 1));
        gl.uniformMatrix4fv(u.uModel, false, model);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, m.tex);
        gl.uniform1i(u.tMap, 0);

        gl.drawElements(gl.TRIANGLES, geom.count, gl.UNSIGNED_SHORT, 0);

        const textH = planeScaleY * 0.15;
        const textAsp = m.textW / m.textH;
        const textW = textH * textAsp;
        const textY = -planeScaleY - textH * 0.5 - 0.05;

        gl.useProgram(textProg);
        gl.bindBuffer(gl.ARRAY_BUFFER, textGeom.posBuf);
        gl.enableVertexAttribArray(tPosLoc);
        gl.vertexAttribPointer(tPosLoc, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, textGeom.uvBuf);
        gl.enableVertexAttribArray(tUvLoc);
        gl.vertexAttribPointer(tUvLoc, 2, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, textGeom.idxBuf);

        gl.uniformMatrix4fv(ut.uProjection, false, proj);
        gl.uniformMatrix4fv(ut.uView, false, view);
        let tm = mat4Translation(m.x, textY, 0);
        tm = mat4Multiply(tm, mat4RotationZ(rz));
        tm = mat4Multiply(tm, mat4Scale(textW, textH, 1));
        gl.uniformMatrix4fv(ut.uModel, false, tm);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, m.textTex);
        gl.uniform1i(ut.tMap, 0);

        gl.drawElements(gl.TRIANGLES, textGeom.count, gl.UNSIGNED_SHORT, 0);
        gl.useProgram(prog);
        gl.bindBuffer(gl.ARRAY_BUFFER, geom.posBuf);
        gl.enableVertexAttribArray(posLoc);
        gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, geom.uvBuf);
        gl.enableVertexAttribArray(uvLoc);
        gl.vertexAttribPointer(uvLoc, 2, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geom.idxBuf);

        const planeOffset = planeScaleX;
        const vpOffset = 10;
        m.isBefore = m.x + planeOffset < -vpOffset;
        m.isAfter = m.x - planeOffset > vpOffset;
        if (direction === 'right' && m.isBefore) { m.extra -= totalWidth; m.isBefore = m.isAfter = false; }
        if (direction === 'left' && m.isAfter) { m.extra += totalWidth; m.isBefore = m.isAfter = false; }
      });
    }
    rafId = requestAnimationFrame(frame);

    return function destroy() {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      container.removeEventListener('mousedown', onDown);
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseup', onUp);
      container.removeEventListener('mouseleave', onUp);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onDown);
      container.removeEventListener('touchmove', onMove);
      container.removeEventListener('touchend', onUp);
    };
  }

  function init() {
    document.querySelectorAll('[data-js-animated="true"].circular-gallery').forEach(setupGallery);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();`
}