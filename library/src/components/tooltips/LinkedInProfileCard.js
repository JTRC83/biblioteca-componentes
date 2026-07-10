export default {
  id: 'tt-linkedin-card',
  name: 'LinkedIn Profile Card',
  category: 'tooltips',
  tags: ['linkedin', 'profile', 'card', 'hover', 'animated', 'css-only'],
  author: 'vikas7754',
  html: `<div class="tt-linkedin-card">
  <div class="tt-linkedin-card__tooltip">
    <div class="tt-linkedin-card__profile">
      <div class="tt-linkedin-card__user">
        <div class="tt-linkedin-card__img">Ui</div>
        <div class="tt-linkedin-card__details">
          <div class="tt-linkedin-card__name">User</div>
          <div class="tt-linkedin-card__username">@username</div>
        </div>
      </div>
      <div class="tt-linkedin-card__about">500+ Connections</div>
    </div>
  </div>
  <div class="tt-linkedin-card__text">
    <a class="tt-linkedin-card__icon" href="https://freecodez.com/">
      <div class="tt-linkedin-card__layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="tt-linkedin-card__fab">
          <svg viewBox="0 0 448 512" height="1em">
            <path
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            ></path>
          </svg>
        </span>
      </div>
      <div class="tt-linkedin-card__label">LinkedIn</div>
    </a>
  </div>
</div>`,
  css: `
.tt-linkedin-card {
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  border-radius: 10px;
}

.tt-linkedin-card__tooltip {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  border-radius: 15px;
  box-shadow:
    inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3),
    -5px -5px 15px rgba(255, 255, 255, 0.1);
}

.tt-linkedin-card__profile {
  background: #2a2b2f;
  border-radius: 10px 15px;
  padding: 10px;
  border: 1px solid rgba(11, 63, 95, 1);
}

.tt-linkedin-card:hover .tt-linkedin-card__tooltip {
  top: -150px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.tt-linkedin-card__icon {
  text-decoration: none;
  color: #fff;
  display: block;
  position: relative;
}

.tt-linkedin-card__layer {
  width: 55px;
  height: 55px;
  transition: transform 0.3s;
}

.tt-linkedin-card__icon:hover .tt-linkedin-card__layer {
  transform: rotate(-35deg) skew(20deg);
}

.tt-linkedin-card__layer span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 5px;
  transition: all 0.3s;
}

.tt-linkedin-card__layer span,
.tt-linkedin-card__label {
  color: #1da1f2;
  border-color: #1da1f2;
}

.tt-linkedin-card__icon:hover.tt-linkedin-card__layer span {
  box-shadow: -1px 1px 3px #1da1f2;
}

.tt-linkedin-card__icon .tt-linkedin-card__label {
  position: absolute;
  left: 50%;
  bottom: -5px;
  opacity: 0;
  font-weight: 500;
  transform: translateX(-50%);
  transition: bottom 0.3s ease, opacity 0.3s ease;
}

.tt-linkedin-card__icon:hover .tt-linkedin-card__label {
  bottom: -35px;
  opacity: 1;
}

.tt-linkedin-card__icon:hover .tt-linkedin-card__layer span:nth-child(1) {
  opacity: 0.2;
}
.tt-linkedin-card__icon:hover .tt-linkedin-card__layer span:nth-child(2) {
  opacity: 0.4;
  transform: translate(5px, -5px);
}
.tt-linkedin-card__icon:hover .tt-linkedin-card__layer span:nth-child(3) {
  opacity: 0.6;
  transform: translate(10px, -10px);
}
.tt-linkedin-card__icon:hover .tt-linkedin-card__layer span:nth-child(4) {
  opacity: 0.8;
  transform: translate(15px, -15px);
}
.tt-linkedin-card__icon:hover .tt-linkedin-card__layer span:nth-child(5) {
  opacity: 1;
  transform: translate(20px, -20px);
}

.tt-linkedin-card__fab {
  font-size: 30px;
  line-height: 64px;
  text-align: center;
  fill: #1da1f2;
  background: #000;
}

.tt-linkedin-card__user {
  display: flex;
  gap: 10px;
}

.tt-linkedin-card__img {
  width: 50px;
  height: 50px;
  font-size: 25px;
  font-weight: 700;
  border: 1px solid #1da1f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.tt-linkedin-card__name {
  font-size: 17px;
  font-weight: 700;
  color: #1da1f2;
}

.tt-linkedin-card__details {
  display: flex;
  flex-direction: column;
  gap: 0;
  color: #fff;
}

.tt-linkedin-card__about {
  color: #ccc;
  padding-top: 5px;
}
`
}