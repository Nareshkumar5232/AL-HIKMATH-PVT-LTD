import { mockProducts } from "@/data/products";

export default function TrustedBrands() {
  return (
    <section className="py-16 px-4 bg-[#0F0F0F] overflow-hidden">
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Trusted{" "}
          <span className="text-[#9EFF00] underline decoration-[#9EFF00]/40 underline-offset-4">
            Brands
          </span>
        </h2>
        <p className="text-gray-400 mt-2">
          We carry products from the world&apos;s most trusted manufacturers.
        </p>
      </div>

      {/* Auto-scrolling strip */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #0F0F0F, transparent)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #0F0F0F, transparent)",
          }}
          aria-hidden="true"
        />

        <div className="flex gap-6 brands-scroll">
          {/* derive unique brands from products */}
          {Array.from(new Set(mockProducts.map((p) => p.brand))).map((name, i) => (
            <div
              key={`a-${i}`}
              className="flex-shrink-0 px-6 py-3 glass-card rounded-full text-white text-sm font-medium whitespace-nowrap"
            >
              {name}
            </div>
          ))}
          {/* second copy */}
          {Array.from(new Set(mockProducts.map((p) => p.brand))).map((name, i) => (
            <div
              key={`b-${i}`}
              className="flex-shrink-0 px-6 py-3 glass-card rounded-full text-white text-sm font-medium whitespace-nowrap"
              aria-hidden="true"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .brands-scroll {
          animation: brands-marquee 30s linear infinite;
          width: max-content;
        }
        @keyframes brands-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .brands-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
