import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import MenuClient from "@/components/MenuClient";
import Navbar from "@/components/Navbar";

// Ornamental Divider Component
const OrnamentDivider = ({ light = false }) => (
  <div className="ornament-divider" style={{ background: light ? 'var(--choc-gold)' : 'var(--choc-accent)' }} />
);

// Section Header Component
const SectionHeader = ({ tag, title, light = false, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    {tag && (
      <span 
        className="text-xs uppercase tracking-[2px] mb-4 block"
        style={{ 
          color: light ? 'var(--choc-light)' : 'var(--choc-accent)',
          fontFamily: "'DM Sans', sans-serif"
        }}
      >
        {tag}
      </span>
    )}
    <h2 
      className="text-[clamp(2.5rem,5vw,3.5rem)] leading-tight"
      style={{ 
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 700,
        color: light ? 'var(--choc-ivory)' : 'var(--choc-dark)'
      }}
    >
      {title}
    </h2>
    <div className="flex justify-center mt-6">
      <OrnamentDivider light={light} />
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--choc-cream)' }}>
      <Navbar />
      <main>
        {/* SECTION A — Hero */}
        <section 
          className="min-h-screen flex items-center"
          style={{ background: 'var(--choc-cream)' }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
            <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
              {/* LEFT SIDE — Content */}
              <div className="flex flex-col">
                {/* Pill Tag */}
                <div 
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[2px] font-medium w-fit mb-6"
                  style={{ 
                    background: 'var(--choc-light)', 
                    color: 'var(--choc-primary)',
                    fontFamily: "'DM Sans', sans-serif"
                  }}
                >
                  ✦ Artisan Home Bakery · Est. 2024
                </div>

                {/* Main Heading */}
                <h1 
                  className="text-[clamp(3rem,7vw,5.5rem)] leading-[1.05] whitespace-nowrap"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                >
                  <span style={{ color: 'var(--choc-dark)' }}>Freshly</span>
                  <br />
                  <span 
                    style={{ 
                      color: 'var(--choc-dark)',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: 'italic'
                    }}
                  >
                    Baked With
                  </span>
                  <br />
                  <span style={{ color: 'var(--choc-accent)' }}>Love</span>
                </h1>

                {/* Ornamental Divider */}
                <OrnamentDivider />

                {/* Subtext */}
                <p 
                  className="text-[15px] leading-[1.8] max-w-[380px] mb-8"
                  style={{ color: 'var(--choc-medium)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Every cake, cookie, and pastry is crafted from scratch in our home kitchen using the finest ingredients.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link href="/menu" className="btn-primary-choc">
                    Browse Menu
                  </Link>
                  <Link href="#how-it-works" className="btn-secondary-choc">
                    How It Works
                  </Link>
                </div>

                {/* Trust Line */}
                <p 
                  className="text-[12px]"
                  style={{ color: 'var(--choc-medium)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  ✓ Fresh daily · ✓ 24hr advance order · ✓ WhatsApp ordering
                </p>
              </div>

              {/* RIGHT SIDE — 2x2 Image Mosaic */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-3">
                  {/* Top Left - Taller */}
                  <div className="row-span-2">
                    <div 
                      className="relative h-full min-h-[320px] rounded-[14px] overflow-hidden"
                      style={{ aspectRatio: '3/4' }}
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
                        alt="Chocolate cake"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-white text-xs font-medium">Signature Cakes</span>
                    </div>
                  </div>
                  
                  {/* Top Right */}
                  <div>
                    <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80"
                        alt="Fresh pastries"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-white text-xs font-medium">Pastries</span>
                    </div>
                  </div>
                  
                  {/* Bottom Right */}
                  <div>
                    <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=80"
                        alt="Baked cookies"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-white text-xs font-medium">Cookies</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div 
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-lg"
                  style={{ boxShadow: '0 10px 40px rgba(92, 45, 10, 0.1)' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐</span>
                    <span 
                      className="text-sm font-medium"
                      style={{ color: 'var(--choc-dark)', fontFamily: "'DM Sans', sans-serif" }}
                    >
                      5.0 · 200+ Happy Customers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION B — Scrolling Marquee Strip */}
        <section 
          className="overflow-hidden py-3"
          style={{ background: 'var(--choc-primary)', height: '48px' }}
        >
          <div className="marquee-track flex items-center h-full">
            {[...Array(4)].map((_, i) => (
              <span 
                key={i}
                className="mx-8 text-[13px] uppercase tracking-[3px]"
                style={{ color: 'var(--choc-light)', fontFamily: "'DM Sans', sans-serif" }}
              >
                ✦ Chocolate Cakes · Butter Cookies · Croissants · Custom Orders · Red Velvet · Cupcakes · Brownies · Fresh Daily ·
              </span>
            ))}
          </div>
        </section>

        {/* SECTION C — Bestsellers */}
        <section 
          className="py-24"
          style={{ background: 'var(--choc-ivory)' }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader 
              tag="Our Selection"
              title="Our Bestsellers"
            />
            <MenuClient featuredOnly limitCount={6} />
            <div className="text-center mt-12">
              <Link 
                href="/menu" 
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[1px] transition-all duration-300 group"
                style={{ color: 'var(--choc-accent)', fontFamily: "'DM Sans', sans-serif" }}
              >
                View Full Menu 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION D — About / Story Strip */}
        <section className="grid lg:grid-cols-2">
          {/* Left - Image */}
          <div className="relative h-[500px] lg:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80"
              alt="Baking in kitchen"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right - Content */}
          <div 
            className="flex flex-col justify-center p-12 lg:p-16"
            style={{ background: 'var(--choc-primary)' }}
          >
            <span 
              className="text-xs uppercase tracking-[2px] mb-4"
              style={{ color: 'var(--choc-light)', fontFamily: "'DM Sans', sans-serif" }}
            >
              ✦ Our Story
            </span>
            <h2 
              className="text-[44px] leading-tight italic mb-6"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                color: 'white',
                fontWeight: 700
              }}
            >
              Baked Fresh,<br />Every Single Day
            </h2>
            <p 
              className="text-[15px] leading-[1.8] mb-6 max-w-md"
              style={{ color: 'var(--choc-light)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Every order we receive is made from scratch in our home kitchen, using the finest ingredients. No shortcuts. No preservatives. Just love in every bite.
            </p>
            
            {/* Decorative Line */}
            <div className="w-16 h-[2px] mb-8" style={{ background: 'var(--choc-gold)' }} />
            
            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <span 
                  className="text-[32px] font-bold block"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif",
                    color: 'white'
                  }}
                >
                  200+
                </span>
                <span 
                  className="text-xs uppercase tracking-[1px]"
                  style={{ color: 'var(--choc-light)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Orders
                </span>
              </div>
              <div>
                <span 
                  className="text-[32px] font-bold block"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif",
                    color: 'white'
                  }}
                >
                  5★
                </span>
                <span 
                  className="text-xs uppercase tracking-[1px]"
                  style={{ color: 'var(--choc-light)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Rating
                </span>
              </div>
              <div>
                <span 
                  className="text-[32px] font-bold block"
                  style={{ 
                    fontFamily: "'Cormorant Garamond', serif",
                    color: 'white'
                  }}
                >
                  100%
                </span>
                <span 
                  className="text-xs uppercase tracking-[1px]"
                  style={{ color: 'var(--choc-light)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Fresh
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION E — Testimonials */}
        <section 
          className="py-24"
          style={{ background: 'var(--choc-cream)' }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader 
              tag="Testimonials"
              title="What Our Customers Say"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Ahmed",
                  city: "Karachi",
                  review: "Absolutely delicious cakes! The chocolate cake was moist and perfect for my daughter's birthday. Everyone loved it!",
                  initials: "SA"
                },
                {
                  name: "Michael Khan",
                  city: "Lahore",
                  review: "Best bakery experience I've had. Fresh ingredients, amazing custom designs, and the taste is unmatched. Highly recommend!",
                  initials: "MK"
                },
                {
                  name: "Ayesha Fatima",
                  city: "Islamabad",
                  review: "Ordered cookies for my office party and they were a huge hit! The packaging was beautiful too. Will definitely order again!",
                  initials: "AF"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="rounded-[20px] p-7"
                  style={{ 
                    background: 'white',
                    border: '1px solid var(--choc-light)'
                  }}
                >
                  {/* Quote Mark */}
                  <span 
                    className="text-[80px] leading-[0.5] block mb-2"
                    style={{ 
                      fontFamily: "'Cormorant Garamond', serif",
                      color: 'var(--choc-light)'
                    }}
                  >
                    &ldquo;
                  </span>
                  
                  {/* Review Text */}
                  <p 
                    className="text-[18px] leading-[1.7] italic mb-6"
                    style={{ 
                      fontFamily: "'Cormorant Garamond', serif",
                      color: 'var(--choc-dark)'
                    }}
                  >
                    {testimonial.review}
                  </p>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: 'var(--choc-gold)' }}>★</span>
                    ))}
                  </div>
                  
                  {/* Reviewer */}
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium"
                      style={{ background: 'var(--choc-accent)' }}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <p 
                        className="text-sm font-medium"
                        style={{ color: 'var(--choc-primary)', fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {testimonial.name}
                      </p>
                      <p 
                        className="text-xs"
                        style={{ color: 'var(--choc-medium)', fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {testimonial.city}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION F — How It Works */}
        <section 
          id="how-it-works"
          className="py-24"
          style={{ background: 'var(--choc-darkest)' }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader 
              title="How It Works"
              light={true}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  icon: "🛒",
                  title: "Browse & Pick",
                  description: "Choose from our wide selection of freshly baked goods. From cakes to cookies, we have something for everyone."
                },
                {
                  step: "02",
                  icon: "📅",
                  title: "Schedule Delivery",
                  description: "Pick your preferred delivery date. We require at least 24 hours notice to ensure everything is baked fresh."
                },
                {
                  step: "03",
                  icon: "💬",
                  title: "Order on WhatsApp",
                  description: "Send us your order via WhatsApp. We'll confirm all details and arrange delivery to your doorstep."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="relative rounded-[20px] p-9 text-center"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(196, 122, 58, 0.2)'
                  }}
                >
                  {/* Step Number */}
                  <span 
                    className="absolute top-4 right-5 text-[64px] font-bold opacity-30"
                    style={{ 
                      fontFamily: "'Cormorant Garamond', serif",
                      color: 'var(--choc-gold)'
                    }}
                  >
                    {item.step}
                  </span>
                  
                  {/* Icon */}
                  <div className="text-[40px] mb-4">{item.icon}</div>
                  
                  {/* Title */}
                  <h3 
                    className="text-[24px] mb-3"
                    style={{ 
                      fontFamily: "'Cormorant Garamond', serif",
                      color: 'var(--choc-ivory)',
                      fontWeight: 700
                    }}
                  >
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="text-[14px] leading-[1.7]"
                    style={{ 
                      color: 'var(--choc-medium)',
                      fontFamily: "'DM Sans', sans-serif"
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
