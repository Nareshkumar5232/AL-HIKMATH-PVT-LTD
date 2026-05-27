"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { toast } from "sonner";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { formatPrice, getDiscountPercentage } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const toggleItem = useWishlistStore((s) => s.toggleItem);
  const isInWishlist = useWishlistStore((s) => s.isInWishlist);

  const inWishlist = isInWishlist(product.id);
  const hasDiscount =
    product.originalPrice !== undefined && product.originalPrice > product.price;
  const discountPct = hasDiscount
    ? getDiscountPercentage(product.originalPrice!, product.price)
    : 0;

  function handleAddToCart() {
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  }

  function handleWishlistToggle() {
    toggleItem(product);
    if (inWishlist) {
      toast.success(`${product.name} removed from wishlist.`);
    } else {
      toast.success(`${product.name} added to wishlist!`);
    }
  }

  function handleQuickView() {
    onQuickView?.(product);
  }

  // Render filled stars based on rating (0–5)
  const fullStars = Math.floor(product.rating);
  const hasHalf = product.rating - fullStars >= 0.5;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="glass-card neon-hover flex flex-col overflow-hidden group relative"
    >
      {/* Image area */}
      <div className="relative w-full h-[200px] bg-[#1A1A1A] overflow-hidden">
        <Image
          src={product.images[0] ?? "/images/placeholder.jpg"}
          alt={product.name}
          width={280}
          height={280}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/images/placeholder.jpg";
          }}
        />

        {/* Discount badge */}
        {hasDiscount && (
          <span className="absolute top-2 left-2 bg-[#9EFF00] text-black text-xs font-bold px-2 py-0.5 rounded-full z-10">
            {discountPct}% OFF
          </span>
        )}

        {/* Wishlist toggle */}
        <button
          onClick={handleWishlistToggle}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-black/50 backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              inWishlist ? "fill-red-500 text-red-500" : "text-white"
            }`}
          />
        </button>

        {/* Quick View overlay */}
        <button
          onClick={handleQuickView}
          aria-label="Quick view"
          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-lg">
            <Eye className="w-4 h-4" />
            Quick View
          </span>
        </button>
      </div>

      {/* Product info */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        {/* Brand */}
        <p className="text-gray-400 text-xs uppercase tracking-wider">
          {product.brand}
        </p>

        {/* Name */}
        <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2">
          {product.name}
        </h3>

        {/* Star rating */}
        <div className="flex items-center gap-1" aria-label={`Rating: ${product.rating} out of 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < fullStars
                  ? "fill-[#9EFF00] text-[#9EFF00]"
                  : i === fullStars && hasHalf
                  ? "fill-[#9EFF00]/50 text-[#9EFF00]"
                  : "fill-gray-600 text-gray-600"
              }`}
            />
          ))}
          <span className="text-gray-400 text-xs ml-1">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-[#9EFF00] font-bold text-base">
            {formatPrice(product.price)}
          </span>
          {hasDiscount && (
            <span className="text-gray-500 text-xs line-through">
              {formatPrice(product.originalPrice!)}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          {/* Quick View button (visible on mobile / as fallback) */}
          <button
            onClick={handleQuickView}
            className="flex items-center justify-center gap-2 w-full py-1.5 rounded-lg border border-white/20 text-white text-xs font-medium hover:border-[#9EFF00] hover:text-[#9EFF00] transition-colors duration-200 sm:hidden"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-[#9EFF00] text-black text-sm font-semibold hover:bg-[#9EFF00]/90 transition-colors duration-200"
          >
            <ShoppingCart className="w-4 h-4" aria-hidden="true" />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
