import './style.css'
import { movie } from './script'
import { Engine } from './engine'

const PASSWORD = '512'
const app = document.getElementById('app')!

function showGate() {
  app.innerHTML = ''

  const bg = document.createElement('div')
  bg.className = 'gate-bg'
  app.appendChild(bg)

  const card = document.createElement('div')
  card.className = 'gate-card'
  app.appendChild(card)

  const title = document.createElement('div')
  title.className = 'gate-title'
  title.textContent = '如果那天，我们这样选择'
  card.appendChild(title)

  const subtitle = document.createElement('div')
  subtitle.className = 'gate-subtitle'
  subtitle.textContent = '这部片子，只给你一个人看'
  card.appendChild(subtitle)

  const input = document.createElement('input')
  input.type = 'password'
  input.className = 'gate-input'
  input.placeholder = '输入我们的纪念日'
  input.maxLength = 6
  card.appendChild(input)

  const btn = document.createElement('button')
  btn.className = 'gate-btn'
  btn.textContent = '进入'
  card.appendChild(btn)

  const msg = document.createElement('div')
  msg.className = 'gate-msg'
  card.appendChild(msg)

  function tryEnter() {
    const v = input.value.trim()
    if (v === PASSWORD) {
      msg.textContent = ''
      startMovie()
    } else {
      msg.textContent = '不对哦，再想想……'
      input.value = ''
      input.focus()
    }
  }

  btn.addEventListener('click', tryEnter)
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') tryEnter()
  })

  setTimeout(() => input.focus(), 400)
}

function startMovie() {
  app.innerHTML = ''

  const veil = document.createElement('div')
  veil.className = 'scene scene-fade visible'
  app.appendChild(veil)

  setTimeout(() => {
    veil.style.opacity = '0'
    veil.style.pointerEvents = 'none'
  }, 300)

  const engine = new Engine(app, movie)
  setTimeout(() => engine.start(), 900)
}

showGate()
