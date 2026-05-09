"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, serverTimestamp } from "firebase/firestore";
import { Plus, Trash2 } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { getFirebaseDb } from "@/lib/firebase";

export default function AdminCategoriesPage() {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
    
    try {
      console.log('Adding category:', trimmed);
      await addDoc(collection(getFirebaseDb(), "categories"), {
        name: trimmed,
        createdAt: serverTimestamp()
      });
      console.log('Category added successfully');
      setName("");
      toast.success("Category added successfully!");
    } catch (error) {
      console.error('Category add error:', error);
      console.error('Error details:', error.code, error.message);
      toast.error(`Failed to add category: ${error.message}`);
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
    await deleteDoc(doc(getFirebaseDb(), "categories", category.id));
    toast.success("Category deleted");
  };

  return (
    <AdminShell>
      <h1 className="font-heading text-4xl font-bold text-primary">Categories</h1>
      <form onSubmit={addCategory} className="admin-card mt-7 flex flex-col gap-3 sm:flex-row">
        <input 
          className="field" 
          value={name} 
          onChange={(event) => setName(event.target.value)} 
          placeholder="Category name"
          onKeyPress={handleKeyPress}
        />
        <button type="submit" className="btn-primary gap-2 sm:w-44">
          <Plus size={18} />
          Add
        </button>
      </form>

      <div className="admin-card mt-6">
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between rounded-xl border border-border p-4">
              <div>
                <h2 className="font-semibold">{category.name}</h2>
                <p className="text-sm text-textMuted">{productCounts[category.name] || 0} products assigned</p>
              </div>
              <button
                onClick={() => deleteCategory(category)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-error"
                aria-label={`Delete ${category.name}`}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
