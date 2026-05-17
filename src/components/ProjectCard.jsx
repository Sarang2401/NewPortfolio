import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="project-sticky-container"
      style={{
        position: 'sticky',
        top: `calc(10vh + ${index * 24}px)`,
        height: '82vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '4vh',
        zIndex: index + 1,
      }}
    >
      <motion.div
        className="project-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          width: '100%',
          height: '100%',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 -20px 40px -20px rgba(0,0,0,0.8)',
        }}
      >
        <div className="project-panel-inner">

          {/* ── Content side ── */}
          <div className="project-panel-content">
            <div>
              {/* Outcome badge — proof of impact */}
              {project.outcomes?.[0] && (
                <div className="outcome-badge">
                  <span className="outcome-check">✓</span>
                  {project.outcomes[0]}
                </div>
              )}

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

            {/* GitHub CTA */}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-btn"
              >
                <Github size={15} />
                View on GitHub
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>

          {/* ── Image side ── */}
          <div className="project-panel-image">
            <img src={project.image} alt={project.name} loading="lazy" />
            <div className="project-image-overlay" />
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;