import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import projectsData from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const containerRef = useRef(null);

  return (
    <section id="projects" className="projects-section" ref={containerRef} style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">
            Engineering <span className="gradient-text-accent">Systems</span> That Scale
          </h2>
        </motion.div>

        <div className="projects-stack-container" style={{ marginTop: '4rem', paddingBottom: '10vh' }}>
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
