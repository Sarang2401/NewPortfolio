import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HoneycombGallery from './HoneycombGallery';

/* ─── Three core-stack categories ───────────────────────────── */
const categories = [
  {
    id: 'python',
    title: 'Python Backend',
    description:
      'Building robust, production-grade backends using FastAPI and Django. Specializing in low-latency REST APIs, complex relational schemas, and clean service boundaries that scale.',
    skills: ['FastAPI', 'Django', 'PostgreSQL', 'MySQL', 'REST APIs', 'System Architecture'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'cloud',
    title: 'Cloud / DevOps',
    description:
      'Designing and deploying secure, scalable infrastructure on AWS. From zero-touch CI/CD pipelines to containerized microservices and real-time observability with Prometheus and Grafana.',
    skills: ['AWS (EC2, Lambda)', 'Docker & K8s', 'Prometheus / Grafana', 'GitHub Actions', 'Terraform'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'ai',
    title: 'AI',
    description:
      'Building semantic search, vector intelligence pipelines, and LLM-powered workflows that solve real engineering problems — deployed as FastAPI microservices on serverless infrastructure.',
    skills: ['Sentence-Transformers', 'Semantic Search', 'LLM APIs', 'Vector DBs', 'FastAPI Inference'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
  },
];

/* ─── Main Skills component ───────────────────────────────────── */
const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Core Competencies</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        {/* ── Dome Gallery ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HoneycombGallery />
        </motion.div>

        {/* ── Core Stack Accordion ── */}
        <div className="skills-split-layout" style={{ marginTop: '3rem' }}>

          {/* Left: Sticky image */}
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
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                />
              </AnimatePresence>
              <div className="image-overlay" />
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="skills-accordion-col">
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
                            <div
                              className="tech-stack"
                              style={{ marginTop: '1.5rem', marginBottom: '1rem' }}
                            >
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