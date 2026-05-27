"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { newsletterSchema, type NewsletterFormData } from "@/lib/validations";

export default function NewsletterSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  function onSubmit(_data: NewsletterFormData) {
    toast.success("Successfully subscribed to our newsletter!");
    reset();
  }

  return (
    <section className="py-20 px-4 bg-[#0F0F0F]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card p-8 sm:p-12 flex flex-col items-center text-center gap-6"
        >
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-[#9EFF00]/10 flex items-center justify-center">
            <Mail className="w-7 h-7 text-[#9EFF00]" aria-hidden="true" />
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Stay in the Loop
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest deals, new arrivals,
              and exclusive offers from AL HIKMATH ENTERPRISES PVT LTD.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-3"
            noValidate
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex flex-col gap-1">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#9EFF00]/60 focus:ring-1 focus:ring-[#9EFF00]/40 transition-colors duration-200"
                  aria-label="Email address"
                  aria-describedby={errors.email ? "newsletter-email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="newsletter-email-error"
                    className="text-red-400 text-xs text-left"
                    role="alert"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-shrink-0 px-6 py-3 rounded-lg bg-[#9EFF00] text-black font-semibold text-sm hover:bg-[#9EFF00]/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
              >
                {isSubmitting ? "Subscribing…" : "Subscribe"}
              </button>
            </div>
          </form>

          <p className="text-gray-600 text-xs">
            No spam, ever. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
