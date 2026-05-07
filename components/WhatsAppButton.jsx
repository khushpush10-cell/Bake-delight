"use client";

import { MessageCircle } from "lucide-react";
import toast from "react-hot-toast";
import { isDeliveryTimeValid } from "@/components/DeliveryPicker";

export default function WhatsAppButton({ items, total, customer, deliveryAt, disabled }) {
  const buildMessage = () => {
    const itemLines = items
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} - Rs. ${item.price.toLocaleString("en-PK")}\n  Image: ${item.imageUrl}`
      )
      .join("\n");

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const deliveryLabel = new Date(deliveryAt).toLocaleString("en-PK", {
      dateStyle: "medium",
      timeStyle: "short"
    });

    return `Hello! I'd like to place an order from Bake Delight 🎂

*Order Details:*
${itemLines}

*Order Summary:*
Total Items: ${totalItems}
Total Amount: Rs. ${total.toLocaleString("en-PK")}

*Customer Details:*
Name: ${customer.name}
Phone: ${customer.phone}
Address: ${customer.address}

*Delivery:*
Date & Time: ${deliveryLabel}

Thank you!`;
  };

  const handleCheckout = () => {
    if (!items.length || disabled || !isDeliveryTimeValid(deliveryAt)) {
      toast.error("Please complete your cart and delivery details.");
      return;
    }

    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923001234567";
    const message = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${number}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={disabled}
      className="inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-xl px-5 font-bold text-white transition-all duration-200 hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
      style={{ backgroundColor: '#25D366' }}
    >
      <MessageCircle size={21} />
      Order via WhatsApp
    </button>
  );
}
