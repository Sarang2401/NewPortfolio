import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, Code, Laptop, Briefcase, Zap } from 'lucide-react';

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineData = [
    {
      year: '2025',
      title: 'Backend Intern (AWS)',
      company: 'EvolvingX Pvt. Ltd.',
      location: 'Remote',
      description: 'Built scalable cloud applications using React.js and Django, bridging students and colleges with modern tech solutions.',
      achievements: [
        'First-of-its-kind student-college platform',
        'Modern responsive UI/UX implementation',
        'Cloud-native AWS deployments'
      ],
      type: 'internship',
      color: '#d4a853'
    },
    {
      year: '2024',
      title: 'Cybersecurity Intern',
      company: 'Cisco Virtual Internship',
      location: 'Virtual',
      description: 'Designed secure network architectures and conducted vulnerability assessments to strengthen cybersecurity posture.',
      achievements: [
        'Built full-scale college network replica',
        'Implemented routing protocols',
        'Performed security assessments'
      ],
      type: 'Intern',
      color: '#a07850'
    },
    {
      year: '2023',
      title: 'IoT and Automation',
      company: 'Team Achilles',
      location: 'Pune, India',
      description: 'Contributed to automotive IoT projects with ML-enhanced automation systems.',
      achievements: [
        'Developed vehicle automation subsystems',
        '60% performance optimization',
        'ML integration for smart systems'
      ],
      type: 'Student Club',
      color: '#8a7a6a'
    },
  ];

  const stats = [
    { label: 'Projects', value: '10+', color: '#d4a853' },
    { label: 'Blog Posts', value: '25+', color: '#a07850' },
    { label: 'CTFs Solved', value: '100+', color: '#8a7a6a' },
    { label: 'Experience', value: '1 Yr', color: '#d4a853' }
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="about"
    >
      {/* Subtle animated background */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 90, 0],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(800px, 90vw)',
          height: 'min(800px, 90vw)',
          background: 'radial-gradient(circle, rgba(212, 168, 83, 0.12), transparent)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 style={{ marginBottom: '0.75rem', fontFamily: "'DM Serif Display', serif" }}>About Me</h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
            SaaS Developer passionate about <span className="highlight">Cloud, Security & Innovation</span>
          </p>
        </motion.div>

        {/* Quick Stats — using responsive CSS class */}
        <div className="stats-grid-responsive" style={{ marginBottom: '3rem' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.03, y: -3 }}
              style={{
                background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}08)`,
                padding: '1.25rem',
                borderRadius: '14px',
                border: `1px solid ${stat.color}30`,
                textAlign: 'center',
                cursor: 'default'
              }}
            >
              <h3 style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                margin: '0 0 0.25rem 0',
                color: stat.color
              }}>
                {stat.value}
              </h3>
              <p style={{ opacity: 0.7, fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', margin: 0 }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Two Column Layout — using responsive CSS class */}
        <div className="about-two-col" style={{ marginBottom: '3rem' }}>
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, rgba(212, 168, 83, 0.06), rgba(160, 120, 80, 0.03))',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              borderRadius: '18px',
              border: '1px solid rgba(212, 168, 83, 0.15)',
              position: 'relative'
            }}
          >
            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ marginBottom: '1.5rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                  <Briefcase size={20} style={{ color: '#d4a853' }} />
                  <h3 style={{ margin: 0, fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontFamily: "'DM Serif Display', serif" }}>Who I Am</h3>
                </div>
                <p style={{ lineHeight: '1.8', opacity: 0.85, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                  A dedicated <span className="highlight">SaaS Developer</span> who builds secure, scalable solutions at the intersection of cloud and security.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ marginBottom: '1.5rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
                  <Zap size={20} style={{ color: '#d4a853' }} />
                  <h3 style={{ margin: 0, fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontFamily: "'DM Serif Display', serif" }}>What I Do</h3>
                </div>
                <p style={{ lineHeight: '1.8', opacity: 0.85, fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                  Specialize in Cloud Computing, CyberSecurity, and DevOps. I thrive in collaborative environments and mentor developers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Cloud Security', 'DevSecOps', 'CTF Expert', 'Tech Writer'].map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      style={{
                        padding: '8px 16px',
                        background: 'rgba(212, 168, 83, 0.1)',
                        border: '1px solid rgba(212, 168, 83, 0.2)',
                        borderRadius: '20px',
                        fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
                        fontWeight: '600',
                        color: '#d4a853',
                        minHeight: '36px',
                        display: 'inline-flex',
                        alignItems: 'center'
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Timeline Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)'
            }}>
              <Award size={20} style={{ color: '#d4a853' }} />
              Journey Timeline
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {timelineData.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTimeline(index)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  style={{
                    padding: 'clamp(1rem, 2vw, 1.5rem)',
                    borderRadius: '14px',
                    border: `1px solid ${activeTimeline === index ? item.color : 'rgba(212, 168, 83, 0.12)'}`,
                    background: activeTimeline === index
                      ? `linear-gradient(135deg, ${item.color}15, ${item.color}08)`
                      : 'rgba(212, 168, 83, 0.03)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    color: 'inherit',
                    fontFamily: 'inherit',
                    minHeight: '44px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                        <span style={{
                          fontFamily: "'DM Serif Display', serif",
                          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                          color: item.color
                        }}>
                          {item.year}
                        </span>
                        <span style={{
                          fontSize: '0.7rem',
                          padding: '3px 8px',
                          background: `${item.color}25`,
                          borderRadius: '6px',
                          fontWeight: '600',
                          color: '#e8e4dc'
                        }}>
                          {item.type}
                        </span>
                      </div>
                      <h4 style={{ margin: '0 0 0.15rem 0', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: '#e8e4dc' }}>{item.title}</h4>
                      <p style={{ margin: 0, fontSize: 'clamp(0.8rem, 1.5vw, 0.85rem)', opacity: 0.7, color: '#e8e4dc' }}>{item.company}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Expanded Timeline Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTimeline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              borderRadius: '18px',
              border: `1px solid ${timelineData[activeTimeline].color}`,
              background: `linear-gradient(135deg, ${timelineData[activeTimeline].color}10, ${timelineData[activeTimeline].color}05)`,
            }}
          >
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  marginBottom: '0.75rem'
                }}>
                  {timelineData[activeTimeline].title}
                </h3>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  opacity: 0.7,
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Award size={14} />
                    {timelineData[activeTimeline].company}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={14} />
                    {timelineData[activeTimeline].location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={14} />
                    {timelineData[activeTimeline].year}
                  </span>
                </div>
              </div>

              <p style={{
                lineHeight: '1.8',
                marginBottom: '1.25rem',
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                opacity: 0.85
              }}>
                {timelineData[activeTimeline].description}
              </p>

              <div>
                <h4 style={{
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  fontFamily: "'DM Serif Display', serif"
                }}>
                  <Code size={18} /> Key Achievements
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {timelineData[activeTimeline].achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      style={{
                        padding: '10px 14px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '10px',
                        borderLeft: `2px solid ${timelineData[activeTimeline].color}`,
                        fontSize: 'clamp(0.85rem, 1.5vw, 0.95rem)'
                      }}
                    >
                      ✓ {achievement}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default About;