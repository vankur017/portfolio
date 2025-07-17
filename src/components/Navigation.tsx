import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vankur017', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ankur-verma-6b80b416a/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vankur017@gmail.com', label: 'Email' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-900/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-white"
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-zinc-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + 0.1 * index }}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Slide-In Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-64 h-screen bg-zinc-900 z-50 shadow-lg border-l border-zinc-800 md:hidden"
            >
              <div className="p-6 space-y-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="block text-zinc-300 hover:text-white transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}

                <div className="flex space-x-4 pt-4 border-t border-zinc-800">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + 0.1 * index }}
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      <link.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
