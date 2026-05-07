"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import ProductSkeleton from "@/components/ProductSkeleton";
import { getFirebaseDb, isFirebaseConfigured } from "@/lib/firebase";
import { sampleCategories, sampleProducts } from "@/lib/sampleData";

export default function MenuClient({ featuredOnly = false, limitCount }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setCategories(sampleCategories);
      setProducts(
        sampleProducts.filter((product) => product.visible && (!featuredOnly || product.featured))
      );
      setLoading(false);
      return undefined;
    }

    const db = getFirebaseDb();
    const productsQuery = featuredOnly
      ? query(collection(db, "products"), where("visible", "==", true), where("featured", "==", true))
      : query(collection(db, "products"), where("visible", "==", true));
    const categoriesQuery = query(collection(db, "categories"), orderBy("createdAt", "asc"));

    const useFallbackData = () => {
      setCategories(sampleCategories);
      setProducts(
        sampleProducts.filter((product) => product.visible && (!featuredOnly || product.featured))
      );
      setLoading(false);
    };

    const unsubscribeProducts = onSnapshot(
      productsQuery,
      (snapshot) => {
        const fetchedProducts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(
          fetchedProducts.length
            ? fetchedProducts
            : sampleProducts.filter((product) => product.visible && (!featuredOnly || product.featured))
        );
        setLoading(false);
      },
      useFallbackData
    );
    const unsubscribeCategories = onSnapshot(
      categoriesQuery,
      (snapshot) => {
        const fetchedCategories = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCategories(fetchedCategories.length ? fetchedCategories : sampleCategories);
      },
      useFallbackData
    );

    return () => {
      unsubscribeProducts();
      unsubscribeCategories();
    };
  }, [featuredOnly]);

  const visibleProducts = useMemo(() => {
    const filtered =
      activeCategory === "All"
        ? products
        : products.filter((product) => product.category === activeCategory);
    return typeof limitCount === "number" ? filtered.slice(0, limitCount) : filtered;
  }, [activeCategory, limitCount, products]);

  const getProductGridClass = (index) => {
    const total = visibleProducts.length;
    const isLastTwo = index >= total - 2;
    
    // Handle orphan cards - if last row has 1 or 2 cards, center them
    if (total % 3 === 1 && index === total - 1) {
      return "col-span-full max-w-sm mx-auto";
    }
    
    if (total % 3 === 2 && isLastTwo) {
      return "max-w-sm";
    }
    
    return "";
  };

  return (
    <div>
      {!featuredOnly && (
        <CategoryFilter categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
      )}

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: featuredOnly ? 4 : 6 }).map((_, index) => <ProductSkeleton key={index} />)
          : visibleProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} className={getProductGridClass(index)} />
            ))}
      </div>

      {!loading && visibleProducts.length === 0 && (
        <div className="rounded-2xl border border-border bg-surface p-10 text-center text-textMuted">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
