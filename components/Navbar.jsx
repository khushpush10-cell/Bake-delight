"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useStoreSettings } from "@/context/StoreSettingsContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/cart", label: "Cart" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { itemCount } = useCart();
  const { settings } = useStoreSettings();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const marqueeText = mounted ? settings.deliveryInfoText : "Free Delivery above Rs. 3,000  ·  Order 24hrs in Advance  ·  Freshly Baked Daily  ·  Made With Love  ·";

  return (
    <>
      {/* Top Announcement Bar with Marquee */}
      <div 
        className="overflow-hidden whitespace-nowrap"
        style={{ background: 'var(--choc-darkest)', height: '36px' }}
      >
        <div className="marquee-track flex items-center h-full">
          {[...Array(4)].map((_, i) => (
            <span 
              key={i} 
              className="mx-8 text-xs tracking-[2px] uppercase"
              style={{ color: 'var(--choc-light)' }}
            >
              ✦ {marqueeText}
            </span>
          ))}
        </div>
      </div>
      
      {/* Main Navbar */}
      <header 
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255, 250, 244, 0.97)' : 'var(--choc-ivory)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(92, 45, 10, 0.08)' : 'none',
          borderBottom: '1px solid var(--choc-light)'
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" style={{ height: '72px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span 
              className="text-[26px] font-bold italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--choc-dark)' }}
            >
              Bake
            </span>
            <span style={{ color: 'var(--choc-accent)' }}>·</span>
            <span 
              className="text-[26px] font-bold italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--choc-dark)' }}
            >
              {mounted ? settings.storeName?.replace('Bake ', '') : 'Delight'}
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-10 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="underline-slide relative text-[13px] font-medium uppercase tracking-[1.5px] transition-colors duration-300"
                style={{ 
                  color: pathname === link.href ? 'var(--choc-primary)' : 'var(--choc-medium)',
                  fontFamily: "'DM Sans', sans-serif"
                }}
              >
                <span className="inline-flex items-center gap-2">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Cart Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/cart"
              className="relative flex items-center gap-2 px-5 py-2 rounded-lg text-white text-[13px] font-medium transition-all duration-300 hover:opacity-90"
              style={{ background: 'var(--choc-primary)' }}
            >
              <ShoppingCart size={16} />
              <span>Cart</span>
              {itemCount > 0 && (
                <span 
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold"
                  style={{ 
                    background: 'var(--choc-gold)', 
                    color: 'var(--choc-dark)'
                  }}
                >
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden transition-all duration-200"
            style={{ 
              border: '1px solid var(--choc-light)',
              color: 'var(--choc-dark)'
            }}
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {open && (
          <div 
            className="fixed inset-0 top-[108px] z-40 md:hidden"
            style={{ background: 'var(--choc-ivory)' }}
          >
            <div className="flex flex-col p-6 gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-lg font-medium"
                  style={{ color: 'var(--choc-dark)' }}
                >
                  {link.label}
                  {link.label === "Cart" && itemCount > 0 && (
                    <span 
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ 
                        background: 'var(--choc-gold)', 
                        color: 'var(--choc-dark)'
                      }}
                    >
                      {itemCount}
                    </span>
                  )}
                </Link>
              ))}
              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 py-3 rounded-lg text-white font-medium"
                style={{ background: 'var(--choc-primary)' }}
              >
                <ShoppingCart size={18} />
                View Cart {itemCount > 0 && `(${itemCount})`}
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
