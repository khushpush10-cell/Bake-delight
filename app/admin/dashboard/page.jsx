"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { PlusCircle, Tags } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { getFirebaseDb } from "@/lib/firebase";

export default function AdminDashboardPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirebaseDb();
    const unsubProducts = onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    const unsubCategories = onSnapshot(collection(db, "categories"), (snapshot) => {
      setCategories(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => {
      unsubProducts();
      unsubCategories();
    };
  }, []);

  const stats = useMemo(
    () => [
      { label: "Total Products", value: products.length },
      { label: "Live Products", value: products.filter((product) => product.visible).length },
      { label: "Total Categories", value: categories.length },
      { label: "Hidden Products", value: products.filter((product) => !product.visible).length }
    ],
    [categories.length, products]
  );

  return (
    <AdminShell>
      <h1 className="font-heading text-4xl font-bold text-primary">Welcome back, Bake Delight Admin</h1>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="admin-card">
            <p className="text-sm font-semibold text-textMuted">{stat.label}</p>
            <p className="mt-3 text-4xl font-bold text-primary">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link href="/admin/products/new" className="btn-primary gap-2">
          <PlusCircle size={18} />
          Add New Product
        </Link>
        <Link href="/admin/categories" className="btn-outline gap-2 bg-surface">
          <Tags size={18} />
          Manage Categories
        </Link>
      </div>
    </AdminShell>
  );
}
