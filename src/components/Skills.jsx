import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import RevealHeading from './RevealHeading';
import TypewriterLabel from './TypewriterLabel';
import FadeRiseText from './FadeRiseText';

gsap.registerPlugin(ScrollTrigger);

const techCategories = [
  {
    title: 'Backend & Systems',
    skills: ['Python', 'FastAPI', 'Django', 'Go', 'Java', 'PostgreSQL', 'Redis']
  },
  {
    title: 'Cloud & Infra',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux']
  },
  {
    title: 'DevOps & Security',
    skills: ['GitHub Actions', 'CI/CD', 'Prometheus', 'Grafana', 'Cybersecurity']
  },
  {
    title: 'Architecture',
    skills: ['System Design', 'Microservices', 'React', 'TypeScript']
  }
];

export default function Skills() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal horizontal lines
    gsap.fromTo('.skills-arch-wrapper',
      { scaleX: 0, transformOrigin: 'center' },
      { 
        scaleX: 1, 
        duration: 1.2, 
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true
        }
      }
    );

    // Reveal vertical dividers
    gsap.fromTo('.skills-arch-col',
      { borderRightColor: 'rgba(255,255,255,0)' },
      { 
        borderRightColor: 'rgba(255,255,255,0.1)', 
        duration: 1.2, 
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.skills-arch-grid',
          start: 'top 75%',
          once: true
        }
      }
    );

    // Reveal text
    gsap.fromTo('.skills-anim-reveal',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills-arch-grid',
          start: 'top 75%',
          once: true
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="skills" className="skills-section" ref={containerRef} style={{ padding: '6rem 0' }}>
      <div className="container">
        
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <TypewriterLabel className="section-label">Core Competencies</TypewriterLabel>
          <RevealHeading className="section-title text-center">
            Technical Arsenal.
          </RevealHeading>
        </div>

        {/* Brutalist Architectural Grid */}
        <FadeRiseText className="brutalist-grid">
          <div className="skills-arch-grid">
            {techCategories.map((category) => (
              <div key={category.title} className="skills-arch-col">
                <h3 className="skills-arch-title skills-anim-reveal">
                  {category.title}
                </h3>
                <ul className="skills-arch-list">
                  {category.skills.map(skill => (
                    <li key={skill} className="skills-arch-item skills-anim-reveal">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeRiseText>

      </div>
    </section>
  );
}