class DragManager {
  constructor() {
    this.active    = null   // { el, offsetX, offsetY }
    this.startPos  = null   // { x, y }
    this.didDrag   = false
    this.threshold = 6
    this.zCounter  = 200

    document.addEventListener('mousemove', this._onMove.bind(this))
    document.addEventListener('mouseup',   this._onEnd.bind(this))
    document.addEventListener('touchmove', this._onTouchMove.bind(this), { passive: false })
    document.addEventListener('touchend',  this._onEnd.bind(this))
  }

  startDrag(el, clientX, clientY) {
    const rect = el.getBoundingClientRect()
    this.active   = { el, offsetX: clientX - rect.left, offsetY: clientY - rect.top }
    this.startPos = { x: clientX, y: clientY }
    this.didDrag  = false
  }

  _onTouchMove(e) {
    if (!this.active) return
    e.preventDefault()
    this._move(e.touches[0].clientX, e.touches[0].clientY)
  }

  _onMove(e) {
    if (!this.active) return
    this._move(e.clientX, e.clientY)
  }

  _move(clientX, clientY) {
    const { el, offsetX, offsetY } = this.active

    if (!this.didDrag) {
      const dx = clientX - this.startPos.x
      const dy = clientY - this.startPos.y
      if (Math.hypot(dx, dy) < this.threshold) return
      this.didDrag = true
      el.classList.add('is-dragging')
      el.style.zIndex = ++this.zCounter
      el.style.animation = 'none' // cancel appear animation so it doesn't fight drag
    }

    const zone = document.getElementById('spreadZone')
    const zr   = zone.getBoundingClientRect()
    const cw   = el.offsetWidth
    const ch   = el.offsetHeight

    const x = Math.max(0, Math.min(clientX - zr.left - offsetX, zr.width  - cw))
    const y = Math.max(0, Math.min(clientY - zr.top  - offsetY, zr.height - ch))

    el.style.left = x + 'px'
    el.style.top  = y + 'px'
  }

  _onEnd() {
    if (!this.active) return
    this.active.el.classList.remove('is-dragging')
    this.active = null
  }

  // Returns true if the last interaction was a drag (not a click).
  // Resets the flag so next click is treated as click.
  consumeDrag() {
    const was  = this.didDrag
    this.didDrag = false
    return was
  }
}
