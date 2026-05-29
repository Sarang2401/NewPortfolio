import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay, ease: [0.25, 1, 0.5, 1] },
    }),
  };

  return (
    <section id="research" className="research-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Research</span>
          <h2 className="section-title">
            IEEE Conference<br />
            <span className="gradient-text-accent">Presentation</span>
          </h2>
        </motion.div>

        <div className="research-bento">
          {/* ── Main Feature Card ── */}
          <motion.div
            className="research-main-card"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0.2}
          >
            {/* IEEE watermark */}
            <div className="research-ieee-watermark" aria-hidden="true">IEEE</div>

            <div className="research-main-content">
              <div className="research-status-badge">
                <span className="research-status-dot" />
                Peer Reviewed &amp; Presented
              </div>

              <h3 className="research-title">
                Machine Learning-Based Anomaly Detection
                in Distributed Cloud Systems
              </h3>

              <p className="research-abstract">
                Proposed a vector embedding pipeline for correlating distributed system logs
                and surfacing anomalous failure patterns with high precision. Demonstrated
                real-world applicability using cloud-native microservice architectures,
                achieving significant reduction in false positive rates compared to
                conventional threshold-based detection approaches.
              </p>

              <div className="research-domains">
                <span className="tech-pill">Machine Learning</span>
                <span className="tech-pill">Cloud Computing</span>
                <span className="tech-pill">Distributed Systems</span>
                <span className="tech-pill">Vector Embeddings</span>
                <span className="tech-pill">Anomaly Detection</span>
              </div>
            </div>
          </motion.div>

          {/* ── Right column: side cards ── */}
          <div className="research-side-cards">

            {/* Conference Badge */}
            <motion.div
              className="research-conference-card"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.35}
            >
              <div className="research-conf-logo">IEEE</div>
              <div className="research-conf-details">
                <p className="research-conf-name">International Conference</p>
                <p className="research-conf-full">
                  Cloud Computing &amp; Intelligence Systems
                </p>
                <p className="research-conf-year">2024</p>
              </div>
            </motion.div>

            {/* Impact Metrics */}
            <motion.div
              className="research-impact-card"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.45}
            >
              <h4 className="research-impact-label">Research Impact</h4>
              <div className="research-impact-stats">
                <div className="research-impact-stat">
                  <span className="research-impact-value">↓ 60%</span>
                  <span className="research-impact-meta">False Positives</span>
                </div>
                <div className="research-impact-stat">
                  <span className="research-impact-value">↑ 40%</span>
                  <span className="research-impact-meta">Detection Speed</span>
                </div>
              </div>
            </motion.div>

            {/* Distinction card */}
            <motion.div
              className="research-distinction-card"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.55}
            >
              <div className="research-distinction-accent" />
              <p className="research-distinction-text">
                Published peer-reviewed research at the undergraduate level — a distinction
                most engineers at this stage don't carry.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
