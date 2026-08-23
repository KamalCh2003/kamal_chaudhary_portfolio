import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Experience = () => {
  const ref = useScrollReveal();

  const jobs = [
    { year: '2026 — PRESENT', title: 'Full-stack Developer Intern', desc: 'MERN / PERN Development', type: 'INTERNSHIP' },
    { year: '2025 — 2026', title: 'Independent Developer', desc: 'Personal & Academic Projects', type: 'DEVELOPMENT' },
    { year: '2024 — 2025', title: 'Computer Science Student', desc: 'Software Engineering & Web', type: 'EDUCATION' },
  ];

  return (
    <section id="experience" ref={ref} className="py-16 sm:py-24 md:py-32 reveal">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="flex items-center gap-3 text-gray-500 text-[10px] font-mono uppercase tracking-widest before:w-6 before:h-px before:bg-gray-500">
          Experience
        </div>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
          Where I've <span className="text-gray-400">worked.</span>
        </h2>

        <div className="mt-10 sm:mt-16 border-t border-white/10">
          {jobs.map((job, i) => (
            <div key={i} className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr_auto] gap-4 sm:gap-6 md:gap-10 py-4 sm:py-6 border-b border-white/10 hover:bg-white/5 hover:px-2 sm:hover:px-3 transition-all">
              <span className="text-[9px] sm:text-[10px] font-mono text-gray-500">{job.year}</span>
              <div>
                <h3 className="text-sm sm:text-base font-medium text-gray-200">{job.title}</h3>
                <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 sm:mt-1">{job.desc}</p>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-gray-500 hidden sm:block text-right">{job.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};