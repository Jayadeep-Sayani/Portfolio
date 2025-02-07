import { useState } from 'react'
import { Hero } from './components/Hero.jsx'
import { Navbar } from './components/Navbar.jsx'
import { About } from './components/About.jsx'
import { Experience } from './components/Experience.jsx'
import './index.css'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    </>
  )
}

export default App
