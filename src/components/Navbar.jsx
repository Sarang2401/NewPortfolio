import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Plus, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const domains = ['CLOUD ENGINEER', 'AI SPECIALIST', 'SECURITY PRO', 'FULL-STACK'];
  const [domainIndex, setDomainIndex] = useState(0);
  const dropdownRef = useRef(null);

  // Cycle domains
  useEffect(() => {
    const interval = setInterval(() => {
      setDomainIndex((prev) => (prev + 1) % domains.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#hero' },
    { name: 'WORK', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'ABOUT', href: '#about' },
  ];

  const handleNavClick = (e, href) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useGSAP(() => {
    if (isOpen) {
      gsap.to(dropdownRef.current, {
        height: 'auto',
        duration: 0.5,
        ease: 'power3.inOut'
      });
      gsap.fromTo('.island-nav-item', 
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', delay: 0.2 }
      );
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        duration: 0.4,
        ease: 'power3.inOut'
      });
    }
  }, [isOpen]);

  return (
    <div className="island-wrapper">
      
      {/* Main Island Bar */}
      <div className="island-main">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="island-brand">
          Sarang<span className="island-dot" />
        </a>
        
        <div className="island-divider" />
        
        <div className="island-domain-container">
          <div key={domainIndex} className="island-domain-text">
            {domains[domainIndex]}
          </div>
        </div>
        
        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="island-btn">
          LET'S TALK
        </a>
      </div>

      {/* Dropdown Content */}
      <div className="island-dropdown" ref={dropdownRef}>
        <div className="island-dropdown-inner">
          <div className="island-links">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="island-nav-item"
              >
                <ArrowRight size={14} className="island-nav-arrow" />
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="island-sub-links">
            <a href="/resumes/SarangShigwan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="island-nav-item">
              <ArrowRight size={14} className="island-nav-arrow" />
              RESUME
            </a>
          </div>
        </div>
      </div>

      {/* The Folder Tab */}
      <div className="island-tab-container">
        <button className="island-tab" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'CLOSE' : 'INDEX'} 
          {isOpen ? <X size={14} /> : <Plus size={14} />}
        </button>
      </div>

    </div>
  );
}