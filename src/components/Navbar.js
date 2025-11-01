import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-brand">Shankar Soni</div>
      
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a onClick={() => scrollTo('about')}>About</a>
        <a onClick={() => scrollTo('skills')}>Skills</a>
        <a onClick={() => scrollTo('projects')}>Projects</a>
        <a onClick={() => scrollTo('certifications')}>Certifications</a>
        <a onClick={() => scrollTo('experience')}>Experience</a>
        <a onClick={() => scrollTo('contact')}>Contact</a>
      </div>

      <div className="nav-controls">
        <div className="theme-toggle" onClick={() => {
          console.log('Toggle clicked, current darkMode:', darkMode);
          toggleDarkMode();
        }}>
          <div className={`toggle-slider ${darkMode ? 'dark' : 'light'}`}>
            <span className="toggle-icon">{darkMode ? '⚡' : '💡'}</span>
          </div>
        </div>
        
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  );
}