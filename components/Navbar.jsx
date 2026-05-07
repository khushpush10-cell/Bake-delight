"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/cart", label: "Cart" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="chocolate-bg text-cream-light text-center py-2 px-6 text-sm">
        🎂 Free delivery on orders above Rs. 3,000 · Order 24hrs in advance
      </div>
      
      {/* Main Navbar */}
      <header className={`sticky top-0 z-40 bg-white border-b-2 border-gold transition-all duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-playfair text-3xl font-bold chocolate-text">
            Bake Delight
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-semibold transition-all duration-200 hover:text-chocolate-medium cursor-pointer ${
                  pathname === link.href ? "chocolate-text" : "text-brown"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  {link.label === "Cart" && <ShoppingCart size={18} />}
                  {link.label}
                </span>
                {link.label === "Cart" && itemCount > 0 && (
                  <span className="absolute -right-5 -top-3 rounded-full gold-bg px-2 py-0.5 text-xs text-white">
                    {itemCount}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-gold bg-cream-bg chocolate-text md:hidden transition-all duration-200 hover:bg-gold hover:text-white cursor-pointer"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open && (
          <div className="border-t-2 border-gold bg-cream-light px-6 py-4 md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 font-semibold chocolate-text hover:bg-cream-bg transition-all duration-200 cursor-pointer"
              >
                {link.label}
                {link.label === "Cart" && itemCount > 0 && (
                  <span className="rounded-full gold-bg px-2 py-0.5 text-xs text-white">{itemCount}</span>
                )}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
