"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { isDeliveryTimeValid } from "@/components/DeliveryPicker";
import { useStoreSettings } from "@/context/StoreSettingsContext";

export default function WhatsAppButton({ items, total, customer, deliveryAt, disabled }) {
  const { settings } = useStoreSettings();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const buildMessage = () => {
    const itemLines = items
      .map((item) => `• ${item.quantity}x ${item.name} — Rs. ${(item.price * item.quantity).toLocaleString("en-PK")}\n  Image: ${item.imageUrl}`)
      .join("\n");

    const deliveryLabel = new Date(deliveryAt).toLocaleString("en-PK", {
      dateStyle: "medium",
      timeStyle: "short"
    });

    return `🎂 New Order - ${mounted ? settings.storeName : "Bake Delight"}

Order Details:
${itemLines}

Total: Rs. ${total.toLocaleString("en-PK")}

Customer: ${customer.name}
Phone: ${customer.phone}
Address: ${customer.address}
Delivery: ${deliveryLabel}`;
  };

  const handleCheckout = () => {
    if (!items.length || disabled || !isDeliveryTimeValid(deliveryAt)) {
      toast.error("Please complete your cart and delivery details.");
      return;
    }

    const message = encodeURIComponent(buildMessage());
    const whatsappNumber = mounted ? settings.whatsappNumber : "923001234567";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={disabled}
      className="inline-flex h-[52px] w-full cursor-pointer items-center justify-center gap-3 rounded-xl px-5 font-bold text-white transition-all duration-200 hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle size={21} />
      Order via WhatsApp
    </button>
  );
}
