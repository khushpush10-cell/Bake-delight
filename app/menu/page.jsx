import Footer from "@/components/Footer";
import MenuClient from "@/components/MenuClient";
import Navbar from "@/components/Navbar";
import { Sparkle, FloatingHeart, WheatSprig } from "@/components/illustrations/BakeryIllustrations";

export default function MenuPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-section)' }}>
      <Navbar />
      
      {/* Hero Banner - Pastel */}
      <section 
        className="h-[280px] flex items-center justify-center text-center relative overflow-hidden pattern-dots"
        style={{ background: 'var(--lavender-pale)' }}
      >
        {/* Decorative illustrations */}
        <div className="absolute top-8 left-[10%] opacity-40">
          <WheatSprig size={60} />
        </div>
        <div className="absolute bottom-8 right-[10%] opacity-30">
          <Sparkle size={40} color="var(--gold-accent)" />
        </div>
        <div className="absolute top-12 right-[20%] opacity-50">
          <FloatingHeart size={24} color="var(--peach-primary)" />
        </div>

        <div className="relative z-10">
          <span 
            className="text-[16px] uppercase tracking-[2px] block mb-2"
            style={{ color: 'var(--lavender-deep)', fontFamily: "'Caveat', cursive" }}
          >
            Fresh from the oven
          </span>
          <h1 
            className="text-[52px] italic mb-4"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              color: 'var(--text-dark)',
              fontWeight: 700
            }}
          >
            Our Menu
          </h1>
          <p 
            className="text-[15px] max-w-md mx-auto"
            style={{ 
              color: 'var(--text-medium)',
              fontFamily: "'DM Sans', sans-serif"
            }}
          >
            Everything baked fresh to order — choose your favourites
          </p>
          {/* Ornamental Divider */}
          <div className="flex justify-center mt-6">
            <div 
              className="w-24 h-[2px]"
              style={{ background: 'var(--lavender-primary)' }}
            />
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <MenuClient />
      </main>
      
      <Footer />
    </div>
  );
}
