import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { Menu, X, Download, Mail } from 'lucide-react';

export const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <div className='navbar'>
      {isMobile ? (
        <div className='mobile-nav'>
          <button className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={44} /> : <Menu size={44} />}
          </button>
          {menuOpen && (
            <ul className='nav-links mobile-menu'>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    onClick={handleLinkClick}
                    className={activeSection === item.id ? 'active' : ''}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="navbar-cta-mobile">
                <a href="/Portfolio/resume.pdf" download="Jayadeep_Sayani_Resume.pdf" className="navbar-cta-button" onClick={handleLinkClick}>
                  <Download size={16} />
                  Resume
                </a>
              </li>
              <li className="navbar-cta-mobile">
                <a href="mailto:jayadeeps1101@gmail.com" className="navbar-cta-button" onClick={handleLinkClick}>
                  <Mail size={16} />
                  Contact
                </a>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <>
          <ul className='nav-links'>
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar-ctas">
            <a href="/Portfolio/resume.pdf" download="Jayadeep_Sayani_Resume.pdf" className="navbar-cta-button">
              <Download size={14} />
              Resume
            </a>
            <a href="mailto:jayadeeps1101@gmail.com" className="navbar-cta-button">
              <Mail size={14} />
              Contact
            </a>
          </div>
        </>
      )}
    </div>
  );
};
