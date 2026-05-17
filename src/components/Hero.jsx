import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';
import myImage from '../assets/SarangSS.jpg';

const roles = ['AI Full-Stack Engineer', 'Python Backend Dev', 'AWS Architect', 'GenAI Builder'];

/* ── Scramble hook: randomises chars before settling ── */
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';
function useScramble(target, active) {
  const [display, setDisplay] = useState(target);
  const frame = useRef(0);
  const raf   = useRef(null);

  useEffect(() => {
    if (!active) { setDisplay(target); return; }
    let iter = 0;
    const total = target.length * 2.5;
    cancelAnimationFrame(raf.current);

    const tick = () => {
      setDisplay(
        target
          .split('')
          .map((ch, i) => {
            if (i < iter / 2.5) return ch;
            if (ch === ' ')     return ' ';
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      iter++;
      if (iter <= total) raf.current = requestAnimationFrame(tick);
      else               setDisplay(target);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, active]);

  return display;
}

/* ── Aurora Orb background ── */
const AuroraBackground = () => {
  const containerRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const dx = (clientX / innerWidth  - 0.5) * 30;
    const dy = (clientY / innerHeight - 0.5) * 20;
    containerRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="hero-aurora">
      <div
        ref={containerRef}
        style={{ position: 'absolute', inset: '-5%', transition: 'transform 0.8s cubic-bezier(0.25,1,0.5,1)' }}
      >
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
      </div>
    </div>
  );
};

/* ── Mouse-tracking tilt portrait ── */
const TiltPortrait = () => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]),  springCfg);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springCfg);
  const glowX   = useSpring(useTransform(mouseX, [-0.5, 0.5], [30, 70]),  springCfg);
  const glowY   = useSpring(useTransform(mouseY, [-0.5, 0.5], [30, 70]),  springCfg);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width  - 0.5);
    mouseY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="portrait-wrapper"
      initial={{ opacity: 0, x: 60, rotate: -6 }}
      animate={{ opacity: 1, x: 0, rotate: -4 }}
      transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
      style={{ perspective: 800, transformStyle: 'preserve-3d' }}
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          {/* Glow ring — violet/cyan gradient */}
          <motion.div
            className="portrait-glow-ring"
            style={{
              background: useTransform(
                [glowX, glowY],
                ([x, y]) =>
                  `radial-gradient(circle at ${x}% ${y}%, rgba(204,255,0,0.35) 0%, transparent 60%)`,
              ),
            }}
          />
          <div className="portrait-frame-premium">
            <img src={myImage} alt="Sarang Shigwan — AI Full-Stack Engineer" loading="eager" />
            <div className="portrait-blend-overlay" />
            <div className="portrait-vignette" />
            <motion.div
              className="portrait-shimmer"
              style={{
                background: useTransform(
                  [glowX, glowY],
                  ([x, y]) =>
                    `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.12) 0%, transparent 55%)`,
                ),
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

/* ── Scrambling role badge ── */
const ScrambleRole = ({ text }) => {
  const [active, setActive] = useState(false);
  const displayed = useScramble(text, active);

  useEffect(() => {
    setActive(true);
    const t = setTimeout(() => setActive(false), text.length * 35 + 400);
    return () => clearTimeout(t);
  }, [text]);

  return <span className="highlight">{displayed}</span>;
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((c) => (c + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
  const itemVariants = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <section id="hero" className="hero">
      {/* Aurora orbs */}
      <AuroraBackground />

      {/* Violet-tinted dot grid */}
      <div className="hero-grid" />

      <div className="container hero-content">
        <div className="hero-layout">

          {/* ── Left: Text ── */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants}>
              <div className="availability-badge">
                <span className="status-dot" />
                Available for freelance
              </div>
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              Building Systems<br />That Scale.
            </motion.h1>

            <motion.div className="hero-roles" variants={itemVariants}>
              <span style={{ marginRight: '8px' }}>I'm a</span>
              <div style={{ position: 'relative', flex: 1, height: '100%' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0, position: 'absolute' }}
                    animate={{ y: 0, opacity: 1, position: 'relative' }}
                    exit={{ y: -20, opacity: 0, position: 'absolute' }}
                    transition={{ duration: 0.25 }}
                  >
                    <ScrambleRole text={roles[roleIndex]} />
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.p className="hero-desc" variants={itemVariants}>
              I specialize in building AI-native applications using RAG pipelines,
              vector embeddings, and cloud-native architectures. Turning complex data
              into scalable, production-ready solutions.
            </motion.p>

            <motion.div className="hero-actions" variants={itemVariants}>
              <Magnetic strength={0.3}>
                <a href="#projects" className="btn btn-primary">
                  View My Work <ArrowRight size={18} />
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a href="#contact" className="btn btn-outline">Let's Talk</a>
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* ── Right: Tilt Portrait ── */}
          <TiltPortrait />

        </div>
      </div>
    </section>
  );
};

export default Hero;