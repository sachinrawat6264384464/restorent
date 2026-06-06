"use client";

import { motion } from "framer-motion";
import { categoriesData } from "@/data/restaurantData";

export default function Categories() {
  const handleScrollToMenu = (e: React.MouseEvent<HTMLButtonElement>, categoryId: string) => {
    e.preventDefault();
    const element = document.querySelector("#menu");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Dispatch a custom event to change the active tab category if the menu is listening
      const event = new CustomEvent("select-category", { detail: categoryId });
      window.dispatchEvent(event);
    }
  };

  return (
    <section className="relative py-20 bg-[#050505] overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute right-[-10%] top-[10%] w-[350px] h-[350px] gold-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-primary mb-3 block font-semibold">
            CULINARY DIVISIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-wide text-foreground">
            Popular Food Categories
          </h2>
          <div className="h-[1px] w-20 bg-gold-primary mx-auto my-4" />
        </div>

        {/* Categories Carousel / Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categoriesData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group"
            >
              <button
                onClick={(e) => handleScrollToMenu(e, category.id)}
                className="w-full flex flex-col items-center bg-gradient-to-b from-[#121318] to-[#0a0a0d] p-6 rounded-3xl border border-gold-primary/5 hover:border-gold-primary/30 shadow-lg transition-all duration-500 hover:-translate-y-2 cursor-pointer block"
              >
                {/* Rounded Luxury Border Image Frame */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-gold-primary/10 group-hover:border-gold-primary p-1.5 transition-colors duration-500 mb-4 flex-shrink-0">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-115"
                    />
                  </div>
                </div>

                {/* Category Title */}
                <span className="font-serif text-sm tracking-[0.1em] text-foreground/80 group-hover:text-gold-primary font-medium transition-colors duration-300">
                  {category.name}
                </span>

                {/* Micro Action Button text */}
                <span className="text-[10px] uppercase tracking-widest text-gold-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2 font-sans">
                  View Offerings
                </span>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
