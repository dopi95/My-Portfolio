import React, { useState, useEffect } from 'react';

function Header() {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

 

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  // Scroll event to toggle background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="left-section">
        <div className="logo">Elyas</div>
      </div>

      <div className="right-section">
       
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      

      <div className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>
    </header>
  );
}

export default Header;
