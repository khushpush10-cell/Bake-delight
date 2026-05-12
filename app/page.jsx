"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Gift, Heart, ListChecks, ShoppingBag, Star } from "lucide-react";
import Footer from "@/components/Footer";
import MenuClient from "@/components/MenuClient";
import Navbar from "@/components/Navbar";
import { CakeOnStand, FloatingHeart, GoldSparkle, LavenderSprig, Macaron, OrnamentalCorner } from "@/components/illustrations/BakeryIllustrations";

const GoldDiamond = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <polygon points="6,0 12,6 6,12 0,6" fill="#D4A840" />
  </svg>
);

const GoldDivider = ({ width = 120, centered = false }) => (
  <div className={`gold-divider ${centered ? "mx-auto" : ""}`} style={{ width }} aria-hidden="true">
    <div className="gold-divider-line" />
    <GoldDiamond />
    <div className="gold-divider-line" />
  </div>
);

const SectionHeader = ({ tag, title, light = false }) => (
  <div className="mb-12 text-center">
    {tag && (
      <span className="mb-3 block text-[10px] uppercase tracking-[3px]" style={{ color: light ? "var(--peach-primary)" : "var(--text-muted)" }}>
        {tag}
      </span>
    )}
    <h2 className="text-[clamp(2.2rem,4vw,3.25rem)] italic" style={{ color: light ? "white" : "var(--text-dark)" }}>
      {title}
    </h2>
    <div className="mt-5 flex justify-center">
      <GoldDivider />
    </div>
  </div>
);

const Cupcake = () => (
  <svg width="65" height="72" viewBox="0 0 65 72" fill="none" aria-hidden="true">
    <path d="M14 40 Q9 55 11 62 Q32 67 54 62 Q56 55 51 40Z" fill="#DDD6F3" />
    <path d="M16 42 Q12 55 14 62 Q32 66 51 62 Q53 55 49 42Z" fill="#EDE8FF" />
    <path d="M11 42 Q19 18 32 14 Q46 18 54 42Z" fill="#C4B5E8" />
    <path d="M13 42 Q21 20 32 16 Q44 20 52 42Z" fill="#DDD6F3" />
    <path d="M15 41 Q23 24 32 20 Q42 24 50 41" fill="#F4C2B0" opacity="0.8" />
    <path d="M17 41 Q25 26 32 22 Q40 26 48 41" fill="#FAE0D8" />
    <circle cx="32" cy="17" r="6" fill="#F4C2B0" />
    <circle cx="32" cy="13" r="4" fill="#FAE0D8" />
    <rect x="30" y="4" width="4" height="11" rx="2" fill="#EDE8FF" />
    <ellipse cx="32" cy="3" rx="3.5" ry="5" fill="#D4A840" />
    <circle cx="32" cy="1" r="2.5" fill="#F7E07A" />
  </svg>
);

const heroSparkles = [
  { top: "55px", right: "45px", size: 16, delay: "0s" },
  { top: "160px", left: "18px", size: 12, delay: "1s" },
  { bottom: "90px", right: "18px", size: 14, delay: "0.5s" },
  { bottom: "160px", left: "45px", size: 10, delay: "1.5s" },
  { top: "100px", right: "15px", size: 11, delay: "2s" }
];

const testimonials = [
  ["Ananya S.", "Karachi", "The lavender cake was like a dream! So light, so fresh, and beautifully made. You can taste the love."],
  ["Mariam R.", "Lahore", "The best brownies I've ever had. Perfectly fudgy and not too sweet. Will definitely order again!"],
  ["Sana K.", "Islamabad", "Absolutely gorgeous cupcakes and amazing service. My go-to for every celebration now!"]
];

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)" }}>
      <Navbar />
      <main>
        <section className="hero-section grid min-h-[90vh] items-center gap-16 lg:grid-cols-[55%_45%]" style={{ padding: "60px 80px" }}>
          <div className="hero-left flex flex-col">
            <div className="relative mb-6 inline-flex w-fit items-center gap-2 px-5 py-2 text-[11px] uppercase tracking-[3px]" style={{ border: "1.5px solid var(--gold)", borderRadius: 4 }}>
              <GoldDiamond size={8} />
              <span>✦ ARTISAN HOME BAKERY ✦</span>
              <GoldDiamond size={8} />
              <span className="absolute -left-1 -top-1"><GoldDiamond size={8} /></span>
              <span className="absolute -right-1 -top-1"><GoldDiamond size={8} /></span>
              <span className="absolute -bottom-1 -left-1"><GoldDiamond size={8} /></span>
              <span className="absolute -bottom-1 -right-1"><GoldDiamond size={8} /></span>
            </div>
            <h1 className="mb-4 max-w-[700px] text-[clamp(3.2rem,6vw,5.5rem)] italic leading-[1.1]">
              Freshly Baked With Love
            </h1>
            <GoldDivider />
            <p className="mt-4 max-w-[380px] text-[15px] leading-[1.8]" style={{ color: "var(--text-muted)" }}>
              Delicate bakes, crafted at home with the finest ingredients and a whole lot of love.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/menu" className="btn-primary-lav uppercase tracking-[1px]">Browse Menu</Link>
              <Link href="#how-it-works" className="btn-secondary-lav uppercase tracking-[1px]">How It Works</Link>
            </div>
            <p className="mt-4 text-[12px]" style={{ color: "var(--text-muted)" }}>
              ✦ Fresh daily  ·  24hr advance  ·  WhatsApp ordering
            </p>
          </div>

          <div className="hero-illustration-area relative hidden items-center justify-center lg:flex">
            <div className="relative h-[420px] w-[420px] overflow-hidden rounded-full" style={{ background: "radial-gradient(circle at 40% 40%, #F5F0FF 0%, #FAE0D8 100%)", border: "1px solid var(--border)" }}>
              <OrnamentalCorner size={36} style={{ position: "absolute", top: 16, left: 16 }} />
              <OrnamentalCorner size={36} style={{ position: "absolute", top: 16, right: 16, transform: "rotate(90deg)" }} />
              <OrnamentalCorner size={36} style={{ position: "absolute", bottom: 16, right: 16, transform: "rotate(180deg)" }} />
              <OrnamentalCorner size={36} style={{ position: "absolute", bottom: 16, left: 16, transform: "rotate(270deg)" }} />
              <div className="float-animation absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CakeOnStand size={260} />
              </div>
              <div className="float-side absolute bottom-[100px] right-[30px]">
                <Macaron size={100} color="#C4B5E8" />
              </div>
              <div className="float-animation absolute right-[70px] top-[30px]" style={{ animationDuration: "6s" }}>
                <Cupcake />
              </div>
              {[{ top: "75px", left: "40px", size: 20 }, { bottom: "110px", right: "40px", size: 16 }, { top: "200px", left: "15px", size: 14 }].map((heart, index) => (
                <FloatingHeart key={index} size={heart.size} style={{ position: "absolute", ...heart, animation: `heartFloat 4s ease-in-out ${index * 0.6}s infinite` }} />
              ))}
              {heroSparkles.map((sparkle, index) => (
                <GoldSparkle key={index} size={sparkle.size} style={{ position: "absolute", ...sparkle, animation: `sparkle 3s ease-in-out ${sparkle.delay} infinite` }} />
              ))}
            </div>
          </div>
        </section>

        <section className="flex h-12 items-center overflow-hidden" style={{ background: "var(--peach-primary)" }}>
          <div className="marquee-track flex items-center">
            {[0, 1].map((item) => (
              <span key={item} className="mx-8 text-[18px]" style={{ fontFamily: "'Caveat', cursive" }}>
                ♡ Custom Cakes  ·  Butter Cookies  ·  Fresh Croissants  ·  Cupcakes  ·  Brownies  ·  Made With Love  ·
              </span>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-20">
          <LavenderSprig size={150} style={{ position: "absolute", left: -20, top: "28%", opacity: 0.07 }} />
          <LavenderSprig size={150} style={{ position: "absolute", right: -20, top: "28%", opacity: 0.07, transform: "scaleX(-1)" }} />
          <div className="relative z-10 mx-auto max-w-6xl">
            <SectionHeader tag="OUR SELECTION" title="Our Bestsellers" />
            <MenuClient featuredOnly limitCount={6} />
            <div className="mt-12 text-center">
              <Link href="/menu" className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[2px]" style={{ color: "var(--purple-primary)" }}>
                View Full Menu <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="about-strip grid min-h-[500px] lg:grid-cols-2">
          <div className="relative flex items-center justify-center overflow-hidden p-12" style={{ background: "var(--purple-lightest)" }}>
            <LavenderSprig size={120} style={{ position: "absolute", left: 30, bottom: 30, opacity: 0.16 }} />
            <LavenderSprig size={120} style={{ position: "absolute", right: 30, top: 30, opacity: 0.16, transform: "scaleX(-1)" }} />
            <div className="float-animation relative">
              <CakeOnStand size={300} />
              <GoldSparkle size={20} style={{ position: "absolute", right: -10, top: 0 }} />
              <FloatingHeart size={18} style={{ position: "absolute", left: -20, top: 55 }} />
            </div>
          </div>
          <div className="flex flex-col justify-center p-10 lg:p-16" style={{ background: "linear-gradient(145deg, #7B68B5, #4A3880)" }}>
            <span className="mb-5 w-fit px-4 py-1.5 text-[11px] uppercase tracking-[2px]" style={{ background: "var(--peach-pale)", color: "var(--purple-primary)" }}>
              ✦ OUR STORY
            </span>
            <h2 className="mb-4 text-[44px] italic leading-[1.2] text-white">Baked Fresh Every Single Day</h2>
            <GoldDivider />
            <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-white/80">
              Bake Delight began in a tiny home kitchen with a dream to create bakes that taste like love. Every order is freshly made with premium ingredients and delicate care, just for you.
            </p>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-6">
              {[["200+", "Orders", <ShoppingBag key="bag" />], ["5 Star", "Rating", <Star key="star" />], ["100%", "Fresh", <Heart key="heart" />]].map(([value, label, icon]) => (
                <div key={label} className="border-r border-white/25 text-center last:border-r-0">
                  <div className="mb-2 flex justify-center text-[var(--peach-primary)]">{icon}</div>
                  <div className="font-heading text-[32px] italic leading-none text-white">{value}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[2px] text-white/70">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-20 lg:px-20">
          <LavenderSprig size={120} style={{ position: "absolute", left: 0, top: "35%", opacity: 0.07 }} />
          <LavenderSprig size={120} style={{ position: "absolute", right: 0, top: "35%", opacity: 0.07, transform: "scaleX(-1)" }} />
          <div className="relative z-10 mx-auto max-w-6xl">
            <SectionHeader title="What Our Customers Say" />
            <div className="grid gap-7 md:grid-cols-3">
              {testimonials.map(([name, city, review]) => (
                <article key={name} className="rounded-[20px] bg-white p-8" style={{ border: "1px solid var(--border)" }}>
                  <div className="font-heading text-[72px] leading-[0.5]" style={{ color: "var(--purple-soft)" }}>&ldquo;</div>
                  <p className="mt-2 font-heading text-[17px] italic leading-[1.7]">{review}</p>
                  <div className="mt-5 text-[var(--gold)]">★★★★★</div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--purple-medium)] text-sm font-medium text-white">{name.split(" ").map((p) => p[0]).join("")}</div>
                    <div>
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>{city}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="px-6 py-20 lg:px-20" style={{ background: "var(--purple-primary)" }}>
          <div className="mx-auto max-w-6xl">
            <div className="text-center text-[20px]" style={{ color: "var(--peach-primary)", fontFamily: "'Caveat', cursive" }}>Simple, Fresh, Delicious</div>
            <SectionHeader title="How It Works" light />
            <div className="steps-row flex flex-col items-center justify-center gap-5 md:flex-row">
              {[
                ["01", <ListChecks key="list" size={48} />, "Choose Your Favorites", "Browse our menu and pick your favorite bakes."],
                ["02", <CalendarDays key="calendar" size={48} />, "Place Your Order", "Order at least 24hrs in advance via WhatsApp."],
                ["03", <Gift key="gift" size={48} />, "Freshly Made For You", "We bake it fresh and deliver with care."]
              ].map(([step, icon, title, text], index) => (
                <div key={step} className="flex items-center">
                  <article className="relative min-h-[210px] w-[280px] rounded-[20px] p-8 text-center text-white" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }}>
                    <span className="absolute right-5 top-3 font-heading text-[52px] text-white/15">{step}</span>
                    <div className="mb-5 flex justify-center">{icon}</div>
                    <h3 className="text-[22px] italic text-white">{title}</h3>
                    <p className="mt-2 text-[13px] leading-[1.6] text-white/70">{text}</p>
                  </article>
                  {index < 2 && <span className="mx-4 hidden text-3xl text-white/50 md:inline">→</span>}
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
