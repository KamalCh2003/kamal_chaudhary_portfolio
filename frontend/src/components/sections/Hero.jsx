import { Button } from '../ui/button';

export const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center pt-12 sm:pt-20 md:pt-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,...')] bg-[length:40px_40px] sm:bg-[length:60px_60px] md:bg-[length:70px_70px] mask-image-radial" />
      <div className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[760px] md:h-[760px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700/10 rounded-full blur-3xl animate-pulse" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-white/10 rounded-full text-[10px] sm:text-xs font-mono text-gray-400 bg-white/5 animate-fade-up">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 shadow-glow animate-pulse" />
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <h1 className="mt-5 sm:mt-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight">
          I build{' '}
          <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            digital experiences.
          </span>
        </h1>

        <p className="max-w-xl mx-auto mt-4 sm:mt-6 text-sm sm:text-base text-gray-400 leading-relaxed px-2">
          Full-stack developer focused on elegant interfaces, reliable systems and immersive web experiences that make products feel effortless.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Button variant="primary" size="lg" onClick={() => scrollTo('projects')} className="w-full sm:w-auto">
            Explore my work →
          </Button>
          <Button variant="dark" size="lg" onClick={() => scrollTo('contact')} className="w-full sm:w-auto">
            Get in touch
          </Button>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-[8px] sm:text-[10px] tracking-widest font-mono flex flex-col items-center gap-1 sm:gap-2">
        SCROLL
        <span className="block w-px h-8 sm:h-10 bg-gradient-to-b from-gray-400 to-transparent animate-scroll" />
      </div>
    </section>
  );
};