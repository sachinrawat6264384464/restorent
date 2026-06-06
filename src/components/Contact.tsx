"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, MessageSquare, Camera, MessageCircle } from "lucide-react";

export default function Contact() {
  const openHours = [
    { days: "Monday - Thursday", hours: "5:00 PM - 11:00 PM" },
    { days: "Friday - Saturday", hours: "4:00 PM - Midnight" },
    { days: "Sunday Brunch", hours: "11:00 AM - 3:00 PM" },
    { days: "Sunday Dinner", hours: "5:00 PM - 10:00 PM" }
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/4 left-[-10%] w-[350px] h-[350px] gold-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-primary mb-3 block font-semibold">
            COMMUNICATION GATEWAYS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-wide text-foreground">
            Contact & Hours
          </h2>
          <div className="h-[1px] w-28 bg-gold-primary mx-auto my-6" />
        </div>

        {/* Contact Flexible Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Box 1: Operating Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl border border-gold-primary/20 bg-gold-primary/5 flex items-center justify-center mb-6">
                <Clock className="w-5 h-5 text-gold-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground font-semibold mb-6">
                Dining Hours
              </h3>
              
              <dl className="space-y-4 font-sans text-sm">
                {openHours.map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-gold-primary/5 pb-2">
                    <dt className="text-foreground/60">{item.days}</dt>
                    <dd className="text-gold-bright font-medium">{item.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
            
            <p className="text-[10px] text-foreground/45 mt-8 font-sans font-light leading-relaxed">
              * Note: The culinary kitchen takes final orders exactly 45 minutes prior to the general dining room closing schedule.
            </p>
          </motion.div>

          {/* Box 2: Direct Enquiries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl border border-gold-primary/20 bg-gold-primary/5 flex items-center justify-center mb-6">
                <MessageSquare className="w-5 h-5 text-gold-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground font-semibold mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-6 font-sans text-sm">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold-primary" />
                  <a href="tel:+1234567890" className="text-foreground/80 hover:text-gold-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-primary" />
                  <a href="mailto:concierge@aurelia.com" className="text-foreground/80 hover:text-gold-primary transition-colors">
                    concierge@aureliadining.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Concierge direct action */}
            <div className="mt-8">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 group py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white font-bold uppercase tracking-widest text-xs shadow-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Lounge</span>
              </a>
            </div>
          </motion.div>

          {/* Box 3: Social & Press relations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl border border-gold-primary/20 bg-gold-primary/5 flex items-center justify-center mb-6">
                <Camera className="w-5 h-5 text-gold-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground font-semibold mb-6">
                Social Chronicles
              </h3>
              
              <p className="text-sm text-foreground/60 leading-relaxed font-sans mb-6">
                Follow our culinary design captures, backstage kitchen chronicles, and special chef menu reveals on our active social media profiles.
              </p>

              {/* Social Link rows */}
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold-primary/20 hover:border-gold-primary/60 bg-gold-primary/5 hover:bg-gold-primary/10 flex items-center justify-center text-gold-secondary hover:text-gold-primary transition-all duration-300 cursor-pointer"
                  aria-label="Instagram Profile"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold-primary/20 hover:border-gold-primary/60 bg-gold-primary/5 hover:bg-gold-primary/10 flex items-center justify-center text-gold-secondary hover:text-gold-primary transition-all duration-300 cursor-pointer"
                  aria-label="Facebook Profile"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gold-primary/20 hover:border-gold-primary/60 bg-gold-primary/5 hover:bg-gold-primary/10 flex items-center justify-center text-gold-secondary hover:text-gold-primary transition-all duration-300 cursor-pointer"
                  aria-label="Twitter Profile"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl border border-gold-primary/10 bg-gold-primary/5">
              <span className="text-[9px] uppercase tracking-widest text-gold-secondary font-bold block mb-1">
                Press & Medias
              </span>
              <p className="text-[10px] text-foreground/50 leading-relaxed font-sans font-light">
                For interview scheduling or press packages, please coordinate with <a href="mailto:media@aurelia.com" className="text-gold-primary hover:text-gold-bright transition-colors font-medium">media@aureliadining.com</a>.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
