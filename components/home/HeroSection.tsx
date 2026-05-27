"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0F0F0F] via-[#1A1A1A] to-[#0F0F0F]">
      {/* Animated background glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ background: "#9EFF00" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse"
        style={{ background: "#00BFFF", animationDelay: "1s" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5 animate-pulse"
        style={{ background: "#9EFF00", animationDelay: "2s" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#9EFF00]/40 text-[#9EFF00] text-sm font-medium tracking-wider uppercase">
              Chennai&apos;s Trusted Tech Destination
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Premium Electrical &amp; Electronics{" "}
            <span className="text-[#9EFF00]">Appliances</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-gray-400 text-base sm:text-lg leading-relaxed"
          >
            Discover the finest collection of electrical and electronics products
            at AL HIKMATH ENTERPRISES PVT LTD — Chennai&apos;s trusted tech
            destination.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-black bg-[#9EFF00] hover:bg-[#9EFF00]/90 transition-colors duration-200 shadow-neon-green"
            >
              Shop Now
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold border border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF]/10 transition-colors duration-200"
            >
              Explore Products
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#9EFF00]" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
