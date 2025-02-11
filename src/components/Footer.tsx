import React from 'react'

export const Footer = () => {
  return (
    <div className="footer" id="contact">
        <p>&copy; 2025 <span>Jayadeep Sayani</span>. All rights reserved.</p>
        <div className="social-media">
            <a href="https://github.com/jayadeep-sayani" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/jayadeep-sayani/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:jayadeeps1101@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
            <a href="tel:+2508809270" target="_blank" rel="noopener noreferrer"><i className="fas fa-phone"></i></a>
        </div>
    </div>
  )
}
