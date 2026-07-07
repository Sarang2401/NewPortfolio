import React, { useRef } from 'react';
import { Trophy, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import RevealHeading from './RevealHeading';
import TypewriterLabel from './TypewriterLabel';
import FadeRiseText from './FadeRiseText';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({ to, suffix = '' }) => {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(ref.current, 
      { innerHTML: 0 }, 
      { 
        innerHTML: to, 
        duration: 2, 
        ease: 'power3.out', 
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once: true
        }
      }
    );
  }, []);

  return (
    <span>
      <span ref={ref}>0</span>
      <span style={{ color: 'var(--accent)' }}>{suffix}</span>
    </span>
  );
};

const timeline = [
  {
    year: '2025',
    title: 'Backend Engineer Intern',
    company: 'EvolvingX Pvt. Ltd.',
    description:
      'Developed a full-stack web application (React + Django) with REST APIs. Deployed production systems on AWS EC2 and optimized backend efficiency through architectural improvements.',
  },
  {
    year: '2023',
    title: 'IoT & Automation Lead',
    company: 'Team Achilles',
    description:
      'Spearheaded the development of ML-enhanced vehicle automation subsystems, achieving 60% performance optimization in real-time data processing pipelines.',
  },
];

const stats = [
  { to: 10, suffix: '+', label: 'Projects Shipped' },
  { to: 2, suffix: '+', label: 'Years Experience' },
  { to: 1, suffix: '', label: 'IEEE Publication' },
];

const achievements = [
  {
    id: '01',
    title: 'IEEE Research Presenter',
    description: 'Presented research work at an international IEEE conference, showcasing innovation, technical depth, and problem-solving ability through applied engineering research.',
    icon: <Award size={24} className="achievement-icon-svg" />
  },
  {
    id: '02',
    title: 'Hackathon Finalist & Winner',
    description: 'Built innovative solutions under high-pressure environments, collaborating with teams to solve real-world problems across AI, cloud, and cybersecurity domains.',
    icon: <Trophy size={24} className="achievement-icon-svg" />
  }
];

export default function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // RevealHeading, TypewriterLabel, and FadeRiseText handle their own animations.
    // We only need to animate the stats strip and achievements.

    // Stats reveal
    gsap.fromTo('.experience-stat',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.experience-stats',
          start: 'top 80%',
          once: true
        }
      }
    );

    // Timeline and achievements are animated below
  }, { scope: containerRef });

  return (
    <section id="about" className="experience-section" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <TypewriterLabel className="section-label">Background</TypewriterLabel>
          <RevealHeading className="section-title">
            Engineer by Trade. Builder by Nature.
          </RevealHeading>
        </div>

        {/* Stats strip */}
        <div className="experience-stats">
          {stats.map((s) => (
            <div className="experience-stat" key={s.label}>
              <div className="stat-value">
                <AnimatedCounter to={s.to} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* 2-Column Layout: Experience vs Achievements */}
        <div className="about-grid">
          
          {/* Left Column: Timeline */}
          <div className="about-col">
            <TypewriterLabel className="about-col-title" style={{ letterSpacing: '0.05em', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Professional Experience
            </TypewriterLabel>
            <FadeRiseText className="experience-timeline">
              {timeline.map((item, idx) => (
                <div key={idx} className="experience-item">
                  <div className="experience-year-col">
                    <span className="experience-year">{item.year}</span>
                  </div>
                  <div className="experience-connector">
                    <div className="experience-dot" />
                    <div className="experience-line" />
                  </div>
                  <div className="experience-content">
                    <h4 className="experience-role">{item.title}</h4>
                    <p className="experience-company">{item.company}</p>
                    <p className="experience-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </FadeRiseText>
          </div>

          {/* Right Column: Achievements */}
          <div className="about-col">
            <TypewriterLabel className="about-col-title" style={{ letterSpacing: '0.05em', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Selected Achievements
            </TypewriterLabel>
            <FadeRiseText className="achievements-list">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="achievement-card" style={{
                  background: 'var(--surface)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 10px 40px -10px rgba(0,0,0,0.6)',
                  borderRadius: '16px'
                }}>
                  <div className="achievement-glass-layer"></div>
                  <div className="achievement-content">
                    <div className="achievement-header">
                      <span className="achievement-number">{achievement.id}</span>
                      <div className="achievement-icon-wrapper">
                        {achievement.icon}
                      </div>
                    </div>
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-desc">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </FadeRiseText>
          </div>

        </div>

      </div>
    </section>
  );
}