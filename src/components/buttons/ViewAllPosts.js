export default {
  id: 'btn-view-posts',
  name: 'View All Posts',
  category: 'buttons',
  tags: ['icon', 'arrow', 'animated', 'css-only'],
  author: 'behroz_7659',
  html: `<button class="view-posts-btn">
  <span class="btn-text">View All Posts</span>

  <span class="btn-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42s1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1"
      ></path>
    </svg>
  </span>
</button>`,
  css: `
.view-posts-btn {
  display: inline-flex;
  align-items: center;
  gap: 24px;
  padding: 8px 8px 8px 24px;
  border: 2px solid #000;
  border-radius: 16px;
  background: transparent;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    transform 0.1s ease;
  font-family: inherit;
}

.view-posts-btn:hover {
  background-color: #000;
}

.view-posts-btn:active {
  transform: scale(0.95);
}

.btn-text {
  font-size: 16px;
  font-weight: 500;
  color: #000;
  transition: color 0.3s ease;
}

.view-posts-btn:hover .btn-text {
  color: #a8ff39;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a8ff39;
  padding: 8px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.view-posts-btn:hover .btn-icon {
  transform: rotate(45deg);
}

.btn-icon svg {
  width: 20px;
  height: 20px;
  color: #000;
  transition: transform 0.3s ease;
}

.view-posts-btn:hover .btn-icon svg {
  transform: rotate(-45deg);
}
`
}
