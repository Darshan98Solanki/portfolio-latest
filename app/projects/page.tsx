import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { FadeIn } from "@/components/ui/motion-primitives";
import Shuffle from "@/components/Shuffle";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import ClickSpark from "@/components/ClickSpark";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "Selected work and case studies.",
  path: "/projects",
});

export default function ProjectsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <ClickSpark
        sparkColor="var(--foreground)"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <section className="mx-auto w-full max-w-275 px-6 pt-44 pb-16 sm:px-10 sm:pt-60 sm:pb-20">
          <FadeIn className="flex flex-col items-center gap-5 text-center">
            <Shuffle
              text="My recent work"
              tag="h1"
              className="text-foreground font-serif text-[2.75rem] leading-[1.05] font-medium tracking-tight md:text-[3.25rem] lg:text-[3.75rem]"
              shuffleDirection="right"
              textAlign="center"
              animationMode="evenodd"
              stagger={0.025}
              duration={0.4}
              triggerOnce
              triggerOnHover={true}
            />
            <p className="text-foreground/65 max-w-[33ch] text-[20px] leading-[1.4] tracking-tight sm:text-[22px]">
              Experiments, collaborations, and projects I&rsquo;m especially
              proud to have shipped.
            </p>
          </FadeIn>
        </section>
        <Projects />
        <ContactCard />
        <div className="h-12 sm:h-16" />
      </ClickSpark>
    </main>
  );
}
