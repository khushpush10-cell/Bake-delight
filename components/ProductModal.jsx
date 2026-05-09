"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { addDoc, collection, doc, getDocs, serverTimestamp, updateDoc } from "firebase/firestore";
import { X, ImagePlus, Save, Check, Loader2 } from "lucide-react";
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

// Lavender color scheme
const colors = {
  primary: '#7B68B5',
  primaryHover: '#6A5A9E',
  lavenderSoft: '#B8A9D9',
  lavenderPale: '#D4CCF0',
  lavenderPaleBg: '#F5F0FF',
  textDark: '#2D1F3D',
  textMuted: '#9B8AAA',
  border: '#E0D8F5',
  white: '#FFFFFF'
};

export default function ProductModal({ isOpen, onClose, product, onSave }) {
  const [form, setForm] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const isEditing = Boolean(product);

  useEffect(() => {
    if (product) {
      setForm({ ...initialState, ...product });
    } else {
      setForm(initialState);
    }
  }, [product]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const db = getFirebaseDb();
        const snapshot = await getDocs(collection(db, "categories"));
        setCategories(snapshot.docs.map((categoryDoc) => ({ id: categoryDoc.id, ...categoryDoc.data() })));
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Failed to load categories');
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadToCloudinary(file);
      if (url) {
        updateField("imageUrl", url);
        toast.success("Image uploaded successfully!");
      }
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
      toast.error(error.message || "Product save failed. Please check your connection.");
    } finally {
      setSaving(false);
    }
  };

  if (!isOpen) return null;

  // Input styles with lavender theme
  const inputStyle = {
    width: '100%',
    border: `1.5px solid ${colors.border}`,
    borderRadius: '10px',
    padding: '12px',
    fontSize: '14px',
    fontFamily: "'DM Sans', sans-serif",
    outline: 'none',
    transition: 'all 0.2s',
    background: colors.white,
    color: colors.textDark
  };

  const inputFocusStyle = {
    borderColor: colors.lavenderSoft,
    boxShadow: '0 0 0 3px rgba(184,169,217,0.15)'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* White modal card */}
      <div 
        className="relative z-10 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
        style={{ background: colors.white }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
          style={{ background: colors.lavenderPaleBg }}
          onMouseEnter={(e) => e.currentTarget.style.background = colors.lavenderPale}
          onMouseLeave={(e) => e.currentTarget.style.background = colors.lavenderPaleBg}
        >
          <X size={20} style={{ color: colors.textDark }} />
        </button>

        <div className="p-8">
          {/* Modal header with Playfair Display font */}
          <h2 
            className="mb-6 text-2xl font-bold"
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              color: colors.textDark,
              fontSize: '22px'
            }}
          >
            {isEditing ? "Edit Product" : "Add New Product"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Product Name */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: colors.textDark, fontFamily: "'DM Sans', sans-serif" }}
              >
                Product Name
              </label>
              <input
                type="text"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                required
              />
            </div>

            {/* Category */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: colors.textDark, fontFamily: "'DM Sans', sans-serif" }}
              >
                Category
              </label>
              <select
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
                value={form.category}
                onChange={(event) => updateField("category", event.target.value)}
                required
                disabled={loadingCategories}
              >
                <option value="">{loadingCategories ? "Loading..." : "Select category"}</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: colors.textDark, fontFamily: "'DM Sans', sans-serif" }}
              >
                Short Description
              </label>
              <textarea
                style={{ ...inputStyle, minHeight: '112px', resize: 'none' }}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
                maxLength={150}
                value={form.description}
                onChange={(event) => updateField("description", event.target.value)}
                required
              />
              <p className="mt-1 text-xs" style={{ color: colors.textMuted, fontFamily: "'DM Sans', sans-serif" }}>
                {form.description.length}/150
              </p>
            </div>

            {/* Price */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: colors.textDark, fontFamily: "'DM Sans', sans-serif" }}
              >
                Price in Rs.
              </label>
              <input
                type="number"
                style={inputStyle}
                onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
                min="1"
                value={form.price}
                onChange={(event) => updateField("price", event.target.value)}
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: colors.textDark, fontFamily: "'DM Sans', sans-serif" }}
              >
                Product Image
              </label>
              <label 
                className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border-2 border-dashed p-5 font-semibold transition-all"
                style={{ 
                  borderColor: colors.border, 
                  background: colors.lavenderPaleBg,
                  color: colors.textMuted
                }}
              >
                {uploading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" style={{ color: colors.primary }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif" }}>Uploading...</span>
                  </>
                ) : (
                  <>
                    <ImagePlus size={20} style={{ color: colors.primary }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", color: colors.textDark }}>Upload Image</span>
                  </>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={handleUpload} disabled={uploading} />
              </label>
              
              {/* Image Preview with green checkmark */}
              {form.imageUrl && (
                <div 
                  className="relative mt-4 aspect-video max-w-md overflow-hidden rounded-xl"
                  style={{ border: `1px solid ${colors.border}` }}
                >
                  <div 
                    className="absolute top-2 right-2 rounded-full p-1 z-10"
                    style={{ background: '#16a34a' }}
                  >
                    <Check size={16} color="white" />
                  </div>
                  <Image src={form.imageUrl} alt="Product preview" fill className="object-cover" />
                </div>
              )}
            </div>

            {/* Checkboxes */}
            <div className="grid gap-4 sm:grid-cols-2">
              <label 
                className="flex items-center justify-between rounded-xl p-4 cursor-pointer"
                style={{ border: `1px solid ${colors.border}`, background: colors.lavenderPaleBg }}
              >
                <span 
                  className="font-medium"
                  style={{ color: colors.textDark, fontFamily: "'DM Sans', sans-serif" }}
                >
                  Visible on Store
                </span>
                <input
                  type="checkbox"
                  checked={form.visible}
                  onChange={(event) => updateField("visible", event.target.checked)}
                  className="h-5 w-5"
                  style={{ accentColor: colors.lavenderSoft }}
                />
              </label>
              <label 
                className="flex items-center justify-between rounded-xl p-4 cursor-pointer"
                style={{ border: `1px solid ${colors.border}`, background: colors.lavenderPaleBg }}
              >
                <span 
                  className="font-medium"
                  style={{ color: colors.textDark, fontFamily: "'DM Sans', sans-serif" }}
                >
                  Featured Product
                </span>
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(event) => updateField("featured", event.target.checked)}
                  className="h-5 w-5"
                  style={{ accentColor: colors.lavenderSoft }}
                />
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-3 text-sm font-medium rounded-xl transition-all"
                style={{ 
                  background: colors.lavenderPaleBg, 
                  color: colors.primary,
                  border: `1px solid ${colors.lavenderPale}`,
                  fontFamily: "'DM Sans', sans-serif"
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving || uploading}
                className="flex items-center gap-2 px-8 py-3 text-sm font-medium text-white rounded-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ 
                  background: colors.primary,
                  fontFamily: "'DM Sans', sans-serif"
                }}
                onMouseEnter={(e) => {
                  if (!saving && !uploading) {
                    e.currentTarget.style.background = colors.primaryHover;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.primary;
                }}
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
