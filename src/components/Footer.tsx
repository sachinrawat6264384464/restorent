"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please input an email.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please input a valid email.");
      return;
    }
    
    setError("");
    setSuccess(true);
    setEmail("");
  };

  return (
    <footer className="relative bg-[#050505] border-t border-gold-primary/10 pt-20 pb-8 overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute bottom-0 left-[20%] w-[350px] h-[350px] gold-glow opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Restaurant branding */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center gap-2 group self-start">
              <span className="w-9 h-9 border border-gold-primary rounded-full flex items-center justify-center text-gold-primary font-serif font-bold text-lg group-hover:bg-gold-primary group-hover:text-black transition-all duration-500">
                A
              </span>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.2em] text-lg font-semibold text-gold-primary">
                  AURELIA
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-gold-secondary">
                  Haute Gastronomie
                </span>
              </div>
            </a>
            
            <p className="text-xs text-foreground/50 leading-relaxed font-sans max-w-sm">
              We invite culinary connoisseurs to step inside a sanctuary of pure visual and sensory refinement. Indulge in delicate flavors crafted to represent absolute gourmet perfection.
            </p>

            {/* Social rows */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                className="text-gold-secondary hover:text-gold-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                className="text-gold-secondary hover:text-gold-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                className="text-gold-secondary hover:text-gold-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="font-serif text-sm text-gold-secondary uppercase tracking-[0.2em] font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-sans text-xs tracking-wider text-foreground/60">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="hover:text-gold-primary transition-colors">
                  Home Page
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-gold-primary transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-gold-primary transition-colors">
                  Services List
                </a>
              </li>
              <li>
                <a href="#menu" onClick={(e) => handleLinkClick(e, "#menu")} className="hover:text-gold-primary transition-colors">
                  Signature Menu
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, "#gallery")} className="hover:text-gold-primary transition-colors">
                  Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services directory */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="font-serif text-sm text-gold-secondary uppercase tracking-[0.2em] font-semibold">
              Our Services
            </h4>
            <ul className="space-y-2.5 font-sans text-xs tracking-wider text-foreground/60">
              <li>Fine Dining Chambers</li>
              <li>Signature Family Platters</li>
              <li>Concierge Home Delivery</li>
              <li>Exclusive Wedding Catering</li>
              <li>Private VIP Event Booking</li>
            </ul>
          </div>

          {/* Column 4: Newsletter box */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="font-serif text-sm text-gold-secondary uppercase tracking-[0.2em] font-semibold">
              Newsletter
            </h4>
            <p className="text-xs text-foreground/50 leading-relaxed font-sans">
              Subscribe to receive private chef recipes, priority table access, and seasonal menu gala invites.
            </p>

            {/* Subscriptions Form */}
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                disabled={success}
                className="w-full bg-[#0c0d12] text-xs text-foreground placeholder-foreground/35 border border-gold-primary/10 focus:border-gold-primary rounded-full pl-4 pr-12 py-3 focus:outline-none transition-all duration-300 font-sans"
              />
              <button
                type="submit"
                disabled={success}
                className="absolute right-1 top-1 w-9 h-9 rounded-full bg-gradient-to-r from-gold-primary to-gold-bright flex items-center justify-center text-black hover:scale-105 transition-transform cursor-pointer"
                aria-label="Subscribe"
              >
                {success ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </form>

            <AnimatePresence>
              {error && (
                <motion.span
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[10px] text-red-400 mt-1 font-sans"
                >
                  {error}
                </motion.span>
              )}

              {success && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[10px] text-emerald-400 mt-1 font-sans block"
                >
                  Successfully subscribed to VIP list!
                </motion.span>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Bottom row: copyright */}
        <div className="border-t border-gold-primary/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-foreground/45 tracking-wide">
          <p>© {new Date().getFullYear()} Aurelia Culinary Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-gold-primary transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gold-primary transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
