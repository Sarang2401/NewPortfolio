import React, { useRef } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index, isActive, onClick }) => {
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className={`acc-card ${isActive ? 'acc-card--active' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`View project: ${project.name}`}
    >
      {/* Background image always present */}
      <div className="acc-card-bg">
        <img src={project.image} alt={project.name} loading="lazy" decoding="async" />
        <div className="acc-card-bg-overlay" />
      </div>

      {/* ── COLLAPSED state: vertical title ── */}
      <div className="acc-card-collapsed">
        <span className="acc-card-idx">0{index + 1}</span>
        <span className="acc-card-vtitle">{project.name}</span>
        <span className="acc-card-vcat">{project.category}</span>
      </div>

      {/* ── EXPANDED state: full content at bottom ── */}
      <div className="acc-card-expanded">
        {/* Top meta */}
        <div className="acc-expanded-top">
          <span className="acc-expanded-idx">0{index + 1}</span>
          <span className="acc-expanded-cat">{project.category}</span>
        </div>

        {/* Bottom content */}
        <div className="acc-expanded-bottom">
          <h3 className="acc-expanded-title">{project.name}</h3>
          <p className="acc-expanded-tagline">{project.tagline}</p>
          <p className="acc-expanded-desc">{project.description}</p>

          {/* Tech pills */}
          <div className="acc-tech-stack">
            {project.tech.slice(0, 4).map((t, i) => (
              <span key={i} className="acc-tech-pill">{t}</span>
            ))}
          </div>

          {/* CTA row */}
          <div className="acc-ctas">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="acc-cta-link"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={14} />
                View on GitHub
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="acc-cta-link acc-cta-link--primary"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;