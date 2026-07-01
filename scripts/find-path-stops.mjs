import { chromium } from 'playwright'

const PATH =
  'M 500 40 C 650 40, 880 80, 880 200 S 120 400, 120 480 S 880 680, 880 760 S 120 900, 120 900 S 500 960, 500 960'

const browser = await chromium.launch()
const page = await browser.newPage()
const picks = await page.evaluate((d) => {
  document.body.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg"><path id="p" d="' + d + '"/></svg>'
  const path = document.getElementById('p')
  const len = path.getTotalLength()
  const samples = []
  for (let i = 0; i <= 400; i++) {
    const f = i / 400
    const pt = path.getPointAtLength(f * len)
    samples.push({ f, x: +pt.x.toFixed(1), y: +pt.y.toFixed(1) })
  }

  const pick = (y0, y1, side) => {
    const band = samples.filter((s) => s.y >= y0 && s.y <= y1)
    return side === 'right'
      ? band.reduce((a, b) => (b.x > a.x ? b : a))
      : band.reduce((a, b) => (b.x < a.x ? b : a))
  }

  return [
    pick(140, 260, 'right'),
    pick(380, 520, 'left'),
    pick(620, 780, 'right'),
    pick(840, 940, 'left'),
  ]
}, PATH)

console.log(JSON.stringify(picks, null, 2))
await browser.close()
