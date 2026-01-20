import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ShieldCheck, Rocket, Database } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillsBubbleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    })
  };

  const features = [
    {
      icon: Code,
      title: "Frontend Engineering",
      description:
        "Built scalable UI components using React, Redux Toolkit, and Tailwind CSS with lazy loading, code splitting, and React.memo."
    },
    {
      icon: ShieldCheck,
      title: "Testing & CI/CD",
      description:
        "Developed unit, integration, and E2E test cases using Jest, React Testing Library & Cypress, integrated in CI pipelines to streamline QA."
    },
    {
      icon: Database,
      title: "Serverless Backend",
      description:
        "Worked with Firebase Firestore, Authentication, and Cloud Functions to build secure, scalable serverless APIs and workflows."
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description:
        "Improved UI performance by 40% using React-specific techniques like lazy loading, code splitting, React.memo, and conditional rendering."
    }
  ];

  const skills = [
  'React.js',
  'Redux',
  'JavaScript',
  'TypeScript',
  'Firebase',
  'Tailwind CSS',
  'Jest',
  'JMeter',
  'CI/CD',
  'Jenkins',
  'AWS',
  'REST APIs'
];


  return (
   <section
  id="about"
  className=" min-h-screen flex items-center justify-center relative overflow-hidden 
  ring-1 ring-white/5 shadow-inner"
>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
            {/* <p className="text-gray-400 max-w-2xl mx-auto">
              Associate Software Developer with 3+ years of experience building scalable and responsive web applications using React, Redux Toolkit, TypeScript, Firebase, and Tailwind CSS. Skilled in integrating third-party APIs, optimizing performance, and implementing robust testing frameworks.
            </p> */}
          </motion.div>

         
           <motion.div variants={itemVariants}>
          
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    custom={i}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={skillsBubbleVariants}
                    className="flex items-center justify-center text-sm font-medium text-indigo-300
                      bg-zinc-800/60 backdrop-blur-lg border border-zinc-700 rounded-xl min-h-[100px] 
                      transition-all duration-300 hover:shadow-indigo-500/20 hover:scale-105 shadow-md"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
