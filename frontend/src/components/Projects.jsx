import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaFilter } from "react-icons/fa";
import profile from "../assets/img/elyas.png";

const Projects = () => {
  // All available technologies for filtering
  const allTechs = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "TailwindCSS",
    "Node",
    "PHP",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ];

  // Sample projects data
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and user authentication.",
      image: profile,
      technologies: ["HTML5", "Node", "MongoDB","TailwindCSS"],
      githubLink: "https://github.com/example/ecommerce",
      liveDemo: "https://ecommerce-demo.example.com",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and user authentication.",
      image: profile,
      technologies: ["CSS3", "Node.js", "MongoDB", "Bootstrap"],
      githubLink: "https://github.com/example/ecommerce",
      liveDemo: "https://ecommerce-demo.example.com",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, and user authentication.",
      image: profile,
      technologies: ["React", "Node.js", "MongoDB", "Bootstrap"],
      githubLink: "https://github.com/example/ecommerce",
      liveDemo: "https://ecommerce-demo.example.com",
    },
    // ... other projects data
  ];

  const [selectedTechs, setSelectedTechs] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
          <div className="relative inline-block">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-all duration-200 ${
                isFilterOpen
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-blue-500 text-white hover:bg-blue-600 shadow-md"
              }`}
            >
              <FaFilter className="text-lg" />
              <span className="font-medium">Filter by Technology</span>
              {selectedTechs.length > 0 && (
                <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {selectedTechs.length}
                </span>
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
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400"
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
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-5 line-clamp-2">
                  {project.description}
                </p>

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
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-800 transition-colors duration-200"
                  >
                    <FaGithub className="text-lg" />
                    <span className="font-medium">View Code</span>
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span className="font-medium">Live Demo</span>
                  </a>
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