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
    position: "Associate Software Developer",
    duration: "June 2022 – Present",
    location: "Noida, India",
    description:
      "Contributed to building scalable, responsive web applications with React and Redux Toolkit. Collaborated across teams to transition legacy systems into modern SPAs, enhance performance, ensure code quality, and improve delivery workflows.",
    achievements: [
      "Converted a command-line tool to Product Loader UI a responsive web app with React + Redux, using SOAP services to generate XML file from tabular data using XMLG as service.",
      "Developed a secure upload module to handle `.txt` and `.csv` files containing DB2 table data, which gets processed and stored in AWS S3 buckets.",
      "Improved UI performance by 40% using lazy loading, React.memo, and conditional rendering.",
      "Implemented secure user authentication and session management using AWS Cognito.",
      "Created a dynamic form builder using React Hook Form with custom validation logic for XML workflows.",
      "Created unit, integration, and E2E test coverage with Jest, React Testing Library, and Cypress.",
      "Integrated automated testing into GitHub Actions CI pipeline, reducing manual QA efforts by 60%.",
      "Actively contributed to code reviews and pair programming sessions to maintain code quality and consistency.",
      "Refactored legacy JavaScript codebases to TypeScript, improving maintainability and reducing bugs in production.",
      "Worked closely with QA and backend teams to debug issues and reduce average bug resolution time by 30%.",
      "Participated in Agile sprints: standups, story estimation, retrospectives, and sprint planning using JIRA.",
      "Integrated REST and SOAP APIs with robust error handling and retry mechanisms, improving data consistency.",
      "Optimized build times and modularized features for faster deployments using Vite and dynamic imports."
    ]
  }
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
    <section id="experience" className="py-20 min-h-screen flex items-center justify-center relative overflow-hidden 
      bg-gradient-to-br from-zinc-900 to-black backdrop-blur-md 
      border-y border-zinc-800 ring-1 ring-white/5 shadow-inner">
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
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey building and testing applications
            </p>
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