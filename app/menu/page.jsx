import Footer from "@/components/Footer";
import MenuClient from "@/components/MenuClient";
import Navbar from "@/components/Navbar";

export default function MenuPage() {
  return (
    <div className="page-transition min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-heading text-5xl font-bold text-primary">Menu</h1>
          <p className="mt-3 max-w-2xl text-textMuted">
            Choose from fresh cakes, cookies, pastries, cupcakes and brownies.
          </p>
        </div>
        <MenuClient />
      </main>
      <Footer />
    </div>
  );
}
