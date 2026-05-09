"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FolderOpen, LayoutDashboard, LogOut, Package, PlusCircle, Settings, Tags } from "lucide-react";
import { signOut } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

const links = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/products/new", label: "Add Product", icon: PlusCircle },
  { href: "/admin/categories", label: "Categories", icon: Tags },
  { href: "/admin/settings", label: "Store Settings", icon: Settings }
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    await signOut(getFirebaseAuth());
    router.push("/admin/login");
  };

  return (
    <aside className="border-b border-border bg-surface md:min-h-screen md:w-72 md:border-b-0 md:border-r">
      <div className="flex items-center justify-between px-4 py-5 md:block md:px-6">
        <Link href="/admin/dashboard" className="font-heading text-2xl font-bold text-primary">
          Bake Delight
        </Link>
        <button
          onClick={logout}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border md:hidden"
          aria-label="Logout"
        >
          <LogOut size={18} />
        </button>
      </div>
      <nav className="flex gap-2 overflow-x-auto px-4 pb-4 md:block md:space-y-2 md:px-4">
        {links.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-w-max items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                active ? "bg-primary text-surface" : "text-textDark hover:bg-background"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
        <button
          onClick={logout}
          className="hidden w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-textDark hover:bg-background md:flex"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
}
