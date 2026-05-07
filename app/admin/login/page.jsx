"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { Lock } from "lucide-react";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFirebaseConfigured()) {
      toast.error("Firebase is not configured yet. Add Firebase keys on Vercel and create an admin user in Firebase Auth.");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
      router.push("/admin/dashboard");
    } catch (error) {
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl border border-border bg-surface p-7 shadow-card">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-surface">
            <Lock size={24} />
          </div>
          <h1 className="mt-4 font-heading text-4xl font-bold text-primary">Bake Delight</h1>
          <p className="mt-2 text-textMuted">Admin login</p>
          {!isFirebaseConfigured() && (
            <p className="mt-3 rounded-xl border border-gold bg-gold/10 px-3 py-2 text-sm font-semibold text-textDark">
              Firebase keys are missing on this deployment. Add them in Vercel, then login with the admin email you create in Firebase Auth.
            </p>
          )}
        </div>
        <div className="mt-7 space-y-4">
          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input id="email" type="email" className="field" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </div>
          <div>
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="field"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button className="btn-primary w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </form>
    </main>
  );
}
