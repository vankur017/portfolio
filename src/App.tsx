import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useSmoothScroll from './hooks/useSmoothScroll'; 

function App() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-[#08090B] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden relative font-sans">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

