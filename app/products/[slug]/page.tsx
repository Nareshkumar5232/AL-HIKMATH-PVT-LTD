// AL HIKMATH ENTERPRISES PVT LTD
// File: app/products/[slug]/page.tsx
// Validates: Requirements 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9

import { notFound } from 'next/navigation';
import { mockProducts } from '@/data/products';
import ProductImageGallery from '@/components/product-details/ImageGallery';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { ProductCard } from '@/components/products/ProductCard';
import ProductDetailsClient from './ProductDetailsClient';
import type { Product } from '@/types';

// This function is required for static generation of product pages
export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    slug: product.slug,
  }));
}

function getProductBySlug(slug: string) {
  // Direct match
  let found = mockProducts.find((p) => p.slug === slug);
  if (found) return found;

  // Try decoding URI components (in case of encoded characters)
  try {
    const decoded = decodeURIComponent(slug);
    found = mockProducts.find((p) => p.slug === decoded);
    if (found) return found;
  } catch (e) {
    // ignore malformed URI component
  }

  // Case-insensitive match as a last resort
  found = mockProducts.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
  if (found) return found;

  // Fallback: allow matching by id if someone navigates to id accidentally
  found = mockProducts.find((p) => p.id === slug);
  return found;
}

function getRelatedProducts(currentProduct: Product) {
  return mockProducts
    .filter((p) => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 4);
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image Gallery */}
          <ProductImageGallery images={product.images} productName={product.name} />

          {/* Product Info */}
          <ProductDetailsClient product={product} />
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center mb-12">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
