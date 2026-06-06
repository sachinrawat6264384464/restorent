"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#050505]/80 backdrop-blur-lg border-b border-gold-primary/10 shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand Emblem */}
          <a href="#home" onClick={(e) => handleLinkClick(e, "#home")} className="flex items-center gap-2 group">
            <span className="w-9 h-9 border border-gold-primary rounded-full flex items-center justify-center text-gold-primary font-serif font-bold text-lg group-hover:bg-gold-primary group-hover:text-black transition-all duration-500">
              A
            </span>
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.2em] text-lg font-semibold text-gold-primary group-hover:text-gold-bright transition-all duration-500">
                AURELIA
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-gold-secondary">
                Haute Gastronomie
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-foreground/80 hover:text-gold-primary transition-colors duration-300 relative py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-gold-primary to-transparent transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-secondary hover:text-gold-primary transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-gold-primary animate-pulse" />
              <span>+1 (234) 567-890</span>
            </a>
            <a
              href="#reservation"
              onClick={(e) => handleLinkClick(e, "#reservation")}
              className="relative overflow-hidden group px-6 py-2.5 rounded-full border border-gold-primary text-xs uppercase tracking-widest font-semibold text-gold-bright transition-all duration-500 hover:text-black"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-primary to-gold-bright transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                Book Table
              </span>
            </a>
          </div>

          {/* Mobile Hamburguer Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gold-primary hover:text-gold-bright transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md lg:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-lg uppercase tracking-[0.3em] font-serif text-foreground/90 hover:text-gold-primary block py-2 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.4 }}
                className="mt-8 flex flex-col gap-6 items-center"
              >
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-sm uppercase tracking-widest text-gold-secondary"
                >
                  <Phone className="w-4 h-4 text-gold-primary" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a
                  href="#reservation"
                  onClick={(e) => handleLinkClick(e, "#reservation")}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-gold-primary to-gold-bright text-black text-xs uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                >
                  Book A Table
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
