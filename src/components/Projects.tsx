import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
  {
    title: "Job Application Portal",
    description:
      "A responsive job portal with animated UI, built using React, Tailwind CSS, and Framer Motion. Features a multi-step form, Firebase Auth, and cloud functions to handle job submissions.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "Redux", "Tailwind", "Framer Motion", "Firebase", "Serverless"],
    github: "https://github.com/vankur017/job-portal",
    live: "https://jobportal-fpet.vercel.app/",
    featured: true
  },
  {
    title: "Bite Buddy WebApp",
    description:
      "A food delivery app clone with shopping cart, payment gateway (Stripe), and real-time restaurant listings via Swiggy live API. Backend built in Node.js which needed to run locally for now.",
    image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React", "Redux", "Node.js", "Stripe", "Swiggy API"],
    github: "https://github.com/vankur017/Bite-Buddy",
    live: "https://bite-buddy-food.netlify.app/",
    featured: true
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I've used to build them
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`bg-gray-800/50 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 overflow-hidden ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`flex flex-col ${project.featured ? 'md:flex-row' : ''}`}>
                  <div className={`relative ${project.featured ? 'md:w-1/2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                        <Zap size={14} className="mr-1" />
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className={`p-6 ${project.featured ? 'md:w-1/2' : ''}`}>
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                    </div>
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