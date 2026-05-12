"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { useStoreSettings } from "@/context/StoreSettingsContext";

const GoldSparkle = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 1L8.4 5.6L13 7L8.4 8.4L7 13L5.6 8.4L1 7L5.6 5.6Z" fill="#D4A840" />
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.69 2.58-4.84 1.66-1.31 3.98-1.64 6.05-1.08.01 1.53-.01 3.05-.02 4.58-.91-.33-1.96-.5-2.87.11-1.07.69-1.57 2.08-1.14 3.32.33 1.22 1.59 2.06 2.85 1.87 1.08-.14 2.02-1.06 2.08-2.16.03-1.78.01-3.57.01-5.35.01-4.03.01-8.05.02-12.07z" />
  </svg>
);

const SocialIcon = ({ href, show = true, children, label }) => {
  if (!show || !href) return null;
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[var(--purple-primary)]"
      style={{ border: "1px solid rgba(196,181,232,0.3)", color: "var(--purple-medium)" }}
    >
      {children}
    </a>
  );
};

export default function Footer() {
  const { settings } = useStoreSettings();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const storeName = mounted ? settings.storeName : "Bake Delight";
  const whatsappNumber = mounted ? settings.whatsappNumber : "923001234567";

  return (
    <footer style={{ background: "var(--text-dark)", borderTop: "2px solid var(--purple-medium)" }}>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-20">
        <div className="footer-grid grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <span className="font-heading text-2xl font-bold italic text-white">{storeName}</span>
              <GoldSparkle />
            </Link>
            <p className="max-w-xs text-[13px] leading-[1.8]" style={{ color: "var(--text-muted)" }}>
              {mounted ? settings.footerDescription : "Fresh home-baked cakes, cookies, pastries and custom treats made with love."}
            </p>
            <div className="mt-5 flex gap-3">
              <SocialIcon label="Instagram" href={settings.instagram?.url} show={mounted && settings.instagram?.show}><Instagram size={18} /></SocialIcon>
              <SocialIcon label="Facebook" href={settings.facebook?.url} show={mounted && settings.facebook?.show}><Facebook size={18} /></SocialIcon>
              <SocialIcon label="TikTok" href={settings.tiktok?.url} show={mounted && settings.tiktok?.show}><TikTokIcon className="h-4 w-4" /></SocialIcon>
              <SocialIcon label="Twitter" href={settings.twitter?.url} show={mounted && settings.twitter?.show}><Twitter size={18} /></SocialIcon>
              <SocialIcon label="WhatsApp" href={`https://wa.me/${whatsappNumber}`}><MessageCircle size={18} /></SocialIcon>
            </div>
          </div>

          <FooterColumn title="Quick Links" links={[["Home", "/"], ["Menu", "/menu"], ["Cart", "/cart"], ["How It Works", "/#how-it-works"]]} />
          <FooterColumn title="Categories" links={[["Cakes", "/menu"], ["Cupcakes", "/menu"], ["Cookies", "/menu"], ["Brownies", "/menu"], ["Croissants", "/menu"]]} />

          <div>
            <h4 className="mb-6 text-[10px] font-medium uppercase tracking-[2.5px]" style={{ color: "var(--purple-medium)" }}>Contact Us</h4>
            <ul className="space-y-3 text-[13px]" style={{ color: "var(--text-muted)" }}>
              <li className="flex items-center gap-2"><Phone size={15} /> +{whatsappNumber}</li>
              <li className="flex items-center gap-2"><Mail size={15} /> hello@bakedelight.pk</li>
              <li className="flex items-center gap-2"><MapPin size={15} /> Karachi, Pakistan</li>
              <li className="flex items-center gap-2"><MessageCircle size={15} /> Mon - Sun: 10AM - 8PM</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-white/10 px-6 py-6 text-[12px] lg:px-20" style={{ color: "var(--text-muted)" }}>
        <div className="flex flex-col justify-between gap-3 md:flex-row">
          <p>© {new Date().getFullYear()} {storeName}. All rights reserved.</p>
          <p>Made with ♥ in Pakistan</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="mb-6 text-[10px] font-medium uppercase tracking-[2.5px]" style={{ color: "var(--purple-medium)" }}>{title}</h4>
      <ul className="space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="text-[13px] transition-colors hover:text-white" style={{ color: "var(--text-muted)" }}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
