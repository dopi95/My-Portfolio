import React from 'react';
import profileImage from '../assets/elyas.png'; 

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Elyas Yenealem" />
        </div>
        <div className="about-content">
          <h2>About <span className="blue-txt">Me</span></h2>
          <p>
            Hi 👋! My name is <strong>Elyas Yenealem</strong>. I'm a <strong>Full-Stack Developer</strong> based in Ethiopia, specializing in building scalable, user-friendly, and high-performance web applications.
          </p>
          <p>
            I thrive in the <strong>MERN Stack (MongoDB, Express.js, React, Node.js)</strong> and love transforming ideas into real-world solutions. My approach is rooted in clean, maintainable code and intuitive UI/UX design.
          </p>
          <p>
            With over <strong>1+ years of experience</strong> and <strong>4 successful projects</strong>, I’ve developed a passion for crafting digital experiences that deliver both performance and beauty.
          </p>
          <blockquote>
            “Code with purpose ⚡️ Build with passion ❤️ Innovate for impact 🚀”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default About;
