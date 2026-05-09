"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, className = "" }) {
  const { addToCart } = useCart();

  return (
    <article 
      className={`group product-card-lav ${className}`}
    >
      {/* Image Container */}
      <div className="relative h-[240px] overflow-hidden" style={{ borderRadius: '20px 20px 0 0' }}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover card-image transition-transform duration-500 ease-out"
          loading="lazy"
        />
        
        {/* Category Badge - Pastel lavender */}
        <span 
          className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[2px] font-medium text-white"
          style={{ background: 'var(--lavender-deep)' }}
        >
          {product.category}
        </span>
      </div>
      
      {/* Card Body */}
      <div className="p-5 lg:p-6">
        {/* Product Name - Playfair Display */}
        <h3 
          className="text-[22px] leading-tight mb-1.5"
          style={{ 
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontStyle: 'italic',
            color: 'var(--text-dark)'
          }}
        >
          {product.name}
        </h3>
        
        {/* Description */}
        <p 
          className="text-[13px] leading-[1.6] mb-4 line-clamp-2"
          style={{ 
            color: 'var(--text-medium)',
            fontFamily: "'DM Sans', sans-serif"
          }}
        >
          {product.description}
        </p>
        
        {/* Price - Gold accent */}
        <div 
          className="text-[24px] font-bold mb-4"
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: 'var(--lavender-deep)'
          }}
        >
          Rs. {Number(product.price).toLocaleString("en-PK")}
        </div>
        
        {/* Add to Cart Button - Lavender theme */}
        <button 
          className="w-full h-[46px] text-white text-[13px] font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300"
          style={{ 
            background: 'var(--lavender-deep)', 
            fontFamily: "'DM Sans', sans-serif",
            borderRadius: '24px'
          }}
          onClick={() => addToCart(product)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--lavender-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--lavender-deep)';
          }}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
