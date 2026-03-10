import '../styles/toast.css'
import { html, render } from './renderer.js'

const toast = {
  template(text) {
    return html`<div class="container-toast">
      <div class="toast">${text}</div>
    </div>`
  },
  show(text) {
    render(this.template(text), document.querySelector('#app'))
    setTimeout(() => document.querySelector('.container-toast').remove(), 1500)
  }
}

export default toast
