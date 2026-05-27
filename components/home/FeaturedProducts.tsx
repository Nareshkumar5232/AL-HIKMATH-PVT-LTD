"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { featuredProducts } from "@/lib/mock-data";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  function handleAddToCart() {
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  }

  return (
    <div className="glass-card flex-shrink-0 w-[260px] sm:w-[280px] flex flex-col overflow-hidden">
      {/* Product image */}
      <div className="relative w-full h-[200px] bg-[#1A1A1A] overflow-hidden">
        <Image
          src={product.images[0] ?? "/images/placeholder.jpg"}
          alt={product.name}
          width={280}
          height={280}
          className="object-cover w-full h-full"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/images/placeholder.jpg";
          }}
        />
        {product.originalPrice && product.originalPrice > product.price && (
          <span className="absolute top-2 left-2 bg-[#9EFF00] text-black text-xs font-bold px-2 py-0.5 rounded-full">
            {Math.round(
              ((product.originalPrice - product.price) / product.originalPrice) *
                100
            )}
            % OFF
          </span>
        )}
      </div>

      {/* Product info */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        <div>
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
            {product.brand}
          </p>
          <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2">
            {product.name}
          </h3>
        </div>

        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-[#9EFF00] font-bold text-base">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-gray-500 text-xs line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-[#9EFF00] text-black text-sm font-semibold hover:bg-[#9EFF00]/90 transition-colors duration-200"
        >
          <ShoppingCart className="w-4 h-4" aria-hidden="true" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-4 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured{" "}
            <span className="text-[#9EFF00] border-b-2 border-[#9EFF00] pb-0.5">
              Products
            </span>
          </h2>
          <p className="text-gray-400 mt-2">
            Hand-picked top products from our collection.
          </p>
        </motion.div>

        {/* Horizontal scroll carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
