import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen, Code, Laptop } from 'lucide-react';

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineData = [
    {
      year: '2025',
      title: 'Backend Intern(AWS)',
      company: 'EvolvingX Pvt. Ltd.',
      location: 'Remote',
      description: 'Worked at the intersection of cloud technology and web development to build scalable, production-grade applications. Contributed to both frontend and backend ecosystems using React.js and Django, ensuring seamless user experiences and robust server-side logic.',
      achievements: [
        'Developed a first-of-its-kind platform to bridge the gap between students and colleges',
        'Designed and implemented modern, responsive UI/UX patterns',
        'Gained hands-on experience with cloud-native deployments and AWS services'
      ],
      type: 'internship',
      color: '#3b82f6'
    },
    {
      year: '2024',
      title: 'Cybersecurity Intern',
      company: 'Cisco Virtual Internship',
      location: 'Virtual',
      description: 'Focused on designing secure network architectures and conducting vulnerability assessments to evaluate and improve cybersecurity posture. Gained hands-on experience in both offensive and defensive security strategies, along with technical documentation practices.',
      achievements: [
        'Built a full-scale digital replica of college network infrastructure using Cisco tools',
        'Implemented modern Switch and Routing protocols',
        'Performed vulnerability assessments and documented security enhancements'
      ],
      type: 'Intern',
      color: '#8b5cf6'
    },
    {
      year: '2023',
      title: 'IoT and Automation',
      company: 'Team Achilles',
      location: 'Pune, India',
      description: 'Embarked on my engineering journey with a focus on IoT and automation technologies, contributing to real-world automotive projects. Learned system integration, innovation workflows, and how to apply machine learning in embedded systems.',
      achievements: [
        'Designed and developed two key subsystems for vehicle automation',
        'Optimized existing architectures, resulting in 60% performance improvements',
        'Introduced machine learning capabilities to enhance system intelligence and autonomy'
      ],
      type: 'Student Club',
      color: '#10b981'
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: '🚀' },
    { label: 'Blog Posts Written', value: '25+', icon: '✍️' },
    { label: 'CTFs Solved', value: '100+', icon: '🔐' },
    { label: 'Years Of Experience', value: '1', icon: '⭐' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="about"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Floating background elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${timelineData[i]?.color || '#3b82f6'}40, transparent)`,
            left: `${i * 35}%`,
            top: `${i * 30}%`,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="about-content"
        >
          <div className="about-header">
            <motion.h2 variants={itemVariants}>About Me</motion.h2>
            <motion.div 
              variants={itemVariants} 
              className="about-intro"
              style={{ 
                display: 'block',
                position: 'relative',
                padding: '3rem',
                borderRadius: '20px',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                background: 'rgba(59, 130, 246, 0.05)',
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.1)'
              }}
            >
              {/* Large Laptop Background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.06, scale: 1 }}
                transition={{ duration: 1 }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '45%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0,
                  pointerEvents: 'none'
                }}
              >
                <Laptop size={450} style={{ color: '#3b82f6' }} />
              </motion.div>

              <div className="about-text" style={{ position: 'relative', zIndex: 1 }}>
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}
                >
                  I am a dedicated <span className="highlight">SaaS Developer</span> passionate about creating secure, scalable digital solutions. My journey is driven by curiosity, creativity, and a commitment to excellence.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}
                >
                  With expertise in Cloud Computing and CyberSecurity, I build efficient applications that solve real-world problems. I thrive in collaborative environments and enjoy mentoring fellow developers.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '0' }}
                >
                  Welcome to my portfolio — where curiosity meets capability. 🚀
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Stats Section with enhanced animations */}
          <motion.div 
            variants={containerVariants}
            className="stats-grid"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.5rem',
              margin: '3rem 0'
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="stat-card"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                  padding: '2rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  style={{ fontSize: '3rem', marginBottom: '1rem' }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  style={{ fontSize: '2.5rem', margin: '0.5rem 0', fontWeight: 'bold' }}
                >
                  {stat.value}
                </motion.h3>
                <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Blog Writing Section */}
          <motion.div 
            variants={itemVariants} 
            className="blog-section"
            whileHover={{ scale: 1.02 }}
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              marginBottom: '3rem'
            }}
          >
            <div className="blog-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <BookOpen size={32} />
              </motion.div>
              <h3>Technical Blog Writer</h3>
            </div>
            <div className="blog-content">
              <p>
                I regularly write technical articles covering CyberSecurity, best practices, and emerging technologies. My blog posts have helped thousands of developers worldwide improve their skills and solve complex problems.
              </p>
              <div className="blog-topics" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
                {['OWASP', 'Cloud Security', 'DevSecOps', 'CTF Walkthroughs'].map((topic, i) => (
                  <motion.span
                    key={topic}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="topic-tag"
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      background: 'rgba(59, 130, 246, 0.2)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      fontSize: '0.9rem',
                      cursor: 'pointer'
                    }}
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Professional Timeline */}
          <motion.div variants={itemVariants} className="timeline-section">
            <h3 style={{ marginBottom: '2rem' }}>Professional Journey</h3>
            <div className="timeline-container">
              <div className="timeline-nav" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                {timelineData.map((item, index) => (
                  <motion.button
                    key={index}
                    className={`timeline-nav-item ${activeTimeline === index ? 'active' : ''}`}
                    onClick={() => setActiveTimeline(index)}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '1rem 1.5rem',
                      borderRadius: '12px',
                      border: `2px solid ${activeTimeline === index ? item.color : 'rgba(59, 130, 246, 0.3)'}`,
                      background: activeTimeline === index 
                        ? `linear-gradient(135deg, ${item.color}20, ${item.color}10)` 
                        : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {activeTimeline === index && (
                      <motion.div
                        layoutId="activeTab"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `${item.color}10`,
                          zIndex: -1,
                          borderRadius: '12px'
                        }}
                      />
                    )}
                    <div className="timeline-year" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{item.year}</div>
                    <div className="timeline-type" style={{ fontSize: '0.85rem', opacity: 0.8 }}>{item.type}</div>
                  </motion.button>
                ))}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTimeline}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="timeline-content"
                  style={{
                    padding: '2rem',
                    borderRadius: '16px',
                    border: `2px solid ${timelineData[activeTimeline].color}`,
                    background: `linear-gradient(135deg, ${timelineData[activeTimeline].color}10, ${timelineData[activeTimeline].color}05)`,
                    position: 'relative'
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.02, 1],
                      opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                      position: 'absolute',
                      top: '10%',
                      right: '5%',
                      fontSize: '8rem',
                      opacity: 0.05,
                      pointerEvents: 'none'
                    }}
                  >
                    {timelineData[activeTimeline].year}
                  </motion.div>

                  <div className="timeline-header" style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{timelineData[activeTimeline].title}</h4>
                    <div className="timeline-meta" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', opacity: 0.9 }}>
                      <div className="company" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Award size={16} />
                        {timelineData[activeTimeline].company}
                      </div>
                      <div className="location" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <MapPin size={16} />
                        {timelineData[activeTimeline].location}
                      </div>
                      <div className="date" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={16} />
                        {timelineData[activeTimeline].year}
                      </div>
                    </div>
                  </div>
                  <p className="timeline-description" style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    {timelineData[activeTimeline].description}
                  </p>
                  <div className="achievements">
                    <h5 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Code size={20} /> Key Achievements:
                    </h5>
                    <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
                      {timelineData[activeTimeline].achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;