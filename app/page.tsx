"use client";

import LightRays from "./components/background";
import FloatingTechIcons from "./components/floatingIcons";
import Hero from "./components/hero";
import LogoLoop from "./components/LogoLoop";
import MagicBento from "./components/MagicBento";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
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
import { FaNode } from "react-icons/fa6";
import FlowingMenu from "./components/FlowingMenu";
import ExperienceTimeline from "./components/experience";
import { Heading } from "./components/heading";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loading from "./loading";

const techLogos = [
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNestjs />, title: "NestJs", href: "https://nestjs.com" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <FaNode />, title: "Node.js", href: "https://nodejs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://www.javascript.com",
  },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  { node: <SiMysql />, title: "MySQL", href: "https://www.postgresql.org" },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiMui />, title: "Material UI", href: "https://mui.com" },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },
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
  {
    node: <SiGooglecloud />,
    title: "Google Cloud",
    href: "https://cloud.google.com",
  },
];

const buildItems = [
  {
    link: "#",
    text: "Build",
    image: "/images/build.jpg",
  },
  {
    link: "#",
    text: "Scale",
    image: "/images/scale.jpg",
  },
  {
    link: "#",
    text: "Secure",
    image: "/images/secure.png",
  },
];

export default function Home() {
  return (
    <div>
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={1}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating
          fadeDistance={1}
          saturation={1}
        >
          <Hero />
          <FloatingTechIcons />
        </LightRays>
        <Heading title="How I Build" />
        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />
        <div style={{ height: "380px", position: "relative" }}>
          <FlowingMenu
            items={buildItems}
            speed={10}
            textColor="#ffffff"
            bgColor="#0a0a0a"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#060010"
            borderColor="#ffffff"
          />
        </div>
        <div className="py-4">
          <Heading title="Production stack" />
        </div>
        <div className="w-full flex justify-center p-6">
          <div
            style={{
              height: "200px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#0a0a0a"
              ariaLabel="Technology partners"
            />
            <LogoLoop
              logos={servicesLogos}
              speed={100}
              direction="right"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#0a0a0a"
              ariaLabel="Technology partners"
              className="mt-6"
            />
          </div>
        </div>
        <div className="py-4">
          <Heading title="Experience" />
        </div>
        <ExperienceTimeline />
        <section id="projects" className="py-4">
          <Heading title="Projects" />
        </section>
        <Projects />
        <div className="pt-4">
          <Heading title="Contact Me" />
        </div>
        <Contact />
      </div>
    </div>
  );
}
