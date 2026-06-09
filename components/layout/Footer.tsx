import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Cart", href: "/cart" },
  { label: "Wishlist", href: "/wishlist" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund & Cancellation", href: "/refund-cancellation-policy" },
  { label: "Delivery & Shipping", href: "/delivery-shipping-policy" },
];

const contactDetails = [
  { icon: Phone, text: "+91 9342698344", href: "tel:+919342698344" },
  { icon: Phone, text: "+91 9342798344", href: "tel:+919342798344" },
  {
    icon: MapPin,
    text: "No. 16/127, Inbharajapuram 1st Street, Bajanai Kovil Street, Choolaimedu – 600094, Chennai",
    href: null,
  },
  { icon: Mail, text: "care@alhikmath.com", href: "mailto:care@alhikmath.com" },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/919342798344?text=Hello%20AL%20HIKMATH%20ENTERPRISES%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products.",
    icon: MessageCircle,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      {/* Main grid */}
      <div className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 — Brand */}
        <div className="flex flex-col gap-4">
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/images/logo.png"
                alt="AL HIKMATH ENTERPRISES"
                width={320}
                height={180}
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted partner for premium electrical and electronics
            appliances in Chennai. Quality products, genuine brands, expert
            support.
          </p>
          {/* Social */}
          <ul className="flex flex-col gap-3 mt-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center gap-3 group"
                  >
                    <span className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 group-hover:bg-[#9EFF00] group-hover:text-black group-hover:border-[#9EFF00] transition-all duration-200">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span className="text-gray-400 text-sm group-hover:text-[#9EFF00] transition-colors duration-200">
                      {social.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h3 className="text-[#9EFF00] font-semibold text-base uppercase tracking-wider mb-4 pb-2 border-b border-[#9EFF00]/40">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-[#9EFF00] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Legal */}
        <div>
          <h3 className="text-[#9EFF00] font-semibold text-base uppercase tracking-wider mb-4 pb-2 border-b border-[#9EFF00]/40">
            Legal
          </h3>
          <ul className="flex flex-col gap-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-400 text-sm hover:text-[#9EFF00] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact Details */}
        <div>
          <h3 className="text-[#9EFF00] font-semibold text-base uppercase tracking-wider mb-4 pb-2 border-b border-[#9EFF00]/40">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-3">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <li key={index} className="flex items-start gap-2">
                  <Icon
                    className="w-4 h-4 text-[#9EFF00] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-gray-400 text-sm leading-snug">
                    {item.text}
                  </span>
                </li>
              );

              if (item.href) {
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="hover:text-[#9EFF00] transition-colors"
                  >
                    {content}
                  </a>
                );
              }
              return content;
            })}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} AL HIKMATH ENTERPRISES PVT LTD.
            All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3 justify-center">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#9EFF00] transition-colors text-xs"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p>Made with ❤️ in Chennai</p>
        </div>
      </div>
    </footer>
  );
}
