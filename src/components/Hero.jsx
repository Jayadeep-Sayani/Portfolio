import React from 'react'
import { useMediaQuery } from "@mui/material";

export const Hero = () => {
  const roleQuery = useMediaQuery("(max-width:1350px)");

  return (
    <div className="hero-container" id="home">
      <div className="hero-container-masked">
          <div className="area">
            <ul className="circles">
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
        <h1>{useMediaQuery("(min-width:950px)") && "Hello, "}I'm <span>Jay!</span></h1>
        {!roleQuery && <div className="shappeal">Fullstack Developer <span>•</span> UI/UX Designer <span>•</span> Your Friendly Tech Guy</div>}
        {roleQuery && 
          <ul className="shappeal">
            <li>Fullstack Developer</li>
            <li>UI/UX Designer</li>
            <li>Your Friendly Tech</li>
          </ul>
        }
        <button className="hero-button">Download Resume</button>
      </div>
    </div>
    
  )
}

