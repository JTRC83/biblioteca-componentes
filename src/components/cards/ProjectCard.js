export default {
  id: 'card-project',
  name: 'Project Card',
  category: 'cards',
  tags: ['card', 'project', 'hover', 'shadow', 'translate', 'css-only', 'arrow', 'tags'],
  author: 'Amine-maker',
  note: 'Original en Tailwind. Convertido a CSS plano.',
  html: `<article class="aw-wrapper">
  <div class="aw-container">
    </div>
    <div class="aw-info">
      <div class="aw-flex">
        <div class="aw-title">Project</div>
          <div class="aw-hover">
            <svg style="color: black;" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </div>
          <div class="aw-types">
            <span style="background-color: rgba(165, 96, 247, 0.43); color: rgb(85, 27, 177);" class="aw-tag">• Analytics</span>
             <span class="aw-tag">• Dashboards</span>
        </div>
    </div>
</article>`,
  css: `
.aw-wrapper {
  width: 250px;
  -webkit-transition: 0.15s all ease-in-out;
  transition: 0.15s all ease-in-out;
  border-radius: 10px;
  padding: 5px;
  border: 4px solid transparent;
  cursor: pointer;
  background-color: white;
}

.aw-wrapper:hover {
  -webkit-box-shadow: 10px 10px 0 #4e84ff, 20px 20px 0 #4444bd;
  box-shadow: 10px 10px 0 #4e84ff, 20px 20px 0 #4444bd;
  border-color: #0578c5;
  -webkit-transform: translate(-20px, -20px);
  -ms-transform: translate(-20px, -20px);
  transform: translate(-20px, -20px);
}

.aw-wrapper:active {
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  transform: translate(0, 0);
}

.aw-types {
  gap: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  place-content: flex-start;
}

.aw-rounded-lg {
  border-radius: 10px;
}

.aw-wrapper:hover .aw-hover {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-color: #a6c2f0;
}

.aw-info {
  padding-top: 20px;
  padding: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 20px;
}

.aw-title {
  font-size: 2em;
  margin: 0;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
}

.aw-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.aw-tag {
  background: #b2b2fd;
  color: #1a41cd;
  font-weight: bold;
  padding: 0.3em 0.7em;
  border-radius: 15px;
  font-size: 12px;
  letter-spacing: -0.6px;
}

.aw-hover {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 9px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.aw-container {
  width: 100%;
  height: 170px;
  background: gray;
}
`
}