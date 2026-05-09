"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
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
      let filteredProducts = sampleProducts.filter((product) => product.visible && (!featuredOnly || product.featured));
      
      // Apply orphan card fixes for homepage (featuredOnly)
      if (featuredOnly) {
        // Always show exactly 3 or 6 products for homepage
        if (filteredProducts.length > 6) {
          filteredProducts = filteredProducts.slice(0, 6);
        } else if (filteredProducts.length > 3) {
          filteredProducts = filteredProducts.slice(0, 3);
        }
      }
      
      setProducts(filteredProducts);
      setLoading(false);
      return undefined;
    }

    const db = getFirebaseDb();
    const productsQuery = featuredOnly
      ? query(collection(db, "products"), where("visible", "==", true), where("featured", "==", true), limit(6))
      : query(collection(db, "products"), where("visible", "==", true));
    const categoriesQuery = query(collection(db, "categories"), orderBy("createdAt", "asc"));

    const fetchData = async () => {
      try {
        const [productsSnapshot, categoriesSnapshot] = await Promise.all([
          getDocs(productsQuery),
          getDocs(categoriesQuery)
        ]);
        
        let products = productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        
        // Apply orphan card fixes for homepage (featuredOnly)
        if (featuredOnly) {
          // Always show exactly 3 or 6 products for homepage
          if (products.length > 6) {
            products = products.slice(0, 6);
          } else if (products.length > 3) {
            products = products.slice(0, 3);
          }
        }
        
        setProducts(products);
        setCategories(categoriesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Fallback to sample data on error
        setCategories(sampleCategories);
        setProducts(
          sampleProducts.filter((product) => product.visible && (!featuredOnly || product.featured))
        );
        setLoading(false);
      }
    };

    fetchData();
  }, [featuredOnly]);

  const visibleProducts = useMemo(() => {
    const filtered =
      activeCategory === "All"
        ? products
        : products.filter((product) => product.category === activeCategory);
    
    let displayProducts = typeof limitCount === "number" ? filtered.slice(0, limitCount) : filtered;
    
    // Fix orphan cards on menu page - hide single card in last row
    if (!featuredOnly && displayProducts.length % 3 === 1 && displayProducts.length > 3) {
      displayProducts = displayProducts.slice(0, displayProducts.length - 1);
    }
    
    return displayProducts;
  }, [activeCategory, limitCount, products, featuredOnly]);

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
    <div className="space-y-8">
      {!featuredOnly && (
        <CategoryFilter categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
      )}
      
      <Suspense fallback={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      }>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} className={getProductGridClass(index)} />
              ))}
            </div>
            
            {/* Product count note for menu page */}
            {!featuredOnly && typeof limitCount === "number" && (
              <p className="mt-4 text-center text-textMuted">
                Showing {visibleProducts.length} products
              </p>
            )}
          </div>
        )}
      </Suspense>

      {!loading && visibleProducts.length === 0 && (
        <div className="rounded-2xl border border-border bg-surface p-10 text-center text-textMuted">
          No products found in this category.
        </div>
      )}
    </div>
  );
}
