import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaHome, FaUser, FaCode, FaTools, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/elyas-yenealem-01572b359",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/dopi95/",
      label: "GitHub"
    },
    {
      icon: <FaTelegram />,
      url: "https://t.me/elaras21/",
      label: "Telegram"
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/el_yas_21/",
      label: "Instagram"
    },
    
  ];

  const quickLinks = [
    { name: "Home", icon: <FaHome />, url: "#" },
    { name: "About", icon: <FaUser />, url: "#about" },
    { name: "Projects", icon: <FaCode />, url: "#projects" },
    { name: "Skills", icon: <FaTools />, url: "#skills" },
    { name: "Contact", icon: <FaEnvelope />, url: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 py-16 px-4 sm:px-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* First Column - Name and Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-6 text-left logo bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Elyas Yenealem</h2>
            <div className="space-y-3 text-left">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Software Developer creating innovative digital solutions
              </p>
              <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Based in Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          {/* Second Column - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-left md:text-center text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-3 text-left md:text-center">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="group flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 md:justify-center py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column - Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-left md:text-right text-gray-800 dark:text-white">Connect With Me</h3>
            <div className="flex gap-4 justify-start md:justify-end">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -8, 
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 text-gray-600 dark:text-gray-300 hover:from-blue-200 hover:via-blue-300 hover:to-blue-400 dark:hover:from-blue-400 dark:hover:via-blue-500 dark:hover:to-blue-600 hover:text-blue-700 dark:hover:text-white shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-300 dark:border-gray-500 hover:border-blue-300 dark:hover:border-blue-400 group overflow-hidden"
                  aria-label={social.label}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{
                      background: [
                        "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), rgba(255,255,255,0.3))",
                        "linear-gradient(225deg, transparent, rgba(255,255,255,0.1), rgba(255,255,255,0.3))",
                        "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), rgba(255,255,255,0.3))"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xl relative z-10 group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-left md:text-right mt-4">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-600 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            © {new Date().getFullYear()} Elyas Yenealem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;