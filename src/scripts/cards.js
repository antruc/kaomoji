import '../styles/cards.css'
import '../styles/button.css'
import { html, render } from './renderer.js'
import kaomoji from './kaomoji.js'

const cards = {
  root: document.querySelector('#app'),
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
    // Loop through each entry in the kaomoji object
    Object.entries(kaomoji).forEach(([key, value]) => {
      // Render a section container for the current category (key) in the root element
      render(this.container(key), this.root)
      // Loop through all kaomoji in this category and render them as cards
      value.forEach((i) =>
        render(this.card(i), document.querySelector(`#${key} ul`))
      )
    })
  }
}

export default cards
