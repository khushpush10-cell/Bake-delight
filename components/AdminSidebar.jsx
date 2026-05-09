"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, LogOut, Package, Settings, Tags } from "lucide-react";
import { signOut } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

// Sidebar with only 5 items: Dashboard, Products, Categories, Store Settings, Logout
const links = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/categories", label: "Categories", icon: Tags },
  { href: "/admin/settings", label: "Store Settings", icon: Settings }
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut(getFirebaseAuth());
      router.push("/admin/login");
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <aside 
      className="hidden md:flex flex-col min-h-screen w-72 border-r"
      style={{ 
        background: '#2D1F3D', 
        borderRight: '1px solid rgba(184,169,217,0.1)' 
      }}
    >
      {/* Logo */}
      <div className="px-6 py-5">
        <Link 
          href="/admin/dashboard" 
          className="italic text-xl"
          style={{ 
            fontFamily: "'Playfair Display', serif", 
            color: '#EDE8FF' 
          }}
        >
          Bake Delight
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-1">
        {links.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: active ? 'white' : '#9B8AAA',
                background: active ? '#7B68B5' : 'transparent'
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.background = 'rgba(184,169,217,0.1)';
                  e.currentTarget.style.color = '#D4CCF0';
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#9B8AAA';
                }
              }}
            >
              <Icon size={18} style={{ color: 'inherit' }} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#9B8AAA',
            background: 'transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(184,169,217,0.1)';
            e.currentTarget.style.color = '#D4CCF0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#9B8AAA';
          }}
        >
          <LogOut size={18} style={{ color: 'inherit' }} />
          Logout
        </button>
      </div>
    </aside>
  );
}
