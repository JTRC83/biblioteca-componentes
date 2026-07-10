export default {
  id: 'tt-instagram-card',
  name: 'Instagram Profile Card',
  category: 'tooltips',
  tags: ['instagram', 'profile', 'card', 'hover', 'animated', 'css-only'],
  author: 'vinodjangid07',
  html: `<div class="tt-instagram-card">
  <div class="tt-instagram-card__tooltip">
    <div class="tt-instagram-card__profile">
      <div class="tt-instagram-card__user">
        <div class="tt-instagram-card__img">Ui</div>
        <div class="tt-instagram-card__details">
          <div class="tt-instagram-card__name">User</div>
          <div class="tt-instagram-card__username">@username</div>
        </div>
      </div>
      <div class="tt-instagram-card__about">800+ Followers</div>
    </div>
  </div>
  <div class="tt-instagram-card__text">
    <a class="tt-instagram-card__icon" href="#">
      <div class="tt-instagram-card__layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="tt-instagram-card__svg">
          <svg
            fill="white"
            viewBox="0 0 448 512"
            height="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
        </span>
      </div>
      <div class="tt-instagram-card__label">Instagram</div>
    </a>
  </div>
</div>`,
  css: `
.tt-instagram-card {
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 17px;
  border-radius: 10px;
}

.tt-instagram-card__tooltip {
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

.tt-instagram-card__profile {
  background: #2a2b2f;
  border-radius: 10px 15px;
  padding: 10px;
  border: 1px solid #52382f;
}

.tt-instagram-card:hover .tt-instagram-card__tooltip {
  top: -150px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.tt-instagram-card__icon {
  text-decoration: none;
  color: #fff;
  display: block;
  position: relative;
}

.tt-instagram-card__layer {
  width: 55px;
  height: 55px;
  transition: transform 0.3s;
}

.tt-instagram-card__icon:hover .tt-instagram-card__layer {
  transform: rotate(-35deg) skew(20deg);
}

.tt-instagram-card__layer span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 15px;
  transition: all 0.3s;
}

.tt-instagram-card__layer span,
.tt-instagram-card__label {
  color: #e6683c;
  border-color: #e6683c;
}

.tt-instagram-card__icon .tt-instagram-card__label {
  position: absolute;
  left: 50%;
  bottom: -5px;
  opacity: 0;
  font-weight: 500;
  transform: translateX(-50%);
  transition: bottom 0.3s ease, opacity 0.3s ease;
}

.tt-instagram-card__icon:hover .tt-instagram-card__label {
  bottom: -35px;
  opacity: 1;
}

.tt-instagram-card__icon:hover .tt-instagram-card__layer span:nth-child(1) {
  opacity: 0.2;
}
.tt-instagram-card__icon:hover .tt-instagram-card__layer span:nth-child(2) {
  opacity: 0.4;
  transform: translate(5px, -5px);
}
.tt-instagram-card__icon:hover .tt-instagram-card__layer span:nth-child(3) {
  opacity: 0.6;
  transform: translate(10px, -10px);
}
.tt-instagram-card__icon:hover .tt-instagram-card__layer span:nth-child(4) {
  opacity: 0.8;
  transform: translate(15px, -15px);
}
.tt-instagram-card__icon:hover .tt-instagram-card__layer span:nth-child(5) {
  opacity: 1;
  transform: translate(20px, -20px);
}

.tt-instagram-card__svg {
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
}

.tt-instagram-card__user {
  display: flex;
  gap: 10px;
}

.tt-instagram-card__img {
  width: 50px;
  height: 50px;
  font-size: 25px;
  font-weight: 700;
  border: 1px solid #e6683c;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.tt-instagram-card__name {
  font-size: 17px;
  font-weight: 700;
  color: #e6683c;
}

.tt-instagram-card__details {
  display: flex;
  flex-direction: column;
  gap: 0;
  color: #fff;
}

.tt-instagram-card__about {
  color: #ccc;
  padding-top: 5px;
}
`
}