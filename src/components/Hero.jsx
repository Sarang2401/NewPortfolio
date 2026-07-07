import React, { useRef } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitCharReveal from './SplitCharReveal';
import TypewriterLabel from './TypewriterLabel';
import FadeRiseText from './FadeRiseText';
import heroImage from '../assets/hero_portrait.png';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Parallax effect on the image
    // Using yPercent: 15 because the image is 120% height. Moving it down relative to wrapper
    // as we scroll down creates a slower-than-scroll parallax effect.
    gsap.fromTo(imageRef.current, 
      { yPercent: -15 },
      {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      }
    );

    // Fade out and shift up the text overlay
    gsap.to(textRef.current, {
      y: -80,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <section id="hero" className="hero-fullbleed" ref={containerRef}>
      {/* Absolute Full-Bleed Image on Right */}
      <div className="hero-image-wrapper">
        <img 
          ref={imageRef}
          src={heroImage} 
          alt="Sarang Shigwan" 
          className="hero-image"
          loading="eager"
        />
      </div>

      {/* Content Container positioned to overlay the image naturally */}
      <div className="container hero-content-fullbleed">
        <div className="hero-left-content" ref={textRef}>
          
          <div className="hero-meta">
            {/* Domain tags */}
            <div className="hero-domains" style={{ marginBottom: '2rem' }}>
              <TypewriterLabel>CLOUD</TypewriterLabel>
              <span className="hero-domain-sep">•</span>
              <TypewriterLabel>AI</TypewriterLabel>
              <span className="hero-domain-sep">•</span>
              <TypewriterLabel>SECURITY</TypewriterLabel>
            </div>

            <FadeRiseText>
              <p className="hero-tagline" style={{ maxWidth: '400px', marginBottom: '2.5rem' }}>
                Building scalable systems, AI-powered applications,
                and cloud-native solutions that hold up in production.
              </p>

              {/* CTAs */}
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  View Projects <ArrowRight size={16} />
                </a>
                <a
                  href="/resumes/SarangShigwan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FileText size={16} /> Resume
                </a>
              </div>
            </FadeRiseText>
          </div>

          {/* Massive overlapping name at bottom */}
          <div className="hero-name-overlapping">
            <SplitCharReveal text="SARANG" className="hero-name-line" style={{ display: 'block' }} />
            <SplitCharReveal text="SHIGWAN" className="hero-name-line" style={{ display: 'block' }} />
          </div>

        </div>
      </div>
    </section>
  );
}