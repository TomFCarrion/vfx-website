"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, animate } from "framer-motion";

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
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const x = useMotionValue(0);
  const animationRef = useRef<any>(null);

  // Calculate container and content width for animation
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      // Content width is double the logos because we duplicate them for seamless scrolling
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, [logos]);

  // Start infinite animation
  const startInfiniteAnimation = (fromPosition = 0) => {
    if (contentWidth > 0) {
      const remainingDistance = contentWidth + fromPosition;
      const duration = remainingDistance / speed;

      animationRef.current = animate(x, -contentWidth, {
        duration,
        ease: "linear",
        onComplete: () => {
          // Reset to start and loop
          x.set(0);
          if (!isHovering) {
            startInfiniteAnimation(0);
          }
        },
      });
    }
  };

  // Set up the animation when dimensions are ready
  useEffect(() => {
    if (containerWidth > 0 && contentWidth > 0 && !isHovering) {
      x.set(0);
      startInfiniteAnimation(0);
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [containerWidth, contentWidth, speed]);

  // Handle hover pause/resume
  useEffect(() => {
    if (isHovering) {
      // Pause animation
      if (animationRef.current) {
        animationRef.current.stop();
      }
    } else if (containerWidth > 0 && contentWidth > 0) {
      // Resume animation from current position
      const currentPos = x.get();
      startInfiniteAnimation(currentPos);
    }
  }, [isHovering, containerWidth, contentWidth, speed]);

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
          <motion.div className="flex items-center" style={{ x }}>
            {/* First set of logos */}
            <div className="flex gap-12 md:gap-24 items-center px-12 md:px-12">
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
            <div className="flex gap-12 md:gap-24 items-center px-12 md:px-12">
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
