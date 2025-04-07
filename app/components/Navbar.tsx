"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 50px
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll immediately to check initial scroll position
    handleScroll();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed w-full z-2000 py-4 px-8 sm:px-16 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--color-brand)] backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-bold text-xl text-white">MC</span>
        <div className="hidden sm:flex gap-8">
          <a
            href="#reel"
            className="text-white hover:text-brand transition-colors"
          >
            Reel
          </a>
          <a
            href="#about"
            className="text-white hover:text-brand transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white hover:text-brand transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-brand transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
