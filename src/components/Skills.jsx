import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Web Development',
      color: '#d4a853',
      skills: [
        { name: 'React.js', level: 'Advanced' },
        { name: 'Flask', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
      ]
    },
    {
      title: 'CyberSecurity',
      color: '#a07850',
      skills: [
        { name: 'OWASP', level: 'Advanced' },
        { name: 'Network Security', level: 'Advanced' },
        { name: 'IoT Security', level: 'Intermediate' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      color: '#8a7a6a',
      skills: [
        { name: 'AWS', level: 'Advanced' },
        { name: 'Docker', level: 'Advanced' },
        { name: 'Kubernetes', level: 'Intermediate' },
        { name: 'Jenkins', level: 'Intermediate' },
      ]
    },
    {
      title: 'Operating Systems',
      color: '#b89c70',
      skills: [
        { name: 'Linux', level: 'Advanced' },
        { name: 'Windows', level: 'Advanced' },
      ]
    },
    {
      title: 'Development Tools',
      color: '#c4a060',
      skills: [
        { name: 'Git', level: 'Expert' },
        { name: 'VS Code', level: 'Expert' },
        { name: 'Azure', level: 'Intermediate' },
      ]
    }
  ];

  const additionalSkills = [
    'MySQL', 'SaaS', 'InfoSec', 'Burp Suite', 'Nmap', 'IaC',
    'Java', 'Bash', 'CCNA', 'Vercel', 'Canva', 'Metasploit'
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return '#d4a853';
      case 'Advanced': return '#b89c70';
      case 'Intermediate': return '#a07850';
      default: return '#6b6864';
    }
  };

  const getLevelStars = (level) => {
    switch (level) {
      case 'Expert': return 5;
      case 'Advanced': return 4;
      case 'Intermediate': return 3;
      default: return 2;
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="skills" style={{ padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{
            textAlign: 'center',
            marginBottom: '0.75rem',
            fontFamily: "'DM Serif Display', serif"
          }}>
            My <span className="highlight">Skills</span>
          </h1>
          <p style={{
            textAlign: 'center',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            opacity: 0.7,
            marginBottom: 'clamp(2rem, 5vw, 3.5rem)',
            maxWidth: '550px',
            margin: '0 auto clamp(2rem, 5vw, 3.5rem)'
          }}>
            A comprehensive overview of my technical expertise across different domains.
          </p>
        </motion.div>

        {/* Main Skills Grid — using responsive CSS class */}
        <div className="skills-main-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.08, duration: 0.5 }}
              style={{
                background: `linear-gradient(135deg, ${category.color}10, ${category.color}05)`,
                border: `1px solid ${category.color}25`,
                borderRadius: '18px',
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '1.25rem',
                position: 'relative',
                zIndex: 1
              }}>
                <h3 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                  margin: 0,
                  color: category.color
                }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative', zIndex: 1 }}>
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.08 + index * 0.08 }}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 14px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <span style={{ fontWeight: '600', fontSize: 'clamp(0.85rem, 1.8vw, 1rem)' }}>
                      {skill.name}
                    </span>

                    {/* Star Rating + Level */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ display: 'flex', gap: '1px' }}>
                        {[...Array(5)].map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: categoryIndex * 0.08 + index * 0.08 + i * 0.04 }}
                            style={{
                              color: i < getLevelStars(skill.level) ? getLevelColor(skill.level) : '#2a2a35',
                              fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)'
                            }}
                          >
                            ★
                          </motion.span>
                        ))}
                      </div>
                      <span style={{
                        fontSize: 'clamp(0.65rem, 1.2vw, 0.75rem)',
                        fontWeight: '600',
                        color: getLevelColor(skill.level),
                        background: `${getLevelColor(skill.level)}18`,
                        padding: '3px 7px',
                        borderRadius: '5px',
                        whiteSpace: 'nowrap'
                      }}>
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: '2.5rem',
            background: 'linear-gradient(135deg, rgba(212, 168, 83, 0.06), rgba(160, 120, 80, 0.04))',
            border: '1px solid rgba(212, 168, 83, 0.15)',
            borderRadius: '18px',
            padding: 'clamp(1.25rem, 3vw, 2rem)',
            textAlign: 'center'
          }}
        >
          <h3 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            marginBottom: '1.25rem',
          }}>
            Additional Technologies & Tools
          </h3>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center'
          }}>
            {additionalSkills.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ scale: 1.05, y: -2 }}
                style={{
                  padding: '10px 18px',
                  background: 'rgba(212, 168, 83, 0.06)',
                  border: '1px solid rgba(212, 168, 83, 0.18)',
                  borderRadius: '25px',
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                  fontWeight: '600',
                  cursor: 'default',
                  color: '#d4a853',
                  minHeight: '40px',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;