"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { Edit, PlusCircle, Trash2 } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { getFirebaseDb } from "@/lib/firebase";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirebaseDb();
    return onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts(snapshot.docs.map((productDoc) => ({ id: productDoc.id, ...productDoc.data() })));
    });
  }, []);

  const toggleVisibility = async (product) => {
    await updateDoc(doc(getFirebaseDb(), "products", product.id), { visible: !product.visible });
  };

  const deleteProduct = async (product) => {
    if (!window.confirm(`Delete ${product.name}?`)) return;
    await deleteDoc(doc(getFirebaseDb(), "products", product.id));
    toast.success("Product deleted");
  };

  return (
    <AdminShell>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-heading text-4xl font-bold text-primary">Products</h1>
          <p className="mt-2 text-textMuted">Manage all bakery products.</p>
        </div>
        <Link href="/admin/products/new" className="btn-primary gap-2">
          <PlusCircle size={18} />
          Add New Product
        </Link>
      </div>

      <div className="mt-7 overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead className="bg-background text-sm text-textMuted">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="p-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-xl">
                      <Image src={product.imageUrl} alt={product.name} fill sizes="56px" className="object-cover" />
                    </div>
                  </td>
                  <td className="p-4 font-semibold">{product.name}</td>
                  <td className="p-4 text-textMuted">{product.category}</td>
                  <td className="p-4 font-bold text-primary">Rs. {Number(product.price).toLocaleString("en-PK")}</td>
                  <td className="p-4">
                    <button
                      onClick={() => toggleVisibility(product)}
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        product.visible ? "bg-success/10 text-success" : "bg-error/10 text-error"
                      }`}
                    >
                      {product.visible ? "Live" : "Hidden"}
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/products/edit/${product.id}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-primary"
                        aria-label={`Edit ${product.name}`}
                      >
                        <Edit size={18} />
                      </Link>
                      <button
                        onClick={() => deleteProduct(product)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-error"
                        aria-label={`Delete ${product.name}`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
