"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type InfoBlockProps = {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  buttons?: {
    text: string;
    href: string;
    isPrimary?: boolean;
    icon?: React.ReactNode;
    download?: boolean;
    target?: string;
    rel?: string;
  }[];
  socialLinks?: {
    type: "email" | "linkedin" | "github" | "imdb" | "pdf";
    href: string;
  }[];
  imageOnLeft?: boolean;
};

const InfoBlock = ({
  title,
  subtitle,
  paragraphs,
  imageSrc,
  imageAlt,
  buttons,
  socialLinks,
  imageOnLeft = true,
}: InfoBlockProps) => {
  return (
    <section
      id="about"
      className="py-20 px-8 sm:px-16 bg-white dark:bg-[#1E292C]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col ${
            imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
          } gap-12 items-center`}
        >
          {/* Image */}
          <motion.div
            className="md:w-1/2 relative aspect-square w-full max-w-md overflow-hidden rounded-lg"
            initial={{ opacity: 0, x: imageOnLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.parentElement!.style.backgroundColor = "#555";
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: imageOnLeft ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-1">{title}</h2>
            {subtitle && (
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {subtitle}
              </p>
            )}

            {/* Paragraphs */}
            <div className="space-y-4 mb-8">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Buttons */}
            {buttons && buttons.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-8">
                {buttons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.href}
                    download={button.download}
                    target={button.target}
                    rel={button.rel}
                    // className={`
                    //   rounded-full px-6 py-3 font-medium transition-colors flex items-center gap-2
                    //   ${
                    //     button.isPrimary
                    //       ? "bg-brand hover:bg-brand-dark text-white"
                    //       : "border border-brand text-white hover:bg-brand hover:text-gray-900"
                    //   }
                    // `}
                    className={` inline-flex  gap-2 text-nowrap rounded-full text-white  hover:scale-110 px-6 py-3 font-medium transition-colors ${
                      button.isPrimary
                        ? "bg-[#4fc9b7] hover:bg-brand-dark text-white"
                        : "border border-white text-white hover:bg-[#4fc9b7] hover:border-[#4fc9b7] "
                    }`}
                  >
                    {button.icon && button.icon}
                    {button.text}
                  </Link>
                ))}
              </div>
            )}

            {/* Social Links */}
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-gray-500 hover:text-brand transition-colors"
                    target={link.type !== "email" ? "_blank" : undefined}
                    rel={
                      link.type !== "email" ? "noopener noreferrer" : undefined
                    }
                  >
                    {link.type === "email" && (
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {link.type === "linkedin" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )}
                    {link.type === "github" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    )}

                    {link.type === "imdb" && (
                      <svg
                        fill="currentColor"
                        width="23px"
                        height="23px"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.078 12.786v0.005c-0.099-0.063-0.302-0.094-0.557-0.094v6.422c0.359 0 0.583-0.083 0.667-0.224 0.083-0.135 0.125-0.536 0.125-1.177v-3.823c0-0.438-0.005-0.719-0.042-0.839-0.031-0.13-0.089-0.219-0.188-0.271zM29.885 0h-27.724c-1.172 0.078-2.083 0.99-2.161 2.13v27.708c0.078 1.167 0.948 2.057 2.073 2.156 0.021 0.005 0.042 0.005 0.063 0.005h27.792c1.172-0.12 2.068-1.099 2.073-2.281v-27.438c0-1.188-0.927-2.188-2.115-2.281zM6.391 20.833h-2.542v-9.818h2.542zM15.109 20.833h-2.214v-6.63l-0.896 6.625h-1.583l-0.932-6.479-0.010 6.479h-2.219v-9.813h3.286c0.115 0.693 0.214 1.396 0.307 2.099l0.359 2.49 0.594-4.589h3.307zM21.745 17.927c0 0.87-0.057 1.458-0.141 1.76-0.078 0.292-0.224 0.531-0.432 0.693-0.198 0.172-0.453 0.292-0.76 0.354-0.297 0.057-0.76 0.099-1.359 0.099l-0.005-0.005h-3.073v-9.813h1.901c1.219 0 1.932 0.063 2.359 0.167 0.432 0.12 0.766 0.302 0.995 0.563 0.219 0.24 0.365 0.536 0.417 0.859 0.068 0.313 0.099 0.938 0.099 1.87zM28.339 18.557c0 0.599-0.063 1.021-0.12 1.323-0.083 0.297-0.26 0.536-0.542 0.755-0.302 0.224-0.641 0.323-1.042 0.323-0.292 0-0.667-0.083-0.906-0.182-0.25-0.125-0.474-0.318-0.688-0.573l-0.151 0.63h-2.292v-9.818l-0.026-0.005h2.401v3.198c0.198-0.234 0.422-0.411 0.677-0.531 0.266-0.109 0.625-0.172 0.922-0.172 0.302 0 0.599 0.047 0.88 0.156 0.229 0.094 0.427 0.245 0.583 0.438 0.12 0.167 0.198 0.359 0.24 0.563 0.036 0.182 0.057 0.573 0.057 1.156v2.74zM25.438 14.938c-0.156 0-0.255 0.057-0.297 0.161-0.042 0.109-0.078 0.385-0.078 0.833v2.594c0 0.432 0.036 0.714 0.078 0.833 0.052 0.115 0.172 0.182 0.302 0.177 0.156 0 0.359-0.063 0.401-0.188 0.036-0.13 0.057-0.427 0.057-0.896l0.042-0.005v-2.521c0-0.401-0.021-0.677-0.078-0.802-0.063-0.135-0.26-0.188-0.422-0.188z" />
                      </svg>
                    )}

                    {link.type === "pdf" && (
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
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
