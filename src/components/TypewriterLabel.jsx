import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function TypewriterLabel({ children, className = '', style = {} }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(textRef.current, { clipPath: 'inset(0 0 0 0)' });
      gsap.set(cursorRef.current, { display: 'none' });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true
      }
    });

    tl.fromTo(textRef.current,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', duration: 0.5, ease: 'none' }
    ).to(cursorRef.current, {
      opacity: 0,
      duration: 0.1,
      repeat: 3,
      yoyo: true,
      onComplete: () => {
        gsap.set(cursorRef.current, { display: 'none' });
      }
    });

  }, { scope: containerRef });

  return (
    <div className={className} ref={containerRef} style={{ ...style, display: 'inline-flex', alignItems: 'center' }}>
      <span ref={textRef} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
        {children}
      </span>
      <span ref={cursorRef} style={{ display: 'inline-block', marginLeft: '2px', fontWeight: 'bold' }}>_</span>
    </div>
  );
}
