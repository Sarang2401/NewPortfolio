import React, { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const containerRef = useRef(null);

  return (
    <div 
      ref={containerRef} 
      className="project-sticky-container"
      style={{
        position: 'sticky',
        top: `calc(15vh + ${index * 20}px)`, // Offsets each card slightly lower than the previous
        height: '80vh', // Take up most of the viewport
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5vh' // Space before the next card triggers
      }}
    >
      <motion.div
        className="project-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ 
          width: '100%',
          height: '100%',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 -20px 40px -20px rgba(0,0,0,0.8)' // Adds depth when cards stack over each other
        }}
      >
        <div className="project-panel-inner">
          
          <div className="project-panel-content">
            <div>
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-tagline">{project.tagline}</p>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="tech-stack" style={{ marginTop: 'auto', paddingTop: '2rem' }}>
              {project.tech.map((t, i) => (
                <span key={i} className="tech-pill">{t}</span>
              ))}
            </div>

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link magnetic-wrap"
                style={{ marginTop: '2rem' }}
              >
                <Github size={18} /> View Source <ArrowRight size={18} />
              </a>
            )}
          </div>

          <div className="project-panel-image">
            <img src={project.image} alt={project.name} loading="lazy" />
            <div className="project-image-overlay"></div>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;