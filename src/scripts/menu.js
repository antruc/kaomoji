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
    let root = document.querySelector('#app')
    render(this.footer(), root)
    let footerElm = document.querySelector('footer')
    Object.keys(kaomoji).forEach((i) => render(this.button(i), footerElm))
  },
  goTo(id) {
    let sections = document.querySelectorAll('.section-app')
    sections.forEach((i) => {
      if (i.classList.contains(this.isVisible)) {
        i.classList.remove(this.isVisible)
      }
    })
    let sectionElm = document.querySelector(`#${id}`)
    sectionElm.classList.add(this.isVisible)
    window.scrollTo(0, 0)
  }
}

export default menu
