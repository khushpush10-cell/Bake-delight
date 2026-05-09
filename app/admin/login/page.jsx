"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { Lock, Loader2 } from "lucide-react";
import { getFirebaseAuth, isFirebaseConfigured } from "@/lib/firebase";

// Lavender color scheme
const colors = {
  primary: '#7B68B5',
  primaryHover: '#6A5A9E',
  lavenderSoft: '#B8A9D9',
  lavenderPale: '#D4CCF0',
  lavenderPaleBg: '#F5F0FF',
  textDark: '#2D1F3D',
  textMuted: '#9B8AAA',
  border: '#E0D8F5',
  white: '#FFFFFF',
  background: '#FDF9FF'
};

// Input styles
const inputStyle = {
  width: '100%',
  border: `1.5px solid ${colors.border}`,
  borderRadius: '10px',
  padding: '12px 16px',
  fontSize: '14px',
  fontFamily: "'DM Sans', sans-serif",
  outline: 'none',
  transition: 'all 0.2s',
  background: colors.white,
  color: colors.textDark
};

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: 500,
  color: colors.textDark,
  fontFamily: "'DM Sans', sans-serif",
  marginBottom: '8px'
};

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFirebaseConfigured()) {
      toast.error("Firebase is not configured. Add environment variables on Vercel.");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
      router.push("/admin/dashboard");
    } catch (error) {
      toast.error("Login failed. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  // Input focus style handler
  const handleFocus = (e) => {
    e.target.style.borderColor = colors.lavenderSoft;
    e.target.style.boxShadow = '0 0 0 3px rgba(184,169,217,0.15)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = colors.border;
    e.target.style.boxShadow = 'none';
  };

  return (
    <main 
      className="flex min-h-screen items-center justify-center px-4"
      style={{ background: colors.background }}
    >
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md rounded-2xl p-8 shadow-xl"
        style={{ 
          background: colors.white, 
          border: `1px solid ${colors.border}` 
        }}
      >
        <div className="text-center">
          {/* Lock icon with lavender background */}
          <div 
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
            style={{ background: colors.primary }}
          >
            <Lock size={24} color={colors.white} />
          </div>
          
          {/* Title with Playfair Display */}
          <h1 
            className="mt-4 text-4xl font-bold"
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              color: colors.textDark 
            }}
          >
            Bake Delight
          </h1>
          
          <p 
            className="mt-2"
            style={{ 
              color: colors.textMuted, 
              fontFamily: "'DM Sans', sans-serif" 
            }}
          >
            Admin login
          </p>
          
          {/* Firebase config warning */}
          {!isFirebaseConfigured() && (
            <div 
              className="mt-4 rounded-xl border px-4 py-3 text-sm"
              style={{ 
                borderColor: colors.lavenderPale, 
                background: colors.lavenderPaleBg,
                color: colors.primary
              }}
            >
              <strong>Firebase not configured!</strong><br/>
              Add the 9 environment variables on Vercel, then redeploy.
            </div>
          )}
        </div>
        
        <div className="mt-8 space-y-5">
          {/* Email field */}
          <div>
            <label style={labelStyle} htmlFor="email">
              Email
            </label>
            <input 
              id="email" 
              type="email" 
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={email} 
              onChange={(event) => setEmail(event.target.value)} 
              required 
            />
          </div>
          
          {/* Password field */}
          <div>
            <label style={labelStyle} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              style={inputStyle}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          
          {/* Login button */}
          <button 
            className="w-full rounded-xl py-3 text-sm font-medium text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{ 
              background: loading ? colors.lavenderSoft : colors.primary,
              fontFamily: "'DM Sans', sans-serif"
            }}
            onMouseEnter={(e) => {
              if (!loading) e.currentTarget.style.background = colors.primaryHover;
            }}
            onMouseLeave={(e) => {
              if (!loading) e.currentTarget.style.background = colors.primary;
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </main>
  );
}
