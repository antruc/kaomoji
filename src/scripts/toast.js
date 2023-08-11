import '../styles/toast.css'
import { html, render } from './renderer.js'

const toast = {
  template(text) {
    return html`<div class="container-toast">
      <div class="toast">${text}</div>
    </div>`
  },
  show(text) {
    let root = document.querySelector('#app')
    render(this.template(text), root)
    setTimeout(() => {
      let toastElm = document.querySelector('.container-toast')
      toastElm.remove()
    }, 1500)
  }
}

export default toast
