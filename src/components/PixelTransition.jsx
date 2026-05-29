import React from 'react';
import myImage from '../assets/SarangSS.jpg';

/**
 * Static hero portrait — premium frame with lime glow,
 * subtle hover scale. No transitions, no cycling.
 */
export default function PixelTransition() {
  return (
    <div className="pixel-transition-wrapper">
      <div className="pixel-frame pixel-frame--static">
        <img
          src={myImage}
          alt="Sarang Shigwan — Cloud, AI & Security Engineer"
          className="pixel-img"
          loading="eager"
          decoding="async"
        />
        {/* Edge vignette */}
        <div className="portrait-vignette" />
      </div>
    </div>
  );
}
