"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import DeliveryPicker, { isDeliveryTimeValid } from "@/components/DeliveryPicker";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { FloatingHeart, Sparkle } from "@/components/illustrations/BakeryIllustrations";

// SVG Cake Icon Component - Pastel Lavender
const CakeIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <circle cx="60" cy="60" r="58" stroke="#B8A9D9" strokeWidth="4" fill="#F2F0F8"/>
    <path d="M60 30C50 30 45 40 45 50C45 60 50 70 60 70C70 70 75 60 75 50C75 40 70 30 60 30Z" fill="#7B68B5"/>
    <rect x="40" y="70" width="40" height="20" rx="2" fill="#B8A9D9"/>
    <path d="M35 90C35 85 40 80 60 80C80 80 85 85 85 90" stroke="#7B68B5" strokeWidth="3" fill="none"/>
    <circle cx="50" cy="45" r="3" fill="#F7E07A"/>
    <circle cx="70" cy="45" r="3" fill="#F7E07A"/>
    <circle cx="60" cy="55" r="3" fill="#F7E07A"/>
  </svg>
);

// Cart Item Component - Pastel Theme
const CartItemRow = ({ item, onUpdateQty, onRemove }) => {
  return (
    <div 
      className="flex gap-4 p-4 rounded-xl mb-4"
      style={{ background: 'white', border: '1.5px solid var(--border-soft)' }}
    >
      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 
          className="text-lg font-bold truncate"
          style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-dark)', fontWeight: 700 }}
        >
          {item.name}
        </h3>
        <p 
          className="text-sm truncate mb-2"
          style={{ color: 'var(--text-medium)', fontFamily: "'DM Sans', sans-serif" }}
        >
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span 
            className="text-lg font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--lavender-deep)' }}
          >
            Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
          </span>
          <div className="flex items-center gap-2">
            {/* Quantity Controls - Pastel */}
            <div className="flex items-center rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-soft)' }}>
              <button
                onClick={() => onUpdateQty(item.productId, Math.max(1, item.quantity - 1))}
                className="w-8 h-8 flex items-center justify-center text-sm transition-colors"
                style={{ background: 'var(--bg-section)', color: 'var(--text-dark)' }}
              >
                −
              </button>
              <span 
                className="w-10 h-8 flex items-center justify-center text-sm font-medium"
                style={{ background: 'white', color: 'var(--text-dark)' }}
              >
                {item.quantity}
              </span>
              <button
                onClick={() => onUpdateQty(item.productId, item.quantity + 1)}
                className="w-8 h-8 flex items-center justify-center text-sm transition-colors"
                style={{ background: 'var(--bg-section)', color: 'var(--text-dark)' }}
              >
                +
              </button>
            </div>
            {/* Remove Button */}
            <button
              onClick={() => onRemove(item.productId)}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
              style={{ color: 'var(--peach-primary)' }}
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CartPage() {
  const { items, total, updateQuantity, removeFromCart } = useCart();
  const [customer, setCustomer] = useState({ name: "", phone: "", address: "" });
  const [deliveryAt, setDeliveryAt] = useState("");

  const formComplete = useMemo(
    () =>
      customer.name.trim() &&
      customer.phone.trim() &&
      customer.address.trim() &&
      isDeliveryTimeValid(deliveryAt) &&
      items.length > 0,
    [customer, deliveryAt, items.length]
  );

  const updateCustomer = (field, value) => {
    setCustomer((current) => ({ ...current, [field]: value }));
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-section)' }}>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="relative">
          <h1 
            className="text-[40px] mb-2"
            style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-dark)', fontWeight: 700 }}
          >
            Your Cart
          </h1>
          <p 
            className="text-[14px] mb-12"
            style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
          >
            {items.length > 0 ? `${items.length} item${items.length === 1 ? '' : 's'} in your cart` : 'Your cart is waiting for delicious treats'}
          </p>
          {/* Decorative sparkle */}
          <div className="absolute top-0 right-[30%]">
            <FloatingHeart size={24} color="var(--peach-primary)" />
          </div>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <CakeIcon />
            <h2 
              className="mt-8 text-[32px] mb-3"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-dark)', fontWeight: 700 }}
            >
              Your Cart is Empty
            </h2>
            <p 
              className="text-base mb-8"
              style={{ color: 'var(--text-medium)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Something delicious is just a click away
            </p>
            <Link 
              href="/menu" 
              className="btn-primary-lav inline-flex"
            >
              Browse Our Menu
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[60%_40%]">
            {/* Cart Items Section */}
            <section>
              <h2 
                className="text-xl mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-dark)', fontWeight: 700 }}
              >
                Order Items
              </h2>
              {items.map((item) => (
                <CartItemRow 
                  key={item.productId} 
                  item={item} 
                  onUpdateQty={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </section>

            {/* Order Summary - Lavender Theme */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div 
                className="rounded-[24px] p-7 relative overflow-hidden"
                style={{ background: 'var(--lavender-deep)' }}
              >
                {/* Decorative sparkle */}
                <div className="absolute top-4 right-4 opacity-40">
                  <Sparkle size={20} color="var(--gold-accent)" />
                </div>
                
                <h2 
                  className="text-[28px] mb-6"
                  style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    color: 'white',
                    fontWeight: 700
                  }}
                >
                  Your Order Summary
                </h2>
                
                {/* Line Items */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'DM Sans', sans-serif" }}>
                    <span>Subtotal</span>
                    <span>Rs. {total.toLocaleString("en-PK")}</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'DM Sans', sans-serif" }}>
                    <span>Delivery</span>
                    <span>Free</span>
                  </div>
                </div>
                
                {/* Divider */}
                <div className="h-px mb-4" style={{ background: 'rgba(255, 255, 255, 0.15)' }} />
                
                {/* Total */}
                <div className="flex justify-between mb-6">
                  <span 
                    className="text-lg"
                    style={{ color: 'white', fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  >
                    Total
                  </span>
                  <span 
                    className="text-[32px]"
                    style={{ 
                      fontFamily: "'Playfair Display', serif", 
                      color: 'white',
                      fontWeight: 700
                    }}
                  >
                    Rs. {total.toLocaleString("en-PK")}
                  </span>
                </div>
                
                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label 
                      className="block text-xs uppercase tracking-[1px] mb-2"
                      style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Full Name
                    </label>
                    <input 
                      className="field-lav w-full"
                      value={customer.name} 
                      onChange={(e) => updateCustomer("name", e.target.value)} 
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-xs uppercase tracking-[1px] mb-2"
                      style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Phone Number
                    </label>
                    <input
                      className="field-lav w-full"
                      placeholder="03XX XXXXXXX"
                      value={customer.phone}
                      onChange={(e) => updateCustomer("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-xs uppercase tracking-[1px] mb-2"
                      style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Delivery Address
                    </label>
                    <textarea
                      className="field-lav w-full min-h-[80px]"
                      value={customer.address}
                      onChange={(e) => updateCustomer("address", e.target.value)}
                      placeholder="Enter your delivery address"
                    />
                  </div>
                  <DeliveryPicker value={deliveryAt} onChange={setDeliveryAt} />
                  <WhatsAppButton 
                    items={items} 
                    total={total} 
                    customer={customer} 
                    deliveryAt={deliveryAt} 
                    disabled={!formComplete} 
                  />
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
