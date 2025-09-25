import React from "react";
import { FaDownload } from "react-icons/fa";
import profile from '../assets/img/elyas.png';
import mycv from "../assets/documents/Elyas_Yenealem_Resume.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-12 px-4 md:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Centered Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={profile}
              alt="Elyas Yenealem"
              className="w-72 rounded-xl border-4 border-blue-200 shadow-lg object-cover h-96"
              style={{ maxHeight: "480px" }}
            />
          </div>

          {/* Right Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-center md:text-left">
              👋 Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">Elyas</span>
            </h2>

            <div className="flex flex-col flex-grow justify-between">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I'm a{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    full-stack developer
                  </span>{" "}
                  based in Ethiopia. I build web and mobile applications that solve
                  real-world problems using tools like{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    JavaScript
                  </span>
                  ,{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    PHP
                  </span>
                  ,{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    MySQL
                  </span>
                  , and modern frontend frameworks like{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    React
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    Tailwind CSS
                  </span>
                  .
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I got into coding during university after discovering how
                  impactful technology can be in shaping everyday lives. I love
                  transforming ideas into clean, responsive, and user-friendly
                  digital solutions.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  As part of my final year, I worked with a team of five to develop
                  the{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    Vehicle Insurance Management System
                  </span>{" "}
                  — a platform that helps customers manage policies, file claims,
                  and report accidents with ease.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I'm currently open to{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    freelance projects
                  </span>{" "}
                  or{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    full-time roles
                  </span>{" "}
                  where I can grow and contribute with purpose. Feel free to
                  explore my work or reach out — I'm always ready for a meaningful
                  challenge!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote and Download Button */}
        <div className="max-w-7xl mx-auto mt-10 text-center center">
          <blockquote className="text-blue-600 dark:text-blue-400 font-semibold italic text-lg mb-6">
            "Building code, shaping futures."
          </blockquote>

          <a
            href={mycv}
            download="Elyas_Yenealem_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition duration-300"
          >
            <FaDownload />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;