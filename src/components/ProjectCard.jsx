import React, { useRef } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          once: true
        }
      }
    );
  }, []);

  return (
    <div
      className="project-sticky-container"
      style={{
        top: `calc(80px + ${index * 28}px)`,
        zIndex: index + 1,
      }}
    >
      <div className="project-panel" ref={cardRef}>
        <div className="project-panel-inner">

          {/* ── Content side ── */}
          <div className="project-panel-content">

            {/* Top meta row */}
            <div className="project-meta-row">
              <span className="project-index">0{index + 1}</span>
              <span className="project-category">{project.category}</span>
            </div>

            {/* Title */}
            <h3 className="project-title">{project.name}</h3>

            {/* Impact statement */}
            <p className="project-tagline">{project.tagline}</p>

            {/* Description */}
            <p className="project-desc">{project.description}</p>

            {/* Key outcomes */}
            {project.outcomes && project.outcomes.length > 0 && (
              <div className="project-outcomes">
                {project.outcomes.map((o, i) => (
                  <div key={i} className="project-outcome-item">
                    <span className="project-outcome-check">✓</span>
                    <span>{o}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech pills */}
            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-pill">{t}</span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="project-ctas">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-cta-btn project-cta-btn--ghost"
                >
                  <Github size={14} />
                  GitHub
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-cta-btn project-cta-btn--primary"
                >
                  Live Demo
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>

          </div>

          {/* ── Image side ── */}
          <div className="project-panel-image">
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              decoding="async"
            />
            <div className="project-image-overlay" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;