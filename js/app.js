/* ── State ── */
const deck  = new Deck()
const drag  = new DragManager()
let spreadCards  = []   // { id, isReversed, el }
let currentMode  = 'full'

/* ══════════════════════════════════════════
   Init
══════════════════════════════════════════ */
function init() {
  deck.init(currentMode)
  updateDeckDisplay()
  buildLibrary()
  initStars()
  setupEvents()
}

/* ══════════════════════════════════════════
   Events
══════════════════════════════════════════ */
function setupEvents() {
  // Draw card
  document.getElementById('deckStack').addEventListener('click', () => {
    if (!deck.isEmpty) drawCard()
  })

  // Shuffle: only shuffles remaining cards in deck, spread untouched
  document.getElementById('shuffleBtn').addEventListener('click', () => {
    deck.shuffle()
    updateDeckDisplay()
    document.getElementById('deckStack').classList.add('shuffling')
    setTimeout(() => document.getElementById('deckStack').classList.remove('shuffling'), 650)
  })

  // Clear: return all spread cards to deck and start fresh
  document.getElementById('clearBtn').addEventListener('click', () => {
    returnAll()
    deck.init(currentMode)
    updateDeckDisplay()
  })

  // Library open/close
  document.getElementById('libraryBtn').addEventListener('click', () => openVeil('libVeil'))
  document.getElementById('libClose').addEventListener('click',   () => closeVeil('libVeil'))
  document.getElementById('libVeil').addEventListener('click', e => {
    if (e.target.id === 'libVeil') closeVeil('libVeil')
  })

  // Detail close
  document.getElementById('detailClose').addEventListener('click', () => closeVeil('detailVeil'))
  document.getElementById('detailVeil').addEventListener('click', e => {
    if (e.target.id === 'detailVeil') closeVeil('detailVeil')
  })

  // Mode toggle
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.mode === currentMode) return
      currentMode = btn.dataset.mode
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      returnAll()
      deck.init(currentMode)
      updateDeckDisplay()
    })
  })

  // Library filter
  document.querySelectorAll('.filt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filt-btn').forEach(b => b.classList.remove('active'))
      btn.classList.add('active')
      filterLibrary(btn.dataset.filter)
    })
  })

  // Keyboard: Escape closes modals
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeVeil('libVeil')
      closeVeil('detailVeil')
    }
  })
}

function openVeil(id)  { document.getElementById(id).classList.add('open') }
function closeVeil(id) { document.getElementById(id).classList.remove('open') }

/* ══════════════════════════════════════════
   Drawing Cards
══════════════════════════════════════════ */
function drawCard() {
  const result = deck.draw()
  if (!result) return

  const { card, isReversed } = result
  const zone = document.getElementById('spreadZone')
  const zw   = zone.clientWidth
  const zh   = zone.clientHeight
  const cw   = 90, ch = 150

  const el = createSpreadCard(card, isReversed)

  // Scatter near centre
  const cx = (zw - cw) / 2 + (Math.random() - 0.5) * Math.min(140, zw * 0.3)
  const cy = (zh - ch) / 2 + (Math.random() - 0.5) * Math.min(100, zh * 0.25)
  el.style.left = Math.max(8, Math.min(cx, zw - cw - 8)) + 'px'
  el.style.top  = Math.max(8, Math.min(cy, zh - ch - 8)) + 'px'
  el.style.zIndex = 200 + spreadCards.length

  zone.appendChild(el)
  spreadCards.push({ id: card.id, isReversed, el })

  document.getElementById('spreadHint').style.display = 'none'
  updateDeckDisplay()
}

/* ══════════════════════════════════════════
   Card Element Builder
══════════════════════════════════════════ */
function createSpreadCard(card, isReversed) {
  const el = document.createElement('div')
  el.className = 'spread-card'
  el.dataset.cardId  = card.id
  el.dataset.reversed = isReversed

  const suitCls  = card.type === 'major' ? 'major' : card.suit
  const rankLbl  = rankLabel(card)
  const pSym     = card.planet_symbol  !== '—' ? card.planet_symbol  : ''
  const zSym     = card.zodiac_symbol  !== '—' ? card.zodiac_symbol  : ''

  el.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-back">
        <div class="back-corners">
          <span>✦</span><span>✦</span>
          <span>✦</span><span>✦</span>
        </div>
        <div class="back-central"><span class="back-moon">☽</span></div>
        ${isReversed ? '<div class="rev-dot"></div>' : ''}
      </div>
      <div class="card-face card-front ${suitCls}">
        <span class="cf-rank">${rankLbl}</span>
        <span class="cf-sym">${card.symbol}</span>
        <span class="cf-name">${card.name_zh}</span>
        <div class="cf-attrs">
          ${pSym ? `<span title="行星">${pSym}</span><span class="attr-sep">·</span>` : ''}
          ${zSym ? `<span title="星座">${zSym}</span><span class="attr-sep">·</span>` : ''}
          <span title="元素">${card.element}</span>
          <span class="attr-sep">·</span>
          <span class="attr-num" title="灵数">${card.numerology}</span>
        </div>
      </div>
    </div>`

  /* Drag */
  el.addEventListener('mousedown', e => {
    if (e.button !== 0) return
    e.preventDefault()
    drag.startDrag(el, e.clientX, e.clientY)
  })
  el.addEventListener('touchstart', e => {
    drag.startDrag(el, e.touches[0].clientX, e.touches[0].clientY)
  }, { passive: true })

  /* Click: flip → then open detail */
  el.addEventListener('click', () => {
    if (drag.consumeDrag()) return
    if (!el.classList.contains('flipped')) {
      flipCard(el, isReversed)
    } else {
      openDetail(card.id, isReversed)
    }
  })

  return el
}

function flipCard(el, isReversed) {
  const inner = el.querySelector('.card-inner')

  // Phase 1: squish inward
  inner.style.transform = 'scaleX(0)'

  setTimeout(() => {
    // Swap face at midpoint
    el.classList.add('flipped')
    if (isReversed) el.classList.add('reversed')

    // Phase 2: expand back out
    inner.classList.add('expanding')
    inner.style.transform = 'scaleX(1)'

    setTimeout(() => {
      inner.classList.remove('expanding')
      inner.style.transform = ''
    }, 140)
  }, 140)
}

function rankLabel(card) {
  if (card.type === 'major') return card.number === 0 ? 'Ø' : card.number
  const map = { 1: 'ACE', 11: 'PAGE', 12: 'KN·', 13: 'Q', 14: 'K' }
  return map[card.number] !== undefined ? map[card.number] : card.number
}

/* ══════════════════════════════════════════
   Deck Display
══════════════════════════════════════════ */
function updateDeckDisplay() {
  document.getElementById('deckCount').textContent = deck.count
  const stack = document.getElementById('deckStack')
  deck.isEmpty ? stack.classList.add('is-empty') : stack.classList.remove('is-empty')
}

function returnAll() {
  spreadCards.forEach(({ id }) => deck.returnCard(id))
  spreadCards = []
  document.querySelectorAll('.spread-card').forEach(el => el.remove())
  document.getElementById('spreadHint').style.display = 'flex'
  updateDeckDisplay()
}

/* ══════════════════════════════════════════
   Library
══════════════════════════════════════════ */
function buildLibrary() {
  const grid = document.getElementById('libGrid')
  grid.innerHTML = ''
  CARDS.forEach(card => {
    const suitCls = card.type === 'major' ? 'major' : card.suit
    const pSym    = card.planet_symbol !== '—' ? card.planet_symbol : ''
    const zSym    = card.zodiac_symbol !== '—' ? card.zodiac_symbol : ''

    const el = document.createElement('div')
    el.className     = `lib-card ${suitCls}`
    el.dataset.filter = card.type === 'major' ? 'major' : card.suit
    el.innerHTML = `
      <span class="lc-rank">${rankLabel(card)}</span>
      <span class="lc-sym">${card.symbol}</span>
      <span class="lc-name">${card.name_zh}</span>
      <div class="lc-attrs">
        ${pSym ? `<span>${pSym}</span>` : ''}
        ${zSym ? `<span>${zSym}</span>` : ''}
        <span>${card.element}</span>
        <span>${card.numerology}</span>
      </div>
      <div class="lc-hover">
        <span class="lc-hover-zh">${card.name_zh}</span>
        <span class="lc-hover-en">${card.name_en}</span>
      </div>`
    el.addEventListener('click', () => {
      closeVeil('libVeil')
      openDetail(card.id, false)
    })
    grid.appendChild(el)
  })
}

function filterLibrary(filter) {
  document.querySelectorAll('.lib-card').forEach(el => {
    el.style.display = (filter === 'all' || el.dataset.filter === filter) ? '' : 'none'
  })
}

/* ══════════════════════════════════════════
   Detail Modal
══════════════════════════════════════════ */
const SUIT_LABELS = { wands: '权杖', cups: '圣杯', swords: '宝剑', pentacles: '星币' }

function openDetail(cardId, isReversed) {
  const card = getCardById(cardId)
  if (!card) return

  const suitCls   = card.type === 'major' ? 'major' : card.suit
  const typeLabel = card.type === 'major' ? '大阿卡纳' : (SUIT_LABELS[card.suit] || card.suit)
  const rankLbl   = rankLabel(card)
  const pSym      = card.planet_symbol !== '—' ? card.planet_symbol : ''
  const zSym      = card.zodiac_symbol !== '—' ? card.zodiac_symbol : ''

  // Card visual
  document.getElementById('detailVis').innerHTML = `
    <div class="detail-card-vis ${suitCls} ${isReversed ? 'reversed' : ''}">
      <span class="dv-rank">${rankLbl}</span>
      <span class="dv-sym">${card.symbol}</span>
      <span class="dv-name">${card.name_zh}</span>
      <div class="dv-attrs">
        ${pSym ? `<span>${pSym}</span>` : ''}
        ${zSym ? `<span>${zSym}</span>` : ''}
        <span>${card.element}</span>
        <span>${card.numerology}</span>
      </div>
    </div>`

  // Interpretation
  const curPos    = isReversed ? '逆位' : '正位'
  const curMean   = isReversed ? card.reversed : card.upright
  const altPos    = isReversed ? '正位' : '逆位'
  const altMean   = isReversed ? card.upright  : card.reversed
  const curCls    = isReversed ? 'reversed' : 'upright'

  document.getElementById('detailInfo').innerHTML = `
    <div class="detail-info">
      <div class="di-name">
        ${card.name_zh}${isReversed ? '<span class="rev-badge">逆位</span>' : ''}
      </div>
      <p class="di-en">${card.name_en}</p>

      <div class="di-meta">
        <div class="meta-item">
          <span class="meta-lbl">类型</span>
          <span class="meta-val">${typeLabel}</span>
        </div>
        <div class="meta-item">
          <span class="meta-lbl">元素</span>
          <span class="meta-val">${card.element}</span>
        </div>
        <div class="meta-item">
          <span class="meta-lbl">行星</span>
          <span class="meta-val">${card.planet !== '—' ? card.planet + ' ' + card.planet_symbol : '—'}</span>
        </div>
        <div class="meta-item">
          <span class="meta-lbl">星座</span>
          <span class="meta-val">${card.zodiac !== '—' ? card.zodiac + ' ' + card.zodiac_symbol : '—'}</span>
        </div>
        <div class="meta-item">
          <span class="meta-lbl">灵数</span>
          <span class="meta-val">${card.numerology}</span>
        </div>
      </div>

      <div class="interp">
        <p class="interp-pos ${curCls}">${curPos}</p>
        <p class="interp-text">${curMean}</p>
      </div>
      <div class="interp">
        <p class="interp-pos alt">${altPos}</p>
        <p class="interp-text">${altMean}</p>
      </div>
    </div>`

  openVeil('detailVeil')
}

/* ══════════════════════════════════════════
   Stars Canvas
══════════════════════════════════════════ */
function initStars() {
  const canvas = document.getElementById('starsCanvas')
  const ctx    = canvas.getContext('2d')

  const resize = () => {
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  // Mix of gold stars and white stars
  const stars = Array.from({ length: 220 }, (_, i) => ({
    x:     Math.random(),
    y:     Math.random(),
    r:     Math.random() * 1.3 + 0.2,
    a:     Math.random() * 0.7 + 0.1,
    speed: Math.random() * 0.006 + 0.002,
    phase: Math.random() * Math.PI * 2,
    gold:  i < 80   // first 80 are gold, rest white-ish
  }))

  let t = 0
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    stars.forEach(s => {
      const alpha = s.a * (0.45 + 0.55 * Math.sin(t * s.speed + s.phase))
      ctx.beginPath()
      ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2)
      ctx.fillStyle = s.gold
        ? `rgba(201,168,76,${alpha})`
        : `rgba(220,210,195,${alpha * 0.55})`
      ctx.fill()
    })
    t += 0.8
    requestAnimationFrame(draw)
  }
  requestAnimationFrame(draw)
}

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', init)
