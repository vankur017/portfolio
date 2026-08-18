import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Zap, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'PortfolioLens',
      description:
        'A React-based portfolio analysis dashboard designed to provide users with a clear view of their investment portfolio. Supports portfolio data ingestion, normalization, allocation analysis, performance insights, and interactive visualizations through a clean and responsive interface.',
      image: '/portfolio_lens.jpg',
      tech: [
        'React',
        'JavaScript',
        'Data Visualization',
        'CSV Processing',
        'Tailwind CSS',
        'Responsive UI',
      ],
      github: 'https://github.com/vankur017/PortfolioLens',
      live: 'https://portfolio-lens-sand.vercel.app/',
      featured: true,
      category: 'Fintech Dashboard / Analytics',
    },
    {
      title: 'Job Application Portal',
      description:
        'A scalable job application platform built using React, Redux, and Firebase, focused on clean UI architecture and persistent user workflows. Includes authentication, role-based access, and API-driven job and profile management.',
      image:
        'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: [
        'React',
        'Redux',
        'TypeScript',
        'Firebase',
        'Tailwind CSS',
        'Framer Motion',
      ],
      github: 'https://github.com/vankur017/jobportal',
      live: 'https://jobportal-fpet.vercel.app/',
      featured: false,
      category: 'Full-Stack Platform',
    },
    {
      title: 'Bite Buddy Web App',
      description:
        'A React-based food ordering web application featuring dynamic restaurant listings, menu rendering, and optimized state management. Built with a reusable component architecture and performance-focused rendering strategies.',
      image:
        'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: [
        'React',
        'Redux',
        'JavaScript',
        'Firebase',
        'REST APIs',
        'Lazy Loading',
      ],
      github: 'https://github.com/vankur017/Bite-Buddy',
      live: 'https://bitebuddy-39ffc.web.app/',
      featured: false,
      category: 'E-Commerce SPA',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
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
                04 / PROJECTS
              </span>
              <span className="h-px w-12 bg-indigo-500/30"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Featured work & <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">applications</span>.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Production web apps highlighting state management, interactive data visualizations, and modern React architectures.
            </p>
          </motion.div>

          {/* Featured Project Spotlight */}
          {featuredProject && (
            <motion.div
              variants={itemVariants}
              className="p-1 sm:p-2 rounded-3xl bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent shadow-card"
            >
              <div className="rounded-2xl bg-[#0E1117]/95 border border-white/[0.08] overflow-hidden grid lg:grid-cols-12 gap-8 items-center">
                {/* Visual Preview */}
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[440px] overflow-hidden group">
                  <img
                    src={featuredProject.image}
                    alt={`${featuredProject.title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-transparent to-transparent opacity-80 lg:opacity-40" />
                  
                  {/* Featured Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090B]/80 backdrop-blur-md border border-indigo-500/40 text-xs font-mono font-semibold text-indigo-300 shadow-glow-sm">
                    <Zap size={13} className="text-indigo-400" />
                    <span>FEATURED SHOWCASE</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:pl-0 flex flex-col items-start text-left">
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                    {featuredProject.category}
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3 hover:text-indigo-200 transition-colors">
                    {featuredProject.title}
                  </h3>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-glow-sm hover:shadow-glow-md transition-all duration-200 group"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white font-medium text-xs border border-white/10 transition-all duration-200"
                    >
                      <Github size={15} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid of Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl bg-[#0E1117]/90 border border-white/[0.08] hover:border-white/[0.2] overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-card text-left"
              >
                {/* Image Header */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#08090B]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300">
                    {project.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;


