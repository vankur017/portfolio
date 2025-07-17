import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden 
      bg-gradient-to-br from-zinc-900 to-black backdrop-blur-md 
      border-y border-zinc-800 ring-1 ring-white/5 shadow-inner"
    >
      {/* Animated Background Blob */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl -z-10"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div className="mb-4">
            <span className="text-indigo-400 text-lg font-medium">Hi, I'm</span>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ankur Verma
            </span>
          </motion.h1>

          <motion.h2
            variants={textVariants}
            className="text-2xl md:text-3xl text-zinc-300 mb-2"
          >
            Associate Software Developer
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="text-sm md:text-base text-indigo-300 mb-8 flex flex-wrap justify-center gap-x-2"
          >
            React.js | Firebase | TypeScript | JavaScript | Cypress | Jest
          </motion.p>

          <motion.p
            variants={textVariants}
            className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            3+ years of experience building scalable and responsive web apps using React, Redux Toolkit,
            TypeScript, Firebase, and Tailwind CSS. Focused on performance, modular architecture, and seamless user experiences through modern development practices.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/updatedres.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-indigo-500 text-indigo-400 px-8 py-3 rounded-full font-medium hover:bg-indigo-500 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Optional Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        {/* You can add <ChevronDown /> or bounce animation here if needed */}
      </motion.div>
    </section>
  );
};

export default Hero;
