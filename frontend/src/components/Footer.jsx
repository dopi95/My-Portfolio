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
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* First Column - Name and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-left logo">Elyas Yenealem</h2>
            <div className="space-y-1 text-left">
              <p className="text-gray-600 dark:text-gray-400">
                Full Stack Developer creating digital solutions
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Based in Addis Ababa, Ethiopia
              </p>
            </div>
          </div>

          {/* Second Column - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-left md:text-center">Quick Links</h3>
            <ul className="space-y-2 text-left md:text-center">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors md:justify-center"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Column - Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-left md:text-right">Get in Touch</h3>
            <div className="flex gap-4 justify-start md:justify-end">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="text-2xl text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Elyas Yenealem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;