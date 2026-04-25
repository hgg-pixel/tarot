class Deck {
  constructor() {
    this.remaining = []
    this.mode = 'full'
  }

  init(mode = 'full') {
    this.mode = mode
    const source = mode === 'major' ? getMajorCards() : [...CARDS]
    this.remaining = this._shuffle(source.map(c => c.id))
  }

  _shuffle(arr) {
    const a = [...arr]
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  shuffle() {
    this.remaining = this._shuffle(this.remaining)
  }

  draw() {
    if (!this.remaining.length) return null
    const id = this.remaining.pop()
    return {
      card: getCardById(id),
      isReversed: Math.random() < 0.5
    }
  }

  returnCard(id) {
    this.remaining.unshift(id)
  }

  get count() { return this.remaining.length }
  get isEmpty() { return this.remaining.length === 0 }
}
