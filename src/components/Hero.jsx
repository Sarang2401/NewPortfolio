import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../assets/SarangShigwan.jpg';


const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="hero"
    >
      <div className="container hero-grid">
        <div className="hero-text">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm <span className="highlight">Sarang Shigwan</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A passionate Software Developer.
          </motion.p>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4, type: 'spring', stiffness: 100 }}
            className="cta-button"
            onClick={() => window.location.href = '#projects'}
          >
            View My Projects
          </motion.button>
        </div>
        <div className="hero-image-frame">
          {/* Replace with your image */}
          <img src={myImage} alt="Portrait of Sarang Shigwan" />

        </div>
      </div>
    </motion.section>
  );
};

export default Hero;