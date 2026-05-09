'use client';

import Link from "next/link";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import Footer from "@/components/Footer";
import MenuClient from "@/components/MenuClient";
import Navbar from "@/components/Navbar";
import { 
  LavenderSprig, 
  OrnamentalCorner, 
  GoldDivider, 
  Macaron, 
  CuteCupcake, 
  CakeOnStand, 
  GoldSparkle, 
  SmallFlower,
  OrnamentalFrame,
  FloatingHeart
} from "@/components/illustrations/BakeryIllustrations";

// Section Header Component with Gold Divider
const SectionHeader = ({ tag, title, light = false, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    {tag && (
      <span 
        className="text-[14px] uppercase tracking-[2px] mb-3 block"
        style={{ 
          color: light ? 'var(--peach-primary)' : 'var(--lavender-deep)',
          fontFamily: "'Caveat', cursive"
        }}
      >
        {tag}
      </span>
    )}
    <h2 
      className="text-[clamp(2.5rem,5vw,3.5rem)] leading-tight"
      style={{ 
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        fontStyle: 'italic',
        color: light ? 'white' : 'var(--text-dark)'
      }}
    >
      {title}
    </h2>
    <div className="flex justify-center mt-6">
      <GoldDivider width={180} />
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-main)' }}>
      <Navbar />
      <main>
        {/* SECTION A — Hero with Illustrations */}
        <section 
          className="min-h-screen flex items-center relative overflow-hidden hero-dot-pattern"
          style={{ background: 'var(--bg-main)' }}
        >
          {/* LEFT SIDE Decorative Elements */}
          <div className="deco-element" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.6 }}>
            <OrnamentalCorner size={70} />
          </div>
          <div className="deco-element" style={{ position: 'absolute', bottom: '20px', left: '10px', opacity: 0.5, transform: 'rotate(-15deg)' }}>
            <LavenderSprig size={60} />
          </div>
          {/* Floating hearts on left */}
          <div className="deco-element float-animation" style={{ position: 'absolute', top: '15%', left: '8%', opacity: 0.7 }}>
            <FloatingHeart size={14} color="#F4C2B0" />
          </div>
          <div className="deco-element float-slow" style={{ position: 'absolute', top: '35%', left: '3%', opacity: 0.6 }}>
            <FloatingHeart size={18} color="#F4C2B0" />
          </div>
          <div className="deco-element float-animation" style={{ position: 'absolute', bottom: '30%', left: '15%', opacity: 0.5 }}>
            <FloatingHeart size={22} color="#F4C2B0" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-20 relative z-10">
            <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
              {/* LEFT SIDE — Content */}
              <div className="flex flex-col hero-content relative">
                {/* Pill Tag with Ornamental Frame */}
                <div className="relative w-fit mb-6">
                  <div className="absolute inset-0" style={{ transform: 'translate(-8px, -6px)' }}>
                    <OrnamentalFrame width={200} height={36} />
                  </div>
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[14px] relative z-10"
                    style={{ 
                      background: 'var(--lavender-pale)', 
                      color: 'var(--lavender-deep)',
                      border: '1px solid var(--lavender-soft)',
                      fontFamily: "'Caveat', cursive"
                    }}
                  >
                    ✦ Artisan Home Bakery
                  </div>
                </div>

                {/* Main Heading - Playfair Display */}
                <h1 
                  className="text-[clamp(3rem,6vw,5rem)] leading-[1.05] whitespace-nowrap"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                >
                  <span style={{ color: 'var(--text-dark)' }}>Freshly</span>
                  <br />
                  <span 
                    style={{ 
                      color: 'var(--lavender-deep)',
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic'
                    }}
                  >
                    Baked With
                  </span>
                  <br />
                  <span style={{ color: 'var(--text-dark)' }}>Love</span>
                </h1>
                {/* Floating hearts */}
                <div className="absolute top-4 right-[40%] float-animation">
                  <FloatingHeart size={20} color="var(--peach-primary)" />
                </div>

                {/* Gold Divider */}
                <div className="my-6">
                  <GoldDivider width={120} />
                </div>

                {/* Subtext */}
                <p 
                  className="text-[15px] leading-[1.8] max-w-[380px] mb-8"
                  style={{ color: 'var(--text-medium)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Every cake, cookie, and pastry is crafted from scratch in our home kitchen using the finest ingredients.
                </p>

                {/* Buttons - New pastel style */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link href="/menu" className="btn-primary-lav">
                    Browse Menu
                  </Link>
                  <Link href="#how-it-works" className="btn-secondary-lav">
                    How It Works
                  </Link>
                </div>

                {/* Trust Line */}
                <p 
                  className="text-[12px]"
                  style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  ✓ Fresh daily · ✓ 24hr advance order · ✓ WhatsApp ordering
                </p>
              </div>

              {/* RIGHT SIDE — Illustration Scene */}
              <div className="relative hero-illustration-area hidden lg:flex items-center justify-center">
                <div className="hero-circle-bg relative">
                  {/* Corner ornaments */}
                  <div className="absolute top-2 left-2">
                    <OrnamentalCorner size={50} />
                  </div>
                  <div className="absolute top-2 right-2" style={{ transform: 'rotate(90deg)' }}>
                    <OrnamentalCorner size={50} />
                  </div>
                  <div className="absolute bottom-2 left-2" style={{ transform: 'rotate(-90deg)' }}>
                    <OrnamentalCorner size={50} />
                  </div>
                  <div className="absolute bottom-2 right-2" style={{ transform: 'rotate(180deg)' }}>
                    <OrnamentalCorner size={50} />
                  </div>

                  {/* Main cake on stand */}
                  <div className="float-animation z-10">
                    <CakeOnStand size={180} />
                  </div>

                  {/* Lavender sprigs on sides */}
                  <div className="absolute left-4 top-1/3 opacity-70">
                    <LavenderSprig size={70} />
                  </div>
                  <div className="absolute right-4 top-1/3 opacity-70" style={{ transform: 'scaleX(-1)' }}>
                    <LavenderSprig size={70} />
                  </div>

                  {/* Macarons below */}
                  <div className="absolute bottom-16 left-1/4">
                    <Macaron size={60} color="#C4B5E8" />
                  </div>
                  <div className="absolute bottom-12 right-1/3">
                    <Macaron size={55} color="#F4C2B0" />
                  </div>

                  {/* Cute cupcake on side */}
                  <div className="absolute top-1/3 right-8 float-slow">
                    <CuteCupcake size={80} />
                  </div>

                  {/* Gold sparkles scattered */}
                  <div className="absolute top-8 left-12 sparkle-animation">
                    <GoldSparkle size={12} />
                  </div>
                  <div className="absolute top-16 right-16 sparkle-animation" style={{ animationDelay: '0.5s' }}>
                    <GoldSparkle size={16} />
                  </div>
                  <div className="absolute bottom-20 left-16 sparkle-animation" style={{ animationDelay: '1s' }}>
                    <GoldSparkle size={20} />
                  </div>
                  <div className="absolute top-1/2 right-4 sparkle-animation" style={{ animationDelay: '1.5s' }}>
                    <GoldSparkle size={12} />
                  </div>

                  {/* Small flowers */}
                  <div className="absolute bottom-8 left-8 float-slow">
                    <SmallFlower size={24} />
                  </div>
                  <div className="absolute top-8 right-1/4 float-slow" style={{ animationDelay: '1s' }}>
                    <SmallFlower size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION B — Scrolling Marquee Strip */}
        <section 
          className="overflow-hidden py-3"
          style={{ background: 'var(--peach-primary)', height: '44px' }}
        >
          <div className="marquee-track flex items-center h-full">
            {[...Array(4)].map((_, i) => (
              <span 
                key={i}
                className="mx-8 text-[18px] tracking-[2px]"
                style={{ color: 'var(--text-dark)', fontFamily: "'Caveat', cursive" }}
              >
                ✦ Custom Cakes · Butter Cookies · Fresh Croissants · Cupcakes · Brownies · Made With Love · Order Now ·
              </span>
            ))}
          </div>
        </section>

        {/* SECTION C — Bestsellers */}
        <section 
          className="py-24 relative overflow-hidden"
          style={{ background: 'white' }}
        >
          {/* Decorative elements - far left and right */}
          <div className="deco-element" style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', opacity: 0.12 }}>
            <LavenderSprig size={100} />
          </div>
          <div className="deco-element" style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%) scaleX(-1)', opacity: 0.12 }}>
            <LavenderSprig size={100} />
          </div>
          
          {/* Gold sparkles scattered */}
          <div className="deco-element" style={{ position: 'absolute', top: '15%', left: '10%', opacity: 0.4 }}>
            <GoldSparkle size={14} />
          </div>
          <div className="deco-element" style={{ position: 'absolute', top: '25%', right: '15%', opacity: 0.4 }}>
            <GoldSparkle size={12} />
          </div>
          <div className="deco-element" style={{ position: 'absolute', bottom: '20%', left: '8%', opacity: 0.4 }}>
            <GoldSparkle size={16} />
          </div>
          <div className="deco-element" style={{ position: 'absolute', bottom: '30%', right: '12%', opacity: 0.4 }}>
            <GoldSparkle size={14} />
          </div>
          
          {/* Small flowers near heading */}
          <div className="deco-element" style={{ position: 'absolute', top: '8%', left: '20%', opacity: 0.5 }}>
            <SmallFlower size={20} />
          </div>
          <div className="deco-element" style={{ position: 'absolute', top: '10%', right: '25%', opacity: 0.5 }}>
            <SmallFlower size={20} />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <SectionHeader 
              tag="Our Selection"
              title="Our Bestsellers"
            />
            <MenuClient featuredOnly limitCount={6} />
            <div className="text-center mt-12">
              <Link 
                href="/menu" 
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[1px] transition-all duration-300 group"
                style={{ color: 'var(--lavender-deep)', fontFamily: "'DM Sans', sans-serif" }}
              >
                View Full Menu 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION D — About / Story Strip */}
        <section className="grid lg:grid-cols-2 about-strip">
          {/* Left - Illustration */}
          <div 
            className="relative h-[500px] lg:h-auto flex items-center justify-center p-12"
            style={{ background: 'var(--lavender-pale)' }}
          >
            <div className="relative float-animation">
              {/* Large Cake Illustration */}
              <svg width="200" height="200" viewBox="0 0 80 80">
                <ellipse cx="40" cy="65" rx="30" ry="6" fill="#F2C4A0" opacity="0.4"/>
                <polygon points="40,10 10,65 70,65" fill="#F2C4A0"/>
                <polygon points="40,10 15,58 65,58" fill="#FAE0CC"/>
                <rect x="10" y="57" width="60" height="10" rx="5" fill="#B8A9D9"/>
                <rect x="10" y="50" width="60" height="9" rx="4" fill="#D4CCF0"/>
                <ellipse cx="40" cy="12" rx="8" ry="5" fill="#F7E07A"/>
                <rect x="38" y="2" width="4" height="10" rx="2" fill="#D4A820"/>
              </svg>
              {/* Sparkle decorations */}
              <div className="absolute -top-4 -right-4">
                <GoldSparkle size={20} />
              </div>
              <div className="absolute bottom-8 -left-8">
                <GoldSparkle size={16} />
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div 
            className="flex flex-col justify-center p-12 lg:p-16"
            style={{ background: 'var(--lavender-deep)' }}
          >
            <span 
              className="text-[16px] uppercase tracking-[2px] mb-4"
              style={{ color: 'var(--peach-primary)', fontFamily: "'Caveat', cursive" }}
            >
              ✦ Our Story
            </span>
            <h2 
              className="text-[44px] leading-tight italic mb-6"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                color: 'white',
                fontWeight: 700
              }}
            >
              Baked Fresh,<br />Every Single Day
            </h2>
            <p 
              className="text-[15px] leading-[1.8] mb-6 max-w-md"
              style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Every order we receive is made from scratch in our home kitchen, using the finest ingredients. No shortcuts. No preservatives. Just love in every bite.
            </p>
            
            {/* Decorative Line */}
            <div className="w-16 h-[2px] mb-8" style={{ background: 'var(--gold-accent)' }} />
            
            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <span 
                  className="text-[32px] font-bold block"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    color: 'white'
                  }}
                >
                  200+
                </span>
                <span 
                  className="text-xs uppercase tracking-[1px]"
                  style={{ color: 'var(--peach-soft)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Orders
                </span>
              </div>
              <div>
                <span 
                  className="text-[32px] font-bold block"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    color: 'white'
                  }}
                >
                  5★
                </span>
                <span 
                  className="text-xs uppercase tracking-[1px]"
                  style={{ color: 'var(--peach-soft)', fontFamily: "'DM Sans', sans-serif" }}
                >
                  Rating
                </span>
              </div>
              <div>
                <span 
                  className="text-[32px] font-bold block"
                  style={{ 
                    fontFamily: "'Playfair Display', serif",
                    color: 'white'
                  }}
                >
                  100%
                </span>
                <span 
                  className="text-xs uppercase tracking-[1px]"
                  style={{ color: 'var(--peach-soft)', fontFamily: "'DM Sans', sans-serif" }}
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
          style={{ background: 'var(--bg-section)' }}
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
                  className="rounded-[24px] p-7"
                  style={{ 
                    background: 'white',
                    border: '1.5px solid var(--border-soft)'
                  }}
                >
                  {/* Quote Mark */}
                  <span 
                    className="text-[80px] leading-[0.4] block mb-2"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: 'var(--lavender-soft)'
                    }}
                  >
                    &ldquo;
                  </span>
                  
                  {/* Review Text */}
                  <p 
                    className="text-[17px] leading-[1.7] italic mb-6"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: 'var(--text-dark)'
                    }}
                  >
                    {testimonial.review}
                  </p>
                  
                  {/* Stars - Gold accent */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: 'var(--gold-accent)' }}>★</span>
                    ))}
                  </div>
                  
                  {/* Reviewer */}
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium"
                      style={{ background: 'var(--lavender-primary)' }}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <p 
                        className="text-sm font-medium"
                        style={{ color: 'var(--lavender-deep)', fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {testimonial.name}
                      </p>
                      <p 
                        className="text-xs"
                        style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
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
          className="py-24 relative overflow-hidden how-it-works-bg"
        >
          {/* Decorative subtitle */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="text-center mb-4">
              <span 
                className="text-[18px] tracking-[2px]"
                style={{ color: 'var(--peach-primary)', fontFamily: "'Caveat', cursive" }}
              >
                Simple, Fresh, Delicious
              </span>
            </div>
            <SectionHeader 
              title="How It Works"
              light={true}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 steps-grid">
              {[
                {
                  step: "01",
                  icon: <CuteCupcake size={64} />,
                  title: "Browse & Pick",
                  description: "Choose from our wide selection of freshly baked goods. From cakes to cookies, we have something for everyone."
                },
                {
                  step: "02",
                  icon: (
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--lavender-pale)' }}
                    >
                      <Calendar size={32} style={{ color: 'var(--lavender-deep)' }} />
                    </div>
                  ),
                  title: "Schedule Delivery",
                  description: "Pick your preferred delivery date. We require at least 24 hours notice to ensure everything is baked fresh."
                },
                {
                  step: "03",
                  icon: (
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--lavender-pale)' }}
                    >
                      <Phone size={32} style={{ color: 'var(--lavender-deep)' }} />
                    </div>
                  ),
                  title: "Order on WhatsApp",
                  description: "Send us your order via WhatsApp. We'll confirm all details and arrange delivery to your doorstep."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="relative rounded-[24px] p-9 text-center"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  {/* Corner sparkles */}
                  <div className="absolute top-3 left-3 opacity-30">
                    <GoldSparkle size={12} />
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-30">
                    <GoldSparkle size={12} />
                  </div>
                  
                  {/* Step Number */}
                  <span 
                    className="absolute top-4 right-5 text-[64px] font-bold opacity-25"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: 'var(--gold-accent)'
                    }}
                  >
                    {item.step}
                  </span>
                  
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  
                  {/* Title */}
                  <h3 
                    className="text-[22px] mb-3"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: 'white',
                      fontWeight: 700
                    }}
                  >
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="text-[14px] leading-[1.7]"
                    style={{ 
                      color: 'rgba(255,255,255,0.7)',
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
