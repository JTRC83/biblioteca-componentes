export default {
  id: 'card-long-chair',
  name: 'Long Chair Card',
  category: 'cards',
  tags: ['card', 'product', 'chair', 'hover', 'css-only', 'gradient', 'tailwind-converted'],
  author: 'Javierrocadev',
  note: 'Original en Tailwind. Convertido a CSS plano.',
  html: `<div class="lc-card">
  <div class="lc-image"></div>
  <div class="lc-body">
    <div class="lc-row">
      <div class="lc-info">
        <span class="lc-title">Long Chair</span>
        <p class="lc-id">ID: 23432252</p>
      </div>
      <span class="lc-price">$25.99</span>
    </div>
    <button class="lc-btn">Add to cart</button>
  </div>
</div>`,
  css: `
.lc-card {
  width: 15rem;
  height: 20rem;
  background-color: #f9fafb;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.lc-image {
  transition-duration: 0.5s;
  filter: contrast(0.5);
  height: 12rem;
  background-image: linear-gradient(to bottom left, #000000, #7c2d12, #4f46e5);
}

.lc-image:hover {
  filter: contrast(1);
}

.lc-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.lc-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.lc-info {
  display: flex;
  flex-direction: column;
}

.lc-title {
  font-size: 1.25rem;
  font-weight: 700;
}

.lc-id {
  font-size: 0.75rem;
  color: #374151;
}

.lc-price {
  font-weight: 700;
  color: #dc2626;
}

.lc-btn {
  color: #f9fafb;
  background-color: #075985;
  padding: 0.5rem 0;
  cursor: pointer;
  border: none;
}

.lc-btn:hover {
  background-color: #0369a1;
}
`
}