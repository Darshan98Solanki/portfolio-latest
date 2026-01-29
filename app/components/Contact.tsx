"use client";

import Dock from "./Dock";
import { SiGithub, SiGmail, SiLeetcode, SiLinkedin, SiX } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import ScrambledText from "./ScrambledText";
import Magnet from "./Magnet";
import { motion } from "motion/react";
import { resumeURL } from "../constant";

export default function Contact() {
  const items = [
    {
      icon: <SiLeetcode size={18} />,
      label: "LeetCode",
      onClick: () => alert("Home!"),
    },
    {
      icon: <SiLinkedin size={18} />,
      label: "LinkedIn",
      onClick: () => alert("LinkedIn!"),
    },
    {
      icon: <SiX size={18} />,
      label: "Profile",
      onClick: () => alert("Profile!"),
    },
    {
      icon: <SiGithub size={18} />,
      label: "GitHub",
      onClick: () => alert("GitHub!"),
    },
    {
      icon: <SiGmail size={18} />,
      label: "GitHub",
      onClick: () => alert("GitHub!"),
    },
  ];

  type HireMeButtonProps = {
    resumeUrl: string;
  };

  function HireMeButton({ resumeUrl }: HireMeButtonProps) {
    return (
      <motion.a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="
        relative inline-flex items-center gap-2
        px-6 py-3
        rounded-full
        text-sm sm:text-base font-semibold
        text-neutral-100
        bg-neutral-900
        border border-neutral-700
        shadow-md
        hover:border-neutral-500
        hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]
        focus:outline-none
        cursor-pointer
      "
      >
        Hire Me
        <span className="text-base"><TbExternalLink /></span>
      </motion.a>
    );
  }

  return (
    <section id="contact" className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl flex flex-col items-center gap-10">
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
          <ScrambledText
            className="text-md sm:text-base lg:text-lg"
            radius={80}
            duration={1}
            speed={1}
            scrambleChars=".:"
          >
            I’m currently available for freelance projects or full-time
            opportunities 🚀✨ Got a project that needs a rock-solid backend ⚙️
            or a sleek, polished frontend 🎨💻? Let’s talk 😄🤝
          </ScrambledText>

          <div className="min-w-[200px] flex justify-center">
            <Magnet padding={300} disabled={false} magnetStrength={300}>
              <HireMeButton resumeUrl={resumeURL} />
            </Magnet>
          </div>
        </div>

        <Dock
          items={items}
          panelHeight={64}
          baseItemSize={40}
          magnification={60}
          className="sm:flex"
        />
      </div>
    </section>
  );
}
