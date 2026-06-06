"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "@/data/restaurantData";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  // Slider animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const activeReview = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[#0c0d12] overflow-hidden">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/4 left-[-15%] w-[450px] h-[450px] gold-glow opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-15%] w-[450px] h-[450px] gold-glow opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-primary mb-3 block font-semibold">
            TESTIMONIALS OF EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-wide text-foreground">
            What Food Critics Say
          </h2>
          <div className="h-[1px] w-28 bg-gold-primary mx-auto my-6" />
        </div>

        {/* Carousel Slider Frame */}
        <div className="relative glass-panel rounded-3xl p-8 md:p-16 min-h-[400px] flex flex-col justify-center shadow-2xl">
          
          {/* Decorative Giant Gold Quote Icon */}
          <div className="absolute top-8 left-8 text-gold-primary/10 select-none pointer-events-none">
            <Quote className="w-16 h-16 transform -scale-x-100" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center text-center"
            >
              {/* Star Rating Row */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-primary text-gold-primary" />
                ))}
              </div>

              {/* Review Quote Body */}
              <blockquote className="font-serif text-lg md:text-2xl text-foreground/90 leading-relaxed italic max-w-3xl mb-8">
                "{activeReview.review}"
              </blockquote>

              {/* Customer Avatar details */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-primary">
                  <img
                    src={activeReview.image}
                    alt={activeReview.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <cite className="not-italic font-serif text-lg text-gold-primary font-bold tracking-wider block">
                    {activeReview.name}
                  </cite>
                  <span className="text-xs uppercase tracking-widest text-foreground/50 font-sans block mt-1">
                    {activeReview.role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Slider Navigation Controls */}
          <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gold-primary/20 bg-black/60 backdrop-blur-sm flex items-center justify-center text-gold-secondary hover:text-gold-primary hover:border-gold-primary transition-all duration-300 pointer-events-auto cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gold-primary/20 bg-black/60 backdrop-blur-sm flex items-center justify-center text-gold-secondary hover:text-gold-primary hover:border-gold-primary transition-all duration-300 pointer-events-auto cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bullet Index Indicators */}
          <div className="flex justify-center gap-3 mt-10 md:mt-12 absolute bottom-6 left-1/2 -translate-x-1/2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? "w-8 bg-gradient-to-r from-gold-primary to-gold-bright"
                    : "bg-gold-primary/20 hover:bg-gold-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
