import { useState, useEffect, useCallback } from 'react';

export const useProjectCarousel = (projects, initial = 0, interval = 4600) => {
  const [active, setActive] = useState(initial);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive(i => (i + 1) % projects.length), [projects.length]);
  const prev = useCallback(() => setActive(i => (i - 1 + projects.length) % projects.length), [projects.length]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [paused, interval, next]);

  return { active, setActive, next, prev, paused, setPaused };
};