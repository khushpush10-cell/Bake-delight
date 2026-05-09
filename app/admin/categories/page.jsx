"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp } from "firebase/firestore";
import { Plus, Trash2, Loader2 } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { getFirebaseDb } from "@/lib/firebase";

export default function AdminCategoriesPage() {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const db = getFirebaseDb();
        const [categoriesSnapshot, productsSnapshot] = await Promise.all([
          getDocs(collection(db, "categories")),
          getDocs(collection(db, "products"))
        ]);
        
        setCategories(categoriesSnapshot.docs.map((categoryDoc) => ({ id: categoryDoc.id, ...categoryDoc.data() })));
        setProducts(productsSnapshot.docs.map((productDoc) => ({ id: productDoc.id, ...productDoc.data() })));
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to load data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const productCounts = useMemo(() => {
    return products.reduce((counts, product) => {
      counts[product.category] = (counts[product.category] || 0) + 1;
      return counts;
    }, {});
  }, [products]);

  const addCategory = async (event) => {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      toast.error("Please enter a category name");
      return;
    }
    
    setIsAdding(true);
    try {
      await addDoc(collection(getFirebaseDb(), "categories"), {
        name: trimmed,
        createdAt: serverTimestamp()
      });
      setName("");
      toast.success("Category added successfully!");
    } catch (error) {
      console.error('Category add error:', error);
      toast.error(`Failed to add category: ${error.message}`);
    } finally {
      setIsAdding(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addCategory(event);
    }
  };

  const deleteCategory = async (category) => {
    if (productCounts[category.name]) {
      toast.error("Cannot delete a category that has products assigned to it.");
      return;
    }
    try {
      await deleteDoc(doc(getFirebaseDb(), "categories", category.id));
      toast.success("Category deleted successfully");
    } catch (error) {
      console.error('Error deleting category:', error);
      toast.error('Failed to delete category');
    }
  };

  if (loading) {
    return (
      <AdminShell>
        <h1 className="font-heading text-4xl font-bold" style={{ color: '#2D1F3D' }}>Categories</h1>
        <div className="mt-7 flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin" style={{ color: '#7B68B5' }} />
          <span className="ml-3" style={{ color: '#9B8AAA' }}>Loading categories...</span>
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <h1 className="font-heading text-4xl font-bold" style={{ color: '#2D1F3D' }}>Categories</h1>
      
      {/* Add Category Form */}
      <form onSubmit={addCategory} className="mt-7 flex flex-col gap-3 sm:flex-row">
        <input 
          value={name} 
          onChange={(event) => setName(event.target.value)} 
          placeholder="Category name"
          onKeyPress={handleKeyPress}
          className="flex-1 px-4 py-3 text-sm rounded-xl outline-none transition-all"
          style={{ 
            border: '1.5px solid #E0D8F5',
            background: 'white',
            color: '#2D1F3D',
            fontFamily: "'DM Sans', sans-serif"
          }}
        />
        <button 
          type="submit" 
          disabled={isAdding}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white rounded-xl transition-all disabled:opacity-60"
          style={{ background: '#7B68B5' }}
        >
          {isAdding ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Plus size={18} />
          )}
          Add
        </button>
      </form>

      {/* Categories List */}
      <div className="mt-6 space-y-3">
        {categories.length === 0 ? (
          <p className="text-center py-12" style={{ color: '#9B8AAA' }}>
            No categories yet. Add your first category above.
          </p>
        ) : (
          categories.map((category) => (
            <div 
              key={category.id} 
              className="flex items-center justify-between rounded-xl p-4 bg-white"
              style={{ border: '1px solid #E0D8F5' }}
            >
              <div>
                <h2 
                  className="font-medium text-base"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#2D1F3D' }}
                >
                  {category.name}
                </h2>
                <p 
                  className="text-xs mt-1"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#9B8AAA' }}
                >
                  {productCounts[category.name] || 0} products assigned
                </p>
              </div>
              <button
                onClick={() => deleteCategory(category)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors hover:bg-red-50"
                style={{ borderColor: '#E0D8F5', color: '#dc2626' }}
                aria-label={`Delete ${category.name}`}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </AdminShell>
  );
}
