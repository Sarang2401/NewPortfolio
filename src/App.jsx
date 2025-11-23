import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import projectsData from './data/projects';
import './styles.css';
import { motion, useScroll } from 'framer-motion';

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Left side scroll progress bar */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          background: 'linear-gradient(180deg, #3b82f6, #8b5cf6, #ec4899)',
          transformOrigin: 'top',
          scaleY: scrollYProgress,
          zIndex: 9999
        }}
      />

      {/* Right side scroll progress bar */}
      <motion.div
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          background: 'linear-gradient(180deg, #ec4899, #8b5cf6, #3b82f6)',
          transformOrigin: 'top',
          scaleY: scrollYProgress,
          zIndex: 9999
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />

      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects</h2>

          {/* Display only the first 3 projects */}
          <div className="projects-grid">
            {projectsData.slice(0, 3).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="view-all-projects">
            <a
              href="https://github.com/Sarang2401"
              target="_blank"
              rel="noopener noreferrer"
              className="project-links"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      <Contact />

      <footer>
        <div className="container">
          <p>Made with 💻,☕ and ❤️ by Sarang Shigwan</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default App;