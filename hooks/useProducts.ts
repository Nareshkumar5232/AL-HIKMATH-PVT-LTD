"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProduct, getProducts, normalizeProduct, type ProductQueryFilters } from "@/services/products";

export const productQueryKeys = {
  all: ["products"] as const,
  list: (filters?: ProductQueryFilters) => ["products", "list", filters ?? {}] as const,
  detail: (identifier: string) => ["products", "detail", identifier] as const,
};

export function useProductsQuery(filters?: ProductQueryFilters) {
  return useQuery({
    queryKey: productQueryKeys.list(filters),
    queryFn: async () => {
      const response = await getProducts(filters);
      return {
        ...response,
        products: response.products.map(normalizeProduct),
      };
    },
    staleTime: 10_000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchInterval: 15_000,
    placeholderData: keepPreviousData,
  });
}

export function useProductQuery(identifier: string) {
  return useQuery({
    queryKey: productQueryKeys.detail(identifier),
    queryFn: async () => getProduct(identifier),
    enabled: Boolean(identifier),
    staleTime: 10_000,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
}