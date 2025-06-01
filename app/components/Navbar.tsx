"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-2000 py-4 px-8 sm:px-16 transition-colors duration-300 ${
          scrolled
            ? "bg-[var(--color-brand)] backdrop-blur-sm md:shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#reel">
            <span className="font-bold text-xl text-white">MC</span>
          </a>

          {/* Desktop Navigation */}
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

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="sm:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-1000 transform transition-transform duration-300 sm:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-[var(--color-brand)] backdrop-blur-sm w-full h-full pt-20 px-8">
          <div className="flex flex-col space-y-8">
            <a
              href="#reel"
              onClick={closeMobileMenu}
              className="text-white text-2xl font-medium hover:text-brand transition-colors"
            >
              Reel
            </a>
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="text-white text-2xl font-medium hover:text-brand transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={closeMobileMenu}
              className="text-white text-2xl font-medium hover:text-brand transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="text-white text-2xl font-medium hover:text-brand transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
