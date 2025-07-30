import React, { useState } from 'react';
import { FaArrowRight, FaGithub, FaTimes } from 'react-icons/fa';
import PImage from '../assets/img/elyas.png'; // Replace with real images

const projects = [
  {
    id: 1,
    title: "Ghion Homes Real Estate",
    description: "A real estate platform with listing, filtering, and responsive UI.",
    moreDescription:
      "This platform allows users to browse, filter, and view properties. It's mobile responsive and integrates backend filtering.",
    tech: ["React", "Tailwind", "Node.js"],
    image: PImage,
    extraImages: [PImage, PImage, PImage],
    liveDemo: "https://ghionhomessales.com",
    codeLink: "https://github.com/elyasyenealem/ghion-homes",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My portfolio website showcasing projects and skills.",
    moreDescription:
      "Built with React and TailwindCSS, it showcases my works, skills, and has a working contact form using EmailJS.",
    tech: ["React", "EmailJS", "Tailwind"],
    image: PImage,
    extraImages: [PImage, PImage, PImage],
    liveDemo: "https://elyasyenealem.netlify.app",
    codeLink: "https://github.com/elyasyenealem/portfolio",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">
        My <span className="blue-txt">Projects</span>
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
              onClick={() => openModal(project)}
              style={{ cursor: 'pointer' }}
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a
                  href={project.liveDemo}
                  className="live"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo <FaArrowRight />
                </a>
                <a
                  href={project.codeLink}
                  className="code"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="modal-images-container">
              <div className="modal-images-grid-custom">
                <div className="row">
                  {selectedProject.extraImages.slice(0, 2).map((img, idx) => (
                    <div className="modal-image-wrapper-blue" key={idx}>
                      <img src={img} alt={`Extra ${idx + 1}`} />
                    </div>
                  ))}
                </div>
                {selectedProject.extraImages[2] && (
                  <div className="row center-row">
                    <div className="modal-image-wrapper-blue">
                      <img src={selectedProject.extraImages[2]} alt="Extra 3" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <h3 className="modal-title">{selectedProject.title}</h3>
            <p className="modal-description">{selectedProject.moreDescription}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
