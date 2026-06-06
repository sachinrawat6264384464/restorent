"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "@/data/restaurantData";
import { Search } from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'interior' | 'food' | 'chefs'>('all');

  const tabs = [
    { id: 'all', name: 'All Gallery' },
    { id: 'interior', name: 'The Interior' },
    { id: 'food', name: 'Signature Dishes' },
    { id: 'chefs', name: 'Our Chefs' }
  ];

  const filteredImages = filter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === filter);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] gold-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-primary mb-3 block font-semibold">
            VISUAL INDULGENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-wide text-foreground">
            Our Luxury Atmosphere
          </h2>
          <div className="h-[1px] w-28 bg-gold-primary mx-auto my-6" />
          <p className="text-xs sm:text-sm text-foreground/50 tracking-[0.08em] uppercase">
            A photogenic panorama of world-class plating, pristine kitchen artistry, and dark gold layouts.
          </p>
        </div>

        {/* Gallery Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 border cursor-pointer ${
                filter === tab.id
                  ? "bg-gradient-to-r from-gold-primary to-gold-bright text-black border-gold-primary shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                  : "bg-[#121318] text-foreground/70 border-gold-primary/10 hover:text-gold-primary hover:border-gold-primary/40"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Masonry Image Gallery Grid */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid relative overflow-hidden rounded-3xl border border-gold-primary/10 shadow-lg group cursor-pointer"
              >
                {/* Image Element with scale zoom effect */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlaid sliding title details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold-primary font-bold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-foreground font-semibold">
                      {item.title}
                    </h3>
                    
                    {/* Tiny Zoom Icon badge */}
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-foreground/60">
                      <Search className="w-3.5 h-3.5 text-gold-primary" />
                      <span className="font-sans font-light">View High Resolution</span>
                    </div>
                  </div>
                </div>

                {/* Fine gold border frame overlay inside */}
                <div className="absolute inset-4 border border-gold-primary/0 group-hover:border-gold-primary/20 transition-all duration-500 rounded-2xl pointer-events-none z-20" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
