import './css/index.css'
import './js/reload.js'
import handler from './js/handler.js'
import cards from './js/cards.js'
import menu from './js/menu.js'

function app() {
  document.addEventListener('click', handler)
  cards.create()
  menu.create()
  document.getElementById('happy').classList.add('is-visible')
}

document.addEventListener('DOMContentLoaded', app)
