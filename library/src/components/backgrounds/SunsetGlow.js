export default {
  id: 'bg-sunset-glow',
  name: 'Sunset Glow',
  category: 'backgrounds',
  tags: ['sunset', 'radial', 'gradient', 'css-only'],
  author: 'mihocsaszilard',
  html: `<div class="bg-sunset-glow">
  <div class="bg-sunset-glow__bg"></div>
</div>`,
  css: `
.bg-sunset-glow {
  background: #f55702;
  width: 100%;
  height: 100%;
  min-height: 200px;
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
}

.bg-sunset-glow__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: radial-gradient(
    125% 125% at -2% 101%,
    rgba(245, 87, 2, 1) 10.5%,
    rgba(245, 120, 2, 1) 16%,
    rgba(245, 140, 2, 1) 17.5%,
    rgba(245, 170, 100, 1) 25%,
    rgba(238, 174, 202, 1) 40%,
    rgba(202, 179, 214, 1) 65%,
    rgba(148, 201, 233, 1) 100%
  );
}
`
}