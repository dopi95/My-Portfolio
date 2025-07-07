import React from 'react';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import PImage from '../assets/elyas.png';

const projects = [
  {
    id: 1,
    title: "Ghion Homes Real Estate",
    description: "A real estate platform with listing, filtering, and responsive UI. A real estate platform with listing, filtering, and responsive UI. A real estate platform with listing, filtering, and responsive UI.",
    tech: ["React", "Tailwind", "Node.js"],
    image: PImage,
    liveDemo: "https://ghionhomessales.com",
    codeLink: "https://github.com/elyasyenealem/ghion-homes",
  },
  {
    id: 1,
    title: "Ghion Homes Real Estate",
    description: "A real estate platform with listing, filtering, and responsive UI. A real estate platform with listing, filtering, and responsive UI. A real estate platform with listing, filtering, and responsive UI.",
    tech: ["React", "Tailwind", "Node.js"],
    image: PImage,
    liveDemo: "https://ghionhomessales.com",
    codeLink: "https://github.com/elyasyenealem/ghion-homes",
  },
  {
    id: 1,
    title: "Ghion Homes Real Estate",
    description: "A real estate platform with listing, filtering, and responsive UI. A real estate platform with listing, filtering, and responsive UI. A real estate platform with listing, filtering, and responsive UI.",
    tech: ["React", "Tailwind", "Node.js"],
    image: PImage,
    liveDemo: "https://ghionhomessales.com",
    codeLink: "https://github.com/elyasyenealem/ghion-homes",
  },
  
  {
    id: 2,
    title: "Portfolio Website",
    description: "My portfolio website showcasing projects and skills.",
    tech: ["React", "EmailJS", "Tailwind"],
    image: PImage,
    liveDemo: "https://elyasyenealem.netlify.app",
    codeLink: "https://github.com/elyasyenealem/portfolio",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My <span className="blue-txt">Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.liveDemo} className="live" target="_blank" rel="noreferrer">
                  Live Demo <FaArrowRight />
                </a>
                <a href={project.codeLink} className="code" target="_blank" rel="noreferrer">
                  View Code <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
