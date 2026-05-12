"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      cursor.style.left = `${curX}px`;
      cursor.style.top = `${curY}px`;
      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2)";
      cursor.style.borderColor = "rgba(0, 255, 136, 0.9)";
      cursor.style.background = "rgba(0, 255, 136, 0.06)";
    };

    const onMouseLeaveLink = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursor.style.borderColor = "rgba(0, 255, 136, 0.5)";
      cursor.style.background = "transparent";
    };

    const onMouseDown = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    };
    const onMouseUp = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    document.addEventListener("mousemove", onMouseMove);
    animate();

    const links = document.querySelectorAll("a, button, [role='button']");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      {/* Ring — z-index 9999, pointer-events none so it never blocks text/clicks */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          pointerEvents: "none",
          zIndex: 9999,
          border: "1.5px solid rgba(0, 255, 136, 0.5)",
          transition: "transform 0.2s ease, border-color 0.2s ease, background 0.2s ease",
        }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed w-1.5 h-1.5 rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          pointerEvents: "none",
          zIndex: 9999,
          background: "var(--accent)",
        }}
      />
    </>
  );
}
