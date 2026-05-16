import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';
import './styles.css';

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      {/* Custom Blend-Mode Cursor */}
      <Cursor />

      {/* Top progress bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'var(--text-primary)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 9999
        }}
      />

      {/* Floating Hire Me Badge */}
      <a href="#contact" className="floating-badge">
        <div className="badge-center"></div>
        <svg viewBox="0 0 100 100" width="100" height="100" className="badge-text">
          <defs>
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
          </defs>
          <text fontSize="11" fontWeight="bold" fill="var(--text-secondary)" letterSpacing="1.5">
            <textPath href="#circlePath">
              • FREELANCE • AVAILABLE FOR WORK
            </textPath>
          </text>
        </svg>
      </a>

      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Made with 💻, ☕ and ❤️ by Sarang Shigwan
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', opacity: 0.6 }}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;