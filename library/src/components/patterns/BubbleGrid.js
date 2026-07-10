export default {
  id: 'pat-bubble-grid',
  name: 'Bubble Grid',
  category: 'patterns',
  tags: ['bubbles', 'radial', 'grid', 'css-only'],
  author: 'bociKond',
  html: `<div class="pat-bubble-grid">
  <div class="pat-bubble-grid__bg"></div>
</div>`,
  css: `
.pat-bubble-grid {
  background: #ca3f3f;
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

.pat-bubble-grid__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background:
    radial-gradient(
        50% 50% at 100% 0,
        #ca3f3f 0% 5%,
        #ffffff 6% 15%,
        #ca3f3f 16% 25%,
        #ffffff 26% 35%,
        #ca3f3f 36% 45%,
        #ffffff 46% 55%,
        #ca3f3f 56% 65%,
        #ffffff 66% 75%,
        #ca3f3f 76% 85%,
        #ffffff 86% 95%,
        #0000 96%
      ),
    radial-gradient(
      50% 50% at 0 100%,
      #ca3f3f 0% 5%,
      #ffffff 6% 15%,
      #ca3f3f 16% 25%,
      #ffffff 26% 35%,
      #ca3f3f 36% 45%,
      #ffffff 46% 55%,
      #ca3f3f 56% 65%,
      #ffffff 66% 75%,
      #ca3f3f 76% 85%,
      #ffffff 86% 95%,
      #0000 96%
    ),
    radial-gradient(
      50% 50%,
      #ca3f3f 0% 5%,
      #ffffff 6% 15%,
      #ca3f3f 16% 25%,
      #ffffff 26% 35%,
      #ca3f3f 36% 45%,
      #ffffff 46% 55%,
      #ca3f3f 56% 65%,
      #ffffff 66% 75%,
      #ca3f3f 76% 85%,
      #ffffff 86% 95%,
      #0000 96%
    ),
    radial-gradient(
        50% 50%,
        #ca3f3f 0% 5%,
        #ffffff 6% 15%,
        #ca3f3f 16% 25%,
        #ffffff 26% 35%,
        #ca3f3f 36% 45%,
        #ffffff 46% 55%,
        #ca3f3f 56% 65%,
        #ffffff 66% 75%,
        #ca3f3f 76% 85%,
        #ffffff 86% 95%,
        #0000 96%
      )
      38px 38px;
  background-size: 76px 76px;
  background-color: #ca3f3f;
}
`
}