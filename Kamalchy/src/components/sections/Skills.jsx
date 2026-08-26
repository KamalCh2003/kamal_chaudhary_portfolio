import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useEffect, useRef } from 'react';

const SKILLS = [
  'REACT',
  'JAVASCRIPT',
  'NODE.JS',
  'EXPRESS',
  'MONGODB',
  'POSTGRESQL',
  'REST API',
  'GIT',
];

export const Skills = () => {
  const ref = useScrollReveal();
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const buildTrack = (trackEl, reverse = false) => {
      if (!trackEl) return;
      const list = reverse ? [...SKILLS].reverse() : SKILLS;
      let html = '';
      for (let rep = 0; rep < 2; rep++) {
        list.forEach((name, i) => {
          html += `
            <span class="m-item">
              <span class="m-idx">${String(i + 1).padStart(2, '0')}</span>
              ${name}
            </span>
          `;
        });
      }
      trackEl.innerHTML = html;
    };

    buildTrack(track1Ref.current, false);
    buildTrack(track2Ref.current, true);
  }, []);

  useEffect(() => {
    const rows = [row1Ref.current, row2Ref.current];
    const handleMouseEnter = (e) => e.currentTarget.classList.add('paused');
    const handleMouseLeave = (e) => e.currentTarget.classList.remove('paused');

    rows.forEach((row) => {
      if (!row) return;
      row.addEventListener('mouseenter', handleMouseEnter);
      row.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      rows.forEach((row) => {
        if (!row) return;
        row.removeEventListener('mouseenter', handleMouseEnter);
        row.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 reveal bg-[#07080c]">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="flex flex-col gap-4 mb-10 sm:mb-14">
          <span className="text-sm font-semibold text-gray-400 tracking-[0.22em] uppercase">
            TECHNOLOGIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] max-w-[900px] text-white">
            TECHNOLOGIES I WORK WITH
          </h2>
        </div>

        {/* Marquee Row 1 – Left */}
        <div className="border-t border-b border-white/10 py-4 sm:py-5 overflow-hidden">
          <div ref={row1Ref} className="flex w-max marquee-left">
            <div ref={track1Ref} className="flex items-center flex-shrink-0" />
          </div>
        </div>

        {/* Marquee Row 2 – Right */}
        <div className="border-b border-white/10 py-4 sm:py-5 overflow-hidden">
          <div ref={row2Ref} className="flex w-max marquee-right">
            <div ref={track2Ref} className="flex items-center flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};