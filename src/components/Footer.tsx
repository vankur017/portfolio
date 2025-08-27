import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/vankur017', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ankur-verma-6b80b416a/', label: 'LinkedIn' },
   { icon: Mail, href: 'mailto:vankur017@gmail.com', label: 'Email' }

  ];

  return (
    <footer className=" flex items-center justify-center relative overflow-hidden 
  border-t border-zinc-800 ring-1 ring-white/5 shadow-inner">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-gray-400 flex items-center gap-2">
              Made with <Heart size={16} className="text-red-500" /> by Ankur Verma
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ankur Verma. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;