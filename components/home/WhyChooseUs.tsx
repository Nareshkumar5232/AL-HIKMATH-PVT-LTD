"use client";

import { motion, type Variants } from "framer-motion";
import { Shield, Truck, Award, Headset } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "All products are genuine and quality-tested",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick delivery across Chennai and Tamil Nadu",
  },
  {
    icon: Award,
    title: "Genuine Products",
    description: "100% authentic products from authorized dealers",
  },
  {
    icon: Headset,
    title: "Expert Support",
    description: "24/7 customer support from our technical team",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Why Choose{" "}
            <span className="text-[#9EFF00] underline decoration-[#9EFF00]/40 underline-offset-4">
              Us
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We are committed to delivering the best experience for every
            customer.
          </p>
        </div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="glass-card p-6 flex flex-col items-center text-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#9EFF00]/10 flex items-center justify-center">
                  <Icon
                    className="w-7 h-7 text-[#9EFF00]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
