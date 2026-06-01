import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' 
            : 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-2xl md:text-3xl font-bold ${
            darkMode ? 'text-white' : 'text-indigo-600'
          }`}
        >
          Александр
        </motion.h1>

        <nav className="hidden md:flex space-x-12">
          {['home', 'about', 'projects', 'contact'].map((section, index) => (
            <motion.button
              key={section}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(section)}
              className={`font-medium text-lg ${
                darkMode 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-indigo-600'
              } transition-colors relative`}
            >
              {section === 'home' ? 'Главная' : 
               section === 'about' ? 'Обо мне' : 
               section === 'projects' ? 'Проекты' : 'Контакты'}
              <span className={`absolute bottom-[-4px] left-0 w-full h-0.5 ${
                darkMode ? 'bg-indigo-400' : 'bg-indigo-600'
              } transform scale-x-0 hover:scale-x-100 transition-transform origin-left`}></span>
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-800 text-yellow-300' 
                : 'bg-gray-200 text-gray-700'
            } transition-colors`}
            title={darkMode ? 'Светлая тема' : 'Темная тема'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <a
            href="https://t.me/maksahbot"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-block px-6 py-2 rounded-full font-medium ${
              darkMode 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            } transition-colors`}
          >
            💬 Telegram
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;