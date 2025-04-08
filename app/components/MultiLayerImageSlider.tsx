"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./MultiLayerImageSlider.module.css";
import { motion } from "framer-motion";

interface ImageLayer {
  id: string;
  src: string;
  label?: string;
}

interface MultiLayerImageSliderProps {
  layers: ImageLayer[];
  height?: string;
  width?: string;
  className?: string;
}

const MultiLayerImageSlider: React.FC<MultiLayerImageSliderProps> = ({
  layers,
  height = "400px",
  width = "100%",
  className = "",
}) => {
  // Ensure we have at least 2 layers
  if (layers.length < 2) {
    console.error("MultiLayerImageSlider requires at least 2 layers");
    return null;
  }

  // Initialize slider positions with even distribution
  const [sliderPositions, setSliderPositions] = useState<number[]>(() => {
    if (layers.length <= 2) return [50];

    // Calculate evenly spaced positions
    return Array.from(
      { length: layers.length - 1 },
      (_, i) => (i + 1) * (100 / layers.length)
    );
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<number | null>(null);

  // Add state to track animation sequence
  const [animationSequence, setAnimationSequence] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Keep track of whether welcome animation has played
  const [hasPlayedWelcome, setHasPlayedWelcome] = useState(false);

  // Add a state to track if we're in manual drag mode
  const [isDraggingActive, setIsDraggingActive] = useState(false);

  // Ref for the intersection observer
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef<boolean>(false);

  // Add a constraint system to handle slider overlaps
  const handleSliderChange = (index: number, value: number) => {
    const newPositions = [...sliderPositions];
    const minDistance = 5; // Minimum distance between sliders in percentage
    const edgeBuffer = 2; // Buffer from the edges to ensure visibility

    // Apply the change to the current slider but keep it within edge buffer
    newPositions[index] = Math.max(
      edgeBuffer,
      Math.min(100 - edgeBuffer, value)
    );

    // Check if this slider is pushing left sliders
    if (index > 0) {
      // Push any sliders to the left that would be too close
      for (let i = index - 1; i >= 0; i--) {
        const minAllowedPosition = newPositions[i + 1] - minDistance;
        if (newPositions[i] > minAllowedPosition) {
          newPositions[i] = Math.max(edgeBuffer, minAllowedPosition);
        } else {
          // If this slider doesn't need to move, sliders further left don't either
          break;
        }
      }
    }

    // Check if this slider is pushing right sliders
    if (index < newPositions.length - 1) {
      // Push any sliders to the right that would be too close
      for (let i = index + 1; i < newPositions.length; i++) {
        const minAllowedPosition = newPositions[i - 1] + minDistance;
        if (newPositions[i] < minAllowedPosition) {
          newPositions[i] = Math.min(100 - edgeBuffer, minAllowedPosition);
        } else {
          // If this slider doesn't need to move, sliders further right don't either
          break;
        }
      }
    }

    setSliderPositions(newPositions);
  };

  // Handle mouse/touch events for dragging dividers
  const handleDividerMouseDown = (index: number) => {
    isDragging.current = index;
    // Prevent any text selection when starting to drag
    document.body.style.userSelect = "none";
    // Disable transitions during drag
    setIsDraggingActive(true);
  };

  // Update the handleMouseMove to handle touch events too
  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (isDragging.current === null || !containerRef.current) return;

    // Prevent text selection while dragging
    e.preventDefault();

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Get clientX from either mouse or touch event
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;

    const position = ((clientX - rect.left) / rect.width) * 100;

    // Constrain between 0 and 100
    const clampedPosition = Math.max(0, Math.min(100, position));

    handleSliderChange(isDragging.current, clampedPosition);
  };

  const handleMouseUp = () => {
    isDragging.current = null;
    document.body.style.userSelect = "";
    // Re-enable transitions after drag
    setIsDraggingActive(false);
  };

  // Add and remove event listeners
  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  // Replace the previous welcome animation effect with Intersection Observer
  useEffect(() => {
    // Skip if no sliders or already played welcome animation
    if (sliderPositions.length < 1 || hasPlayedWelcome) return;

    const startWelcomeAnimation = async () => {
      setIsAnimating(true);

      // Wait before starting animation
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Animate each slider in sequence
      for (let i = 0; i < sliderPositions.length; i++) {
        // Store original position to return to
        const originalPosition = sliderPositions[i];

        // Set this slider as actively animating
        setAnimationSequence([i]);

        // Move right (with transition)
        setSliderPositions((prev) => {
          const newPositions = [...prev];
          newPositions[i] = Math.min(90, originalPosition + 15);
          return newPositions;
        });
        // Wait for transition to complete
        await new Promise((resolve) => setTimeout(resolve, 400));

        // Move left (with transition)
        setSliderPositions((prev) => {
          const newPositions = [...prev];
          newPositions[i] = Math.max(10, originalPosition - 15);
          return newPositions;
        });
        await new Promise((resolve) => setTimeout(resolve, 400));

        // Return to original (with transition)
        setSliderPositions((prev) => {
          const newPositions = [...prev];
          newPositions[i] = originalPosition;
          return newPositions;
        });
        await new Promise((resolve) => setTimeout(resolve, 400));
      }

      setAnimationSequence([]);
      setIsAnimating(false);
      setHasPlayedWelcome(true);
    };

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        // If component is visible and animation hasn't played yet
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startWelcomeAnimation();

          // Optional: Disconnect observer once animation has played
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      },
      {
        // Options: trigger when at least 30% of the component is visible
        threshold: 0.3,
        // Add root margin to trigger slightly before the element is fully visible
        rootMargin: "0px 0px -10% 0px",
      }
    );

    // Start observing the container element
    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    // Clean up the observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sliderPositions, sliderPositions.length, hasPlayedWelcome]);

  return (
    <div className={styles.sliderWrapper}>
      <div
        className={`${styles.sliderContainer} ${className}`}
        style={{ height, width }}
        ref={containerRef}
        onMouseMove={handlePointerMove}
        onTouchMove={handlePointerMove}
        // Prevent the entire page from scrolling when dragging on mobile
        onTouchStart={() => {}}
      >
        {/* Render all layers */}
        <div className={styles.layersContainer}>
          {layers.map((layer, index) => {
            let clipPath = "";

            if (index === 0) {
              // First layer is fully visible
              clipPath = "none";
            } else if (index === layers.length - 1) {
              // Last layer is clipped from last slider to right edge
              clipPath = `polygon(${
                sliderPositions[index - 1]
              }% 0%, 100% 0%, 100% 100%, ${sliderPositions[index - 1]}% 100%)`;
            } else {
              // Middle layers are clipped between adjacent sliders
              clipPath = `polygon(${sliderPositions[index - 1]}% 0%, ${
                sliderPositions[index]
              }% 0%, ${sliderPositions[index]}% 100%, ${
                sliderPositions[index - 1]
              }% 100%)`;
            }

            return (
              <div
                key={layer.id}
                className={styles.layer}
                style={{
                  clipPath,
                  WebkitClipPath: clipPath,
                  // Disable transition during dragging
                  transition: isDraggingActive
                    ? "none"
                    : "clip-path 0.5s ease, -webkit-clip-path 0.5s ease",
                }}
              >
                <img
                  src={layer.src}
                  alt={layer.label || `Layer ${index + 1}`}
                  className={styles.layerImage}
                />
              </div>
            );
          })}

          {/* Updated Render dividers/handles logic */}
          {sliderPositions.map((position, index) => (
            <div
              key={`divider-${index}`}
              className={styles.divider}
              style={{
                left: `${position}%`,
                // Disable transition during dragging for immediate feedback
                transition: isDraggingActive ? "none" : "left 0.5s ease",
              }}
              onMouseDown={() => handleDividerMouseDown(index)}
              onTouchStart={() => handleDividerMouseDown(index)}
            >
              <motion.div
                className={styles.handle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={
                  animationSequence.includes(index)
                    ? {
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          "0 0 5px rgba(0,0,0,0.3)",
                          "0 0 8px rgba(0,0,0,0.5)",
                          "0 0 5px rgba(0,0,0,0.3)",
                        ],
                      }
                    : {}
                }
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
              />
            </div>
          ))}
        </div>

        {/* Layer labels */}
        <div className={styles.layerLabels}>
          {layers.map((layer, index) => (
            <div key={`label-${layer.id}`} className={styles.layerLabel}>
              {layer.label || `Layer ${index + 1}`}
            </div>
          ))}
        </div>
      </div>

      {/* Render sliders */}
      <div className={styles.slidersContainer}>
        {sliderPositions.map((position, index) => (
          <div key={`slider-${index}`} className={styles.sliderControl}>
            <label>
              {layers[index].label || `Layer ${index + 1}`} ↔{" "}
              {layers[index + 1].label || `Layer ${index + 2}`}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(e) =>
                handleSliderChange(index, Number(e.target.value))
              }
              className={styles.slider}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiLayerImageSlider;
