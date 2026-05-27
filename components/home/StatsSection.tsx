"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

const stats: Stat[] = [
  { label: "Products", value: 500, suffix: "+" },
  { label: "Brands", value: 50, suffix: "+" },
  { label: "Happy Customers", value: 10000, suffix: "+" },
  { label: "Years of Experience", value: 10, suffix: "+" },
];

function AnimatedCounter({
  value,
  suffix,
  isActive,
}: {
  value: number;
  suffix: string;
  isActive: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const duration = 2000; // ms
    const steps = 60;
    const increment = value / steps;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isActive, value]);

  return (
    <span className="text-4xl sm:text-5xl font-bold text-[#9EFF00]">
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function StatsSection() {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section className="py-16 px-4 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card p-6 flex flex-col items-center text-center gap-2"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                isActive={isIntersecting}
              />
              <span className="text-white text-sm font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
