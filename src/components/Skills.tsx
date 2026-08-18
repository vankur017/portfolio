import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Gauge,
  ShieldCheck,
  Terminal,
  Server
} from 'lucide-react';

interface SkillItem {
  name: string;
  badge?: string;
  highlight?: boolean;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  accent: string;
  skills: SkillItem[];
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories: SkillCategory[] = [
    {
      title: 'Frontend Engineering',
      subtitle: 'Core UI architecture, state management & design systems',
      icon: Code2,
      accent: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
      skills: [
        { name: 'React.js', badge: 'Core', highlight: true },
        { name: 'JavaScript (ES6+)', highlight: true },
        { name: 'TypeScript', badge: 'Typed', highlight: true },
        { name: 'Redux Toolkit', badge: 'State', highlight: true },
        { name: 'React Router', highlight: true },
        { name: 'DXC Halstack', highlight: true },
        { name: 'HTML5' },
        { name: 'CSS3' },
      ],
    },
    {
      title: 'API & Performance Testing',
      subtitle: 'REST endpoints, contract validation & concurrency benchmarks',
      icon: Gauge,
      accent: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
      skills: [
        { name: 'REST APIs', badge: 'Integration', highlight: true },
        { name: 'API Testing', highlight: true },
        { name: 'Postman', highlight: true },
        { name: 'Swagger' },
        { name: 'Apache JMeter', badge: 'Perf', highlight: true },
        { name: 'Manual Testing' },
      ],
    },
    {
      title: 'Authentication & Security',
      subtitle: 'Enterprise IAM migration, token lifecycles & SAST remediation',
      icon: ShieldCheck,
      accent: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      skills: [
        { name: 'Keycloak', badge: 'IAM', highlight: true },
        { name: 'OpenAM', highlight: true },
        { name: 'JWT (Tokens)', highlight: true },
        { name: 'LDAP' },
        { name: 'Fortify SAST', badge: 'Security', highlight: true },
      ],
    },
    {
      title: 'Tools & CI/CD Delivery',
      subtitle: 'Version control, automated pipelines & modern developer IDEs',
      icon: Terminal,
      accent: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
      skills: [
        { name: 'Git', badge: 'VCS', highlight: true },
        { name: 'Jenkins', badge: 'CI/CD', highlight: true },
        { name: 'VS Code', highlight: true },
        { name: 'Eclipse' },
      ],
    },
    {
      title: 'Application Servers & Runtime',
      subtitle: 'Enterprise servlet containers & application hosting environments',
      icon: Server,
      accent: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
      skills: [
        { name: 'IBM WebSphere Liberty', badge: 'Enterprise', highlight: true },
        { name: 'Apache Tomcat', highlight: true },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
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
                03 / SKILLS
              </span>
              <span className="h-px w-12 bg-indigo-500/30"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Technical <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">skills & toolkit</span>.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Core technologies, tools, and enterprise frameworks utilized across 4+ years of software engineering at DXC Technology.
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 sm:p-7 rounded-2xl bg-[#0E1117]/90 border border-white/[0.08] hover:border-white/[0.2] transition-all duration-300 backdrop-blur-xl flex flex-col justify-between text-left group hover:-translate-y-1 shadow-card ${
                  index >= 3 ? 'lg:col-span-1.5' : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${cat.accent}`}>
                      <cat.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-display group-hover:text-indigo-200 transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                    {cat.subtitle}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <div
                        key={i}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                          skill.highlight
                            ? 'bg-white/[0.05] border border-white/[0.12] text-zinc-200 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white'
                            : 'bg-white/[0.02] border border-white/[0.05] text-zinc-400 hover:text-zinc-200 hover:border-white/10'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span>{skill.name}</span>
                        {skill.badge && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Meta indicator */}
                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-emerald-400">● Production Ready</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

