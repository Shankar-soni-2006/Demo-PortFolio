import { motion } from 'framer-motion';

export default function Profile({ inView }) {
  return (
    <motion.div
      className="profile-section"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="profile-card">
        <div className="profile-image">
          <div className="avatar">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
              alt="Shankar Soni" 
              className="profile-image"
            />
          </div>
          <div className="status-indicator"></div>
        </div>
        
        <div className="profile-info">
          <h2>Shankar Soni</h2>
          <p className="title">AI/ML Developer</p>
          
          <div className="profile-stats">
            <div className="stat">
              <span className="number">50+</span>
              <span className="label">Projects</span>
            </div>
            <div className="stat">
              <span className="number">3+</span>
              <span className="label">Years Exp</span>
            </div>
            <div className="stat">
              <span className="number">100+</span>
              <span className="label">Clients</span>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/Shankar-soni-2006" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://linkedin.com/in/shankar-soni-82b246337/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
          </div>
          

        </div>
      </div>
    </motion.div>
  );
}