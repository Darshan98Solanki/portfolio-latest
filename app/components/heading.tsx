"use client";
import { orbitron } from "../fonts";
import Shuffle from "./Shuffle";

export function Heading({ title }: { title: string }) {
  return (
    <div className="w-full flex justify-center p-6 md:p-10">
      <Shuffle
        className={`${orbitron.className} text-2xl md:text-4xl font-bold text-white`}
        text={title}
        shuffleDirection="right"
        duration={0.35}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover
        respectReducedMotion={true}
        loop={false}
        loopDelay={0}
      />
    </div>
  );
}
