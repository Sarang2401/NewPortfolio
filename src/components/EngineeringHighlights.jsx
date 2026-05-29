import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Three core stacks ───────────────────────────────────────── */
const stacks = [
  {
    id: '01',
    title: 'Python Backend',
    tagline: 'Production APIs built for reliability.',
    desc:
      'FastAPI and Django powering low-latency REST APIs, complex relational schemas, and clean service boundaries that hold up under real load.',
    tech: ['FastAPI', 'Django', 'PostgreSQL', 'MySQL', 'REST APIs', 'System Design'],
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Cloud / DevOps',
    tagline: 'Zero-touch infrastructure that ships.',
    desc:
      'AWS, Docker, Kubernetes, Terraform — end-to-end CI/CD, containerised microservices, and real-time observability with Prometheus and Grafana.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus'],
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'GenAI',
    tagline: 'AI systems that work in production.',
    desc:
      'LLM integration, vector embeddings, semantic search pipelines — intelligent features deployed as FastAPI microservices on serverless infrastructure.',
    tech: ['LLM APIs', 'Vector DBs', 'RAG', 'Embeddings', 'Semantic Search'],
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=900&auto=format&fit=crop',
  },
];

export default function EngineeringHighlights() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="flow-section">
      <div className="container">

        {/* Header */}
        <div className="flow-section-header">
          <span className="section-label">Core Stack</span>
          <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
            What I <span className="gradient-text">Build</span>
          </h2>
        </div>

        {/* Flowing menu list */}
        <div className="flow-list" role="list">
          {stacks.map((item, i) => (
            <div
              key={item.id}
              className={`flow-item ${hovered === i ? 'flow-item--active' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              role="listitem"
            >
              {/* top rule on first item */}
              {i === 0 && <div className="flow-rule" />}

              <div className="flow-item-inner">

                {/* ── Left: content ── */}
                <div className="flow-content">
                  <span className="flow-number">{item.id}</span>

                  <div className="flow-body">
                    <motion.h3
                      className="flow-title"
                      animate={{
                        x:     hovered === i ? 10 : 0,
                        color: hovered === i ? '#CCFF00' : '#FFFFFF',
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    >
                      {item.title}
                    </motion.h3>

                    <AnimatePresence initial={false}>
                      {hovered === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.42, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className="flow-detail"
                        >
                          <p className="flow-desc">{item.desc}</p>
                          <div className="tech-stack" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
                            {item.tech.map((t) => (
                              <span key={t} className="tech-pill">{t}</span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.span
                    className="flow-arrow"
                    animate={{ x: hovered === i ? 6 : 0, opacity: hovered === i ? 1 : 0.35 }}
                    transition={{ duration: 0.3 }}
                    aria-hidden="true"
                  >
                    ↗
                  </motion.span>
                </div>

                {/* ── Right: image that flows in from the right ── */}
                <motion.div
                  className="flow-image-wrap"
                  animate={{
                    clipPath: hovered === i
                      ? 'inset(0 0% 0 0 round 12px)'
                      : 'inset(0 100% 0 0 round 12px)',
                  }}
                  transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
                  aria-hidden="true"
                >
                  <img src={item.image} alt="" className="flow-image" loading="lazy" decoding="async" />
                  {/* Gradient bleed so image merges into the background */}
                  <div className="flow-image-bleed" />
                </motion.div>

              </div>

              {/* bottom rule */}
              <div className="flow-rule" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
