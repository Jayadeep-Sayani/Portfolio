import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className='navbar'>
      {isMobile ? (
        <div className='mobile-nav'>
          <button className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={44} /> : <Menu size={44} />}
          </button>
          {menuOpen && (
            <ul className='nav-links mobile-menu'>
              <li><a href='#home' onClick={handleLinkClick}>Home</a></li>
              <li><a href='#about' onClick={handleLinkClick}>About</a></li>
              <li><a href='#experience' onClick={handleLinkClick}>Experience</a></li>
              <li><a href='#projects' onClick={handleLinkClick}>Projects</a></li>
              <li><a href='#skills' onClick={handleLinkClick}>Skills</a></li>
              <li><a href='#contact' onClick={handleLinkClick}>Contact</a></li>
            </ul>
          )}
        </div>
      ) : (
        <ul className='nav-links'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      )}
    </div>
  );
};
