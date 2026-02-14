import React from 'react'
import { useMediaQuery } from "@mui/material";
import { Code, Palette, Lightbulb } from "lucide-react";

export const About = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  
  return (
    <div className='about' id="about">
      <div className='about-content-wrapper'>
        <div className='text-container-about'>
          <h1>About Me</h1>
          <div className="line-with-diamond">
            <div className="diamond"></div>
          </div>
          <div className="about-text-content">
            <p>
              My name is Jay, and I'm a <span>Fullstack Developer</span> and <span>UI/UX Designer</span> based in Victoria, BC, Canada.
            </p>
            <p>
              I've been passionate about <span>Computer Science</span> for the past five years, focusing primarily on web development and design. Currently pursuing my undergraduate degree at the University of Victoria in Computer Science with a <span>Graphics and Gaming</span> option, along with a major in <span>Mathematics</span> with a <span>Graph Theory</span> option.
            </p>
            <p>
              My passion for technology has led me to build innovative projects, collaborate with amazing people, and continuously learn about emerging technologies. I'm eager to learn and grow as both a developer and designer, always seeking new challenges and opportunities to create meaningful solutions.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="about-highlight-item">
              <Code size={20} />
              <span>Fullstack Development</span>
            </div>
            <div className="about-highlight-item">
              <Palette size={20} />
              <span>UI/UX Design</span>
            </div>
            <div className="about-highlight-item">
              <Lightbulb size={20} />
              <span>Problem Solving</span>
            </div>
          </div>
        </div>
        <div className="about-image-wrapper">
          <img className="portrait" src="/Portfolio/about_me_pic.png" alt="Jayadeep Sayani" />
        </div>
      </div>
    </div>
  )
}
