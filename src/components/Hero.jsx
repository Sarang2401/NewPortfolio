import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';
import myImage from '../assets/SarangSS.jpg';

const roles = ['AI Full-Stack Engineer', 'Python Backend Dev', 'AWS Architect', 'GenAI Builder'];

// Split text utility for animation
const SplitText = ({ text }) => {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.25, 1, 0.5, 1],
              delay: i * 0.05
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </>
  );
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-grid"></div>

      <div className="container hero-content">
        <div className="hero-layout">
          <div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="availability-badge">
                <span className="status-dot"></span>
                Available for freelance
              </div>
            </motion.div>

            <h1 className="hero-title">
              <SplitText text="Building Systems That Scale." />
            </h1>

            <div className="hero-roles">
              <span style={{ marginRight: '8px' }}>I'm a</span>
              <div style={{ position: 'relative', flex: 1, height: '100%' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0, position: 'absolute' }}
                    animate={{ y: 0, opacity: 1, position: 'relative' }}
                    exit={{ y: -20, opacity: 0, position: 'absolute' }}
                    transition={{ duration: 0.3 }}
                    className="highlight"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <p className="hero-desc">
              <SplitText text="I specialize in building AI-native applications using RAG pipelines, vector embeddings, and cloud-native architectures. Turning complex data into scalable, production-ready solutions." />
            </p>

            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Magnetic strength={0.3}>
                <a href="#projects" className="btn btn-primary">
                  View My Work <ArrowRight size={18} />
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a href="#contact" className="btn btn-outline">
                  Let's Talk
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div 
            className="portrait-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="portrait-frame">
              <img src={myImage} alt="Sarang Shigwan" loading="eager" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;