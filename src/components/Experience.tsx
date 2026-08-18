import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = {
    company: 'DXC Technology',
    position: 'Analyst I – Software Engineer',
    duration: 'June 2022 – Present (4+ Years)',
    location: 'Noida, India',
    type: 'Full-time',
    description:
      'Engineering and modernizing enterprise-scale insurance web applications, delivering reusable and high-performance React UI components, integrating secure authentication workflows, and driving automated performance validation.',
    achievements: [
      'Develop and enhance enterprise web applications using React.js, JavaScript, TypeScript, and DXC Halstack, delivering reusable and responsive UI components for insurance applications.',
      'Designed reusable DataGrid components supporting filtering, sorting, searching, and pagination, improving consistency and maintainability across the PDL application.',
      'Integrated REST APIs and implemented React-based authentication flows, including a reusable authentication hook for access token lifecycle management, automatic token renewal, and authorized API requests.',
      'Contributed to the OpenAM to Keycloak authentication migration by refactoring frontend authentication flows and integrating modern access and refresh token based authentication.',
      'Improved frontend maintainability and runtime efficiency through reusable component architecture, efficient state management, code cleanup, and removal of lint issues.',
      'Identified and remediated High and Critical Fortify SAST vulnerabilities by applying secure coding practices and validating fixes across enterprise applications.',
      'Designed and executed Apache JMeter performance tests for WMA, CyberLife, and AssureLife applications, validating application behavior and scalability with workloads of up to 1,000 concurrent users.',
      'Created custom JMeter scripts and functional test cases and supported performance execution through Jenkins pipelines, improving repeatability of performance validation.',
      'Performed UI, functional, and API validation using Postman and Swagger, verifying end-to-end business workflows and REST API behavior.',
      'Collaborated with development, QA, DevOps, and business teams in Agile sprints, contributing to code reviews, Git based releases, defect resolution, and production deployments.',
    ],
    skills: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'DXC Halstack',
      'Redux Toolkit',
      'Keycloak Auth',
      'REST APIs',
      'Apache JMeter',
      'Postman',
      'Jenkins & CI/CD',
      'Git',
      'Fortify SAST',
    ],
  };

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

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
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
                02 / EXPERIENCE
              </span>
              <span className="h-px w-12 bg-indigo-500/30"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Enterprise engineering <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">track record</span>.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Proven 4+ years track record building mission-critical enterprise frontend systems and modernizing legacy Single Page Applications at DXC Technology.
            </p>
          </motion.div>

          {/* Consolidated Experience Card */}
          <motion.div variants={itemVariants} className="relative">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#0E1117]/90 border border-white/[0.08] hover:border-indigo-500/30 backdrop-blur-xl transition-all duration-300 shadow-card text-left relative overflow-hidden">
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

              {/* Header: Position + Company + Meta */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                      {experience.position}
                    </h3>
                    <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      {experience.type}
                    </span>
                  </div>
                  <div className="text-lg font-semibold text-indigo-400">
                    {experience.company}
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col lg:items-end gap-2 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/[0.05]">
                    <Calendar size={14} className="text-indigo-400" />
                    <span className="text-zinc-200 font-medium">{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/[0.05]">
                    <MapPin size={14} className="text-cyan-400" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              {/* Description Narrative */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed my-6">
                {experience.description}
              </p>

              {/* Key Achievements List */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-300">
                  <Award size={16} className="text-indigo-400" />
                  <span>Key Deliverables & Engineering Accomplishments</span>
                </div>

                <div className="grid gap-3 pl-1">
                  {experience.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 group/bullet">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0 group-hover/bullet:bg-cyan-400 group-hover/bullet:scale-125 transition-all" />
                      <span className="leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-500 uppercase mr-1">Technologies & Tools:</span>
                {experience.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/[0.06] hover:border-indigo-500/40 hover:text-indigo-200 px-2.5 py-1 rounded-lg transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
