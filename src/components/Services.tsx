"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/data/restaurantData";
import { UtensilsCrossed, Users, ShoppingBag, Award, CalendarCheck, Crown, Truck } from "lucide-react";

const iconsMap: { [key: string]: any } = {
  "fine-dining": UtensilsCrossed,
  "family-dining": Users,
  "online-ordering": ShoppingBag,
  "catering-services": Award,
  "event-booking": CalendarCheck,
  "private-dining": Crown,
  "home-delivery": Truck
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0c0d12]">
      {/* Decorative lines in background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-primary mb-3 block font-semibold">
            BEYOND GASTRONOMY
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-wide text-foreground">
            Our Elite Services
          </h2>
          <div className="h-[1px] w-28 bg-gold-primary mx-auto my-6" />
          <p className="text-xs sm:text-sm text-foreground/50 tracking-[0.08em] uppercase">
            We provide absolute aesthetic care and premium execution across all dining experiences.
          </p>
        </div>

        {/* Services Flexible Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconsMap[service.id] || UtensilsCrossed;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card rounded-2xl p-8 relative overflow-hidden group flex flex-col justify-between min-h-[300px] ${
                  index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Background image preview with ultra high black overlay, fades slightly on hover */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100 group-hover:scale-110 opacity-5 group-hover:opacity-10 z-0"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                
                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Luxury Icon Frame */}
                  <div className="w-14 h-14 rounded-xl border border-gold-primary/20 bg-gold-primary/5 flex items-center justify-center mb-6 group-hover:border-gold-primary/50 group-hover:bg-gold-primary/10 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-gold-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl text-foreground font-semibold mb-3 group-hover:text-gold-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/60 leading-relaxed font-sans font-light">
                    {service.description}
                  </p>
                </div>

                {/* Subtle Gold Corner Accent */}
                <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
                  <div className="absolute bottom-[-10px] right-[-10px] w-12 h-12 border-t border-l border-gold-primary/30 rotate-45 transform translate-x-2 translate-y-2 group-hover:border-gold-primary/80 transition-colors duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
