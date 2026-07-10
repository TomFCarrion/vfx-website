"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import InfoBlock from "./components/InfoBlock";
import LogoBanner from "./components/LogoBanner";
import Navbar from "./components/Navbar";
import MultiLayerImageSlider from "./components/MultiLayerImageSlider";
import MovieSwiper from "./components/MovieSwiper";
import { Suspense, useState } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    try {
      await fetch(e.currentTarget.action, {
        method: "POST",
        body: new FormData(e.currentTarget),
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#1E292C] text-gray-100 font-[family-name:var(--font-geist-sans)]">
      <header>
        <Navbar />
      </header>

      {/* Hero Section Component */}
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <Hero />
      </Suspense>

      {/* About Section */}
      <InfoBlock
        title="About me."
        subtitle="(she/her)"
        imageSrc="/images/maga.webp"
        imageAlt="Magali Carrion smiling in a black and white portrait"
        paragraphs={[
          "Hi! I'm Magali Carrion, a 36 years old VFX compositor from Argentina. Over the past years I've working on different live action productions and willing to find the next challenge.",
          "I enjoy doing invisible effects and would love to keep learning about compositing. I also love teaching and tutor future compositors everytime I can.",
          "Away from the pc I like photography, cooking, reading, football and cats (specially mine two!).",
          "And of course, I can't even think without coffee first.",
        ]}
        imageOnLeft={true}
        buttons={[
          {
            text: "Download CV",
            href: "/files/Magali Carrion - Resume.pdf",
            target: "_blank",
            download: true,
          },
          {
            text: "Get in touch",
            href: "/#contact",
            isPrimary: true,
          },
        ]}
        socialLinks={[
          {
            type: "linkedin",
            href: "https://www.linkedin.com/in/magalicarrion/",
          },
          {
            type: "imdb",
            href: "https://www.imdb.com/es/name/nm12651220/",
          },
        ]}
      />

      {/* Logo Banner */}
      <LogoBanner
        logos={[
          {
            id: "malditomaus",
            name: "Maldito Maus",
            imageUrl: "/logos/Maus.avif",
            link: "https://malditomaus.com",
          },
          {
            id: "bitt",
            name: "Bitt Animation",
            imageUrl: "/logos/Bitt.avif",
            link: "https://bittanimation.com",
          },
          {
            id: "folks",
            name: "Folks VFX",
            imageUrl: "/logos/Folks.avif",
            link: "https://folksvfx.com",
          },
          {
            id: "boat",
            name: "Boat Studio",
            imageUrl: "/logos/Boat.avif",
            link: "https://boatstudio.tv",
          },
          {
            id: "lasociedad",
            name: "La Sociedad Post",
            imageUrl: "/logos/lasociedad.avif",
            link: "https://lasp.co/",
          },
          {
            id: "mor",
            name: "MOR - Masters of Reality",
            imageUrl: "/logos/MOR.png",
            link: "https://morvfx.com",
          },
          {
            id: "o2",
            name: "O2 Filmes",
            imageUrl: "/logos/O2.jpg",
            link: "https://www.o2filmes.com",
          },
        ]}
      />

      {/* Before & After Section */}
      <section
        id="before-after"
        className="py-10 md:py-20 px-4 sm:pt-16 sm:pb-0 bg-[#1E292C]"
        aria-label="Before and After Comparison"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Before & After
          </h2>
          <p className="text-center mb-10">
            Move the handles and see the transformation process through some of
            the stages of compositing process.
          </p>

          <MultiLayerImageSlider
            layers={[
              {
                id: "original",
                src: "/comparison/SAV_Plate_1034.webp",
                label: "Original Plate",
              },
              {
                src: "/comparison/SAV_BG_1034.webp",
                id: "intermediate",
                label: "Undistort/Keying",
              },
              {
                id: "final",
                src: "/comparison/SAV_Comp_1034.webp",
                label: "Final Comp",
              },
            ]}
            width="100%"
            className="mb-8"
          />
        </div>
      </section>

      {/* Projects Component */}
      {/* <Projects /> */}

      {/* Movie Swiper Gallery */}
      <MovieSwiper />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-8 sm:px-16 bg-[#1E292C]"
        aria-label="Contact Form"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-center mb-8">
            Have a project in mind? Let's talk about it!
          </p>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="access_key"
              value="8421c31c-8364-481b-b0e7-6f7c9f97ea45"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://magalicarrion.com/thank-you"
            />
            <input
              type="hidden"
              name="subject"
              value="New contact from website!"
            />
            <input
              type="hidden"
              name="from_name"
              value="Magali Carrion Website"
            />
            <input type="hidden" name="template" value="table" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 focus:ring-2 focus:ring-brand focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 focus:ring-2 focus:ring-brand focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 focus:ring-2 focus:ring-brand focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[var(--color-brand)] cursor-pointer text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1E292C] text-center" role="contentinfo">
        <div className="max-w-6xl mx-auto px-8">
          <p>
            <strong>© {new Date().getFullYear()} Magali Carrion. </strong>
            <br className="hidden md:block" />
            <span className="italic"> It's not magic, it's hard work.</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
