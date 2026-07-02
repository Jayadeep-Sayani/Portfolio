import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

const CORE_STACK = new Set([
  'React',
  'TypeScript',
  'Python',
  'JavaScript',
  'Node.js',
  'Git',
])

const groups = [
  {
    index: '01',
    code: 'FE',
    title: 'Frontend',
    blurb: 'Interfaces, components, and polish in the browser.',
    accent: 'hot',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Tailwind'],
  },
  {
    index: '02',
    code: 'BE',
    title: 'Backend & systems',
    blurb: 'APIs, data, and logic from scripts to shipped services.',
    accent: 'electric',
    skills: ['Java', 'Python', 'Node.js', 'C', 'SQL', 'REST APIs', 'Firebase', 'Bash', 'Godot'],
  },
  {
    index: '03',
    code: 'TL',
    title: 'Tools & design',
    blurb: 'Editor to deploy, plus maps, vision, and UI design.',
    accent: 'violet',
    skills: ['VS Code', 'Git', 'Docker', 'Linux', 'Figma', 'OpenCV', 'MapLibre'],
  },
]

function sortCoreFirst(skills) {
  return [...skills].sort((a, b) => {
    const aCore = CORE_STACK.has(a)
    const bCore = CORE_STACK.has(b)
    if (aCore === bCore) return 0
    return aCore ? -1 : 1
  })
}

export function Skills() {
  return (
    <section className="skills" id="skills">
      <span className="skills__watermark" aria-hidden="true">
        SKILLS
      </span>
      <div className="skills__grid-lines" aria-hidden="true" />
      <div className="skills__glow skills__glow--violet" aria-hidden="true" />

      <div className="skills__inner">
        <Reveal>
          <SectionHeader index="03 · Skills" title="Toolkit">
            Languages and tools I reach for most often.
          </SectionHeader>
        </Reveal>

        <Reveal delay={50}>
          <p className="skills__legend">
            <span className="skills__legend-sample" aria-hidden="true" />
            Gradient border = core stack
          </p>
        </Reveal>

        <div className="skills__lanes">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={80 + i * 60}>
              <article className={`skills__lane skills__lane--${group.accent}`}>
                <div className="skills__lane-meta">
                  <span className="skills__lane-index">{group.index}</span>
                  <span className="skills__lane-code">{group.code}</span>
                  <h3 className="skills__lane-title">{group.title}</h3>
                  <p className="skills__lane-blurb">{group.blurb}</p>
                  <span className="skills__lane-count">{group.skills.length} tools</span>
                </div>

                <ul className="skills__lane-skills" aria-label={group.title}>
                  {sortCoreFirst(group.skills).map((skill, j) => {
                    const isCore = CORE_STACK.has(skill)

                    return (
                      <li
                        key={skill}
                        className={`skills__skill${isCore ? ' skills__skill--core' : ''}`}
                        title={isCore ? 'Core stack' : undefined}
                      >
                        <span className="skills__skill-num">
                          {String(j + 1).padStart(2, '0')}
                        </span>
                        <span className="skills__skill-name">{skill}</span>
                      </li>
                    )
                  })}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
