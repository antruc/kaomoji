import '../styles/cards.css'
import '../styles/button.css'
import { html, render } from './renderer.js'
import kaomoji from './kaomoji.js'

const cards = {
  container(name) {
    return html`<section id="${name}" class="section-app">
      <ul class="cardbox"></ul>
    </section>`
  },
  card(text) {
    return html`<li class="card">
      ${text}<button
        class="icon-copy button-card button"
        data-copy="${text}"
      ></button>
    </li>`
  },
  create() {
    let root = document.querySelector('#app')
    Object.entries(kaomoji).forEach(([key, value]) => {
      render(this.container(key), root)
      let containerElm = document.querySelector(`#${key} ul`)
      value.forEach((i) => {
        render(this.card(i), containerElm)
      })
    })
  }
}

export default cards
