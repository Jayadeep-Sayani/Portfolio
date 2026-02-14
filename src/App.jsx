import { useState } from 'react'
import { Hero } from './components/Hero.jsx'
import { Navbar } from './components/Navbar.jsx'
import { About } from './components/About.jsx'
import { Experience } from './components/Experience.jsx'
import { Education } from './components/Education.jsx'
import { Projects } from './components/Projects.jsx'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer.jsx'
import { InteractiveCursor } from './components/InteractiveCursor.jsx'
import './index.css'

function App() {
  return (
    <div className='body'>
      <InteractiveCursor />
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Experience />
    <Projects />
    <Skills />
    <Footer />
    </div>
  )
}

export default App
