export default {
  id: 'card-glass',
  name: 'Glass Card',
  category: 'cards',
  tags: ['glass', 'glassmorphism', 'css-only'],
  html: `<div class="card-glass">
  <div class="card-glass__icon">★</div>
  <h3 class="card-glass__title">Glassmorphism</h3>
  <p class="card-glass__text">Frosted glass effect with backdrop-filter.</p>
</div>`,
  css: `
.card-glass {
  width: 240px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.card-glass:hover {
  transform: translateY(-4px);
}

.card-glass__icon {
  font-size: 36px;
  color: #a78bfa;
  margin-bottom: 12px;
}

.card-glass__title {
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #f4f4f5;
}

.card-glass__text {
  margin: 0;
  font-size: 13px;
  color: #a1a1aa;
  line-height: 1.5;
}
`
}
