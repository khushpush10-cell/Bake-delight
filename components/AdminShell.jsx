import AdminSidebar from "@/components/AdminSidebar";
import AuthGate from "@/components/AuthGate";

export default function AdminShell({ children }) {
  return (
    <AuthGate>
      <div className="min-h-screen bg-background md:flex">
        <AdminSidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </AuthGate>
  );
}
