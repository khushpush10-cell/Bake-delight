"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { addDoc, collection, doc, onSnapshot, serverTimestamp, updateDoc } from "firebase/firestore";
import { ImagePlus, Save } from "lucide-react";
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

export default function ProductForm({ productId, initialProduct }) {
  const router = useRouter();
  const [form, setForm] = useState(initialProduct ? { ...initialState, ...initialProduct } : initialState);
  const [categories, setCategories] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const db = getFirebaseDb();
    return onSnapshot(collection(db, "categories"), (snapshot) => {
      setCategories(snapshot.docs.map((categoryDoc) => ({ id: categoryDoc.id, ...categoryDoc.data() })));
    });
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

      if (productId) {
        await updateDoc(doc(db, "products", productId), payload);
      } else {
        await addDoc(collection(db, "products"), {
          ...payload,
          createdAt: serverTimestamp()
        });
      }

      toast.success("Product saved successfully");
      router.push("/admin/products");
    } catch (error) {
      toast.error(error.message || "Product save failed.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-card max-w-3xl space-y-5">
      <div>
        <label className="label" htmlFor="name">
          Product Name
        </label>
        <input id="name" className="field" value={form.name} onChange={(event) => updateField("name", event.target.value)} required />
      </div>
      <div>
        <label className="label" htmlFor="category">
          Category
        </label>
        <select
          id="category"
          className="field"
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
        <label className="label" htmlFor="description">
          Short Description
        </label>
        <textarea
          id="description"
          className="field min-h-28"
          maxLength={150}
          value={form.description}
          onChange={(event) => updateField("description", event.target.value)}
          required
        />
        <p className="mt-1 text-xs text-textMuted">{form.description.length}/150</p>
      </div>
      <div>
        <label className="label" htmlFor="price">
          Price in Rs.
        </label>
        <input
          id="price"
          type="number"
          className="field"
          min="1"
          value={form.price}
          onChange={(event) => updateField("price", event.target.value)}
          required
        />
      </div>
      <div>
        <label className="label">Product Image</label>
        <label className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-background p-5 font-semibold text-primary">
          {uploading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary border-t-transparent"></div>
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
          <div className="relative mt-4 aspect-video max-w-md overflow-hidden rounded-2xl border border-border">
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
        <label className="flex items-center justify-between rounded-xl border border-border bg-surface p-4 font-semibold">
          Visible on Store
          <input
            type="checkbox"
            checked={form.visible}
            onChange={(event) => updateField("visible", event.target.checked)}
            className="h-5 w-5 accent-primary"
          />
        </label>
        <label className="flex items-center justify-between rounded-xl border border-border bg-surface p-4 font-semibold">
          Featured Product
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(event) => updateField("featured", event.target.checked)}
            className="h-5 w-5 accent-primary"
          />
        </label>
      </div>
      <button className="btn-primary gap-2" disabled={saving || uploading}>
        <Save size={18} />
        {saving ? "Saving..." : "Save Product"}
      </button>
    </form>
  );
}
