import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

/* ── Animated counter that counts up on scroll ── */
const AnimatedCounter = ({ to, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = Date.now();
    const tick = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {value}
      <span style={{ color: 'var(--accent)' }}>{suffix}</span>
    </span>
  );
};

const About = () => {
  const timeline = [
    {
      year: '2025',
      title: 'Backend Engineer Intern',
      company: 'EvolvingX Pvt. Ltd.',
      description:
        'Developed a full-stack web application (React + Django) with REST APIs. Deployed production systems on AWS EC2 and optimized backend efficiency.',
    },
    {
      year: '2023',
      title: 'IoT & Automation Lead',
      company: 'Team Achilles',
      description:
        'Spearheaded the development of ML-enhanced vehicle automation subsystems, achieving 60% performance optimization in real-time data processing.',
    },
  ];

  const stats = [
    { to: 10, suffix: '+', label: 'Projects Built' },
    { to: 100, suffix: '%', label: 'Automation Focus' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
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
              {/* Personality hook */}
              <motion.p
                className="about-hook"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
              >
                I got into AI engineering because I wanted to build things that
                actually <em>think</em>, not just CRUD apps that shuffle data around.
                If a system can be intelligent, why shouldn't it be?
              </motion.p>

              <p>
                I'm an AI Full-Stack Engineer focused on building intelligent, scalable
                systems that solve complex real-world problems. My expertise lies in
                designing robust Python backends (FastAPI/Django), deploying cloud-native
                architectures on AWS, and integrating Generative AI into enterprise workflows.
              </p>
              <p>
                Whether it's building RAG pipelines, optimizing vector search embeddings,
                or designing zero-touch CI/CD deployments, I prioritize reliability and
                automation. I build systems that don't just work. They scale.
              </p>
            </div>

            {/* Animated stat counters */}
            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {stats.map((s) => (
                <div className="stat-item" key={s.label}>
                  <div className="stat-value">
                    <AnimatedCounter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="timeline">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Experience</h3>
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className="timeline-item"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
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