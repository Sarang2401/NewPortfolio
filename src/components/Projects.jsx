import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import projectsData from '../data/projects';
import ProjectCard from './ProjectCard';
import RevealHeading from './RevealHeading';
import TypewriterLabel from './TypewriterLabel';
import FadeRiseText from './FadeRiseText';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.projects-header-anim',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 75%',
          once: true
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="projects" className="projects-section" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <TypewriterLabel className="section-label">Selected Work</TypewriterLabel>
          <RevealHeading className="section-title">
            Engineering Systems That Scale
          </RevealHeading>
        </div>

        <div className="projects-stack-container">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
