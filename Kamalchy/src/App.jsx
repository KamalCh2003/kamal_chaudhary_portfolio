import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { CursorGlow } from './components/ui/CursorGlow';
import { BackgroundRippleEffect } from './components/ui/BackgroundRippleEffect';
import './styles/globals.css';

function App() {
  return (
    <>
      <CursorGlow />
      <BackgroundRippleEffect 
        rowsDesktop={12} 
        colsDesktop={18} 
        rowsMobile={6} 
        colsMobile={10}
        gapDesktop={4}
        gapMobile={6}
        opacityDesktop={0.4}
        opacityMobile={0.2}
        rippleDuration={600}
      />
      <Navbar />
      <main className="relative z-10 px-2 sm:px-20 md:px-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;