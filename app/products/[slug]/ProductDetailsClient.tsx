'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart, Heart, Minus, Plus } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import type { Product } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

export default function ProductDetailsClient({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const { toggleItem: toggleWishlistItem, isInWishlist } = useWishlistStore();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      title: 'Added to Cart',
      description: `${quantity} x ${product.name} added to your cart.`,
      action: (
        <Link href="/cart">
          <Button variant="secondary" size="sm">
            View Cart
          </Button>
        </Link>
      ),
    });
  };

  const router = useRouter();
  const isAuth = useAuthStore((s) => s.isAuthenticated);

  const handleBuyNow = () => {
    if (!isAuth) {
      toast({ title: 'Please login to continue your purchase' });
      router.push(`/login?redirect=${encodeURIComponent('/cart')}`);
      return;
    }
    addItem(product, quantity);
    router.push('/cart');
  };

  const handleWishlistToggle = () => {
    const currently = isInWishlist(product.id);
    toggleWishlistItem(product);
    if (currently) {
      toast({
        title: 'Removed from Wishlist',
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      toast({
        title: 'Added to Wishlist',
        description: `${product.name} has been added to your wishlist.`,
        action: (
          <Link href="/wishlist">
            <Button variant="secondary" size="sm">
              View Wishlist
            </Button>
          </Link>
        ),
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center"
    >
      <div>
        <p className="text-sm uppercase text-gray-500 dark:text-gray-400">{product.brand}</p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mt-2">
          {product.name}
        </h1>
      </div>

      <div className="mt-4">
        <div className="flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.round(product.rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
                fill="currentColor"
              />
            ))}
          </div>
          <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            {product.rating.toFixed(1)} ({product.reviewCount} reviews)
          </p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-3xl text-gray-900 dark:text-white">
          {formatCurrency(product.price)}
          {product.originalPrice && (
            <span className="ml-4 text-xl text-gray-500 line-through">
              {formatCurrency(product.originalPrice)}
            </span>
          )}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base text-gray-700 dark:text-gray-300">
          <p>{product.description}</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center space-x-4">
          <p className="text-sm font-medium text-gray-900 dark:text-white">Quantity:</p>
          <div className="flex items-center rounded-md border border-gray-300 dark:border-gray-600">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="h-8 w-8"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-10 text-center">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
              className="h-8 w-8"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex gap-4">
        <Button onClick={handleAddToCart} size="lg" className="flex-1">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        <Button onClick={handleBuyNow} variant="secondary" className="px-6">
          Buy Now
        </Button>
        <Button onClick={handleWishlistToggle} variant="outline" size="lg">
          <Heart
            className={`mr-2 h-5 w-5 ${isInWishlist(product.id) ? 'text-red-500' : ''}`}
            fill={isInWishlist(product.id) ? 'currentColor' : 'none'}
          />
          Wishlist
        </Button>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Specifications</h3>
        <div className="mt-4 flow-root">
          <div className="-my-2 divide-y divide-gray-200 dark:divide-gray-700">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="py-3 flex justify-between text-sm">
                <dt className="font-medium text-gray-500 dark:text-gray-400">{key}</dt>
                <dd className="text-gray-900 dark:text-white">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
