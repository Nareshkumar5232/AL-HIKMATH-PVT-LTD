import Link from "next/link";
import { Zap, Phone, MapPin, Mail, MessageCircle } from "lucide-react";

// SVG brand icons (lucide-react v1.x removed social brand icons)
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Cart", href: "/cart" },
];

const contactDetails = [
  { icon: Phone, text: "+91 9342698344" },
  { icon: Phone, text: "+91 9342798344" },
  { icon: Phone, text: "044-3154 4571 (Office)" },
  { icon: Phone, text: "044-3539 5138 (Office)" },
  {
    icon: MapPin,
    text: "No. 16/127, Inbharajapuram 1st Street, Bajanai Kovil Street, Choolaimedu - 600094",
  },
  { icon: Mail, text: "info@alhikmath.com" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: TwitterIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: LinkedinIcon,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919342698344",
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
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-6 h-6 text-[#9EFF00]" aria-hidden="true" />
              <span className="text-2xl font-bold text-[#9EFF00] tracking-wide">
                AL HIKMATH
              </span>
            </div>
            <p className="text-sm font-semibold text-white tracking-widest uppercase">
              ENTERPRISES PVT LTD
            </p>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted partner for premium electrical and electronics
            appliances in Chennai. Quality products, genuine brands, expert
            support.
          </p>
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

        {/* Column 3 — Contact Details */}
        <div>
          <h3 className="text-[#9EFF00] font-semibold text-base uppercase tracking-wider mb-4 pb-2 border-b border-[#9EFF00]/40">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-3">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;
              return (
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
            })}
          </ul>
        </div>

        {/* Column 4 — Social Media */}
        <div>
          <h3 className="text-[#9EFF00] font-semibold text-base uppercase tracking-wider mb-4 pb-2 border-b border-[#9EFF00]/40">
            Follow Us
          </h3>
          <ul className="flex flex-col gap-3">
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
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} AL HIKMATH ENTERPRISES PVT LTD.
            All rights reserved.
          </p>
          <p>Made with ❤️ in Chennai</p>
        </div>
      </div>
    </footer>
  );
}
