import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './App.css';
import Navbar from './components/Navbar';
import ThreeBackground from './components/ThreeBackground';

const PROGRAMMING_LANGUAGES = [
  { name: 'HTML', level: 95, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="32" height="32" alt="HTML" /> },
  { name: 'CSS', level: 90, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="32" height="32" alt="CSS" /> },
  { name: 'JavaScript', level: 80, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="32" height="32" alt="JavaScript" /> },
  { name: 'Python', level: 75, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="32" height="32" alt="Python" /> },
  { name: 'Java', level: 65, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="32" height="32" alt="Java" /> },
  { name: 'C', level: 80, logo: <div style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00599C', color: 'white', fontWeight: 'bold', fontSize: '18px', clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}>C</div> },
  { name: 'C++', level: 75, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" width="32" height="32" alt="C++" /> },
   
];

const getToolsFrameworks = (darkMode) => [
  { name: 'Git', level: 60, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="32" height="32" alt="Git" /> },
  { name: 'Vercel', level: 90, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="32" height="32" alt="Vercel" /> },
  { name: 'Netlify', level: 90, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" width="32" height="32" alt="Netlify" /> },
  { name: 'AWS', level: 55, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" width="32" height="32" alt="AWS" /> },
  { name: 'MongoDB', level: 80, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="32" height="32" alt="MongoDB" /> },
  { name: 'Express.js', level: 75, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="32" height="32" alt="Express.js" style={{filter: darkMode ? 'brightness(2) invert(1)' : 'brightness(0) invert(0)'}} /> },
  { name: 'Node.js', level: 65, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="32" height="32" alt="Node.js" /> },
  { name: 'Github', level: 80, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="32" height="32" alt="Github" style={{filter: darkMode ? 'brightness(2) invert(1)' : 'brightness(0) invert(0)'}} /> },
  { name: 'Tailwind CSS', level: 85, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="32" height="32" alt="Tailwind CSS" /> },
  { name: 'SASS', level: 80, logo: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="32" height="32" alt="SASS" /> },
];

const CERT_IMAGES = {
  'Solutions Challenge 2025': '/assets/certificates/solutions-challenge-2025.png',
  'Gen AI with AWS': '/assets/certificates/gen-ai-aws.png',
  'Gemini Certified University Student': '/assets/certificates/GCS.png',
  'Gemini Certified Educator': '/assets/certificates/GCE.png',
  'AWS Cloud Practitioner': '/assets/certificates/aws-cloud-practitioner.png',
  'Introduction to Generative AI ': '/assets/certificates/GGen.png',
  'Introduction to LLMs': '/assets/certificates/LLM.png',
  'Vadodara Hackathon 6.0': '/assets/certificates/VH6.O.png',
  'HTML and CSS': '/assets/certificates/HTMLCSS.jpg',
  'Javascript': '/assets/certificates/js.jpg',
  'Python Basics': '/assets/certificates/python.png'
};


const PROJECTS = [
  {
    title: 'FlashCard Generator',
    description: 'AI-powered flashcard application with spaced repetition',
    technologies: ['React', 'Vite', 'JS','Gemini API'],
    features: ['AI-powered card generation', 'Spaced repetition algorithm', 'Progress tracking'],
    status: 'LIVE',
    github: 'https://github.com/Shankar-soni-2006/FlashCard-Generator',
    demo: 'https://flash-card-generator-delta.vercel.app/'
  },
  {
    title: 'Random Quote Generator',
    description: 'Dynamic quote generator with social sharing features',
    technologies: ['HTML', 'CSS', 'JS'],
    features: ['Real-time quote fetching', 'Social media sharing', 'Favorite quotes collection'],
    status: 'LIVE',
    github: 'https://github.com/Shankar-soni-2006/Random_Quote_Generator',
    demo: 'https://shan-123.bytexl.live/'
  },
  {
    title: 'Color Palette Generator',
    description: 'Creative tool for generating beautiful color schemes',
    technologies: ['HTML', 'CSS', 'JS'],
    features: ['Random palette generation', 'Color code export', 'Palette saving'],
    status: 'LIVE',
    github: 'https://github.com/Shankar-soni-2006/Random_Quote_Generator',
    demo: 'https://randomcolorpalettegenerator.bytexl.live/'
  },
  {
    title: 'Task Management System',
    description: 'Full-stack productivity app with team collaboration',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    features: ['Task scheduling', 'Team collaboration', 'Progress analytics'],
    status: 'Coming Soon...',
    github: 'https://github.com/Shankar-soni-2006',
    demo: 'https://demo.com'
  },
  
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online shopping platform',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    features: ['Product catalog', 'Payment integration', 'Order management'],
    status: 'Featured',
    github: 'https://github.com/Shankar-soni-2006',
    demo: 'https://demo.com'
  },
  {
    title: 'Machine Learning Predictor',
    description: 'Python-based ML model for data prediction',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    features: ['Data preprocessing', 'Model training', 'Prediction analytics'],
    status: 'Featured',
    github: 'https://github.com/Shankar-soni-2006',
    demo: 'https://demo.com'
  },
  {
    title: 'Cloud Storage App',
    description: 'Secure file storage solution with AWS integration',
    technologies: ['React', 'AWS S3', 'Node.js', 'JWT'],
    features: ['File upload/download', 'User authentication', 'Cloud synchronization'],
    status: 'Featured',
    github: 'https://github.com/Shankar-soni-2006',
    demo: 'https://demo.com'
  }
];

const ProjectCard = ({ project, index, isFlipped, onFlip }) => (
  <motion.div
    className="card"
    onClick={onFlip}
    whileHover={{ 
      scale: 1.05, 
      boxShadow: '0 20px 40px rgba(0, 255, 255, 0.4), 0 0 60px rgba(255, 0, 255, 0.2)',
      rotateY: 2
    }}
    style={{
      width: '280px',
      height: '380px',
      background: isFlipped 
        ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 60, 0.95))' 
        : 'linear-gradient(135deg, rgba(0, 0, 0, 0.85), rgba(10, 10, 30, 0.9))',
      border: isFlipped 
        ? '2px solid rgba(255, 0, 255, 0.6)' 
        : '2px solid rgba(0, 255, 255, 0.5)',
      borderRadius: '16px',
      backdropFilter: 'blur(15px)',
      cursor: 'pointer',
      color: 'var(--text-primary)',
      padding: '0',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: isFlipped 
        ? '0 8px 32px rgba(255, 0, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
        : '0 8px 32px rgba(0, 255, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    }}
  >
    {/* Animated corner accents */}
    <motion.div
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '30px',
        height: '30px',
        borderTop: '3px solid #00ffff',
        borderLeft: '3px solid #00ffff',
        borderTopLeftRadius: '16px'
      }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.div
      style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '30px',
        height: '30px',
        borderTop: '3px solid #ff00ff',
        borderRight: '3px solid #ff00ff',
        borderTopRightRadius: '16px'
      }}
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
    />
    <motion.div
      style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '30px',
        height: '30px',
        borderBottom: '3px solid #ffff00',
        borderLeft: '3px solid #ffff00',
        borderBottomLeftRadius: '16px'
      }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
    <motion.div
      style={{
        position: 'absolute',
        bottom: '0',
        right: '0',
        width: '30px',
        height: '30px',
        borderBottom: '3px solid #00ff00',
        borderRight: '3px solid #00ff00',
        borderBottomRightRadius: '16px'
      }}
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
    />
    {!isFlipped ? (
      <div className="card-front" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '3rem 1.5rem 2rem 1.5rem' }}>
        {/* Status indicator */}
        <motion.div
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: project.status === 'LIVE' 
              ? 'linear-gradient(45deg, #00ff00, #00ffff)' 
              : 'linear-gradient(45deg, #ffaa00, #ff6600)',
            color: '#000',
            padding: '0.3rem 0.6rem',
            borderRadius: '12px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            zIndex: 10,
            boxShadow: project.status === 'LIVE' 
              ? '0 0 10px rgba(0, 255, 0, 0.5)' 
              : '0 0 10px rgba(255, 170, 0, 0.5)'
          }}
          animate={{ 
            boxShadow: project.status === 'LIVE' ? [
              '0 0 10px rgba(0, 255, 0, 0.5)',
              '0 0 20px rgba(0, 255, 255, 0.8)',
              '0 0 10px rgba(0, 255, 0, 0.5)'
            ] : [
              '0 0 10px rgba(255, 170, 0, 0.5)',
              '0 0 20px rgba(255, 102, 0, 0.8)',
              '0 0 10px rgba(255, 170, 0, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {project.status === 'LIVE' ? '🟢' : '🟡'} {project.status}
        </motion.div>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h3 style={{ 
            margin: '0 0 1rem 0', 
            fontSize: '1.3rem', 
            color: '#00ffff', 
            fontWeight: 'bold',
            textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
            letterSpacing: '1px'
          }}>{project.title}</h3>
        </div>
        
        {/* Description */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <p style={{ 
            margin: '0', 
            fontSize: '0.9rem', 
            color: 'rgba(255, 255, 255, 0.8)', 
            lineHeight: '1.6',
            textAlign: 'center'
          }}>{project.description}</p>
        </div>
        
        {/* Action buttons */}
        <div className="project-links" style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', marginTop: '1rem' }}>
          <motion.button 
            whileHover={{ 
              scale: 1.1, 
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              if (project.github === 'https://github.com/Shankar-soni-2006') {
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
              } else {
                window.open(project.github, '_blank');
              }
            }}
            style={{
              background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(0, 255, 255, 0.1))',
              border: '2px solid #00ffff',
              color: '#00ffff',
              padding: '0.7rem 1.2rem',
              borderRadius: '12px',
              cursor: 'pointer',
              fontFamily: 'Share Tech Mono, monospace',
              fontWeight: 'bold',
              fontSize: '0.8rem',
              textShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
              transition: 'all 0.3s ease'
            }}>⚡ Code</motion.button>
          <motion.button 
            whileHover={{ 
              scale: 1.1, 
              boxShadow: '0 0 20px rgba(255, 0, 255, 0.6)',
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              if (project.demo === 'https://demo.com') {
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
              } else {
                window.open(project.demo, '_blank');
              }
            }}
            style={{
              background: 'linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(255, 0, 255, 0.1))',
              border: '2px solid #ff00ff',
              color: '#ff00ff',
              padding: '0.7rem 1.2rem',
              borderRadius: '12px',
              cursor: 'pointer',
              fontFamily: 'Share Tech Mono, monospace',
              fontWeight: 'bold',
              fontSize: '0.8rem',
              textShadow: '0 0 5px rgba(255, 0, 255, 0.5)',
              transition: 'all 0.3s ease'
            }}>🚀 Live Demo</motion.button>
        </div>
        
        {/* Click indicator */}
        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '0.7rem',
            letterSpacing: '1px'
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          CLICK TO VIEW FEATURES
        </motion.div>
      </div>
    ) : (
      <div className="card-back" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', padding: '2rem 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h4 style={{ 
            color: '#ff00ff', 
            marginBottom: '0', 
            fontSize: '1.2rem',
            textShadow: '0 0 10px rgba(255, 0, 255, 0.5)',
            letterSpacing: '1px'
          }}>KEY FEATURES</h4>
        </div>
        
        {/* Features */}
        <div style={{ flex: 1, marginBottom: '1.5rem' }}>
          {project.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                x: 10,
                backgroundColor: 'rgba(255, 0, 255, 0.1)'
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '0.8rem',
                padding: '0.6rem 0.8rem',
                borderRadius: '8px',
                cursor: 'pointer',
                border: '1px solid rgba(255, 0, 255, 0.3)',
                background: 'rgba(255, 0, 255, 0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <motion.span 
                style={{ 
                  color: '#ff00ff', 
                  marginRight: '0.8rem',
                  fontSize: '1rem'
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
              >◆</motion.span>
              <span style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                fontSize: '0.85rem',
                fontWeight: '500'
              }}>{feature}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Action buttons */}
        <div className="project-links" style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center' }}>
          <motion.button 
            whileHover={{ 
              scale: 1.1, 
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              if (project.github === 'https://github.com/Shankar-soni-2006') {
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
              } else {
                window.open(project.github, '_blank');
              }
            }}
            style={{
              background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(0, 255, 255, 0.1))',
              border: '2px solid #00ffff',
              color: '#00ffff',
              padding: '0.7rem 1.2rem',
              borderRadius: '12px',
              cursor: 'pointer',
              fontFamily: 'Share Tech Mono, monospace',
              fontWeight: 'bold',
              fontSize: '0.8rem',
              textShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
              transition: 'all 0.3s ease'
            }}>⚡ Code</motion.button>
          <motion.button 
            whileHover={{ 
              scale: 1.1, 
              boxShadow: '0 0 20px rgba(255, 0, 255, 0.6)',
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              if (project.demo === 'https://demo.com') {
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
              } else {
                window.open(project.demo, '_blank');
              }
            }}
            style={{
              background: 'linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(255, 0, 255, 0.1))',
              border: '2px solid #ff00ff',
              color: '#ff00ff',
              padding: '0.7rem 1.2rem',
              borderRadius: '12px',
              cursor: 'pointer',
              fontFamily: 'Share Tech Mono, monospace',
              fontWeight: 'bold',
              fontSize: '0.8rem',
              textShadow: '0 0 5px rgba(255, 0, 255, 0.5)',
              transition: 'all 0.3s ease'
            }}>🚀 Live Demo</motion.button>
        </div>
      </div>
    )}
  </motion.div>
);

function App() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['AI/ML', 'FULL STACK', 'CLOUD'];
  const descriptions = [
    'Passionate about machine learning algorithms, neural networks, and building intelligent systems that solve real-world problems.',
    'Expert in end-to-end web development using modern frameworks like React, Node.js, and database technologies.',
    'Specialized in cloud architecture, deployment strategies, and scalable infrastructure using AWS and other cloud platforms.'
  ];
  const [flippedCard, setFlippedCard] = useState(null);
  const [skillsRef, skillsInView] = useInView({ threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1 });
  const [certificationsRef, certificationsInView] = useInView({ threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ threshold: 0.1 });
  const [darkMode, setDarkMode] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [formResult, setFormResult] = useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openCertificate = (certName) => {
    setSelectedCertificate({
      name: certName,
      image: CERT_IMAGES[certName] || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop'
    });
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  const openGallery = (eventIndex) => {
    setSelectedEvent(eventIndex);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedEvent(null);
    setCurrentImageIndex(0);
  };

  React.useEffect(() => {
    let slideInterval;
    if (selectedEvent !== null) {
      slideInterval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === techEvents[selectedEvent].images.length - 1 ? 0 : prev + 1
        );
      }, 4000);
    }
    return () => clearInterval(slideInterval);
  }, [selectedEvent]);

  const techEvents = [
    { 
      name: 'Devfest Baroda', 
      date: 'December 2024', 
      images: [
        '/assets/DevFest Baroda 2024/DFB1.jpg',
        '/assets/DevFest Baroda 2024/DFB2.jpg',
        '/assets/DevFest Baroda 2024/DFB3.jpg',
        '/assets/DevFest Baroda 2024/DFB4.jpg',
        '/assets/DevFest Baroda 2024/DFB5.jpg'
      ]
    },
    { 
      name: 'AWS Community Day Ahmedabad', 
      date: 'June 2025', 
      images: [
        '/assets/AWS Community Day ADI/ACDA1.jpg',
        '/assets/AWS Community Day ADI/ACDA2.jpg',
        '/assets/AWS Community Day ADI/ACDA3.jpg',
        '/assets/AWS Community Day ADI/ACDA4.jpg',
        '/assets/AWS Community Day ADI/ACDA5.jpg',
        '/assets/AWS Community Day ADI/ACDA6.jpg'
      ]
    },
    { 
      name: 'Cloud Community Day Gandhinagar', 
      date: 'July 2025', 
      images: [
        '/assets/Cloud Community Day Gandhinagar/CCDG1.jpg',
        '/assets/Cloud Community Day Gandhinagar/CCDG2.jpg',
        '/assets/Cloud Community Day Gandhinagar/CCDG3.jpg',
        '/assets/Cloud Community Day Gandhinagar/CCDG4.jpg'
      ]
    },
    { 
      name: 'DevFest Baroda 2025', 
      date: 'October 2025', 
      images: [
        '/assets/Devfest Baroda 2025/DevBRC251.png',
        '/assets/Devfest Baroda 2025/DevBRC252.png',
        '/assets/Devfest Baroda 2025/DevBRC253.png',
        '/assets/Devfest Baroda 2025/DevBRC254.png',
        '/assets/Devfest Baroda 2025/DevBRC255.png',
        '/assets/Devfest Baroda 2025/DevBRC256.png',
        '/assets/Devfest Baroda 2025/DevBRC257.png'
      ]
    },
    { 
      name: 'AWS Community Vadodara', 
      date: 'October 2025', 
      images: [
        '/assets/AWS Community Day BRC/ACDBRC1.jpg',
        '/assets/AWS Community Day BRC/ACDBRC2.jpg',
        '/assets/AWS Community Day BRC/ACDBRC3.jpg',
        '/assets/AWS Community Day BRC/ACDBRC4.jpg',
        '/assets/AWS Community Day BRC/ACDBRC5.jpg',
        '/assets/AWS Community Day BRC/ACDBRC6.jpg',
        '/assets/AWS Community Day BRC/ACDBRC7.jpg',
        '/assets/AWS Community Day BRC/ACDBRC8.jpg',
        '/assets/AWS Community Day BRC/ACDBRC9.jpg',
        '/assets/AWS Community Day BRC/ACDBRC10.jpg',
        '/assets/AWS Community Day BRC/ACDBRC11.jpg',
        '/assets/AWS Community Day BRC/ACDBRC12.jpg',
        '/assets/AWS Community Day BRC/ACDBRC13.jpg',
        '/assets/AWS Community Day BRC/ACDBRC14.jpg',
        '/assets/AWS Community Day BRC/ACDBRC15.jpg',
        '/assets/AWS Community Day BRC/ACDBRC16.jpg',
        '/assets/AWS Community Day BRC/ACDBRC17.jpg',
      ]
    },
    { 
      name: 'Next.js  Conference 2025', 
      date: 'October 2025', 
      images: [
        '/assets/Next.js Conf 2025/NextJSConf1.png',
        '/assets/Next.js Conf 2025/NextJSConf2.png',
        '/assets/Next.js Conf 2025/NextJSConf3.png',
        '/assets/Next.js Conf 2025/NextJSConf4.png',
        '/assets/Next.js Conf 2025/NextJSConf5.png',
        '/assets/Next.js Conf 2025/NextJSConf6.png',
        '/assets/Next.js Conf 2025/NextJSConf7.png',
        '/assets/Next.js Conf 2025/NextJSConf8.png',
        '/assets/Next.js Conf 2025/NextJSConf9.png',
        '/assets/Next.js Conf 2025/NextJSConf10.png',
        '/assets/Next.js Conf 2025/NextJSConf11.png',
        '/assets/Next.js Conf 2025/NextJSConf12.png',
        '/assets/Next.js Conf 2025/NextJSConf13.png',
        '/assets/Next.js Conf 2025/NextJSConf14.png'
      ]
    }
  ];

  return (
    <div className="App" data-theme={darkMode ? 'dark' : 'light'} style={{ padding: '2rem', minHeight: '100vh', position: 'relative' }}>
      <ThreeBackground darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      
      <section id="about" className="section" style={{ marginBottom: '4rem', position: 'relative', overflow: 'hidden', paddingTop: '8rem' }}>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', position: 'relative', zIndex: 1 }}>
          {/* Profile Section */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.div 
              className="hero-image" 
              style={{ 
                marginBottom: '2rem',
                position: 'relative',
                display: 'inline-block'
              }}
              whileHover={{ scale: 1.08, rotateY: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Floating orbs */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: '12px',
                    height: '12px',
                    background: `radial-gradient(circle, ${i % 2 === 0 ? '#00ffff' : '#ff00ff'}, transparent)`,
                    borderRadius: '50%',
                    top: '50%',
                    left: '50%',
                    zIndex: 1
                  }}
                  animate={{
                    x: [0, Math.cos(i * 90 * Math.PI / 180) * 110],
                    y: [0, Math.sin(i * 90 * Math.PI / 180) * 110],
                    scale: [0.5, 1, 0.5],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.75,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Tech frame */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '-8px',
                  width: '196px',
                  height: '196px',
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #00ffff 0deg 80deg, #00ffff 80deg, #ff00ff 90deg, #ff00ff 90deg 170deg, #ff00ff 170deg, #ffff00 180deg, #ffff00 180deg 260deg, #ffff00 260deg, #00ff00 270deg, #00ff00 270deg 350deg, #00ff00 350deg, #00ffff 360deg)',
                  padding: '3px',
                  zIndex: 1
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.9)'
                }} />
              </motion.div>
              
              {/* Pulse ring */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '170px',
                  height: '170px',
                  borderRadius: '50%',
                  border: '1px solid rgba(0, 255, 255, 0.3)',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Corner accents */}
              {[0, 90, 180, 270].map((angle, i) => (
                <motion.div
                  key={angle}
                  style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    border: '2px solid #00ffff',
                    borderRadius: '2px',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-100px)`,
                    zIndex: 2
                  }}
                  animate={{
                    borderColor: ['#00ffff', '#ff00ff', '#ffff00', '#00ffff'],
                    rotate: [angle, angle + 360]
                  }}
                  transition={{
                    borderColor: { duration: 3, repeat: Infinity },
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" }
                  }}
                />
              ))}
              
              <motion.img 
                src="/assets/MyImage.png" 
                alt="Profile" 
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 3,
                  filter: 'brightness(1.15) contrast(1.15) saturate(1.2)'
                }}
                animate={{
                  boxShadow: [
                    '0 10px 40px rgba(0, 255, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                    '0 15px 60px rgba(255, 0, 255, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.15)',
                    '0 10px 40px rgba(0, 255, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)'
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  filter: 'brightness(1.3) contrast(1.3) saturate(1.4)',
                  boxShadow: '0 20px 80px rgba(0, 255, 255, 0.7), inset 0 0 40px rgba(255, 255, 255, 0.3)'
                }}
              />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
              }}
            >
              SHANKAR SONI
            </motion.h1>
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ fontSize: '3.5rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 'bold' }}>
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  style={{ display: 'inline-block' }}
                >
                  {roles[currentRole]}
                </motion.span>
                <span> DEVELOPER</span>
              </div>
              <motion.p 
                key={`role-desc-${currentRole}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="dynamic-description"
                style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.6', 
                  color: darkMode ? 'rgba(255, 255, 255, 0.8)' : '#1a202c', 
                  textAlign: 'center',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                {descriptions[currentRole]}
              </motion.p>
            </div>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ 
              textAlign: 'center', 
              marginBottom: '3rem', 
              fontSize: '2.5rem', 
              color: 'var(--text-primary)',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
              background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            ABOUT ME
          </motion.h2>
          
          <motion.div 
            className="card" 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: '0 20px 40px rgba(0, 255, 255, 0.4), inset 0 0 20px rgba(255, 0, 255, 0.1)',
              border: '1px solid rgba(0, 255, 255, 0.3)'
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 40, 0.9))',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(0, 255, 255, 0.6)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
              position: 'relative'
            }}
          >
            {/* Animated border */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.2), transparent)',
                borderRadius: 'inherit',
                opacity: 0
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <div style={{ padding: '2rem', position: 'relative', zIndex: 1 }}>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="about-description"
                style={{ 
                  fontSize: '1.2rem', 
                  lineHeight: '1.8', 
                  color: darkMode ? '#ffffff' : '#1a202c', 
                  textAlign: 'center',
                  marginBottom: '2rem'
                }}
              >
Computer Science student passionate about AI/ML and full-stack development. Building innovative projects with React, Node.js, and Python. Ready to contribute to the tech industry with creative solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="about-buttons"
                style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  marginTop: '2rem', 
                  gap: '2rem'
                }}
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.6)',
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.2), rgba(0, 255, 255, 0.1))',
                    border: '2px solid #00ffff',
                    color: '#00ffff',
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontFamily: 'Share Tech Mono, monospace',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    textShadow: '0 0 5px rgba(0, 255, 255, 0.5)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  ⚡ WORK
                </motion.button>
                <motion.button
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: '0 0 20px rgba(255, 0, 255, 0.6)',
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    background: 'linear-gradient(45deg, rgba(255, 0, 255, 0.2), rgba(255, 0, 255, 0.1))',
                    border: '2px solid #ff00ff',
                    color: '#ff00ff',
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontFamily: 'Share Tech Mono, monospace',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    textShadow: '0 0 5px rgba(255, 0, 255, 0.5)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  🚀 GET IN TOUCH
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" ref={skillsRef} className="section" style={{ marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '3rem', 
            fontSize: '2.5rem', 
            color: 'var(--text-primary)',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          SKILLS
        </motion.h2>
        <div className="skills-container">
          <div className="skills-category">
            <h3 className="category-title">Programming Languages</h3>
            <div className="skills-grid">
              {PROGRAMMING_LANGUAGES.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {skill.logo}
                    <h3>{skill.name}</h3>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.level}%`, transition: 'width 1s ease' }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">Tools & Frameworks</h3>
            <div className="skills-grid">
              {getToolsFrameworks(darkMode).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {skill.logo}
                    <h3>{skill.name}</h3>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.level}%`, transition: 'width 1s ease' }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" ref={projectsRef} className="section" style={{ marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '3rem', 
            fontSize: '2.5rem', 
            color: 'var(--text-primary)',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          PROJECTS
        </motion.h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              isFlipped={flippedCard === index}
              onFlip={() => setFlippedCard(flippedCard === index ? null : index)}
            />
          ))}
        </div>
      </section>

      <section id="certifications" ref={certificationsRef} className="section" style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              textAlign: 'center', 
              marginBottom: '3rem', 
              fontSize: '2.5rem', 
              color: 'var(--text-primary)',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
              background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            CERTIFICATIONS
          </motion.h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              { title: 'Solutions Challenge 2025', org: 'GDG onCampus', year: '2025', color: '#FFD700' },
              { title: 'Gen AI with AWS', org: 'Amazon Web Services', year: '2025', color: '#FF6B35' },
              { title: 'Gemini Certified University Student', org: 'Google Skills', year: '2025', color: '#4285F4' },
              { title: 'Gemini Certified Educator', org: 'Google Skills', year: '2025', color: '#34A853' },
              { title: 'AWS Cloud Practitioner', org: 'Amazon Web Services', year: 'Coming Soon...', color: '#FF9500' },
              { title: 'Introduction to Generative AI ', org: 'Google Cloud', year: '2025', color: '#EA4335' },
              { title: 'Introduction to LLMs', org: 'Google Cloud', year: '2025', color: '#FBBC04' },
              { title: 'HTML and CSS (Certiport)', org: 'Certiport', year: '2025', color: '#00CED1' },
              { title: 'Javascript (Certiport)', org: 'Certiport', year: '2025', color: '#FFD700' },
              { title: 'Python Basics (IBM)', org: 'IBM', year: '2025', color: '#00CED1' }
              
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.03,
                  y: -12,
                  boxShadow: darkMode 
                    ? `0 20px 40px ${cert.color}30, 0 0 0 1px ${cert.color}40`
                    : `0 20px 40px ${cert.color}20, 0 0 0 1px ${cert.color}30`
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: darkMode 
                    ? `linear-gradient(145deg, rgba(15, 15, 25, 0.95), rgba(25, 25, 40, 0.9))`
                    : `linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(240, 240, 250, 0.9))`,
                  border: `1px solid ${cert.color}${darkMode ? '30' : '40'}`,
                  borderRadius: '20px',
                  padding: '2.5rem 2rem',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(20px)',
                  boxShadow: darkMode 
                    ? `0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px ${cert.color}20`
                    : `0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px ${cert.color}15`
                }}
              >
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: darkMode 
                    ? `linear-gradient(135deg, ${cert.color}08, transparent 50%, ${cert.color}05)`
                    : `linear-gradient(135deg, ${cert.color}05, transparent 50%, ${cert.color}03)`,
                  borderRadius: 'inherit'
                }} />
                
                {/* Top accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${cert.color}, ${cert.color}60, ${cert.color})`,
                  borderRadius: '20px 20px 0 0'
                }} />
                

                
                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Icon placeholder */}
                  <motion.div 
                    style={{
                      width: '60px',
                      height: '60px',
                      background: `linear-gradient(135deg, ${cert.color}20, ${cert.color}10)`,
                      border: `2px solid ${cert.color}40`,
                      borderRadius: '50%',
                      margin: '0 auto 1.5rem auto',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      color: cert.color
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    ✓
                  </motion.div>
                  
                  {/* Title */}
                  <h4 style={{ 
                    color: darkMode ? '#ffffff' : '#2d3748',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    marginBottom: '0.8rem',
                    textAlign: 'center',
                    lineHeight: '1.4',
                    letterSpacing: '0.3px'
                  }}>
                    {cert.title}
                  </h4>
                  
                  {/* Organization */}
                  <p style={{ 
                    color: cert.color,
                    fontSize: '0.95rem',
                    marginBottom: '1.2rem',
                    textAlign: 'center',
                    lineHeight: '1.4',
                    fontWeight: '500'
                  }}>
                    {cert.org}
                  </p>
                  
                  {/* Year badge */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '2rem'
                  }}>
                    <motion.span 
                      style={{
                        background: darkMode 
                          ? `linear-gradient(135deg, ${cert.color}15, ${cert.color}25)`
                          : `linear-gradient(135deg, ${cert.color}20, ${cert.color}30)`,
                        color: darkMode ? '#ffffff' : '#ffffff',
                        border: `1px solid ${cert.color}50`,
                        padding: '0.4rem 1.2rem',
                        borderRadius: '25px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        backdropFilter: 'blur(10px)'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {cert.year}
                    </motion.span>
                  </div>
                  
                  {/* Premium button */}
                  <motion.button 
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: `0 8px 25px ${cert.color}40`,
                      background: `linear-gradient(135deg, ${cert.color}, ${cert.color}CC)`
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openCertificate(cert.title)}
                    style={{
                      width: '100%',
                      background: `linear-gradient(135deg, ${cert.color}DD, ${cert.color}BB)`,
                      border: 'none',
                      color: '#ffffff',
                      padding: '1rem 2rem',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      boxShadow: darkMode 
                        ? `0 4px 15px ${cert.color}30`
                        : `0 4px 15px ${cert.color}25`
                    }}
                  >
                    View Certificate
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section" style={{ marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '3rem', 
            fontSize: '2.5rem', 
            color: 'var(--text-primary)',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          EXPERIENCE
        </motion.h2>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Work Experience */}
          <h3 style={{ color: '#00ffff', textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem' }}>Education</h3>
          <div style={{ marginBottom: '4rem' }}>
            {[
              {
                title: 'Bachelor of Technology',
                company: 'Parul University',
                period: '2024 - 2028',
                description: 'Pursuing Computer Science with focus on AI/ML, software development, and cloud technologies.',
                skills: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering','OOPJ']
              },
              {
                title: 'Higher Secondary Education',
                company: 'Rajasthan State Board',
                period: '2022 - 2024',
                description: 'Completed 12th grade with Science stream focusing on Mathematics, Physics, and Chemistry.',
                skills: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science']
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  marginBottom: '2rem',
                  padding: '2rem',
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 40, 0.9))',
                  border: '2px solid rgba(0, 255, 255, 0.3)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <h3 style={{ color: '#00ffff', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>{exp.title}</h3>
                    <h4 style={{ color: '#ff00ff', margin: '0', fontSize: '1.1rem' }}>{exp.company}</h4>
                  </div>
                  <span style={{ color: darkMode ? '#ffff00' : '#2563eb', fontSize: '0.9rem', fontWeight: 'bold' }}>{exp.period}</span>
                </div>
                <p style={{ color: darkMode ? 'rgba(255, 255, 255, 0.8)' : '#2d3748', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {exp.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="tech-tag"
                      style={{
                        background: 'rgba(0, 255, 255, 0.1)',
                        color: '#00ffff',
                        border: '1px solid rgba(0, 255, 255, 0.3)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Volunteer Experience */}
          <h3 style={{ color: '#00ff00', textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem' }}>Volunteer Experience</h3>
          <div style={{ marginBottom: '4rem' }}>
            {[
              {
                title: 'AWS Student Community Day Volunteer',
                company: 'AWS Student Community',
                period: 'Dec 2024',
                description: 'Assisted in organizing and managing logistics for AWS Student Community Day event in Parul University.',
                skills: ['Event Management', 'Team Coordination', 'Public Speaking', 'Leadership']
              },
            
            ].map((vol, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                style={{
                  marginBottom: '2rem',
                  padding: '2rem',
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 40, 0.9))',
                  border: '2px solid rgba(255, 255, 0, 0.3)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <div>
                    <h3 style={{ color: '#ffff00', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>{vol.title}</h3>
                    <h4 style={{ color: '#ff00ff', margin: '0', fontSize: '1.1rem' }}>{vol.company}</h4>
                  </div>
                  <span style={{ color: darkMode ? '#00ffff' : '#0891b2', fontSize: '0.9rem', fontWeight: 'bold' }}>{vol.period}</span>
                </div>
                <p style={{ color: darkMode ? 'rgba(255, 255, 255, 0.8)' : '#2d3748', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {vol.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {vol.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="tech-tag"
                      style={{
                        background: 'rgba(255, 255, 0, 0.1)',
                        color: '#ffff00',
                        border: '1px solid rgba(255, 255, 0, 0.3)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Events */}
          <h3 style={{ color: '#ff00ff', textAlign: 'center', marginBottom: '2rem', fontSize: '1.8rem' }}>Tech Events and Conferences Gallery</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {techEvents.map((event, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openGallery(index)}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 40, 0.9))',
                  border: '2px solid rgba(255, 0, 255, 0.3)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={event.images[0]}
                  alt={event.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderBottom: '2px solid rgba(255, 0, 255, 0.3)'
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h4 style={{ color: '#ff00ff', margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{event.name}</h4>
                  <p style={{ color: darkMode ? '#ffff00' : '#dc2626', margin: '0', fontSize: '0.9rem', fontWeight: 'bold' }}>{event.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" ref={contactRef} className="section" style={{ marginBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', position: 'relative', zIndex: 1 }}>
          <motion.h2 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              textAlign: 'center', 
              marginBottom: '3rem', 
              fontSize: '2.5rem', 
              color: 'var(--text-primary)',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
              background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            GET IN TOUCH
          </motion.h2>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '3rem', 
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem 2rem',
                background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 255, 255, 0.05))',
                border: '2px solid rgba(0, 255, 255, 0.3)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
              onClick={() => window.open('mailto:shankarsoni7172@gmail.com')}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: '2rem' }}
              >
                📧
              </motion.div>
              <div>
                <div style={{ color: '#00ffff', fontWeight: 'bold', fontSize: '0.9rem' }}>EMAIL</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem' }}>shankarsoni7172@gmail.com</div>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem 2rem',
                background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(255, 0, 255, 0.05))',
                border: '2px solid rgba(255, 0, 255, 0.3)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
              onClick={() => window.open('tel:+919571729060')}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: '2rem' }}
              >
                📱
              </motion.div>
              <div>
                <div style={{ color: '#ff00ff', fontWeight: 'bold', fontSize: '0.9rem' }}>PHONE</div>
                <div style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem' }}>+91 95717 29060</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="card" 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: '0 25px 50px rgba(0, 255, 255, 0.3), inset 0 0 30px rgba(255, 0, 255, 0.1)'
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(20, 20, 40, 0.9))',
              backdropFilter: 'blur(15px)',
              border: '2px solid rgba(0, 255, 255, 0.4)',
              boxShadow: '0 15px 35px rgba(0, 255, 255, 0.2)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Animated border effect */}
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1), transparent)',
                borderRadius: 'inherit',
                opacity: 0
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <div style={{ padding: '3rem', position: 'relative', zIndex: 1 }}>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="contact-form-heading"
                style={{ 
                  color: '#00ffff', 
                  marginBottom: '2rem', 
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                  letterSpacing: '2px'
                }}
              >
                <span className="cloud-emoji">💬 </span>SEND MESSAGE
              </motion.h3>
              
              <form 
                onSubmit={async (event) => {
                  event.preventDefault();
                  const formData = new FormData(event.target);
                  formData.append("access_key", "4d228710-ddc2-4950-9e39-3de26cc681b4");
                  
                  const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                  });
                  
                  const data = await response.json();
                  setFormResult(data.success ? "Message sent successfully! 🎉" : "Error sending message. Please try again.");
                  
                  if (data.success) {
                    event.target.reset();
                  }
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                <motion.input 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  type="text" 
                  name="name"
                  placeholder="🧑 Your Name"
                  required 
                  style={{
                    padding: '1.2rem',
                    background: 'rgba(0, 0, 0, 0.6)',
                    border: '2px solid rgba(0, 255, 255, 0.3)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(0, 255, 255, 0.8)';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 255, 255, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                
                <motion.input 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  type="email" 
                  name="email"
                  placeholder="📧 Your Email"
                  required 
                  style={{
                    padding: '1.2rem',
                    background: 'rgba(0, 0, 0, 0.6)',
                    border: '2px solid rgba(255, 0, 255, 0.3)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 0, 255, 0.8)';
                    e.target.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 0, 255, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                
                <motion.textarea 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  name="message"
                  placeholder="💭 Your Message" 
                  rows="6"
                  required
                  style={{
                    padding: '1.2rem',
                    background: 'rgba(0, 0, 0, 0.6)',
                    border: '2px solid rgba(255, 255, 0, 0.3)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: '1rem',
                    resize: 'vertical',
                    minHeight: '120px',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 0, 0.8)';
                    e.target.style.boxShadow = '0 0 20px rgba(255, 255, 0, 0.3)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 0, 0.3)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
                
                <motion.button 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  style={{
                    padding: '1.2rem 2rem',
                    background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
                    border: 'none',
                    borderRadius: '12px',
                    color: '#000',
                    fontFamily: 'Share Tech Mono, monospace',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    letterSpacing: '2px',
                    textShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  📤 SEND
                </motion.button>
                
                {formResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      textAlign: 'center',
                      padding: '1rem',
                      borderRadius: '8px',
                      background: formResult.includes('successfully') 
                        ? 'rgba(0, 255, 0, 0.1)' 
                        : 'rgba(255, 0, 0, 0.1)',
                      border: `1px solid ${formResult.includes('successfully') ? 'rgba(0, 255, 0, 0.3)' : 'rgba(255, 0, 0, 0.3)'}`,
                      color: formResult.includes('successfully') ? '#00ff00' : '#ff4444',
                      fontWeight: 'bold'
                    }}
                  >
                    {formResult}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
          
          {/* Social Media Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem', 
              marginTop: '3rem',
              flexWrap: 'wrap'
            }}
          >
            <motion.div 
              whileHover={{ 
                scale: 1.2, 
                y: -10,
                boxShadow: '0 0 30px rgba(0, 123, 181, 0.6)'
              }}
              animate={{ 
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open('https://linkedin.com/in/shankar-soni-82b246337/', '_blank')}
              style={{ 
                cursor: 'pointer',
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(0, 123, 181, 0.2), rgba(0, 123, 181, 0.1))',
                border: '2px solid rgba(0, 123, 181, 0.4)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#0077b5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.div>
            
            <motion.div 
              whileHover={{ 
                scale: 1.2, 
                y: -10,
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.6)'
              }}
              animate={{ 
                y: [0, -4, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open('https://github.com/Shankar-soni-2006', '_blank')}
              style={{ 
                cursor: 'pointer',
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill={darkMode ? "#ffffff" : "#24292e"}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.div>
            
            <motion.div 
              whileHover={{ 
                scale: 1.2, 
                y: -10,
                boxShadow: '0 0 30px rgba(225, 48, 108, 0.6)'
              }}
              animate={{ 
                x: [0, 4, -4, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open('https://instagram.com/dev.shankar2006', '_blank')}
              style={{ 
                cursor: 'pointer',
                padding: '1rem',
                background: 'linear-gradient(135deg, rgba(225, 48, 108, 0.2), rgba(225, 48, 108, 0.1))',
                border: '2px solid rgba(225, 48, 108, 0.4)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24">
                <defs>
                  <radialGradient id="instagramGradient" cx="0.5" cy="1" r="1">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
                <path fill="url(#instagramGradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.div>
            

          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(10px)'
          }}
          onClick={closeCertificate}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 40, 0.95))',
              border: '2px solid rgba(0, 255, 255, 0.5)',
              borderRadius: '20px',
              padding: '2rem',
              position: 'relative',
              backdropFilter: 'blur(15px)'
            }}
          >
            <h3 style={{
              color: '#00ffff',
              textAlign: 'center',
              marginBottom: '2rem',
              fontSize: '1.5rem'
            }}>
              {selectedCertificate.name}
            </h3>

            <div style={{ textAlign: 'center' }}>
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '500px',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  border: '2px solid rgba(255, 0, 255, 0.3)',
                  boxShadow: '0 0 30px rgba(0, 255, 255, 0.4)'
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Photo Gallery Modal */}
      {selectedEvent !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(10px)'
          }}
          onClick={closeGallery}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 40, 0.95))',
              border: '2px solid rgba(0, 255, 255, 0.5)',
              borderRadius: '20px',
              padding: '2rem',
              position: 'relative',
              backdropFilter: 'blur(15px)'
            }}
          >
            <button
              onClick={closeGallery}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(255, 0, 0, 0.8)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: 'white',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>

            <h3 style={{
              color: '#00ffff',
              textAlign: 'center',
              marginBottom: '1rem',
              fontSize: '1.5rem'
            }}>
              {techEvents[selectedEvent].name}
            </h3>
            <p style={{
              color: '#ffff00',
              textAlign: 'center',
              marginBottom: '2rem',
              fontSize: '1rem'
            }}>
              {techEvents[selectedEvent].date}
            </p>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                src={techEvents[selectedEvent].images[currentImageIndex]}
                alt={`${techEvents[selectedEvent].name} - Photo ${currentImageIndex + 1}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  border: '2px solid rgba(255, 0, 255, 0.3)',
                  boxShadow: '0 0 30px rgba(0, 255, 255, 0.4)'
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2rem',
              gap: '1rem'
            }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid rgba(0, 255, 255, 0.3)',
                  borderTop: '2px solid #00ffff',
                  borderRadius: '50%'
                }}
              />
              <span style={{
                color: '#ffffff',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
              }}>
                {currentImageIndex + 1} / {techEvents[selectedEvent].images.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Footer */}
      <footer style={{
        marginTop: '4rem',
        padding: '2rem 2rem',
        background: darkMode 
          ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 40, 0.95))'
          : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 240, 250, 0.9))',
        borderTop: darkMode 
          ? '2px solid rgba(0, 255, 255, 0.3)'
          : '2px solid rgba(74, 144, 226, 0.3)',
        backdropFilter: 'blur(15px)',
        position: 'relative'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          <motion.div
            style={{ marginBottom: '1.5rem' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 style={{
              fontSize: '2.2rem',
              marginBottom: '0.5rem',
              background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Orbitron, monospace',
              letterSpacing: '3px'
            }}>
              SHANKAR SONI
            </h2>
            <motion.p
              style={{
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: darkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(45, 55, 72, 0.8)',
                textAlign: 'center',
                marginBottom: '1rem',
                letterSpacing: '0.5px',
                fontFamily: 'Playfair Display, serif'
              }}
              animate={{
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              "Code is like humor. When you have to explain it, it's bad."
            </motion.p>
          </motion.div>
          
          <motion.h3
            style={{
              fontSize: '1.8rem',
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              fontFamily: 'Poppins, sans-serif'
            }}
            animate={{
              textShadow: [
                '0 0 15px rgba(0, 255, 255, 0.3)',
                '0 0 20px rgba(255, 0, 255, 0.4)',
                '0 0 15px rgba(0, 255, 255, 0.3)'
              ]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            Let's Build Something Amazing Together!
          </motion.h3>
          
          <p style={{
            color: darkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(45, 55, 72, 0.7)',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '1.5rem',
            fontFamily: 'Inter, sans-serif'
          }}>
            Ready to turn your ideas into reality? I'm always excited to collaborate on innovative projects and bring creative visions to life.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(45deg, #00ffff, #ff00ff)',
              padding: '1rem 2rem',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '1rem',
              color: '#000',
              textDecoration: 'none',
              boxShadow: '0 5px 20px rgba(0, 255, 255, 0.3)'
            }}
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            🚀 Start a Project With Me
          </motion.div>
          
          <div style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: darkMode 
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(45, 55, 72, 0.2)',
            color: darkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(45, 55, 72, 0.5)',
            fontSize: '0.9rem'
          }}>
            © 2025 Shankar Soni. Crafted with 💻, fueled by ☕, and driven by 🚀
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;