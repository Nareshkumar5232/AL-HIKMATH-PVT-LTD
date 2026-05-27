"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Zap, Search, ShoppingCart, User, Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useScrolled } from "@/hooks/useScrolled";
import { useCartStore } from "@/store/cartStore";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const scrolled = useScrolled();
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const totalItems = useCartStore((state) => state.totalItems());

  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      router.push(`/products?q=${encodeURIComponent(q)}`);
      setSearchQuery("");
    }
  }

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "backdrop-blur-md bg-[#0F0F0F]/90 border-b border-white/10 shadow-lg"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* ── Left: Logo ── */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
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

            {/* ── Center: Nav links (desktop) ── */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      "text-sm transition-colors duration-200",
                      isActive
                        ? "text-[#9EFF00] font-semibold"
                        : "text-gray-300 hover:text-white",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* ── Right: Actions ── */}
            <div className="flex items-center gap-2">
              {/* Search form */}
              <form
                onSubmit={handleSearch}
                className="hidden md:flex items-center gap-1 bg-white/10 rounded-lg px-3 py-1.5"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products…"
                  aria-label="Search products"
                  className="bg-transparent text-sm text-white placeholder-gray-400 outline-none w-36 focus:w-48 transition-all duration-300"
                />
                <button
                  type="submit"
                  aria-label="Submit search"
                  className="text-gray-400 hover:text-[#9EFF00] transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>

              {/* Cart */}
              <Link
                href="/cart"
                aria-label={`Cart, ${totalItems} item${totalItems !== 1 ? "s" : ""}`}
                className="relative p-2 text-gray-300 hover:text-white transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#9EFF00] text-black text-[10px] font-bold px-1">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </Link>

              {/* User dropdown */}
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen((prev) => !prev)}
                  aria-label="User menu"
                  aria-expanded={userMenuOpen}
                  aria-haspopup="true"
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                >
                  <User className="w-5 h-5" />
                </button>
                {userMenuOpen && (
                  <div
                    className="absolute right-0 top-full mt-2 w-40 bg-[#1A1A1A] border border-white/10 rounded-lg shadow-xl py-1 z-50"
                    role="menu"
                  >
                    <Link
                      href="/login"
                      role="menuitem"
                      onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      role="menuitem"
                      onClick={() => setUserMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>

              {/* Theme toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="p-2 text-gray-300 hover:text-white transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Hamburger (mobile only) */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open mobile menu"
                className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
