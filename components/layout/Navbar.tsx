"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useScrolled } from "@/hooks/useScrolled";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
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

  const cartTotalItems = useCartStore((state) => state.totalItems());
  const wishlistTotalItems = useWishlistStore((state) => state.items.length);

  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

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
            ? "backdrop-blur-md bg-white/90 dark:bg-[#0F0F0F]/90 border-b border-gray-200 dark:border-white/10 shadow-lg"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* ── Left: Logo ── */}
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/images/logo.png" alt="AL HIKMATH ENTERPRISES" width={120} height={50} className="h-auto" />
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
                        : "text-gray-900 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white",
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
                className="hidden md:flex items-center gap-1 bg-gray-100 dark:bg-white/10 rounded-lg px-3 py-1.5 transition-colors duration-300"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products…"
                  aria-label="Search products"
                  className="bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none w-36 focus:w-48 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="relative rounded-full p-2 text-gray-900 dark:text-gray-300 transition-colors hover:text-[#9EFF00] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                aria-label={`Wishlist with ${wishlistTotalItems} items`}
              >
                <Heart className="h-5 w-5" />
                {wishlistTotalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#9EFF00] text-xs font-bold text-black">
                    {wishlistTotalItems}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative rounded-full p-2 text-gray-900 dark:text-gray-300 transition-colors hover:text-[#9EFF00] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                aria-label={`Cart with ${cartTotalItems} items`}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartTotalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#9EFF00] text-xs font-bold text-black">
                    {cartTotalItems}
                  </span>
                )}
              </Link>

              {/* User / Login */}
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="rounded-full p-2 text-gray-900 dark:text-gray-300 transition-colors hover:text-[#9EFF00] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                  aria-label="User menu"
                >
                  <User className="h-5 w-5" />
                </button>
                {userMenuOpen && (
                  <div
                    className="absolute right-0 top-full mt-2 w-44 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 rounded-lg shadow-xl py-1 z-50 transition-colors duration-300"
                    role="menu"
                  >
                    {user ? (
                      <>
                        <div className="px-4 py-2 text-sm text-gray-500 dark:text-gray-300">Signed in as</div>
                        <div className="px-4 py-1 text-sm font-semibold text-gray-900 dark:text-white">{user.name}</div>
                        <button
                          onClick={() => {
                            logout();
                            setUserMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/login"
                          role="menuitem"
                          onClick={() => setUserMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                        >
                          Login
                        </Link>
                        <Link
                          href="/register"
                          role="menuitem"
                          onClick={() => setUserMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                        >
                          Register
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Hamburger (mobile only) */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open mobile menu"
                className="md:hidden p-2 text-gray-900 dark:text-gray-300 hover:text-[#9EFF00] dark:hover:text-white transition-colors"
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
