import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/context/CartContext";
import SeedDataInitializer from "@/components/SeedDataInitializer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata = {
  title: "Bake Delight",
  description: "Fresh home-baked cakes, cookies, pastries and custom treats."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="min-h-screen bg-background font-body text-textDark antialiased">
        <CartProvider>
          <SeedDataInitializer />
          {children}
          <Toaster position="top-right" />
        </CartProvider>
      </body>
    </html>
  );
}
