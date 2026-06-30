import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Education } from './components/Education.jsx'
import { Experience } from './components/Experience.jsx'
import { Projects } from './components/Projects.jsx'
import { Skills } from './components/Skills.jsx'
import { Contact } from './components/Contact.jsx'
import './index.css'

function App() {
  return (
    <>
      <div className="mesh-bg" aria-hidden="true">
        <div className="mesh-bg__orb mesh-bg__orb--hot" />
        <div className="mesh-bg__orb mesh-bg__orb--violet" />
        <div className="mesh-bg__orb mesh-bg__orb--electric" />
      </div>
      <div className="grain" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Jayadeep Sayani · Victoria, BC</p>
      </footer>
    </>
  )
}

export default App
