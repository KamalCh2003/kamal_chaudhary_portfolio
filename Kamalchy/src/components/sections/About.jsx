import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useEffect, useRef } from 'react';

export const About = () => {
  const ref = useScrollReveal();
  const statRefs = useRef([]);

  useEffect(() => {
    // Animate stat numbers on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'), 10);
            let current = 0;
            const increment = Math.ceil(target / 30);
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                el.textContent = String(target).padStart(2, '0');
                clearInterval(timer);
              } else {
                el.textContent = String(current).padStart(2, '0');
              }
            }, 40);
          }
        });
      },
      { threshold: 0.5 }
    );

    statRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-16 sm:py-24 md:py-32 reveal">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold text-gray-500 tracking-[0.22em] uppercase">
            01 / ABOUT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] max-w-[900px]">
            I'M A DEVELOPER WHO CARES ABOUT HOW SOFTWARE FEELS, NOT JUST HOW IT WORKS.
          </h2>
        </div>

        <div className="mt-10 max-w-2xl">
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-light">
            I'm Kamal, a full-stack developer focused on building fast, considered web applications
            from the database up to the interface. My work sits at the intersection of clean
            architecture and quiet, intentional design. I like problems with real constraints,
            and I like shipping things that hold up.
          </p>
        </div>

        {/* Stat Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-l border-black/10">
          {[
            { label: 'Full-Stack Development', count: 1 },
            { label: 'Modern Web Applications', count: 2 },
            { label: 'API & Backend Systems', count: 3 },
            { label: 'Problem Solving', count: 4 },
          ].map((item, i) => (
            <div
              key={i}
              className="border-r border-b border-white/20 p-6 sm:p-8"
            >
              <div
                ref={(el) => (statRefs.current[i] = el)}
                data-count={item.count}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-mono"
              >
                0{item.count}
              </div>
              <div className="mt-3 text-xs sm:text-sm font-medium text-white uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};