"use client";

import Link from "next/link";
import { CakeSlice } from "lucide-react";
import { useMemo, useState } from "react";
import CartItem from "@/components/CartItem";
import DeliveryPicker, { isDeliveryTimeValid } from "@/components/DeliveryPicker";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useCart } from "@/context/CartContext";

// SVG Cake Icon Component
const CakeIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <circle cx="60" cy="60" r="58" stroke="#C47A3A" strokeWidth="4" fill="#FEF6EC"/>
    <path d="M60 30C50 30 45 40 45 50C45 60 50 70 60 70C70 70 75 60 75 50C75 40 70 30 60 30Z" fill="#5C2D0A"/>
    <rect x="40" y="70" width="40" height="20" rx="2" fill="#C47A3A"/>
    <path d="M35 90C35 85 40 80 60 80C80 80 85 85 85 90" stroke="#5C2D0A" strokeWidth="3" fill="none"/>
    <circle cx="50" cy="45" r="3" fill="#EAB308"/>
    <circle cx="70" cy="45" r="3" fill="#EAB308"/>
    <circle cx="60" cy="55" r="3" fill="#EAB308"/>
  </svg>
);

export default function CartPage() {
  const { items, total } = useCart();
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
    <div className="page-transition min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="font-playfair text-5xl font-bold chocolate-text">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="mt-16 cream-bg rounded-3xl p-16 text-center">
            <CakeIcon />
            <h2 className="mt-8 font-playfair text-3xl font-bold chocolate-text">Your cart is empty</h2>
            <p className="mt-4 text-lg text-brown">Something delicious is just a click away 🎂</p>
            <Link 
              href="/menu" 
              className="inline-block mt-8 px-10 py-4 chocolate-bg text-white font-semibold rounded-xl transition-all duration-200 hover:brightness-90 cursor-pointer"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-[60%_40%]">
            {/* Cart Items Section */}
            <section className="space-y-4">
              <h2 className="font-playfair text-2xl font-bold chocolate-text mb-6">Order Items</h2>
              {items.map((item) => (
                <CartItem key={item.productId} item={item} />
              ))}
              <div className="bg-white border-2 border-gold rounded-2xl p-6 mt-6">
                <div className="flex items-center justify-between text-2xl font-bold">
                  <span className="chocolate-text">Total</span>
                  <span className="chocolate-text">Rs. {total.toLocaleString("en-PK")}</span>
                </div>
              </div>
            </section>

            {/* Order Summary */}
            <aside className="lg:sticky lg:top-6 h-fit">
              <div className="chocolate-bg rounded-2xl p-8 text-white">
                <h2 className="font-playfair text-2xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-cream-light">Full Name</label>
                    <input 
                      id="name" 
                      className="w-full rounded-xl px-4 py-3 text-chocolate-dark outline-none transition placeholder:text-gray-400"
                      value={customer.name} 
                      onChange={(event) => updateCustomer("name", event.target.value)} 
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-cream-light">Phone Number</label>
                    <input
                      id="phone"
                      className="w-full rounded-xl px-4 py-3 text-chocolate-dark outline-none transition placeholder:text-gray-400"
                      placeholder="03XX XXXXXXX"
                      value={customer.phone}
                      onChange={(event) => updateCustomer("phone", event.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-cream-light">Delivery Address</label>
                    <textarea
                      id="address"
                      className="w-full rounded-xl px-4 py-3 text-chocolate-dark outline-none transition placeholder:text-gray-400 min-h-24"
                      value={customer.address}
                      onChange={(event) => updateCustomer("address", event.target.value)}
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
