import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'

/* Different shot from the hero — avoids repeating about_me_pic */
const PHOTO = '/Portfolio/Portrait.jpg'

export function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <Reveal>
          <SectionHeader index="04 · About" title="A bit about me">
            Who I am outside the project list.
          </SectionHeader>
        </Reveal>

        <Reveal delay={80}>
          <div className="about__stage">
            <span className="about__stage-index" aria-hidden="true">01</span>
            <div className="about__mesh" aria-hidden="true" />

            <div className="about__composition">
              <div className="about__visual">
                <div className="about__visual-offset" aria-hidden="true" />
                <div className="about__visual-frame">
                  <img
                    src={PHOTO}
                    alt="Jayadeep Sayani"
                    loading="lazy"
                    width={520}
                    height={640}
                  />
                </div>
              </div>

              <div className="about__panel">
                <div className="about__panel-bar" aria-hidden="true" />
                <p className="about__lead">
                  I care about work that's{' '}
                  <span className="about__accent">solid under the hood</span> and{' '}
                  <span className="about__accent">polished on the surface</span>.
                </p>
                <div className="about__body">
                  <p>
                    I'm Jayadeep. Most days I'm bouncing between a code editor and
                    Figma, trying to make something that works cleanly and looks
                    like someone actually thought about it.
                  </p>
                  <p>
                    I'm into graphics, interactive systems, and problems where the
                    math shows up in the final product. Hackathons are where I test
                    how fast I can turn an idea into something real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
