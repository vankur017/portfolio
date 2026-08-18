import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle Dot Grid Layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Top Left Indigo Glow */}
      <motion.div
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[130px]"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Center Right Cyan Glow */}
      <motion.div
        className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[140px]"
        animate={{
          x: [0, -50, 20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.12, 1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Bottom Center Violet Glow */}
      <motion.div
        className="absolute bottom-[-10%] left-[25%] w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[150px]"
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.05, 1.1, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Vignette Overlay to frame content nicely */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,9,11,0.6)_100%)]" />
    </div>
  );
};

export default ParticleBackground;

