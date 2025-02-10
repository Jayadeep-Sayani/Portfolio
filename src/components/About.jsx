import React from 'react'
import { useMediaQuery } from "@mui/material";

export const About = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <div className='about' id="about">
        <div className='text-container-about'>
          <h1>About Me</h1>
          <div class="line-with-diamond">
            <div class="diamond"></div>
          </div>
          <p>
            My name is Jay, and I'm a <span>Fullstack Developer</span> and a <span>UI/UX designer</span>. I am currently in Victoria, B.C, Canada and I've been passionate about Computer Science for the past five years, focusing primarily on web development and design. I recently started my undergraduate at University of Victoria with a degree in Computer Science and a minor in Statistics. My <span>passion for technology</span> has led me to build projects, meet people, and learn about the future. I'm <span>eager to learn</span> and grow as a developer and designer.
          </p>
          </div>
        <img className="portrait" src="/Portfolio/Portrait.jpg"></img>
    </div>
  )
}
