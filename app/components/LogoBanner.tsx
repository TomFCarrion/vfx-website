"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";

// Logo data structure
type Logo = {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
};

type LogoBannerProps = {
  title?: string;
  logos: Logo[];
  backgroundColor?: string;
  speed?: number; // in pixels per second
};

export default function LogoBanner({
  title = "Studios that trusted me",
  logos,
  backgroundColor = "bg-black",
  speed = 50,
}: LogoBannerProps) {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  // Calculate container and content width for animation
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      // Content width is double the logos because we duplicate them for seamless scrolling
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, [logos]);

  // Set up the animation
  useEffect(() => {
    if (containerWidth > 0 && contentWidth > 0) {
      // Duration is based on content width and desired speed
      const duration = contentWidth / speed;

      controls.start({
        x: -contentWidth,
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [controls, containerWidth, contentWidth, speed]);

  // Pause animation on hover
  useEffect(() => {
    if (isHovering) {
      controls.stop();
    } else {
      controls.start({
        x: -contentWidth,
        transition: {
          duration: contentWidth / speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [isHovering, controls, contentWidth, speed]);

  return (
    <section
      className={`py-16 px-8 ${backgroundColor} text-white overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            {title}
          </h2>
        )}

        <div
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div className="flex items-center" animate={controls}>
            {/* First set of logos */}
            <div className="flex gap-12 md:gap-24 items-center">
              {logos.map((logo) => (
                <Link
                  key={logo.id}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-12 md:h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="relative h-full w-32 md:w-40">
                    <Image
                      src={logo.imageUrl}
                      alt={logo.name}
                      fill
                      sizes="(max-width: 768px) 128px, 160px"
                      className="object-contain"
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* Duplicate logos for seamless scrolling */}
            <div className="flex gap-12 md:gap-24 items-center">
              {logos.map((logo) => (
                <Link
                  key={`dup-${logo.id}`}
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-12 md:h-16 relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="relative h-full w-32 md:w-40">
                    <Image
                      src={logo.imageUrl}
                      alt={logo.name}
                      fill
                      sizes="(max-width: 768px) 128px, 160px"
                      className="object-contain"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
