"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Key,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  SiNextdotjs,
  SiReact,
  SiNestjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiSocketdotio,
  SiDocker,
  SiTurborepo,
  SiPrisma,
  SiPostman,
  SiRedis,
  SiGithub,
  SiGit,
  SiVercel,
  SiNetlify,
  SiGooglecloud,
} from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { LogoLoop, type LogoItem } from "./LogoLoop";

const techLogos = [
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNestjs />, title: "NestJs", href: "https://nestjs.com" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <FaNode />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiMui />, title: "Material UI", href: "https://mui.com" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
];

const servicesLogos = [
  { node: <SiSocketdotio />, title: "WebSocket", href: "https://socket.io" },
  { node: <SiDocker />, title: "Docker", href: "https://docker.com" },
  { node: <SiTurborepo />, title: "Turborepo", href: "https://turborepo.org" },
  { node: <SiPrisma />, title: "Prisma", href: "https://prisma.io" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
  { node: <SiGithub />, title: "Github", href: "https://github.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiNetlify />, title: "Netlify", href: "https://netlify.com" },
  { node: <SiGooglecloud />, title: "Google Cloud", href: "https://cloud.google.com" },
];

function LogoTooltip({ item }: { item: LogoItem }) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    const rect = spanRef.current?.getBoundingClientRect();
    if (rect) setCoords({ x: rect.left + rect.width / 2, y: rect.top });
    timerRef.current = setTimeout(() => setVisible(true), 600);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  };

  const title = (item as any).title ?? (item as any).alt ?? "";
  const href = (item as any).href as string | undefined;
  const nodeContent =
    "node" in item ? (
      (item as any).node
    ) : (
      <img
        src={(item as any).src}
        alt={(item as any).alt ?? ""}
        className="h-[var(--logoloop-logoHeight)] w-auto"
      />
    );

  const iconEl = (
    <span
      ref={spanRef}
      className="inline-flex items-center group-hover/item:scale-120 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {nodeContent}
    </span>
  );

  return (
    <>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={title}
          className="inline-flex items-center no-underline rounded hover:opacity-80 transition-opacity duration-200 focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2"
        >
          {iconEl}
        </a>
      ) : (
        iconEl
      )}

      {mounted &&
        createPortal(
          <AnimatePresence>
            {visible && title && (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0, scale: 0.8, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 6 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{
                  position: "fixed",
                  left: coords.x,
                  top: coords.y - 12,
                  transform: "translate(-50%, -100%)",
                  zIndex: 9999,
                  pointerEvents: "none",
                }}
              >
                <div className="relative bg-foreground text-background text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap tracking-wide">
                  {title}
                  <span
                    aria-hidden
                    className="absolute top-full left-1/2 -translate-x-1/2"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "5px solid transparent",
                      borderRight: "5px solid transparent",
                      borderTopWidth: "5px",
                      borderTopStyle: "solid",
                      borderTopColor: "var(--foreground)",
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

export function StackLoop(): ReactNode {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  const renderItem = useCallback(
    (item: LogoItem, _key: Key) => <LogoTooltip item={item} />,
    []
  );

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full px-6 sm:px-10">
        <div
          style={{
            height: "200px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <LogoLoop
            logos={techLogos}
            speed={isScrolling ? 0 : 100}
            direction="left"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            ariaLabel="Technology stack"
            renderItem={renderItem}
          />
          <LogoLoop
            logos={servicesLogos}
            speed={isScrolling ? 0 : 100}
            direction="right"
            logoHeight={60}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            ariaLabel="Tools and services"
            className="mt-6"
            renderItem={renderItem}
          />
        </div>
      </div>
    </section>
  );
}
