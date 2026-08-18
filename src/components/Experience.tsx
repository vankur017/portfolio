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
      "Driving frontend development and modernization of enterprise insurance applications, transforming legacy workflows into scalable and maintainable Single Page Applications using React 18, TypeScript, Redux Toolkit, and DXC Halstack.",
    achievements: [
      "Designed and delivered a modern React 18 SPA for the Product Loader application, replacing legacy UI workflows with reusable and responsive components using DXC Halstack.",
      "Developed reusable, data-driven React components and custom hooks to standardize API integration, state handling, validation, and UI behavior across application modules.",
      "Implemented Role-Based Access Control (RBAC) with dynamic routing and conditional UI rendering based on API-driven user permissions.",
      "Led the migration of key application modules from JavaScript to TypeScript, improving type safety, code maintainability, and development reliability.",
      "Improved frontend performance by approximately 35% through lazy loading, code splitting, memoization, and optimized React rendering patterns.",
      "Collaborated with backend, QA, and product teams to deliver production-ready features and resolve functional and integration issues.",
    ],
  },
  {
    company: "DXC Technology",
    position: "Analyst II – Software Engineer",
    duration: "June 2022 – September 2025",
    location: "Noida, Uttar Pradesh",
    description:
      "Developed and enhanced frontend features for enterprise insurance applications, working across UI development, REST API integration, application state management, validation, and performance testing.",
    achievements: [
      "Developed and enhanced enterprise UI workflows using React, Redux Toolkit, JavaScript, and react-router-dom across multiple insurance application modules.",
      "Integrated REST APIs and implemented application state management to support data-driven screens, user workflows, and dynamic UI interactions.",
      "Implemented client-side validations, loading states, error handling, and reusable UI patterns to improve application usability and reliability.",
      "Performed performance testing using Apache JMeter with high-concurrency scenarios to identify application and API performance bottlenecks.",
      "Worked with QA and backend teams to investigate defects, validate fixes, and ensure functional and performance readiness for production releases.",
      "Contributed to application maintenance, troubleshooting, and modernization activities across enterprise insurance products.",
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