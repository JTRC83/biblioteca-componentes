export default {
  id: 'card-digital-way',
  name: 'Digital Way Card',
  category: 'cards',
  tags: ['card', 'expand', 'hover', 'css-only', 'professional', 'infrastructure', 'logo'],
  author: 'Admin12121',
  html: `<section class="dw-container">
  <div class="dw-card">
    <div class="dw-content">
    <p class="dw-logo">Digital Way</p>
      <div class="dw-h6">Data &amp; Infrastructure Agility</div>
      <div class="dw-hover">
        <p>mParticle's customer data platform empowers you to Integrate all of your data and orchestrate it across channels, partners, and systems.</p>
      </div>
    </div>
  </div>
</section>`,
  css: `
.dw-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dw-card {
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 22em;
  max-width: 80%;
  padding: 2em 0;
  background: #FFF;
  box-shadow: 0 0 6px 0 rgba(32, 32, 36, 0.12);
  transition: all 0.35s ease;
}

.dw-card::before, .dw-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: orange;
  height: 4px;
}

.dw-card::before {
  width: 0;
  opacity: 0;
  transition: opacity 0 ease, width 0 ease;
  transition-delay: 0.5s;
}

.dw-card::after {
  width: 100%;
  background: white;
  transition: width 0.5s ease;
}

.dw-card .dw-content {
  width: 18em;
  max-width: 80%;
}

.dw-card .dw-logo {
  margin: 0 0 1em;
  width: 10.625em;
  transition: all 0.35s ease;
}

.dw-card .dw-h6 {
  color: #999;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 2px;
}

.dw-card .dw-hover {
  overflow: hidden;
  max-height: 0;
  transform: translateY(1em);
  transition: all 0.55s ease;
}

.dw-card .dw-hover p {
  margin: 1.5em 0 0;
  color: #6E6E70;
  line-height: 1.4em;
}

.dw-card:hover {
  width: 24em;
  box-shadow: 0 10px 20px 0 rgba(32, 32, 36, 0.12);
}

.dw-card:hover::before {
  width: 100%;
  opacity: 1;
  transition: opacity 0.5s ease, width 0.5s ease;
  transition-delay: 0;
}

.dw-card:hover::after {
  width: 0;
  opacity: 0;
  transition: width 0 ease;
}

.dw-card:hover .dw-logo {
  margin-bottom: 0.5em;
}

.dw-card:hover .dw-hover {
  max-height: 10em;
  transform: none;
}
`
}