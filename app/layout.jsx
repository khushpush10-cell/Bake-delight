import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/context/CartContext";
import { StoreSettingsProvider } from "@/context/StoreSettingsContext";
import SeedDataInitializer from "@/components/SeedDataInitializer";
import StoreClosedBanner from "@/components/StoreClosedBanner";
import "./globals.css";

export const metadata = {
  title: "Bake Delight",
  description: "Fresh home-baked cakes, cookies, pastries and custom treats."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://firestore.googleapis.com" />
        <link rel="dns-prefetch" href="https://firestore.googleapis.com" />
      </head>
      <body className="min-h-screen antialiased">
        <StoreSettingsProvider>
          <StoreClosedBanner />
          <CartProvider>
            <SeedDataInitializer />
            {children}
            <Toaster position="top-right" />
          </CartProvider>
        </StoreSettingsProvider>
      </body>
    </html>
  );
}
