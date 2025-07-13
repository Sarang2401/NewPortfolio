import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-links">
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
        {project.githubLink && (
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;