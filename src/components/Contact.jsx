import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Magnetic from './Magnetic';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-title">
            Let's build something<br/>
            <span className="gradient-text">impactful</span> together.
          </h2>
          
          <p className="contact-desc">
            Currently available for freelance projects and full-time opportunities.
            <br />Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Magnetic strength={0.3}>
              <a href="mailto:sarang2401@gmail.com" className="btn btn-primary">
                <Mail size={20} /> Say Hello
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a href="/resumes/SarangShigwan_AIFullstack.pdf" download className="btn btn-outline">
                Download Resume
              </a>
            </Magnetic>
          </div>

          <div className="social-links">
            <Magnetic strength={0.4}>
              <a href="https://github.com/Sarang2401" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <Github size={24} />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href="https://www.linkedin.com/in/sarang-shigwan-9a9668266/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;