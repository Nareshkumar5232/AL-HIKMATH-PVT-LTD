"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulated submission — replace with actual API call when backend endpoint is ready
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-b from-[#9EFF00]/10 to-transparent border-b border-white/10 mb-16">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs uppercase tracking-widest text-[#9EFF00] font-bold mb-4"
          >
            We&apos;re Here to Help
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            Have a question, need product advice, or want to place a bulk order?
            Reach us on WhatsApp or fill out the form below.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919342798344?text=Hello%20AL%20HIKMATH%20ENTERPRISES%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-contact-btn"
              className="flex items-center gap-4 p-5 rounded-2xl bg-green-500/10 border border-green-500/30 hover:border-green-500/60 hover:bg-green-500/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.4)] group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Chat on WhatsApp</p>
                <p className="text-green-400 text-xs mt-0.5">
                  Fastest response — usually within minutes
                </p>
              </div>
            </a>

            {/* Phone */}
            <div
              id="contact-phone"
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-[#9EFF00]/10 border border-[#9EFF00]/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#9EFF00]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">
                  Phone Numbers
                </p>
                <a
                  href="tel:+919342698344"
                  className="block text-gray-400 text-sm hover:text-[#9EFF00] transition-colors"
                >
                  +91 9342698344
                </a>
                <a
                  href="tel:+919342798344"
                  className="block text-gray-400 text-sm hover:text-[#9EFF00] transition-colors"
                >
                  +91 9342798344
                </a>
                <p className="text-gray-600 text-xs mt-1">
                  Mon–Sat, 9:00 AM – 6:00 PM IST
                </p>
              </div>
            </div>

            {/* Email */}
            <div
              id="contact-email"
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-[#9EFF00]/10 border border-[#9EFF00]/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#9EFF00]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Email</p>
                <a
                  href="mailto:care@alhikmath.com"
                  className="block text-gray-400 text-sm hover:text-[#9EFF00] transition-colors"
                >
                  care@alhikmath.com
                </a>
                <a
                  href="mailto:info@alhikmath.com"
                  className="block text-gray-400 text-sm hover:text-[#9EFF00] transition-colors"
                >
                  info@alhikmath.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div
              id="contact-address"
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="w-10 h-10 rounded-xl bg-[#9EFF00]/10 border border-[#9EFF00]/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#9EFF00]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">
                  Our Address
                </p>
                <address className="text-gray-400 text-sm not-italic leading-relaxed">
                  AL HIKMATH ENTERPRISES PVT LTD
                  <br />
                  No. 16/127, Inbharajapuram 1st Street,
                  <br />
                  Bajanai Kovil Street, Choolaimedu,
                  <br />
                  Chennai – 600094,
                  <br />
                  Tamil Nadu, India
                </address>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-52">
              <iframe
                title="AL HIKMATH ENTERPRISES Location — Choolaimedu, Chennai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3523452!2d80.2149!3d13.0694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266b7f3d02a9b%3A0x7e4e30e6f1aae0b8!2sChoolaimedu%2C%20Chennai%2C%20Tamil%20Nadu%20600094!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#9EFF00]/10 border border-[#9EFF00]/30 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#9EFF00]/20 border border-[#9EFF00]/40 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-[#9EFF00]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Received!
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Thank you for reaching out. We&apos;ll respond within 24 hours. For faster support, chat with us on WhatsApp.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl border border-white/15 text-sm text-gray-300 hover:border-white/30 hover:text-white transition-all"
                    >
                      Send Another
                    </button>
                    <a
                      href="https://wa.me/919342798344"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl bg-green-500 text-white text-sm font-semibold hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Us
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#9EFF00] focus:ring-1 focus:ring-[#9EFF00]/30 outline-none text-white text-sm placeholder-gray-600 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#9EFF00] focus:ring-1 focus:ring-[#9EFF00]/30 outline-none text-white text-sm placeholder-gray-600 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#9EFF00] focus:ring-1 focus:ring-[#9EFF00]/30 outline-none text-white text-sm placeholder-gray-600 transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="subject"
                        className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#9EFF00] focus:ring-1 focus:ring-[#9EFF00]/30 outline-none text-white text-sm transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0F0F0F]">
                          Select a topic
                        </option>
                        <option value="product-enquiry" className="bg-[#0F0F0F]">
                          Product Enquiry
                        </option>
                        <option value="order-support" className="bg-[#0F0F0F]">
                          Order Support
                        </option>
                        <option value="bulk-order" className="bg-[#0F0F0F]">
                          Bulk / Corporate Order
                        </option>
                        <option value="return-refund" className="bg-[#0F0F0F]">
                          Return / Refund
                        </option>
                        <option value="other" className="bg-[#0F0F0F]">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#9EFF00] focus:ring-1 focus:ring-[#9EFF00]/30 outline-none text-white text-sm placeholder-gray-600 transition-all resize-none"
                      placeholder="Describe your enquiry, product question, or concern in detail..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#9EFF00] text-black font-bold text-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#9EFF00] focus:ring-offset-2 focus:ring-offset-black transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(158,255,0,0.3)]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                    <a
                      href="https://wa.me/919342798344?text=Hello%20AL%20HIKMATH%20ENTERPRISES%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold hover:bg-green-500/30 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                  <p className="text-gray-600 text-xs">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
