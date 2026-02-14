import React from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; 2025 <span>Jayadeep Sayani</span>. All rights reserved.</p>
        </div>
        <div className="social-media">
          <a 
            href="https://github.com/jayadeep-sayani" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/jayadeep-sayani/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:jayadeeps1101@gmail.com" 
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a 
            href="tel:+2508809270" 
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
