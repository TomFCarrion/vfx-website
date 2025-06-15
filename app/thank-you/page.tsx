"use client";

import Link from "next/link";
import BackgroundVideo from "../components/BackgroundVideo";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1E292C] text-gray-900 dark:text-gray-100 font-[family-name:var(--font-geist-sans)]">
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background video */}
        <BackgroundVideo />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-2xl px-8 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
              Thank You!
            </h1>
            <div className="space-y-6 text-gray-200">
              <p className="text-xl">
                I've received your message and will get back to you as soon as
                possible.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-brand text-white hover:scale-110 hover:bg-white hover:text-black px-6 py-3 font-medium transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download CV
              </a>
              <a
                href="/#reel?showReel=true"
                className="inline-flex items-center gap-2 rounded-full text-white hover:scale-110 px-6 py-3 font-medium transition-colors"
                style={{ backgroundColor: "var(--color-brand)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Reel
              </a>
            </div>

            <div className="mt-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
