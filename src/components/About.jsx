import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ to, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [value, setValueState] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = Date.now();
    const tick = () => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValueState(Math.round(eased * to));
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

const timeline = [
  {
    year: '2025',
    title: 'Backend Engineer Intern',
    company: 'EvolvingX Pvt. Ltd.',
    description:
      'Developed a full-stack web application (React + Django) with REST APIs. Deployed production systems on AWS EC2 and optimized backend efficiency through architectural improvements.',
  },
  {
    year: '2023',
    title: 'IoT & Automation Lead',
    company: 'Team Achilles',
    description:
      'Spearheaded the development of ML-enhanced vehicle automation subsystems, achieving 60% performance optimization in real-time data processing pipelines.',
  },
];

const stats = [
  { to: 10, suffix: '+', label: 'Projects Shipped' },
  { to: 2, suffix: '+', label: 'Years Experience' },
  { to: 1, suffix: '', label: 'IEEE Publication' },
];

export default function About() {
  return (
    <section id="about" className="experience-section">
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
            <span className="gradient-text">Builder by Nature.</span>
          </h2>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="experience-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((s) => (
            <div className="experience-stat" key={s.label}>
              <div className="stat-value">
                <AnimatedCounter to={s.to} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="experience-timeline">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className="experience-item"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="experience-year-col">
                <span className="experience-year">{item.year}</span>
              </div>
              <div className="experience-connector">
                <div className="experience-dot" />
                <div className="experience-line" />
              </div>
              <div className="experience-content">
                <h4 className="experience-role">{item.title}</h4>
                <p className="experience-company">{item.company}</p>
                <p className="experience-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}