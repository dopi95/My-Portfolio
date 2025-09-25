import React from "react";
import { FaLaptopCode, FaServer, FaDatabase, FaCodeBranch } from "react-icons/fa";

const Expertise = () => {
  const expertiseAreas = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks and libraries.",
      icon: <FaLaptopCode className="text-blue-500 text-4xl" />
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs with various technologies and frameworks.",
      icon: <FaServer className="text-blue-500 text-4xl" />
    },
    {
      title: "Database Design",
      description: "Designing and implementing efficient database schemas for optimal data management.",
      icon: <FaDatabase className="text-blue-500 text-4xl" />
    },
    {
      title: "Full Stack Integration",
      description: "Seamlessly connecting frontend and backend systems for complete application solutions.",
      icon: <FaCodeBranch className="text-blue-500 text-4xl" />
    }
  ];

  return (
    <section id="expertise" className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Areas of Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My specialized skills and professional capabilities
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-gray-700 flex items-center justify-center mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;