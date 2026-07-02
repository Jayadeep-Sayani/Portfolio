import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

const founder = {
  company: 'BrightSide Studio',
  companyUrl: 'https://brightside-studio.ca',
  role: 'Founder',
  period: '2025 · Present',
  lead: 'My studio. My clients. My standards.',
  bullets: [
    'Built BrightSide Studio from the ground up: branding, delivery, and every client relationship.',
    'Ran advertising, finances, and communications while shipping production sites end to end.',
    'Web design, UX, SEO, and development under one roof.',
  ],
  tags: ['Web design', 'UX', 'SEO', 'WordPress', 'Client relations'],
}

const carelifeRoles = [
  {
    id: 'carelife-contractor',
    accent: 'hot',
    current: true,
    role: 'Software Developer Contractor',
    period: 'May 2026 · Present',
    bullets: [
      'RSSI wander alert system with BLE beacons, IoT gateways, and MQTT telemetry.',
      'Python monitoring with NumPy and datetime analysis for beacon patterns and wander detection.',
      'BLE performance testing in high- and low-density environments.',
    ],
    tags: ['Python', 'MQTT', 'BLE', 'IoT', 'NumPy'],
  },
  {
    id: 'carelife-intern',
    accent: 'electric',
    role: 'Full Stack Developer Intern',
    period: 'May 2025 · Aug 2025',
    bullets: [
      'Responsive Care Life Portal pages with Angular and Ionic.',
      'JS automation tool monitoring 200+ fall-detection cameras via REST APIs.',
    ],
    tags: ['Angular', 'Ionic', 'JavaScript', 'REST APIs'],
  },
]

const reviews = [
  {
    id: 'jcba',
    name: 'Mackeda Bramwell',
    role: 'Founder',
    org: 'Jamaican Canadian Bar Association',
    orgShort: 'JCBA',
    orgUrl: 'https://jcba.ca/',
    rating: 5,
    quote:
      'This is the second website project Jayadeep has completed for us, and once again he delivered excellent results. He is professional, responsive, and easy to work with. He took the time to understand our needs and created a modern, user-friendly website that reflects our organization well. His attention to detail, willingness to incorporate feedback, and commitment to quality made the entire process smooth and efficient. We are very pleased with the final product and would highly recommend Jayadeep to anyone looking for a reliable and talented website developer.',
    excerpt:
      'Professional, responsive, and easy to work with, with sharp attention to detail and a real commitment to incorporating feedback.',
    highlights: ['Professional', 'Responsive', 'Detail-oriented', 'Client-focused'],
    accent: 'lime',
  },
  {
    id: 'unuhr',
    name: 'Claude Armstrong',
    role: 'Director',
    org: 'UNUHR Inc.',
    orgShort: 'UNUHR',
    orgUrl: 'https://www.unuhr.com/',
    rating: 5,
    quote:
      "We had the pleasure of working with Jayadeep as part of the team that developed our website, and his contributions were invaluable throughout the project. He was professional, collaborative, and highly responsive, always willing to assist and incorporate feedback to ensure the best possible outcome. Jayadeep's attention to detail, technical expertise, and commitment to quality helped make the project a success. We appreciate his hard work and would gladly recommend him to anyone seeking a skilled and dependable web professional.",
    excerpt:
      'Professional, collaborative, and highly responsive, invaluable on a team where quality and follow-through matter.',
    highlights: ['Collaborative', 'Responsive', 'Technical', 'Dependable'],
    accent: 'violet',
  },
]

const clientProjects = [
  {
    id: 'unuhr',
    accent: 'violet',
    company: 'UNUHR Inc.',
    companyUrl: 'https://www.unuhr.com/',
    role: 'Client project',
    via: 'Riipen',
    period: '2025',
    rating: '5★ review',
    reviewId: 'unuhr',
    bullets: [
      'Full website design and build with SEO and UX tailored to client goals.',
      'Ongoing support, client communication, and launch strategy.',
    ],
    tags: ['Web design', 'SEO', 'UX'],
  },
  {
    id: 'jcba',
    accent: 'lime',
    company: 'Jamaican Canadian Bar Association',
    short: 'JCBA',
    companyUrl: 'https://jcba.ca/',
    role: 'Client project',
    via: 'BrightSide Studio',
    period: '2025',
    rating: '5★ review',
    reviewId: 'jcba',
    bullets: [
      'End-to-end site design, development, and maintenance for the association.',
      'Responsive layout, content structure, and search visibility.',
    ],
    tags: ['WordPress', 'Web design', 'SEO'],
  },
]

const entries = [
  { key: 'founder', index: '01', accent: 'hot', kind: 'founder' },
  { key: 'contractor', index: '02', accent: 'hot', kind: 'carelife', data: carelifeRoles[0] },
  { key: 'intern', index: '03', accent: 'electric', kind: 'carelife', data: carelifeRoles[1] },
  { key: 'unuhr', index: '04', accent: 'violet', kind: 'client', data: clientProjects[0] },
  { key: 'jcba', index: '05', accent: 'lime', kind: 'client', data: clientProjects[1] },
]

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return reduced
}

function useDesktopLedger() {
  const [enabled, setEnabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 900px)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return enabled
}

function FounderCard() {
  return (
    <article className="exp__founder">
      <div className="exp__founder-border" aria-hidden="true" />
      <div className="exp__founder-glow" aria-hidden="true" />

      <div className="exp__founder-top">
        <span className="exp__founder-badge">Founder</span>
        <time className="exp__period">{founder.period}</time>
      </div>

      <h3 className="exp__founder-studio">
        <a href={founder.companyUrl} target="_blank" rel="noreferrer">
          {founder.company}
          <span aria-hidden="true"> ↗</span>
        </a>
      </h3>

      <p className="exp__founder-lead">{founder.lead}</p>

      <div className="exp__founder-body">
        <ul className="exp__bullets">
          {founder.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="exp__founder-aside">
          <p className="exp__founder-aside-label">Also shipped for</p>
          <div className="exp__founder-clients">
            {reviews.map((review) => (
              <a key={review.id} href="#client-reviews" className="exp__stars-pill">
                {review.orgShort} · 5★
              </a>
            ))}
          </div>
          <ul className="exp__tags">
            {founder.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

function CareLifeCard({ entry }) {
  return (
    <article className={`exp__card exp__card--${entry.accent}`}>
      <p className="exp__org">CareLife</p>
      <div className="exp__card-meta">
        <time className="exp__period">{entry.period}</time>
        {entry.current && <span className="exp__badge exp__badge--now">Now</span>}
      </div>
      <h3 className="exp__role">{entry.role}</h3>
      <p className="exp__loc">Remote, Canada</p>

      <ul className="exp__bullets">
        {entry.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <ul className="exp__tags">
        {entry.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}

function ClientCard({ project }) {
  const review = reviews.find((r) => r.id === project.reviewId)

  return (
    <article className={`exp__card exp__card--${project.accent} exp__card--client`}>
      <div className="exp__client-top">
        <span className="exp__stars-badge">{project.rating}</span>
        <span className="exp__via">via {project.via}</span>
      </div>
      <h3 className="exp__role">
        {project.companyUrl ? (
          <a href={project.companyUrl} target="_blank" rel="noreferrer">
            {project.short ?? project.company}
            <span aria-hidden="true"> ↗</span>
          </a>
        ) : (
          project.short ?? project.company
        )}
      </h3>
      {project.short && <p className="exp__client-full">{project.company}</p>}
      <p className="exp__loc">
        {project.role} · {project.period}
      </p>

      <ul className="exp__bullets">
        {project.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {review && (
        <blockquote className="exp__client-quote">
          <p>"{review.excerpt}"</p>
          <footer>
            - {review.name}, {review.role} ·{' '}
            <a href={review.orgUrl} target="_blank" rel="noreferrer">
              {review.orgShort}
            </a>
          </footer>
        </blockquote>
      )}

      <ul className="exp__tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}

function Stars({ count = 5 }) {
  return (
    <span className="exp__review-stars" aria-label={`${count} out of 5 stars`}>
      {'★'.repeat(count)}
    </span>
  )
}

function ClientTestimonials() {
  return (
    <div className="exp__reviews" id="client-reviews">
      <Reveal>
        <div className="exp__reviews-head">
          <p className="exp__reviews-label">Client feedback</p>
          <h3 className="exp__reviews-title">Trusted by the people I ship for</h3>
          <p className="exp__reviews-lead">
            Real words from founders and directors on communication, collaboration, and delivery.
          </p>
        </div>
      </Reveal>

      <div className="exp__reviews-grid">
        {reviews.map((review, i) => (
          <Reveal key={review.id} delay={60 + i * 80}>
            <article className={`exp__review exp__review--${review.accent}`}>
              <div className="exp__review-top">
                <Stars count={review.rating} />
                <a
                  href={review.orgUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="exp__review-org"
                >
                  {review.orgShort}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </div>

              <blockquote className="exp__review-quote">
                <p>{review.quote}</p>
              </blockquote>

              <ul className="exp__review-highlights">
                {review.highlights.map((trait) => (
                  <li key={trait}>{trait}</li>
                ))}
              </ul>

              <footer className="exp__review-author">
                <span className="exp__review-name">{review.name}</span>
                <span className="exp__review-role">
                  {review.role}, {review.org}
                </span>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

function EntryCard({ entry }) {
  if (entry.kind === 'founder') return <FounderCard />
  if (entry.kind === 'carelife') return <CareLifeCard entry={entry.data} />
  return <ClientCard project={entry.data} />
}

function LedgerEntry({ entry, side, delay }) {
  return (
    <Reveal delay={delay} className={`exp__entry exp__entry--${side} exp__entry--${entry.accent}`}>
      {side === 'left' && (
        <div className="exp__entry-card">
          <EntryCard entry={entry} />
        </div>
      )}

      <div className="exp__entry-axis" aria-hidden="true">
        <span className="exp__entry-index">{entry.index}</span>
        <span className={`exp__entry-dot exp__entry-dot--${entry.accent}`} />
      </div>

      {side === 'right' && (
        <div className="exp__entry-card">
          <EntryCard entry={entry} />
        </div>
      )}
    </Reveal>
  )
}

function ExperienceLedger({ reducedMotion }) {
  const ledgerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ledgerRef,
    offset: ['start 0.85', 'end 0.15'],
  })
  const spineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  const timelineEntries = entries.filter((e) => e.kind !== 'founder')
  const founderEntry = entries.find((e) => e.kind === 'founder')

  return (
    <div className="exp__ledger" ref={ledgerRef}>
      <div className="exp__spine" aria-hidden="true">
        <div className="exp__spine-track" />
        {reducedMotion ? (
          <div className="exp__spine-fill exp__spine-fill--static" />
        ) : (
          <motion.div className="exp__spine-fill" style={{ scaleY: spineScale }} />
        )}
      </div>

      {founderEntry && (
        <Reveal className="exp__founder-wrap">
          <EntryCard entry={founderEntry} />
        </Reveal>
      )}

      <div className="exp__timeline">
        {timelineEntries.map((entry, i) => (
          <LedgerEntry
            key={entry.key}
            entry={entry}
            side={i % 2 === 0 ? 'left' : 'right'}
            delay={80 + i * 60}
          />
        ))}
      </div>
    </div>
  )
}

function ExperienceList() {
  return (
    <div className="exp__list">
      {entries.map((entry, i) => (
        <Reveal key={entry.key} delay={i * 40}>
          <div className="exp__list-item">
            <EntryCard entry={entry} />
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function Experience() {
  const reducedMotion = useReducedMotion()
  const ledgerEnabled = useDesktopLedger()

  return (
    <section className="exp" id="experience">
      <span className="exp__watermark" aria-hidden="true">
        EXP
      </span>
      <div className="exp__glow exp__glow--hot" aria-hidden="true" />
      <div className="exp__glow exp__glow--violet" aria-hidden="true" />

      <div className="exp__inner">
        <Reveal>
          <SectionHeader index="02 · Experience" title="Where I've shipped">
            Production systems at CareLife, a studio I founded, and client work with perfect reviews.
          </SectionHeader>
        </Reveal>

        {ledgerEnabled ? (
          <ExperienceLedger reducedMotion={reducedMotion} />
        ) : (
          <ExperienceList />
        )}

        <ClientTestimonials />
      </div>
    </section>
  )
}
