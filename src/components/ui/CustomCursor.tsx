"use client";

import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
}

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", onResize);

    // Mouse coordinates & state
    const mouse = { x: -100, y: -100 };
    let hasMoved = false;
    let isTouchActive = false;

    // Hide cursor when user touches the screen (touch gesture / finger)
    const onTouchStart = () => {
      isTouchActive = true;
      setIsVisible(false);
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    // Trail points for the following rope physics
    const POINT_COUNT = 24;
    const points: Point[] = [];
    for (let i = 0; i < POINT_COUNT; i++) {
      points.push({ x: -100, y: -100 });
    }

    let hoveredState = false;
    let clickedState = false;

    const onMouseMove = (e: MouseEvent) => {
      // Re-enable and show cursor when mouse moves
      if (isTouchActive) {
        isTouchActive = false;
      }

      // Hide on small mobile screens (< 768px)
      if (window.innerWidth < 768) {
        setIsVisible(false);
        return;
      }

      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        for (let i = 0; i < POINT_COUNT; i++) {
          points[i].x = e.clientX;
          points[i].y = e.clientY;
        }
      }

      setIsVisible(true);

      // Check hover state on interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a, button, input, textarea, select, [role='button'], .hover-target")
        );
        hoveredState = isInteractive;
      }

      startLoop();
    };

    const onMouseDown = () => {
      clickedState = true;
    };

    const onMouseUp = () => {
      clickedState = false;
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      hoveredState = false;
    };

    const onMouseEnter = () => {
      if (!isTouchActive && window.innerWidth >= 768) {
        setIsVisible(true);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    let isRunning = false;

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const stopLoop = () => {
      isRunning = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };

    const render = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, width, height);

      // Spring physics interpolation for trailing tail
      let headDx = mouse.x - points[0].x;
      let headDy = mouse.y - points[0].y;
      points[0].x += headDx * 0.45;
      points[0].y += headDy * 0.45;

      let maxMovement = Math.abs(headDx) + Math.abs(headDy);

      for (let i = 1; i < POINT_COUNT; i++) {
        const p = points[i];
        const prev = points[i - 1];
        const dx = prev.x - p.x;
        const dy = prev.y - p.y;

        // Decaying spring coefficient along the tail
        const speed = 0.38 - (i / POINT_COUNT) * 0.18;
        p.x += dx * speed;
        p.y += dy * speed;

        maxMovement += Math.abs(dx) + Math.abs(dy);
      }

      if (hasMoved && !isTouchActive) {
        // Draw Connected Tapered Glowing Tail
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        for (let i = 0; i < POINT_COUNT - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];

          // Normalized progression from 0 (head) to 1 (tail tip)
          const progress = i / (POINT_COUNT - 1);
          const alpha = Math.max(0, 1 - progress);

          // Taper line width: thick near head, thin at tail
          const baseWidth = hoveredState ? 5.5 : clickedState ? 2.5 : 3.8;
          const strokeWidth = Math.max(0.7, (1 - progress * 0.85) * baseWidth);

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineWidth = strokeWidth;

          // Multi-layer glowing stroke: Golden Yellow fading into deep Brand Navy and Steel Blue
          if (hoveredState) {
            ctx.strokeStyle = `rgba(255, 247, 230, ${alpha * 0.95})`;
            ctx.shadowColor = "rgba(210, 187, 121, 0.7)";
            ctx.shadowBlur = 12 * (1 - progress);
          } else if (clickedState) {
            ctx.strokeStyle = `rgba(94, 150, 183, ${alpha * 0.9})`;
            ctx.shadowColor = "rgba(94, 150, 183, 0.8)";
            ctx.shadowBlur = 8 * (1 - progress);
          } else {
            ctx.strokeStyle = `rgba(210, 187, 121, ${alpha * 0.85})`;
            ctx.shadowColor = "rgba(210, 187, 121, 0.5)";
            ctx.shadowBlur = 10 * (1 - progress);
          }

          ctx.stroke();

          // High-contrast central white core spine on the first few segments
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineWidth = Math.max(0.5, strokeWidth * 0.35);
          ctx.shadowBlur = 0;
          ctx.strokeStyle = `rgba(255, 247, 230, ${alpha * 0.9})`;
          ctx.stroke();

          ctx.restore();
        }

        // Draw Cursor Head Point with soft glowing shadow
        const head = points[0];
        const headRadius = clickedState ? 3 : hoveredState ? 6.5 : 4.5;

        ctx.save();
        ctx.beginPath();
        ctx.arc(head.x, head.y, headRadius + 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(210, 187, 121, 0.25)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(head.x, head.y, headRadius, 0, Math.PI * 2);
        ctx.shadowColor = hoveredState
          ? "#FFF7E6"
          : clickedState
          ? "#5E96B7"
          : "#D2BB79";
        ctx.shadowBlur = hoveredState ? 20 : 12;
        ctx.fillStyle = hoveredState ? "#FFF7E6" : "#D2BB79";
        ctx.fill();

        // White glowing center specular dot
        ctx.beginPath();
        ctx.arc(head.x, head.y, Math.max(1.5, headRadius * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = "#FFF7E6";
        ctx.fill();
        ctx.restore();
      }

      // If trail has completely settled, sleep the loop to save 100% CPU
      if (maxMovement < 0.05 && hasMoved) {
        isRunning = false;
      } else {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      stopLoop();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[99999] h-full w-full transition-opacity duration-300 hidden md:block ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
