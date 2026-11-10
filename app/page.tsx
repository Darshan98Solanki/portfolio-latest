import { ContactCard } from "@/components/contact/contact-card";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import ClickSpark from "@/components/ClickSpark";
import { StackLoop } from "@/components/logoLoop/StackLoop";
import { Experience } from "@/components/about/experience";
import { Reveal } from "@/components/FadeContent";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: `Welcome to ${siteConfig.name}. ${siteConfig.description}`,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col gap-20 sm:gap-28">
      <ClickSpark
        sparkColor="var(--foreground)"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Reveal><Hero /></Reveal>
        <Reveal><StackLoop withHeading /></Reveal>
        <Reveal><Projects withHeadline viewMoreVisible /></Reveal>
        <Reveal className="mx-auto w-full max-w-275 px-6 sm:px-10">
          <Experience withHeadline/>
        </Reveal>
        <Reveal><ContactCard /></Reveal>
        <div className="h-12 sm:h-16" />
      </ClickSpark>
    </main>
  );
}
