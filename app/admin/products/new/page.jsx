import AdminShell from "@/components/AdminShell";
import ProductForm from "@/components/ProductForm";

export default function NewProductPage() {
  return (
    <AdminShell>
      <h1 className="mb-7 font-heading text-4xl font-bold text-primary">Add New Product</h1>
      <ProductForm />
    </AdminShell>
  );
}
