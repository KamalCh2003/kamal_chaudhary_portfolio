import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
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
        rows={12} 
        cols={18} 
        boxSize={40} 
        gap={5} 
        opacity={0.4}
        rippleDuration={600}
      />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;