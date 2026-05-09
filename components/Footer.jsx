"use client";

import Link from "next/link";
import { Instagram, Facebook, MessageCircle, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { useStoreSettings } from "@/context/StoreSettingsContext";
import { LavenderSprig, FloatingHeart } from "@/components/illustrations/BakeryIllustrations";

// Gold Sparkle inline
const GoldSparkle = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M7 1L8.4 5.6L13 7L8.4 8.4L7 13L5.6 8.4L1 7L5.6 5.6Z" fill="#D4A840"/>
  </svg>
);

// TikTok SVG Icon Component
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.69 2.58-4.84 1.66-1.31 3.98-1.64 6.05-1.08.01 1.53-.01 3.05-.02 4.58-.91-.33-1.96-.5-2.87.11-1.07.69-1.57 2.08-1.14 3.32.33 1.22 1.59 2.06 2.85 1.87 1.08-.14 2.02-1.06 2.08-2.16.03-1.78.01-3.57.01-5.35.01-4.03.01-8.05.02-12.07z"/>
  </svg>
);

const SocialIcon = ({ href, children, show }) => {
  if (!show || !href) return null;
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--purple-primary)]"
      style={{ 
        border: '1.5px solid var(--purple-medium)',
        color: 'var(--purple-soft)'
      }}
    >
      {children}
    </a>
  );
};

export default function Footer() {
  const { settings } = useStoreSettings();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bg relative overflow-hidden">
      {/* Large lavender sprig decorations - far edges */}
      <div className="deco-element" style={{ position: 'absolute', right: '-40px', bottom: '10%', opacity: 0.05 }}>
        <LavenderSprig size={160} />
      </div>
      <div className="deco-element" style={{ position: 'absolute', left: '-30px', top: '20%', opacity: 0.04 }}>
        <LavenderSprig size={140} />
      </div>
      
      {/* Top border - purple accent */}
      <div style={{ borderTop: '2px solid var(--purple-medium)' }} />
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 - Brand */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <h3 
                className="text-2xl font-bold italic"
                style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  color: 'white'
                }}
              >
                {mounted ? settings.storeName : "Bake Delight"}
              </h3>
              <div className="opacity-50">
                <LavenderSprig size={40} />
              </div>
            </div>
            <p 
              className="text-sm leading-relaxed mb-4"
              style={{ 
                color: 'var(--text-muted)',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              {mounted ? settings.footerDescription : "Fresh home-baked cakes, cookies, pastries and custom treats made with love."}
            </p>
            {/* Floating hearts near tagline */}
            <div className="flex gap-2 mb-4">
              <FloatingHeart size={14} color="#F4C2B0" />
              <FloatingHeart size={14} color="#F4C2B0" />
            </div>
            <div className="flex gap-3">
              <SocialIcon 
                href={mounted ? settings.instagram?.url : null}
                show={mounted && settings.instagram?.show}
              >
                <Instagram size={18} />
              </SocialIcon>
              <SocialIcon 
                href={mounted ? settings.facebook?.url : null}
                show={mounted && settings.facebook?.show}
              >
                <Facebook size={18} />
              </SocialIcon>
              <SocialIcon 
                href={mounted ? settings.tiktok?.url : null}
                show={mounted && settings.tiktok?.show}
              >
                <TikTokIcon className="w-4 h-4" />
              </SocialIcon>
              <SocialIcon 
                href={mounted ? settings.twitter?.url : null}
                show={mounted && settings.twitter?.show}
              >
                <Twitter size={18} />
              </SocialIcon>
              <a 
                href={`https://wa.me/${mounted ? settings.whatsappNumber : "923001234567"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--purple-primary)]"
                style={{ 
                  border: '1.5px solid var(--purple-medium)',
                  color: 'var(--purple-soft)'
                }}
              >
                <MessageCircle size={18} />
              </a>
            </div>
            {/* Decorative sparkle */}
            <div className="absolute -top-2 -right-2">
              <GoldSparkle size={12} />
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 
              className="text-xs uppercase tracking-[2px] mb-6"
              style={{ 
                color: 'var(--purple-medium)',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/menu" 
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  href="/cart" 
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Categories */}
          <div>
            <h4 
              className="text-xs uppercase tracking-[2px] mb-6"
              style={{ 
                color: 'var(--purple-medium)',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500
              }}
            >
              Categories
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/menu?category=Cakes" 
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Cakes
                </Link>
              </li>
              <li>
                <Link 
                  href="/menu?category=Cookies" 
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link 
                  href="/menu?category=Pastries" 
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Pastries
                </Link>
              </li>
              <li>
                <Link 
                  href="/menu?category=Cupcakes" 
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Cupcakes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="relative">
            <h4 
              className="text-xs uppercase tracking-[2px] mb-6"
              style={{ 
                color: 'var(--purple-medium)',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500
              }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <a 
                href={`https://wa.me/${mounted ? settings.whatsappNumber : "923001234567"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-medium transition-colors duration-200"
                style={{ color: 'white', fontFamily: "'DM Sans', sans-serif" }}
              >
                +{mounted ? settings.whatsappNumber : "923001234567"}
              </a>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
              >
                Delivery available across Karachi and surrounding areas
              </p>
            </div>
            {/* Decorative sparkle */}
            <div className="absolute -bottom-2 -right-4">
              <GoldSparkle size={12} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="max-w-7xl mx-auto px-6 lg:px-20 py-6"
        style={{ borderTop: '1px solid rgba(184, 169, 217, 0.15)' }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p 
            className="text-xs"
            style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
          >
            © {currentYear} {mounted ? settings.storeName : "Bake Delight"}. All rights reserved.
          </p>
          <p 
            className="text-xs"
            style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
          >
            Made with ♥ in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
