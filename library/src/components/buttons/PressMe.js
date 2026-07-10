export default {
  id: 'btn-press',
  name: 'Press Me',
  category: 'buttons',
  tags: ['3d', 'press', 'css-only'],
  html: `<button class="press-btn">Press me</button>`,
  css: `
.press-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  background: linear-gradient(180deg, #f9fafb 0%, #e5e7eb 100%);
  border: 1px solid #d1d5db;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 0 #9ca3af, 0 8px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.1s ease;
}

.press-btn:hover {
  background: linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%);
}

.press-btn:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #9ca3af, 0 2px 4px rgba(0, 0, 0, 0.15);
}
`
}
