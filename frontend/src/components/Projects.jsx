import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaFilter, FaChevronDown, FaChevronUp } from "react-icons/fa";
import profile from "../assets/img/elyas.png";
import portfolio from "../assets/img/portfolio.png";
import ar from "../assets/img/ar.png";
import ghion from "../assets/img/ghion.png";
import biruhkids from "../assets/img/biruhkids.png";
import sms from "../assets/img/sms.png";

const Projects = () => {
  // All available technologies for filtering
  const allTechs = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "TailwindCSS",
    "Node",
    "PHP",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Express",
    "Python"
  ];

  // Sample projects data
  const projectsData = [
    {
      id: 1,
      title: "BiruhKids Pediatric Clinic",
      description: "A freelance team project creating a comprehensive digital healthcare platform for BiruhKids Pediatric Clinic in Addis Ababa, featuring online appointment booking, AI-powered chatbot, multi-role authentication, and bilingual support for pediatric care.",
      image: biruhkids,
      technologies: ["React", "Node", "Express", "MongoDB", "Javascript", "TailwindCSS"],
      githubLink: "https://github.com/dopi95/BiruhKids-Pediatric-Speciality.git",
      liveDemo: "https://biruhkidsclinic.com",
    },
    {
      id: 2,
      title: "Ghion Homes Sales",
      description: "A professional freelance project completed in a team, creating a sleek real estate website to showcase listings and simplify client interactions for a Ghion Homes sales representative.",
      image: ghion,
      technologies: ["HTML", "CSS", "Javascript", "Node", "Express", "PostgreSQL"],
      githubLink: "https://github.com/dopi95/Ghion-Homes-Sales.git",
      liveDemo: "https://ghionhomessales.com/",
    },
    {
      id: 3,
      title: "Artisan Blend",
      description: "A collaborative bootcamp project to build a dynamic and interactive web application for a fictional high-end restaurant called Artisan Blend. It features an immersive frontend experience alongside an AI-powered backend chatbot.",
      image: ar,
      technologies: ["React", "Vite","TailwindCSS", "Python"],
      githubLink: "https://github.com/dopi95/ArtisanBlend-Restaurant-App.git",
      liveDemo: "https://artisan-blend.netlify.app/",
    },
    {
      id: 4,
      title: "Bluelight Academy SMS",
      description: "A comprehensive full-stack school management system built for Bluelight Academy in Addis Ababa. Features complete administrative control over students, employees, payments, and system management with advanced role-based access control.",
      image: sms,
      technologies: ["React", "Node", "Express", "MongoDB", "Javascript", "TailwindCSS"],
      githubLink: "https://github.com/dopi95/School-Management-System.git",
      liveDemo: "",
    },
    {
      id: 5,
      title: "Personal Portfolio",
      description: "A modern portfolio showcasing my journey in web development highlighting projects, skills, and creativity shaped by a passion for building meaningful digital experiences.",
      image: portfolio,
      technologies: ["React", "Vite", "TailwindCSS","Node","Express"],
      githubLink: "https://github.com/dopi95/My-Portfolio.git",
      liveDemo: "",
    },
  ];

  const [selectedTechs, setSelectedTechs] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  // Handle click outside to close filter
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTech = (tech) => {
    if (selectedTechs.includes(tech)) {
      setSelectedTechs(selectedTechs.filter((t) => t !== tech));
    } else {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const filteredProjects = selectedTechs.length === 0
    ? projectsData
    : projectsData.filter((project) =>
        selectedTechs.some((tech) => project.technologies.includes(tech))
      );

  return (
    <section id="projects" className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Here are some of my featured projects showcasing my skills and capabilities
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-10 flex justify-center">
          <div className="relative inline-block" ref={filterRef}>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-all duration-200 ${
                isFilterOpen
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-blue-500 text-white hover:bg-blue-600 shadow-md"
              }`}
            >
              <span className="font-medium">Filter by Tech Stacks</span>
              {selectedTechs.length > 0 && (
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {selectedTechs.length}
                </span>
              )}
              {isFilterOpen ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
              )}
            </button>

            {isFilterOpen && (
              <div className="absolute left-0 mt-3 w-full min-w-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 border border-gray-200 dark:border-gray-700 z-10 transform transition-all duration-200 origin-top">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {allTechs.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => toggleTech(tech)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedTechs.includes(tech)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
                {selectedTechs.length > 0 && (
                  <button
                    onClick={() => setSelectedTechs([])}
                    className="mt-4 text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 text-sm font-medium"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 flex flex-col h-full"
            >
              {/* Project Image with Always-Visible Title */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-5">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                        selectedTechs.includes(tech)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200`}
                    >
                      <FaGithub className="text-lg" />
                      <span className="font-medium">View Code</span>
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 ${
                        !project.githubLink ? "w-full" : ""
                      }`}
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span className="font-medium">Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              No projects match your selected filters.
            </p>
            <button
              onClick={() => setSelectedTechs([])}
              className="px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;