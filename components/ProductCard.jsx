"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
// Inline SVG components
const GoldSparkle = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M7 1L8.4 5.6L13 7L8.4 8.4L7 13L5.6 8.4L1 7L5.6 5.6Z" fill="#D4A840"/>
  </svg>
);

const SmallFlower = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 30 30" fill="none">
    <ellipse cx="15" cy="8" rx="4" ry="6" fill="#F4C2B0" opacity="0.9"/>
    <ellipse cx="22" cy="15" rx="6" ry="4" fill="#F4C2B0" opacity="0.9"/>
    <ellipse cx="15" cy="22" rx="4" ry="6" fill="#FAE0D8" opacity="0.9"/>
    <ellipse cx="8" cy="15" rx="6" ry="4" fill="#FAE0D8" opacity="0.9"/>
    <circle cx="15" cy="15" r="4" fill="#D4A840" opacity="0.8"/>
    <circle cx="15" cy="15" r="2.5" fill="#F7E07A"/>
  </svg>
);

export default function ProductCard({ product, className = "" }) {
  const { addToCart } = useCart();

  return (
    <article 
      className={`group product-card-lav product-card-content relative ${className}`}
    >
      {/* Small flower in top-right corner */}
      <div className="absolute top-2 right-2 z-10" style={{ opacity: 0.4 }}>
        <SmallFlower size={16} />
      </div>
      
      {/* Image Container */}
      <div className="relative h-[260px] overflow-hidden" style={{ borderRadius: '20px 20px 0 0' }}>
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
          className="absolute left-12 top-12 px-3 py-1 rounded-full text-[10px] uppercase tracking-[2px] font-medium text-white"
          style={{ background: 'var(--purple-primary)' }}
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
            color: 'var(--text-muted)',
            fontFamily: "'DM Sans', sans-serif"
          }}
        >
          {product.description}
        </p>
        
        {/* Price with gold sparkle */}
        <div className="flex items-center gap-2 mb-4">
          <div 
            className="text-[24px] font-bold"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              color: 'var(--purple-primary)'
            }}
          >
            Rs. {Number(product.price).toLocaleString("en-PK")}
          </div>
          <div style={{ opacity: 0.7 }}>
            <GoldSparkle size={12} />
          </div>
        </div>
        
        {/* Add to Cart Button - Lavender theme */}
        <button 
          className="w-full h-[48px] text-white text-[13px] font-medium uppercase tracking-[1px] flex items-center justify-center gap-2 transition-all duration-300"
          style={{ 
            background: 'var(--purple-primary)', 
            fontFamily: "'DM Sans', sans-serif",
            borderRadius: '8px'
          }}
          onClick={() => addToCart(product)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--purple-deep)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--purple-primary)';
          }}
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
