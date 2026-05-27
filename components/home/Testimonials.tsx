"use client";

import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react";
import { mockTestimonials } from "@/data/testimonials";
import type { Testimonial } from "@/types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-[#9EFF00] fill-[#9EFF00]"
              : "text-gray-600 fill-gray-600"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="glass-card p-6 flex flex-col gap-4">
      {/* Avatar + name */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-[#9EFF00]/20 flex items-center justify-center flex-shrink-0">
          <span className="text-[#9EFF00] font-bold text-sm">
            {getInitials(testimonial.name)}
          </span>
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          <p className="text-gray-400 text-xs">{testimonial.role}</p>
        </div>
      </div>

      {/* Stars */}
      <StarRating rating={testimonial.rating} />

      {/* Content */}
      <p className="text-gray-300 text-sm leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </p>
    </div>
  );
}

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

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            What Our{" "}
            <span className="text-[#9EFF00] underline decoration-[#9EFF00]/40 underline-offset-4">
              Customers Say
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real reviews from real customers across Chennai.
          </p>
        </div>

        {/* Testimonial grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mockTestimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={cardVariants}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
