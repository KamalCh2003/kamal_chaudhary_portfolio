import { useScrollReveal } from '../../hooks/useScrollReveal';

export const About = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="py-16 sm:py-24 md:py-32 reveal">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="flex items-center gap-3 text-gray-500 text-[10px] font-mono uppercase tracking-widest before:w-6 before:h-px before:bg-gray-500">
          About me
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
          Turning ideas into <span className="text-gray-400">useful products.</span>
        </h2>

        <div className="mt-10 sm:mt-16 grid md:grid-cols-[1fr_0.9fr] gap-8 md:gap-12 lg:gap-20">
          <div className="text-gray-400 text-sm sm:text-base leading-relaxed space-y-4">
            <p>I enjoy taking products from the first idea to the final interaction — designing interfaces, building APIs, connecting databases and polishing the details.</p>
            <p>My work sits between <strong className="text-white font-medium">clean engineering, thoughtful UI and smooth motion</strong>. I care about performance, responsive layouts and interfaces that feel natural to use.</p>
            <p>Currently focused on modern JavaScript, full-stack applications and creative frontend experiences.</p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-px border border-white/10 rounded-2xl overflow-hidden bg-white/10">
              {['Role', 'Stack', 'Focus', 'Status'].map((label, i) => (
                <div key={i} className="p-4 sm:p-6 bg-black/70 min-h-[90px] sm:min-h-[110px]">
                  <div className="text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-wider">{label}</div>
                  <div className="mt-2 sm:mt-3 text-white text-xs sm:text-sm font-medium">
                    {['Full-stack Developer', 'MERN / PERN', 'Web Applications', 'Building & learning'][i]}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['React','JavaScript','Node.js','Express','PostgreSQL','Prisma','MongoDB','Tailwind','Git','REST API','Figma','Flutter'].map(skill => (
                <span key={skill} className="px-2.5 py-1.5 sm:px-3 sm:py-2 border border-white/10 rounded-lg text-gray-400 text-[9px] sm:text-[10px] font-mono hover:border-blue-400/50 hover:bg-blue-400/5 hover:text-white transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};