"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface IconPosition {
  id: string;
  name: string;
  bgColor: string;
  src: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
}

const techIcons = [
  {
    name: "React",
    src: "/icons/react.png",
    bgColor: "rgba(97, 218, 251, 0.15)", // React cyan
  },
  {
    name: "TypeScript",
    src: "/icons/ts.png",
    bgColor: "rgba(49, 120, 198, 0.15)", // TS blue
  },
  {
    name: "NestJs",
    src: "/icons/nest.png",
    bgColor: "rgba(234, 44, 80, 0.15)", // Nest red
  },
  {
    name: "Mongo",
    src: "/icons/mongo.png",
    bgColor: "rgba(71, 162, 72, 0.15)", // Mongo green
  },
];

export default function FloatingTechIcons() {
  const [icons, setIcons] = useState<IconPosition[]>([]);
  const rafId = useRef<number | null>(null);
  const targetOffset = useRef({ x: 0, y: 0 });
  const currentOffset = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  // Initial placement
  useEffect(() => {
    const padding = 10;
    const jitter = 8;

    const corners = [
      { x: padding, y: padding },
      { x: 100 - padding, y: padding },
      { x: padding, y: 100 - padding },
      { x: 100 - padding, y: 100 - padding },
    ];

    // Fixed size - 48px for all screens
    const size = 48;

    const initialIcons: IconPosition[] = techIcons.map((tech, index) => {
      const corner = corners[index % 4];

      const x = corner.x + (Math.random() * jitter - jitter / 2);
      const y = corner.y + (Math.random() * jitter - jitter / 2);

      return {
        id: `icon-${index}`,
        name: tech.name,
        src: tech.src,
        bgColor: tech.bgColor,
        x,
        y,
        baseX: x,
        baseY: y,
        size,
      };
    });

    setIcons(initialIcons);
  }, []);

  // Mouse interaction
  useEffect(() => {
    const animate = () => {
      // ease factor (lower = smoother)
      const ease = 0.08;

      currentOffset.current.x +=
        (targetOffset.current.x - currentOffset.current.x) * ease;
      currentOffset.current.y +=
        (targetOffset.current.y - currentOffset.current.y) * ease;

      if (containerRef.current) {
        containerRef.current.style.transform = `
        translate(${currentOffset.current.x}px, ${currentOffset.current.y}px)
      `;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (window.innerWidth < 768) return;

      const rect = containerRef.current.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const strength = 20;

      targetOffset.current.x = clamp(x * strength, -10, 10);
      targetOffset.current.y = clamp(y * strength, -10, 10);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
    >
      {icons.map((icon) => (
        <div
          key={icon.id}
          style={{
            position: "absolute",
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Background glass with fixed size */}
          <div
            style={{
              backgroundColor: icon.bgColor,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              width: "72px", // Fixed container size
              height: "72px",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Icon with fixed size */}
            <Image
              src={icon.src}
              alt={icon.name}
              width={icon.size}
              height={icon.size}
              className="opacity-90 transition-opacity hover:opacity-100"
              style={{
                width: `${icon.size}px`,
                height: `${icon.size}px`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
