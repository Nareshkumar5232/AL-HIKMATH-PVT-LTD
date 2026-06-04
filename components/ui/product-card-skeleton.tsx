export function ProductCardSkeleton() {
  return (
    <div className="glass-card overflow-hidden animate-pulse">
      <div className="h-[200px] bg-white/5" />
      <div className="p-4 space-y-3">
        <div className="h-3 w-20 rounded bg-white/10" />
        <div className="h-5 w-4/5 rounded bg-white/10" />
        <div className="h-4 w-1/2 rounded bg-white/10" />
        <div className="flex items-center justify-between pt-2">
          <div className="h-6 w-24 rounded bg-white/10" />
          <div className="h-10 w-10 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}