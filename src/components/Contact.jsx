import { Reveal } from './Reveal'

const EMAIL_USER = 'jayadeeps1101'
const EMAIL_DOMAIN = 'gmail.com'
const EMAIL = `${EMAIL_USER}@${EMAIL_DOMAIN}`

const channels = [
  {
    label: 'GitHub',
    hint: 'Code & projects',
    href: 'https://github.com/jayadeep-sayani',
    ext: true,
    accent: 'violet',
  },
  {
    label: 'LinkedIn',
    hint: 'Professional network',
    href: 'https://www.linkedin.com/in/jayadeep-sayani/',
    ext: true,
    accent: 'electric',
  },
  {
    label: 'Phone',
    hint: '+1 250 880 9270',
    href: 'tel:+12508809270',
    accent: 'hot',
  },
  {
    label: 'Resume',
    hint: 'PDF download',
    href: '/Portfolio/Jayadeep_Sayani_Resume_JULY2026.pdf',
    download: 'Jayadeep_Sayani_Resume_JULY2026.pdf',
    accent: 'lime',
  },
]

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__atmosphere" aria-hidden="true">
        <span className="contact__watermark">HELLO</span>
        <span className="contact__glyph">@</span>
        <div className="contact__grid-overlay" />
        <div className="contact__beam contact__beam--1" />
        <div className="contact__beam contact__beam--2" />
        <div className="contact__beam contact__beam--3" />
        <div className="contact__orb contact__orb--hot" />
        <div className="contact__orb contact__orb--violet" />
        <div className="contact__orb contact__orb--electric" />
      </div>

      <div className="contact__inner">
        <Reveal>
          <header className="contact__head">
            <p className="contact__index">05 · Contact</p>
            <h2 className="contact__title">
              Don&apos;t leave
              <span className="contact__title-accent"> empty-handed</span>.
            </h2>
            <p className="contact__desc">
              Fall 2026 internships, collabs, or something you want built. I read every message.
            </p>
          </header>
        </Reveal>

        <Reveal delay={50}>
          <div className="contact__avail">
            <span className="contact__avail-dot" aria-hidden="true" />
            Open for Fall 2026 internships
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="contact__portal-wrap">
            <div className="contact__halo" aria-hidden="true">
              <span className="contact__ring contact__ring--outer" />
              <span className="contact__ring contact__ring--mid" />
              <span className="contact__ring contact__ring--inner" />
            </div>

            <div className="contact__portal">
              <div className="contact__portal-frame">
                <div className="contact__portal-border" aria-hidden="true" />
                <div className="contact__portal-glow" aria-hidden="true" />

                <div className="contact__portal-corners" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="contact__portal-body">
                <p className="contact__portal-label">Direct line to my inbox</p>

                <a href={`mailto:${EMAIL}`} className="contact__email">
                  <span className="contact__email-ghost" aria-hidden="true">
                    @
                  </span>
                  <span className="contact__email-stack">
                    <span className="contact__email-user">{EMAIL_USER}</span>
                    <span className="contact__email-domain">
                      @{EMAIL_DOMAIN}
                    </span>
                  </span>
                </a>

                <p className="contact__portal-note">
                  One tap opens your mail app. No forms. No gatekeepers.
                </p>

                <a href={`mailto:${EMAIL}`} className="contact__cta">
                  <span className="contact__cta-shine" aria-hidden="true" />
                  Email me
                  <span className="contact__cta-arrow" aria-hidden="true">→</span>
                </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <nav className="contact__channels" aria-label="Other ways to connect">
            {channels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                className={`contact__channel contact__channel--${ch.accent}`}
                target={ch.ext ? '_blank' : undefined}
                rel={ch.ext ? 'noreferrer' : undefined}
                download={ch.download}
              >
                <span className="contact__channel-label">{ch.label}</span>
                <span className="contact__channel-hint">{ch.hint}</span>
                <span className="contact__channel-arrow" aria-hidden="true">
                  {ch.ext || ch.download ? '↗' : '→'}
                </span>
              </a>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={220}>
          <p className="contact__signoff">
            Victoria, BC · Built with curiosity and just enough chaos.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
