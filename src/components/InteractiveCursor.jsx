import { useEffect, useRef } from 'react';

export const InteractiveCursor = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const trailRef = useRef([]);
  const isOverCardRef = useRef(false);
  const opacityRef = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const maxTrailLength = 12;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Check if cursor is over interactive element
    const checkElementUnderCursor = (x, y) => {
      const element = document.elementFromPoint(x, y);
      if (!element) return false;

      // Check if it's a card, button, link, or interactive element
      const interactiveSelectors = [
        '.project-item',
        '.project-card',
        '.experience-card',
        '.education-card',
        '.skill-category-card',
        '.skill-item',
        'a',
        'button',
        '.hero-button',
        '.project-link',
        '.about-highlight-item',
        '.project-tech-tag',
        '.experience-skill-tag'
      ];

      // Check element and its parents
      let current = element;
      while (current && current !== document.body) {
        const classList = current.classList;
        if (classList) {
          for (const selector of interactiveSelectors) {
            if (current.matches && current.matches(selector)) {
              return true;
            }
            // Check class names
            if (selector.startsWith('.') && classList.contains(selector.slice(1))) {
              return true;
            }
          }
        }
        // Check tag names
        const tagName = current.tagName?.toLowerCase();
        if (tagName === 'a' || tagName === 'button') {
          return true;
        }
        current = current.parentElement;
      }
      return false;
    };

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Check if over interactive element
      const isOverCard = checkElementUnderCursor(e.clientX, e.clientY);
      isOverCardRef.current = isOverCard;
      
      // Add to trail (only if not over card)
      if (!isOverCard) {
        trailRef.current.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        if (trailRef.current.length > maxTrailLength) {
          trailRef.current.shift();
        }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = mouseRef.current;
      const trail = trailRef.current;
      const isOverCard = isOverCardRef.current;

      // Smoothly transition opacity based on card hover
      if (isOverCard) {
        opacityRef.current = Math.max(0, opacityRef.current - 0.15);
      } else {
        opacityRef.current = Math.min(1, opacityRef.current + 0.15);
      }

      // Draw trail (only if not over card and opacity is high enough)
      if (!isOverCard && opacityRef.current > 0.1 && trail.length > 1) {
        for (let i = 0; i < trail.length - 1; i++) {
          const point = trail[i];
          const nextPoint = trail[i + 1];
          const age = Date.now() - point.time;
          const opacity = Math.max(0, 1 - age / 400) * opacityRef.current;
          
          if (opacity > 0) {
            // Gradient trail effect - thinner and more subtle
            const progress = i / (trail.length - 1);
            const lineWidth = 1 + (1 - progress) * 0.8;
            
            ctx.strokeStyle = `rgba(58, 255, 124, ${opacity * 0.15})`;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(nextPoint.x, nextPoint.y);
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="interactive-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

