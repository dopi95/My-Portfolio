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
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    setIsMobile(mobileRegex.test(navigator.userAgent));
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



  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center gap-4 md:gap-10 px-4 pt-20 pb-8 sm:pt-24 sm:pb-12 md:pt-32 md:pb-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
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
          className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-blue-600 dark:text-blue-400 mb-3 sm:mb-6 leading-tight"
          variants={textVariants}
        >
          <span className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans font-light">Hello, I'm</span> <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Elyas Yenealem</span>
        </motion.h1>

        <motion.h3 
          className="text-lg sm:text-xl md:text-3xl font-display font-medium mb-3 sm:mb-6 text-blue-500 dark:text-blue-300 tracking-wide"
          variants={textVariants}
        >
          <Typewriter
            words={["Software Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h3>

        <motion.p 
          className="max-w-xl mx-auto md:mx-0 text-base sm:text-lg md:text-xl mb-4 sm:mb-8 leading-relaxed font-sans text-gray-700 dark:text-gray-300 font-light"
          variants={textVariants}
        >
          Full Stack Developer passionate about building sleek, modern, and responsive web solutions.
        </motion.p>

        {/* Social Icons */}
        <motion.div 
          className="flex justify-center md:justify-start gap-3 sm:gap-5 mb-4 sm:mb-8"
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
              className="relative w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 text-gray-600 dark:text-gray-300 hover:from-blue-200 hover:via-blue-300 hover:to-blue-400 dark:hover:from-blue-400 dark:hover:via-blue-500 dark:hover:to-blue-600 hover:text-blue-700 dark:hover:text-white shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-300 dark:border-gray-500 hover:border-blue-300 dark:hover:border-blue-400 group overflow-hidden"
              aria-label="Social Icon"
              whileHover={{ 
                y: -8, 
                scale: 1.2,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.4 }
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: i * 0.1 }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                animate={{
                  rotate: [0, 360]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <span className="text-base sm:text-xl relative z-10 group-hover:scale-110 transition-transform duration-300">{icon}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center md:justify-start"
          variants={textVariants}
        >
          <motion.button
            onClick={() => window.open(mycv, '_blank')}
            className="relative overflow-hidden flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 group"
            whileHover={{ 
              scale: 1.08, 
              y: -4,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
            <FaEye className="text-base sm:text-xl relative z-10" />
            <span className="relative z-10">Preview CV</span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              whileHover={{ scale: 1.5 }}
            />
          </motion.button>
          <motion.a
            href="#projects"
            className="relative overflow-hidden flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-slate-800 via-slate-900 to-black text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-slate-500/25 transition-all duration-500 group"
            whileHover={{ 
              scale: 1.08, 
              y: -4,
              boxShadow: "0 20px 40px rgba(71, 85, 105, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
            <FaLaptopCode className="text-base sm:text-xl relative z-10" />
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              whileHover={{ scale: 1.5 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div 
        className="flex-1 flex justify-center mb-2 sm:mb-4 md:mb-0"
        variants={imageVariants}
      >
        <motion.img
          src={pp}
          alt="Elyas"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-blue-200"
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