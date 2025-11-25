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
      icon: '🌐',
      color: '#3b82f6',
      skills: [
        { name: 'React.js', level: 'Advanced' },
        { name: 'Flask', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
      ]
    },
    {
      title: 'CyberSecurity',
      icon: '🔐',
      color: '#8b5cf6',
      skills: [
        { name: 'OWASP', level: 'Advanced' },
        { name: 'Network Security', level: 'Advanced' },
        { name: 'IoT Security', level: 'Intermediate' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      color: '#10b981',
      skills: [
        { name: 'AWS', level: 'Advanced' },
        { name: 'Docker', level: 'Advanced' },
        { name: 'Kubernetes', level: 'Intermediate' },
        { name: 'Jenkins', level: 'Intermediate' },
      ]
    },
    {
      title: 'Operating Systems',
      icon: '💻',
      color: '#f59e0b',
      skills: [
        { name: 'Linux', level: 'Advanced' },
        { name: 'Windows', level: 'Advanced' },
      ]
    },
    {
      title: 'Development Tools',
      icon: '🛠️',
      color: '#ec4899',
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
    switch(level) {
      case 'Expert': return '#10b981';
      case 'Advanced': return '#3b82f6';
      case 'Intermediate': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getLevelStars = (level) => {
    switch(level) {
      case 'Expert': return 5;
      case 'Advanced': return 4;
      case 'Intermediate': return 3;
      default: return 2;
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="skills" style={{ padding: '80px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>
            My <span className="highlight">Skills</span>
          </h1>
          <p style={{ 
            textAlign: 'center', 
            fontSize: '1.1rem', 
            opacity: 0.8, 
            marginBottom: '60px', 
            maxWidth: '600px', 
            margin: '0 auto 60px' 
          }}>
            A comprehensive overview of my technical expertise across different domains.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '60px'
        }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.05))',
                border: `2px solid ${category.color}40`,
                borderRadius: '20px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background decoration */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.05, 0.1, 0.05]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-20%',
                  width: '200px',
                  height: '200px',
                  background: `radial-gradient(circle, ${category.color}40, transparent)`,
                  pointerEvents: 'none'
                }}
              />

              {/* Category Header */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1
              }}>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ fontSize: '2rem' }}
                >
                  {category.icon}
                </motion.div>
                <h3 style={{ 
                  fontSize: '1.4rem', 
                  fontWeight: '700',
                  margin: 0,
                  color: category.color
                }}>
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 1 }}>
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <span style={{ fontWeight: '600', fontSize: '1rem' }}>
                      {skill.name}
                    </span>
                    
                    {/* Star Rating */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ display: 'flex', gap: '2px' }}>
                        {[...Array(5)].map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: categoryIndex * 0.1 + index * 0.1 + i * 0.05 }}
                            style={{
                              color: i < getLevelStars(skill.level) ? getLevelColor(skill.level) : '#374151',
                              fontSize: '1rem'
                            }}
                          >
                            ★
                          </motion.span>
                        ))}
                      </div>
                      <span style={{ 
                        fontSize: '0.8rem', 
                        fontWeight: '600',
                        color: getLevelColor(skill.level),
                        background: `${getLevelColor(skill.level)}20`,
                        padding: '4px 8px',
                        borderRadius: '6px'
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center'
          }}
        >
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <span>🚀</span>
            Additional Technologies & Tools
          </h3>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '12px',
            justifyContent: 'center'
          }}>
            {additionalSkills.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                style={{
                  padding: '12px 20px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '2px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '25px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)'
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