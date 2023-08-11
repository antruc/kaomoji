import copyToClipboard from './copyToClipboard.js'
import toast from './toast.js'
import menu from './menu.js'

export default function handler() {
  let dataCopy = event.target.dataset.copy
  let dataMenu = event.target.dataset.menu
  if (dataCopy) {
    copyToClipboard(dataCopy)
    toast.show('Copied to clipboard!')
  }
  if (dataMenu) {
    menu.goTo(dataMenu)
  }
}
