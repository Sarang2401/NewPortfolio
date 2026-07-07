import React, { useRef } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import PixelTransition from './PixelTransition';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitCharReveal from './SplitCharReveal';
import TypewriterLabel from './TypewriterLabel';
import FadeRiseText from './FadeRiseText';

export default function Hero() {
  const containerRef = useRef(null);

    // Name and domains are handled by internal GSAP now.
    // We only need to animate the tagline and actions here if they aren't handled by FadeRiseText.
    // Since we'll wrap tagline and actions in FadeRiseText, we can drop the GSAP timeline from Hero.jsx entirely!
    // Right side blur animate
    gsap.fromTo('.hero-right',
      { opacity: 0, x: 30, filter: 'blur(10px)' },
      { opacity: 1, x: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', delay: 0.2 }
    );
  }, { scope: containerRef });

  return (
    <section id="hero" className="hero" ref={containerRef}>
      {/* Subtle dot grid */}
      <div className="hero-grid" />

      <div className="container hero-content">
        <div className="hero-layout-v2">

          {/* ── Left: Billboard Typography ── */}
          <div className="hero-left">


            {/* Massive stacked name */}
            <div className="hero-name" style={{ marginBottom: '1.5rem' }}>
              <SplitCharReveal text="SARANG" className="hero-name-line" style={{ display: 'block' }} />
              <SplitCharReveal text="SHIGWAN" className="hero-name-line" style={{ display: 'block' }} />
            </div>

            {/* Domain tags */}
            <div className="hero-domains" style={{ marginBottom: '2rem' }}>
              <TypewriterLabel>CLOUD</TypewriterLabel>
              <span className="hero-domain-sep">•</span>
              <TypewriterLabel>AI</TypewriterLabel>
              <span className="hero-domain-sep">•</span>
              <TypewriterLabel>SECURITY</TypewriterLabel>
            </div>

            <FadeRiseText>
              <p className="hero-tagline">
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
              </div>
            </FadeRiseText>
          </div>

          {/* ── Right: Pixel Transition Image ── */}
          <div className="hero-right">
            <PixelTransition />
          </div>

        </div>
      </div>
    </section>
  );
}