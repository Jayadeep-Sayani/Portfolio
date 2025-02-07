import React from 'react'

export const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-container-masked">
        <div class="area" >
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <h1>Hello, I'm <span>Jay!</span></h1>
        <div className="shappeal">Fullstack Developer <span>•</span> UI/UX Designer <span>•</span> Your Friendly Tech Guy</div>
        <button className="hero-button">Download Resume</button>
      </div>
    </div>
    
  )
}

