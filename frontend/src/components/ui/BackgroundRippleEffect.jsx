import { useRef, useEffect, useState } from 'react';

export const BackgroundRippleEffect = ({
  rows = 12,
  cols = 18,
  gap = 4,
  rippleDuration = 700,
  opacity = 0.5,
}) => {
  const [ripples, setRipples] = useState([]);
  const containerRef = useRef(null);

  const grid = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid.push({ row: i, col: j });
    }
  }

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cellPositions = [];
    const cells = container.querySelectorAll('.ripple-cell');
    cells.forEach(cell => {
      const rect = cell.getBoundingClientRect();
      cellPositions.push({
        element: cell,
        row: parseInt(cell.dataset.row),
        col: parseInt(cell.dataset.col),
        rect
      });
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      for (const pos of cellPositions) {
        const { rect, row, col } = pos;
        if (clientX >= rect.left && clientX <= rect.right &&
            clientY >= rect.top && clientY <= rect.bottom) {
          const id = `${row}-${col}-${Date.now()}`;
          setRipples(prev => [...prev, { id, row, col }]);
          setTimeout(() => {
            setRipples(prev => prev.filter(r => r.id !== id));
          }, rippleDuration);
          break;
        }
      }
    };

    const updatePositions = () => {
      const newPositions = [];
      const cells = container.querySelectorAll('.ripple-cell');
      cells.forEach(cell => {
        const rect = cell.getBoundingClientRect();
        newPositions.push({
          element: cell,
          row: parseInt(cell.dataset.row),
          col: parseInt(cell.dataset.col),
          rect
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', updatePositions);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updatePositions);
      setRipples([]);
    };
  }, [rippleDuration]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ opacity }}
    >
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: `${gap}px`,
        }}
      >
        {grid.map(({ row, col }) => {
          const isRippling = ripples.some(r => r.row === row && r.col === col);
          return (
            <div
              key={`${row}-${col}`}
              className="ripple-cell rounded-sm border border-white/5 transition-all duration-300"
              data-row={row}
              data-col={col}
              style={{
                backgroundColor: isRippling
                  ? 'rgba(124,156,255,0.25)'
                  : 'rgba(255,255,255,0.03)',
                transform: isRippling ? 'scale(1.15)' : 'scale(1)',
                boxShadow: isRippling ? '0 0 30px rgba(124,156,255,0.2)' : 'none',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};