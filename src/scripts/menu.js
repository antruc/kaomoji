import '../styles/menu.css'
import '../styles/button.css'
import { html, render } from './renderer.js'
import kaomoji from './kaomoji.js'

const menu = {
  isVisible: 'is-visible',
  footer() {
    return html`<footer></footer>`
  },
  button(name) {
    return html`<button
      class="icon-${name} button-menu button"
      data-menu="${name}"
    ></button>`
  },
  create() {
    render(this.footer(), document.querySelector('#app'))
    const footerElm = document.querySelector('footer')
    // Loop through all keys of the kaomoji object and render a button for each
    Object.keys(kaomoji).forEach((i) => render(this.button(i), footerElm))
  },
  goTo(id) {
    document.querySelectorAll('.section-app').forEach((i) => {
      if (i.classList.contains(this.isVisible)) {
        i.classList.remove(this.isVisible)
      }
    })
    document.querySelector(`#${id}`).classList.add(this.isVisible)
    window.scrollTo(0, 0)
  }
}

export default menu
