import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { CartItem } from "@/types"

// Validates: Requirements 9.6, 9.9

/**
 * Merges class names using clsx and tailwind-merge.
 * Handles conditional classes and resolves Tailwind conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number as Indian Rupee currency.
 * Example: formatPrice(1999) → "₹1,999.00"
 */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Computes the subtotal for a list of cart items.
 * Returns 0 for an empty array.
 */
export function computeSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
}

/**
 * Converts a product name to a URL-friendly slug.
 * Example: "Samsung Galaxy S24" → "samsung-galaxy-s24"
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")   // remove special chars (keep alphanumeric, spaces, hyphens)
    .replace(/\s+/g, "-")            // spaces → hyphens
    .replace(/-+/g, "-")             // collapse multiple hyphens
    .replace(/^-|-$/g, "")           // strip leading/trailing hyphens
}

/**
 * Truncates text to maxLength and appends "..." if the text exceeds that length.
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

/**
 * Calculates the discount percentage between an original price and a current price.
 * Returns 0 if currentPrice >= originalPrice or originalPrice is 0.
 */
export function getDiscountPercentage(originalPrice: number, currentPrice: number): number {
  if (originalPrice <= 0 || currentPrice >= originalPrice) return 0
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}
