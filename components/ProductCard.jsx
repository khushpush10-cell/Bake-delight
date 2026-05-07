"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product, className = "" }) {
  const { addToCart } = useCart();

  return (
    <article className={`group overflow-hidden rounded-2xl border-2 border-gold bg-white shadow-sm transform hover:scale-[1.02] transition-all duration-300 hover:shadow-md ${className}`}>
      <div className="relative h-56 overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <span className="absolute top-3 left-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-white">
          {product.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-playfair text-xl font-bold chocolate-text">{product.name}</h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-brown line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 text-xl font-bold chocolate-text">
          Rs. {Number(product.price).toLocaleString("en-PK")}
        </div>
        <button 
          className="mt-5 w-full chocolate-bg text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:brightness-90 cursor-pointer flex items-center justify-center gap-2" 
          onClick={() => addToCart(product)}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
