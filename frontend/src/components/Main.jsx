import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram, FaDownload} from 'react-icons/fa';
import profileImage from '../assets/img/elyas.png'; 
import resume from '../assets/documents/my-resume.pdf'; 


function Main() {
  
  return (
    
    <main className="hero" id="home">
      <div className="hero-left">
        <h1 className="hero-title">Elyas Yenealem</h1>
        <p className="hero-subtitle">I'm a <strong class="blue-txt">Full Stack Developer</strong></p>

        <div className="social-icons hero-icons">
          <a href="https://www.linkedin.com/in/elyas-yenealem-01572b359" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/dopi95/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/el_yas_21/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://t.me/elaras21/" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
        </div>

        <div class="contact-details">
         <div>📍 Addis Ababa, Ethiopia</div>
         <div>📞 +251978210810</div>
         <div>📧 elyasyenealem@gmail.com</div>
       </div>


       <a href="/resume.pdf" download className="download-btn">
       <FaDownload style={{ marginRight: '8px' }} />
       Download Resume
      </a>

      </div>

      <div className="hero-right">
        <img src={profileImage} alt="Elyas Yenealem" className="profile-img" />
      </div>
    </main>
  );
}

export default Main;
