import Footer from "@/components/Footer";
import MenuClient from "@/components/MenuClient";
import Navbar from "@/components/Navbar";

export default function MenuPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--choc-cream)' }}>
      <Navbar />
      
      {/* Hero Banner */}
      <section 
        className="h-[280px] flex items-center justify-center text-center"
        style={{ background: 'var(--choc-primary)' }}
      >
        <div>
          <h1 
            className="text-[56px] italic mb-4"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              color: 'white',
              fontWeight: 700
            }}
          >
            Our Menu
          </h1>
          <p 
            className="text-[15px] max-w-md mx-auto"
            style={{ 
              color: 'var(--choc-light)',
              fontFamily: "'DM Sans', sans-serif"
            }}
          >
            Everything baked fresh to order — choose your favourites
          </p>
          {/* Ornamental Divider */}
          <div className="flex justify-center mt-6">
            <div 
              className="w-24 h-[2px]"
              style={{ background: 'var(--choc-gold)' }}
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
