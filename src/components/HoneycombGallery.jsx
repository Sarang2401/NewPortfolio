import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import skillsData from '../data/skills';

/* ─── Hex geometry — pointy-top hexagon ────────────────────── */
const HEX_R       = 46;                              // circumradius (px)
const HEX_W       = Math.round(HEX_R * Math.sqrt(3)); // ≈ 80px  (width)
const HEX_H       = HEX_R * 2;                      // 92px   (height)
const COL_SPACING = HEX_W + 4;                      // 84px   (center-to-center, same row)
const ROW_SPACING = Math.round(HEX_H * 0.75);       // 69px   (center-to-center, adjacent rows)

/* ─── clip-path for a pointy-top regular hexagon ───────────── */
const HEX_CLIP = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

/* ─── Row template: [4,5,4,5,4,5] → 27 slots, fill with 24 ── */
const ROW_DEFS    = [4, 5, 4, 5, 4, 5];
const CONTAINER_W = 5 * COL_SPACING;                                // 420px
const CONTAINER_H = (ROW_DEFS.length - 1) * ROW_SPACING + HEX_H;   // 437px

function computePositions(skills) {
  const positions = [];
  let idx = 0;

  ROW_DEFS.forEach((maxCount, row) => {
    const count = Math.min(maxCount, skills.length - idx);
    if (count <= 0) return;

    // Centre each row (including partial last row)
    const startX = (CONTAINER_W - count * COL_SPACING) / 2;

    for (let col = 0; col < count; col++) {
      positions.push({
        x:     startX + col * COL_SPACING,
        y:     row * ROW_SPACING,
        skill: skills[idx],
        idx:   idx++,
      });
    }
  });

  return positions;
}

export default function HoneycombGallery() {
  /* Scroll-driven rotation: section enters (−14°) → leaves (+14°) */
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target:  sectionRef,
    offset:  ['start end', 'end start'],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [-14, 14]);

  const positions = useMemo(() => computePositions(skillsData), []);

  return (
    <div className="honeycomb-wrap" ref={sectionRef}>
      {/* zoom-scale wrapper — doesn't interfere with Framer rotate */}
      <div className="honeycomb-scale">
        <motion.div
          className="honeycomb-container"
          style={{
            rotate,
            width:    CONTAINER_W,
            height:   CONTAINER_H,
            position: 'relative',
          }}
        >
          {positions.map(({ x, y, skill, idx }) => (
            <motion.div
              key={idx}
              className="hex-outer"
              style={{ left: x, top: y, width: HEX_W, height: HEX_H, clipPath: HEX_CLIP }}
              initial={{ opacity: 0, scale: 0.15 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.5,
                delay:    idx * 0.038,
                ease:     [0.34, 1.56, 0.64, 1], // spring-bounce
              }}
            >
              <div className="hex-inner" style={{ clipPath: HEX_CLIP }}>
                <span className="hex-label">{skill}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
