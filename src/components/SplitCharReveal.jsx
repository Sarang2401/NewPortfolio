import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function SplitCharReveal({ text, className = '', style = {} }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      gsap.fromTo(containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
      return;
    }

    gsap.fromTo('.split-char', 
      { y: '100%', opacity: 0, rotateX: 40 },
      { 
        y: '0%', 
        opacity: 1, 
        rotateX: 0,
        duration: 0.9, 
        stagger: 0.02, 
        ease: 'power4.out',
        delay: 0.1
      }
    );
  }, { scope: containerRef });

  return (
    <div className={className} ref={containerRef} style={{ ...style, display: 'flex', flexWrap: 'wrap', perspective: '1000px' }}>
      {text.split(' ').map((word, wIdx) => (
        <div key={wIdx} style={{ display: 'inline-flex', overflow: 'hidden', marginRight: '0.25em' }}>
          {word.split('').map((char, cIdx) => (
            <span key={cIdx} className="split-char" style={{ display: 'inline-block', transformOrigin: 'bottom center' }}>
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
