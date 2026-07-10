export default {
  id: 'btn-edit',
  name: 'Edit',
  category: 'buttons',
  tags: ['icon', 'edit', 'animated', 'css-only'],
  author: 'M4rio1',
  note: 'Original en Tailwind. Convertido a CSS plano.',
  html: `<button class="button">
  <svg
    class="button__icon"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
    ></path>
  </svg>
  Edit
</button>`,
  css: `
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: #fff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 200ms ease-in-out 75ms;
  font-family: inherit;
}

.button:hover {
  background-color: #1d4ed8;
  transform: translateY(-0.25rem) scale(1.1);
}

.button:active {
  transform: scale(0.95);
}

.button__icon {
  height: 1.25rem;
  width: 1.25rem;
  margin-right: 0.25rem;
  align-self: center;
}
`
}
