import type { Product } from "@/types";

const PLACEHOLDER = "/images/placeholder-product.svg";

/**
 * AL HIKMATH ENTERPRISES - Premium Electrical & Electronics Store
 * 
 * Product Catalog:
 * - 2 carefully curated premium products
 * - Real-looking professional listings  
 * - Complete with specifications and pricing
 */

export const mockProducts: Product[] = [
  // ── Premium Electrical Appliances ──────────────────────────────────────
  {
    id: "prod-001",
    slug: "havells-led-bulb-9w",
    name: "Havells LED Bulb 9W - Warm White",
    description:
      "Premium energy-efficient 9W LED bulb from Havells with warm white glow (3000K). Perfect for home and office lighting. Rated for 25,000 hours of operation with minimal heat emission. Reduces energy consumption by up to 80% compared to traditional bulbs. Easy B22 base installation, works with all standard fixtures.",
    shortDescription: "Energy-efficient 9W LED bulb, 25,000-hour lifespan, B22 base.",
    price: 299,
    originalPrice: 399,
    category: "electrical-appliances",
    brand: "Havells",
    images: [PLACEHOLDER],
    rating: 4.5,
    reviewCount: 312,
    stock: 200,
    specifications: {
      "Wattage": "9W",
      "Base Type": "B22",
      "Color Temperature": "3000K (Warm White)",
      "Lumens": "900 lm",
      "Lifespan": "25,000 hours",
      "Voltage": "220–240V AC",
      "Energy Efficiency": "Up to 80% energy saving",
      "Heat Emission": "Minimal",
    },
    tags: ["led", "bulb", "energy-saving", "havells", "electrical"],
    isFeatured: true,
    createdAt: "2024-01-10T08:00:00.000Z",
  },
  {
    id: "prod-002",
    slug: "syska-6-socket-extension-board",
    name: "Syska 6-Socket Extension Board with Surge Protection",
    description:
      "Heavy-duty professional-grade 6-socket extension board with integrated surge protection and 2-metre cord. Features child-safe shutters on all sockets for enhanced safety. Premium build quality suitable for high-demand home and office use. Maximum load capacity of 2500W with overload protection. Fire-retardant PVC casing ensures durability and safety.",
    shortDescription: "6-socket surge-protected board, 2m cord, child-safe shutters, 2500W capacity.",
    price: 649,
    originalPrice: 849,
    category: "electrical-appliances",
    brand: "Syska",
    images: [PLACEHOLDER],
    rating: 4.3,
    reviewCount: 187,
    stock: 150,
    specifications: {
      "Sockets": "6 (Grounded)",
      "Cord Length": "2 metres",
      "Surge Protection": "Yes - Built-in",
      "Child Safety Shutters": "Yes - All sockets",
      "Max Load": "2500W",
      "Voltage": "220–240V AC",
      "Switch Type": "Individual socket switches",
      "Casing": "Fire-retardant PVC",
    },
    tags: ["extension-board", "surge-protection", "syska", "electrical", "safety"],
    isFeatured: true,
    createdAt: "2024-01-15T08:00:00.000Z",
  },
];
