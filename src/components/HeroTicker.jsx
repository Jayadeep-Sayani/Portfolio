const ITEMS = [
  'React',
  'TypeScript',
  'Python',
  'Figma',
  'Node.js',
  'OpenCV',
  'Tailwind',
  'Gemini',
]

/* Long segment so the track always overflows the viewport - no empty gaps */
const SEGMENT = [...ITEMS, ...ITEMS, ...ITEMS].join(' · ') + ' · '

const COPIES = 2

export function HeroTicker() {
  return (
    <div className="hero__ticker" aria-hidden="true">
      <div className="hero__ticker-track">
        {Array.from({ length: COPIES }, (_, i) => (
          <span key={i} className="hero__ticker-segment">
            {SEGMENT}
          </span>
        ))}
      </div>
    </div>
  )
}
