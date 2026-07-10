export default {
  id: 'card-stack-flip',
  name: 'Stack Flip Cards',
  category: 'cards',
  tags: ['stack', 'cards', 'flip', '3d', 'hover', 'css-only', 'perspective', 'transform', 'gradient'],
  author: 'shlomo20',
  html: `<div class="sc-cards">
  <div class="sc-card sc-one">
    <div class="sc-details">
      <div class="sc-details-header">Card Header</div>
      <div class="sc-details-button">Click me</div>
    </div>
  </div>
  <div class="sc-card sc-two">
    <div class="sc-details">
      <div class="sc-details-header">Card Header</div>
      <div class="sc-details-button">Click me</div>
    </div>
  </div>
  <div class="sc-card sc-three">
    <div class="sc-details">
      <div class="sc-details-header">Card Header</div>
      <div class="sc-details-button">Click me</div>
    </div>
  </div>
</div>`,
  css: `
.sc-cards {
  position: relative;
  width: 254px;
  height: 190px;
}

.sc-card {
  z-index: 1;
  position: absolute;
  width: 254px;
  height: 190px;
  border-radius: 10px;
  transition: all .5s ease-out;
  overflow: hidden;
  transform: translateX(0px) translateY(0px) perspective(905px) rotateX(0deg) rotateY(0deg) rotateZ(-8deg);
}

.sc-card.sc-one {
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #FF0055 0%, #000066 100%);
}

.sc-card.sc-two {
  top: 20px;
  left: 20px;
  background: linear-gradient(180deg, #fa00ff 0%, #01f998 99%);
}

.sc-card.sc-three {
  top: 40px;
  left: 40px;
  background: linear-gradient(180deg, #c0f901 0%, #fa00ff 100%);
}

.sc-card:hover {
  z-index: 4;
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) !important;
  transition: all .5s ease-out;
}

.sc-details {
  width: 55%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background: rgba(0,0,0,0.8);
  transition: .5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
}

.sc-card:hover .sc-details {
  transform: perspective(2000px) rotateY(0deg);
}

.sc-details-header {
  font-weight: 600;
  color: #edb899;
}

.sc-details-button {
  padding: 3px 6px;
  border-radius: 25px;
  background-color: #edb899;
  color: #000;
  font-weight: 600;
}
`
}