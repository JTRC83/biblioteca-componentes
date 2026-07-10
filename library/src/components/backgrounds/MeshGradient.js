export default {
  id: 'bg-mesh',
  name: 'Mesh Gradient',
  category: 'backgrounds',
  tags: ['mesh', 'gradient', 'css-only'],
  author: 'unknown',
  html: `<div class="bg-mesh">
  <div class="bg-mesh__bg"></div>
</div>`,
  css: `
.bg-mesh {
  background: #6366f1;
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

.bg-mesh__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-color: #6366f1;
  background-image:
    radial-gradient(at 0% 0%, #ec4899 0px, transparent 50%),
    radial-gradient(at 100% 0%, #f59e0b 0px, transparent 50%),
    radial-gradient(at 100% 100%, #10b981 0px, transparent 50%),
    radial-gradient(at 0% 100%, #7c3aed 0px, transparent 50%);
}
`
}