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

// SVG Cake Icon Component
const CakeIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <circle cx="60" cy="60" r="58" stroke="#C47A3A" strokeWidth="4" fill="#FEF6EC"/>
    <path d="M60 30C50 30 45 40 45 50C45 60 50 70 60 70C70 70 75 60 75 50C75 40 70 30 60 30Z" fill="#5C2D0A"/>
    <rect x="40" y="70" width="40" height="20" rx="2" fill="#C47A3A"/>
    <path d="M35 90C35 85 40 80 60 80C80 80 85 85 85 90" stroke="#5C2D0A" strokeWidth="3" fill="none"/>
    <circle cx="50" cy="45" r="3" fill="#D4A853"/>
    <circle cx="70" cy="45" r="3" fill="#D4A853"/>
    <circle cx="60" cy="55" r="3" fill="#D4A853"/>
  </svg>
);

// Cart Item Component
const CartItemRow = ({ item, onUpdateQty, onRemove }) => {
  return (
    <div 
      className="flex gap-4 p-4 rounded-xl mb-4"
      style={{ background: 'white', border: '1px solid var(--choc-light)' }}
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
          style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--choc-dark)' }}
        >
          {item.name}
        </h3>
        <p 
          className="text-sm truncate mb-2"
          style={{ color: 'var(--choc-medium)', fontFamily: "'DM Sans', sans-serif" }}
        >
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span 
            className="text-lg font-bold"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--choc-primary)' }}
          >
            Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
          </span>
          <div className="flex items-center gap-2">
            {/* Quantity Controls */}
            <div className="flex items-center rounded-lg overflow-hidden" style={{ border: '1px solid var(--choc-light)' }}>
              <button
                onClick={() => onUpdateQty(item.productId, Math.max(1, item.quantity - 1))}
                className="w-8 h-8 flex items-center justify-center text-sm transition-colors"
                style={{ background: 'var(--choc-cream)', color: 'var(--choc-dark)' }}
              >
                −
              </button>
              <span 
                className="w-10 h-8 flex items-center justify-center text-sm font-medium"
                style={{ background: 'white', color: 'var(--choc-dark)' }}
              >
                {item.quantity}
              </span>
              <button
                onClick={() => onUpdateQty(item.productId, item.quantity + 1)}
                className="w-8 h-8 flex items-center justify-center text-sm transition-colors"
                style={{ background: 'var(--choc-cream)', color: 'var(--choc-dark)' }}
              >
                +
              </button>
            </div>
            {/* Remove Button */}
            <button
              onClick={() => onRemove(item.productId)}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
              style={{ color: 'var(--choc-accent)' }}
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
    <div className="min-h-screen" style={{ background: 'var(--choc-cream)' }}>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <h1 
          className="text-[40px] mb-12"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--choc-dark)', fontWeight: 700 }}
        >
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <CakeIcon />
            <h2 
              className="mt-8 text-[32px] mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--choc-dark)', fontWeight: 700 }}
            >
              Your Cart is Empty
            </h2>
            <p 
              className="text-base mb-8"
              style={{ color: 'var(--choc-medium)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Something delicious is just a click away
            </p>
            <Link 
              href="/menu" 
              className="btn-primary-choc inline-flex"
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
                style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--choc-dark)', fontWeight: 700 }}
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

            {/* Order Summary */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div 
                className="rounded-[20px] p-7"
                style={{ background: 'var(--choc-primary)' }}
              >
                <h2 
                  className="text-[28px] mb-6"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif", 
                    color: 'white',
                    fontWeight: 700
                  }}
                >
                  Your Order Summary
                </h2>
                
                {/* Line Items */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm" style={{ color: 'var(--choc-light)', fontFamily: "'DM Sans', sans-serif" }}>
                    <span>Subtotal</span>
                    <span>Rs. {total.toLocaleString("en-PK")}</span>
                  </div>
                  <div className="flex justify-between text-sm" style={{ color: 'var(--choc-light)', fontFamily: "'DM Sans', sans-serif" }}>
                    <span>Delivery</span>
                    <span>Free</span>
                  </div>
                </div>
                
                {/* Divider */}
                <div className="h-px mb-4" style={{ background: 'rgba(212, 168, 83, 0.3)' }} />
                
                {/* Total */}
                <div className="flex justify-between mb-6">
                  <span 
                    className="text-lg"
                    style={{ color: 'var(--choc-ivory)', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                  >
                    Total
                  </span>
                  <span 
                    className="text-[32px]"
                    style={{ 
                      fontFamily: "'Cormorant Garamond', serif", 
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
                      style={{ color: 'var(--choc-light)', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Full Name
                    </label>
                    <input 
                      className="field-choc w-full"
                      value={customer.name} 
                      onChange={(e) => updateCustomer("name", e.target.value)} 
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-xs uppercase tracking-[1px] mb-2"
                      style={{ color: 'var(--choc-light)', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Phone Number
                    </label>
                    <input
                      className="field-choc w-full"
                      placeholder="03XX XXXXXXX"
                      value={customer.phone}
                      onChange={(e) => updateCustomer("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label 
                      className="block text-xs uppercase tracking-[1px] mb-2"
                      style={{ color: 'var(--choc-light)', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Delivery Address
                    </label>
                    <textarea
                      className="field-choc w-full min-h-[80px]"
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
