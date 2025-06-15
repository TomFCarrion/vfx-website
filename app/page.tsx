import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import InfoBlock from "./components/InfoBlock";
import LogoBanner from "./components/LogoBanner";
import Navbar from "./components/Navbar";
import MultiLayerImageSlider from "./components/MultiLayerImageSlider";
import MovieSwiper from "./components/MovieSwiper";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1E292C] text-gray-900 dark:text-gray-100 font-[family-name:var(--font-geist-sans)]">
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
          "Hi! I'm Magali Carrion, a 35 years old VFX compositor from Argentina. Over the past years I've working on different live action productions and willing to find the next challenge.",
          "I enjoy doing invisible effects and would love to keep learning about compositing. I also love teaching and tutor future compositors everytime I can.",
          "Away from the pc I like photography, cooking, reading, football and cats (specially mine two!).",
          "And of course, I can't even think without coffee first.",
        ]}
        imageOnLeft={true}
        buttons={[
          {
            text: "Download CV",
            href: "/cv.pdf",
            download: true,
          },
        ]}
        socialLinks={[
          {
            type: "linkedin",
            href: "https://www.linkedin.com/in/magalicarrion/",
          },
          {
            type: "imdb",
            href: "https://www.imdb.com/name/nm10901434/",
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
        ]}
      />

      {/* Before & After Section */}
      <section
        id="before-after"
        className="py-20 px-8 sm:pt-16 sm:pb-0 bg-[#1E292C]"
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
                id: "intermediate",
                src: "/comparison/SAV_Comp_1034.webp",
                label: "Undistort/Keying",
              },
              {
                id: "final",
                src: "/comparison/SAV_BG_1034.webp",
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
        className="py-20 px-8 sm:px-16 bg-white dark:bg-[#1E292C]"
        aria-label="Contact Form"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-center mb-8">
            Have a project in mind? Let's talk about it!
          </p>

          <form
            action="https://formsubmit.co/magalicarrion@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input
              type="hidden"
              name="_next"
              value="https://magalicarrion.com/thank-you"
            />
            <input
              type="hidden"
              name="_subject"
              value="New contact from website!"
            />
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand focus:border-transparent"
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
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand focus:border-transparent"
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
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--color-brand)] text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 bg-gray-100 dark:bg-[#1E292C] text-center"
        role="contentinfo"
      >
        <div className="max-w-6xl mx-auto px-8">
          <p>
            <strong>© {new Date().getFullYear()} Magali Carrion. </strong>
            <span className="italic"> It's not magic, it's hard work.</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
