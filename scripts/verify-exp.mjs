import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })
await page.goto('http://localhost:4179/Portfolio/', { waitUntil: 'networkidle' })
await page.waitForSelector('#experience')
await page.waitForFunction(
  () => {
    const stop = document.querySelector('.exp__stop')
    return stop && stop.style.left && stop.style.left !== ''
  },
  { timeout: 10000 },
)

const data = await page.evaluate(() => {
  const path = document.querySelector('.exp__rail-bed')
  const coaster = document.querySelector('.exp__coaster')
  const len = path?.getTotalLength()
  const samples = [0.14, 0.39, 0.6425].map((f) => {
    const pt = path.getPointAtLength(f * len)
    return { f, x: pt.x, y: pt.y }
  })
  const stops = [...document.querySelectorAll('.exp__stop')]
  const nodes = [...document.querySelectorAll('.exp__node-core')]
  const meta = {
    bundle: [...document.querySelectorAll('script[src]')].pop()?.src.split('/').pop(),
    pathLen: len,
    coasterW: coaster?.getBoundingClientRect().width,
    samples,
  }
  const cards = stops.map((s, i) => {
    const r = s.getBoundingClientRect()
    const node = nodes[i]?.getBoundingClientRect()
    return {
      side: s.dataset.side,
      left: s.style.left,
      top: s.style.top,
      cardL: Math.round(r.left),
      cardR: Math.round(r.right),
      cardT: Math.round(r.top),
      nodeL: node ? Math.round(node.left) : null,
      nodeR: node ? Math.round(node.right) : null,
      nodeT: node ? Math.round(node.top) : null,
    }
  })
  return { meta, cards }
})

console.log(JSON.stringify(data, null, 2))
await browser.close()
