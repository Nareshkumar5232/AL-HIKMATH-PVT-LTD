"use client";

import Link from "next/link";
import { X, ShoppingCart, Zap, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useCartStore } from "@/store/cartStore";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { theme, setTheme } = useTheme();
  const totalItems = useCartStore((state) => state.totalItems());

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-[#0F0F0F]/98 backdrop-blur-md flex flex-col"
          aria-modal="true"
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 h-16 border-b border-white/10 shrink-0">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-[#9EFF00]" aria-hidden="true" />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[#9EFF00] tracking-wide text-base">
                  AL HIKMATH
                </span>
                <span className="text-white text-xs tracking-widest uppercase">
                  ENTERPRISES
                </span>
              </div>
            </Link>
            <button
              onClick={onClose}
              aria-label="Close mobile menu"
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-4 py-6 gap-1 flex-1 overflow-y-auto" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-base font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Cart link */}
            <Link
              href="/cart"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-base font-medium transition-colors duration-200"
            >
              <ShoppingCart className="w-5 h-5" aria-hidden="true" />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="ml-auto min-w-[22px] h-[22px] flex items-center justify-center rounded-full bg-[#9EFF00] text-black text-xs font-bold px-1">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* Divider */}
            <div className="my-2 border-t border-white/10" />

            {/* Auth links */}
            <Link
              href="/login"
              onClick={onClose}
              className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-base font-medium transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={onClose}
              className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-base font-medium transition-colors duration-200"
            >
              Register
            </Link>
          </nav>

          {/* Theme toggle at bottom */}
          <div className="px-4 py-6 border-t border-white/10 shrink-0">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-base font-medium transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-5 h-5" aria-hidden="true" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" aria-hidden="true" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
