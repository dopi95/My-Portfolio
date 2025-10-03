import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaUsers } from "react-icons/fa";

const Education = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      }
    }
  };

  const educationVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    }
  };

  const experienceVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Education Section */}
        <motion.div 
          className="flex-1"
          variants={educationVariants}
        >
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-blue-500 mr-3 text-2xl" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <motion.div 
            className="relative p-6 rounded-lg border-l-4 border-l-blue-500 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
            variants={containerVariants}
          >
            <div className="space-y-8">
              {/* Computer Science Degree */}
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-6 py-2">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
                  <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">Unity University</h4>
                  <p className="text-gray-600 dark:text-gray-400">2022 - January 2026</p>
                  <p className="italic mb-3">Currently 5th Year Student</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Specializing in Software Engineering and Web Development. Completed multiple university projects and gaining hands-on experience with modern technologies.
                  </p>
                </div>
              </motion.div>

              {/* BAIS Degree */}
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-6 py-2">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
                  <h3 className="text-xl font-semibold">Bachelor of Arts in BAIS (Business Administration and Information Systems)</h3>
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">Addis Ababa University</h4>
                  <p className="text-gray-600 dark:text-gray-400">2022 - January 2026</p>
                  <p className="italic mb-3">Currently 5th Year Student</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Studying the intersection of business and technology, with coursework in management, information systems, and data analysis.
                  </p>
                </div>
              </motion.div>

              {/* Bootcamp */}
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-6 py-2">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
                  <div className="flex items-center mb-1">
                    <h3 className="text-xl font-semibold">Full Stack Web Development Bootcamp (MERN Stack)</h3>
                  </div>
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">DirectEd Bootcamp</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Intensive program covering MongoDB, Express.js, React, and Node.js. Working on team projects and building full-stack applications.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div 
          className="flex-1"
          variants={experienceVariants}
        >
          <div className="flex items-center mb-6">
            <FaBriefcase className="text-blue-500 mr-3 text-2xl" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>

          <motion.div 
            className="relative p-6 rounded-lg border-l-4 border-l-blue-500 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
            variants={containerVariants}
          >
            <div className="space-y-6">
              {/* BiruhKids Project */}
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-6 py-2">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
                  <h3 className="text-xl font-semibold">Full Stack Developer - BiruhKids Pediatric Clinic</h3>
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">Freelance Team Project</h4>
                  <p className="italic mb-3">Backend, UI/UX & Frontend Developer</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed a comprehensive digital healthcare platform for BiruhKids Pediatric Clinic in Addis Ababa. Handled backend development, UI/UX design, and frontend implementation using React, Node.js, Express, and MongoDB.
                  </p>
                </div>
              </motion.div>

              {/* School Management Project */}
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-6 py-2">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
                  <h3 className="text-xl font-semibold">Full Stack Developer - Bluelight Academy SMS</h3>
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">Solo Freelance Project</h4>
                  <p className="italic mb-3">Complete Development (Solo)</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Built a comprehensive school management system for Bluelight Academy independently. Handled all aspects including UI/UX design, frontend development, backend architecture, and database design using React, Node.js, Express, and MongoDB.
                  </p>
                </div>
              </motion.div>

              {/* Real Estate Project */}
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-6 py-2">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
                  <h3 className="text-xl font-semibold">Real Estate Website Developer</h3>
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">Freelance Team Project</h4>
                  <p className="italic mb-3">Team Project</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed a website for a real estate sales agent as part of a team. Contributed to UI/UX design, frontend development, and backend implementation.
                  </p>
                </div>
              </motion.div>

              {/* University & Bootcamp Projects */}
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-6 py-2">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
                  <div className="flex items-center mb-1">
                    <h3 className="text-xl font-semibold">University & Bootcamp Projects</h3>
                  </div>
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">Academic & Training Projects</h4>
                  <p className="italic mb-3">Ongoing</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Completed various university projects and bootcamp assignments. Collaborated with teams on full-stack applications using MERN stack technologies.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;