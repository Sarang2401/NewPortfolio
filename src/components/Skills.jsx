import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, ShieldCheck, Layout } from 'lucide-react';

const techCategories = [
  {
    title: 'Backend & Systems',
    icon: <Server size={18} />,
    skills: ['Python', 'FastAPI', 'Django', 'Go', 'Java', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud size={18} />,
    skills: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Linux']
  },
  {
    title: 'DevOps & Security',
    icon: <ShieldCheck size={18} />,
    skills: ['GitHub Actions', 'CI/CD', 'Prometheus', 'Grafana', 'Ansible', 'Nginx', 'Cybersecurity', 'OWASP']
  },
  {
    title: 'Frontend & Architecture',
    icon: <Layout size={18} />,
    skills: ['React', 'TypeScript', 'System Design']
  }
];

const Skills = () => {
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

        {/* Bento Grid Layout */}
        <div className="bento-grid">
          {techCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              className="bento-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="bento-card-header">
                <div className="bento-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="bento-card-title">{category.title}</h3>
              </div>
              <div className="bento-skills-list">
                {category.skills.map(skill => (
                  <span key={skill} className="bento-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;