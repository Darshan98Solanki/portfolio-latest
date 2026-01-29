"use client";

import { useEffect, useState } from "react";
import { X, ExternalLink, Github, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  details: {
    fullDescription: string;
    technologies: string[];
    features: string[];
    challenges?: string;
    outcome?: string;
    embeddedLink?: string;
  };
  imageUrl?: string;
  tags?: string[];
  color?: string;
}

export default function ProjectCard({
  title,
  description,
  liveUrl,
  githubUrl,
  details,
  imageUrl,
  color = "from-emerald-500 to-teal-500",
  tags = [],
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);


  return (
    <>
      {/* Project Card */}
      <div className="group relative rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-500 shadow-lg hover:shadow-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)",
            }}
          />
        </div>

        {/* Image */}
        {imageUrl && (
          <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-800/50">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="relative p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 line-clamp-2 min-h-[3.5rem]">
            {title}
          </h3>

          <p className="text-slate-300 mb-4 line-clamp-3 min-h-[4.5rem]">
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-full border bg-gradient-to-r ${color} bg-clip-text text-transparent border-slate-600/50`}
                  style={{ backgroundColor: "rgba(148,163,184,0.1)" }}
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-2.5 py-1 text-xs bg-slate-700/50 text-slate-400 rounded-full border border-slate-600/50">
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r ${color} text-white text-sm font-medium rounded-lg transition hover:scale-105`}
              >
                <ExternalLink size={16} />
                Live
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-2 bg-slate-700/50 hover:bg-slate-600 text-white text-sm font-medium rounded-lg border border-slate-600/50 transition hover:scale-105"
              >
                <Github size={16} />
                GitHub
              </a>
            )}

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center cursor-pointer justify-center gap-2 px-3 py-2 bg-slate-700/50 hover:bg-slate-600 text-white text-sm font-medium rounded-lg border border-slate-600/50 transition hover:scale-105"
            >
              <Info size={16} />
              Details
            </button>
          </div>
        </div>

        {/* Decorative Gradient */}
        <div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity`}
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute cursor-pointer top-4 right-4 p-2 bg-slate-800 rounded-full"
            >
              <X size={20} />
            </button>

            <div className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-white">{title}</h2>

              <section>
                <h3
                  className={`bg-gradient-to-r ${color} bg-clip-text text-transparent font-semibold mb-2`}
                >
                  About
                </h3>
                <p className="text-slate-300">{details.fullDescription}</p>
              </section>

              <section>
                <h3
                  className={`bg-gradient-to-r ${color} bg-clip-text text-transparent font-semibold mb-2`}
                >
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {details.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800 rounded-lg border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3
                  className={`bg-gradient-to-r ${color} bg-clip-text text-transparent font-semibold mb-2`}
                >
                  Features
                </h3>
                <ul className="space-y-2 text-slate-300">
                  {details.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </section>

              {details.challenges && (
                <section>
                  <h3
                    className={`bg-gradient-to-r ${color} bg-clip-text text-transparent font-semibold mb-2`}
                  >
                    Challenges
                  </h3>
                  <p className="text-slate-300">{details.challenges}</p>
                </section>
              )}

              {details.outcome && (
                <section>
                  <h3
                    className={`bg-gradient-to-r ${color} bg-clip-text text-transparent font-semibold mb-2`}
                  >
                    Outcome
                  </h3>
                  <p className="text-slate-300">{details.outcome}</p>
                </section>
              )}
              {details.embeddedLink && (
                <div className="w-full flex justify-center relative">
                  {/* Loader */}
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-600 border-t-white" />
                    </div>
                  )}

                  <iframe
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7114860052141776896?collapsed=1"
                    height="541"
                    width="504"
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded post"
                    onLoad={() => setIsLoading(false)}
                    className={`transition-opacity duration-500 ${
                      isLoading ? "opacity-0" : "opacity-100"
                    }`}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
