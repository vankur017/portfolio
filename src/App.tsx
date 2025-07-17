import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useSmoothScroll from './hooks/useSmoothScroll'; 

function App() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-zinc-900 text-white overflow-x-hidden">
      <ParticleBackground /> {/* already styled with motion blobs */}
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App