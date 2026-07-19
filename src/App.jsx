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
      </main>

      <Contact />
    </div>
  );
};

export default App;