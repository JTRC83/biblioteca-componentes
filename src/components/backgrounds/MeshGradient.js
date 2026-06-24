export default {
  id: 'bg-mesh',
  name: 'Mesh Gradient',
  category: 'backgrounds',
  tags: ['mesh', 'gradient', 'css-only'],
  html: `<div class="bg-mesh"></div>`,
  css: `
.bg-mesh {
  width: 280px;
  height: 180px;
  border-radius: 16px;
  background-color: #6366f1;
  background-image:
    radial-gradient(at 0% 0%, #ec4899 0px, transparent 50%),
    radial-gradient(at 100% 0%, #f59e0b 0px, transparent 50%),
    radial-gradient(at 100% 100%, #10b981 0px, transparent 50%),
    radial-gradient(at 0% 100%, #7c3aed 0px, transparent 50%);
}
`
}
