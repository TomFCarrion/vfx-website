"use client";

import BackgroundVideo from "./BackgroundVideo";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showReel, setShowReel] = useState(false);

  const toggleReel = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowReel(!showReel);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" id="reel">
      {/* Background video */}
      <BackgroundVideo />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Vimeo Reel - AnimatePresence handles entry/exit animations */}
      <AnimatePresence>
        {showReel && (
          <motion.div
            className="absolute inset-0 bg-black flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative w-full h-full md:w-4/5 md:h-4/5"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <iframe
                src="https://player.vimeo.com/video/1064462152?h=de9a7f4d73&autoplay=1&title=0&byline=0&portrait=0"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
              <motion.button
                onClick={toggleReel}
                className="absolute cursor-pointer top-4 right-4 z-50 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
                aria-label="Close video"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
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
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content with animations */}
      <AnimatePresence>
        {!showReel && (
          <motion.div
            className="relative z-10 flex items-center justify-center h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-6xl mx-auto px-8 sm:px-16 flex flex-col md:flex-row items-center gap-10">
              <motion.div
                className="md:w-1/2 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.h1
                  className="text-4xl sm:text-6xl font-bold mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Hi! I'm{" "}
                  <span className="text-[var(--color-brand)]">
                    Magali Carrion
                  </span>
                </motion.h1>
                <motion.h2
                  className="text-2xl sm:text-3xl text-gray-200 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  VFX Compositor
                </motion.h2>
                <motion.p
                  className="text-lg mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  I create beautiful, functional websites and applications with
                  a focus on user experience and clean code.
                </motion.p>
                <motion.div
                  className="flex gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <a
                    href="#contact"
                    className="rounded-full text-white px-6 py-3 font-medium transition-colors"
                    style={{ backgroundColor: "var(--color-brand)" }}
                  >
                    Get in Touch
                  </a>
                  <a
                    href="#"
                    onClick={toggleReel}
                    className="rounded-full border border-brand text-white hover:bg-brand hover:text-gray-900 px-6 py-3 font-medium transition-colors flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Watch Reel
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator with animation */}
      <AnimatePresence>
        {!showReel && (
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a
              href="#about"
              className="flex flex-col items-center text-white animate-bounce"
            >
              <span className="mb-2">Scroll Down</span>
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
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
