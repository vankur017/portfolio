import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ShieldCheck, Rocket, Database, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const pillars = [
    {
      icon: Code,
      title: 'Frontend Engineering',
      description:
        'Architecting scalable, modular Single Page Applications with React 18, TypeScript, and Redux Toolkit with strict component reusability.',
      accent: 'from-indigo-500/20 to-indigo-500/5',
      iconColor: 'text-indigo-400',
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description:
        'Achieving 35-40% render speedups through code splitting, memoization, virtualization, and streamlined network payload handling.',
      accent: 'from-cyan-500/20 to-cyan-500/5',
      iconColor: 'text-cyan-400',
    },
    {
      icon: ShieldCheck,
      title: 'Testing & QA Automation',
      description:
        'Authoring comprehensive unit, integration, and E2E suites with Jest, React Testing Library, and Apache JMeter for high concurrency.',
      accent: 'from-emerald-500/20 to-emerald-500/5',
      iconColor: 'text-emerald-400',
    },
    {
      icon: Database,
      title: 'API & Serverless Workflows',
      description:
        'Seamless REST API integration, RBAC permissions, and serverless backends utilizing Firebase Firestore and Cloud Functions.',
      accent: 'from-purple-500/20 to-purple-500/5',
      iconColor: 'text-purple-400',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                01 / ABOUT ME
              </span>
              <span className="h-px w-12 bg-indigo-500/30"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Building interfaces with <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">purpose & precision</span>.
            </h2>
          </motion.div>

          {/* 2-Column Main Content */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            {/* Left Column: Narrative Story + Stat Cards */}

            
            <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
                <p>
                  I'm a{' '}
                  <span className="text-white font-semibold">
                    Frontend-focused Software Engineer
                  </span>{' '}
                  and{' '}
                  <span className="text-white font-semibold">
                    Analyst I – Software Engineer
                  </span>{' '}
                  at DXC Technology with{' '}
                  <span className="text-indigo-300 font-semibold">
                    4+ years of experience
                  </span>{' '}
                  building and modernizing enterprise-grade applications.
                </p>

                <p className="text-zinc-400 text-sm sm:text-base">
                  I specialize in the{' '}
                  <span className="text-white font-medium">
                    React ecosystem
                  </span>
                  , working with React 18, TypeScript, JavaScript, Redux Toolkit,
                  and DXC Halstack to transform complex legacy workflows into
                  scalable and maintainable Single Page Applications.
                </p>

                <p className="text-zinc-400 text-sm sm:text-base">
                  My experience includes building reusable UI components, integrating
                  REST APIs, implementing role-based access control, modernizing
                  JavaScript modules to TypeScript, and improving frontend performance
                  through lazy loading, code splitting, memoization, and optimized
                  rendering patterns.
                </p>
              </div>

              {/* Highlights Cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-[#0E1117]/80 border border-white/[0.08] backdrop-blur-md">
                  <div className="text-2xl font-display font-bold text-indigo-400 mb-1">
                    4+ Years
                  </div>

                  <div className="text-xs font-semibold text-zinc-300">
                    Software Engineering
                  </div>

                  <div className="text-[11px] font-mono text-zinc-500 mt-1">
                    DXC Technology
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0E1117]/80 border border-white/[0.08] backdrop-blur-md">
                  <div className="text-2xl font-display font-bold text-cyan-400 mb-1">
                    React & TypeScript
                  </div>

                  <div className="text-xs font-semibold text-zinc-300">
                    Primary Specialization
                  </div>

                  <div className="text-[11px] font-mono text-zinc-500 mt-1">
                    Enterprise SPA Development
                  </div>
                </div>
              </div>

              {/* Engineering Focus */}
              <div className="pt-2 space-y-2.5">
                {[
                  'React 18, TypeScript & reusable component architecture',
                  'Redux Toolkit, REST API integration & application state management',
                  'Performance optimization, responsive UI & accessibility-focused development',
                  'Enterprise application modernization and legacy system migration',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 font-mono"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-emerald-400 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
           



            {/* Right Column: 4 Architecture Pillar Cards */}
            <motion.div variants={itemVariants} className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-[#0E1117]/90 border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 group hover:-translate-y-1 hover:shadow-card relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.accent} rounded-full blur-2xl -z-10 group-hover:scale-125 transition-transform duration-500`}
                  />

                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:border-indigo-500/40 transition-colors">
                    <pillar.icon size={20} className={pillar.iconColor} />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

