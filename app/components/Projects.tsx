"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Project data structure
type Project = {
  id: string;
  title: string;
  posterUrl: string;
  videoUrl: string;
};

// Projects data with local image paths
const projects: Project[] = [
  {
    id: "secuestro",
    title: "Secuestro del Vuelo 601",
    posterUrl: "/images/secuestro-poster.jpg",
    videoUrl: "https://www.youtube.com/embed/0veEBtSKANI",
  },
  {
    id: "titans",
    title: "Titans",
    posterUrl: "/images/titans-poster.jpg",
    videoUrl: "https://www.youtube.com/embed/G2dpMCxjHpU",
  },
  {
    id: "recruit",
    title: "The Recruit",
    posterUrl: "/images/recruit-poster.jpg",
    videoUrl: "https://www.youtube.com/embed/Hywe0zDSSSE",
  },
  {
    id: "barrabrava",
    title: "Barrabrava",
    posterUrl: "/images/barrabrava-poster.jpg",
    videoUrl: "https://www.youtube.com/embed/yeUW6cW-FZA",
  },
  {
    id: "santaevita",
    title: "Santa Evita",
    posterUrl: "/images/santaevita-poster.jpg",
    videoUrl: "https://www.youtube.com/embed/ZSZVPd8s7Fs",
  },
  {
    id: "entrelazados",
    title: "Entrelazados",
    posterUrl: "/images/entrelazados-poster.webp",
    videoUrl: "https://www.youtube.com/embed/dFtsDuykYko",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openVideo = (project: Project) => {
    setSelectedProject(project);
  };

  const closeVideo = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-20 px-8 sm:px-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative aspect-[2/3] bg-gray-900 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openVideo(project)}
            >
              <Image
                src={project.posterUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={index < 3} // Prioritize loading first 3 images
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 z-20  hover:bg-black opacity-60 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col items-center justify-center">
                <p className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                  {project.title}
                </p>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white text-sm uppercase tracking-wider">
                    Watch Trailer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Video Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[3000] bg-black bg-opacity-90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-full h-full md:w-4/5 md:h-4/5"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src={`${selectedProject.videoUrl}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              {/* Close Button */}
              <button
                onClick={closeVideo}
                className="absolute !cursor-pointer top-4 right-4 z-50 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
                aria-label="Close video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
