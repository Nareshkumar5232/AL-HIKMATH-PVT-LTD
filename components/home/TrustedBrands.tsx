"use client";

const brands = [
  "Havells", "Syska", "Philips", "Wipro", "Bajaj", "Crompton",
  "Anchor", "Finolex", "Legrand", "Schneider", "GM Modular",
  "Orient Electric", "Panasonic", "Honeywell", "ABB", "Siemens",
];

export default function TrustedBrands() {
  // Triple the list so the seamless loop always fills the screen
  const repeated = [...brands, ...brands, ...brands];

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
          className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0F0F0F, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0F0F0F, transparent)" }}
          aria-hidden="true"
        />

        <div className="brands-marquee-track">
          {repeated.map((name, i) => (
            <div
              key={i}
              className="brands-marquee-item"
              aria-hidden={i >= brands.length ? true : undefined}
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .brands-marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: brands-marquee 40s linear infinite;
        }
        .brands-marquee-track:hover {
          animation-play-state: paused;
        }
        .brands-marquee-item {
          flex-shrink: 0;
          padding: 0.75rem 1.5rem;
          border: 1px solid rgba(158, 255, 0, 0.25);
          border-radius: 9999px;
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          white-space: nowrap;
          background: rgba(158, 255, 0, 0.05);
          letter-spacing: 0.025em;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }
        .brands-marquee-item:hover {
          border-color: rgba(158, 255, 0, 0.7);
          background: rgba(158, 255, 0, 0.1);
          color: #9EFF00;
        }
        @keyframes brands-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  );
}
