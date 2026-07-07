import React, { useRef, useState } from 'react';
import myImage from '../assets/hero_portrait.png';

export default function PixelTransition() {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const percentX = (mouseX - centerX) / (rect.width / 2);
    const percentY = (mouseY - centerY) / (rect.height / 2);

    const maxRotate = 5; // 4-6 degrees max
    
    setRotation({
      x: percentY * -maxRotate,
      y: percentX * maxRotate
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className="pixel-transition-wrapper" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        aspectRatio: '3/4',
        margin: '0 auto',
        cursor: 'default'
      }}
    >
      {/* Background Soft Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '140%',
        height: '140%',
        background: 'radial-gradient(circle, #D4FF3F 0%, transparent 60%)',
        opacity: 0.04,
        filter: 'blur(40px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Hero Image Container */}
      <div 
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
          transformStyle: 'preserve-3d',
          zIndex: 1
        }}
      >
        <img
          src={myImage}
          alt="Sarang Shigwan"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            display: 'block'
          }}
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
}
