import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import RevealHeading from './RevealHeading';
import TypewriterLabel from './TypewriterLabel';
import FadeRiseText from './FadeRiseText';

gsap.registerPlugin(ScrollTrigger);

const stacks = [
  {
    id: '01',
    title: 'Python Backend',
    tagline: 'Production APIs built for reliability.',
    desc: 'FastAPI and Django powering low-latency REST APIs, complex relational schemas, and clean service boundaries that hold up under real load.',
    tech: ['FastAPI', 'Django', 'PostgreSQL', 'Redis'],
    className: 'bento-wide',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Cloud & DevOps',
    tagline: 'Zero-touch infrastructure.',
    desc: 'End-to-end CI/CD, containerised microservices, and real-time observability.',
    tech: ['AWS', 'Docker', 'K8s', 'Terraform'],
    className: 'bento-tall',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'GenAI Integration',
    tagline: 'LLMs in production.',
    desc: 'Vector embeddings and semantic search pipelines deployed via serverless.',
    tech: ['LLM APIs', 'Vector DBs', 'RAG'],
    className: 'bento-square',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=900&auto=format&fit=crop'
  },
  {
    id: '04',
    title: 'Automation & IoT',
    tagline: 'Real-time telemetry.',
    desc: 'Hardware integration and ML-enhanced vehicle subsystems optimizing real-time data processing.',
    tech: ['IoT', 'ML', 'C/C++'],
    className: 'bento-square',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop'
  }
];

export default function EngineeringHighlights() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.highlights-header-anim',
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true
        }
      }
    );

    gsap.fromTo('.highlight-bento-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.highlights-bento-grid',
          start: 'top 80%',
          once: true
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="what-i-build" className="highlights-section" ref={containerRef} style={{ padding: '8rem 0' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <TypewriterLabel className="section-label">Core Stack</TypewriterLabel>
          <RevealHeading className="section-title text-center">
            Deep Dives.
          </RevealHeading>
        </div>

        <FadeRiseText className="highlights-bento-grid">
          {stacks.map((item) => (
            <div key={item.id} className={`highlight-bento-card ${item.className}`}>
              
              {/* Visual Asset Background */}
              <div className="bento-visual">
                <img src={item.image} alt="" loading="lazy" />
              </div>

              {/* Text Content */}
              <div className="highlight-bento-content">
                <div className="highlight-bento-header">
                  <span className="highlight-bento-id">{item.id}</span>
                  <h3 className="highlight-bento-title">{item.title}</h3>
                </div>
                
                <div className="highlight-bento-body">
                  <h4 className="highlight-bento-tagline">{item.tagline}</h4>
                  <p className="highlight-bento-desc">{item.desc}</p>
                </div>

                <div className="highlight-bento-footer">
                  <div className="tech-stack" style={{ gap: '0.5rem' }}>
                    {item.tech.map((t) => (
                      <span key={t} className="tech-pill" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', borderColor: 'rgba(255,255,255,0.1)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </FadeRiseText>
      </div>
    </section>
  );
}
