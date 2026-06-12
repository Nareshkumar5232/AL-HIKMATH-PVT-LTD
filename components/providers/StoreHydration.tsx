"use client";
// AL HIKMATH ENTERPRISES PVT LTD — Store Hydration Provider
// Validates: Requirements 1.8, 12.1, 12.2

import { useEffect } from "react";
import { useWishlistStore } from "@/store/wishlistStore";
import { useRecentlyViewedStore } from "@/store/recentlyViewedStore";
import { useProductFilterStore } from "@/store/productFilterStore";
import { useCartStore } from "@/store/cartStore";
import { useAuthStore } from "@/store/authStore";

/**
 * Triggers manual rehydration of persisted Zustand stores on client mount.
 * All persisted stores use `skipHydration: true` to avoid SSR mismatches, so this
 * component is responsible for kicking off hydration once the client is ready.
 */
export function StoreHydration() {
  useEffect(() => {
    useWishlistStore.persist.rehydrate();
    useRecentlyViewedStore.persist.rehydrate();
    useProductFilterStore.persist.rehydrate();
    useCartStore.persist.rehydrate();
    useAuthStore.persist.rehydrate();
  }, []);
  return null;
}
