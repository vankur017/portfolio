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
    position: "Analyst I – Software Engineer (Promoted)",
    duration: "October 2025 – Present",
    location: "Noida, Uttar Pradesh",
    description:
      "Leading frontend development for enterprise-grade insurance platforms by modernizing legacy systems into scalable Single Page Applications using React 18 and DXC Halstack (React-based design system). Focused on performance optimization, reusable UI architecture, and secure role-based access.",
    achievements: [
      "Designed and delivered a modern, responsive SPA by migrating a legacy Product Loader into a React 18 application using DXC Halstack.",
      "Built reusable, data-driven UI components and custom React hooks to standardize API interactions and state handling across modules.",
      "Implemented Role-Based Access Control (RBAC) with dynamic routing and conditional UI rendering based on API-driven permissions.",
      "Led migration of key modules from JavaScript to TypeScript, improving type safety, maintainability, and reducing runtime issues.",
      "Improved frontend performance by ~35% using lazy loading, code splitting, memoization (useMemo, useCallback), and optimized rendering patterns.",
    ],
  },
  {
    company: "DXC Technology",
    position: "Analyst II – Software Engineer",
    duration: "June 2022 – September 2025",
    location: "Noida, Uttar Pradesh",
    description:
      "Worked on frontend feature development, API validation, and performance testing for large-scale insurance applications, focusing on reliability, scalability, and smooth user experience.",
    achievements: [
      "Developed and enhanced core UI workflows using React, Redux, and react-router-dom for enterprise insurance modules.",
      "Integrated REST APIs and managed global application state to support data-driven UI screens and user workflows.",
      "Implemented client-side validations, loading states, and error handling to improve usability and resilience.",
      "Performed performance testing using JMeter, simulating 1,000+ concurrent users to identify frontend and API bottlenecks.",
      "Collaborated with backend and QA teams to ensure functional and performance readiness before production releases.",
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