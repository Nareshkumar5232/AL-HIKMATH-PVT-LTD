"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 px-4 bg-[#0F0F0F]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl border border-[#9EFF00]/30 bg-gradient-to-r from-[#9EFF00]/20 via-[#00BFFF]/10 to-[#9EFF00]/20 p-10 sm:p-14 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Ready to Upgrade Your Electronics?
            </h2>
            <p className="text-gray-300 text-base max-w-lg">
              Shop from 500+ premium products at the best prices in Chennai.
            </p>
          </div>

          <Link
            href="/products"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-black bg-[#9EFF00] hover:bg-[#9EFF00]/90 transition-colors duration-200 shadow-neon-green"
          >
            Shop Now
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
