"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, className = "" }) {
  const { addToCart } = useCart();

  return (
    <article 
      className={`group product-card-premium ${className}`}
    >
      {/* Image Container */}
      <div className="relative h-[240px] overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover card-image transition-transform duration-500 ease-out"
          loading="lazy"
        />
        
        {/* Category Badge */}
        <span 
          className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[2px] font-medium text-white"
          style={{ background: 'var(--choc-accent)' }}
        >
          {product.category}
        </span>
      </div>
      
      {/* Card Body */}
      <div className="p-5 lg:p-6">
        {/* Product Name */}
        <h3 
          className="text-[22px] leading-tight mb-1.5"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            color: 'var(--choc-dark)'
          }}
        >
          {product.name}
        </h3>
        
        {/* Description */}
        <p 
          className="text-[13px] leading-[1.6] mb-4 line-clamp-2"
          style={{ 
            color: 'var(--choc-medium)',
            fontFamily: "'DM Sans', sans-serif"
          }}
        >
          {product.description}
        </p>
        
        {/* Price */}
        <div 
          className="text-[24px] font-bold mb-4"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            color: 'var(--choc-primary)'
          }}
        >
          Rs. {Number(product.price).toLocaleString("en-PK")}
        </div>
        
        {/* Add to Cart Button */}
        <button 
          className="w-full h-[46px] rounded-[10px] text-white text-[13px] font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300"
          style={{ background: 'var(--choc-primary)', fontFamily: "'DM Sans', sans-serif" }}
          onClick={() => addToCart(product)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--choc-dark)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--choc-primary)';
          }}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
