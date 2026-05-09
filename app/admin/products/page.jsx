"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { collection, deleteDoc, doc, getDocs, limit, query, updateDoc } from "firebase/firestore";
import { Edit, PlusCircle, Trash2, Loader2 } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import ProductModal from "@/components/ProductModal";
import { getFirebaseDb } from "@/lib/firebase";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const db = getFirebaseDb();
        // Use limit(50) to prevent slow loading with large datasets
        const q = query(collection(db, "products"), limit(50));
        const snapshot = await getDocs(q);
        setProducts(snapshot.docs.map((productDoc) => ({ id: productDoc.id, ...productDoc.data() })));
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Failed to load products. Please check your connection.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  const toggleVisibility = async (product) => {
    try {
      await updateDoc(doc(getFirebaseDb(), "products", product.id), { visible: !product.visible });
      toast.success(product.visible ? "Product hidden from store" : "Product now visible on store");
    } catch (error) {
      console.error('Error toggling visibility:', error);
      toast.error('Failed to update product visibility');
    }
  };

  const deleteProduct = async (product) => {
    if (!window.confirm(`Delete ${product.name}?`)) return;
    try {
      await deleteDoc(doc(getFirebaseDb(), "products", product.id));
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete product');
    }
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleModalSave = () => {
    // Products list will update automatically via onSnapshot
    closeModal();
  };

  if (loading) {
    return (
      <AdminShell>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="font-heading text-4xl font-bold" style={{ color: '#2D1F3D' }}>Products</h1>
            <p className="mt-2" style={{ color: '#9B8AAA' }}>Manage all bakery products.</p>
          </div>
        </div>
        <div className="mt-7 flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin" style={{ color: '#7B68B5' }} />
          <span className="ml-3" style={{ color: '#9B8AAA' }}>Loading products...</span>
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="font-heading text-4xl font-bold" style={{ color: '#2D1F3D' }}>Products</h1>
          <p className="mt-2" style={{ color: '#9B8AAA' }}>Manage all bakery products.</p>
        </div>
        <button 
          onClick={openAddModal} 
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-xl transition-all"
          style={{ background: '#7B68B5' }}
        >
          <PlusCircle size={18} />
          Add New Product
        </button>
      </div>

      <div className="mt-7 overflow-hidden rounded-2xl border bg-white" style={{ borderColor: '#E0D8F5' }}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead className="text-sm" style={{ background: '#FAF7FF', color: '#9B8AAA' }}>
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: '#E0D8F5' }}>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="p-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-xl">
                      <Image src={product.imageUrl} alt={product.name} fill sizes="56px" className="object-cover" />
                    </div>
                  </td>
                  <td className="p-4 font-semibold" style={{ color: '#2D1F3D' }}>{product.name}</td>
                  <td className="p-4" style={{ color: '#9B8AAA' }}>{product.category}</td>
                  <td className="p-4 font-bold" style={{ color: '#7B68B5' }}>Rs. {Number(product.price).toLocaleString("en-PK")}</td>
                  <td className="p-4">
                    <button
                      onClick={() => toggleVisibility(product)}
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{
                        background: product.visible ? 'rgba(22,163,74,0.1)' : 'rgba(220,38,38,0.1)',
                        color: product.visible ? '#16a34a' : '#dc2626'
                      }}
                    >
                      {product.visible ? "Live" : "Hidden"}
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEditModal(product)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors"
                        style={{ borderColor: '#E0D8F5', color: '#7B68B5' }}
                        aria-label={`Edit ${product.name}`}
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => deleteProduct(product)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors hover:bg-red-50"
                        style={{ borderColor: '#E0D8F5', color: '#dc2626' }}
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
      
      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={editingProduct}
        onSave={handleModalSave}
      />
    </AdminShell>
  );
}
