import Link from "next/link";
import { Instagram, Facebook, MessageCircle, Phone, MapPin, Cake } from "lucide-react";

export default function Footer() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923001234567";

  return (
    <footer className="border-t-2 border-gold" style={{ backgroundColor: '#2C1000' }}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cake className="w-8 h-8 text-gold" />
              <h2 className="font-playfair text-3xl font-bold text-white">Bake Delight</h2>
            </div>
            <p className="text-cream-light leading-relaxed mb-6">
              Fresh home-baked cakes, cookies, pastries and custom treats made with love.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full gold-bg flex items-center justify-center text-chocolate-dark hover:brightness-90 transition-all duration-200 cursor-pointer"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full gold-bg flex items-center justify-center text-chocolate-dark hover:brightness-90 transition-all duration-200 cursor-pointer"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={`https://wa.me/${number}`}
                className="w-10 h-10 rounded-full gold-bg flex items-center justify-center text-chocolate-dark hover:brightness-90 transition-all duration-200 cursor-pointer"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-cream-light hover:text-gold transition-colors duration-200 cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-cream-light hover:text-gold transition-colors duration-200 cursor-pointer">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-cream-light hover:text-gold transition-colors duration-200 cursor-pointer">
                  Cart
                </Link>
              </li>
              <li>
                <a href="#how-to-order" className="text-cream-light hover:text-gold transition-colors duration-200 cursor-pointer">
                  How to Order
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/menu?category=Cakes" className="text-cream-light hover:text-gold transition-colors duration-200 cursor-pointer">
                  Cakes
                </Link>
              </li>
              <li>
                <Link href="/menu?category=Cookies" className="text-cream-light hover:text-gold transition-colors duration-200 cursor-pointer">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/menu?category=Pastries" className="text-cream-light hover:text-gold transition-colors duration-200 cursor-pointer">
                  Pastries
                </Link>
              </li>
              <li>
                <Link href="/menu?category=Cupcakes" className="text-cream-light hover:text-gold transition-colors duration-200 cursor-pointer">
                  Cupcakes
                </Link>
              </li>
              <li>
                <Link href="/menu?category=Brownies" className="text-cream-light hover:text-gold transition-colors duration-200 cursor-pointer">
                  Brownies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-gold" />
                <a 
                  href={`https://wa.me/${number}`}
                  className="text-cream-light hover:text-gold transition-colors duration-200 cursor-pointer"
                >
                  +{number}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-cream-light">+{number}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <span className="text-cream-light leading-relaxed">
                  Delivery available across Karachi and surrounding areas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold py-6">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-cream-light text-sm">
            Copyright {new Date().getFullYear()} Bake Delight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
