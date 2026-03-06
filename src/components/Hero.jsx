import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import myImage from '../assets/SarangSS.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundOpacity = Math.max(0, 1 - scrollY / 300);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="hero"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle animated background */}
      <div
        className="hero-background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: backgroundOpacity,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(212, 168, 83, 0.04) 0%, rgba(160, 120, 80, 0.03) 50%, rgba(212, 168, 83, 0.02) 100%)',
            backgroundSize: '200% 200%'
          }}
        />

        {/* Subtle floating text elements */}
        {['Cloud', 'DevOps', 'Security', 'SaaS'].map((text, i) => (
          <motion.div
            key={`text-${i}`}
            animate={{
              y: [0, -20, 0],
              opacity: [0.04, 0.08, 0.04]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              left: `${(i * 22 + 8) % 90}%`,
              top: `${(i * 20 + 15) % 75}%`,
              fontSize: 'clamp(12px, 2vw, 16px)',
              fontFamily: "'DM Serif Display', serif",
              color: 'rgba(212, 168, 83, 0.15)',
              fontWeight: '400',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      <div className="container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
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
          <img src={myImage} alt="Portrait of Sarang Shigwan" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;