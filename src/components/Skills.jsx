import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  {
    id: 'mlai',
    title: 'ML & Intelligent Systems',
    description: 'Integrating machine learning models into production systems. Building semantic search, document intelligence, and LLM-powered workflows that solve real engineering problems.',
    skills: ['Sentence-Transformers', 'Semantic Search', 'LLM APIs', 'FastAPI Inference'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Designing and deploying scalable, secure infrastructure on AWS. From zero-touch CI/CD pipelines to containerized microservices and real-time observability.',
    skills: ['AWS (EC2, Lambda)', 'Docker & K8s', 'Prometheus/Grafana', 'GitHub Actions'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'software',
    title: 'Software Engineering',
    description: 'Building robust Python backends and full-stack systems end-to-end. Specializing in low-latency APIs, clean service boundaries, and dynamic React frontends.',
    skills: ['Python (FastAPI/Django)', 'React Ecosystem', 'PostgreSQL', 'System Architecture'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop'
  }
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        <div className="skills-split-layout">
          
          {/* Left Column: Sticky Image Container */}
          <div className="skills-visual-col">
            <div className="sticky-image-container">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={categories[activeIndex].image}
                  alt={categories[activeIndex].title}
                  className="skills-image"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="image-overlay"></div>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="skills-accordion-col">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '2rem' }}
            >
              <span className="section-label">Core Competencies</span>
              <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)' }}>
                Technical <br/><span className="gradient-text">Arsenal</span>
              </h2>
            </motion.div>

            <div className="accordion-list">
              {categories.map((cat, index) => {
                const isActive = activeIndex === index;

                return (
                  <div 
                    key={cat.id} 
                    className={`accordion-item ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div className="accordion-header">
                      <span className="accordion-number">0{index + 1}</span>
                      <h3 className="accordion-title">{cat.title}</h3>
                      <div className="accordion-icon">
                        <motion.span 
                          animate={{ rotate: isActive ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ display: 'inline-block' }}
                        >
                          +
                        </motion.span>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="accordion-content-wrapper"
                        >
                          <div className="accordion-content">
                            <p className="accordion-desc">{cat.description}</p>
                            <div className="tech-stack" style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                              {cat.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="tech-pill">{skill}</span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;