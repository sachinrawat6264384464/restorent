"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] gold-glow opacity-30 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] gold-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Story, Chef Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Fine Section Badge */}
            <span className="text-xs uppercase tracking-[0.3em] text-gold-primary mb-3 font-semibold">
              OUR HERITAGE & VISION
            </span>
            
            {/* Main Section Title */}
            <h2 className="text-3xl sm:text-5xl font-serif tracking-wide text-foreground mb-6 leading-tight">
              Crafting Culinary masterpieces <br />
              <span className="text-gold-gradient font-serif italic">Since 2011</span>
            </h2>

            <div className="h-[1px] w-20 bg-gold-primary mb-8" />

            {/* Restaurant Story Paragraphs */}
            <p className="text-sm md:text-base text-foreground/70 tracking-wide leading-relaxed mb-6 font-sans">
              Founded on the belief that dining is an artistic journey, **Aurelia** has redefined the landscape of high-end gastronomy. Every ingredient is treated with deep reverence, and every recipe is crafted to trigger emotion and evoke memories.
            </p>
            
            <p className="text-sm md:text-base text-foreground/70 tracking-wide leading-relaxed mb-8 font-sans">
              Under the visionary leadership of our acclaimed Culinary Director, we combine traditional French methods with innovative modern infusions. We invite you to experience a culinary theatre where gold-accented styling merges with absolute perfection.
            </p>

            {/* Chef Showcase Block */}
            <div className="p-6 rounded-2xl glass-panel relative overflow-hidden flex flex-col sm:flex-row gap-6 items-center">
              {/* Gold light sheen animation overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-primary/5 to-transparent -translate-x-full animate-shine" style={{ animationDuration: '6s' }} />

              {/* Chef Round Portrait */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gold-primary flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=200&auto=format&fit=crop"
                  alt="Chef Alexandre Dubois"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Chef Title and Signature stamp */}
              <div className="text-center sm:text-left flex-grow">
                <span className="text-xs uppercase tracking-widest text-gold-primary font-bold block mb-1">
                  Culinary Director
                </span>
                <h3 className="font-serif text-lg text-foreground font-semibold mb-1">
                  Alexandre Dubois
                </h3>
                <p className="text-xs text-foreground/50 tracking-wide font-sans">
                  "Food is the ultimate canvas of life. We do not just cook; we paint masterpieces with flavor."
                </p>
              </div>

              {/* Signature Graphic Mockup */}
              <div className="font-serif italic text-gold-secondary/45 text-2xl tracking-widest select-none select-none sm:border-l border-gold-primary/20 sm:pl-6 py-2">
                A. Dubois
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Overlapping Collage Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 relative h-[450px] sm:h-[600px] w-full"
          >
            {/* Primary Background Image: Restaurant Chandelier Hall */}
            <div className="absolute left-[5%] top-[10%] w-[65%] h-[65%] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-gold-primary/20 group">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=650&auto=format&fit=crop"
                alt="Chandelier dining hall"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Overlapping Top-Right Image: Chef Plating Dessert */}
            <div className="absolute right-[5%] top-[5%] w-[45%] h-[40%] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.9)] border border-gold-primary/20 group z-30">
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=450&auto=format&fit=crop"
                alt="Gourmet pastry preparation"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Overlapping Bottom-Right Image: Wagyu Plating Close-up */}
            <div className="absolute left-[35%] bottom-[5%] w-[60%] h-[45%] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.95)] border border-gold-primary/20 group z-20">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
                alt="Haute cuisine steak plating"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Micro Decorative details: Golden solid lines */}
            <div className="absolute top-[2%] left-[2%] w-10 h-10 border-t border-l border-gold-primary/50" />
            <div className="absolute bottom-[2%] right-[2%] w-10 h-10 border-b border-r border-gold-primary/50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
