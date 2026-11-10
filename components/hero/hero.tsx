"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";
import TechText from "./TechText";

const PORTRAIT_SRC = "/me.jpeg";
const PORTRAIT_HOVER_SRC = "/want-to-be.png";
const LINES = ["Full stack developer &", "Freelancer"];

export function Hero(): ReactNode {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState(48);

  // One size for both lines: the CSS font-size, shrunk if the longest line would overflow the column.
  useEffect(() => {
    const h1 = titleRef.current;
    if (!h1) return;
    const ctx = document.createElement("canvas").getContext("2d");
    const update = () => {
      const { fontSize: css, fontFamily } = getComputedStyle(h1);
      const px = parseFloat(css);
      if (!ctx) return setFontSize(px);
      ctx.font = `500 ${px}px ${fontFamily}`;
      const widest = Math.max(...LINES.map((l) => ctx.measureText(l).width));
      setFontSize(px * Math.min(1, h1.clientWidth / widest));
    };
    update();
    document.fonts?.ready.then(update);
    const ro = new ResizeObserver(update);
    ro.observe(h1);
    return () => ro.disconnect();
  }, []);

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-32 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <p className="text-[20px] leading-tight tracking-tight font-medium text-foreground">
              Hey
              <span aria-hidden="true" className="mx-0.5">
                👋
              </span>
              , I&rsquo;m Darshan
            </p>

            <h1
              ref={titleRef}
              className="flex w-full flex-col font-serif text-[1.8rem] text-foreground md:text-[2.5rem] lg:text-[3rem]"
            >
              {LINES.map((line) => (
                <div key={line} className="h-[1.5em] w-full">
                  <TechText
                    text={line}
                    fontSize={fontSize}
                    fontWeight={500}
                    reveal="letter"
                    dashLength={4}
                    dashGap={2}
                    specks={15}
                    intro="none"
                    introDuration={2}
                    clickKick
                    guides={false}
                    letterSpacing={-0.05}
                    accentColor="currentColor"
                    reach={200}
                    softness={0.7}
                    lineStyle="dashed"
                    strokeWidth={1.5}
                    speed={1}
                    bounce={0.4}
                    selection
                    labels
                    color="currentColor"
                    align="left"
                    draggable
                    sweep
                  />
                </div>
              ))}
            </h1>

            <p className="max-w-[34ch] text-[22px] leading-[1.4] tracking-tight text-foreground/65">
              An engineer focused on fast, scalable web applications that feel intuitive to use.
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <div className="relative aspect-square w-full md:max-w-105 overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
              <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
                <PortraitMorph
                  srcA={PORTRAIT_SRC}
                  srcB={PORTRAIT_HOVER_SRC}
                  alt="Darshan Solanki"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
