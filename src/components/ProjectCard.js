import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index, isFlipped, onFlip }) {

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      style={{
        perspective: '1000px',
        width: '300px',
        height: '400px',
        margin: '1rem'
      }}
    >
      <motion.div
        className="card-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          cursor: 'pointer'
        }}
        onClick={onFlip}
      >
        <div
          className="card-front"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(135deg, var(--card-bg), rgba(0,0,0,0.8))',
            border: '2px solid var(--border)',
            borderRadius: '15px',
            padding: '0',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          <div className="project-header">
            <div className="project-status">
              <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
          </div>
          <div className="project-content">
            <div className="project-category">{project.category}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-preview">
              {project.technologies.slice(0, 2).map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
              {project.technologies.length > 2 && (
                <span className="tech-more">+{project.technologies.length - 2}</span>
              )}
            </div>
          </div>
        </div>
        
        <div
          className="card-back"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #ffffff, #f8f9fa)',
            border: '2px solid var(--text-secondary)',
            borderRadius: '15px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'var(--bg-primary)'
          }}
        >
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Tech Stack</h4>
            <div className="tech-grid">
              {project.technologies.map((tech, i) => (
                <div key={i} className="tech-item">
                  <span className="tech-bullet">•</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
            <div className="project-features">
              <h5>Key Features:</h5>
              <ul>
                {project.features?.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn-secondary" onClick={(e) => { e.stopPropagation(); window.open(project.demoLink, '_blank'); }}>
              Live Demo
            </button>
            <button className="btn-primary" onClick={(e) => { e.stopPropagation(); window.open(project.codeLink, '_blank'); }}>
              View Code
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}