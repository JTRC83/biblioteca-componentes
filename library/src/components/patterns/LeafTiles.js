export default {
  id: 'pat-leaf-tiles',
  name: 'Leaf Tiles',
  category: 'patterns',
  tags: ['leaf', 'nature', 'conic', 'tiles', 'css-only'],
  author: 'FColombati',
  html: `<div class="pat-leaf-tiles">
  <div class="pat-leaf-tiles__bg"></div>
</div>`,
  css: `
.pat-leaf-tiles {
  background: #386641;
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

.pat-leaf-tiles__bg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-repeat: repeat;
  background-position: 50% 50%;
  background-size: 154px 265px;
  background-image:
    conic-gradient(
      from 0deg at 92.66% 50%,
      #6a994e 0 120deg,
      #fff0 0 100%
    ),
    conic-gradient(from -60deg at 81.66% 10.25%, #6a994e 0 180deg, #fff0 0 100%),
    conic-gradient(from -60deg at 66.66% 22.25%, #a7c957 0 120deg, #fff0 0 100%),
    conic-gradient(from 0deg at 71.66% 43%, #386641 0 120deg, #fff0 0 100%),
    conic-gradient(from 0deg at 66.66% 45.95%, #386641 0 60deg, #fff0 0 100%),
    conic-gradient(from 120deg at 25% 91.5%, #a7c957 0 120deg, #fff0 0 100%),
    conic-gradient(from 180deg at 16% 73.5%, #6a994e 0 120deg, #fff0 0 100%),
    conic-gradient(from 180deg at 16% 73.5%, #6a994e 0 120deg, #fff0 0 100%),
    conic-gradient(from 180deg at 16% 73.5%, #6a994e 0 120deg, #fff0 0 100%),
    conic-gradient(from 180deg at 16% 73.5%, #6a994e 0 120deg, #fff0 0 100%),
    conic-gradient(
      from 180deg at 39.5% 65.65%,
      #386641 0 60deg,
      #a7c957 0 120deg,
      #fff0 0 100%
    ),
    conic-gradient(
      from 180deg at 39.5% 65.65%,
      #386641 0 60deg,
      #a7c957 0 120deg,
      #fff0 0 100%
    ),
    conic-gradient(
      from 180deg at 39.5% 65.65%,
      #386641 0 60deg,
      #a7c957 0 120deg,
      #fff0 0 100%
    ),
    conic-gradient(
      from 180deg at 39.5% 65.65%,
      #386641 0 60deg,
      #a7c957 0 120deg,
      #fff0 0 100%
    ),
    conic-gradient(
      from 60deg at 50% 51.5%,
      #a7c957 0 60deg,
      #6a994e 0 120deg,
      #4a8656 0 100%
    );
}
`
}