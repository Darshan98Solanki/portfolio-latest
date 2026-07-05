"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { scrollToTarget } from "@/components/layout/smooth-scroll";
import { useReducedMotion } from "@/lib/motion";

const SHOW_THRESHOLD = 480;

export function ScrollToTop(): ReactNode {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;

    function update(): void {
      setVisible(window.scrollY > SHOW_THRESHOLD);
      ticking = false;
    }

    function handleScroll(): void {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => scrollToTarget(0)}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.85, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.85, y: 8 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.25 }}
          className="focus-ring fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded border border-foreground/8 bg-background text-foreground shadow-sm transition-colors hover:bg-foreground/5"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
