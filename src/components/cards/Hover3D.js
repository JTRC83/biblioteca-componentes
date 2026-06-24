export default {
  id: 'card-3d',
  name: '3D Hover Card',
  category: 'cards',
  tags: ['3d', 'hover', 'css-only'],
  html: `<div class="card-3d">
  <div class="card-3d__inner">
    <h3 class="card-3d__title">Hover me</h3>
    <p class="card-3d__text">A 3D card that tilts as you move your mouse over it.</p>
  </div>
</div>`,
  css: `
.card-3d {
  width: 280px;
  height: 180px;
  perspective: 1000px;
  cursor: pointer;
}

.card-3d__inner {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1f1f24, #2a2a32);
  border: 1px solid #2c2c34;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.card-3d:hover .card-3d__inner {
  transform: rotateY(8deg) rotateX(4deg) scale(1.02);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
}

.card-3d__title {
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #f4f4f5;
}

.card-3d__text {
  margin: 0;
  font-size: 13px;
  color: #a1a1aa;
  line-height: 1.5;
}
`
}
