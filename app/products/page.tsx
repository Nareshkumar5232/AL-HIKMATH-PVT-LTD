import { mockProducts } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | AL HIKMATH ENTERPRISES',
};

export default async function ProductsPage({ searchParams }: { searchParams?: { q?: string } }) {
  const params = await searchParams;
  const q = params?.q?.toLowerCase?.() ?? '';
  const products = mockProducts.filter((p) => {
    if (!q) return true;
    const hay = (p.name + ' ' + p.brand + ' ' + (p.tags || []).join(' ')).toLowerCase();
    return hay.includes(q);
  });

  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Products</h1>
        {q ? (
          <p className="text-gray-400 mt-2">Showing results for "{q}" — {products.length} items</p>
        ) : (
          <p className="text-gray-400 mt-2">Explore our full product range.</p>
        )}
      </header>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
