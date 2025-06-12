import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import InfoBlock from "./components/InfoBlock";
import LogoBanner from "./components/LogoBanner";
import Navbar from "./components/Navbar";
import MultiLayerImageSlider from "./components/MultiLayerImageSlider";
import MovieSwiper from "./components/MovieSwiper";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#1E292C] text-gray-900 dark:text-gray-100 font-[family-name:var(--font-geist-sans)]">
      <header>
        <Navbar />
      </header>

      {/* Hero Section Component */}
      <Hero />

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
        buttons={[
          {
            text: "PDF RESUME",
            href: "/files/Magali Carrion - Resume.pdf",
            isPrimary: true,
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            ),
            target: "_blank",
            rel: "noopener noreferrer",
          },
          {
            text: "Get in touch",
            href: "#contact",
            isPrimary: false,
          },
        ]}
        socialLinks={[
          { type: "linkedin", href: "https://linkedin.com/in/magalicarrion" },
          {
            type: "imdb",
            href: "https://www.imdb.com/es/name/nm12651220/?ref_=nv_sr_srsg_0_tt_0_nm_4_in_0_q_magali%2520carrion",
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

      {/* Image Comparison Showcase */}
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
        className="py-20 pt-16 pb-0"
        aria-label="Contact Form"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="bg-[#1E292C] p-8 rounded-lg">
            <p className="text-center mb-8">
              I'm currently available for freelance work or full-time positions.
              If you have a project that needs some creative touch, or if you're
              looking to hire, feel free to reach out!
            </p>

            <form
              action="https://formsubmit.co/maga.oth@gmail.com"
              method="POST"
              className="space-y-6"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    aria-required="true"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  aria-required="true"
                ></textarea>
              </div>

              {/* Hidden fields for FormSubmit configuration */}
              <input
                type="hidden"
                name="_subject"
                value="New portfolio contact message!"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://yourwebsite.com/thank-you"
              />

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex gap-2 text-nowrap rounded-full text-white hover:scale-110 px-6 py-3 font-medium transition-colors"
                  style={{ backgroundColor: "var(--color-brand)" }}
                  aria-label="Send message"
                >
                  Send Message
                </button>
              </div>
            </form>

            <div
              className="mt-8 flex justify-center gap-6"
              aria-label="Social links"
            >
              <a
                href="https://linkedin.com/in/magalicarrion"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://www.imdb.com/es/name/nm12651220/?ref_=nv_sr_srsg_0_tt_0_nm_4_in_0_q_magali%2520carrion"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IMDb Profile"
              >
                <svg
                  fill="currentColor"
                  width="23px"
                  height="23px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M19.078 12.786v0.005c-0.099-0.063-0.302-0.094-0.557-0.094v6.422c0.359 0 0.583-0.083 0.667-0.224 0.083-0.135 0.125-0.536 0.125-1.177v-3.823c0-0.438-0.005-0.719-0.042-0.839-0.031-0.13-0.089-0.219-0.188-0.271zM29.885 0h-27.724c-1.172 0.078-2.083 0.99-2.161 2.13v27.708c0.078 1.167 0.948 2.057 2.073 2.156 0.021 0.005 0.042 0.005 0.063 0.005h27.792c1.172-0.12 2.068-1.099 2.073-2.281v-27.438c0-1.188-0.927-2.188-2.115-2.281zM6.391 20.833h-2.542v-9.818h2.542zM15.109 20.833h-2.214v-6.63l-0.896 6.625h-1.583l-0.932-6.479-0.010 6.479h-2.219v-9.813h3.286c0.115 0.693 0.214 1.396 0.307 2.099l0.359 2.49 0.594-4.589h3.307zM21.745 17.927c0 0.87-0.057 1.458-0.141 1.76-0.078 0.292-0.224 0.531-0.432 0.693-0.198 0.172-0.453 0.292-0.76 0.354-0.297 0.057-0.76 0.099-1.359 0.099l-0.005-0.005h-3.073v-9.813h1.901c1.219 0 1.932 0.063 2.359 0.167 0.432 0.12 0.766 0.302 0.995 0.563 0.219 0.24 0.365 0.536 0.417 0.859 0.068 0.313 0.099 0.938 0.099 1.87zM28.339 18.557c0 0.599-0.063 1.021-0.12 1.323-0.083 0.297-0.26 0.536-0.542 0.755-0.302 0.224-0.641 0.323-1.042 0.323-0.292 0-0.667-0.083-0.906-0.182-0.25-0.125-0.474-0.318-0.688-0.573l-0.151 0.63h-2.292v-9.818l-0.026-0.005h2.401v3.198c0.198-0.234 0.422-0.411 0.677-0.531 0.266-0.109 0.625-0.172 0.922-0.172 0.302 0 0.599 0.047 0.88 0.156 0.229 0.094 0.427 0.245 0.583 0.438 0.12 0.167 0.198 0.359 0.24 0.563 0.036 0.182 0.057 0.573 0.057 1.156v2.74zM25.438 14.938c-0.156 0-0.255 0.057-0.297 0.161-0.042 0.109-0.078 0.385-0.078 0.833v2.594c0 0.432 0.036 0.714 0.078 0.833 0.052 0.115 0.172 0.182 0.302 0.177 0.156 0 0.359-0.063 0.401-0.188 0.036-0.13 0.057-0.427 0.057-0.896l0.042-0.005v-2.521c0-0.401-0.021-0.677-0.078-0.802-0.063-0.135-0.26-0.188-0.422-0.188z" />
                </svg>
              </a>
            </div>
          </div>
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
