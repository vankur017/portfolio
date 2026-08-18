import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, Code2, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const stats = [
    { value: '4+', label: 'Years Experience', detail: 'Frontend & UI Architecture' },
    { value: '40%', label: 'Performance Boost', detail: 'Lazy loading & Code Splitting' },
    { value: '20+', label: 'Enterprise Modules', detail: 'Modernized SPA Workflows' },
    { value: '100%', label: 'Clean Code Focus', detail: 'TypeScript & Reusable Hooks' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-medium text-indigo-300">
                  Available for new opportunities
                </span>
              </div>
            </motion.div>

            {/* Intro Lead */}
            <motion.p
              variants={itemVariants}
              className="font-mono text-sm tracking-wider text-indigo-400 font-semibold uppercase mb-2"
            >
              Hi, I'm
            </motion.p>

            {/* Huge Name Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-4 leading-[1.08]"
            >
              ANKUR <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">VERMA</span>
            </motion.h1>

            {/* Subtitle / Role */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="text-xl sm:text-2xl font-semibold text-zinc-200">
                Frontend Developer
              </span>
              <span className="text-zinc-600 font-mono hidden sm:inline">•</span>
              <span className="text-base sm:text-lg font-mono text-zinc-400">
                Analyst I Software Engineer
              </span>
            </motion.div>

            {/* Highlight Statement */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-300 mb-6 leading-relaxed max-w-xl"
            >
              Building scalable, high-performance web applications with{' '}
              <span className="text-white font-semibold underline decoration-indigo-500/50 underline-offset-4">
                React
              </span>
              ,{' '}
              <span className="text-white font-semibold underline decoration-cyan-500/50 underline-offset-4">
                TypeScript
              </span>
              , and modern UI architecture. Focused on state optimization, custom hooks, and seamless user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center mb-8 w-full sm:w-auto"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-glow-sm hover:shadow-glow-md transition-all duration-300 group"
              >
                <span>View Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="/updateres.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300"
              >
                <Download size={16} className="text-indigo-400" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Proof & Quick Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 text-zinc-400 pt-2 border-t border-white/[0.08] w-full max-w-md"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/vankur017"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white hover:bg-white/[0.05] px-2.5 py-1 rounded-lg border border-transparent hover:border-white/10 transition-all"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ankur-verma-6b80b416a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white hover:bg-white/[0.05] px-2.5 py-1 rounded-lg border border-transparent hover:border-white/10 transition-all"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:vankur017@gmail.com"
                  aria-label="Email Ankur"
                  className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white hover:bg-white/[0.05] px-2.5 py-1 rounded-lg border border-transparent hover:border-white/10 transition-all"
                >
                  <Mail size={14} />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Developer Visual Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Ambient Background Glow for Card */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl -z-10 opacity-70" />

            {/* Developer Code Window Card */}
            <div className="w-full max-w-md bg-[#0F121A]/90 backdrop-blur-xl border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden text-left relative">
              {/* Card Window Top Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/[0.03] px-2.5 py-0.5 rounded border border-white/[0.05]">
                  <Code2 size={12} className="text-indigo-400" />
                  <span>developer.ts</span>
                </div>
                <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  Active
                </div>
              </div>

              {/* Code Snippet Body */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-300 overflow-x-auto">
                <div>
                  <span className="text-purple-400">interface</span>{' '}
                  <span className="text-yellow-300">Engineer</span> {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">name:</span> <span className="text-cyan-300">string</span>;
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">role:</span> <span className="text-cyan-300">string</span>;
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">coreStack:</span> <span className="text-cyan-300">string[]</span>;
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">focus:</span> <span className="text-cyan-300">string</span>;
                </div>
                <div>{'}'}</div>
                <div className="mt-3">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-indigo-300">developer</span>:{' '}
                  <span className="text-yellow-300">Engineer</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">name:</span>{' '}
                  <span className="text-emerald-300">"Ankur Verma"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">role:</span>{' '}
                  <span className="text-emerald-300">"Frontend Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">coreStack:</span> [
                  <span className="text-indigo-300">"ReactJs"</span>,{' '}
                  <span className="text-cyan-300">"JavaScript"</span>,{' '}
                  <span className="text-purple-300">"Redux"</span>,
                  <span className="text-purple-300">"API Testing"</span>,
                  <span className="text-purple-300">"Apachae JMeter"</span>
                  ],

                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">focus:</span>{' '}
                  <span className="text-emerald-300">"Scalable UI & Performance"</span>,

                </div>
                <div className="pl-4 text-zinc-500">
                  <span className="text-zinc-400">status:</span>{' '}
                  <span className="text-emerald-400">"Ready for impact"</span>
                </div>
                <div>{'};'}</div>
              </div>

              {/* Card Footer Status Banner */}
              <div className="px-5 py-3 bg-indigo-950/30 border-t border-indigo-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>4+ Years Enterprise Experience</span>
                </div>
                <div className="text-[11px] font-mono text-zinc-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                  DXC Tech
                </div>
              </div>
            </div>

            {/* Floating Micro Badge 1: React 18 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-2 sm:-right-4 bg-[#121622]/90 backdrop-blur-md border border-cyan-500/30 px-3 py-1.5 rounded-xl shadow-glow-cyan flex items-center gap-1.5 text-xs font-mono text-cyan-300"
            >
              <Zap size={13} className="text-cyan-400" />
              <span>React 18 SPA</span>
            </motion.div>

            {/* Floating Micro Badge 2: 99% Performance */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-2 sm:-left-4 bg-[#121622]/90 backdrop-blur-md border border-indigo-500/30 px-3 py-1.5 rounded-xl shadow-glow-sm flex items-center gap-1.5 text-xs font-mono text-indigo-300"
            >
              <ShieldCheck size={13} className="text-emerald-400" />
              <span>35% Faster Renders</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-24 pt-8 border-t border-white/[0.08]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 group"
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-white group-hover:text-indigo-300 transition-colors mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-300 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-zinc-500">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

