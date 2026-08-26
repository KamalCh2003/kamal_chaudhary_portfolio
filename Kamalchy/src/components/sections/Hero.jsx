import { Button } from '../ui/button';

export const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,...')] bg-[length:30px_30px] sm:bg-[length:50px_50px] md:bg-[length:70px_70px] mask-image-radial" />

      {/* Glowing Orb */}
      <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[760px] lg:h-[760px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700/10 rounded-full blur-3xl animate-pulse" />

      <div className="container relative z-10 max-w-5xl mx-auto w-full">
        {/* ===== MOBILE LAYOUT ===== */}
        <div className="md:hidden flex flex-col items-start text-left w-full gap-4 py-6">
          {/* Label */}
          <div className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            FULL-STACK DEVELOPER
          </div>

          {/* Heading – three lines */}
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight">
            <span className="block">I BUILD</span>
            <span className="block">DIGITAL</span>
            <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
              EXPERIENCES.
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Designing and engineering thoughtful digital products with clean code and purposeful interaction.
          </p>

          {/* CTAs – small, full‑width, stacked vertically */}
          <div className="flex flex-col items-stretch gap-3 w-full mt-2">
            <Button
              variant="primary"
              onClick={() => scrollTo('projects')}
              className="w-full text-xs sm:text-sm py-2 px-4 rounded-full flex items-center justify-center gap-2"
            >
              VIEW MY WORK <span className="text-base">—</span>
            </Button>
            <Button
              variant="dark"
              onClick={() => scrollTo('contact')}
              className="w-full text-xs sm:text-sm py-2 px-4 rounded-full flex items-center justify-center gap-2 bg-black/10"
            >
              LET'S CONNECT <span className="text-base">→</span>
            </Button>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-3 mt-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            AVAILABLE FOR SELECTED PROJECTS
          </div>
        </div>

        {/* ===== DESKTOP LAYOUT (unchanged) ===== */}
        <div className="hidden md:flex flex-col items-center text-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-xs font-mono text-gray-400 bg-white/5 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-glow animate-pulse" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight">
            I build{' '}
            <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              digital experiences.
            </span>
          </h1>

          <p className="max-w-xl mx-auto text-sm md:text-base text-gray-400 leading-relaxed px-2">
            Full-stack developer focused on elegant interfaces, reliable systems
            and immersive web experiences that make products feel effortless.
          </p>

          <div className="flex flex-row justify-center gap-3 mt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto"
            >
              Explore my work →
            </Button>
            <Button
              variant="dark"
              size="lg"
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-[7px] sm:text-[9px] md:text-[10px] tracking-widest font-mono flex flex-col items-center gap-1 sm:gap-2">
        SCROLL
        <span className="block w-px h-6 sm:h-8 md:h-10 bg-gradient-to-b from-gray-400 to-transparent animate-scroll" />
      </div>
    </section>
  );
};