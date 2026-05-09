import AdminSidebar from "@/components/AdminSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";
import AuthGate from "@/components/AuthGate";

export default function AdminShell({ children }) {
  return (
    <AuthGate>
      <div className="min-h-screen bg-[#FAF7FF] md:flex">
        <AdminSidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-20 md:pb-8">{children}</main>
        <MobileBottomNav />
      </div>
    </AuthGate>
  );
}
