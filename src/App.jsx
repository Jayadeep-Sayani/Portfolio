import { useState } from 'react'
import { Hero } from './components/Hero.jsx'
import { Navbar } from './components/Navbar.jsx'
import { About } from './components/About.jsx'
import { Experience } from './components/Experience.jsx'
import { Projects } from './components/Projects.jsx'
import './index.css'

function App() {
  return (
    <div className='body'>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    </div>
  )
}

export default App
