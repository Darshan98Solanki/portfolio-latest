"use client";

import type { ReactNode } from "react";
import Shuffle from "@/components/Shuffle";
import { StackLoop } from "../logoLoop/StackLoop";

export function Stack(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Shuffle
          text="My stack"
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
      </div>
      <StackLoop />
    </div>
  );
}
