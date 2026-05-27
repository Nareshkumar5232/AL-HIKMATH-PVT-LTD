"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { mockProducts } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useCategoryStore } from "@/store/categoryStore";
import { formatCurrency, getDiscountPercentage } from "@/lib/utils";
import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types";

export default function FeaturedProducts() {
  const { selectedCategory } = useCategoryStore();

  const displayProducts = selectedCategory
    ? mockProducts.filter((p) => p.category === selectedCategory)
    : mockProducts.filter((p) => p.isFeatured);

  return (
    <section id="dynamic-products" className="py-20 px-4 bg-gray-50 dark:bg-[#0F0F0F] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          key={selectedCategory || "featured"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {selectedCategory ? (
              <>
                <span className="capitalize">{selectedCategory.replace(/-/g, " ")}</span>{" "}
                <span className="text-[#9EFF00] border-b-2 border-[#9EFF00] pb-0.5">
                  Products
                </span>
              </>
            ) : (
              <>
                Featured{" "}
                <span className="text-[#9EFF00] border-b-2 border-[#9EFF00] pb-0.5">
                  Products
                </span>
              </>
            )}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {selectedCategory
              ? `Check out the latest ${selectedCategory.replace(/-/g, " ")}.`
              : "Hand-picked top products from our collection."}
          </p>
        </motion.div>

        {/* Dynamic Grid */}
        <motion.div
          key={`grid-${selectedCategory || "featured"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
          {displayProducts.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-500">
              No products found for this category.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
