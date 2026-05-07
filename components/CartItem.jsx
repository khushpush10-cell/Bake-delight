"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-surface p-4">
      <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-xl">
        <Image src={item.imageUrl} alt={item.name} fill sizes="60px" className="object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="truncate font-semibold text-textDark">{item.name}</h3>
            <p className="text-sm font-bold text-primary">Rs. {item.price.toLocaleString("en-PK")}</p>
          </div>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-error"
            onClick={() => removeFromCart(item.productId)}
            aria-label={`Remove ${item.name}`}
          >
            <Trash2 size={18} />
          </button>
        </div>
        <div className="mt-3 inline-flex items-center rounded-xl border border-border">
          <button
            className="inline-flex h-9 w-9 items-center justify-center"
            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <span className="w-10 text-center text-sm font-bold">{item.quantity}</span>
          <button
            className="inline-flex h-9 w-9 items-center justify-center"
            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
