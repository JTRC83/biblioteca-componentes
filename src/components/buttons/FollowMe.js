export default {
  id: 'btn-follow-me',
  name: 'Follow me',
  category: 'buttons',
  tags: ['social', 'animated', 'slide', 'css-only'],
  author: 'andrew-demchenk0',
  html: `<button> 
  <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="33" viewBox="0 0 120 120" height="33" fill="none"><path fill="#08c" d="m60 0c-33.1373 0-60 26.8627-60 60s26.8627 60 60 60 60-26.8627 60-60-26.8627-60-60-60z"></path><path fill="#fff" d="m89.195 34.5144-10.7166 54.0314s-1.4985 3.7472-5.6203 1.9486l-24.7303-18.96-8.9925-4.3462-15.1378-5.0963s-2.3231-.824-2.5481-2.6226c-.2246-1.7986 2.6231-2.7727 2.6231-2.7727l60.1763-23.6062s4.9462-2.1731 4.9462 1.424z"></path><path fill="#d2e5f1" d="m46.2272 87.9392s-.7219-.0675-1.6215-2.9157c-.899-2.8476-5.4704-17.8353-5.4704-17.8353l36.3456-23.0814s2.0986-1.274 2.0236 0c0 0 .3745.2246-.7495 1.2736-1.1241 1.0495-28.5521 25.7044-28.5521 25.7044"></path><path fill="#b5cfe4" d="m57.6099 78.8041-9.7818 8.9184s-.7642.5804-1.6009.2167l1.8727-16.5662"></path></svg></span>
  <span class="text1">Follow me</span>
  <span class="text2">1,2k</span> 
</button>`,
  css: `
button {
  position: relative;
  width: 130px;
  height: 35px;
  border-radius: 30px;
  background-color: white;
  border: 1px #08c solid;
  overflow: hidden;
  font-family: inherit;
  cursor: pointer;
  padding: 0;
}

.text1 {
  font-size: 15px;
  font-weight: 600;
  margin-left: 22%;
  display: inline-block;
  line-height: 35px;
  color: #08c;
  position: relative;
  z-index: 1;
}

.text2 {
  position: absolute;
  top: 25%;
  left: -50px;
  font-weight: 700;
  font-size: 14px;
  color: white;
  transition: transform 0.6s;
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s;
}

.icon::before {
  position: absolute;
  left: -100px;
  top: 0;
  z-index: -1;
  content: '';
  width: 130px;
  height: 33px;
  border-radius: 30px;
  background-color: #08c;
}

button:hover .icon {
  transform: translateX(96px);
  transition: transform 0.5s;
}

button:hover .text2 {
  transform: translateX(100px);
  transition: transform 0.6s;
}

button:active {
  transform: scale(1.03);
}
`
}
