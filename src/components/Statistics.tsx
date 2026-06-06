"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

function Counter({ value, suffix, label, description }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 2; // total animation duration in seconds
      const totalSteps = 60;
      const stepTime = (duration * 1000) / totalSteps;
      const increment = Math.ceil(end / totalSteps);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-8 rounded-2xl glass-card relative overflow-hidden flex flex-col justify-center min-h-[200px]">
      {/* Decorative count-up background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold-primary/[0.01] to-transparent pointer-events-none" />

      {/* Numeric Value */}
      <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gold-gradient font-bold tracking-tight block mb-2">
        {count.toLocaleString()}{suffix}
      </span>

      {/* Metric Label */}
      <h3 className="font-serif text-md sm:text-lg tracking-wider text-foreground font-semibold mb-2">
        {label}
      </h3>

      {/* Muted description */}
      <p className="text-xs text-foreground/50 tracking-wide font-sans">
        {description}
      </p>
    </div>
  );
}

export default function Statistics() {
  const stats = [
    {
      value: 10000,
      suffix: "+",
      label: "Happy Customers",
      description: "Discerning guests served globally across our fine establishments."
    },
    {
      value: 500,
      suffix: "+",
      label: "Daily Orders",
      description: "Gourmet platters meticulously compiled by our service line."
    },
    {
      value: 50,
      suffix: "+",
      label: "Expert Chefs",
      description: "Acclaimed culinary creators trained under Michelin guidelines."
    },
    {
      value: 15,
      suffix: "+",
      label: "Years Experience",
      description: "A solid legacy of culinary pioneering and hospitality."
    }
  ];

  return (
    <section className="relative py-20 bg-[#0c0d12] overflow-hidden">
      {/* Decorative vertical lines in background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.01)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
