import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FadeRiseText({ children, className = '', style = {} }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.fromTo(containerRef.current.children,
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 0.6, 
          scrollTrigger: { 
            trigger: containerRef.current, 
            start: 'top 80%', 
            once: true 
          } 
        }
      );
      return;
    }

    gsap.fromTo(containerRef.current.children,
      { y: 15, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div className={`fade-rise-container ${className}`} ref={containerRef} style={style}>
      {children}
    </div>
  );
}
