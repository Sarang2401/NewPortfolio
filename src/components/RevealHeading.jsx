import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function RevealHeading({ children, className = '' }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.fromTo('.reveal-word', 
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

    gsap.fromTo('.reveal-word', 
      { y: '20px', opacity: 0 },
      { 
        y: '0px', 
        opacity: 1,
        duration: 0.8, 
        stagger: 0.06, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true
        }
      }
    );
  }, { scope: containerRef });

  const processChildren = (kids) => {
    return React.Children.map(kids, (child, idx) => {
      if (typeof child === 'string') {
        return child.split(' ').filter(w => w.trim() !== '').map((word, i) => (
          <span key={`str-${idx}-${i}`} style={{ overflow: 'hidden', display: 'inline-flex', marginRight: '0.25em', verticalAlign: 'bottom' }}>
            <span className="reveal-word" style={{ display: 'inline-block', transformOrigin: 'top left', paddingBottom: '0.1em', lineHeight: 1 }}>
              {word}
            </span>
          </span>
        ));
      }
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          children: processChildren(child.props.children),
          style: { ...child.props.style, display: 'inline-flex', alignItems: 'flex-end', flexWrap: 'wrap' }
        });
      }
      return child;
    });
  };

  return (
    <h2 className={className} ref={containerRef} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', margin: 0, paddingBottom: '0.2em' }}>
      {/* Note: we no longer use font-serif mix via string parsing as we switched to Fraunces for all headings, 
          but we preserve the word splitting logic */}
      {processChildren(children)}
    </h2>
  );
}
