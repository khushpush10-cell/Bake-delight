"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { addDoc, collection, doc, onSnapshot, serverTimestamp, updateDoc } from "firebase/firestore";
import { X, ImagePlus, Save } from "lucide-react";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { getFirebaseDb } from "@/lib/firebase";

const initialState = {
  name: "",
  category: "",
  description: "",
  price: "",
  imageUrl: "",
  visible: true,
  featured: false
};

export default function ProductModal({ isOpen, onClose, product, onSave }) {
  const [form, setForm] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const isEditing = Boolean(product);

  useEffect(() => {
    if (product) {
      setForm({ ...initialState, ...product });
    } else {
      setForm(initialState);
    }
  }, [product]);

  useEffect(() => {
    const db = getFirebaseDb();
    const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
      setCategories(snapshot.docs.map((categoryDoc) => ({ id: categoryDoc.id, ...categoryDoc.data() })));
    });
    return unsubscribe;
  }, []);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      console.log('Starting image upload for:', file.name);
      const url = await uploadToCloudinary(file);
      updateField("imageUrl", url);
      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.error('Image upload error:', error);
      toast.error(`Image upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.category || !form.description || !form.price || !form.imageUrl) {
      toast.error("Please complete all required fields.");
      return;
    }

    setSaving(true);
    try {
      const db = getFirebaseDb();
      const payload = {
        name: form.name.trim(),
        category: form.category,
        description: form.description.trim().slice(0, 150),
        price: Number(form.price),
        imageUrl: form.imageUrl,
        visible: Boolean(form.visible),
        featured: Boolean(form.featured)
      };

      if (isEditing) {
        await updateDoc(doc(db, "products", product.id), payload);
        toast.success("Product updated successfully");
      } else {
        await addDoc(collection(db, "products"), {
          ...payload,
          createdAt: serverTimestamp()
        });
        toast.success("Product added successfully");
      }

      onSave();
      onClose();
    } catch (error) {
      console.error('Product save error:', error);
      toast.error(error.message || "Product save failed.");
    } finally {
      setSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* White modal card */}
      <div className="relative z-10 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            {isEditing ? "Edit Product" : "Add New Product"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={form.category}
                onChange={(event) => updateField("category", event.target.value)}
                required
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Short Description
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-300 px-3 py-2 min-h-28 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                maxLength={150}
                value={form.description}
                onChange={(event) => updateField("description", event.target.value)}
                required
              />
              <p className="mt-1 text-xs text-gray-500">{form.description.length}/150</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price in Rs.
              </label>
              <input
                type="number"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                min="1"
                value={form.price}
                onChange={(event) => updateField("price", event.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Image
              </label>
              <label className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-5 font-semibold text-gray-600 hover:border-gray-400 transition-colors">
                {uploading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 border-t-transparent"></div>
                    <span>Uploading...</span>
                  </>
                ) : (
                  <>
                    <ImagePlus size={20} />
                    <span>Upload Image</span>
                  </>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
              </label>
              {form.imageUrl && (
                <div className="relative mt-4 aspect-video max-w-md overflow-hidden rounded-2xl border border-gray-200">
                  <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 1.414L8.586 10H4a1 1 0 00-1 1v3a1 1 0 001 1h4.586l4.293 4.293a1 1 0 001.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <Image src={form.imageUrl} alt="Product preview" fill className="object-cover" />
                </div>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4">
                <span className="font-medium text-gray-700">Visible on Store</span>
                <input
                  type="checkbox"
                  checked={form.visible}
                  onChange={(event) => updateField("visible", event.target.checked)}
                  className="h-5 w-5 accent-blue-600"
                />
              </label>
              <label className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 p-4">
                <span className="font-medium text-gray-700">Featured Product</span>
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(event) => updateField("featured", event.target.checked)}
                  className="h-5 w-5 accent-blue-600"
                />
              </label>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving || uploading}
                className="flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                <Save size={18} />
                {saving ? "Saving..." : (isEditing ? "Update Product" : "Add Product")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
