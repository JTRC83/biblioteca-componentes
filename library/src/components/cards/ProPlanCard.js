export default {
  id: 'card-pro-plan',
  name: 'Pro Plan Card',
  category: 'cards',
  tags: ['card', 'pricing', 'plan', 'tailwind-converted', 'hover', 'css-only', 'business'],
  author: 'seyed-mohsen-mousavi',
  note: 'Original en Tailwind. Convertido a CSS plano.',
  html: `<div class="pp-card">
  <div class="pp-strip"></div>
  <div class="pp-body">
    <h2 class="pp-title">Pro Plan</h2>
    <p class="pp-subtitle">Perfect for growing businesses</p>
    <p class="pp-price">$49.99</p>
    <ul class="pp-list">
      <li class="pp-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          class="pp-check"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
        25 Users
      </li>
      <li class="pp-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          class="pp-check"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
        Advanced Features
      </li>
      <li class="pp-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          class="pp-check"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
        24/7 Support
      </li>
    </ul>
  </div>
  <div class="pp-footer">
    <button class="pp-btn">
      Select Plan
    </button>
  </div>
</div>`,
  css: `
.pp-card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  transition-property: transform;
  transition-duration: 0.3s;
}

.pp-card:hover {
  transform: scale(1.05);
}

.pp-strip {
  padding: 0.25rem;
  background-color: #bbf7d0;
}

.pp-body {
  padding: 2rem;
}

.pp-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 1rem 0;
}

.pp-subtitle {
  color: #4b5563;
  margin: 0 0 1.5rem 0;
}

.pp-price {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 1.5rem 0;
}

.pp-list {
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0 0 1.5rem 0;
  list-style: none;
  padding: 0;
}

.pp-item {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.pp-item:last-child {
  margin-bottom: 0;
}

.pp-check {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  color: #22c55e;
}

.pp-footer {
  padding: 1rem;
}

.pp-btn {
  width: 100%;
  background-color: #22c55e;
  color: #ffffff;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  font-weight: 500;
}

.pp-btn:hover {
  background-color: #15803d;
}

.pp-btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.4);
}

.pp-btn:active {
  background-color: #166534;
}
`
}