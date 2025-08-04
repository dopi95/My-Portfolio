import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const skillsData = [
    { name: 'HTML5', percent: 90 },
    { name: 'CSS3', percent: 70 },
    { name: 'JavaScript', percent: 70 },
    { name: 'React', percent: 75 },
    { name: 'TailwindCSS', percent: 90 },
    { name: 'PHP', percent: 70 },
    { name: 'Node', percent: 65 },
    { name: 'MySQL', percent: 70 },
    { name: 'MongoDB', percent: 70 },
    { name: 'PostgreSQL', percent: 65 },
    { name: 'Git & GitHub', percent: 90 },
  ];

  const Circle = ({ percent, name }) => {
    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (percent / 100) * circumference;

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#e2e8f0"
              strokeWidth="8"
              fill="none"
              className="dark:stroke-gray-700"
            />
            {/* Animated progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="#3b82f6"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              strokeDasharray={circumference}
              className="dark:stroke-blue-400"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {percent}%
            </span>
          </div>
        </div>
        <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          {name}
        </span>
      </div>
    );
  };

  return (
    <section id="skills" className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here is my skills to represent my Expertise
          </p>
        </div>

        {/* Technical Skills Section */}
        <div ref={ref} className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.5
                    }
                  }
                }}
              >
                <Circle percent={skill.percent} name={skill.name} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;