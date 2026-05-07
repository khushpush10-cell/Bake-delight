import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md rounded-2xl border border-border bg-surface p-8 text-center shadow-card">
        <p className="font-heading text-7xl font-bold text-gold">404</p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-primary">Page not found</h1>
        <p className="mt-3 text-textMuted">The page you are looking for is not available.</p>
        <Link href="/menu" className="btn-primary mt-6">
          Go to Menu
        </Link>
      </div>
    </main>
  );
}
