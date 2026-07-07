import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Marquee from './components/Marquee';
import EngineeringHighlights from './components/EngineeringHighlights';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Projects />
        <EngineeringHighlights />
        <Skills />
        <About />
        <Contact />
      </main>

      <footer className="footer" style={{ paddingBottom: '2rem' }}>
        <div
          className="container footer-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            textAlign: 'center',
          }}
        >
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