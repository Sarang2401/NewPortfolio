import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, Code, Laptop, Briefcase, Zap } from 'lucide-react';

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineData = [
    {
      year: '2025',
      title: 'Backend Intern(AWS)',
      company: 'EvolvingX Pvt. Ltd.',
      location: 'Remote',
      description: 'Built scalable cloud applications using React.js and Django, bridging students and colleges with modern tech solutions.',
      achievements: [
        'First-of-its-kind student-college platform',
        'Modern responsive UI/UX implementation',
        'Cloud-native AWS deployments'
      ],
      type: 'internship',
      color: '#3b82f6',
      icon: '☁️'
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
      color: '#8b5cf6',
      icon: '🛡️'
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
      color: '#10b981',
      icon: '🤖'
    },
  ];

  const stats = [
    { label: 'Projects', value: '10+', icon: '🚀', color: '#3b82f6' },
    { label: 'Blog Posts', value: '25+', icon: '✍️', color: '#8b5cf6' },
    { label: 'CTFs Solved', value: '100+', icon: '🔐', color: '#10b981' },
    { label: 'Experience', value: '1 Yr', icon: '⭐', color: '#f59e0b' }
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="about"
      style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h1 style={{ marginBottom: '1rem' }}>About Me</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>
            SaaS Developer passionate about <span className="highlight">Cloud, Security & Innovation</span>
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '60px'
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
                padding: '1.5rem',
                borderRadius: '16px',
                border: `2px solid ${stat.color}40`,
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}
              >
                {stat.icon}
              </motion.div>
              <h3 style={{ fontSize: '2rem', margin: '0.5rem 0', color: stat.color }}>{stat.value}</h3>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '3rem',
          marginBottom: '60px',
          alignItems: 'start'
        }}>
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.05))',
              padding: '2.5rem',
              borderRadius: '20px',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              position: 'relative'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.05, scale: 1 }}
              transition={{ duration: 1 }}
              style={{
                position: 'absolute',
                right: '-10%',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none'
              }}
            >
              <Laptop size={250} style={{ color: '#3b82f6' }} />
            </motion.div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ marginBottom: '1.5rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <Briefcase size={24} style={{ color: '#3b82f6' }} />
                  <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Who I Am</h3>
                </div>
                <p style={{ lineHeight: '1.8', opacity: 0.9 }}>
                  A dedicated <span className="highlight">SaaS Developer</span> who builds secure, scalable solutions at the intersection of cloud and security.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ marginBottom: '1.5rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <Zap size={24} style={{ color: '#f59e0b' }} />
                  <h3 style={{ margin: 0, fontSize: '1.5rem' }}>What I Do</h3>
                </div>
                <p style={{ lineHeight: '1.8', opacity: 0.9 }}>
                  Specialize in Cloud Computing, CyberSecurity, and DevOps. I thrive in collaborative environments and mentor developers.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
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
                      whileHover={{ scale: 1.1, y: -2 }}
                      style={{
                        padding: '8px 16px',
                        background: 'rgba(59, 130, 246, 0.2)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer'
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Award size={24} style={{ color: '#10b981' }} />
              Journey Timeline
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {timelineData.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTimeline(index)}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: '1.5rem',
                    borderRadius: '16px',
                    border: `2px solid ${activeTimeline === index ? item.color : 'rgba(59, 130, 246, 0.2)'}`,
                    background: activeTimeline === index 
                      ? `linear-gradient(135deg, ${item.color}20, ${item.color}10)` 
                      : 'rgba(59, 130, 246, 0.05)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 1 }}>
                    <motion.div
                      animate={activeTimeline === index ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                      style={{ fontSize: '2.5rem' }}
                    >
                      {item.icon}
                    </motion.div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
                        <span style={{ 
                          fontSize: '1.2rem', 
                          fontWeight: 'bold',
                          color: item.color 
                        }}>
                          {item.year}
                        </span>
                        <span style={{ 
                          fontSize: '0.75rem', 
                          padding: '4px 8px',
                          background: `${item.color}30`,
                          borderRadius: '8px',
                          fontWeight: '600'
                        }}>
                          {item.type}
                        </span>
                      </div>
                      <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem', color: '#fff' }}>{item.title}</h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9, color: '#fff' }}>{item.company}</p>
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            style={{
              padding: '2.5rem',
              borderRadius: '20px',
              border: `2px solid ${timelineData[activeTimeline].color}`,
              background: `linear-gradient(135deg, ${timelineData[activeTimeline].color}15, ${timelineData[activeTimeline].color}05)`,
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'start', gap: '2rem' }}>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: '4rem' }}
              >
                {timelineData[activeTimeline].icon}
              </motion.div>
              
              <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                    {timelineData[activeTimeline].title}
                  </h3>
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', opacity: 0.8, fontSize: '0.95rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Award size={16} />
                      {timelineData[activeTimeline].company}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={16} />
                      {timelineData[activeTimeline].location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={16} />
                      {timelineData[activeTimeline].year}
                    </span>
                  </div>
                </div>
                
                <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  {timelineData[activeTimeline].description}
                </p>
                
                <div>
                  <h4 style={{ 
                    marginBottom: '1rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    fontSize: '1.1rem'
                  }}>
                    <Code size={20} /> Key Achievements
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {timelineData[activeTimeline].achievements.map((achievement, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        style={{
                          padding: '12px 16px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: '10px',
                          borderLeft: `3px solid ${timelineData[activeTimeline].color}`,
                          fontSize: '0.95rem'
                        }}
                      >
                        ✓ {achievement}
                      </motion.div>
                    ))}
                  </div>
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