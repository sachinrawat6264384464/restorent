"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuData } from "@/data/restaurantData";
import { Star, Flame } from "lucide-react";

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Listen to custom cross-component Category clicks
  useEffect(() => {
    const handleSelectCategory = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setActiveCategory(customEvent.detail);
      }
    };
    window.addEventListener("select-category", handleSelectCategory);
    return () => window.removeEventListener("select-category", handleSelectCategory);
  }, []);

  const categories = [
    { id: "all", name: "All Signatures" },
    { id: "pizza", name: "Pizza" },
    { id: "burgers", name: "Burgers" },
    { id: "pasta", name: "Pasta" },
    { id: "indian", name: "Indian" },
    { id: "chinese", name: "Chinese" },
    { id: "desserts", name: "Desserts" },
    { id: "beverages", name: "Beverages" },
    { id: "seafood", name: "Seafood" }
  ];

  const filteredMenu = activeCategory === "all"
    ? menuData
    : menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-[#0c0d12]">
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-1/3 left-[-10%] w-[350px] h-[350px] gold-glow opacity-25 pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-10%] w-[350px] h-[350px] gold-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-primary mb-3 block font-semibold">
            THE CHRONICLES OF FLAVOR
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-wide text-foreground">
            Featured Gastronomy
          </h2>
          <div className="h-[1px] w-28 bg-gold-primary mx-auto my-6" />
          <p className="text-xs sm:text-sm text-foreground/50 tracking-[0.08em] uppercase">
            A precise alignment of temperature, plating design, and premium seasoning.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-16 max-w-5xl mx-auto">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 border cursor-pointer ${
                activeCategory === tab.id
                  ? "bg-gradient-to-r from-gold-primary to-gold-bright text-black border-gold-primary shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                  : "bg-[#121318] text-foreground/70 border-gold-primary/10 hover:text-gold-primary hover:border-gold-primary/40"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Menu Cards Display */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((dish) => (
              <motion.div
                layout
                key={dish.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group p-6 rounded-2xl glass-card flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Chef's Recommendation Gold Badge */}
                {dish.isChefRecommendation && (
                  <div className="absolute top-[-10px] right-[-10px] bg-gradient-to-r from-gold-primary to-gold-bright text-black text-[9px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.5)] z-20 flex items-center gap-1">
                    <Flame className="w-2.5 h-2.5 fill-black" />
                    <span>Chef Spec</span>
                  </div>
                )}

                {/* Left Side: Dish Image */}
                <div className="relative w-full md:w-36 h-36 rounded-xl overflow-hidden border border-gold-primary/15 flex-shrink-0">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Right Side: Details & High-End dotted connector */}
                <div className="flex-grow flex flex-col justify-between h-full min-h-[144px]">
                  <div>
                    {/* Header Row: Name, Dotted Leader, Price */}
                    <div className="flex items-end justify-between mb-2">
                      <h3 className="font-serif text-lg md:text-xl text-foreground font-semibold group-hover:text-gold-primary transition-colors duration-300">
                        {dish.name}
                      </h3>
                      <div className="hidden md:block menu-dots" />
                      <span className="font-serif text-lg text-gold-primary font-bold whitespace-nowrap pl-2">
                        ${dish.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Tags row */}
                    {dish.tags && dish.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {dish.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-gold-primary/10 border border-gold-primary/20 text-gold-bright"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs text-foreground/55 leading-relaxed font-sans font-light mb-4">
                      {dish.description}
                    </p>
                  </div>

                  {/* Rating Section */}
                  <div className="flex items-center gap-1.5 border-t border-gold-primary/10 pt-3">
                    <Star className="w-3.5 h-3.5 fill-gold-primary text-gold-primary" />
                    <span className="text-xs text-gold-secondary tracking-widest font-semibold">
                      {dish.rating.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-foreground/30 font-sans tracking-wide">
                      / 5.0 Michelin Grade
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
