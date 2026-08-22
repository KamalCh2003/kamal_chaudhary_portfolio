import { useEffect, useRef } from 'react';

export const CursorGlow = () => {
  const glowRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const dot = dotRef.current;
    if (!glow || !dot) return;

    let x = 0, y = 0;
    let targetX = 0, targetY = 0;
    let isVisible = false;
    let rafId = null;

    const updatePosition = () => {
      // Faster lerp for smoother, more responsive feel
      const ease = 0.12;
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;

      if (glow) {
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
        glow.style.opacity = isVisible ? '1' : '0';
      }
      if (dot) {
        dot.style.left = `${targetX}px`;
        dot.style.top = `${targetY}px`;
        dot.style.opacity = isVisible ? '1' : '0';
      }

      rafId = requestAnimationFrame(updatePosition);
    };

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        x = targetX;
        y = targetY;
      }
    };

    const onMouseLeave = () => { isVisible = false; };
    const onMouseEnter = () => { isVisible = true; };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    updatePosition();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Main glow - smaller, more intense */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[999] w-48 h-48 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(100,140,255,0.25) 0%, rgba(150,100,255,0.12) 40%, transparent 70%)',
          filter: 'blur(14px)',
          willChange: 'transform, opacity',
        }}
      />
      {/* Inner bright dot for precision */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[999] w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-200"
        style={{
          background: 'radial-gradient(circle, rgba(180,200,255,0.9) 0%, rgba(120,80,255,0.5) 100%)',
          boxShadow: '0 0 12px rgba(100,140,255,0.5)',
          willChange: 'transform, opacity',
        }}
      />
    </>
  );
};