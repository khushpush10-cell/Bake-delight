"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import AdminShell from "@/components/AdminShell";
import ProductForm from "@/components/ProductForm";
import { getFirebaseDb } from "@/lib/firebase";

export default function EditProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onSnapshot(doc(getFirebaseDb(), "products", params.id), (snapshot) => {
      setProduct(snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null);
      setLoading(false);
    });
  }, [params.id]);

  return (
    <AdminShell>
      <h1 className="mb-7 font-heading text-4xl font-bold text-primary">Edit Product</h1>
      {loading ? (
        <div className="admin-card">Loading product...</div>
      ) : product ? (
        <ProductForm productId={params.id} initialProduct={product} />
      ) : (
        <div className="admin-card text-error">Product not found.</div>
      )}
    </AdminShell>
  );
}
