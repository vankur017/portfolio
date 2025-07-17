import React from 'react';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
   return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Deep Teal Blob */}
      <motion.div
        className="absolute top-[-150px] left-[-120px] w-[500px] h-[500px] rounded-full bg-[#1A2A2E] opacity-30 blur-3xl"
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 30, 0], scale: [1, 1.1, 1.2, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft Purple Blob */}
      <motion.div
        className="absolute bottom-[-180px] right-[-150px] w-[600px] h-[600px] rounded-full bg-[#4C3A51] opacity-25 blur-3xl"
        animate={{ x: [0, -60, 30, 0], y: [0, 70, -40, 0], scale: [1, 1.2, 1.1, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Muted Blue Accent */}
      <motion.div
        className="absolute top-[40%] left-[45%] w-[300px] h-[300px] rounded-full bg-[#30475E] opacity-20 blur-2xl"
        animate={{ x: [0, 20, -10, 0], y: [0, -30, 15, 0], scale: [1, 1.05, 1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default ParticleBackground;
