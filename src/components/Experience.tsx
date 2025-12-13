import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

 const experiences = [
  {
    company: "DXC Technology",
    position: "Analyst I – Software Engineer",
    duration: "October 2025 – Present",
    location: "Noida, Uttar Pradesh",
    description:
      "Working on enterprise-grade insurance platforms, modernizing legacy systems into scalable Single Page Applications using React 18 and DXC Halstack Design System. Focused on performance optimization, secure role-based access, and API-driven workflows.",
    achievements: [
      "Migrated a legacy command-line Product Loader into a modern, responsive SPA using React 18 and dxchalstack.",
      "Integrated REST APIs to transform relational database tables into XML for backend processing workflows.",
      "Positioned Product Loader as a single source of truth for insurance products such as Assure Product Engine and Product Wizard.",
      "Implemented Role-Based Access Control (RBAC) with dynamic UI rendering based on REST endpoint responses.",
      "Optimized front-end performance using lazy loading, code splitting, memoization, and conditional rendering, improving Core Web Vitals.",
    ],
  },
  {
    company: "DXC Technology",
    position: "Analyst II – Software Engineer",
    duration: "June 2022 – September 2025",
    location: "Noida, Uttar Pradesh",
    description:
      "Contributed to UI development, API validation, and performance testing for large-scale insurance systems, ensuring reliability, scalability, and SLA compliance across cloud-deployed applications.",
    achievements: [
      "Designed and developed core UI pages for the Product Delivery Loader (PDL) application with seamless navigation from the home page.",
      "Created a comprehensive Postman test plan covering complete API user flows, from authentication to business transactions.",
      "Led API performance testing using JMeter for high-traffic insurance applications including wmA, Cyberlife, and Assure Life.",
      "Simulated 1,000+ concurrent users to validate transaction throughput, response times, and SLA exit criteria.",
      "Ensured functional and performance readiness of cloud-deployed applications prior to production release.",
    ],
  },
];




  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className=" min-h-screen flex items-center justify-center relative overflow-hidden 
   ring-1 ring-white/5 shadow-inner">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 top-6 w-4 h-4 bg-indigo-500 rounded-full border-4 border-gray-900"></div>

                <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                      <p className="text-indigo-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:text-right mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-indigo-400 mb-2">
                      <Award size={16} className="mr-2" />
                      <span className="font-medium">Key Achievements</span>
                    </div>
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                        {achievement}
                      </div>
                    ))}
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

export default Experience;