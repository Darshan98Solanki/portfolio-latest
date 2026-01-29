import TextType from "./typoText";
import { orbitron } from "../fonts";
import { motion } from "motion/react";
import { Contact } from "lucide-react";
import Magnet from "./Magnet";
import { GoProjectSymlink } from "react-icons/go";
import { IoMdContact } from "react-icons/io";

const colorVariants: Record<string, string> = {
  neutral: `
    bg-neutral-900 text-neutral-100 border-neutral-700
    hover:border-neutral-500
  `,
  indigo: `
    bg-indigo-600 text-white border-indigo-500
    hover:border-indigo-400
  `,
  sky: `
    bg-sky-600 text-white border-sky-500
    hover:border-sky-400
  `,
  teal: `
    bg-teal-600 text-white border-teal-500
    hover:border-teal-400
  `,
};

function Button({
  text,
  redirectTo,
  bgColor = "neutral",
  icon = <Contact />,
  onClick,
}: {
  text: string;
  redirectTo?: string;
  bgColor?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.a
      href={redirectTo || "#"}
      target={redirectTo ? "_blank" : undefined}
      rel={redirectTo ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`
        relative inline-flex items-center justify-center gap-2
        sm:w-[180px] md:w-[180px]
        px-6 py-3
        rounded-2xl
        text-sm sm:text-base font-semibold
        shadow-md
        hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]
        cursor-pointer
        ${colorVariants[bgColor]}
      `}
    >
      {text}
      <span className="w-5 flex justify-center shrink-0">{icon}</span>
    </motion.a>
  );
}

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <h1
          className={` ${orbitron.className} text-4xl md:text-6xl font-bold tracking-tight text-white`}
        >
          Darshan Solanki
        </h1>

        <TextType
          text={["Full Stack Developer", "Software Engineer", "Freelancer"]}
          className={`mt-4 text-lg md:text-2xl text-gray-300`}
          typingSpeed={80}
        />

        <p
          className={`mt-6 text-base md:text-lg text-gray-400 leading-relaxed`}
        >
          I build scalable web applications using Next.js, Nest.js, and modern
          cloud-native architectures. I focus on performance, clarity, and
          systems that survive real-world load.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button
            icon={<GoProjectSymlink />}
            text="Projects"
            bgColor="indigo"
            onClick={() => scrollToSection("projects")}
          />

          <Magnet>
            <Button
              icon={<IoMdContact size={28}/>}
              text="Contact Me"
              onClick={() => scrollToSection("contact")}
            />
          </Magnet>
        </div>
      </div>
    </section>
  );
}
