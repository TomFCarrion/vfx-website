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
      className="py-20 px-8 sm:px-16 bg-white dark:bg-gray-900"
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
                    className={`
                      rounded-full px-6 py-3 font-medium transition-colors flex items-center gap-2
                      ${
                        button.isPrimary
                          ? "bg-brand hover:bg-brand-dark text-white"
                          : "border border-brand text-white hover:bg-brand hover:text-gray-900"
                      }
                    `}
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
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.646 10.237c-.057-.032-.16-.048-.313-.048v3.542c.201 0 .324-.041.371-.122s.07-.301.07-.66v-2.092c0-.244-.008-.4-.023-.469a.223.223 0 0 0-.105-.151zm3.499 1.182c-.082 0-.137.031-.162.091-.025.061-.037.214-.037.46v1.426c0 .237.014.389.041.456.029.066.086.1.168.1.086 0 .199-.035.225-.103.027-.069.039-.234.039-.495V11.97c0-.228-.014-.377-.043-.447-.032-.069-.147-.104-.231-.104z" />
                        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM6.631 14.663H5.229V9.266h1.402v5.397zm4.822 0H10.23l-.006-3.643-.49 3.643h-.875L8.342 11.1l-.004 3.563H7.111V9.266H8.93c.051.327.107.71.166 1.15l.201 1.371.324-2.521h1.832v5.397zm3.664-1.601c0 .484-.027.808-.072.97a.728.728 0 0 1-.238.383.996.996 0 0 1-.422.193c-.166.037-.418.055-.754.055h-1.699V9.266h1.047c.678 0 1.07.031 1.309.093.24.062.422.164.545.306.125.142.203.3.234.475.031.174.051.516.051 1.026v1.896zm3.654.362c0 .324-.023.565-.066.723a.757.757 0 0 1-.309.413.947.947 0 0 1-.572.174c-.158 0-.365-.035-.502-.104a1.144 1.144 0 0 1-.377-.312l-.088.344h-1.262V9.266h1.35v1.755a1.09 1.09 0 0 1 .375-.289c.137-.064.344-.096.504-.096.186 0 .348.029.484.087a.716.716 0 0 1 .44.549c.016.1.023.313.023.638v1.514z" />
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
