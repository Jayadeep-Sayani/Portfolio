import { Reveal } from './Reveal'
import { RoleRotator } from './RoleRotator'
import { HeroTicker } from './HeroTicker'

const PHOTO = '/Portfolio/about_me_pic.png'

const FLOATS = [
  { label: 'React', style: { top: '6%', right: '-8%' } },
  { label: 'Python', style: { top: '38%', left: '-14%' } },
  { label: 'Figma', style: { bottom: '22%', right: '-12%' } },
]

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__atmosphere" aria-hidden="true">
        <span className="hero__watermark">JS</span>
        <div className="hero__grid-overlay" />
        <div className="hero__beam hero__beam--1" />
        <div className="hero__beam hero__beam--2" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <Reveal>
            <p className="hero__index">00 · Intro</p>
          </Reveal>

          <Reveal delay={60}>
            <div className="hero__avail">
              <span className="hero__avail-dot" aria-hidden="true" />
              Open for Fall 2026 internships
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="hero__title">
              <span className="hero__title-line">Jayadeep</span>
              <span className="hero__title-line hero__title-line--accent">Sayani</span>
            </h1>
            <div className="hero__title-bar" aria-hidden="true" />
          </Reveal>

          <Reveal delay={180}>
            <div className="hero__role-block">
              <span className="hero__role-prefix">I'm a</span>
              <RoleRotator />
            </div>
            <p className="hero__meta">
              <span>Victoria, BC</span>
              <span className="hero__meta-dot" aria-hidden="true">·</span>
              <span>CS &amp; Math, UVic</span>
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="hero__desc">
              I build web apps, design interfaces, and ship under pressure at hackathons.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="hero__actions">
              <a href="#projects" className="hero__cta hero__cta--primary">
                <span className="hero__cta-shine" aria-hidden="true" />
                View work
                <span className="hero__cta-arrow" aria-hidden="true">→</span>
              </a>
              <a
                href="/Portfolio/Jayadeep_Sayani_Resume_JULY2026.pdf"
                download="Jayadeep_Sayani_Resume_JULY2026.pdf"
                className="hero__cta hero__cta--ghost"
              >
                Resume
                <span className="hero__cta-ext" aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="hero__proof">
              <div className="hero__proof-card">
                <span className="hero__proof-value">3rd</span>
                <span className="hero__proof-label">TELUS AI Hackathon</span>
              </div>
              <div className="hero__proof-card">
                <span className="hero__proof-value">300+</span>
                <span className="hero__proof-label">Students on ScholarLog</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero__visual-col">
          <div className="hero__visual">
            <div className="hero__visual-ring" aria-hidden="true" />
            <div className="hero__visual-frame hero__visual-frame--back" aria-hidden="true" />
            <div className="hero__visual-frame hero__visual-frame--front">
              <div className="hero__visual-border" aria-hidden="true" />
              <div className="hero__visual-img-wrap">
                <img
                  src={PHOTO}
                  alt="Jayadeep Sayani"
                  className="hero__photo"
                  width={400}
                  height={480}
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="hero__visual-scan" aria-hidden="true" />
              </div>
              <div className="hero__visual-corners" aria-hidden="true">
                <span /><span /><span /><span />
              </div>
            </div>

            {FLOATS.map(({ label, style }) => (
              <span key={label} className="hero__float" style={style}>
                {label}
              </span>
            ))}

            <div className="hero__visual-tag">
              <span className="hero__visual-tag-dot" aria-hidden="true" />
              Victoria, BC
            </div>
          </div>
        </Reveal>
      </div>

      <HeroTicker />

      <a href="#projects" className="hero__scroll" aria-label="Scroll to work">
        <span className="hero__scroll-line" aria-hidden="true" />
        <span className="hero__scroll-text">Scroll</span>
      </a>
    </section>
  )
}
