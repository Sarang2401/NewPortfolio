import React, { useState } from 'react';
import projectsData from '../data/projects';
import ProjectCard from './ProjectCard';
import TypewriterLabel from './TypewriterLabel';
import RevealHeading from './RevealHeading';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header projects-header-anim">
          <TypewriterLabel className="section-label">Selected Work</TypewriterLabel>
          <RevealHeading className="section-title">
            Engineering Systems That Scale
          </RevealHeading>
        </div>
      </div>

      {/* Full-width accordion - no container constraint */}
      <div className="projects-accordion-wrap">
        <div className="projects-accordion">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
