'use client';

import Link from "next/link";
import { ArrowRight, Calendar, Phone, ShoppingBag, Star, Leaf } from "lucide-react";
import Footer from "@/components/Footer";
import MenuClient from "@/components/MenuClient";
import Navbar from "@/components/Navbar";

// SVG Components inline for the design
const GoldSparkle = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className}>
    <path d="M7 1L8.4 5.6L13 7L8.4 8.4L7 13L5.6 8.4L1 7L5.6 5.6Z" fill="#D4A840"/>
  </svg>
);

const GoldDiamond = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <polygon points="6,0 12,6 6,12 0,6" fill="#D4A840"/>
  </svg>
);

const PeachHeart = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 18 16" fill="none">
    <path d="M9 14.5C9 14.5 1 9.5 1 4.5C1 2.3 2.8 0.5 5 0.5C6.6 0.5 8 1.4 9 2.8C10 1.4 11.4 0.5 13 0.5C15.2 0.5 17 2.3 17 4.5C17 9.5 9 14.5 9 14.5Z" fill="#F4C2B0" opacity="0.85"/>
  </svg>
);

const SmallGoldDiamond = ({ size = 8 }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" fill="none">
    <polygon points="4,0 8,4 4,8 0,4" fill="#D4A840"/>
  </svg>
);

const OrnamentalCorner = ({ size = 40, rotate = 0 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" style={{ transform: `rotate(${rotate}deg)` }}>
    <path d="M4 4 L4 18 Q4 4 18 4" stroke="#D4A840" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <circle cx="4" cy="4" r="2.5" fill="#D4A840"/>
    <circle cx="11" cy="4" r="1.2" fill="#D4A840" opacity="0.5"/>
    <circle cx="4" cy="11" r="1.2" fill="#D4A840" opacity="0.5"/>
  </svg>
);

const LavenderSprig = ({ size = 80, className = "" }) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 60 80" fill="none" className={className}>
    <line x1="30" y1="75" x2="30" y2="10" stroke="#C4B5E8" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="30" y1="55" x2="18" y2="40" stroke="#C4B5E8" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="30" y1="55" x2="42" y2="40" stroke="#C4B5E8" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="30" y1="45" x2="20" y2="32" stroke="#C4B5E8" strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="30" y1="45" x2="40" y2="32" stroke="#C4B5E8" strokeWidth="1.2" strokeLinecap="round"/>
    <ellipse cx="18" cy="38" rx="4" ry="6" fill="#DDD6F3" transform="rotate(-20 18 38)"/>
    <ellipse cx="42" cy="38" rx="4" ry="6" fill="#DDD6F3" transform="rotate(20 42 38)"/>
    <ellipse cx="20" cy="30" rx="3.5" ry="5.5" fill="#C4B5E8" transform="rotate(-15 20 30)"/>
    <ellipse cx="40" cy="30" rx="3.5" ry="5.5" fill="#C4B5E8" transform="rotate(15 40 30)"/>
    <ellipse cx="30" cy="10" rx="4" ry="7" fill="#DDD6F3"/>
    <ellipse cx="24" cy="14" rx="3" ry="5" fill="#C4B5E8" transform="rotate(-10 24 14)"/>
    <ellipse cx="36" cy="14" rx="3" ry="5" fill="#C4B5E8" transform="rotate(10 36 14)"/>
  </svg>
);

const CakeOnStand = ({ size = 220 }) => (
  <svg width={size} height={size * 1.18} viewBox="0 0 220 260" fill="none">
    <ellipse cx="110" cy="252" rx="55" ry="8" fill="#D4A840" opacity="0.3"/>
    <rect x="95" y="230" width="30" height="22" rx="4" fill="#D4A840" opacity="0.7"/>
    <ellipse cx="110" cy="232" rx="48" ry="8" fill="#D4A840"/>
    <ellipse cx="110" cy="228" rx="44" ry="6" fill="#F7E07A" opacity="0.6"/>
    <rect x="30" y="178" width="160" height="50" rx="14" fill="#C4B5E8"/>
    <rect x="32" y="180" width="156" height="46" rx="12" fill="#DDD6F3"/>
    <path d="M30 192 Q110 186 190 192" stroke="#F4C2B0" strokeWidth="3" fill="none"/>
    <rect x="48" y="130" width="124" height="50" rx="12" fill="#C4B5E8"/>
    <rect x="50" y="132" width="120" height="46" rx="10" fill="#DDD6F3"/>
    <path d="M48 144 Q110 138 172 144" stroke="#F4C2B0" strokeWidth="2.5" fill="none"/>
    <rect x="66" y="88" width="88" height="44" rx="10" fill="#C4B5E8"/>
    <rect x="68" y="90" width="84" height="40" rx="8" fill="#DDD6F3"/>
    <ellipse cx="110" cy="88" rx="46" ry="10" fill="#EDE8FF"/>
    <path d="M72 88 Q85 72 98 82 Q110 68 122 82 Q135 72 148 88" fill="#F4C2B0" opacity="0.8"/>
    <circle cx="88" cy="74" r="8" fill="#F4C2B0"/>
    <circle cx="85" cy="71" r="5" fill="#FAE0D8"/>
    <circle cx="110" cy="68" r="10" fill="#F4C2B0"/>
    <circle cx="107" cy="65" r="6" fill="#FAE0D8"/>
    <circle cx="132" cy="74" r="8" fill="#F4C2B0"/>
    <circle cx="129" cy="71" r="5" fill="#FAE0D8"/>
    <circle cx="110" cy="200" r="22" fill="white" opacity="0.6"/>
    <circle cx="110" cy="200" r="19" fill="none" stroke="#D4A840" strokeWidth="1"/>
    <text x="110" y="207" textAnchor="middle" fontSize="18" fill="#D4A840" fontFamily="Playfair Display, serif" fontStyle="italic">B</text>
    <line x1="28" y1="160" x2="28" y2="100" stroke="#C4B5E8" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="28" cy="103" rx="5" ry="8" fill="#DDD6F3"/>
    <ellipse cx="22" cy="115" rx="4" ry="7" fill="#C4B5E8" transform="rotate(-20 22 115)"/>
    <ellipse cx="34" cy="115" rx="4" ry="7" fill="#C4B5E8" transform="rotate(20 34 115)"/>
    <ellipse cx="22" cy="128" rx="3.5" ry="6" fill="#DDD6F3" transform="rotate(-15 22 128)"/>
    <ellipse cx="34" cy="128" rx="3.5" ry="6" fill="#DDD6F3" transform="rotate(15 34 128)"/>
    <line x1="192" y1="160" x2="192" y2="100" stroke="#C4B5E8" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="192" cy="103" rx="5" ry="8" fill="#DDD6F3"/>
    <ellipse cx="186" cy="115" rx="4" ry="7" fill="#C4B5E8" transform="rotate(-20 186 115)"/>
    <ellipse cx="198" cy="115" rx="4" ry="7" fill="#C4B5E8" transform="rotate(20 198 115)"/>
    <ellipse cx="186" cy="128" rx="3.5" ry="6" fill="#DDD6F3" transform="rotate(-15 186 128)"/>
    <ellipse cx="198" cy="128" rx="3.5" ry="6" fill="#DDD6F3" transform="rotate(15 198 128)"/>
    <rect x="107" y="52" width="6" height="20" rx="3" fill="#EDE8FF"/>
    <ellipse cx="110" cy="50" rx="5" ry="7" fill="#D4A840" opacity="0.9"/>
    <circle cx="110" cy="46" r="3" fill="#F7E07A"/>
  </svg>
);

const Macarons = ({ size = 90 }) => (
  <svg width={size} height={size * 0.78} viewBox="0 0 90 70" fill="none">
    <ellipse cx="30" cy="16" rx="28" ry="14" fill="#C4B5E8"/>
    <ellipse cx="30" cy="16" rx="23" ry="10" fill="#DDD6F3"/>
    <ellipse cx="30" cy="16" rx="16" ry="6" fill="white" opacity="0.2"/>
    <rect x="4" y="27" width="52" height="8" rx="3" fill="#F4C2B0" opacity="0.8"/>
    <ellipse cx="30" cy="42" rx="28" ry="14" fill="#C4B5E8"/>
    <ellipse cx="30" cy="42" rx="23" ry="10" fill="#DDD6F3"/>
    <ellipse cx="68" cy="20" rx="20" ry="10" fill="#F4C2B0"/>
    <ellipse cx="68" cy="20" rx="16" ry="7" fill="#FAE0D8"/>
    <rect x="50" y="28" width="36" height="6" rx="3" fill="#C4B5E8" opacity="0.6"/>
    <ellipse cx="68" cy="36" rx="20" ry="10" fill="#F4C2B0"/>
    <ellipse cx="68" cy="36" rx="16" ry="7" fill="#FAE0D8"/>
  </svg>
);

const Cupcake = ({ size = 70 }) => (
  <svg width={size} height={size * 1.07} viewBox="0 0 70 75" fill="none">
    <path d="M15 42 Q10 58 12 65 Q35 70 58 65 Q60 58 55 42Z" fill="#DDD6F3"/>
    <path d="M17 44 Q13 57 15 64 Q35 68 55 64 Q57 57 53 44Z" fill="#EDE8FF"/>
    <path d="M12 44 Q20 20 35 16 Q50 20 58 44Z" fill="#C4B5E8"/>
    <path d="M14 44 Q22 22 35 18 Q48 22 56 44Z" fill="#DDD6F3"/>
    <path d="M16 43 Q24 26 35 22 Q46 26 54 43" fill="#F4C2B0" opacity="0.7"/>
    <path d="M18 43 Q26 28 35 24 Q44 28 52 43" fill="#FAE0D8" opacity="0.9"/>
    <circle cx="35" cy="19" r="6" fill="#F4C2B0"/>
    <circle cx="35" cy="15" r="4" fill="#FAE0D8"/>
    <rect x="33" y="6" width="4" height="11" rx="2" fill="#EDE8FF"/>
    <ellipse cx="35" cy="5" rx="3.5" ry="5" fill="#D4A840"/>
    <circle cx="35" cy="3" r="2.5" fill="#F7E07A"/>
  </svg>
);

const ClipboardIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="12" y="8" width="24" height="32" rx="4" stroke="white" strokeWidth="2" fill="none"/>
    <rect x="20" y="4" width="8" height="6" rx="2" fill="white"/>
    <line x1="18" y1="20" x2="30" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="18" y1="26" x2="30" y2="26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="18" y1="32" x2="26" y2="32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CalendarClockIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="8" y="10" width="32" height="28" rx="4" stroke="white" strokeWidth="2" fill="none"/>
    <line x1="8" y1="18" x2="40" y2="18" stroke="white" strokeWidth="2"/>
    <line x1="16" y1="6" x2="16" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="32" y1="6" x2="32" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="28" cy="28" r="6" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M28 24V28L31 31" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const GiftBoxIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="8" y="16" width="32" height="28" rx="4" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M24 16V44" stroke="white" strokeWidth="2"/>
    <path d="M8 24H40" stroke="white" strokeWidth="2"/>
    <path d="M16 8 Q24 4 24 16" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M32 8 Q24 4 24 16" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="24" cy="12" r="3" fill="white"/>
  </svg>
);

const GoldDivider = ({ width = 120 }) => (
  <div className="gold-divider" style={{ width }}>
    <div className="gold-divider-line" />
    <GoldDiamond />
    <div className="gold-divider-line" />
  </div>
);

const SectionHeader = ({ tag, title, light = false, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    {tag && (
      <span 
        className="text-[10px] uppercase tracking-[3px] mb-3 block"
        style={{ 
          color: light ? 'var(--peach-primary)' : 'var(--text-muted)',
          fontFamily: "'DM Sans', sans-serif"
        }}
      >
        {tag}
      </span>
    )}
    <h2 
      className="text-[clamp(2rem,4vw,3rem)] leading-tight"
      style={{ 
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        fontStyle: 'italic',
        color: light ? 'white' : 'var(--text-dark)'
      }}
    >
      {title}
    </h2>
    <div className={`mt-6 ${centered ? 'flex justify-center' : ''}`}>
      <GoldDivider />
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-main)' }}>
      <Navbar />
      <main>
        {/* SECTION 1 — Hero */}
        <section 
          className="min-h-[90vh] grid lg:grid-cols-[55%_45%] items-center gap-16"
          style={{ 
            background: 'var(--bg-main)',
            padding: '60px 80px'
          }}
        >
          {/* LEFT SIDE — Content */}
          <div className="flex flex-col">
            {/* Gold-bordered tag with diamond corners */}
            <div className="relative w-fit mb-6">
              <div className="absolute -top-1 -left-1"><SmallGoldDiamond /></div>
              <div className="absolute -top-1 -right-1"><SmallGoldDiamond /></div>
              <div className="absolute -bottom-1 -left-1"><SmallGoldDiamond /></div>
              <div className="absolute -bottom-1 -right-1"><SmallGoldDiamond /></div>
              <div 
                className="px-5 py-2 text-[11px] uppercase tracking-[3px]"
                style={{ 
                  border: '1px solid var(--gold)',
                  borderRadius: '4px',
                  color: 'var(--text-dark)',
                  fontFamily: "'DM Sans', sans-serif"
                }}
              >
                ✦ ARTISAN HOME BAKERY ✦
              </div>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-[clamp(3.2rem,6vw,5.5rem)] leading-[1.1] mb-4"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontStyle: 'italic',
                color: 'var(--text-dark)'
              }}
            >
              Freshly<br />Baked<br />With Love
            </h1>

            <GoldDivider width={120} />

            <p 
              className="text-[15px] leading-[1.8] max-w-[380px] mt-4 mb-8"
              style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Delicate bakes, crafted at home with the finest ingredients and a whole lot of love.
            </p>

            <div className="flex gap-4 mb-6">
              <Link 
                href="/menu" 
                className="btn-primary-lav"
                style={{ padding: '14px 32px', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}
              >
                Browse Menu
              </Link>
              <Link 
                href="#how-it-works" 
                className="btn-secondary-lav"
                style={{ padding: '12px 28px', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}
              >
                How It Works
              </Link>
            </div>

            <p 
              className="text-[12px]"
              style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}
            >
              ✦ Fresh daily  ·  24hr advance  ·  WhatsApp ordering
            </p>
          </div>

          {/* RIGHT SIDE — Illustration Circle */}
          <div className="relative flex items-center justify-center hidden lg:flex">
            <div 
              className="relative overflow-hidden"
              style={{ 
                width: '420px', 
                height: '420px', 
                borderRadius: '50%',
                background: 'radial-gradient(circle at 40% 40%, #F5F0FF 0%, #FAE0D8 100%)',
                border: '1px solid var(--border)'
              }}
            >
              <div className="absolute top-3 left-3"><OrnamentalCorner size={40} rotate={0} /></div>
              <div className="absolute top-3 right-3"><OrnamentalCorner size={40} rotate={90} /></div>
              <div className="absolute bottom-3 left-3"><OrnamentalCorner size={40} rotate={-90} /></div>
              <div className="absolute bottom-3 right-3"><OrnamentalCorner size={40} rotate={180} /></div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 float-animation">
                <CakeOnStand size={220} />
              </div>

              <div className="absolute bottom-16 right-8 float-animation" style={{ animationDelay: '0.5s' }}>
                <Macarons size={90} />
              </div>

              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 float-animation" style={{ animationDelay: '1s' }}>
                <Cupcake size={70} />
              </div>

              <div className="absolute top-16 left-16" style={{ animation: 'heartFloat 3s ease-in-out infinite' }}>
                <PeachHeart size={18} />
              </div>
              <div className="absolute top-24 right-20" style={{ animation: 'heartFloat 3s ease-in-out infinite', animationDelay: '0.5s' }}>
                <PeachHeart size={16} />
              </div>
              <div className="absolute bottom-32 left-20" style={{ animation: 'heartFloat 3s ease-in-out infinite', animationDelay: '1s' }}>
                <PeachHeart size={14} />
              </div>

              <div className="absolute top-20 left-24 sparkle-animation"><GoldSparkle size={14} /></div>
              <div className="absolute top-32 right-16 sparkle-animation" style={{ animationDelay: '0.3s' }}><GoldSparkle size={12} /></div>
              <div className="absolute bottom-24 right-24 sparkle-animation" style={{ animationDelay: '0.6s' }}><GoldSparkle size={16} /></div>
              <div className="absolute top-40 left-12 sparkle-animation" style={{ animationDelay: '0.9s' }}><GoldSparkle size={10} /></div>
              <div className="absolute bottom-40 left-32 sparkle-animation" style={{ animationDelay: '1.2s' }}><GoldSparkle size={14} /></div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Peach Marquee Strip */}
        <section 
          className="overflow-hidden py-3 flex items-center"
          style={{ background: 'var(--peach-primary)', height: '48px' }}
        >
          <div className="marquee-track flex items-center">
            {[...Array(4)].map((_, i) => (
              <span 
                key={i}
                className="mx-8 text-[18px]"
                style={{ 
                  color: 'var(--text-dark)', 
                  fontFamily: "'Caveat', cursive",
                  letterSpacing: '1px'
                }}
              >
                ♡ Custom Cakes  ·  Butter Cookies  ·  Fresh Croissants  ·  Cupcakes  ·  Brownies  ·  Made With Love  ·
              </span>
            ))}
          </div>
        </section>

        {/* SECTION 3 — Bestsellers */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'white', padding: '80px' }}>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2" style={{ opacity: 0.08 }}>
            <LavenderSprig size={120} />
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 scale-x-[-1]" style={{ opacity: 0.08 }}>
            <LavenderSprig size={120} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <SectionHeader tag="Our Selection" title="Our Bestsellers" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
              <MenuClient featuredOnly limitCount={6} />
            </div>
            <div className="text-center mt-12">
              <Link 
                href="/menu" 
                className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[2px] transition-all duration-300 group"
                style={{ color: 'var(--purple-primary)', fontFamily: "'DM Sans', sans-serif" }}
              >
                View Full Menu 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Our Story */}
        <section className="grid lg:grid-cols-2" style={{ minHeight: '500px' }}>
          <div className="relative flex items-center justify-center p-12 overflow-hidden" style={{ background: 'var(--purple-lightest)' }}>
            <div className="absolute top-4 left-4" style={{ opacity: 0.15 }}><LavenderSprig size={80} /></div>
            <div className="absolute bottom-4 right-4" style={{ opacity: 0.15 }}><LavenderSprig size={80} /></div>
            <div className="relative float-animation">
              <CakeOnStand size={240} />
              <div className="absolute -top-4 -right-4 sparkle-animation"><GoldSparkle size={20} /></div>
              <div className="absolute bottom-8 -left-8 sparkle-animation" style={{ animationDelay: '0.3s' }}><GoldSparkle size={16} /></div>
              <div className="absolute top-8 -left-4" style={{ animation: 'heartFloat 3s ease-in-out infinite' }}><PeachHeart size={16} /></div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center p-12 lg:p-16" style={{ background: 'var(--purple-primary)' }}>
            <div 
              className="inline-block mb-5 px-4 py-1.5 text-[11px] uppercase tracking-[2px]"
              style={{ 
                background: 'var(--peach-pale)',
                color: 'var(--purple-primary)',
                border: '1px solid var(--peach-primary)',
                borderRadius: '20px',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              ✦ OUR STORY
            </div>
            <h2 
              className="text-[44px] leading-[1.2] italic mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontWeight: 700 }}
            >
              Baked Fresh<br />Every Single Day
            </h2>
            <div className="my-4">
              <GoldDivider width={120} />
            </div>
            <p 
              className="text-[15px] leading-[1.8] mb-8 max-w-md"
              style={{ color: 'rgba(255,255,255,0.8)', fontFamily: "'DM Sans', sans-serif" }}
            >
              Bake Delight began in a tiny home kitchen with a dream to create bakes that taste like love. Every order is freshly made with premium ingredients and delicate care, just for you.
            </p>
            <div className="grid grid-cols-3 gap-6" style={{ maxWidth: '400px' }}>
              {[
                { icon: <ShoppingBag size={24} />, num: "200+", label: "ORDERS" },
                { icon: <Star size={24} />, num: "5 Star", label: "RATING" },
                { icon: <Leaf size={24} />, num: "100%", label: "FRESH" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="mb-2 flex justify-center" style={{ color: 'rgba(255,255,255,0.5)' }}>{stat.icon}</div>
                  <div className="text-[28px] font-bold" style={{ fontFamily: "'Playfair Display', serif", color: 'white' }}>{stat.num}</div>
                  <div className="text-[11px] tracking-[2px]" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'DM Sans', sans-serif" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — Testimonials */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--bg-main)', padding: '80px' }}>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2" style={{ opacity: 0.07 }}>
            <LavenderSprig size={100} />
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 scale-x-[-1]" style={{ opacity: 0.07 }}>
            <LavenderSprig size={100} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <SectionHeader tag="Testimonials" title="What Our Customers Say" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Ananya S.", city: "Karachi", review: "Every cake we order feels like a dream! So soft, fresh, and beautifully made. You can taste the love.", initials: "AS" },
                { name: "Mariam R.", city: "Lahore", review: "The best brownies I've ever had. Perfectly fudgy and not too sweet. Will definitely order again!", initials: "MR" },
                { name: "Sana K.", city: "Islamabad", review: "Absolutely gorgeous cupcakes and amazing service. My go-to for every celebration now!", initials: "SK" }
              ].map((testimonial, index) => (
                <div 
                  key={index}
                  className="rounded-[20px] p-8"
                  style={{ background: 'white', border: '1px solid var(--border)' }}
                >
                  <span className="text-[72px] leading-[0.5] block mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--purple-soft)' }}>
                    &ldquo;
                  </span>
                  <p className="text-[16px] leading-[1.7] italic mb-4" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-dark)' }}>
                    {testimonial.review}
                  </p>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: 'var(--gold)', fontSize: '16px' }}>★</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium" style={{ background: 'var(--purple-medium)' }}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--text-dark)', fontFamily: "'DM Sans', sans-serif" }}>{testimonial.name}</p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: "'DM Sans', sans-serif" }}>{testimonial.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — How It Works */}
        <section id="how-it-works" className="py-20 relative overflow-hidden" style={{ background: 'var(--purple-primary)', padding: '80px' }}>
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-4">
              <span className="text-[20px]" style={{ color: 'var(--peach-primary)', fontFamily: "'Caveat', cursive" }}>
                Simple, Fresh, Delicious
              </span>
            </div>
            <SectionHeader title="How It Works" light={true} />

            <div className="flex flex-col md:flex-row items-center justify-center gap-0">
              {[
                { step: "01", icon: <ClipboardIcon />, title: "Browse & Pick", description: "Choose from our wide selection of freshly baked goods. From cakes to cookies, we have something for everyone." },
                { step: "02", icon: <CalendarClockIcon />, title: "Schedule Delivery", description: "Pick your preferred delivery date. We require at least 24 hours notice to ensure everything is baked fresh." },
                { step: "03", icon: <GiftBoxIcon />, title: "Freshly Made For You", description: "We bake it fresh and deliver it warm to your doorstep, ready to make your day sweeter." }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="relative rounded-[20px] p-9 text-center min-w-[280px]"
                    style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                  >
                    <span 
                      className="absolute top-4 right-5 text-[52px] font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", color: 'var(--gold)', opacity: 0.2 }}
                    >
                      {item.step}
                    </span>
                    <div className="mb-5 flex justify-center">{item.icon}</div>
                    <h3 className="text-[22px] mb-2" style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'DM Sans', sans-serif" }}>
                      {item.description}
                    </p>
                  </div>
                  {index < 2 && <div className="text-white text-[24px] opacity-50 mx-4 hidden md:block">→</div>}
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
