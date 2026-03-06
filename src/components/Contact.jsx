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
      color: '#e8e4dc',
      hoverColor: '#a8a4a0'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/sarang-shigwan-9a9668266/',
      color: '#d4a853',
      hoverColor: '#b8923f'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/saranggg_24',
      color: '#a07850',
      hoverColor: '#8a6840'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
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
      {/* Subtle animated background */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(600px, 80vw)',
          height: 'min(600px, 80vw)',
          background: 'radial-gradient(circle, rgba(212, 168, 83, 0.15), transparent)',
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
          Let's Connect
        </motion.h2>

        <motion.p variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
          Feel free to reach out for collaborations, opportunities, or just a friendly chat.
        </motion.p>

        {/* Email card with copy functionality */}
        <motion.div
          variants={itemVariants}
          className="contact-info"
          style={{
            position: 'relative',
            padding: '1.25rem',
            background: 'linear-gradient(135deg, rgba(212, 168, 83, 0.06), rgba(160, 120, 80, 0.04))',
            borderRadius: '14px',
            border: '1px solid rgba(212, 168, 83, 0.15)',
            marginBottom: '1.5rem',
            cursor: 'pointer',
            width: '100%',
            maxWidth: '500px'
          }}
          whileHover={{ scale: 1.01, borderColor: 'rgba(212, 168, 83, 0.35)' }}
          whileTap={{ scale: 0.99 }}
          onClick={handleCopyEmail}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <FaEnvelope style={{ color: '#d4a853', fontSize: '20px', flexShrink: 0 }} />
            <span style={{ fontSize: 'clamp(0.85rem, 2vw, 1.05rem)', fontWeight: '500' }}>
              sarang2401@gmail.com
            </span>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: copied ? 1 : 0 }}
              style={{ color: '#8a7a6a', flexShrink: 0 }}
            >
              <FaCheck />
            </motion.div>
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: copied ? 0 : 1 }}
              style={{ color: '#6b6864', flexShrink: 0 }}
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
              marginTop: '0.4rem',
              fontSize: '0.8rem',
              color: '#d4a853',
              textAlign: 'center'
            }}
          >
            Copied to clipboard
          </motion.p>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="social-links"
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{
                scale: 1.1,
                y: -3,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `rgba(212, 168, 83, 0.08)`,
                border: '1px solid rgba(212, 168, 83, 0.15)',
                color: social.color,
                fontSize: '22px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              aria-label={social.name}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Resume Download Section */}
        <motion.div
          variants={itemVariants}
          style={{
            background: 'linear-gradient(135deg, rgba(212, 168, 83, 0.08), rgba(160, 120, 80, 0.06))',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            borderRadius: '18px',
            border: '1px solid rgba(212, 168, 83, 0.2)',
            textAlign: 'center',
            width: '100%'
          }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              marginBottom: '0.5rem',
              color: '#e8e4dc',
            }}
          >
            Download My Resume
          </motion.h3>
          <p style={{ marginBottom: '1.25rem', opacity: 0.7, fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', color: '#e8e4dc' }}>
            Choose the version that matches your interest
          </p>

          <div style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {[
              { name: 'Cloud', color: '#d4a853', file: '/resumes/SarangResume_Cloud.pdf' },
              { name: 'SDE', color: '#a07850', file: '/resumes/SarangResume_SDE.pdf' },
              { name: 'ML', color: '#8a7a6a', file: '/resumes/SarangResume_ML.pdf' }
            ].map((resume, index) => (
              <motion.a
                key={resume.name}
                href={resume.file}
                download
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: 'spring' }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '1rem 1.5rem',
                  background: `linear-gradient(135deg, ${resume.color}20, ${resume.color}10)`,
                  border: `1px solid ${resume.color}`,
                  borderRadius: '14px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: '#e8e4dc',
                  minWidth: '120px',
                  minHeight: '44px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span style={{
                  fontWeight: '700',
                  fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
                  color: '#e8e4dc'
                }}>
                  {resume.name}
                </span>
                <span style={{
                  fontSize: '0.7rem',
                  opacity: 0.8,
                  background: `${resume.color}30`,
                  padding: '2px 8px',
                  borderRadius: '8px',
                  fontWeight: '600'
                }}>
                  PDF
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;