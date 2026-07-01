import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })
await page.goto('http://localhost:5174/Portfolio/', { waitUntil: 'networkidle' })
await page.evaluate(() => document.querySelector('#experience')?.scrollIntoView({ block: 'start' }))
await page.waitForTimeout(2500)

const coords = await page.evaluate(() => {
  const path = document.querySelector('.exp__rail-bed')
  const stops = [...document.querySelectorAll('.exp__stop')]
  const coaster = document.querySelector('.exp__coaster')
  const cRect = coaster.getBoundingClientRect()
  const fracs = [0.14, 0.39, 0.6425, 0.8825, 0.955]

  return stops.map((el, i) => {
    const r = el.getBoundingClientRect()
    const len = path.getTotalLength()
    const pt = path.getPointAtLength(fracs[i] * len)
    const roadX = (pt.x / 1000) * cRect.width
    const roadY = (pt.y / 1000) * cRect.height
    const cardCenterX = r.left + r.width / 2 - cRect.left
    return {
      i,
      side: el.dataset.side,
      style: el.getAttribute('style'),
      roadX: +roadX.toFixed(0),
      roadY: +roadY.toFixed(0),
      cardCenterX: +cardCenterX.toFixed(0),
      cardLeft: +(r.left - cRect.left).toFixed(0),
      cardRight: +(r.right - cRect.left).toFixed(0),
      gapFromRoad:
        pt.x >= 500
          ? +(r.left - cRect.left - roadX).toFixed(0)
          : +(roadX - (r.right - cRect.left)).toFixed(0),
    }
  })
})

console.log(JSON.stringify(coords, null, 2))
await page.screenshot({ path: 'scripts/exp-screenshot.png', fullPage: false })
await browser.close()
