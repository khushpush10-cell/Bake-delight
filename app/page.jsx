import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import MenuClient from "@/components/MenuClient";
import Navbar from "@/components/Navbar";
import { Sparkle, FloatingHeart, WheatSprig, Cookie } from "@/components/illustrations/BakeryIllustrations";

// Ornamental Divider Component - Pastel
const OrnamentDivider = ({ light = false }) => (
  <div className="ornament-divider" style={{ background: light ? 'var(--gold-accent)' : 'var(--lavender-primary)' }} />
);

// Section Header Component - Pastel
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
      <OrnamentDivider light={light} />
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
          className="min-h-screen flex items-center relative overflow-hidden pattern-dots"
          style={{ background: 'var(--bg-main)' }}
        >
          {/* Decorative Illustrations */}
          <div className="deco-illustration top-20 right-[15%] opacity-40">
            <WheatSprig size={80} />
          </div>
          <div className="deco-illustration bottom-32 left-[5%] opacity-30" style={{ transform: 'rotate(-15deg)' }}>
            <Cookie size={50} />
          </div>
          <div className="deco-illustration top-[30%] right-[8%] opacity-50">
            <Sparkle size={24} color="var(--gold-accent)" />
          </div>
          <div className="deco-illustration bottom-[25%] left-[8%] opacity-40">
            <Sparkle size={16} color="var(--lavender-primary)" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-20 relative z-10">
            <div className="grid lg:grid-cols-[55%_45%] gap-16 items-center">
              {/* LEFT SIDE — Content */}
              <div className="flex flex-col hero-left">
                {/* Pill Tag - Caveat font */}
                <div 
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[14px] w-fit mb-6"
                  style={{ 
                    background: 'var(--lavender-pale)', 
                    color: 'var(--lavender-deep)',
                    border: '1px solid var(--lavender-soft)',
                    fontFamily: "'Caveat', cursive"
                  }}
                >
                  ✦ Artisan Home Bakery
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

                {/* Ornamental Divider */}
                <OrnamentDivider />

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
              <div className="relative hero-illustration float-animation hidden lg:flex items-center justify-center">
                <div 
                  className="relative w-[420px] h-[420px] flex items-center justify-center"
                  style={{ borderRadius: '50%', background: 'var(--lavender-pale)' }}
                >
                  {/* Main cake slice */}
                  <div className="absolute z-10">
                    <svg width="160" height="160" viewBox="0 0 80 80">
                      <ellipse cx="40" cy="65" rx="30" ry="6" fill="#F2C4A0" opacity="0.4"/>
                      <polygon points="40,10 10,65 70,65" fill="#F2C4A0"/>
                      <polygon points="40,10 15,58 65,58" fill="#FAE0CC"/>
                      <rect x="10" y="57" width="60" height="10" rx="5" fill="#B8A9D9"/>
                      <rect x="10" y="50" width="60" height="9" rx="4" fill="#D4CCF0"/>
                      <ellipse cx="40" cy="12" rx="8" ry="5" fill="#F7E07A"/>
                    </svg>
                  </div>
                  {/* Cupcake top-right */}
                  <div className="absolute top-8 right-8">
                    <svg width="100" height="100" viewBox="0 0 70 70">
                      <ellipse cx="35" cy="62" rx="22" ry="5" fill="#F2C4A0" opacity="0.3"/>
                      <rect x="15" y="42" width="40" height="22" rx="8" fill="#F2C4A0"/>
                      <path d="M12 42 Q35 10 58 42" fill="#B8A9D9"/>
                      <path d="M16 42 Q35 15 54 42" fill="#D4CCF0"/>
                      <circle cx="35" cy="18" r="5" fill="#F7E07A"/>
                    </svg>
                  </div>
                  {/* Cookie bottom-left */}
                  <div className="absolute bottom-12 left-8">
                    <svg width="80" height="80" viewBox="0 0 60 60">
                      <circle cx="30" cy="30" r="26" fill="#F2C4A0"/>
                      <circle cx="30" cy="30" r="24" fill="#FAE0CC"/>
                      <circle cx="20" cy="22" r="4" fill="#B8A9D9"/>
                      <circle cx="35" cy="18" r="3" fill="#B8A9D9"/>
                      <circle cx="40" cy="32" r="4" fill="#7B68B5"/>
                      <circle cx="22" cy="38" r="3" fill="#B8A9D9"/>
                      <circle cx="34" cy="40" r="3.5" fill="#7B68B5"/>
                    </svg>
                  </div>
                  {/* Sparkles */}
                  <div className="absolute top-4 left-12">
                    <Sparkle size={20} color="var(--gold-accent)" />
                  </div>
                  <div className="absolute bottom-20 right-4">
                    <Sparkle size={16} color="var(--lavender-primary)" />
                  </div>
                  <div className="absolute top-20 right-4 opacity-60">
                    <FloatingHeart size={16} color="var(--peach-primary)" />
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
          className="py-24"
          style={{ background: 'white' }}
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
                <Sparkle size={20} color="#F7E07A" />
              </div>
              <div className="absolute bottom-8 -left-8">
                <Sparkle size={16} color="#B8A9D9" />
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
          className="py-24 relative overflow-hidden"
          style={{ background: 'var(--lavender-deep)' }}
        >
          {/* Decorative subtitle */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                  icon: <svg width="60" height="60" viewBox="0 0 60 60"><circle cx="30" cy="30" r="26" fill="#F2C4A0"/><circle cx="30" cy="30" r="24" fill="#FAE0CC"/><circle cx="20" cy="22" r="4" fill="#B8A9D9"/><circle cx="35" cy="18" r="3" fill="#B8A9D9"/><circle cx="40" cy="32" r="4" fill="#7B68B5"/></svg>,
                  title: "Browse & Pick",
                  description: "Choose from our wide selection of freshly baked goods. From cakes to cookies, we have something for everyone."
                },
                {
                  step: "02",
                  icon: <svg width="80" height="40" viewBox="0 0 100 40"><rect x="20" y="15" width="60" height="10" rx="5" fill="#D4CCF0"/><rect x="0" y="10" width="22" height="20" rx="10" fill="#B8A9D9"/><rect x="78" y="10" width="22" height="20" rx="10" fill="#B8A9D9"/></svg>,
                  title: "Schedule Delivery",
                  description: "Pick your preferred delivery date. We require at least 24 hours notice to ensure everything is baked fresh."
                },
                {
                  step: "03",
                  icon: <svg width="60" height="60" viewBox="0 0 60 60"><rect x="15" y="5" width="30" height="50" rx="6" fill="#B8A9D9"/><rect x="18" y="12" width="24" height="36" rx="3" fill="#FAE0CC"/><circle cx="30" cy="46" r="4" fill="#F7E07A"/></svg>,
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
