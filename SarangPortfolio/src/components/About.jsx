import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, BookOpen, Code, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const timelineData = [
    {
      year: '2025',
      title: 'AWS Intern',
      company: 'EvolvingX Pvt. Ltd.',
      location: 'Remote',
      description: 'Led development of scalable web applications using React.js and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Improved application performance by 40%',
        'Mentored 3 junior developers',
        'Implemented CI/CD pipelines'
      ],
      type: 'internship'
    },
    {
      year: '2024',
      title: 'Cybersecurity Intern',
      company: 'Cisco Virtual Internship ',
      location: 'Virtual',
      description: 'Specialized in creating responsive and interactive user interfaces. Worked closely with UX designers to bring designs to life.',
      achievements: [
        'Built 15+ responsive web applications',
        'Reduced load time by 60%',
        'Implemented modern UI/UX patterns'
      ],
      type: 'Intern'
    },
    {
      year: '2023',
      title: 'IoT and Automation',
      company: 'Team Achilles',
      location: 'Pune, India',
      description: 'Started my professional journey as a junior developer, focusing on learning best practices and contributing to various projects.',
      achievements: [
        'Completed 10+ projects successfully',
        'Learned agile development methodologies',
        'Contributed to open-source projects'
      ],
      type: 'Student Club'
    },
    
  ];

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+' },
    { icon: BookOpen, label: 'Blog Posts Written', value: '25+' },
    { icon: Users, label: 'CTFs Solved', value: '100+' },
    { icon: Award, label: 'Years Of Experience', value: '1' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
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
    >
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="about-content"
        >
          {/* Main About Content */}
          <div className="about-header">
            <motion.h2 variants={itemVariants}>About Me</motion.h2>
            <motion.div variants={itemVariants} className="about-intro">
              <div className="about-text">
                <p className="lead-text">
                  I am a dedicated and enthusiastic <span className="highlight">SaaS Developer</span> with a passion for creating secure digital solutions. My journey in software development is driven by curiosity, creativity, and a commitment to excellence.
                </p>
                <p>
                  With expertise in modern technologies like React.js, Node.js, and various database systems, I specialize in building scalable, efficient applications that solve real-world problems. I thrive in collaborative environments and enjoy mentoring fellow developers.
                </p>
                <p>
                  Beyond coding, I'm an active <span className="highlight">technical blog writer</span>, sharing insights and tutorials with the developer community. I believe in continuous learning and staying ahead of industry trends to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="about-image">
                <div className="image-placeholder">
                  <div className="image-overlay">
                    <Lightbulb size={48} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <stat.icon size={24} />
                </div>
                <div className="stat-content">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Blog Writing Section */}
          <motion.div variants={itemVariants} className="blog-section">
            <div className="blog-header">
              <BookOpen size={32} />
              <h3>Technical Blog Writer</h3>
            </div>
            <div className="blog-content">
              <p>
                I regularly write technical articles covering web development, best practices, and emerging technologies. My blog posts have helped thousands of developers worldwide improve their skills and solve complex problems.
              </p>
              <div className="blog-topics">
                <span className="topic-tag">OWASP</span>
                <span className="topic-tag">Cloud Security</span>
                <span className="topic-tag">DevSecOps</span>
                <span className="topic-tag">CTF Walkthroughs</span>
              </div>
            </div>
          </motion.div>

          {/* Professional Timeline */}
          <motion.div variants={itemVariants} className="timeline-section">
            <h3>Professional Journey</h3>
            <div className="timeline-container">
              <div className="timeline-nav">
                {timelineData.map((item, index) => (
                  <button
                    key={index}
                    className={`timeline-nav-item ${activeTimeline === index ? 'active' : ''}`}
                    onClick={() => setActiveTimeline(index)}
                  >
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-type">{item.type}</div>
                  </button>
                ))}
              </div>
              
              <div className="timeline-content">
                <motion.div
                  key={activeTimeline}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="timeline-item"
                >
                  <div className="timeline-header">
                    <h4>{timelineData[activeTimeline].title}</h4>
                    <div className="timeline-meta">
                      <div className="company">
                        <Award size={16} />
                        {timelineData[activeTimeline].company}
                      </div>
                      <div className="location">
                        <MapPin size={16} />
                        {timelineData[activeTimeline].location}
                      </div>
                      <div className="date">
                        <Calendar size={16} />
                        {timelineData[activeTimeline].year}
                      </div>
                    </div>
                  </div>
                  <p className="timeline-description">
                    {timelineData[activeTimeline].description}
                  </p>
                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {timelineData[activeTimeline].achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;