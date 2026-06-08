import copyToClipboard from './copyToClipboard.js'
import toast from './toast.js'
import menu from './menu.js'

export default function handler(event) {
  const { copy: copyTarget, menu: menuTarget } = event.target.dataset
  if (copyTarget) {
    copyToClipboard(copyTarget)
    toast.show('Copied to clipboard!')
  }
  if (menuTarget) {
    menu.goTo(menuTarget)
  }
}
