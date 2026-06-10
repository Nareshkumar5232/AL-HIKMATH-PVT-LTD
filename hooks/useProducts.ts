"use client";

import { keepPreviousData, useQuery, type UseQueryResult } from "@tanstack/react-query";
import { getProduct, getProducts, normalizeProduct, type ProductQueryFilters } from "@/services/products";
import type { Product } from "@/types";

export const productQueryKeys = {
  all: ["products"] as const,
  list: (filters?: ProductQueryFilters) => ["products", "list", filters ?? {}] as const,
  detail: (identifier: string) => ["products", "detail", identifier] as const,
};

const isServer = typeof window === "undefined";

export function useProductsQuery(filters?: ProductQueryFilters): UseQueryResult<{ products: Product[]; total: number; pages: number; currentPage: number }, Error> {
  const queryKey = productQueryKeys.list(filters);
  const cacheKey = `al-hikmath-products-cache-${JSON.stringify(filters ?? {})}`;

  return useQuery({
    queryKey,
    queryFn: async () => {
      const response = await getProducts(filters);
      const data = {
        ...response,
        products: response.products.map(normalizeProduct),
      };
      if (!isServer) {
        try {
          localStorage.setItem(cacheKey, JSON.stringify(data));
        } catch (e) {
          console.warn("Failed to write products to cache:", e);
        }
      }
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes stale time
    refetchOnWindowFocus: false, // Don't refetch on window focus
    refetchOnReconnect: true,
    placeholderData: keepPreviousData,
    initialData: () => {
      if (!isServer) {
        try {
          const cached = localStorage.getItem(cacheKey);
          if (cached) {
            return JSON.parse(cached);
          }

          // Fallback: If we have cached "all" products, we can try to filter it locally
          // for the requested category or search query as an initial placeholder!
          const allCachedRaw = localStorage.getItem(`al-hikmath-products-cache-${JSON.stringify({ limit: 100 })}`) || 
                               localStorage.getItem(`al-hikmath-products-cache-${JSON.stringify({ limit: 1000 })}`) ||
                               localStorage.getItem(`al-hikmath-products-cache-${JSON.stringify({})}`);
          if (allCachedRaw) {
            const allCached = JSON.parse(allCachedRaw);
            let filteredProducts = [...(allCached.products || [])];
            
            if (filters?.category && filters.category !== "all") {
              filteredProducts = filteredProducts.filter((p: any) => p.category === filters.category);
            }
            if (filters?.search?.trim()) {
              const q = filters.search.toLowerCase().trim();
              filteredProducts = filteredProducts.filter((p: any) => 
                p.name?.toLowerCase().includes(q) || 
                p.brand?.toLowerCase().includes(q) || 
                p.category?.toLowerCase().includes(q)
              );
            }
            if (filters?.featured) {
              filteredProducts = filteredProducts.filter((p: any) => p.isFeatured);
            }
            
            return {
              products: filteredProducts,
              total: filteredProducts.length,
              pages: 1,
              currentPage: 1
            };
          }
        } catch (e) {
          console.warn("Failed to read products from cache:", e);
        }
      }
      return undefined;
    },
  }) as any;
}

export function useProductQuery(identifier: string): UseQueryResult<Product | null, Error> {
  const queryKey = productQueryKeys.detail(identifier);
  const cacheKey = `al-hikmath-product-detail-${identifier}`;

  return useQuery({
    queryKey,
    queryFn: async () => {
      const data = await getProduct(identifier);
      if (data && !isServer) {
        try {
          localStorage.setItem(cacheKey, JSON.stringify(data));
        } catch (e) {
          console.warn("Failed to write product detail to cache:", e);
        }
      }
      return data;
    },
    enabled: Boolean(identifier),
    staleTime: 1000 * 60 * 5, // 5 minutes stale time
    refetchOnWindowFocus: false, // Don't refetch on window focus
    refetchOnReconnect: true,
    initialData: () => {
      if (!isServer) {
        try {
          const cached = localStorage.getItem(cacheKey);
          if (cached) {
            return JSON.parse(cached);
          }
          
          // Scan products list caches to find a matching product
          for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key?.startsWith("al-hikmath-products-cache-")) {
              const listDataRaw = localStorage.getItem(key);
              if (listDataRaw) {
                const listData = JSON.parse(listDataRaw);
                const found = listData?.products?.find(
                  (p: any) => p.id === identifier || p.slug === identifier
                );
                if (found) {
                  return found;
                }
              }
            }
          }
        } catch (e) {
          console.warn("Failed to read product detail from cache:", e);
        }
      }
      return undefined;
    },
  }) as any;
}