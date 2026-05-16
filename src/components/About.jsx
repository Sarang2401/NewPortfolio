import React from 'react';
import { motion } from 'framer-motion';

// Split text utility for animation
const SplitText = ({ text }) => {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              ease: [0.25, 1, 0.5, 1],
              delay: i * 0.02
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </>
  );
};

const About = () => {
  const timeline = [
    {
      year: '2025',
      title: 'Backend Engineer Intern',
      company: 'EvolvingX Pvt. Ltd.',
      description: 'Developed a full-stack web application (React + Django) with REST APIs. Deployed production systems on AWS EC2 and optimized backend efficiency.'
    },
    {
      year: '2023',
      title: 'IoT & Automation Lead',
      company: 'Team Achilles',
      description: 'Spearheaded the development of ML-enhanced vehicle automation subsystems, achieving 60% performance optimization in real-time data processing.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Background</span>
          <h2 className="section-title">
            Engineer by Trade.<br />
            <span className="gradient-text">Problem Solver by Nature.</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <div>
            <div className="about-text">
              <p>
                <SplitText text="I'm an AI Full-Stack Engineer focused on building intelligent, scalable systems that solve complex real-world problems. My expertise lies in designing robust Python backends (FastAPI/Django), deploying cloud-native architectures on AWS, and integrating Generative AI into enterprise workflows." />
              </p>
              <p>
                <SplitText text="Whether it's building RAG pipelines, optimizing vector search embeddings, or designing zero-touch CI/CD deployments, I prioritize reliability and automation. I build systems that don't just work, they scale." />
              </p>
            </div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="stat-item">
                <div className="stat-value">10<span>+</span></div>
                <div className="stat-label">High-Impact Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100<span>%</span></div>
                <div className="stat-label">Automation Focus</div>
              </div>
            </motion.div>
          </div>

          <div className="timeline">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Experience</h3>
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className="timeline-item"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="timeline-year">{item.year}</div>
                <h4 className="timeline-title">{item.title}</h4>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-desc">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;