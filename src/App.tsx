import { Navbar } from './components/Navigation/Navbar';
import { HeroSection } from './components/Hero/HeroSection';
import { ProjectsSection } from './components/Projects/ProjectsSection';
import { ExperienceSection } from './components/Experience/ExperienceSection';
import { AboutSection } from './components/About/AboutSection';
import { ContactSection } from './components/Contact/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
