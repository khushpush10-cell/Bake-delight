export default function ProductSkeleton() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border-2 border-gold bg-white">
      <div className="h-56 skeleton" />
      <div className="space-y-3 p-5">
        <div className="h-6 w-3/4 skeleton rounded" />
        <div className="h-4 w-full skeleton rounded" />
        <div className="h-4 w-4/5 skeleton rounded" />
        <div className="h-6 w-24 skeleton rounded" />
        <div className="h-12 w-full skeleton rounded-xl" />
      </div>
    </div>
  );
}
