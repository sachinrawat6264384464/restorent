"use client";

import { motion } from "framer-motion";
import { whyChooseUsData } from "@/data/restaurantData";
import { Leaf, Award, Zap, ShieldCheck, Heart, Sparkles } from "lucide-react";

const iconsMap: { [key: string]: any } = {
  "w1": Leaf,
  "w2": Award,
  "w3": Zap,
  "w4": ShieldCheck,
  "w5": Sparkles,
  "w6": Heart
};

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] gold-glow opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] gold-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-primary mb-3 block font-semibold">
            THE AURELIA STANDARD
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-wide text-foreground">
            Why Culinary Seekers Choose Us
          </h2>
          <div className="h-[1px] w-28 bg-gold-primary mx-auto my-6" />
          <p className="text-xs sm:text-sm text-foreground/50 tracking-[0.08em] uppercase">
            We preserve strict gold benchmarks at every junction of culinary production.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, index) => {
            const Icon = iconsMap[item.id] || Leaf;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-8 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Custom glowing background ring that appears on card hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/0 via-gold-primary/[0.03] to-gold-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />

                <div className="relative z-10">
                  {/* Luxury Icon container */}
                  <div className="w-12 h-12 rounded-xl border border-gold-primary/20 bg-gold-primary/5 flex items-center justify-center mb-6 group-hover:border-gold-primary/60 group-hover:bg-gold-primary/10 transition-all duration-500">
                    <Icon className="w-5 h-5 text-gold-primary group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-3 group-hover:text-gold-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/60 leading-relaxed font-sans font-light">
                    {item.description}
                  </p>
                </div>

                {/* Aesthetic bottom border glow strip */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent group-hover:w-[60%] transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
