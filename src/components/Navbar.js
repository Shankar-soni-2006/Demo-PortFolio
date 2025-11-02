import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(10, 10, 30, 0.15), rgba(0, 0, 0, 0.1))',
          backdropFilter: 'blur(30px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: '2px solid rgba(0, 255, 255, 0.3)'
        }}
      >
        <div className="nav-brand" style={{ fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(45deg, #00ffff, #ff00ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Shankar Soni</div>
        
        {/* Desktop Links */}
        <div className="nav-links-desktop" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a onClick={() => scrollTo('about')} style={{ color: 'var(--text-primary)', cursor: 'pointer', textDecoration: 'none' }}>About</a>
          <a onClick={() => scrollTo('skills')} style={{ color: 'var(--text-primary)', cursor: 'pointer', textDecoration: 'none' }}>Skills</a>
          <a onClick={() => scrollTo('projects')} style={{ color: 'var(--text-primary)', cursor: 'pointer', textDecoration: 'none' }}>Projects</a>
          <a onClick={() => scrollTo('certifications')} style={{ color: 'var(--text-primary)', cursor: 'pointer', textDecoration: 'none' }}>Certifications</a>
          <a onClick={() => scrollTo('experience')} style={{ color: 'var(--text-primary)', cursor: 'pointer', textDecoration: 'none' }}>Experience</a>
          <a onClick={() => scrollTo('contact')} style={{ color: 'var(--text-primary)', cursor: 'pointer', textDecoration: 'none' }}>Contact</a>
        </div>

        <div className="nav-controls" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="theme-toggle" onClick={toggleDarkMode}>
            <div className={`toggle-slider ${darkMode ? 'dark' : 'light'}`}>
              <span className="toggle-icon">{darkMode ? '⚡' : '💡'}</span>
            </div>
          </div>
          
          {/* Mobile Hamburger */}
          <button 
            className="mobile-menu-btn"
            onClick={handleMenuToggle}
            style={{
              display: 'none',
              flexDirection: 'column',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              gap: '4px'
            }}
          >
            <span style={{ width: '25px', height: '3px', background: 'linear-gradient(45deg, #00ffff, #ff00ff)', display: 'block', transition: 'all 0.3s', transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
            <span style={{ width: '25px', height: '3px', background: 'linear-gradient(45deg, #00ffff, #ff00ff)', display: 'block', transition: 'all 0.3s', opacity: isOpen ? 0 : 1 }}></span>
            <span style={{ width: '25px', height: '3px', background: 'linear-gradient(45deg, #00ffff, #ff00ff)', display: 'block', transition: 'all 0.3s', transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div 
          className="mobile-menu"
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.98), rgba(20, 20, 40, 0.98))',
            backdropFilter: 'blur(20px)',
            zIndex: 999,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          <a onClick={() => scrollTo('about')} style={{ color: '#ffffff', cursor: 'pointer', textDecoration: 'none', padding: '1rem', textAlign: 'center', border: '1px solid rgba(0, 255, 255, 0.2)', borderRadius: '8px', background: 'rgba(0, 255, 255, 0.05)' }}>About</a>
          <a onClick={() => scrollTo('skills')} style={{ color: '#ffffff', cursor: 'pointer', textDecoration: 'none', padding: '1rem', textAlign: 'center', border: '1px solid rgba(0, 255, 255, 0.2)', borderRadius: '8px', background: 'rgba(0, 255, 255, 0.05)' }}>Skills</a>
          <a onClick={() => scrollTo('projects')} style={{ color: '#ffffff', cursor: 'pointer', textDecoration: 'none', padding: '1rem', textAlign: 'center', border: '1px solid rgba(0, 255, 255, 0.2)', borderRadius: '8px', background: 'rgba(0, 255, 255, 0.05)' }}>Projects</a>
          <a onClick={() => scrollTo('certifications')} style={{ color: '#ffffff', cursor: 'pointer', textDecoration: 'none', padding: '1rem', textAlign: 'center', border: '1px solid rgba(0, 255, 255, 0.2)', borderRadius: '8px', background: 'rgba(0, 255, 255, 0.05)' }}>Certifications</a>
          <a onClick={() => scrollTo('experience')} style={{ color: '#ffffff', cursor: 'pointer', textDecoration: 'none', padding: '1rem', textAlign: 'center', border: '1px solid rgba(0, 255, 255, 0.2)', borderRadius: '8px', background: 'rgba(0, 255, 255, 0.05)' }}>Experience</a>
          <a onClick={() => scrollTo('contact')} style={{ color: '#ffffff', cursor: 'pointer', textDecoration: 'none', padding: '1rem', textAlign: 'center', border: '1px solid rgba(0, 255, 255, 0.2)', borderRadius: '8px', background: 'rgba(0, 255, 255, 0.05)' }}>Contact</a>
        </div>
      )}
    </>
  );
}