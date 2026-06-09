"use client";

import { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { useCategoryStore } from "@/store/categoryStore";
import { useProductsQuery } from "@/hooks/useProducts";
import {
  Monitor,
  Smartphone,
  Laptop,
  BatteryCharging,
  Headphones,
  Cpu,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  name: string;
  slug: string;
  icon: LucideIcon;
}

const fallbackCategories: Category[] = [
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
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const { data } = useProductsQuery({ limit: 1000 });
  const backendProducts = data?.products ?? [];

  const categories = useMemo(() => {
    if (backendProducts.length === 0) return fallbackCategories;

    const categoriesSet = new Set<string>();
    backendProducts.forEach((p) => {
      if (p.category) {
        categoriesSet.add(p.category);
      }
    });

    const iconMap: Record<string, LucideIcon> = {
      "electrical-appliances": Zap,
      "electronics": Monitor,
      "mobile-accessories": Smartphone,
      "computer-accessories": Laptop,
      "chargers": BatteryCharging,
      "earphones": Headphones,
      "smart-devices": Cpu,
    };

    return Array.from(categoriesSet).sort().map((slug) => {
      const icon = iconMap[slug] || Cpu;
      const fallbackCat = fallbackCategories.find((c) => c.slug === slug);
      const name = fallbackCat ? fallbackCat.name : slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { name, slug, icon };
    });
  }, [backendProducts]);

  const handleCategoryClick = (slug: string) => {
    setSelectedCategory(selectedCategory === slug ? null : slug);
    // Smooth scroll to Dynamic Products Section
    setTimeout(() => {
      const dynamicSection = document.getElementById("dynamic-products");
      if (dynamicSection) {
        dynamicSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-[#0F0F0F] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Shop by{" "}
            <span className="text-[#9EFF00] underline decoration-[#9EFF00]/40 underline-offset-4">
              Category
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
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
            const isActive = selectedCategory === cat.slug;
            return (
              <motion.div key={cat.slug} variants={cardVariants}>
                <button
                  onClick={() => handleCategoryClick(cat.slug)}
                  className={`glass-card flex flex-col items-center gap-4 p-6 text-center transition-all duration-300 group block w-full outline-none
                    ${
                      isActive
                        ? "shadow-neon-green border-[#9EFF00] bg-white/10"
                        : "neon-hover bg-white/5"
                    }
                  `}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300
                    ${isActive ? "bg-[#9EFF00]/30" : "bg-[#9EFF00]/10 group-hover:bg-[#9EFF00]/20"}
                  `}>
                    <Icon
                      className="w-7 h-7 text-[#9EFF00]"
                      aria-hidden="true"
                    />
                  </div>
                  <span className={`text-sm font-medium leading-snug transition-colors
                    ${isActive ? "text-[#9EFF00]" : "text-gray-900 dark:text-white"}
                  `}>
                    {cat.name}
                  </span>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
