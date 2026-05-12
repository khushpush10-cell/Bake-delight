import Footer from "@/components/Footer";
import MenuClient from "@/components/MenuClient";
import Navbar from "@/components/Navbar";
import { FloatingHeart, GoldSparkle, LavenderSprig } from "@/components/illustrations/BakeryIllustrations";

export default function MenuPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-section)" }}>
      <Navbar />
      <section className="pattern-dots relative flex h-[280px] items-center justify-center overflow-hidden text-center" style={{ background: "var(--purple-pale)" }}>
        <LavenderSprig size={70} style={{ position: "absolute", left: "10%", top: 34, opacity: 0.35 }} />
        <GoldSparkle size={34} style={{ position: "absolute", bottom: 44, right: "12%", opacity: 0.75 }} />
        <FloatingHeart size={24} style={{ position: "absolute", right: "22%", top: 55, opacity: 0.75 }} />
        <div className="relative z-10">
          <span className="mb-2 block text-[16px]" style={{ color: "var(--purple-deep)", fontFamily: "'Caveat', cursive" }}>
            Fresh from the oven
          </span>
          <h1 className="mb-4 text-[52px] italic">Our Menu</h1>
          <p className="mx-auto max-w-md text-[15px]" style={{ color: "var(--text-medium)" }}>
            Everything baked fresh to order — choose your favourites.
          </p>
          <div className="mx-auto mt-6 h-px w-32" style={{ background: "var(--gold)" }} />
        </div>
      </section>
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <MenuClient />
      </main>
      <Footer />
    </div>
  );
}
