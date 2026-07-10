export default {
  id: 'pat-red-flames',
  name: 'Red Flames',
  category: 'patterns',
  tags: ['flames', 'gradient', 'diagonal', 'css-only'],
  author: 'ayman-ashine',
  html: `<div class="pat-red-flames">
  <div class="pat-red-flames__bg"></div>
</div>`,
  css: `
.pat-red-flames {
  background: #000000;
  width: 100%;
  height: 100%;
  min-height: 200px;
  margin: 0;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
}

.pat-red-flames__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  --color: rgb(255, 50, 50, 0.8);
  background-color: rgb(0, 0, 0);
  background-size: 40px 40px;
  background-image:
    linear-gradient(45deg, var(--color), transparent 40%),
    linear-gradient(-90deg, var(--color), transparent 20%);
}
`
}