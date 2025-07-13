import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import projectsData from './data/projects';
import './styles.css';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <motion.div
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <footer>
        <div className="container">
          <p>Made with ❤️ 💻 and ☕ by Sarang Shigwan</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default App;
