import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Address',
      info: 'vankur017@gmail.com',
      link: 'mailto:vankur017@gmail.com',
      badge: 'Preferred',
      action: 'Send an email',
    },
    {
      icon: Phone,
      title: 'Phone / WhatsApp',
      info: '+91-6386942812',
      link: 'tel:+916386942812',
      badge: 'Direct',
      action: 'Call now',
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'Noida, Uttar Pradesh, India',
      link: 'https://maps.google.com/?q=Noida',
      action: 'View on map',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12 text-center"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                05 / CONTACT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Let's build something <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">extraordinary</span>.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
              Available for full-time Frontend Developer roles, technical collaborations, and React-based architecture projects.
            </p>
          </motion.div>

          {/* Get In Touch Directly Card */}
          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0E1117]/90 border border-white/[0.08] backdrop-blur-xl shadow-card text-left relative overflow-hidden">
              {/* Subtle Ambient Glow inside Card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                <div>
                  <h3 className="text-2xl font-bold font-display text-white mb-1">
                    Get In Touch Directly
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    Reach out directly through email or phone for inquiries and opportunities.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 whitespace-nowrap self-start sm:self-auto">
                  <Clock size={13} />
                  <span>&lt; 24h response</span>
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/40 hover:bg-white/[0.06] transition-all duration-300 group shadow-sm"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:scale-105 group-hover:border-indigo-500/40 transition-all flex-shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-2 mb-0.5">
                          <span>{item.title}</span>
                          {item.badge && (
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-sm sm:text-base font-semibold text-zinc-200 group-hover:text-white truncate">
                          {item.info}
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-1 text-xs font-mono text-indigo-400 group-hover:text-indigo-300 pl-4 flex-shrink-0">
                      <span>{item.action}</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;


