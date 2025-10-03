import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTelegram, FaInstagram, FaTimes } from 'react-icons/fa';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const footer = document.querySelector('footer');
      
      if (aboutSection && footer) {
        const aboutTop = aboutSection.offsetTop;
        const footerTop = footer.offsetTop;
        const scrollPosition = window.pageYOffset;
        
        setIsVisible(scrollPosition >= aboutTop - 100 && scrollPosition < footerTop - 400);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactItems = [
    {
      icon: <FaPhone />,
      label: 'Phone',
      action: () => window.open('tel:+251978210810'),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      action: () => window.open('mailto:elyasyenealem@gmail.com'),
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      action: () => window.open('https://www.linkedin.com/in/elyas-yenealem-01572b359', '_blank'),
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      action: () => window.open('https://github.com/dopi95/', '_blank'),
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    {
      icon: <FaTelegram />,
      label: 'Telegram',
      action: () => window.open('https://t.me/elaras21/', '_blank'),
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      action: () => window.open('https://www.instagram.com/el_yas_21/', '_blank'),
      color: 'bg-pink-500 hover:bg-pink-600'
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed left-4 bottom-4 md:left-8 md:bottom-24 z-50"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
          >
            {contactItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={item.action}
                className={`w-12 h-12 rounded-full ${item.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group relative`}
                initial={{ opacity: 0, x: -50, scale: 0 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-lg">{item.icon}</span>
                <motion.div
                  className="absolute left-full ml-3 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {item.label}
                </motion.div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        {isOpen ? <FaTimes className="text-xl" /> : <FaEnvelope className="text-xl" />}
      </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;