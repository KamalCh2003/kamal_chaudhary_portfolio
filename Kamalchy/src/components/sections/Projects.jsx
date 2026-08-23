import { useState, useRef, useEffect } from 'react';
import { useProjectCarousel } from '../../hooks/useProjectCarousel';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ExternalLink } from 'lucide-react';

const GitHubIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const defaultProjects = [
  {
    number: "01",
    title: "VoteUp",
    category: "Online Voting Platform",
    year: "2026",
    description: "A modern full-stack voting platform for elections, contests and public voting with dedicated voter, contestant and administrator experiences.",
    tags: ["React", "Node.js", "PostgreSQL", "Prisma"],
    images: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    ],
    live: "https://voteup-demo.vercel.app",
    github: "https://github.com/KamalCh2003/voteup"
  },
  {
    number: "02",
    title: "Futsal Booking",
    category: "Booking Platform",
    year: "2026",
    description: "A complete futsal booking experience with venue management, schedules, reservations and responsive user interfaces.",
    tags: ["React", "Express", "PostgreSQL", "Flutter"],
    images: [
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518600506278-4e8ef466b810?auto=format&fit=crop&w=800&q=80"
    ],
    live: "https://futsal-booking-demo.vercel.app",
    github: "https://github.com/KamalCh2003/futsal-booking"
  },
  {
    number: "03",
    title: "Portfolio OS",
    category: "Creative Web Experience",
    year: "2026",
    description: "An experimental portfolio interface focused on immersive motion, interactive project presentation and a refined visual system.",
    tags: ["HTML", "CSS", "JavaScript", "Motion"],
    images: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80"
    ],
    live: "https://portfolio-os-demo.vercel.app",
    github: "https://github.com/KamalCh2003/portfolio-os"
  },
  {
    number: "04",
    title: "Analytics",
    category: "Dashboard System",
    year: "2025",
    description: "A clean analytics workspace for visualizing performance metrics, user activity and business information.",
    tags: ["React", "Charts", "REST API", "Tailwind"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
    ],
    live: "https://analytics-demo.vercel.app",
    github: "https://github.com/KamalCh2003/analytics"
  },
  {
    number: "05",
    title: "Creative Studio",
    category: "Web Experience",
    year: "2025",
    description: "A dark editorial website concept with immersive visuals, layered cards, micro-interactions and smooth transitions.",
    tags: ["JavaScript", "UI/UX", "CSS", "Creative"],
    images: [
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80"
    ],
    live: "https://creative-studio-demo.vercel.app",
    github: "https://github.com/KamalCh2003/creative-studio"
  }
];

export const Projects = () => {
  const [projects] = useState(defaultProjects);
  const { active, setActive, next, prev, setPaused } = useProjectCarousel(projects);
  const startX = useRef(0);
  const stageRef = useRef(null);
  const isChanging = useRef(false);
  const ref = useScrollReveal();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const stage = stageRef.current;
    if (!stage) return;

    const handleWheel = (e) => {
      if (isChanging.current) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (Math.abs(e.deltaY) < 25) return;

      e.preventDefault();
      e.stopPropagation();

      isChanging.current = true;
      e.deltaY > 0 ? next() : prev();

      setTimeout(() => {
        isChanging.current = false;
      }, 1000);
    };

    stage.addEventListener('wheel', handleWheel, { passive: false });
    return () => stage.removeEventListener('wheel', handleWheel);
  }, [next, prev, isMobile]);

  const getPosition = (index) => {
    let d = index - active;
    const len = projects.length;
    if (d > len / 2) d -= len;
    if (d < -len / 2) d += len;
    if (d === 0) return 'center';
    if (d === -1) return 'left';
    if (d === 1) return 'right';
    if (d === -2) return 'farleft';
    if (d === 2) return 'farright';
    return 'hidden';
  };

  const getTransformStyle = (index) => {
    const pos = getPosition(index);
    switch (pos) {
      case 'center': return 'translate(-50%, -50%) translateZ(100px) scale(1)';
      case 'left':   return 'translate(-88%, -50%) translateZ(-40px) rotateY(20deg) rotateZ(-7deg) scale(0.85)';
      case 'right':  return 'translate(-12%, -50%) translateZ(-40px) rotateY(-20deg) rotateZ(7deg) scale(0.85)';
      case 'farleft': return 'translate(-120%, -50%) translateZ(-220px) rotateY(27deg) rotateZ(-11deg) scale(0.7)';
      case 'farright': return 'translate(20%, -50%) translateZ(-220px) rotateY(-27deg) rotateZ(11deg) scale(0.7)';
      default: return 'translate(-50%, -50%) translateZ(-500px) scale(0.4)';
    }
  };

  const handleTouchStart = (e) => startX.current = e.touches[0].clientX;
  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 45) dx < 0 ? next() : prev();
  };

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-24 md:py-32 reveal bg-black/10">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="flex items-center gap-3 text-gray-500 text-[10px] font-mono uppercase tracking-widest before:w-6 before:h-px before:bg-gray-500">
          Selected work
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
          Things I've <span className="text-gray-400">built.</span>
        </h2>

        <div className="mt-6 sm:mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`snap-start shrink-0 whitespace-nowrap px-3 sm:px-4 py-2 border rounded-lg text-[9px] sm:text-[10px] font-mono transition-colors ${
                active === i
                  ? 'border-blue-400/30 bg-blue-400/10 text-white'
                  : 'border-white/10 text-gray-500 hover:text-white'
              }`}
            >
              {p.number} {p.title}
            </button>
          ))}
        </div>

        {isMobile ? (
          <div className="mt-6 space-y-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-[#090b10] border border-white/10 rounded-2xl overflow-hidden p-4 flex flex-col gap-2"
              >
                <div className="flex justify-between text-[8px] font-mono text-gray-500">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
                    PROJECT / {p.number}
                  </span>
                  <span>{p.year}</span>
                </div>
                <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
                <p className="text-[10px] text-gray-500">{p.category}</p>
                <div className="h-[160px] rounded-xl overflow-hidden border border-white/10 relative">
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%2311141c"/%3E%3Ctext x="50%25" y="50%25" font-family="monospace" font-size="20" fill="%23666" text-anchor="middle" dy=".3em"%3ENo image%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {p.images.slice(1, 4).map((img, idx) => (
                    <div key={idx} className="h-[50px] rounded-lg overflow-hidden border border-white/10 bg-black/20">
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"%3E%3Crect width="200" height="150" fill="%2311141c"/%3E%3C/svg%3E';
                        }}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed mt-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 border border-white/10 rounded-lg text-[8px] font-mono text-gray-400">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-2">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors border border-blue-400/20 px-3 py-1.5 rounded-lg hover:bg-blue-400/10"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-lg hover:bg-white/5"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div
              ref={stageRef}
              className="relative h-[75vh] sm:h-[550px] md:h-[600px] lg:h-[660px] mt-6 sm:mt-8 perspective-1800 overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[850px] h-[60%] max-h-[420px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[900px] h-[70%] max-h-[380px] border border-blue-500/10 rounded-full" />

              {projects.map((p, i) => {
                const pos = getPosition(i);
                const transformStyle = getTransformStyle(i);
                return (
                  <div
                    key={i}
                    className={`absolute left-1/2 top-1/2 w-[85vw] sm:w-[420px] md:w-[480px] lg:w-[500px] max-w-[500px] h-[70vh] sm:h-[400px] md:h-[420px] lg:h-[430px] border border-white/10 rounded-2xl bg-[#090b10] overflow-hidden transition-all duration-1000 ease-custom will-change-transform`}
                    style={{
                      transform: transformStyle,
                      opacity: pos === 'hidden' ? 0 : 1,
                      pointerEvents: pos === 'hidden' ? 'none' : 'auto',
                      zIndex: pos === 'center' ? 10 : 5,
                      filter: pos === 'center' ? 'none' : 'brightness(0.6) saturate(0.7)',
                    }}
                    onClick={() => setActive(i)}
                  >
                    <div className="p-3 sm:p-4 h-full flex flex-col">
                      <div className="flex justify-between text-[7px] sm:text-[8px] font-mono text-gray-500">
                        <span className="flex items-center gap-1.5 sm:gap-2">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
                          PROJECT / {p.number}
                        </span>
                        <span>{p.year}</span>
                      </div>
                      <h3 className="mt-2 sm:mt-3 text-base sm:text-xl font-medium tracking-tight">{p.title}</h3>
                      <p className="text-[8px] sm:text-[10px] text-gray-500 mt-0.5">{p.category}</p>
                      <div className="mt-2 sm:mt-3 h-[110px] sm:h-[150px] md:h-[170px] rounded-xl overflow-hidden border border-white/10 relative group">
                        <img
                          src={p.images[0]}
                          alt={p.title}
                          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%2311141c"/%3E%3Ctext x="50%25" y="50%25" font-family="monospace" font-size="20" fill="%23666" text-anchor="middle" dy=".3em"%3ENo image%3C/text%3E%3C/svg%3E';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-120%] animate-[shine_5s_1s_infinite]" />
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
                        {p.images.slice(1, 4).map((img, idx) => (
                          <div key={idx} className="h-[45px] sm:h-[60px] md:h-[70px] rounded-lg overflow-hidden border border-white/10 bg-black/20">
                            <img
                              src={img}
                              alt=""
                              className="w-full h-full object-cover opacity-50"
                              onError={(e) => {
                                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="150" viewBox="0 0 200 150"%3E%3Crect width="200" height="150" fill="%2311141c"/%3E%3C/svg%3E';
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
                        {[1, 2, 3].map((_, idx) => (
                          <div key={idx} className="h-8 sm:h-10 md:h-12 rounded-lg border border-white/10 bg-gradient-to-br from-[#171a22] to-[#0d0f14] relative overflow-hidden after:content-[''] after:absolute after:inset-x-2 sm:after:inset-x-3 after:top-1.5 sm:after:top-2 after:h-0.5 sm:after:h-1 after:rounded after:bg-[#242a35] after:shadow-[0_6px_#1a1f28] sm:after:shadow-[0_10px_#1a1f28]" />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 md:gap-10 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight">{projects[active]?.title}</h3>
                <p className="mt-2 sm:mt-3 text-sm text-gray-400 leading-relaxed">{projects[active]?.description}</p>
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {projects[active]?.tags.map(t => (
                    <span key={t} className="px-2 py-1 sm:px-3 sm:py-1.5 border border-white/10 rounded-lg text-[8px] sm:text-[10px] font-mono text-gray-400">{t}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href={projects[active]?.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors border border-blue-400/20 px-4 py-2 rounded-lg hover:bg-blue-400/10"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={projects[active]?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-lg hover:bg-white/5"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {['Category', 'Year', 'Stack', 'Status'].map((label, idx) => (
                  <div key={label}>
                    <span className="text-[8px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-wider">{label}</span>
                    <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300 font-medium">
                      {idx === 0 ? projects[active]?.category :
                       idx === 1 ? projects[active]?.year :
                       idx === 2 ? projects[active]?.tags[0] :
                       'Completed'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-5 sm:mt-6">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${i === active ? 'w-6 sm:w-8 bg-gradient-to-r from-blue-400 to-purple-400' : 'w-1.5 bg-gray-600'}`}
                  aria-label={`Project ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};