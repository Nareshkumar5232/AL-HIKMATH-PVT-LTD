import { mockProducts } from "@/data/products";
import ProductsClient from "@/components/products/ProductsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | AL HIKMATH ENTERPRISES",
  description: "Browse our premium selection of electronics, electrical appliances, mobile and computer accessories, chargers, earphones, and smart devices.",
};

interface SearchParams {
  q?: string;
}

interface PageProps {
  searchParams?: Promise<SearchParams> | SearchParams;
}

export default async function ProductsPage({ searchParams }: PageProps) {
  // Resolve searchParams if it is a Promise (Next.js 15+ standard)
  const resolvedParams = searchParams instanceof Promise ? await searchParams : await Promise.resolve(searchParams);
  const q = resolvedParams?.q ?? "";

  return (
    <ProductsClient
      initialProducts={mockProducts}
      initialSearchQuery={q}
    />
  );
}
