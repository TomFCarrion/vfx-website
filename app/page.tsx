import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import InfoBlock from "./components/InfoBlock";
import LogoBanner from "./components/LogoBanner";
import Navbar from "./components/Navbar";
import MultiLayerImageSlider from "./components/MultiLayerImageSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section Component */}
      <Hero />

      {/* About Section */}
      <InfoBlock
        title="About me."
        subtitle="(she/her)"
        imageSrc="/images/maga.avif"
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
        ]}
        socialLinks={[
          { type: "email", href: "mailto:your.email@example.com" },
          { type: "linkedin", href: "https://linkedin.com/in/yourprofile" },
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
            link: "https://lasociedadpost.com",
          },
        ]}
      />

      {/* Image Comparison Showcase */}
      <section
        id="before-after"
        className="py-20 px-8 sm:px-16 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Before & After
          </h2>
          <p className="text-center mb-10">
            See the transformation process through different stages of
            composition work.
          </p>

          <MultiLayerImageSlider
            layers={[
              {
                id: "original",
                src: "/comparison/original.png",
                label: "Original Plate",
              },
              {
                id: "intermediate",
                src: "/comparison/intermediate.png",
                label: "Cleanup & Color",
              },
              {
                id: "final",
                src: "/comparison/final.png",
                label: "Final Composite",
              },
            ]}
            height="500px"
            width="100%"
            className="mb-8"
          />

          <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-4">
            Drag the sliders or use the controls below to compare the different
            stages of the compositing process.
          </p>
        </div>
      </section>

      {/* Projects Component */}
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 sm:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <p className="text-center mb-8">
              I'm currently available for freelance work or full-time positions.
              If you have a project that needs some creative touch, or if you're
              looking to hire, feel free to reach out!
            </p>

            <form
              action="https://formsubmit.co/tomfcarrion@gmail.com"
              method="POST"
              className="space-y-6"
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
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>

            <div className="mt-8 flex justify-center gap-6">
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
              <a
                href="https://www.imdb.com/es/name/nm12651220/?ref_=nv_sr_srsg_0_tt_0_nm_4_in_0_q_magali%2520carrion"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.06.5-.165.062-.104.095-.405.095-.885v-2.866c0-.33-.004-.54-.033-.63-.022-.096-.067-.163-.142-.204z" />
                  <path d="M22.416 0H1.62C.742 0 .033.7.033 1.573v20.854C.033 23.3.742 24 1.62 24h20.796c.878 0 1.586-.7 1.586-1.573V1.573C24.002.7 23.294 0 22.416 0zm-8.505 13.365H9.896v-5.86h4.015v5.86zm-7.476-5.116c.033 0 .156 0 .33.004.16.004.244.018.304.058.062.04.118.1.162.19.045.087.075.214.075.384v3.132c0 .176-.045.296-.09.372-.06.075-.12.12-.196.15-.075.027-.197.05-.36.05h-.18v.775h3.465v-.775h-.42v-5.126h.42v-.79h-3.51v.79zm12.659 3.518c0 .58-.033.998-.1 1.238-.066.24-.164.418-.285.535-.12.115-.28.193-.48.23-.2.04-.485.06-.827.06h-.24v.775h3.558v-.775h-.24c-.34 0-.624-.02-.827-.06-.2-.037-.36-.115-.48-.23-.122-.117-.22-.295-.286-.535-.066-.24-.1-.658-.1-1.238v-1.99c0-.386.015-.658.046-.815.03-.157.08-.27.166-.34.084-.067.21-.12.376-.15.165-.033.494-.05.99-.05h.165v-.79h-3.374v.79h.165c.495 0 .822.017.99.05.164.03.292.083.376.15.084.07.135.183.166.34.03.157.046.43.046.814v1.99z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 dark:bg-gray-900 text-center">
        <div className="max-w-6xl mx-auto px-8">
          <p>
            © {new Date().getFullYear()} Magali Carrion. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
