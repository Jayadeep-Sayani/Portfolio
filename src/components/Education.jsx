import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

const highlights = [
  { value: '3.7', label: 'GPA' },
  { value: 'Honors', label: 'Math invite' },
  { value: 'Scholarships', label: 'Entrance awards' },
]

const csCourses = [
  'Programming I & II',
  'Data Structures & Algorithms I',
  'Intro to Computer Architecture I',
  'Software Development Intro',
  'Computer Graphics',
  'Software Testing',
]

const mathCourses = [
  'Calculus I–IV',
  'Logic & Foundations',
  'Matrix Algebra',
  'Statistics I',
  'Combinatorics',
  'Abstract Algebra',
]

const MATH_COURSE_COUNT = 9

const engRoles = [
  {
    title: 'Director of IT',
    detail: 'Leading a rebuild of the Engineering Society website.',
  },
  {
    title: 'Director of Outreach',
    detail:
      'Visited a local school to introduce students to engineering and computer science.',
  },
  {
    title: 'VP Corporate',
    detail:
      'Hosted a UVic-wide engineering competition across 8 categories and a networking week.',
  },
  {
    title: 'Clubs Coordinator',
    detail: 'Helped allocate funding across student clubs.',
  },
]

const gameDevActivities = [
  'Programming games on club projects',
  'Learning to create art and music for games',
  'Playtesting and giving feedback on members\' builds',
]

export function Education() {
  return (
    <section className="edu" id="education">
      <div className="edu__inner">
        <Reveal>
          <SectionHeader index="02 · Education" title="University of Victoria">
            3rd year Computer Science, 2nd year Mathematics.
          </SectionHeader>
        </Reveal>

        <Reveal delay={60}>
          <div className="edu__highlights">
            {highlights.map((h) => (
              <div key={h.label} className="edu__highlight">
                <span className="edu__highlight-value">{h.value}</span>
                <span className="edu__highlight-label">{h.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="edu__tracks">
          <Reveal delay={100} className="edu__track-wrap">
            <div className="edu__track edu__track--cs">
              <div className="edu__track-head">
                <span className="edu__track-code">CSC</span>
                <span className="edu__track-year">Year 3</span>
              </div>
              <h3 className="edu__track-title">Computer Science</h3>
              <ul className="edu__course-list">
                {csCourses.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={140} className="edu__track-wrap">
            <div className="edu__track edu__track--math">
              <div className="edu__track-head">
                <span className="edu__track-code">MATH</span>
                <span className="edu__track-year">Year 2</span>
              </div>
              <h3 className="edu__track-title">Mathematics</h3>
              <ul className="edu__course-list">
                {mathCourses.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="edu__excellence">
            <div className="edu__excellence-ring" aria-hidden="true">
              <span className="edu__excellence-score">
                {MATH_COURSE_COUNT}/{MATH_COURSE_COUNT}
              </span>
            </div>
            <div className="edu__excellence-copy">
              <p className="edu__excellence-title">Excellence certificates</p>
              <p className="edu__excellence-desc">
                Awarded in every Mathematics course completed so far.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="edu__involve">
            <p className="edu__involve-label">Campus involvement</p>

            <article className="edu__org edu__org--eng">
              <header className="edu__org-head">
                <span className="edu__org-code">ENG</span>
                <div>
                  <h3 className="edu__org-name">UVic Engineering Society</h3>
                  <p className="edu__org-sub">Leadership · 4 roles</p>
                </div>
              </header>
              <ul className="edu__roles">
                {engRoles.map((role) => (
                  <li key={role.title} className="edu__role">
                    <span className="edu__role-title">{role.title}</span>
                    <span className="edu__role-detail">{role.detail}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="edu__org edu__org--gamedev">
              <header className="edu__org-head">
                <span className="edu__org-code">GD</span>
                <div>
                  <h3 className="edu__org-name">Game Dev Club</h3>
                  <p className="edu__org-sub">Member</p>
                </div>
              </header>
              <ul className="edu__activity-grid">
                {gameDevActivities.map((item) => (
                  <li key={item} className="edu__activity-item">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
