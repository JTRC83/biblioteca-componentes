export default {
  id: 'card-hover-fill',
  name: 'Hover Fill Card',
  category: 'cards',
  tags: ['card', 'hover', 'fill', 'gradient', 'css-only', 'reveal', 'button'],
  author: 'gharsh11032000',
  html: `<div class="gh-card">
  <div class="gh-content">
    <p class="gh-heading">Card Hover Effect
    </p><p class="gh-para">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
      laboriosam at voluptas minus culpa deserunt delectus sapiente
      inventore pariatur
    </p>
    <button class="gh-btn">Read more</button>
  </div>
</div>`,
  css: `
.gh-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 32px;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.gh-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  color: #e8e8e8;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.gh-content .gh-heading {
  font-weight: 700;
  font-size: 32px;
}

.gh-content .gh-para {
  line-height: 1.5;
}

.gh-content .gh-btn {
  color: #e8e8e8;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.gh-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.gh-card:hover::before {
  height: 100%;
}

.gh-card:hover {
  box-shadow: none;
}

.gh-card:hover .gh-btn {
  color: #212121;
  background: #e8e8e8;
}

.gh-content .gh-btn:hover {
  outline: 2px solid #e8e8e8;
  background: transparent;
  color: #e8e8e8;
}

.gh-content .gh-btn:active {
  box-shadow: none;
}
`
}