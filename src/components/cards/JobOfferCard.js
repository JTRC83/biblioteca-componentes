export default {
  id: 'card-job-offer',
  name: 'Job Offer Card',
  category: 'cards',
  tags: ['card', 'job', 'offer', 'red-flag', 'css-only', 'minimal', 'warning', 'professional'],
  author: 'SujitAdroja',
  html: `<div class="jo-card jo-columns">
  <div class="jo-button-container">
    <button class="jo-btn jo-red-flag">RED FLAG</button>
    <p class="jo-offer">JOB OFFER</p>
  </div>
  <p class="jo-secondary-heading">
    "As a UX designer,you will design the entire UI."
  </p>
  <p class="jo-description">
    Verify alignment of job description with proposed position.<br />
  </p>
</div>`,
  css: `
.jo-columns {
  width: 19em;
  position: relative;
  border-radius: 20px;
  padding: 35px;
  border: 2px solid black;
  transition: all 0.4s;
}

.jo-columns:hover {
  box-shadow: 4px 4px 0 1px rgba(0, 0, 0);
}

.jo-dots {
  position: absolute;
  right: 15px;
  top: 15px;
}

.jo-button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
}

.jo-offer {
  font-size: 17px;
  font-weight: 900;
  border-bottom: 2px solid black;
  cursor: pointer;
  transition: all 0.4s;
}

.jo-btn {
  padding: 7px 15px;
  border: 1px solid black;
  background-color: orange;
  border-radius: 10px;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s;
}

.jo-columns:hover .jo-btn {
  box-shadow: 2px 2px 0 1px rgba(0, 0, 0);
}

.jo-btn:focus {
  background: transparent;
}

.jo-secondary-heading {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}

.jo-description {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
}
`
}