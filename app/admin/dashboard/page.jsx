"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { PlusCircle, Tags } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { getFirebaseDb } from "@/lib/firebase";
import toast from "react-hot-toast";

export default function AdminDashboardPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        console.log('Dashboard: Starting fetch...');
        
        const db = getFirebaseDb();
        console.log('Dashboard: Got DB instance');
        
        const [productsSnapshot, categoriesSnapshot] = await Promise.all([
          getDocs(collection(db, "products")),
          getDocs(collection(db, "categories"))
        ]);
        
        console.log('Dashboard: Got snapshots', productsSnapshot.size, categoriesSnapshot.size);
        
        setProducts(productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setCategories(categoriesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error('Dashboard Error:', error);
        toast.error('Failed to load: ' + error.message);
      } finally {
        console.log('Dashboard: Setting loading false');
        setLoading(false);
      }
    };

    // Timeout safety - force stop loading after 10 seconds
    const timeoutId = setTimeout(() => {
      console.log('Dashboard: Timeout reached, forcing loading false');
      setLoading(false);
    }, 10000);

    fetchStats().then(() => clearTimeout(timeoutId));
  }, []);

  const stats = useMemo(
    () => [
      { label: "Total Products", value: products.length },
      { label: "Live Products", value: products.filter((product) => product.visible).length },
      { label: "Hidden Products", value: products.filter((product) => !product.visible).length },
      { label: "Total Categories", value: categories.length }
    ],
    [categories.length, products]
  );

  if (loading) {
    return (
      <AdminShell>
        <h1 className="font-heading text-4xl font-bold" style={{ color: '#2D1F3D' }}>Welcome back, Bake Delight Admin</h1>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="admin-card animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
              <div className="h-10 bg-gray-200 rounded w-16"></div>
            </div>
          ))}
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <h1 className="font-heading text-4xl font-bold" style={{ color: '#2D1F3D' }}>Welcome back, Bake Delight Admin</h1>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="admin-card" style={{ borderColor: '#E0D8F5' }}>
            <p className="text-sm font-semibold" style={{ color: '#9B8AAA' }}>{stat.label}</p>
            <p className="mt-3 text-4xl font-bold" style={{ color: '#7B68B5' }}>{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link 
          href="/admin/products" 
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-xl transition-all"
          style={{ background: '#7B68B5' }}
        >
          <PlusCircle size={18} />
          Add New Product
        </Link>
        <Link 
          href="/admin/categories" 
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-xl transition-all border"
          style={{ background: 'white', color: '#7B68B5', borderColor: '#E0D8F5' }}
        >
          <Tags size={18} />
          Manage Categories
        </Link>
      </div>
    </AdminShell>
  );
}
