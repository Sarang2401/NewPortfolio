import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import Magnetic from './Magnetic';
import PixelTransition from './PixelTransition';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Subtle dot grid */}
      <div className="hero-grid" />

      <div className="container hero-content">
        <div className="hero-layout-v2">

          {/* ── Left: Billboard Typography ── */}
          <motion.div
            className="hero-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability pill */}
            <motion.div variants={itemVariants}>
              <div className="availability-badge">
                <span className="status-dot" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Massive stacked name */}
            <motion.div className="hero-name" variants={itemVariants}>
              <div className="hero-name-line">SARANG</div>
              <div className="hero-name-line">SHIGWAN</div>
            </motion.div>

            {/* Domain tags */}
            <motion.div className="hero-domains" variants={itemVariants}>
              <span>CLOUD</span>
              <span className="hero-domain-sep">•</span>
              <span>AI</span>
              <span className="hero-domain-sep">•</span>
              <span>SECURITY</span>
            </motion.div>

            {/* Tagline */}
            <motion.p className="hero-tagline" variants={itemVariants}>
              Building scalable systems, AI-powered applications,
              and cloud-native solutions that hold up in production.
            </motion.p>

            {/* CTAs */}
            <motion.div className="hero-actions" variants={itemVariants}>
              <Magnetic strength={0.3}>
                <a href="#projects" className="btn btn-primary">
                  View Projects <ArrowRight size={16} />
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a
                  href="/resumes/SarangShigwan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FileText size={16} /> Resume
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* ── Right: Pixel Transition Image ── */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          >
            <PixelTransition />
          </motion.div>

        </div>
      </div>
    </section>
  );
}