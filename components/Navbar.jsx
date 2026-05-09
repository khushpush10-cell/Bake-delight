"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useStoreSettings } from "@/context/StoreSettingsContext";
import { Sparkle } from "@/components/illustrations/BakeryIllustrations";

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
        style={{ background: 'var(--lavender-deep)', height: '36px' }}
      >
        <div className="marquee-track flex items-center h-full">
          {[...Array(4)].map((_, i) => (
            <span 
              key={i} 
              className="mx-8 text-[11px] tracking-[2px] uppercase"
              style={{ color: 'white' }}
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
          background: scrolled ? 'rgba(255, 255, 255, 0.97)' : 'white',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 4px 24px rgba(123, 104, 181, 0.1)' : 'none',
          borderBottom: '2px solid var(--lavender-pale)'
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" style={{ height: '70px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span 
              className="text-[24px] font-bold italic"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--lavender-deep)' }}
            >
              Bake
            </span>
            <Sparkle size={18} color="var(--gold-accent)" />
            <span 
              className="text-[24px] font-bold italic"
              style={{ fontFamily: "'Playfair Display', serif", color: 'var(--lavender-deep)' }}
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
                  color: pathname === link.href ? 'var(--lavender-deep)' : 'var(--text-medium)',
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
              className="relative flex items-center gap-2 px-6 py-2 text-white text-[13px] font-medium transition-all duration-300"
              style={{ 
                background: 'var(--lavender-deep)', 
                borderRadius: '24px'
              }}
            >
              <ShoppingCart size={16} />
              <span>Cart</span>
              {itemCount > 0 && (
                <span 
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold"
                  style={{ 
                    background: 'var(--gold-accent)', 
                    color: 'var(--text-dark)'
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
              border: '1.5px solid var(--lavender-pale)',
              color: 'var(--lavender-deep)'
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
            className="fixed inset-0 top-[106px] z-40 md:hidden"
            style={{ background: 'white' }}
          >
            <div className="flex flex-col p-6 gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-lg font-medium"
                  style={{ color: 'var(--text-dark)' }}
                >
                  {link.label}
                  {link.label === "Cart" && itemCount > 0 && (
                    <span 
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ 
                        background: 'var(--gold-accent)', 
                        color: 'var(--text-dark)'
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
                className="mt-4 flex items-center justify-center gap-2 py-3 text-white font-medium"
                style={{ 
                  background: 'var(--lavender-deep)',
                  borderRadius: '24px'
                }}
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
