import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';

const sections = ['home', 'about', 'projects', 'experience'];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'top-3 w-[69vw] max-w-5xl' : 'top-0 w-[92vw] max-w-7xl'
      }`}
    >
      <div className="flex items-center justify-between h-14 px-4 border border-white/10 rounded-2xl bg-black/60 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center gap-2 font-bold cursor-pointer" onClick={() => scrollTo('home')}>
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-300 to-blue-600 text-black flex items-center justify-center text-xs shadow-lg shadow-blue-500/20">K</span>
          Kamal.
        </div>

        <div className="hidden md:flex items-center gap-1">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                active === id
                  ? 'text-white bg-white/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        <Button
          variant="dark"
          className="hidden md:inline-flex"
          onClick={() => scrollTo('contact')}
        >
          Let's talk <span className="ml-1">↗</span>
        </Button>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 p-3 border border-white/10 rounded-xl bg-black/95 backdrop-blur-xl flex flex-col gap-1">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`px-3 py-2 rounded-lg text-left text-sm transition-colors ${
                active === id ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white'
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <Button variant="dark" className="mt-2 w-full" onClick={() => scrollTo('contact')}>
            Let's talk ↗
          </Button>
        </div>
      )}
    </nav>
  );
};