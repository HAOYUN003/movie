import type { Movie, Scene } from './types'

export class Engine {
  private app: HTMLElement
  private movie: Movie
  private el: HTMLElement | null = null
  private busy = false
  private timelineFill: HTMLElement
  private advance: (() => void) | null = null

  constructor(app: HTMLElement, movie: Movie) {
    this.app = app
    this.movie = movie

    const bar = document.createElement('div')
    bar.className = 'timeline-bar'
    bar.innerHTML = '<div class="fill"></div>'
    this.app.appendChild(bar)
    this.timelineFill = bar.querySelector('.fill')!

    // 全局键盘监听：Enter / 空格 触发当前场景的"继续"
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        if (this.advance) this.advance()
      }
    })
  }

  start() {
    this.go(this.movie.start)
  }

  /** 显示一个场景 */
  async go(id: string) {
    const scene = this.movie.scenes[id]
    if (!scene) return
    if (this.busy) return
    this.busy = true

    const next = this.render(scene)
    this.app.appendChild(next)
    requestAnimationFrame(() => requestAnimationFrame(() => next.classList.add('visible')))

    // 退场
    if (this.el && this.el !== next) {
      this.el.classList.add('leaving')
      await this.delay(1200)
      this.el.remove()
    }
    this.el = next

    // 进度条：有 next 就慢速推进
    if (scene.next) {
      this.timelineFill.style.width = '12%'
    }

    this.busy = false
  }

  private render(scene: Scene): HTMLElement {
    const el = document.createElement('div')
    el.className = `scene scene-${scene.kind}`

    switch (scene.kind) {
      case 'fade': {
        // 黑屏场景：短暂停顿后自动进入下一幕
        const nextId = scene.next
        if (nextId) {
          setTimeout(() => this.go(nextId), 1400)
        }
        break
      }

      case 'chapter': {
        const title = document.createElement('div')
        title.className = 'chapter-title'
        title.textContent = scene.chapter || ''
        el.appendChild(title)
        if (scene.chapterSub) {
          const sub = document.createElement('div')
          sub.className = 'chapter-sub'
          sub.textContent = scene.chapterSub
          el.appendChild(sub)
        }
        if (scene.year) {
          const y = document.createElement('div')
          y.className = 'chapter-year'
          y.textContent = scene.year
          el.appendChild(y)
        }
        this.addTapNext(el, scene)
        break
      }

      case 'narration': {
        const wrap = document.createElement('div')
        wrap.className = 'narration'
        ;(scene.lines || []).forEach((line, i) => {
          const p = document.createElement('p')
          p.className = 'line'
          p.textContent = line
          if (i >= (scene.lines || []).length - 1) p.classList.add('soft')
          wrap.appendChild(p)
          setTimeout(() => p.classList.add('show'), 400 + i * 900)
        })
        el.appendChild(wrap)
        this.addTapNext(el, scene)
        break
      }

      case 'photo': {
        const box = document.createElement('div')
        box.className = 'scene-photo'
        const frame = document.createElement('div')
        frame.className = 'photo-frame'
        const img = new Image()
        const showPlaceholder = () => {
          if (frame.querySelector('img')) frame.removeChild(frame.querySelector('img')!)
          const ph = document.createElement('div')
          ph.className = 'photo-placeholder'
          ph.textContent = scene.placeholder || '照片'
          frame.appendChild(ph)
        }
        if (scene.photo) {
          img.onload = () => {
            if (img.naturalHeight > img.naturalWidth) frame.classList.add('portrait')
          }
          img.onerror = showPlaceholder
          img.src = scene.photo
          frame.appendChild(img)
        } else {
          showPlaceholder()
        }
        box.appendChild(frame)
        if (scene.hint) {
          const hint = document.createElement('div')
          hint.className = 'photo-hint'
          hint.textContent = scene.hint
          box.appendChild(hint)
        }
        el.appendChild(box)
        this.addTapNext(el, scene)
        break
      }

      case 'memoryCard': {
        const box = document.createElement('div')
        box.className = 'scene-memory'
        const frame = document.createElement('div')
        frame.className = 'photo-frame'
        const img = new Image()
        if (scene.photo) {
          img.src = scene.photo
          frame.appendChild(img)
        } else {
          const ph = document.createElement('div')
          ph.className = 'photo-placeholder'
          ph.textContent = scene.placeholder || '照片'
          frame.appendChild(ph)
        }
        box.appendChild(frame)

        const q = document.createElement('div')
        q.className = 'choice-question'
        q.textContent = scene.text || ''
        q.style.marginTop = '28px'
        q.style.marginBottom = '28px'
        box.appendChild(q)

        const opts = document.createElement('div')
        opts.className = 'choice-options'
        ;(scene.options || []).forEach((o) => {
          const b = document.createElement('button')
          b.className = 'choice-option'
          b.textContent = o.label
          b.onclick = () => this.go(o.go)
          opts.appendChild(b)
        })
        box.appendChild(opts)
        el.appendChild(box)
        break
      }

      case 'choice': {
        const box = document.createElement('div')
        box.className = 'choice-box'
        const q = document.createElement('div')
        q.className = 'choice-question'
        q.textContent = scene.text || ''
        box.appendChild(q)
        const opts = document.createElement('div')
        opts.className = 'choice-options'
        ;(scene.options || []).forEach((o) => {
          const b = document.createElement('button')
          b.className = 'choice-option'
          b.textContent = o.label
          b.onclick = () => this.go(o.go)
          opts.appendChild(b)
        })
        box.appendChild(opts)
        el.appendChild(box)
        break
      }

      case 'found': {
        const tag = document.createElement('div')
        tag.className = 'found-tag'
        tag.textContent = scene.text || 'FOUND'
        el.appendChild(tag)
        if (scene.hint) {
          const h = document.createElement('div')
          h.className = 'found-hint'
          h.textContent = scene.hint
          el.appendChild(h)
        }
        this.addTapNext(el, scene)
        break
      }

      case 'anime': {
        // 动漫场景背景
        el.style.backgroundImage = scene.bg ? `url(${scene.bg})` : 'none'
        el.style.backgroundSize = 'cover'
        el.style.backgroundPosition = 'center'
        el.classList.add('anime-bg')

        const dialogue = document.createElement('div')
        dialogue.className = 'anime-dialogue'
        el.appendChild(dialogue)

        const lines = scene.animeLines || []
        const nextId = scene.next

        // 串行播放：每行对话 → 照片完整浮现淡出 → 下一行
        let finished = false
        const playAll = async () => {
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i]
            // 显示对话
            const d = document.createElement('p')
            d.className = 'anime-line'
            d.textContent = line.text
            dialogue.appendChild(d)
            requestAnimationFrame(() => requestAnimationFrame(() => d.classList.add('show')))

            // 若有照片：浮现 → 充分停留 → 淡出
            if (line.photo) {
              await this.delay(400)
              const photoEl = this.buildMemoryPhoto(line.photo, line.photoCaption)
              el.appendChild(photoEl)
              requestAnimationFrame(() => requestAnimationFrame(() => photoEl.classList.add('show')))
              await this.delay(4200)
              photoEl.classList.remove('show')
              await this.delay(900)
              if (photoEl.parentNode) photoEl.remove()
            }

            await this.delay(700)
          }
          finished = true
          const hint = document.createElement('div')
          hint.className = 'tap-hint'
          hint.textContent = '轻触 / 按 Enter 继续'
          el.appendChild(hint)
        }
        playAll()

        const cb = () => { if (finished && nextId) this.go(nextId) }
        this.advance = cb
        el.addEventListener('click', cb)
        break
      }
    }

    return el
  }

  /** 构建"记忆照片"元素：带边框，从动漫场景中浮现 */
  private buildMemoryPhoto(photo: string, caption?: string): HTMLElement {
    const wrap = document.createElement('div')
    wrap.className = 'memory-photo'
    const frame = document.createElement('div')
    frame.className = 'memory-photo-frame'
    const img = new Image()
    img.src = photo
    frame.appendChild(img)
    wrap.appendChild(frame)
    if (caption) {
      const c = document.createElement('div')
      c.className = 'memory-photo-caption'
      c.textContent = caption
      wrap.appendChild(c)
    }
    return wrap
  }

  private addTapNext(el: HTMLElement, scene: Scene) {
    const hint = document.createElement('div')
    hint.className = 'tap-hint'
    hint.textContent = '轻触 / 按 Enter 继续'
    el.appendChild(hint)
    const cb = () => { if (scene.next) this.go(scene.next) }
    this.advance = cb
    el.addEventListener('click', cb)
  }

  private delay(ms: number) {
    return new Promise((r) => setTimeout(r, ms))
  }
}
