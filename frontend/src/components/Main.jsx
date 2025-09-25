// src/components/Main.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import mycv from '../assets/documents/Elyas_Yenealem_Resume.pdf';
import pp from '../assets/img/elyas.png';
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaEye,
  FaLaptopCode,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

const Main = () => {
  const [showCV, setShowCV] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on component mount
  useState(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);

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

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    }
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    },
    exit: { scale: 0.8, opacity: 0 }
  };

  const handleCVPreview = () => {
    if (isMobile) {
      // For mobile devices, open the PDF in a new tab
      window.open(mycv, '_blank');
    } else {
      // For desktop, show the modal preview
      setShowCV(true);
    }
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10 px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Text Section */}
      <motion.div 
        className="flex-1 text-center md:text-left"
        variants={textVariants}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4"
          variants={textVariants}
        >
          <span className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">Hello, I'm</span> <span className="logo">Elyas Yenealem</span>
        </motion.h1>

        <motion.h3 
          className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500 dark:text-blue-300"
          variants={textVariants}
        >
          <Typewriter
            words={["Frontend Developer", "Backend Developer", "Full Stack Developer"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h3>

        <motion.p 
          className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg mb-6 leading-relaxed"
          variants={textVariants}
        >
          Full Stack Developer passionate about building sleek, modern, and responsive web solutions.
        </motion.p>

        {/* Social Icons */}
        <motion.div 
          className="flex justify-center md:justify-start gap-6 text-[26px] mb-6 text-blue-600 dark:text-blue-400"
          variants={textVariants}
        >
          {[
            { href: "https://www.linkedin.com/in/elyas-yenealem-01572b359", icon: <FaLinkedin /> },
            { href: "https://github.com/dopi95/", icon: <FaGithub /> },
            { href: "https://t.me/elaras21/", icon: <FaTelegram /> },
            { href: "https://www.instagram.com/el_yas_21/", icon: <FaInstagram /> },
          ].map(({ href, icon }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              className="hover:text-blue-800 transition duration-300"
              aria-label="Social Icon"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          variants={textVariants}
        >
         <motion.button
  onClick={handleCVPreview}
  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <FaEye />
  {isMobile ? "View CV" : "Preview CV"}
</motion.button>
          <motion.a
            href="#projects"
            className="flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLaptopCode />
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div 
        className="flex-1 flex justify-center mb-4 md:mb-0"
        variants={imageVariants}
      >
        <motion.img
          src={pp}
          alt="Elyas"
          className="w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover shadow-xl border-4 border-blue-200"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* CV Modal - Only for desktop */}
      {showCV && !isMobile && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
        >
          <div className="relative bg-white dark:bg-gray-900 p-4 rounded-lg max-w-3xl w-full h-[90vh] overflow-auto">
            <motion.button
              onClick={() => setShowCV(false)}
              className="absolute top-3 right-3 text-xl text-red-500 hover:text-red-700"
              aria-label="Close CV"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>
            <object
              data={mycv}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="text-center p-4">
                <p className="text-sm mb-4">
                  PDF preview is not supported on this device.
                </p>
                <a
                  href={mycv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  <FaDownload />
                  Download CV
                </a>
              </div>
            </object>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Main;