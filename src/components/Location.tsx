"use client";

import { motion } from "framer-motion";
import { MapPin, Compass, Navigation, Landmark } from "lucide-react";

export default function Location() {
  return (
    <section className="relative py-24 md:py-32 bg-[#0c0d12] overflow-hidden">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/4 right-[-10%] w-[350px] h-[350px] gold-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Address, Landmarks, directions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold-primary mb-3 font-semibold">
              OUR SANCTUARY
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif tracking-wide text-foreground mb-6 leading-tight">
              Where to <br />
              <span className="text-gold-gradient font-serif italic">Find Us</span>
            </h2>
            <div className="h-[1px] w-20 bg-gold-primary mb-8" />

            {/* Address detail */}
            <div className="flex gap-4 items-start mb-8 group">
              <div className="w-10 h-10 rounded-xl border border-gold-primary/20 bg-gold-primary/5 flex items-center justify-center flex-shrink-0 group-hover:border-gold-primary/50 group-hover:bg-gold-primary/10 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-gold-primary" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-secondary font-bold block mb-1">
                  Mailing Address
                </span>
                <p className="text-sm text-foreground/80 leading-relaxed font-sans">
                  742 Aurelia Boulevard, Golden Hills Plaza <br />
                  Manhattan, New York, NY 10021
                </p>
              </div>
            </div>

            {/* Landmarks detail */}
            <div className="flex gap-4 items-start mb-8 group">
              <div className="w-10 h-10 rounded-xl border border-gold-primary/20 bg-gold-primary/5 flex items-center justify-center flex-shrink-0 group-hover:border-gold-primary/50 group-hover:bg-gold-primary/10 transition-colors duration-300">
                <Landmark className="w-5 h-5 text-gold-primary" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-secondary font-bold block mb-1">
                  Nearby Landmarks
                </span>
                <ul className="text-xs text-foreground/60 space-y-1 font-sans">
                  <li>• Opposite the Royal Opera Plaza</li>
                  <li>• Adjacent to the Luxury Diamond District Retailers</li>
                  <li>• 3-minute stroll from Central Park South West Metro</li>
                </ul>
              </div>
            </div>

            {/* Directions button */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 group px-8 py-4 rounded-full border border-gold-primary/40 bg-black/40 backdrop-blur-sm font-semibold uppercase tracking-widest text-xs text-gold-bright hover:bg-gold-primary/10 hover:border-gold-primary transition-all duration-500 max-w-xs text-center"
            >
              <Navigation className="w-3.5 h-3.5 text-gold-primary group-hover:translate-x-1 transition-transform" />
              <span>Get Directions</span>
            </a>
          </motion.div>

          {/* Right Column: Custom luxury-styled dark map iframe wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden border border-gold-primary/20 shadow-2xl">
              {/* Premium filter applied directly to embed to make it elegant black/gold-mode */}
              <iframe
                title="Aurelia Restaurant Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.012345678901!2d-73.9789012345678!3d40.76543212345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fec1234567%3A0x123456789abcdef0!2sCentral%20Park%20South%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(1) invert(0.92) contrast(1.15) brightness(0.85)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Gold borders micro accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold-primary" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold-primary" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
