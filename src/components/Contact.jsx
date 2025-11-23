import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sarang2401@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Sarang2401',
      color: '#333',
      hoverColor: '#24292e'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/sarang-shigwan-9a9668266/',
      color: '#0077b5',
      hoverColor: '#005582'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/saranggg_24',
      color: '#E4405F',
      hoverColor: '#C13584'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="contact"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Animated background effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.03, 0.05, 0.03]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <motion.div 
        className="container contact-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.h2 variants={itemVariants}>
          Let's Connect! 🤝
        </motion.h2>
        
        <motion.p variants={itemVariants} style={{ marginBottom: '2rem' }}>
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </motion.p>

        {/* Email card with copy functionality */}
        <motion.div
          variants={itemVariants}
          className="contact-info"
          style={{
            position: 'relative',
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
            borderRadius: '16px',
            border: '2px solid rgba(59, 130, 246, 0.2)',
            marginBottom: '2rem',
            cursor: 'pointer'
          }}
          whileHover={{ scale: 1.02, borderColor: 'rgba(59, 130, 246, 0.5)' }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCopyEmail}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <FaEnvelope style={{ color: '#3b82f6', fontSize: '24px' }} />
            <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>
              sarang2401@gmail.com
            </span>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: copied ? 1 : 0 }}
              style={{ 
                position: 'absolute',
                right: '1rem',
                color: '#10b981'
              }}
            >
              <FaCheck />
            </motion.div>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: copied ? 0 : 1 }}
              style={{ 
                position: 'absolute',
                right: '1rem',
                color: '#6b7280'
              }}
            >
              <FaCopy />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: copied ? 1 : 0,
              height: copied ? 'auto' : 0
            }}
            style={{ 
              marginTop: '0.5rem',
              fontSize: '0.9rem',
              color: '#10b981',
              textAlign: 'center'
            }}
          >
            ✓ Email copied to clipboard!
          </motion.p>
        </motion.div>

        {/* Social links with hover effects */}
        <motion.div 
          className="social-links"
          variants={itemVariants}
          style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(135deg, ${social.color}, ${social.hoverColor})`,
                color: 'white',
                fontSize: '24px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.div
                whileHover={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.3 }}
              >
                <social.icon />
              </motion.div>
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: -10 }}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  background: 'rgba(0, 0, 0, 0.8)',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none'
                }}
              >
                {social.name}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Fun floating elements */}
        {['💼', '🚀', '💻', '🎯'].map((emoji, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              rotate: [0, i * 90, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              position: 'absolute',
              fontSize: '40px',
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
              pointerEvents: 'none',
              zIndex: 0
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Contact;