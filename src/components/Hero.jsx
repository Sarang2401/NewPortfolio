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

  // Calculate opacity based on scroll position (fades out after 300px)
  const backgroundOpacity = Math.max(0, 1 - scrollY / 300);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="hero"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Animated Background */}
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
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(16, 185, 129, 0.08) 50%, rgba(99, 102, 241, 0.08) 100%)',
            backgroundSize: '200% 200%'
          }}
        />
        
        {/* DevOps Icons - Cloud, Docker, Kubernetes */}
        {[
          { icon: '☁️', size: 40, x: 10, y: 20 },
          { icon: '🐳', size: 35, x: 80, y: 15 },
          { icon: '⚙️', size: 30, x: 70, y: 70 },
          { icon: '🔧', size: 28, x: 15, y: 75 },
          { icon: '📦', size: 32, x: 85, y: 50 },
          { icon: '🔄', size: 28, x: 45, y: 10 },
        ].map((item, i) => (
          <motion.div
            key={`icon-${i}`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              left: `${item.x}%`,
              top: `${item.y}%`,
              fontSize: `${item.size}px`,
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Data flow lines - representing CI/CD pipeline */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            animate={{
              x: [-100, window.innerWidth + 100],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'linear'
            }}
            style={{
              position: 'absolute',
              top: `${20 + i * 15}%`,
              width: '100px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent)',
            }}
          />
        ))}

        {/* Floating code brackets and symbols */}
        {['{ }', '</>', 'API', 'CI/CD', 'K8s'].map((text, i) => (
          <motion.div
            key={`text-${i}`}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{
              duration: 5 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              left: `${(i * 18 + 5) % 95}%`,
              top: `${(i * 23 + 30) % 80}%`,
              fontSize: '14px',
              fontFamily: 'monospace',
              color: 'rgba(59, 130, 246, 0.4)',
              fontWeight: 'bold'
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