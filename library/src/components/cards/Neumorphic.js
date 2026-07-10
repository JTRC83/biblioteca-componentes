export default {
  id: 'card-neumorph',
  name: 'Neumorphic Card',
  category: 'cards',
  tags: ['neumorphism', 'css-only'],
  html: `<div class="card-neu">
  <h3 class="card-neu__title">Neumorphism</h3>
  <p class="card-neu__text">Soft UI card with inner and outer shadows.</p>
  <button class="card-neu__btn">Action</button>
</div>`,
  css: `
.card-neu {
  width: 240px;
  padding: 24px;
  background: #1a1a1f;
  border-radius: 16px;
  box-shadow:
    8px 8px 16px #0e0e12,
    -8px -8px 16px #26262c;
  text-align: center;
}

.card-neu__title {
  margin: 0 0 8px 0;
  font-size: 18px;
  color: #f4f4f5;
}

.card-neu__text {
  margin: 0 0 16px 0;
  font-size: 13px;
  color: #a1a1aa;
  line-height: 1.5;
}

.card-neu__btn {
  padding: 8px 18px;
  background: #1a1a1f;
  border: none;
  border-radius: 10px;
  color: #a78bfa;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow:
    4px 4px 8px #0e0e12,
    -4px -4px 8px #26262c;
  transition: box-shadow 0.2s ease;
}

.card-neu__btn:active {
  box-shadow:
    inset 4px 4px 8px #0e0e12,
    inset -4px -4px 8px #26262c;
}
`
}
