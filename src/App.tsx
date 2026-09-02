import React from 'react';
import useSmoothScroll from './hooks/useSmoothScroll';
import { Navbar } from './components/Navigation/Navbar';
import { HeroSection } from './components/Hero/HeroSection';
import { InterfacesSection } from './components/Interfaces/InterfacesSection';
import { TechStackSection } from './components/TechPipeline/TechStackSection';
import { ProjectsSection } from './components/Projects/ProjectsSection';
import { UIPlaygroundSection } from './components/Playground/UIPlaygroundSection';
import { PipelineSection } from './components/DesignToProduction/PipelineSection';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { AboutSection } from './components/About/AboutSection';
import { ContactSection } from './components/Contact/ContactSection';
import Footer from './components/Footer';

function App() {
  // Initialize Lenis smooth scroll & sync with GSAP ScrollTrigger
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-[#08090B] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden relative font-sans antialiased">
      {/* Floating Minimal Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        {/* Section 4: Cinematic Hero with Scroll-controlled Browser Assembly */}
        <HeroSection />

        {/* Section 5: "I Build Interfaces -> Experiences" Text & UI Floating Cascade */}
        <InterfacesSection />

        {/* Section 6: Interactive React Frontend Pipeline */}
        <TechStackSection />

        {/* Section 7: Selected Work (PortfolioLens, TMDB, Bite Buddy, Job Portal) */}
        <ProjectsSection />

        {/* Section 8: UI Playground (Live Component Craftsmanship Lab) */}
        <UIPlaygroundSection />

        {/* Section 9: Design -> Production Pipeline Transformation */}
        <PipelineSection />

        {/* Section 10: Professional Experience (DXC Technology) */}
        <ExperienceSection />

        {/* Section 11: Concise Positioning About Section */}
        <AboutSection />

        {/* Section 12: Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
