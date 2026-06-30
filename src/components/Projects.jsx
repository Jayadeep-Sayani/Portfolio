import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

const projects = [
  {
    id: 'nostutta',
    index: '01',
    image: '/Portfolio/NoStutta.jpg',
    alt: 'NoStutta app interface',
    title: 'NoStutta',
    meta: 'TELUS AI Hackathon',
    description:
      'Practice speaking in a judgment-free space. Real-time cues from Whisper and Gemini for people who stutter.',
    tech: ['Python', 'Flask', 'Gemini', 'Whisper'],
    link: 'https://github.com/CodingUser14/Stutter_Support',
    featured: true,
    accent: 'hot',
    podium: { place: '3rd', event: 'TELUS AI' },
  },
  {
    id: 'studybuddies',
    index: '02',
    image: '/Portfolio/studybuddies.png',
    alt: 'StudyBuddies app',
    title: 'StudyBuddies',
    meta: 'VikeLabs Buildathon',
    description:
      'AI quiz app for elementary students with coins and virtual pets.',
    tech: ['React', 'OpenAI', 'Node.js'],
    link: 'https://github.com/PABLO-HACKERS/studybuddies',
    accent: 'violet',
    podium: { place: '2nd', event: 'VikeLabs' },
  },
  {
    id: 'absolute-safety',
    index: '03',
    image: '/Portfolio/AbsoluteSafety.PNG',
    alt: 'Absolute Safety map interface',
    title: 'Absolute Safety',
    meta: 'Navigation · Course project',
    description:
      'Routes through safer streets using custom Dijkstra weights on city graph data.',
    tech: ['React', 'Python', 'MapLibre'],
    link: 'https://www.youtube.com/watch?v=eUmAh5nbjgM',
    accent: 'electric',
  },
  {
    id: 'ai-interview',
    index: '04',
    image: '/Portfolio/AI Interview Coach.PNG',
    alt: 'AI Interview Coach',
    title: 'AI Interview Coach',
    meta: 'uOttaHack',
    description:
      'Mock interviews with voice AI, body language tracking, and spoken feedback.',
    tech: ['Python', 'Gemini', 'OpenCV'],
    link: 'https://lnkd.in/gKPq5rFk',
    accent: 'hot',
  },
  {
    id: 'scholarlog',
    index: '05',
    image: '/Portfolio/ScholarLog.PNG',
    alt: 'ScholarLog GPA tracker',
    title: 'ScholarLog',
    meta: '300+ active students',
    description:
      'GPA tracker used by hundreds of students at UVic and beyond.',
    tech: ['React', 'TypeScript', 'Node.js'],
    link: 'https://github.com/Jayadeep-Sayani',
    accent: 'lime',
  },
]

const podiumFinishes = projects.filter((p) => p.podium?.place === '2nd' || p.podium?.place === '3rd')

function PodiumBadge({ podium, large = false }) {
  const medal = podium.place === '2nd' ? '🥈' : podium.place === '3rd' ? '🥉' : null

  return (
    <div className={`work__podium-badge${large ? ' work__podium-badge--lg' : ''}${podium.hackathon ? ' work__podium-badge--hackathon' : ''}`}>
      {medal && <span className="work__podium-medal" aria-hidden="true">{medal}</span>}
      <span className="work__podium-place">{podium.place}</span>
      <span className="work__podium-event">{podium.event}</span>
    </div>
  )
}

function ProjectTile({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className={`work__tile${project.featured ? ' work__tile--featured' : ''} work__tile--${project.accent}`}
    >
      <div className="work__tile-border" aria-hidden="true" />
      <div className="work__tile-media">
        <img
          src={project.image}
          alt={project.alt}
          loading={project.featured ? 'eager' : 'lazy'}
        />
        <div className="work__tile-scrim" aria-hidden="true" />
      </div>

      {project.podium && (
        <PodiumBadge podium={project.podium} large={project.featured} />
      )}

      <div className="work__tile-content">
        <div className="work__tile-top">
          <span className="work__tile-index">{project.index}</span>
          <span className="work__tile-meta">{project.meta}</span>
        </div>

        <h3 className="work__tile-title">
          {project.title}
          <span className="work__tile-ext" aria-hidden="true">↗</span>
        </h3>

        <p className="work__tile-desc">{project.description}</p>

        <ul className="work__tile-tech" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <span className="work__tile-cta">
          Open project <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  )
}

export function Projects() {
  const featured = projects.find((p) => p.featured)
  const mosaic = projects.filter((p) => !p.featured)

  return (
    <section className="work" id="projects">
      <span className="work__watermark" aria-hidden="true">WORK</span>
      <div className="work__grid-lines" aria-hidden="true" />

      <div className="work__inner">
        <Reveal>
          <SectionHeader index="04 · Work" title="Selected projects">
            Hackathon builds and tools people actually use.
          </SectionHeader>
        </Reveal>

        <Reveal delay={60}>
          <div className="work__podiums" role="list" aria-label="Hackathon podium finishes">
            {podiumFinishes.map((p) => (
              <div key={p.id} className="work__podiums-card" role="listitem">
                <span className="work__podiums-medal" aria-hidden="true">
                  {p.podium.place === '2nd' ? '🥈' : '🥉'}
                </span>
                <div>
                  <p className="work__podiums-place">{p.podium.place} Place</p>
                  <p className="work__podiums-event">{p.podium.event}</p>
                  <p className="work__podiums-project">{p.title}</p>
                </div>
              </div>
            ))}
            <div className="work__podiums-card work__podiums-card--stat" role="listitem">
              <span className="work__podiums-stat">3+</span>
              <div>
                <p className="work__podiums-place">Hackathons</p>
                <p className="work__podiums-event">shipped under pressure</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ProjectTile project={featured} />
        </Reveal>

        <p className="work__mosaic-hint" aria-hidden="true">
          <span>Swipe for more</span>
          <span className="work__mosaic-hint-arrow">→</span>
        </p>

        <div className="work__mosaic">
          {mosaic.map((project, i) => (
            <Reveal key={project.id} delay={140 + i * 50} className="work__mosaic-cell">
              <ProjectTile project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
