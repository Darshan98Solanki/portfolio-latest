"use client";

import { useState, useEffect, useRef } from "react";
import { BsBriefcaseFill } from "react-icons/bs";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";

const experiences = [
  {
    company: "Hubblehox",
    role: "Jr. Full Stack Developer",
    period: "Mar 2025 – Present",
    location: "Mumbai, India",
    description:
      "Developing scalable backend services and reusable frontend components for production applications.",
    color: "from-blue-500 to-cyan-500",
    spotLightColor: "rgba(59, 130, 246, 0.6)",
    details: {
      responsibilities: [
        "Built and maintained scalable backend services using NestJS with modular architecture",
        "Improved API performance and reduced response times by 30% through optimized request handling",
        "Developed 10+ reusable UI components using Next.js and Tailwind CSS",
        "Implemented MongoDB query optimization and pagination strategies for large datasets",
        "Ensured consistent design and performance across the application",
      ],
      technologies: [
        "Next.js",
        "NestJS",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "Material UI",
        "RBAC",
        "CI/CD",
        "GCP",
        "Docker",
      ],
      projects: [
        {
          name: "Learning Management System",
          description: "Improved backend performance and built reusable frontend components for a scalable LMS.",
          tech: ["Next.js", "NestJS","TypeScript","Node.js", "MongoDB","Material UI", "RBAC", "CI/CD", "GCP", "Docker",
          ],
        },
      ],
    },
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Associate Software Trainee",
    period: "Sep 2024 – Mar 2025",
    location: "Gandhinagar, India",
    description:
      "Worked on backend systems delivering secure REST APIs and authentication mechanisms.",
    color: "from-indigo-500 to-purple-500",
    spotLightColor: "rgba(99, 102, 241, 0.6)",
    details: {
      responsibilities: [
        "Led backend development using Node.js and Express.js",
        "Designed and documented RESTful APIs for cross-team usage",
        "Implemented JWT-based authentication and role-based access control",
        "Collaborated with designers, testers, and project managers",
      ],
      technologies: ["Node.js", "Express.js", "JWT", "MongoDB", "REST APIs"],
      projects: [
        {
          name: "Marks & Spencer",
          description:
            "Built secure backend services with REST APIs, JWT authentication, and MongoDB for enterprise workflows.",
          tech: ["Node.js", "Express.js", "JWT", "MongoDB", "REST APIs"],
        },
      ],
    },
  },
  {
    company: "Anomaly Enterprise",
    role: "Jr. Full Stack Intern",
    period: "Dec 2023 – May 2024",
    location: "Gandhidham, India",
    description:
      "Worked on full-stack development using traditional and modern web technologies.",
    color: "from-emerald-500 to-teal-500",
    spotLightColor: "rgba(16, 185, 129, 0.6)",
    details: {
      responsibilities: [
        "Developed a responsive website using Bootstrap, PHP, and MySQL",
        "Built secure REST APIs using Node.js and Express.js",
        "Integrated JWT authentication and custom middleware",
        "Handled validation, error handling, and access control",
      ],
      technologies: [
        "PHP",
        "JavaScript",
        "MySQL",
        "Node.js",
        "Express.js",
        "Bootstrap",
        "JWT",
      ],
      projects: [
        {
          name: "Nova Skin Care Website",
          description:
            "Developed a responsive business website with dynamic content and database integration.",
          tech: ["PHP", "MySQL", "Bootstrap"],
        },
        {
          name: "Shyam Milk Dairy Pvt. Ltd. Backend",
          description:
            "Built backend APIs for managing data, operations, and database interactions.",
          tech: ["MySQL", "Express.js", "Node.js", "JavaScript", "JWT"],
        },
      ],
    },
  },
  {
    company: "TatvaSoft",
    role: "React Developer Intern",
    period: "May 2023 – Jun 2023",
    location: "Remote, India",
    description:
      "Worked on a MERN-based full-stack application with authentication and user management.",
    color: "from-pink-500 to-rose-500",
    spotLightColor: "rgba(236, 72, 153, 0.6)",
    details: {
      responsibilities: [
        "Developed a full-stack book-selling platform using the MERN stack",
        "Implemented JWT-based authentication and password encryption with bcrypt",
        "Built responsive frontend components using React.js",
        "Handled API integration using Axios and form handling with Formik",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Axios",
      ],
      projects: [
        {
          name: "Book Selling Platform",
          description:
            "MERN-based platform allowing users to manage accounts and book listings.",
          tech: [
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "JWT",
            "Axios",
          ],
        },
      ],
    },
  },
];

export default function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedExp, setSelectedExp] = useState<any>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedExp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedExp]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth =
        (container.querySelector(".experience-card") as HTMLElement | null)
          ?.offsetWidth || 0;
      const gap = 24;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, experiences.length - 1));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction: any) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector(
        ".experience-card",
      ) as HTMLElement | null;
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const gap = 32;
      const scrollAmount = cardWidth + gap;

      if (direction === "left") {
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="min-h-auto bg-[#0a0a0a] p-4 md:p-8">
      <div className="max-w-7xl w-full">
        <div className="relative md:px-16">
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaChevronLeft className="text-white" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaChevronRight className="text-white" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 md:gap-8 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-card flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[calc(33.333%-21px)] snap-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  transition: `all 0.7s ease ${index * 100}ms`,
                }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <SpotlightCard
                  className="p-4"
                  spotlightColor={
                    exp.spotLightColor as `rgba(${number}, ${number}, ${number}, ${number})`
                  }
                >
                  <div
                    onClick={() => setSelectedExp(exp)}
                    className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 md:p-6 hover:border-gray-700 transition-transform duration-300 cursor-pointer group h-full ${
                      activeIndex === index ? "shadow-2xl" : ""
                    }`}
                    style={{
                      boxShadow:
                        activeIndex === index
                          ? "0 20px 60px rgba(59, 130, 246, 0.3)"
                          : "",
                    }}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <BsBriefcaseFill className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {exp.company}
                    </h3>

                    <p className="text-gray-300 font-medium mb-4 text-sm md:text-base">
                      {exp.role}
                    </p>

                    <div className="flex items-center text-gray-400 text-xs md:text-sm mb-2">
                      <FaCalendarAlt className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
                      {exp.period}
                    </div>

                    <div className="flex items-center text-gray-400 text-xs md:text-sm mb-4">
                      <FaMapMarkerAlt className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
                      {exp.location}
                    </div>

                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <div
                      className={`h-1 bg-gradient-to-r ${exp.color} mt-4 rounded-full transition-all duration-300 ${
                        activeIndex === index ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {experiences.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-blue-500"
                    : "w-1.5 bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      </div>

      {/* Modal */}
      {selectedExp && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedExp(null)}
        >
          <div
            className="bg-gray-900 border border-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className={`relative bg-gradient-to-r ${selectedExp.color} p-6 md:p-8 rounded-t-3xl`}
            >
              {/* Mobile header row */}
              <button
                onClick={() => setSelectedExp(null)}
                className="absolute top-4 right-4 md:top-4 md:right-4 w-9 h-9 md:w-10 md:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all cursor-pointer"
              >
                <FaTimes className="text-white text-sm md:text-base" />
              </button>
              <div className="flex items-start justify-between md:hidden mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <BsBriefcaseFill className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white leading-tight">
                      {selectedExp.company}
                    </h2>
                    <p className="text-white/90 text-sm">{selectedExp.role}</p>
                  </div>
                </div>
              </div>

              {/* Desktop content */}
              <div className="hidden md:flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <BsBriefcaseFill className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedExp.company}
                  </h2>
                  <p className="text-white/90 text-lg">{selectedExp.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>{selectedExp.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  <span>{selectedExp.location}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Responsibilities */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaRocket className="text-blue-400" />
                  Key Responsibilities
                </h3>
                <ul className="space-y-2">
                  {selectedExp.details.responsibilities.map(
                    (resp: any, idx: any) => (
                      <li
                        key={idx}
                        className="text-gray-300 flex items-start gap-3"
                      >
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaCode className="text-purple-400" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.details.technologies.map(
                    (tech: any, idx: any) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Notable Projects
                </h3>
                <div className="space-y-4">
                  {selectedExp.details.projects.map(
                    (project: any, idx: any) => (
                      <div
                        key={idx}
                        className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-gray-600 transition-all duration-300"
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {project.name}
                        </h4>
                        <p className="text-gray-400 mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t: any, i: any) => (
                            <span
                              key={i}
                              className={`px-3 py-1 bg-gradient-to-r ${selectedExp.color} text-white rounded-full text-xs font-medium`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
