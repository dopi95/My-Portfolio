import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaArrowUp, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <h2 className="footer-title">Get In Touch</h2>

      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
      </div>

      <p className="footer-copy">© 2025 | All Rights Reserved.</p>

      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
