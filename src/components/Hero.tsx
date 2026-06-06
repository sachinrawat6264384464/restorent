"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image Parallax with dark luxurious overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed scale-110 opacity-60"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10" />

      {/* Floating Gold & Culinary Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {/* Floating Gold Leaf 1 */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-gold-primary to-transparent opacity-20 blur-sm"
        />

        {/* Floating Star Anise representation */}
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            rotate: [0, -35, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-[12%] w-12 h-12 rounded-full border border-gold-secondary/40 opacity-15 flex items-center justify-center"
        >
          <span className="text-gold-primary text-2xl font-serif">✻</span>
        </motion.div>

        {/* Floating Culinary Herb representation */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, -25, 0],
            rotate: [0, 60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-[20%] w-24 h-8 bg-gradient-to-r from-emerald-600/10 to-transparent blur-md opacity-25"
        />

        {/* Floating Gold Dusted particle */}
        <motion.div
          animate={{
            y: [0, -60, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 left-[20%] w-2 h-2 rounded-full bg-gold-bright opacity-30 shadow-[0_0_10px_#D4AF37]"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-30 text-center flex flex-col items-center">
        {/* Elite Subheading Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-primary/30 bg-gold-primary/5 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-primary animate-ping" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-secondary font-medium font-sans">
            MICHELIN RECOMMENDED EXPERIENCE
          </span>
        </motion.div>

        {/* Luxury Brand Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl font-serif tracking-[0.15em] text-foreground leading-tight"
        >
          AURELIA
        </motion.h1>

        {/* Dynamic Glowing Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "220px", opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-gold-primary to-transparent my-6"
        />

        {/* Elegant Restaurant Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-md sm:text-xl md:text-2xl font-serif italic text-gold-secondary tracking-wide max-w-2xl"
        >
          "Where Culinary Art Meets Eternal Passion."
        </motion.p>

        {/* Detailed introductory sentence */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xs sm:text-sm text-foreground/60 tracking-[0.08em] max-w-lg mt-4 mb-10 font-sans"
        >
          Step into a curated sanctuary of sensory refinement, delicate flavours, and gold-standard Michelin hospitality.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          {/* Primary gold table booking */}
          <button
            onClick={(e) => handleScrollTo(e, "#reservation")}
            className="w-56 sm:w-auto relative group overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-gold-primary via-gold-bright to-gold-primary text-black font-bold uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] cursor-pointer"
          >
            <span className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 transition-transform duration-1000 group-hover:translate-x-full" />
            Book A Table
          </button>

          {/* Secondary outlined menu button */}
          <button
            onClick={(e) => handleScrollTo(e, "#menu")}
            className="w-56 sm:w-auto flex items-center justify-center gap-2 group px-8 py-4 rounded-full border border-gold-primary/40 bg-black/40 backdrop-blur-sm font-semibold uppercase tracking-widest text-xs text-gold-bright hover:bg-gold-primary/10 hover:border-gold-primary transition-all duration-500 cursor-pointer"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.button
        onClick={(e) => handleScrollTo(e, "#about")}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-gold-secondary hover:text-gold-primary cursor-pointer transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
