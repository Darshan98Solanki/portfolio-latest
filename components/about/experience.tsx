"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { FadeIn } from "@/components/ui/motion-primitives";
import Shuffle from "../Shuffle";

type Entry = {
  company: string;
  role: string;
  period: string;
  slug?: string;
  brand?: string;
};

const ENTRIES: Entry[] = [
   {
    company: "Micro 1 (Contract/Freelance)",
    role: "Associate Software Engineer",
    period: "Mar 2025 – Present",
    slug: "micro-1.png",
    brand: "#111111",
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2023 – Present",
    brand: "#0AE448",
  },
  {
    company: "Hubblehox",
    role: "Jr. Full Stack Developer",
    period: "Mar 2025 – Present",
    slug: "hubblehox.png",
    brand: "#5E6AD2",
  },
  {
    company: "Tata Consultancy Services",
    role: "Associate Software Engineer",
    period: "Sep 2024 – Mar 2025",
    slug: "tcs.png",
    brand: "#0a0a0a",
  },
  {
    company: "Anomaly Enterprise",
    role: "Full Stack Developer Intern",
    period: "Dec 2023 – Jun 2024",
    slug: "anomaly.png",
    brand: "#635BFF",
  },
  {
    company: "Tatva Soft",
    role: "React Developer Intern",
    period: "May 2023 – Jun 2023",
    slug: "tatva.png",
    brand: "#A259FF",
  }
];

const COLLAPSED_COUNT = 2.5;
const ROW_HEIGHT = 64;
const ROW_GAP = 8;

export type ExperienceProps = {
  withHeadline?: boolean;
};

export function Experience({
  withHeadline = false,
}: ExperienceProps): ReactNode {
  const [open, setOpen] = useState(false);
  const collapsedHeight =
    Math.floor(COLLAPSED_COUNT) * ROW_HEIGHT +
    Math.floor(COLLAPSED_COUNT) * ROW_GAP +
    (COLLAPSED_COUNT % 1) * ROW_HEIGHT;
  const hiddenCount = ENTRIES.length - Math.floor(COLLAPSED_COUNT);

  return (
    <div className="flex flex-col gap-3">
      {withHeadline ? (
        <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
          <Shuffle
            text="Experience"
            tag="h2"
            className="text-foreground font-serif text-[2.5rem] leading-[1.05] font-medium tracking-tight md:text-[3rem] lg:text-[3.5rem]"
            shuffleDirection="right"
            textAlign="center"
            animationMode="evenodd"
            stagger={0.025}
            duration={0.4}
            triggerOnce
            triggerOnHover={true}
            threshold={0}
          />
          <p className="text-foreground/65 max-w-[33ch] text-[18px] leading-[1.45] tracking-tight sm:text-[20px]">
            Roles and projects that shaped how I build, ship, and think about
            software.
          </p>
        </FadeIn>
      ) : (
        <Shuffle
          text="Experience"
          tag="h3"
          className="font-serif text-[1.125rem] font-semibold tracking-tight text-foreground sm:text-[1.25rem]"
          shuffleDirection="right"
          textAlign="left"
          animationMode="evenodd"
          stagger={0.03}
          duration={0.35}
          triggerOnce
          triggerOnHover
        />
      )}
      <div
        className={`border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative overflow-hidden rounded-4xl border px-2 pt-2 sm:px-4 sm:pt-4 ${
          open ? "pb-2 sm:pb-4" : "pb-0"
        }`}
      >
        <motion.div
          className="relative"
          initial={false}
          animate={{
            height: open ? "auto" : collapsedHeight,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: "hidden" }}
        >
          <ul className="flex flex-col gap-2">
            {ENTRIES.map((entry) => (
              <li
                key={`${entry.company}-${entry.period}`}
                className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
                style={{ minHeight: ROW_HEIGHT }}
              >
                <CompanyLogo entry={entry} />
                <div className="flex min-w-0 flex-col">
                  <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                    {entry.company}
                  </span>
                  <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                    {entry.role}
                    <span className="text-foreground/30 mx-2">•</span>
                    <span className="text-foreground/55">{entry.period}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <AnimatePresence>
          {!open && (
            <motion.div
              key="fade"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0"
              style={{
                height: ROW_HEIGHT,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 80%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 80%)",
              }}
            />
          )}
        </AnimatePresence>

        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={`focus-ring text-foreground flex w-full cursor-pointer items-center justify-center gap-1.5 bg-transparent text-[15px] font-medium tracking-tight ${
              open
                ? "relative mt-4"
                : "absolute inset-x-0 bottom-0 z-10 py-3 sm:py-4"
            }`}
          >
            {open ? "Show less" : `Show ${hiddenCount} more`}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="inline-flex"
            >
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          </button>
        )}
      </div>
    </div>
  );
}

function CompanyLogo({ entry }: { entry: Entry }): ReactNode {
  const initials = entry.company.charAt(0);
  return (
    <span
      className="ring-foreground/8 inline-flex h-12 w-12 shrink-0 items-center justify-center bg-white ring-1 dark:ring-white/10"
      aria-hidden="true"
      style={{
        borderRadius: 14,
        ...(entry.slug ? {} : { backgroundColor: entry.brand }),
      }}
    >
      {entry.slug ? (
        <Image
          src={`/logos/${entry.slug}`}
          alt={entry.company}
          width={32}
          height={32}
          className="h-8 w-8"
          draggable={false}
        />
      ) : (
        <span className="text-[18px] font-semibold tracking-tight text-white">
          {initials}
        </span>
      )}
    </span>
  );
}
