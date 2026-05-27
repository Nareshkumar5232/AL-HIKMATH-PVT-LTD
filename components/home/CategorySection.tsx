"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Zap,
  Monitor,
  Smartphone,
  Laptop,
  BatteryCharging,
  Headphones,
  Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  name: string;
  slug: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  { name: "Electrical Appliances", slug: "electrical-appliances", icon: Zap },
  { name: "Electronics", slug: "electronics", icon: Monitor },
  { name: "Mobile Accessories", slug: "mobile-accessories", icon: Smartphone },
  { name: "Computer Accessories", slug: "computer-accessories", icon: Laptop },
  { name: "Chargers", slug: "chargers", icon: BatteryCharging },
  { name: "Earphones", slug: "earphones", icon: Headphones },
  { name: "Smart Devices", slug: "smart-devices", icon: Cpu },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function CategorySection() {
  return (
    <section className="py-20 px-4 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Shop by{" "}
            <span className="text-[#9EFF00] underline decoration-[#9EFF00]/40 underline-offset-4">
              Category
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Browse our wide range of electrical and electronics products across
            all categories.
          </p>
        </div>

        {/* Category grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.slug} variants={cardVariants}>
                <Link
                  href={`/products?category=${cat.slug}`}
                  className="glass-card neon-hover flex flex-col items-center gap-4 p-6 text-center transition-all duration-300 group block"
                >
                  <div className="w-14 h-14 rounded-full bg-[#9EFF00]/10 flex items-center justify-center group-hover:bg-[#9EFF00]/20 transition-colors duration-300">
                    <Icon
                      className="w-7 h-7 text-[#9EFF00]"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-white text-sm font-medium leading-snug">
                    {cat.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
