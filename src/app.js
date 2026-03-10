import './styles/index.css'
import './scripts/reload.js'
import onEvent from './scripts/onEvent.js'
import handler from './scripts/handler.js'
import cards from './scripts/cards.js'
import menu from './scripts/menu.js'

function app() {
  onEvent('click', handler)
  cards.create()
  menu.create()
  document.getElementById('happy').classList.add('is-visible')
}

onEvent('DOMContentLoaded', app)
