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
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -100, y: -100 };

    // Very short trail
    const POINT_COUNT = 8;

    const points: Point[] = Array.from({ length: POINT_COUNT }, () => ({
      x: -100,
      y: -100,
    }));

    let hasMoved = false;
    let isRunning = false;
    let animationFrameId = 0;

    let hoveredState = false;
    let clickedState = false;
    let isTouchActive = false;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const mouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) {
        setIsVisible(false);
        return;
      }

      isTouchActive = false;

      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!hasMoved) {
        hasMoved = true;

        points.forEach((point) => {
          point.x = e.clientX;
          point.y = e.clientY;
        });
      }

      const target = e.target as HTMLElement | null;

      hoveredState = Boolean(
        target?.closest(
          "a, button, input, textarea, select, [role='button'], .hover-target",
        ),
      );

      setIsVisible(true);
      startLoop();
    };

    const mouseDown = () => {
      clickedState = true;
    };

    const mouseUp = () => {
      clickedState = false;
    };

    const touchStart = () => {
      isTouchActive = true;
      setIsVisible(false);
    };

    const mouseLeave = () => {
      setIsVisible(false);
      hoveredState = false;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      /*
       * Faster cursor response
       * This keeps the trail short even during fast circular movement.
       */
      points[0].x += (mouse.x - points[0].x) * 0.65;
      points[0].y += (mouse.y - points[0].y) * 0.65;

      let movement =
        Math.abs(mouse.x - points[0].x) + Math.abs(mouse.y - points[0].y);

      /*
       * Short and fast-following tail
       */
      for (let i = 1; i < POINT_COUNT; i++) {
        const current = points[i];
        const previous = points[i - 1];

        const dx = previous.x - current.x;
        const dy = previous.y - current.y;

        const speed = 0.45 - (i / POINT_COUNT) * 0.15;

        current.x += dx * speed;
        current.y += dy * speed;

        movement += Math.abs(dx) + Math.abs(dy);
      }

      if (hasMoved && !isTouchActive) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        /*
         * Draw short minimal trail
         */
        for (let i = 0; i < POINT_COUNT - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];

          const progress = i / (POINT_COUNT - 1);

          // Fade quickly toward the end
          const opacity = 1 - progress;

          const baseWidth = hoveredState ? 2.8 : clickedState ? 1.8 : 2.2;

          // Strong taper
          const lineWidth = Math.max(0.5, baseWidth * (1 - progress * 0.8));

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          ctx.lineWidth = lineWidth;

          if (hoveredState) {
            ctx.strokeStyle = `rgba(255, 247, 230, ${opacity * 0.65})`;

            ctx.shadowColor = "rgba(255, 247, 230, 0.2)";
            ctx.shadowBlur = 5;
          } else if (clickedState) {
            ctx.strokeStyle = `rgba(94, 150, 183, ${opacity * 0.6})`;

            ctx.shadowColor = "rgba(94, 150, 183, 0.18)";
            ctx.shadowBlur = 4;
          } else {
            ctx.strokeStyle = `rgba(210, 187, 121, ${opacity * 0.6})`;

            ctx.shadowColor = "rgba(210, 187, 121, 0.18)";
            ctx.shadowBlur = 4;
          }

          ctx.stroke();
        }

        /*
         * Small cursor head
         */
        const head = points[0];

        const radius = hoveredState ? 4 : clickedState ? 2.5 : 3;

        ctx.beginPath();
        ctx.arc(head.x, head.y, radius, 0, Math.PI * 2);

        if (hoveredState) {
          ctx.fillStyle = "#FFF7E6";
          ctx.shadowColor = "#FFF7E6";
          ctx.shadowBlur = 8;
        } else if (clickedState) {
          ctx.fillStyle = "#5E96B7";
          ctx.shadowColor = "#5E96B7";
          ctx.shadowBlur = 5;
        } else {
          ctx.fillStyle = "#D2BB79";
          ctx.shadowColor = "#D2BB79";
          ctx.shadowBlur = 5;
        }

        ctx.fill();
      }

      /*
       * Stop animation when cursor becomes almost still.
       */
      if (movement < 0.05 && hasMoved) {
        isRunning = false;
        return;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", mouseMove, {
      passive: true,
    });
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);
    window.addEventListener("touchstart", touchStart, {
      passive: true,
    });

    document.body.addEventListener("mouseleave", mouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      window.removeEventListener("touchstart", touchStart);

      document.body.removeEventListener("mouseleave", mouseLeave);

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[99999] hidden h-full w-full transition-opacity duration-300 md:block ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
