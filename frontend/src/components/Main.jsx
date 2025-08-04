// src/components/Main.jsx
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import mycv from '../assets/documents/my-resume.pdf'
import pp from '../assets/img/elyas.png'
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaEye,
  FaLaptopCode,
  FaTimes,
} from "react-icons/fa";

const Main = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10 px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          <span className=" bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">Hello, I'm</span> <span className="logo">Elyas Yenealem</span>
        </h1>

        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500 dark:text-blue-300">
          <Typewriter
            words={["Frontend Developer", "Backend Developer", "Full Stack Developer"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>

        <p className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg mb-6 leading-relaxed">
          Full Stack Developer passionate about building sleek, modern, and responsive web solutions.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-[26px] mb-6 text-blue-600 dark:text-blue-400">
          {[
            { href: "https://www.linkedin.com/in/elyas-yenealem-01572b359", icon: <FaLinkedin /> },
            { href: "https://github.com/dopi95/", icon: <FaGithub /> },
            { href: "https://t.me/elaras21/", icon: <FaTelegram /> },
            { href: "https://www.instagram.com/el_yas_21/", icon: <FaInstagram /> },
          ].map(({ href, icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              className="hover:text-blue-800 transition duration-300"
              aria-label="Social Icon"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() => setShowCV(true)}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            <FaEye />
            Preview CV
          </button>
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition duration-300"
          >
            <FaLaptopCode />
            View Projects
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex-1 flex justify-center mb-4 md:mb-0">
        <img
          src={pp}
          alt="Elyas"
          className="w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover shadow-xl border-4 border-blue-200"
        />
      </div>

      {/* CV Modal */}
      {showCV && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4">
          <div className="relative bg-white dark:bg-gray-900 p-4 rounded-lg max-w-3xl w-full h-[90vh] overflow-auto">
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-3 right-3 text-xl text-red-500 hover:text-red-700"
              aria-label="Close CV"
            >
              <FaTimes />
            </button>
            <object
              data={mycv}
              type="application/pdf"
              className="w-full h-full"
            >
              <p className="text-center text-sm mt-4">
                PDF preview is not supported on this device.{" "}
                <a
                  href={mycv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Click here to download/view the CV.
                </a>
              </p>
            </object>
          </div>
        </div>
      )}
    </section>
  );
};

export default Main;
